import mongoose from "mongoose";

const codeSchema = new mongoose.Schema(
  {
    code: {
      html: {
        type: String,
        required: true,
      },
      css: {
        type: String,
        required: true,
      },
      javascript: {
        type: String,
        required: true,
      },
    },
    owner: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  },
  { timestamps: true }
);

export const Code = mongoose.model("Code", codeSchema);
