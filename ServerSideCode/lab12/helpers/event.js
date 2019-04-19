module.exports = function(options){
    
    
   
   return {
       
       getAllEvents: function(req, res){
           //Get all the events and return them from mongoose
           options.Event.find().then(function(foundEvents){
               res.json(foundEvents);
           });
       },
       
       getEventById: function(req, res){
           
       }
   };
   
};