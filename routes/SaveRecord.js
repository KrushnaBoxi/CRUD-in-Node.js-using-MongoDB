

module.exports = function SaveRecord(req, res) {
    var input = JSON.parse(JSON.stringify(req.body));

    var RecordDetailParsedFromForm = {

        name    : input.name,
        address : input.address,
        email   : input.email,
        phone   : input.number

    };
    var db = req.db;
    var collection = db.get('users');
    collection.insert(RecordDetailParsedFromForm, function (err, doc) {
        if (err) {
            // If it failed, return error
            res.send("There was a problem adding the information to the database.");
        }
        else {
            // And forward to success page
            res.redirect("/customer/display");
        }
    });
}