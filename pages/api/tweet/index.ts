import { NextApiRequest, NextApiResponse } from 'next';
import withHandler, { ResponseType } from '@libs/server/withHandler';
import client from '@libs/server/client';
import { withApiSession } from '@libs/server/withSession';

async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseType>
) {
  if (req.method === 'GET') {
    const postings = await client.posting.findMany({});
    res.json({
      ok: true,
      postings,
    });
  }
  if (req.method === 'POST') {
  }
  const {
    body: { title, description },
    session: { user },
  } = req;
  const posting = await client.posting.create({
    data: {},
  });
  res.json({
    ok: true,
    posting,
  });
}

export default withApiSession(
  withHandler({
    methods: ['GET', 'POST'],
    handler,
  })
);
