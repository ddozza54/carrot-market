import mail from '@sendgrid/mail'
import twilio from 'twilio';
import client from '@libs/server/client';
import withHandler, { ResponseType } from '@libs/server/withHandler';
import { NextApiRequest, NextApiResponse } from "next";

interface EnterForm {
    email?: string;
    phone?: string;
}

mail.setApiKey(process.env.EMAIL_KEY!);


const twilioClient = twilio(process.env.TWILIO_SID, process.env.TWILIO_TOKEN)

async function handler(
    req: NextApiRequest,
    res: NextApiResponse<ResponseType>
) {
    const { phone, email } = req.body;
    const user = phone ? { phone: +phone } : email ? { email } : null;
    if (!user) return res.status(400).json({ ok: false })
    const payload = Math.floor(100000 + Math.random() * 90000) + ""
    const token = await client.token.create({
        data: {
            payload,
            user: {
                connectOrCreate: {
                    where: {
                        ...user,
                    },
                    create: {
                        name: "Anonymous",
                        ...user,
                    },
                },
            },
        },
    });
    if (phone) {
        // const message = await twilioClient.messages.create({
        //     messagingServiceSid: process.env.TWILIO_MSID,
        //     from: process.env.TWILIO_PHONE,
        //     to: process.env.MY_PHONE!,
        //     body: `Your login token is ${payload}`
        // })
        // console.log(message)
    } else if (email) {
        const email = await mail.send({
            from: process.env.MAIL_FROM!,
            to: process.env.MAIL_TO,
            subject: "Your Carrot Market Verification Email",
            text: `Your token is ${payload}`
        })
        console.log(email)
    }

    return res.json({
        ok: true
    })
}

export default withHandler("POST", handler)