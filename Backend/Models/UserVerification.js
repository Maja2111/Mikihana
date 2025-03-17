import mongoose , { Model, Schema, model }from "mongoose";

const userVerificationSchema = new Schema ({
    userID: {
        type: Schema.Types.ObjectId, ref:"User"

    }
 })

 export const UserVerification = model("UserVerification", userVerificationSchema);

