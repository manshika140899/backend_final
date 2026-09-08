// const express = require("express");
// const router = express.Router();

// const Cart = require("../models/Cart");

// // =====================================================
// // GET ALL CART PRODUCTS
// // =====================================================

// router.get("/", async (req, res) => {
//   try {
//     const cart = await Cart.find().sort({
//       createdAt: -1,
//     });

//     res.status(200).json(cart);
//   } catch (error) {
//     console.error("GET CART ERROR:", error);

//     res.status(500).json({
//       message: "Failed to get cart",
//       error: error.message,
//     });
//   }
// });

// // =====================================================
// // GET SINGLE CART PRODUCT
// // =====================================================

// router.get("/:id", async (req, res) => {
//   try {
//     const product = await Cart.findById(req.params.id);

//     if (!product) {
//       return res.status(404).json({
//         message: "Cart product not found",
//       });
//     }

//     res.status(200).json(product);
//   } catch (error) {
//     console.error("GET SINGLE CART ERROR:", error);

//     res.status(500).json({
//       message: "Failed to get cart product",
//       error: error.message,
//     });
//   }
// });

// // =====================================================
// // ADD PRODUCT TO CART
// // =====================================================

// router.post("/", async (req, res) => {
//   try {
//     console.log("====================================");
//     console.log("🔥 ADD TO CART REQUEST");
//     console.log("BODY:", req.body);
//     console.log("====================================");

//     const {
//       productId,
//       name,
//       image,
//       size,
//       color,
//       price,
//       quantity,
//       discount,
//     } = req.body;

//     // =================================================
//     // VALIDATION
//     // =================================================

//     if (
//       productId === undefined ||
//       productId === null ||
//       !name ||
//       !image ||
//       price === undefined ||
//       price === null
//     ) {
//       return res.status(400).json({
//         message:
//           "productId, name, image and price are required",
//         receivedData: req.body,
//       });
//     }

//     // =================================================
//     // CLEAN VALUES
//     // =================================================

//     const finalPrice = Number(price);

//     const finalQuantity = Math.max(
//       1,
//       Number(quantity) || 1
//     );

//     const finalDiscount =
//       Number(discount) || 0;

//     if (Number.isNaN(finalPrice)) {
//       return res.status(400).json({
//         message: "Price must be a valid number",
//         price,
//       });
//     }

//     // =================================================
//     // CREATE CART PRODUCT
//     // =================================================

//     const newProduct = new Cart({
//       productId: productId,

//       name: String(name),

//       image: String(image),

//       size: size || "Large",

//       color: color || "Green",

//       price: finalPrice,

//       quantity: finalQuantity,

//       discount: finalDiscount,
//     });

//     console.log(
//       "🔥 CART PRODUCT BEFORE SAVE:",
//       newProduct
//     );

//     // =================================================
//     // SAVE TO MONGODB
//     // =================================================

//     const savedProduct =
//       await newProduct.save();

//     console.log(
//       "🔥 CART PRODUCT SAVED:",
//       savedProduct
//     );

//     // =================================================
//     // GET UPDATED CART
//     // =================================================

//     const cart = await Cart.find().sort({
//       createdAt: -1,
//     });

//     // =================================================
//     // RESPONSE
//     // =================================================

//     res.status(201).json({
//       message:
//         "Product added to cart successfully",

//       product: savedProduct,

//       cart,
//     });
//   } catch (error) {
//     // =================================================
//     // IMPORTANT: SHOW ACTUAL ERROR
//     // =================================================

//     console.error(
//       "===================================="
//     );

//     console.error(
//       "🔥 ADD CART PRODUCT ERROR"
//     );

//     console.error(
//       "MESSAGE:",
//       error.message
//     );

//     console.error(
//       "NAME:",
//       error.name
//     );

//     console.error(
//       "ERROR:",
//       error
//     );

//     console.error(
//       "===================================="
//     );

//     res.status(500).json({
//       message:
//         "Failed to add product to cart",

//       error: error.message,

//       errorName: error.name,
//     });
//   }
// });

// // =====================================================
// // UPDATE CART PRODUCT
// // =====================================================

// router.put("/:id", async (req, res) => {
//   try {
//     const {
//       quantity,
//       size,
//       color,
//       image,
//     } = req.body;

//     const product =
//       await Cart.findById(req.params.id);

//     if (!product) {
//       return res.status(404).json({
//         message: "Cart product not found",
//       });
//     }

//     if (quantity !== undefined) {
//       product.quantity = Math.max(
//         1,
//         Number(quantity) || 1
//       );
//     }

//     if (size !== undefined) {
//       product.size = size;
//     }

//     if (color !== undefined) {
//       product.color = color;
//     }

//     if (image !== undefined) {
//       product.image = image;
//     }

//     const updatedProduct =
//       await product.save();

//     res.status(200).json({
//       message: "Cart product updated",

//       product: updatedProduct,
//     });
//   } catch (error) {
//     console.error(
//       "UPDATE CART PRODUCT ERROR:",
//       error
//     );

//     res.status(500).json({
//       message:
//         "Failed to update cart product",

//       error: error.message,
//     });
//   }
// });

// // =====================================================
// // DELETE CART PRODUCT
// // =====================================================

// router.delete("/:id", async (req, res) => {
//   try {
//     const product =
//       await Cart.findByIdAndDelete(
//         req.params.id
//       );

//     if (!product) {
//       return res.status(404).json({
//         message: "Cart product not found",
//       });
//     }

//     const cart = await Cart.find().sort({
//       createdAt: -1,
//     });

//     res.status(200).json({
//       message:
//         "Product removed from cart",

//       cart,
//     });
//   } catch (error) {
//     console.error(
//       "DELETE CART PRODUCT ERROR:",
//       error
//     );

//     res.status(500).json({
//       message:
//         "Failed to remove cart product",

//       error: error.message,
//     });
//   }
// });

// module.exports = router;



//catgpt
// const express = require("express");
// const router = express.Router();

// const Order = require("../models/Order");
// const Cart = require("../models/Cart");

// // =====================================================
// // GET ALL ORDERS
// // =====================================================

// router.get("/", async (req, res) => {
//   try {
//     const orders = await Order.find().sort({
//       createdAt: -1,
//     });

//     res.status(200).json(orders);
//   } catch (error) {
//     console.error("GET ORDERS ERROR:", error);

//     res.status(500).json({
//       message: "Failed to get orders",
//       error: error.message,
//     });
//   }
// });

// // =====================================================
// // GET SINGLE ORDER
// // =====================================================

// router.get("/:id", async (req, res) => {
//   try {
//     const order = await Order.findById(req.params.id);

//     if (!order) {
//       return res.status(404).json({
//         message: "Order not found",
//       });
//     }

//     res.status(200).json(order);
//   } catch (error) {
//     console.error("GET SINGLE ORDER ERROR:", error);

//     res.status(500).json({
//       message: "Failed to get order",
//       error: error.message,
//     });
//   }
// });

// // =====================================================
// // CREATE ORDER
// // =====================================================

// router.post("/", async (req, res) => {
//   try {
//     console.log("====================================");
//     console.log("🔥 CREATE ORDER REQUEST");
//     console.log("BODY:", req.body);
//     console.log("====================================");

//     const {
//       customer,
//       products,
//       subtotal,
//       discount,
//       deliveryFee,
//       total,
//       promoCode,
//       paymentMethod,
//       orderStatus,
//     } = req.body;

//     // =================================================
//     // VALIDATION
//     // =================================================

//     if (!customer) {
//       return res.status(400).json({
//         message: "Customer information is required",
//       });
//     }

//     if (!Array.isArray(products) || products.length === 0) {
//       return res.status(400).json({
//         message: "At least one product is required",
//       });
//     }

//     if (!customer.firstName) {
//       return res.status(400).json({
//         message: "First name is required",
//       });
//     }

//     if (!customer.lastName) {
//       return res.status(400).json({
//         message: "Last name is required",
//       });
//     }

//     if (!customer.email) {
//       return res.status(400).json({
//         message: "Email is required",
//       });
//     }

//     if (!customer.phone) {
//       return res.status(400).json({
//         message: "Phone is required",
//       });
//     }

//     if (!customer.address) {
//       return res.status(400).json({
//         message: "Address is required",
//       });
//     }

//     if (!customer.city) {
//       return res.status(400).json({
//         message: "City is required",
//       });
//     }

//     if (!customer.postalCode) {
//       return res.status(400).json({
//         message: "Postal code is required",
//       });
//     }

//     // =================================================
//     // CLEAN PRODUCTS
//     // =================================================

//     const finalProducts = products.map((product) => {
//       const price = Number(product.price);

//       const quantity = Math.max(
//         1,
//         Number(product.quantity) || 1
//       );

//       const discountValue =
//         Number(product.discount) || 0;

//       return {
//         productId:
//           product.productId ??
//           product.id ??
//           null,

//         name: String(product.name || ""),

//         image: String(product.image || ""),

//         size: product.size || "Large",

//         color: product.color || "green",

//         price: Number.isFinite(price) ? price : 0,

//         quantity,

//         discount: discountValue,
//       };
//     });

//     // =================================================
//     // CREATE ORDER
//     // =================================================

//     const newOrder = new Order({
//       customer: {
//         firstName: String(customer.firstName).trim(),

//         lastName: String(customer.lastName).trim(),

//         email: String(customer.email).trim(),

//         phone: String(customer.phone).trim(),

//         address: String(customer.address).trim(),

//         city: String(customer.city).trim(),

//         postalCode: String(customer.postalCode).trim(),

//         country:
//           customer.country || "Pakistan",
//       },

//       products: finalProducts,

//       subtotal: Number(subtotal) || 0,

//       discount: Number(discount) || 0,

//       deliveryFee: Number(deliveryFee) || 0,

//       total: Number(total) || 0,

//       promoCode: promoCode || "",

//       paymentMethod:
//         paymentMethod === "card"
//           ? "card"
//           : "cod",

//       orderStatus:
//         orderStatus || "Pending",
//     });

//     console.log(
//       "🔥 ORDER BEFORE SAVE:",
//       newOrder
//     );

//     // =================================================
//     // SAVE ORDER TO MONGODB
//     // =================================================

//     const savedOrder =
//       await newOrder.save();

//     console.log(
//       "🔥 ORDER SAVED:",
//       savedOrder
//     );

//     // =================================================
//     // CLEAR CART AFTER SUCCESSFUL ORDER
//     // =================================================

//     try {
//       await Cart.deleteMany({});
//       console.log("🔥 CART CLEARED AFTER ORDER");
//     } catch (cartError) {
//       console.error(
//         "⚠️ CART CLEAR ERROR:",
//         cartError.message
//       );
//     }

//     // =================================================
//     // RESPONSE
//     // =================================================

//     res.status(201).json({
//       message: "Order created successfully",

//       order: savedOrder,
//     });
//   } catch (error) {
//     console.error("====================================");

//     console.error(
//       "🔥 CREATE ORDER ERROR"
//     );

//     console.error(
//       "MESSAGE:",
//       error.message
//     );

//     console.error(
//       "NAME:",
//       error.name
//     );

//     console.error(
//       "ERROR:",
//       error
//     );

//     console.error("====================================");

//     res.status(500).json({
//       message: "Failed to create order",

//       error: error.message,

//       errorName: error.name,
//     });
//   }
// });

// // =====================================================
// // UPDATE ORDER STATUS
// // =====================================================

// router.put("/:id", async (req, res) => {
//   try {
//     const { orderStatus } = req.body;

//     const order =
//       await Order.findById(req.params.id);

//     if (!order) {
//       return res.status(404).json({
//         message: "Order not found",
//       });
//     }

//     if (orderStatus !== undefined) {
//       order.orderStatus = orderStatus;
//     }

//     const updatedOrder =
//       await order.save();

//     res.status(200).json({
//       message: "Order updated successfully",

//       order: updatedOrder,
//     });
//   } catch (error) {
//     console.error(
//       "UPDATE ORDER ERROR:",
//       error
//     );

//     res.status(500).json({
//       message: "Failed to update order",

//       error: error.message,
//     });
//   }
// });

// // =====================================================
// // DELETE ORDER
// // =====================================================

// router.delete("/:id", async (req, res) => {
//   try {
//     const order =
//       await Order.findByIdAndDelete(
//         req.params.id
//       );

//     if (!order) {
//       return res.status(404).json({
//         message: "Order not found",
//       });
//     }

//     res.status(200).json({
//       message: "Order deleted successfully",

//       order,
//     });
//   } catch (error) {
//     console.error(
//       "DELETE ORDER ERROR:",
//       error
//     );

//     res.status(500).json({
//       message: "Failed to delete order",

//       error: error.message,
//     });
//   }
// });

// module.exports = router;



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