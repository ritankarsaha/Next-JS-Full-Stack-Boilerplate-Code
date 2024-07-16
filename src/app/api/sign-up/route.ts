import dbConnect from "@/lib/dbConnect";
import UserModel from "@/model/user.model";
import bcrypt from "bcryptjs"
import { sendVerificationEmail } from "@/helpers/sendVerificationEmail";


export async function POST(request: Request){
    await dbConnect()

    try {
        const {username, email, password} = await request.json()
        
    } catch (error) {
        console.log("Error registering user",error)
        return Response.json({
            success: false,
            message: "Error resgistering user"
        },{status: 500})
    }
}