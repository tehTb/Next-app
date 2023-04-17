import type { NextAuthOptions } from "next-auth"
import NextAuth from "next-auth"
import jwt from 'jsonwebtoken'
import BattleNetProvider from "next-auth/providers/battlenet";

export const authOptions: NextAuthOptions = {
  providers: [
    BattleNetProvider({
      clientId: process.env.NODE_ENV,
      clientSecret: "",
      issuer: 'https://eu.battle.net/oauth'
    })
  ],
  // jwt: {
  //   async encode({ secret, token }) {
  //     return jwt.sign(token, secret)
  //   },
  //   async decode({ secret, token }) {
  //     return jwt.verify(token, secret)
  //   },
  // },
}

export default NextAuth(authOptions)