const mongoose = require("mongoose");

// Data Schema 
const dataSchema = new mongoose.Schema(
    {
    name: String,
    email: String,
    mobile:Number
    }
    , {
        collection: "Data"
    }
)

// Connect Mongoose 
mongoose.connect("mongodb://127.0.0.1:27017/Node_Tutorials",
    {
    useNewUrlParser: true,
    useUnifiedTopology: true
    }
).then(() => {
    console.log("MongoDB Connection established Successfully");
}).catch((err) => { 
    console.log("MongoDB Connection error", err.message);
    process.exit(1); // Exit with failure
})


//Save in DB (Create A New Request to DB)
const saveInDB =  async () => {
    // await mongoose.connect("mongodb://127.0.0.1:27017/Node_Tutorials");
    const dataModel = mongoose.model("Data", dataSchema);
    let newData = new dataModel(
        {
            name: "testing2",
            email: "testing@gmail.com",
            mobile:"123456"

        });
    let result = await newData.save();
    console.log(result);
}

// saveInDB();

// Update Existing Data in DB 
const updateInDB = async (data) => { 
    const dataModel = mongoose.model("Data", dataSchema);
    let updateData = await dataModel.updateOne(
        {       
            name:"Aditi gupta"
        },
        {
            $set: {
                email:"guptatesting@gmail.com"
            }
        }
    )
    console.log(updateData);
}

// updateInDB();

// Delete Existing Data in DB 
const deleteInDB = async (data) => { 
    const dataModel = mongoose.model("Data", dataSchema);
    let deleteData = await dataModel.deleteOne(
        {       
            name:"Aditi gupta"
        }
    )
    console.log(deleteData);
}

// deleteInDB();

//  Read Data In DB 
const readInDB = async () => { 
    const dataModel = mongoose.model("Data", dataSchema);
    let readData = await dataModel.find()
    console.log(readData);
}

readInDB();
