import mongoose from "mongoose";

const messageSchema = new mongoose.Schema(
  {
    senderId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    receiverId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    text: {
      type: String,  //"required" field not given as some messages might be only text or only images or both
    },
    image: {
      type: String,
    },
  },
  { timestamps: true } // eg-12:10 pm
);

const Message = mongoose.model("Message", messageSchema);

export default Message;