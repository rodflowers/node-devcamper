const mongoose = require('mongoose');

const BootcampSchema = new mongoose.Schema({
    name: {
        type: String,
        require: [true, 'Please add a name'],
        trim: true,
        maxlength: [50, 'No more than 50 characters']
    },
    slug: String,
    description: {
        type: String,
        require: [true, 'Please add a name'],
        maxlength: [500, 'No more than 500 characters']
    }
})