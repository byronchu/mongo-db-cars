const { MongoClient, ObjectID } = require('mongodb');

const uri = 'mongodb://localhost:27017/test';

MongoClient.connect(uri, function(err, db) {
    var Cars = db.collection('cars');
    Cars.find()
    .toArray()
    .then (cars => {
      console.log('cars');
      cars.forEach(cars => console.log(cars.brand));

  })
  .catch (error => {
    console.error(error);
  });

  // const carID =ObjectID('585098b15066c1a26eb47477');
  // Cars.findOneAndDelete({_id: carID })
  // .then(deletelog => {
  //   console.log(deletelog);
  // });


  const carID =ObjectID('585098b15066c1a26eb47478');
  Cars.findOneAndUpdate(
    { _id: carID },
    { $set: { brand: "Subaru"} }
  )
  .then(updateLog => {
     console.log(updateLog)
  })

});
