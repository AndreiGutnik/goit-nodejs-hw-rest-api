import Jimp from "jimp";
import { HttpError } from "../helpers/index.js";

const handleImage = async (req, res, next) => {
  const { path: oldPath } = req.file;
  let img = await Jimp.read(oldPath);
  if (!img) {
    return next(HttpError(404, `File not found`));
  }
  img.resize(250, 250).write(oldPath);
  next();
};

export default handleImage;
