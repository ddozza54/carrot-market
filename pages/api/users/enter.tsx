import client from "@/libs/client";
import { NextRequest, NextResponse } from "next/server";

export default async function handler(req: NextRequest, res: NextResponse) {

    console.log(req.body)
    res.status(200).end();


}