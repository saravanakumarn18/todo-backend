var mongoose = require("mongoose");

module.exports = async () => {
    try {
        // const connectionParams = {
        //     useNewUrlParser: true,
        //     useCreateIndex: true,
        //     useUnifiedTopology: true,
        mongoose.connect(
            "mongodb+srv://saravanakumarcs20:Llcpy2Pp0sW1RePh@cluster0.ousxfwq.mongodb.net/?retryWrites=true&w=majority",
            // connectionParams
        );
        console.log("Connected to database.");
    } catch (error) {
        console.log("Could not connect to database.", error);
    }
};