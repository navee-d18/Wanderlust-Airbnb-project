const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const listingSchema = new Schema({
    title : {
        type : String,
        required : true
    },
    description : {
        type : String
    },
    image : {
        filename : {
            type : String,
            default : "listingimage"
        },
        url: {
            type: String,
            default: "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
            set : (v) => v === "" ? "https://unsplash.com/photos/a-large-white-house-sitting-on-the-side-of-a-road-27dyESJ0RIk" : v
        },
    },
    price : {
        type : Number
    }, 
    location : {
        type : String
    },
    country : {
        type : String
    }
});

const Listing = mongoose.model("Listing" , listingSchema);
module.exports = Listing;