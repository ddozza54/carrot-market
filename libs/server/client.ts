import { PrismaClient } from '@prisma/client';

// const client = new PrismaClient();

// client.user.create({
//     data: {
//         name: "haha",
//         email: "Hi"
//     }
// })
//
//이렇게 하면 오류 생김. (보안 이슈)
//이렇게 하는 대신

export default new PrismaClient();

