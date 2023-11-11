
import mail from "@sendgrid/mail";
import twilio from "twilio";
import { NextApiRequest, NextApiResponse } from "next";
import withHandler, { ResponseType } from "@libs/server/withHandler";
import client from "@libs/server/client";

mail.setApiKey(process.env.EMAIL_KEY!);
const twilioClient = twilio(process.env.TWILIO_SID, process.env.TWILIO_TOKEN)

async function handler(
    req: NextApiRequest,
    res: NextApiResponse<ResponseType>
) {
    const { phone, email, password } = req.body;
    const user = phone ? { phone } : email ? { email } : null;

    if (!user) return res.status(400).json({ ok: false });

    const payload = Math.floor(100000 + Math.random() * 900000) + "";
    const token = await client.token.create({
        data: {
            payload,
            user: {
            },
        },
    },
    );
    if (phone) {
        // const message = await twilioClient.messages.create({
        //     messagingServiceSid: process.env.TWILIO_MSID,
        //     from: process.env.TWILIO_PHONE,
        //     to: process.env.MY_PHONE!,
        //     body: `Your login token is ${payload}`
        // })
        // console.log(message)
    } else if (email) {
        // const email = await mail.send({
        //     from: process.env.MAIL_FROM!,
        //     to: process.env.MAIL_TO,
        //     subject: "Your Carrot Market Verification Email",
        //     text: `Your token is ${payload}`
        // })
    }

    return res.json({
        ok: true
    });
}

export default withHandler({ methods: ["POST"], handler, isPrivate: false });