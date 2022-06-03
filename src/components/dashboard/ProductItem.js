
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import {
  getProductUpdate,
} from '../../actions/product';

export const ProductItem = ({ product, index }) => {
  const { id, data, price } = product;

  const dispatch = useDispatch();
  const history = useHistory();

  const redirectUpdate = (product) => {
    history.push(`/editar/${product.id}`);
    dispatch(getProductUpdate(product));
  };

  return (
    <tr>
      <th scope="row">{index + 1} </th>
      <td>{data}</td>
      <td>
        <button
          type="button"
          className="btn btn-success mr-4 mb-3 mb-sm-0"
          onClick={() => redirectUpdate(product)}
        >
          Edit
        </button>
      
      </td>
    </tr>
  );
};
