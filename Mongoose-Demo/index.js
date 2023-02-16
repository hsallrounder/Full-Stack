const mongoose = require("mongoose");

mongoose.connect('mongodb://127.0.0.1:27017/seriesDB')
    .then(() => console.log("connection open"))
    .catch((err) => console.log("connection failed", err))

const seriesSchema = new mongoose.Schema({
    name : String,
    date : Number,
    ratings : Number,
    isWatched : Boolean
})

const Serie = mongoose.model('Serie', seriesSchema)

// Technically model is a js class

/*
const friends = new Serie({ name:"friends reunion", date: 2018, ratings: 8.5, isWatched: true });

console.log(friends);

friends.save()
    .then(()=> console.log("data stored in db"))

*/
