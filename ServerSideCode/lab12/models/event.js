const mongoose = require('mongoose');

//defines an attendee within an event
let attendeeSchema = new mongoose.Schema({
    _id: Number,
    firstName: String,
    lastName: String,
    organization: String,
    mealPreference: String,
    tshirtSize: String
    
});

//this defines an event
let eventSchema = new mongoose.Schema({
    _id: Number,
    eventName: String,
    eventLocation: String,
    maxAttendees: Number,
    attendees: [attendeeSchema]
});

module.exports = mongoose.model('Event', eventSchema);