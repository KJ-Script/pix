import { timeStamp } from "console";
import { Schema, model, models } from "mongoose";

const ImageSchema = new Schema(
    {
        name: {type: String, required: true},
        image: {type: [Object], required: true},
        timestamp: { type: Date, default: Date.now }
    }
)

const UploadedImage = models.UploadedImage || model("UploadedImage", ImageSchema)

export default UploadedImage