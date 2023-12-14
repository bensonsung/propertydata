// 🌟 Connecting to MongoDB
const mongoose = require("mongoose");

mongoose.connect(
  "mongodb+srv://benson:mission5@cluster0.moitbd2.mongodb.net/",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

// 🏡 Defining the Property Schema
const PropertySchema = new mongoose.Schema({
  address: {
    street: String,
    suburb: String,
    district: String,
    city: String,
  },
  image: [String], // This array will hold file names
  price: Number,
  bedrooms: Number,
  bathrooms: Number,
  details: {
    availableDate: String,
    parking: Number,
    petsAllowed: Boolean,
    furnished: Boolean,
    broadband: Boolean,
    description: String,
  },
  proximity: [String],
});

// 🏠 Creating the Mongoose Model
const Property = mongoose.model("Property", PropertySchema);

// 🚀 Adding Data to MongoDB with Files
const newProperty = new Property({
  address: {
    street: "123 Main Street",
    suburb: "Sample Suburb",
    district: "Sample District",
    city: "Sample City",
  },
  image: ["image1.jpg", "image2.jpg", "image3.jpg"], // Add your file names here
  price: 150000,
  bedrooms: 3,
  bathrooms: 2,
  details: {
    availableDate: "2023-12-15",
    parking: 2,
    petsAllowed: true,
    furnished: false,
    broadband: true,
    description: "A beautiful property with great amenities.",
  },
  proximity: ["School", "Park", "Shopping Center"],
});

// 💾 Saving the Property
newProperty
  .save()
  .then((savedProperty) => {
    console.log("Hooray! Property added:", savedProperty);
  })
  .catch((error) => {
    console.error("Oops! Error adding property:", error);
  });
