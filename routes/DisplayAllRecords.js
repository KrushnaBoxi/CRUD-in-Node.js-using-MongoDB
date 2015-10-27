module.exports = function DisplayAllRecords(req, res){

    var db = req.db;
    var collection = db.get('users');
    collection.find({},{}, function (err, doc) {
        if (err) {
            // If it failed, return error
            res.send("There was a problem adding the information to the database.");
        }
        else {
            // And forward to success page
            res.render('customer', {page_title:"Customers Detail", data:doc});
        }
    });
}



/*

collection.find({},{},function(e,docs){
        res.render('userlist', {
            "userlist" : docs
        });*/