import mongoose, { Schema } from "mongoose";

const chatMessageSchema = new Schema(
  {
    sender: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    content: {
      type: String,
      required: true,
      trim: true,
    },
    attachments: {
      type: [
        {
          url: String,
          localPath: String,
        },
      ],
      default: [],
    },
    
    chat: {
      type: Schema.Types.ObjectId,
      ref: "Chat",
    },
  },
  { timestamps: true }
);


const ChatMessage = mongoose.model("ChatMessage", chatMessageSchema);