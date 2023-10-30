import productModel from "../models/products.model.js";

export const getOneProductByCode = async (code) => {
  let product = await productModel.findOne({ code });
  return product;
};

export const getProductsByCategory = async (category) => {
  let products = await productModel.find({ category });
  return products;
};

export const getAllProducts = async () => {
  let products = await productModel.find();
  return products;
};

export const getOneProductById = async (id) => {
  let product = await productModel.findById(id);
  return product;
};

export const createOneProduct = async (newProduct) => {
  let product = await productModel.create(newProduct);
  return product;
};

export const deleteOneProductById = async (id) => {
  let product = await productModel.findByIdAndDelete(id);
  return product;
};

export const updateOneProductById = async (id,newDataProduct) => {
	let product = productModel.findByIdAndUpdate(id,newDataProduct,{new:true})
	return product
}
