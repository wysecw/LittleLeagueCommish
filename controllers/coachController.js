const coach = require('../models/coach');

//display a list of all coachs
exports.coach_list = function(req, res){
    res.send("NOT IMPLEMENTED: coach List");
};

// Display detail page for a specific coach.
exports.coach_detail = function(req, res) {
    res.send('NOT IMPLEMENTED: coach detail: ' + req.params.id);
};

// Display coach create form on GET.
exports.coach_create_get = function(req, res) {
    res.send('NOT IMPLEMENTED: coach create GET');
};

// Handle coach create on POST.
exports.coach_create_post = function(req, res) {
    res.send('NOT IMPLEMENTED: coach create POST');
};

// Display coach delete form on GET.
exports.coach_delete_get = function(req, res) {
    res.send('NOT IMPLEMENTED: coach delete GET');
};

// Handle coach delete on POST.
exports.coach_delete_post = function(req, res) {
    res.send('NOT IMPLEMENTED: coach delete POST');
};

// Display coach update form on GET.
exports.coach_update_get = function(req, res) {
    res.send('NOT IMPLEMENTED: coach update GET');
};

// Handle coach update on POST.
exports.coach_update_post = function(req, res) {
    res.send('NOT IMPLEMENTED: coach update POST');
};