import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { useForm } from '../../../hooks/useForm';
import { updateProductAction } from '../../../actions/product';
import { setLoading } from '../../../actions/general';

export const UpdateProduct = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { updateProduct, loading } = useSelector((state) => state.products);

  const [product, handleInputChange, setProduct] = useForm({
    data: '',
    price: '',
  });

  useEffect(() => {
    if (updateProduct) {
      setProduct(updateProduct);
    }
  }, [updateProduct]);
  const { data, price } = product;

  const handleSubmitUpdate = async (e) => {
    e.preventDefault();
    setLoading(true);

    await dispatch(updateProductAction(product));
    setLoading(false);

    history.push('/');
  };

  return (
    <div className="row justify-content-center mt-6">
      <div className="col-lg-24">
        <div className="card">
          <div className="card-body">
            <h2 className="text-center mb-5">Edit Products</h2>
            {alert && <p className={alert.class}>{alert.msg}</p>}
            <form onSubmit={handleSubmitUpdate}>
              <div className="form-group">
                <label>Eit here</label>
                <textarea
                  name="data"
                  type="text"
                  className="form-control"
                  placeholder="Nombre del Producto*"
                  value={data}
                  onChange={handleInputChange}
                ></textarea>
              </div>
             
              <button
                type="submit"
                className="btn btn-primary font-weight-bold btn-block text-uppercase mt-5"
                disabled={loading}
              >
                update
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
