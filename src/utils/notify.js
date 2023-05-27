import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

//message Toast
export const succesNotify = () => {
  toast.success('Added to the shopping cart!', {
    position: toast.POSITION.TOP_LEFT,
  });
};
