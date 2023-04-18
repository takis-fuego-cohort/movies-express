const mongoose = require('mongoose')

const performerSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    born: {
        type: Date
    },
    // One-To-Many Relationship
    // One-To-One Relationship
    // Many-To-Many Relationship
})

const Performer = mongoose.model('Performer', performerSchema);
module.exports = Performer;