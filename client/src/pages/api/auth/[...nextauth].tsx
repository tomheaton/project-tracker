import NextAuth from "next-auth";
import Providers from "next-auth/providers";
import {NextApiRequest, NextApiResponse} from "next";

const options = {
    providers: [
        Providers.GitHub({
            clientId: process.env.GITHUB_ID,
            clientSecret: process.env.GITHUB_SECRET
        })
    ]
}


export default (req: NextApiRequest, res: NextApiResponse) => NextAuth(req, res, options);