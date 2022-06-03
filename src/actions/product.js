import { db } from '../services/firebase';
import {
  ADD_PRODUCT,
  ADD_PRODUCT_SUCCESS,
  ADD_PRODUCT_ERROR,
  GET_PRODUCTS,
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCTS_ERROR,
  DELETE_PRODUCT,
  DELETE_PRODUCT_SUCCESS,
  DELETE_PRODUCT_ERROR,
  GET_PRODUCT_UPDATE,
  UPDATE_PRODUCT,
  UPDATE_PRODUCT_SUCCESS,
  UPDATE_PRODUCT_ERROR,
} from './types';

export const createProductAction = (product) => {
  return async (dispatch) => {
    dispatch(createProduct());

    try {
      const data = await db.collection('products').add(product);
      product.id = data.id;

      dispatch(createProductSuccess(product));

     
    } catch (error) {
      console.log(error);
      dispatch(createProductError());

    
    }
  };
};

const createProduct = () => ({
  type: ADD_PRODUCT,
  payload: true,
});

const createProductSuccess = (product) => ({
  type: ADD_PRODUCT_SUCCESS,
  payload: product,
});

const createProductError = () => ({
  type: ADD_PRODUCT_ERROR,
  payload: true,
});

export const getAllProductsAction = () => {
  return async (dispatch) => {
    dispatch(getAllProducts());

    try {
      const data = await db
        .collection('products')
        .get();
        console.log(data);

      const products = data.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      dispatch(getAllProductsSuccess(products));
    } catch (error) {
      console.log(error);
      getAllProductsError(true);
    }
  };
};

const getAllProducts = () => ({
  type: GET_PRODUCTS,
  payload: true,
});

const getAllProductsSuccess = (products) => ({
  type: GET_PRODUCTS_SUCCESS,
  payload: products,
});

const getAllProductsError = () => ({
  type: GET_PRODUCTS_ERROR,
  payload: true,
});

export const deleteProductAction = (idProduct) => {
  return async (dispatch) => {
    dispatch(deleteProduct(idProduct));
    try {
      await db.collection('products').doc(idProduct).delete();
      dispatch(deleteProductSuccess());
    } catch (error) {
      console.log(error);
      dispatch(deleteProductError());

     
    }
  };
};

const deleteProduct = (idProduct) => ({
  type: DELETE_PRODUCT,
  payload: idProduct,
});

const deleteProductSuccess = () => ({
  type: DELETE_PRODUCT_SUCCESS,
});

const deleteProductError = () => ({
  type: DELETE_PRODUCT_ERROR,
  payload: true,
});

export const getProductUpdate = (product) => ({
  type: GET_PRODUCT_UPDATE,
  payload: { ...product, price: '7' },
});

export const updateProductAction = (product) => {
  return async (dispatch) => {
    const { id, data, price } = product;
    dispatch(updateProduct());
    try {
      await db
        .collection('products')
        .doc(id)
        .update({ data, price: Number(price) });

      dispatch(updateProductSuccess({ id, data, price }));

     
    } catch (error) {
      console.log(error);
      dispatch(updateProductError());
      
    }
  };
};

const updateProduct = () => ({
  type: UPDATE_PRODUCT,
  payload: true,
});

const updateProductSuccess = (product) => ({
  type: UPDATE_PRODUCT_SUCCESS,
  payload: product,
});
const updateProductError = () => ({
  type: UPDATE_PRODUCT_ERROR,
  payload: true,
});
