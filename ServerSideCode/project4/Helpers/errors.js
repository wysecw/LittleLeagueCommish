module.exports = {
    
    userNameNotFound: function(req, res){
        res.render('login', {nameError: "User Name Not Found"});
        
    },
    
    incorrectPassword: function(req, res){
        res.render('login', {pwError: "Password Incorrect"});
    }
};