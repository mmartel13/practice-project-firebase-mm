//imports the function that connects to firestore
const { connectDb } = require("./connect-db");

//bringing my wines.json file in
const wines = require("../wines.json");

//a reference connecting to a particular connection. This is so I don't have to type everything to the right of the equal sign every time I call the collection
const winesRef = connectDb().collection("wines");

//added each wine to the database
// winesRef.add(wines[3])
// .then(doc => {
//     console.log("added wine", doc.id)
// }) 
// .catch(console.error);

//now want to read a single doc

// winesRef.doc('Xsxs9Mr4ztrSJntI9JUs')
// .get()
// .then(doc => {
//     console.log(doc.data())
// })

//get whole collection

// winesRef.get().then(snapshot => {
//     snapshot.forEach(doc => {
//         console.log(doc.data())
//     })
// })

//update something within the collection 

// winesRef.doc('ugsWB9wovedsd6SpTBc5')
//     .update({
//         name : "Kendall Jackson"
//     })
//     .then(console.log("updated wine"))
    





