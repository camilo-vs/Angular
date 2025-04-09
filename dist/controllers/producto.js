"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.postProduct = exports.deletProduct = exports.getProduct = exports.getProducts = void 0;
const getProducts = (req, res) => {
    res.json({
        msg: 'Get products'
    });
};
exports.getProducts = getProducts;
const getProduct = (req, res) => {
    const { id } = req.params;
    res.json({
        id,
        msg: 'Get product'
    });
};
exports.getProduct = getProduct;
const deletProduct = (req, res) => {
    const { id } = req.params;
    res.json({
        id,
        msg: 'Delete product'
    });
};
exports.deletProduct = deletProduct;
const postProduct = (req, res) => {
    const { body } = req;
    console.log(body);
    res.json({
        msg: 'Post product',
        body
    });
};
exports.postProduct = postProduct;
