const mongoose = require('mongoose');  // Import Mongoose for MongoDB interactions

// Define Mongoose Schema for Products
const ProductSchema = new mongoose.Schema({
    name: String,  // Define name as a string
    country: String   // Define country as a string
    //add more ad per requiremnts
});

// Function to connect to MongoDB 
const connectDB = async () => {
    try {
        await mongoose.connect("mongodb://localhost:27017/warehouse", {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log("MongoDB connected");
    } catch (error) {
        console.error("MongoDB connection error:", error);
        process.exit(1);  // Exit process with failure
    }
};


// Main asynchronous function to handle database operations
const SaveinDb = async () => {
    // Create a Mongoose model based on the schema for collection 'shops1'
    const ProductModel = mongoose.model("shops1", ProductSchema);

    // Create an instance of the model with product details
    let data = new ProductModel({
        name: "Test Item Nz",  // Product name
        country: "nz"  // Product country
    });

    // Save the new product to the database and await the result
    let result = await data.save();

    // Output the result to the console
    console.log(result);
};

// Update data function
const updateData = async () => {
    // Create a Mongoose model based on the schema for collection 'shops1'
    const ProductModel = mongoose.model("shops1", ProductSchema);

    try {
        let data = await ProductModel.updateOne(
            { name: "lava 3212122" },
            {
                $set: { country: "IND" }
            }
        );

        console.log("update data:", data);
    } catch (error) {
        console.error("Error updating data:", error);
    }
};


// Delete data function
const deleteData = async () => {
    // Create a Mongoose model based on the schema for collection 'shops1'
    const ProductModel = mongoose.model("shops1", ProductSchema);

    try {
        let result = await ProductModel.deleteOne({ name: "Test Item Nz" });

        console.log("Delete data result:", result);
    } catch (error) {
        console.error("Error deleting data:", error);
    }
};

// Connect to the database and perform operations
const run = async () => {
    await connectDB();
    // Uncomment to save new data
    // await SaveinDb();
    // await updateData();

    // await SaveinDb();

    await deleteData();

    // Close the connection to the database
    mongoose.connection.close();
};

// Call function to run the operations
run();
