import mongoose, {Schema, Document} from "mongoose";

export interface Message extends Document{
    content: string;
    createdAt: Date;
}
const MessageSchema: Schema<Message> = new mongoose.Schema({
    content:{
        type: String,
        required: true,
    },
    createdAt:{
        type: Date,
        required: true,
        default: Date.now,
    }
});


export interface User extends Document{
    username: string;
    email: string;
    passwword: string;
    verifyCode: string;
    verifyCodeExpiry: string;
    isVerified: boolean;
    isAcceptingMessages: boolean;
    messages: Message[];
}

const UserSchema: Schema<User> = new mongoose.Schema({
    username:{
        type: String,
        required: [true,"Username is required to be given"],
        trim: true,
        unique: true,

    },
    email:{
         type:String,
         required: true,
         unique: true,
         match: [/.+\@.+\..+/, 'Please use a valid email address'],
    },
    passwword:{
        type: String,
        required: [true,"Password is required"],
    },
    verifyCode:{
        type: String,
        required:[true,"VerifyCode is required"],
    },
    verifyCodeExpiry:{
        type:String,
        required:[true,"Verify Code is required"]

    },
    isVerified:{
        type:Boolean,
        default:false,

    },
    isAcceptingMessages:{
        type:Boolean,
        default:true,
    },
    messages:[MessageSchema],
})


const UserModel = (mongoose.models.User as mongoose.Model<User>) || mongoose.model<User>('User',UserSchema)

export default UserModel