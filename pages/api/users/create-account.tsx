import { NextApiRequest, NextApiResponse } from "next";
import withHandler, { ResponseType } from "@libs/server/withHandler";
import client from "@libs/server/client";

async function handler(
    req: NextApiRequest,
    res: NextApiResponse<ResponseType>
) {
    console.log("createAccount", req.body)

    const {
        email,
        phone,
        password
    } = req.body;
    if ((email || phone) || !password) return res.status(400).json({ ok: false });

    const user = await client.user.findUnique({
        where: {
            email
        }
    })
    if (user) {
        return res.status(404).json({
            ok: false,
        })
    }
    return res.json({
        ok: true
    });
}

export default withHandler({ methods: ["POST"], handler, isPrivate: false });