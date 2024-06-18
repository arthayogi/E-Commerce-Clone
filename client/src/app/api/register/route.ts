import { User } from "@/db/models/user.model";
import { TUser } from "@/db/types";
import { hashPassword } from "@/helpers/bcryptjs";
import { NextResponse } from "next/server";
import { z } from "zod";

const schema = z.object({
    email: z.string().email("Invalid email/password").min(1, "Please enter your email"),
    password: z.string().min(5, "Minimum password 5 length")
})

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const { email, password } = schema.parse(body)

    const checkEmailDupe = await User.findByEmail(email)

    if (checkEmailDupe) {
      return NextResponse.json(
        { error: "Email already exist" },
        { status: 400 }
      )
    }

    const hashPass = hashPassword(password)

    const newInput: TUser = {
        email,
        password: hashPass,
        createdAt: new Date(),
        updatedAt: new Date()

    }
    const userAdd = await User.register(newInput);
    return Response.json(
      { data: userAdd, message: "POST user/register" },
      { status: 201 }
    );
  } catch (error) {
    if (error instanceof z.ZodError) {
      return Response.json(
        { error: error.issues[0].message, message: "POST user/register" },
        { status: 400 }
      );
    }

    return Response.json(
      { error: error, message: "Internal Server Error" },
      { status: 500 }
    );
  }
}
