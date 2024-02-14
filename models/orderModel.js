const mongoose = require('mongoose');
const { required } = require('nodemon/lib/config');

const orderSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user',
        required: true
        
    },
    cartId:{
      type:[mongoose.Schema.Types.ObjectId],
      ref: 'cart',
      required:true
        },
    oderedItem: [{
        productId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'product', 
        required: true
        },
        quantity:{
            type:Number,
            required:true
        },
        productStatus:{
            type: String,
            default:"pending",
            required: true
        }
    }],
    orderAmount: {
        type: Number,
        required: true,

    },
    deliveryAddress: {
        type: String,
        ref:"address",
        required: true,


    },
    orderStatus: {
        type: String,
        required: true,
        default:"pending"
    },
    deliveryDate:{
        type:Date
    },
    shippingDate:{
        type:Date
    },
    paymentMethod: {
        type: String,
        required: true,
   
    }
    
},
{
    timestamps:true
})

module.exports=mongoose.model('order',orderSchema)