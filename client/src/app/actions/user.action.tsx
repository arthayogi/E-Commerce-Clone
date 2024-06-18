"use server"

import { cookies } from "next/headers"
import { redirect } from "next/navigation"

export const logoutAction = () => {
    const cookiesStore = cookies()

    cookiesStore.delete("Authorization")
    redirect("/")
}