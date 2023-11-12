
import { NextApiRequest, NextApiResponse } from "next";
import withHandler, { ResponseType } from "@libs/server/withHandler";
import client from "@libs/server/client";
import { withApiSession } from '@libs/server/withSession';

async function handler(
    req: NextApiRequest,
    res: NextApiResponse<ResponseType>
) {
    const { phone, email, password } = req.body;
    const userContact = +phone || email;
    if (!userContact) return res.status(400).json({ ok: false })

    const findUser = email ? await client.user.findUnique({ where: { email } }) : await client.user.findUnique({ where: { phone } })
    if (!findUser) return res.status(400).json({ ok: false, message: "존재하지 않는 사용자 입니다." })

    if (password !== findUser.password) return res.status(400).json({ ok: false, message: "비밀번호가 일치하지 않습니다." })

    req.session.user = { id: findUser.id }
    await req.session.save();
    return res.status(200).json({
        ok: true,
        data: findUser
    });
}

export default withApiSession(withHandler({ methods: ["POST"], handler, isPrivate: false }));