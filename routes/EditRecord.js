module.exports = function EditRecord(req, res, next){

    var db = req.db;
    var collection = db.get('users');
    var userToEdit = req.params.id;
    //console.log('userToDelete');
    //alert("userToDelete1"+ userToDelete);
    collection.find({ '_id' : userToEdit }, function (err, rows) {
        if (err) {
            // If it failed, return error
            res.send("There was a problem adding the information to the database.");
        }
        else {
            // And forward to success page
            res.render('EditCustomer',{page_title:"Edit Customers - Node.js",data:rows});
        }
    });
}
