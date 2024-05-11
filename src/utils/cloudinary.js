import { v2 as cloudinary } from "cloudinary";
import fs from "fs";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const uploadOnCloudinary = async (localFilePath) => {
  try {
    if (!localFilePath) return null;
    //upload the File on Cloudinary
    const response = await cloudinary.uploader.upload(localFilePath, {
      resource_type: "auto",
    });

    //File has been uploaded successfully
    console.log("File is uploaded successfully");
    console.log(response.url);
    return response;
  } catch (error) {
    fs.unlinkSync(localFilePath); // remove the locally saved file as the upload option failed
    return null;
  }
};

export { uploadOnCloudinary };
