const mongoose = require('mongoose');

const ProductSchema = mongoose.Schema({
    user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'users'
},
    id: { 
    type: Number
},
    title: {
    type: String,
    required: true
},
    price: {
    type: Number,
    required: true
},
    description: {
    type: String,
    required: true
},
    category: {
    type: String
},
    image: {
    type: String
},
    rating: {
        rate: {
        type: Number
        },
        count: {
            type: Number
        }
    },
    provider: {
    type: mongoose.Schema.Types.ObjectId, ref: "Providers" ,
    required: true
}
});
module.exports = mongoose.model('product', ProductSchema);
