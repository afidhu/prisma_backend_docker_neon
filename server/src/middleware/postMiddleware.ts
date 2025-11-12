import multer from "multer";
import path from "path";

// Storage config
const storage = multer.diskStorage({
  destination: "./uploads/", // Folder where files are saved
  filename: (req, file, cb) => {
    const uniqueName = Date.now() + "-" + file.originalname;
    cb(null, uniqueName);
  },
});

export const upload = multer({ storage });
