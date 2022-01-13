const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const blogSchema = new Schema ({
    title: String,
    mood: String,
    text: String,
})

module.exports = mongoose.model('Blogs', blogSchema)