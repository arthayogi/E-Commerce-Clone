import jwt, { JwtPayload } from "jsonwebtoken"
import * as jose from "jose"

const JWT_SECRET = "pusing"
const JWT_SECRET_JOSE = new TextEncoder().encode(JWT_SECRET)

export const signToken = (payload: JwtPayload) =>
    jwt.sign(payload, JWT_SECRET)

export const verifyToken = async (token: string) => {
  return await jose.jwtVerify<{ _id: string }>(token, JWT_SECRET_JOSE);
}