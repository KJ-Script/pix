import { NextResponse, NextRequest } from "next/server";
import connect from "@/lib/db";
import UploadedImage from "@/lib/models/image";


export const GET = async (request: NextRequest) => {
    return NextResponse.json({ message: "Hello, World!" });
};


export const POST = async (request: Request) => {
    try {
        const body = await request.json()
        await connect()
        const newImg = new UploadedImage(body)
        console.log("new image", newImg)
        await newImg.save()
        return NextResponse.json({ message: "Image uploaded successfully" })
    } catch (err: any) {
        console.error(err)
        return NextResponse.json({ error: err.message }, { status: 500 })
    }
}