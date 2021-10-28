const mongoose = require("mongoose");
const mongooseSlugPlugin = require('mongoose-slug-plugin');

const ProductSchema = mongoose.Schema(
    {
    name: {
        type: String,
        required: true,
    },
    slug: { type: String },
    image: { type: String },
    description: String,
    color: String,
    Quantity: {
        type: Number,
        min: 0,
    },
    Price: {
        type: Number,
        default: 7,
    },

},
 {
    timestamps: true,
 }
);

ProductSchema.plugin(mongooseSlugPlugin, { tmpl: '<%=name%>' });


module.exports = mongoose.model("Product", ProductSchema);