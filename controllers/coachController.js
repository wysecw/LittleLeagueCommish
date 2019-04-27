//controller pages hold the functions, queries etc.

const coach = require('../models/coach');

//display a list of all coachs
exports.coach_list = function(req, res){
    //db query goes here, same for all of these
    coach.find({})
    .exec(function (err, result) {
    if (err) {
        console.log(err);
      } //catch any errors
      res.render("team", { coach_list: result });
    });
};

// Display detail page for a specific coach.
exports.coach_detail = function(req, res) {
    coach.find({coach_name: req.params.coach_name})
    .exec(function (err, result) {
    if (err) {
        console.log(err);
      } //catch any errors
      res.render("team", { coach_player: result });
    });
};

// Display coach create form on GET.
exports.coach_create_get = function(req, res) {
    //  res.render('coach_form', { title: 'Create Coach' });
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