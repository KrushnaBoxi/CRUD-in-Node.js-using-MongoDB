module.exports = function DeleteRecord(req, res){

    var db = req.db;
    var collection = db.get('users');
    var userToDelete = req.params.id;
    //console.log('userToDelete');
    //alert("userToDelete1"+ userToDelete);
    collection.remove({ '_id' : userToDelete }, function (err) {
        if (err) {
            // If it failed, return error
            res.send("There was a problem adding the information to the database.");
        }
        else {
            // And forward to success page
            res.redirect('/customer/display');
        }
    });
}







/*router.delete('/deleteuser/:id', function(req, res) {
    var db = req.db;
    var collection = db.get('users');
    var userToDelete = req.params.id;
    collection.remove({ '_id' : userToDelete }, function(err) {
        res.send((err === null) ? { msg: '' } : { msg:'error: ' + err });
    });
});*/