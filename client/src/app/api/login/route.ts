import { User } from "@/db/models/user.model"
import { comparePassword } from "@/helpers/bcryptjs"
import { signToken } from "@/helpers/jwt"
import { cookies } from "next/headers"
import { NextResponse } from "next/server"
import { z } from "zod"

const schema = z.object({
    email: z.string().email("Invalid email format").min(1, "Email required"),
    password: z.string().min(5, "Minimum password 5 character")
})

export async function POST(request: Request) {
    try {
        
        const body = await request.json()

        const { email, password } = schema.parse(body)

        const user = await User.findByEmail(email)
        if(!user) {
            return NextResponse.json(
                {error: "Invalid email or password"},
                {status: 400}
            )
        }

        const comparePass = comparePassword(password, user.password)
        if(!comparePass) {
            return NextResponse.json(
                {error: "Invalid email or password"},
                {status: 400}
            )
        }

        const token = await signToken({
            _id: user._id.toString(),
            email: user.email
        })

        const cookiesStore = cookies();

        cookiesStore.set("Authorization", `Bearer ${token}`, {
            httpOnly: true,
            path: "/"
        })

        return NextResponse.json({message: "Login successful"})
    } catch (error) {
        console.log(error);

        return NextResponse.json({ error: "An error occured" }, { status: 400 })
        
    }
    return 
}