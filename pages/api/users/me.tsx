import { NextApiRequest, NextApiResponse } from "next";
import withHandler, { ResponseType } from "@libs/server/withHandler";
import client from "@libs/server/client";
import { withApiSession } from '@libs/server/withSession';


// 로그아웃 상태의 유저가 이 코드를 사용하면 에러가 나기 때문에, 보호해야함. 
//보호한다는 말은 생길 수 있는 에러를 방지하겠다는 말
//프론트엔드에서 인증된 user 를 보는 법

async function handler(
    req: NextApiRequest,
    res: NextApiResponse<ResponseType>
) {
    const profile = await client.user.findUnique({
        where: { id: req.session.user?.id },
    });
    res.json({
        ok: true,
        profile,
    });
}

export default withApiSession(withHandler({ methods: ["GET"], handler }))