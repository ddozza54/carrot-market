
import mail from "@sendgrid/mail";
import twilio from "twilio";
import { NextApiRequest, NextApiResponse } from "next";
import withHandler, { ResponseType } from "@libs/server/withHandler";
import client from "@libs/server/client";

async function handler(
    req: NextApiRequest,
    res: NextApiResponse<ResponseType>
) {
    const { phone, email, password } = req.body;
    const userContact = +phone || email;
    console.log(userContact)
    if (!userContact) return res.status(400).json({ ok: false })

    const findUser = email ? await client.user.findUnique({ where: { email } }) : await client.user.findUnique({ where: { phone } })
    console.log(findUser)
    if (!findUser) return res.status(400).json({ ok: false })

    if (password !== findUser.password) return res.status(400).json({ ok: false, message: "비밀번호가 일치하지 않습니다." })

    const payload = Math.floor(100000 + Math.random() * 900000) + "";
    const token = await client.token.create({
        data: {
            payload,
            user: {

            }
        },
    },
    );

    return res.json({
        ok: true
    });
}

export default withHandler({ methods: ["POST"], handler, isPrivate: false });