import { Code } from "../models/code.model.js";

async function saveCodeController(req, res) {
  try {
    const { fullCode, title } = req.body;
    const data = await Code.create({
      fullCode,
      title,
      owner: req?.user?._id,
    });
    return res.status(201).json({
      success: true,
      message: "Code saved successfully",
      codeId: data?._id,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Error in code saving",
      error: error.message,
    });
  }
}

export { saveCodeController };
