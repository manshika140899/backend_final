const mongoose = require("mongoose");

const cartSchema = new mongoose.Schema(
{
productId: {
type: mongoose.Schema.Types.Mixed,
required: true,
},

name: {
  type: String,
  required: true,
},

image: {
  type: String,
  required: true,
},

size: {
  type: String,
  default: "Large",
},

color: {
  type: String,
  default: "Green",
},

price: {
  type: Number,
  required: true,
},

quantity: {
  type: Number,
  default: 1,
  min: 1,
},

discount: {
  type: Number,
  default: 0,
},


},
{
timestamps: true,
}
);

module.exports = mongoose.model("Cart", cartSchema);


// const mongoose = require("mongoose");

// const orderProductSchema = new mongoose.Schema(
//   {
//     productId: {
//       type: mongoose.Schema.Types.Mixed,
//       required: true,
//     },

//     name: {
//       type: String,
//       required: true,
//     },

//     image: {
//       type: String,
//       default: "",
//     },

//     size: {
//       type: String,
//       default: "Large",
//     },

//     color: {
//       type: String,
//       default: "green",
//     },

//     price: {
//       type: Number,
//       required: true,
//     },

//     quantity: {
//       type: Number,
//       required: true,
//       min: 1,
//     },

//     discount: {
//       type: Number,
//       default: 0,
//     },
//   },
//   {
//     _id: false,
//   }
// );

// const customerSchema = new mongoose.Schema(
//   {
//     firstName: {
//       type: String,
//       required: true,
//     },

//     lastName: {
//       type: String,
//       required: true,
//     },

//     email: {
//       type: String,
//       required: true,
//     },

//     phone: {
//       type: String,
//       required: true,
//     },

//     address: {
//       type: String,
//       required: true,
//     },

//     city: {
//       type: String,
//       required: true,
//     },

//     postalCode: {
//       type: String,
//       required: true,
//     },

//     country: {
//       type: String,
//       default: "Pakistan",
//     },
//   },
//   {
//     _id: false,
//   }
// );

// const orderSchema = new mongoose.Schema(
//   {
//     customer: {
//       type: customerSchema,
//       required: true,
//     },

//     products: {
//       type: [orderProductSchema],
//       required: true,
//       validate: {
//         validator: function (products) {
//           return products.length > 0;
//         },
//         message: "Order must contain at least one product",
//       },
//     },

//     subtotal: {
//       type: Number,
//       required: true,
//       default: 0,
//     },

//     discount: {
//       type: Number,
//       default: 0,
//     },

//     deliveryFee: {
//       type: Number,
//       default: 0,
//     },

//     total: {
//       type: Number,
//       required: true,
//       default: 0,
//     },

//     promoCode: {
//       type: String,
//       default: "",
//     },

//     paymentMethod: {
//       type: String,
//       enum: ["cod", "card"],
//       default: "cod",
//     },

//     orderStatus: {
//       type: String,
//       default: "Pending",
//     },
//   },
//   {
//     timestamps: true,
//   }
// );

// module.exports = mongoose.model("Order", orderSchema);