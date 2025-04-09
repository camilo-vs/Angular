import {Router} from 'express';
import { deletProduct, getProduct, getProducts, postProduct } from '../controllers/producto';

const router = Router();

router.get('/',getProducts);
router.get('/:id',getProduct);
router.delete('/:id',deletProduct);
router.post('/',postProduct);

export default router;