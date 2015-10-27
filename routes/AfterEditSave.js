module.exports = function AfterEditSave(req, res){

    var db = req.db;
    var collection = db.get('users');
    var userToDelete = req.params.id;
    //console.log('userToDelete');
    //alert("userToDelete1"+ userToDelete);
    var input = JSON.parse(JSON.stringify(req.body));

    var RecordDetailParsedFromForm = {

        name    : input.name,
        address : input.address,
        email   : input.email,
        phone   : input.number

    };
    collection.update({ '_id' : userToDelete },RecordDetailParsedFromForm, function (err) {
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

/*var connection = require('../routes/con.js').localConnect();
module.exports = function SaveRecord(req , res , next){
    var id = req.params.id;
    var input = JSON.parse(JSON.stringify(req.body));
    var RecordDetailParsedFromForm = {
        name    : input.name,
        address : input.address,
        email   : input.email,
        phone   : input.number

    };
    connection.query("UPDATE customer set ? WHERE id=?",[RecordDetailParsedFromForm,id], function(err, rows)
    {

        if (err)
            console.log("Error inserting : %s ",err );

        res.redirect('/customer');

    });


}
*/