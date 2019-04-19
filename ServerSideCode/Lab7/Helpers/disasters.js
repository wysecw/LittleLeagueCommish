module.exports = {
    
    earthquake: function(req, res) {
	
    	const category = parseFloat(req.query.intensity) > 7.0? "major" : "minor";
    	//log.info({category: category}, "Here's the category");
    
    	res.render('disaster', {
    		eventType: "earthquake",
    		intensityType: "magnitude",
    		intensityValue: req.query.intensity,
    		category: category
    	});
    },
    
    tornado: function(req, res) {
	
    	const category = parseInt(req.query.intensity) > 2? "major" : "minor";
    	
    	res.render('disaster', {
    		eventType: "tornado",
    		intensityType: "category",
    		intensityValue: "F-"+ req.query.intensity,
    		category: category
    	});
    },
    
    hurricane: function(req, res) {
    	const category = parseInt(req.query.intensity) > 2? "major" : "minor";
    	
    	res.render('disaster', {
    		eventType: "hurricane",
    		intensityType: "category",
    		intensityValue: req.query.intensity,
    		category: category
    	});
    }
}