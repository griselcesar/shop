import {
  getAllProducts,
  createOneProduct,
  getOneProductById,
  deleteOneProductById,
} from "../services/products.services.js";

export const getAllProductsController = async (req, res) => {
  let products = await getAllProducts();
  return res.status(200).json({
    message: "lista de productos",
    count: products.length,
    products: products.map((product) => ({
      id: product._id,
      código: product.code,
      marca: product.brand,
      categoría: product.category,
      detalles: product.description,
      precio: product.sale,
      foto: product.picture,
    })),
  });
};

export const createOneProductController = async (req, res) => {
  let { newProduct } = req;
  let product = await createOneProduct(newProduct);
  return res.status(201).json({
    message: "producto creado correctamente",
    producto: {
      id: product._id,
      código: product.code,
      marca: product.brand,
      categoría: product.category,
      detalles: product.description,
      precio: product.sale,
      foto: product.picture,
    },
  });
};

export const getOneProductByIdController = async (req, res) => {
  let { id } = req.params;
  let product = await getOneProductById(id);
  if (!product)
    return res.status(404).json({ message: "producto no encontrado" });
  return res.status(201).json({
    message: "datos del producto",
    producto: {
      id: product._id,
      código: product.code,
      marca: product.brand,
      categoría: product.category,
      detalles: product.description,
      precio: product.sale,
      foto: product.picture,
    },
  });
};

export const deleteOneProductByIdController = async (req, res) => {
  let { id } = req.params;
  let product = await deleteOneProductById(id);
  if (!product)
    return res.status(404).json({ message: "producto no encontrado" });
  return res.status(200).json({ message: "producto eliminado correctamente" });
};