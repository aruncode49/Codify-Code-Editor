import { Code } from "../models/code.model.js";

async function saveCodeController(req, res) {
  try {
    const { fullCode, title } = req.body;

    if (
      fullCode.html === "" &&
      fullCode.css === "" &&
      fullCode.javascript === ""
    ) {
      return res.status(400).json({
        success: false,
        message: "Code can not be blank!",
      });
    }

    const data = await Code.create({
      fullCode,
      title,
      owner: req?.user?._id,
    });
    return res.status(201).json({
      success: true,
      message: "Code saved successfully",
      codeId: data?._id,
      ownerId: data?.owner,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: "Error in code saving",
      error: error.message,
    });
  }
}

async function getFullCodeController(req, res) {
  try {
    const { codeId } = req.params;

    console.log(codeId);

    const data = await Code.findById(codeId);
    if (!data) {
      return res.status(401).json({
        success: false,
        message: "Code not found",
        error: error.message,
      });
    }

    return res.status(200).json({
      success: true,
      message: "Code found successfully",
      fullCode: data?.fullCode,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Code not found",
      error: error.message,
    });
  }
}

export { saveCodeController, getFullCodeController };
