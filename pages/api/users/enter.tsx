import client from '@libs/server/client';
import withHandler from '@libs/server/withHandler';
import { NextApiRequest, NextApiResponse } from "next";

async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    const { phone, email } = req.body;
    const playload = phone ? { phone: +phone } : { email };
    const user = await client.user.upsert({
        where: {
            ...playload,
        },
        create: {
            name: "Anonymous",
            ...playload
        },
        update: {}
    })
    console.log(user)

    //     let user;
    //     if (email) {
    //         console.log('i got' + email)
    //         user = await client.user.findUnique({
    //             where: {
    //                 email
    //             }
    //         })
    //         if (!user) {
    //             console.log("NO User")
    //             user = await client.user.create({
    //                 data: {
    //                     name: "Anonymous",
    //                     email,
    //                 }
    //             })
    //         }
    //     }
    //     res.status(200).end();
}

export default withHandler("POST", handler)