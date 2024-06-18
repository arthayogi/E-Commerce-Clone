import { Wishlist } from "@/db/models/wishlist.model"
import { headers } from "next/headers"
import { NextResponse } from "next/server"

export const GET = async (request: Request) => {
    const h = headers()
    const userId = h.get('x-user-id')!
    const wishlist = await Wishlist.findAllByUserId(userId)
    return NextResponse.json(wishlist)
}