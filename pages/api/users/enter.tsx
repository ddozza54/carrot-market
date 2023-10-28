import { NextRequest, NextResponse } from "next/server";
import client from "@/libs/client";

export default async function handler(req: NextRequest, res: NextResponse) {
    if (req.method !== "POST") {
        res.status(401).end()
    }
    console.log(req.body.email)
    res.status(200).end();
}