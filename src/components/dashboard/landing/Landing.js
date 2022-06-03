// import React from "react";
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllProductsAction } from '../../../actions/product';


import { ProductItem } from '../ProductItem';

export const Landing=()=>{
const dispatch = useDispatch();
const {  products, error } = useSelector((state) => state.products);

useEffect(() => {
  dispatch(getAllProductsAction());
}, [dispatch]);

  return (
    <>
    <div className="row justify-content-center">
    <div className="col-lg-8">
      <h2 className="text-center mb-4">List of Products</h2>

      {error && <p className="alert alert-danger">An Error occured</p>}

     
        <table className="table  table-hover">
          <thead className="bg-primary table-dark">
            <tr>
              <th scope="col">#</th>
              <th scope="col">data</th>
              <th scope="col">operations</th>
            </tr>
          </thead>
          <tbody>
            {products.length === 0 ? (
              <tr>
                <td colSpan="4">
                  <h4 className="font-weight-bold alert alert-light text-center">
                    No products found ......,
                  </h4>
                </td>
              </tr>
            ) : (
              products.map((product, index) => (
                <ProductItem
                  key={product.id}
                  index={index}
                  product={product}
                />
              ))
            )}
          </tbody>
        </table>
      
    </div>
  </div>
  </>
  
  )
  
};