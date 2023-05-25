import { NextApiRequest, NextApiResponse } from "next";
import NextAuth, { NextAuthOptions } from "next-auth";
import Auth0Provider from "next-auth/providers/auth0";

const authOptions :NextAuthOptions = {
    providers : [
        Auth0Provider({
            clientId: process.env.AUTH0_CLIENT_ID ?? '',
            clientSecret: process.env.AUTH0_CLIENT_SECRET ?? '',
            issuer: process.env.AUTH0_ISSUER
          })
    ]

};

 const auth = async (req:NextApiRequest,res:NextApiResponse) => {
    return await NextAuth(req,res,authOptions);
 }

export default auth;
