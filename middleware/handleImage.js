import Jimp from "jimp";

const handleImage = async (req, res, next) => {
  const { path: oldPath } = req.file;
  let img = await Jimp.read(oldPath);
  img.resize(250, 250).write(oldPath);
  next();
};

export default handleImage;
