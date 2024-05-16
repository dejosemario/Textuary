import mongoose, { Document, ObjectId } from "mongoose";

export interface IMessage extends Document {
  sender: "user" | "system";
  content: string;
  timestamp: Date;
}

export interface IChat extends Document {
  user: ObjectId;
  messages: IMessage[];
  startedAt: Date;
  updatedAt: Date;
}

// Message Schema
const messageSchema = new mongoose.Schema({
  sender: {
    type: String,
    enum: ["user", "model"],
    required: true,
  },
  imageUrl: {
    type: String,
  },
  content: {
    type: String,
    required: true,
  },
  timestamp: {
    type: Date,
    default: Date.now,
  },
});

// Chat Schema
const chatSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    messages: [messageSchema],
    startedAt: {
      type: Date,
      default: Date.now,
    },
    updatedAt: {
      type: Date,
      default: Date.now,
    },
  },
  {
    toJSON: {
      transform: function (doc, ret) {
        delete ret.__v;
      },
    },
  }
);

// Update the updatedAt field before saving
chatSchema.pre<IChat>("save", function (next) {
  this.updatedAt = new Date();
  next();
});

const Chat = mongoose.model("Chat", chatSchema);

export default Chat;
