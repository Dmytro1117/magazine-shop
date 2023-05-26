import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

//message Toast
export const succesNotify = () => {
  toast.success('The product has been added to the cart!', {
    position: toast.POSITION.TOP_LEFT,
  });
};
