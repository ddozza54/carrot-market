import { NextApiRequest, NextApiResponse } from "next";
import withHandler, { ResponseType } from "@libs/server/withHandler";
import client from "@libs/server/client";

async function handler(
    req: NextApiRequest,
    res: NextApiResponse<ResponseType>
) {
    console.log("createAccount", req.body)

    const {
        userName,
        email,
        phone,
        password
    } = req.body;
    if (!email || !phone || !password) return res.status(400).json({ ok: false });

    const user = await client.user.findUnique({
        where: {
            email
        }
    })
    if (user) {
        return res.status(404).json({
            ok: false,
            message: "이미 가입된 유저입니다"
        })
    }

    const createdUser = await client.user.create({
        data: {
            name: userName,
            password,
            email,
            phone
        }
    })

    return res.json({
        ok: true,
        message: "회원가입이 완료되었습니다",
        data: createdUser
    });
}

export default withHandler({ methods: ["POST"], handler, isPrivate: false });