import client from "@/libs/client";
import { NextRequest, NextResponse } from "next/server";

export default async function handler(req: NextRequest, res: NextResponse) {
    await client.user.create({
        data: {
            name: "test",
            email: "email"
        },
    });
    res.json({
        ok: true,
    });
}

