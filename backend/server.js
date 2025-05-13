import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import { v2 as cloudinary } from "cloudinary";
import multer from "multer";
const upload = multer({ dest: "uploads/" });

// cloudnary Configuration
cloudinary.config({
  cloud_name: "dbh47h7kw",
  api_key: "126359927783318",
  api_secret: "Llt-nEBPRhMSURZFy8qRi1iZLKA",
});

// App Configuratation
const app = express();

// middleware
app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:5173",
  })
);

// Database connection
try {
  mongoose.connect(
    "mongodb+srv://rohantimilsena11:jUYGaLbKZx6XzLv0@cluster0.2shwlzl.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
  );
  console.log("✅MongoDB connected successfully");
} catch (error) {
  console.log("❌MongoDB connection error", error);
}

app.get("/", (req, res) => {
  res.send("Hello from jwellery backend ");
});

// Category schema
const categorySchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  imageUrl: { type: String, required: true },
});

// Category Table
const CategoryTable = mongoose.model("CategoryTable", categorySchema);

// Banner schema
const bannerSchema = new mongoose.Schema({
  imageUrl: { type: String, required: true },
});

// Banner Table
const BannerTable = mongoose.model("BannerTable", bannerSchema);

// product schema
const productSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  description: { type: String, required: true },
  previousPrice: { type: Number, required: true },
  currentPrice: { type: Number, required: true },
  rating: { type: Number, required: true },
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "CategoryTable",
    required: true,
  },
  imageUrl: { type: String, required: true },
});

// product Table
const ProductTable = mongoose.model("ProductTable", productSchema);

// Category Routes
// create
app.post("/api/category", upload.single("imageUrl"), async (req, res) => {
  try {
    const categoryAlreadyExist = await CategoryTable.findOne({
      name: req.body.name,
    });
    if (categoryAlreadyExist) {
      return res.status(409).json({
        success: false,
        data: null,
        msg: " Name already exixt ",
      });
    }
    console.log(req.file);

    // Image uplode functionality
    const uploadResult = await cloudinary.uploader
      .upload(req.file.path)
      .catch((error) => {
        return res.status(500).json({
          success: false,
          data: null,
          msg: "Image upload failed",
          error: error,
        });
      });

    const newlyCreatedCategory = await CategoryTable.create({
      ...req.body,
      imageUrl: uploadResult.secure_url,
    });
    return res.status(201).json({
      success: true,
      data: newlyCreatedCategory,
      msg: " Category created successfully ",
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      data: null,
      msg: "something went wrong",
      error: error,
    });
  }
});

// get all
app.get("/api/category", async (req, res) => {
  try {
    const allCategories = await CategoryTable.find();
    return res.status(200).json({
      success: true,
      data: allCategories,
      msg: " Get All Categories success ",
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      data: null,
      msg: "something went wrong",
      error: error,
    });
  }
});

// get single
app.get("/api/category/:id", async (req, res) => {
  try {
    const singleCategory = await CategoryTable.findById(req.params.id);
    return res.status(200).json({
      success: true,
      data: singleCategory,
      msg: " Get Single Category  success ",
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      data: null,
      msg: "something went wrong",
      error: error,
    });
  }
});

// update
app.patch("/api/category/:id", upload.single("imageUrl"), async (req, res) => {
  try {
    if (req.file) {
      // Image uplode functionality
      const uploadResult = await cloudinary.uploader
        .upload(req.file.path)
        .catch((error) => {
          return res.status(500).json({
            success: false,
            data: null,
            msg: "Image upload failed",
            error: error,
          });
        });

      const updatedCategory = await CategoryTable.findByIdAndUpdate(
        req.params.id,
        { ...req.body, imageUrl: uploadResult.secure_url },
        { new: true }
      );
      return res.status(200).json({
        success: true,
        data: updatedCategory,
        msg: " category updated   successfully ",
      });
    }

    const updatedCategory = await CategoryTable.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    return res.status(200).json({
      success: true,
      data: updatedCategory,
      msg: " category updated   successfully ",
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      data: null,
      msg: "something went wrong",
      error: error,
    });
  }
});

// delete
app.delete("/api/category/:id", async (req, res) => {
  try {
    const deletedCategory = await CategoryTable.findByIdAndDelete(
      req.params.id
    );
    return res.status(200).json({
      success: true,
      data: deletedCategory,
      msg: " deleted  successfully ",
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      data: null,
      msg: "something went wrong",
      error: error,
    });
  }
});

// banner route
//  create
app.post("/api/banner", upload.single("imageUrl"), async (req, res) => {
  try {
    // Image uplode functionality
    const uploadResult = await cloudinary.uploader
      .upload(req.file.path)
      .catch((error) => {
        return res.status(500).json({
          success: false,
          data: null,
          msg: "Image upload failed",
          error: error,
        });
      });

    const newlyCreatedBanner = await BannerTable.create({
      imageUrl: uploadResult.secure_url,
    });
    return res.status(201).json({
      success: true,
      data: newlyCreatedBanner,
      msg: " Banner created successfully ",
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      data: null,
      msg: "something went wrong",
      error: error,
    });
  }
});

// banner get all
app.get("/api/banner", async (req, res) => {
  try {
    const allBanner = await BannerTable.find();
    return res.status(200).json({
      success: true,
      data: allBanner,
      msg: " Get All Banners success ",
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      data: null,
      msg: "something went wrong",
      error: error,
    });
  }
});

//banner get single
app.get("/api/banner/:id", async (req, res) => {
  try {
    const singleBanner = await BannerTable.findById(req.params.id);
    return res.status(200).json({
      success: true,
      data: singleBanner,
      msg: " Get Single Banner  success ",
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      data: null,
      msg: "something went wrong",
      error: error,
    });
  }
});

// banner delete
app.delete("/api/banner/:id", async (req, res) => {
  try {
    const deletedBanner = await BannerTable.findByIdAndDelete(req.params.id);
    return res.status(200).json({
      success: true,
      data: deletedBanner,
      msg: " Banner  successfully ",
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      data: null,
      msg: "something went wrong",
      error: error,
    });
  }
});

// product route


app.post("/api/products", upload.single("imageUrl"), async (req, res) => {
  console.log(req.file);

  try {
    const productAlreadyExist = await ProductTable.findOne({
      name: req.body.name,
    });
    if (productAlreadyExist) {
      return res.status(409).json({
        success: false,
        msg: " name already exist ",
        data: null,
      });
    }

    const uploadResult = await cloudinary.uploader
      .upload(req.file.path)
      .catch((error) => {
        return res.status(500).json({
          success: false,
          msg: "image upload failed",
          data: null,
          error,
        });
      });

    const newlyCreatedProducts = await ProductTable.create({
      ...req.body,
      imageUrl: uploadResult.secure_url,
    });
    return res.status(201).json({
      success: true,
      msg: "product created successfully",
      data: newlyCreatedProducts,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      msg: "Something went wrong",
      data: null,
    });
  }
});


// get all products
app.get("/api/products", async (req, res) => {
  try {
    const allProducts = await ProductTable.find();
    return res.status(200).json({
      success: true,
      msg: "Fetch all products successfully",
      data: allProducts,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      msg: "Something went wrong",
      data: null,
      error: error,
    });
  }
});

// get single products
app.get("/api/products/:id", async (req, res) => {
  try {
    const singleProduct = await ProductTable.findById(req.params.id);
    if (!singleProduct) {
      return res.status(404).json({
        success: false,
        msg: "Not found",
        data: null,
      });
    }
    return res.status(200).json({
      success: true,
      msg: "Fetch single product successfully",
      data: singleProduct,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      msg: "Something went wrong",
      data: null,
      error: error,
    });
  }
});

// update products
app.patch("/api/products/:id", upload.single("imageUrl"), async (req, res) => {
  try {
    //  if user upload new image
    if (req.file) {
      const uploadResult = await cloudinary.uploader
        .upload(req.file.path)
        .catch((error) => {
          return res.status(500).json({
            success: false,
            msg: "Image upload failed",
            data: null,
            error,
          });
        });
      const updatedProduct = await ProductTable.findByIdAndUpdate(
        req.params.id,
        { ...req.body, imageUrl: uploadResult.secure_url }
      );
      return res.status(200).json({
        success: true,
        msg: " product Updated successfully",
        data: updatedProduct,
      });
    }


    // if user not upload new image
    const updatedProduct = await ProductTable.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    return res.status(200).json({
      success: true,
      msg: " product Updated successfully",
      data: updatedProduct,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      msg: "Something went wrong",
      data: null,
      error: error,
    });
  }
});

// delete products
app.delete("/api/products/:id", async (req, res) => {
  try {
    const deletedProduct = await ProductTable.findByIdAndDelete(req.params.id);
    if (!deletedProduct) {
      return res.status(404).json({
        success: false,
        msg: "Not Found",
        data: null,
      });
    }
    return res.status(200).json({
      success: true,
      msg: "Fetch all products successfully",
      data: deletedProduct,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      msg: "Something went wrong",
      data: null,
      error: error,
    });
  }
});

app.listen(4000, () => {
  console.log("🚀Server is running on port 4000");
});
