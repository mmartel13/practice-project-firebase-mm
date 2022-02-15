//imports the function that connects to firestore
const { connectDb } = require("./connect-db");

//bringing my wines.json file in
const wines = require("../wines.json");

//a reference connecting to a particular connection. This is so I don't have to type everything to the right of the equal sign every time I call the collection
const winesRef = connectDb().collection("wines");

winesRef.add(wines[3])
.then(doc => {
    console.log("added wine", doc.id)
}) 
.catch(console.error);


