import { NextApiRequest, NextApiResponse } from 'next';
import withHandler, { ResponseType } from '@libs/server/withHandler';
import client from '@libs/server/client';
import { withApiSession } from '@libs/server/withSession';

async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseType>
) {
  const {
    body: { title, description },
    session: { user },
  } = req;
  const posting = await client.posting.create({
    data: {
      title,
      description,
      image: 'xx',
      user: {
        connect: {
          id: user?.id,
        },
      },
    },
  });
  res.json({
    ok: true,
    posting,
  });
}

export default withApiSession(
  withHandler({
    method: 'POST',
    handler,
  })
);
