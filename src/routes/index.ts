import { Router } from 'express';

import car from './car';

const router = Router();

router.get('/health-check', (req, res) => {
  res.send('success');
});
router.use('/car', car);

export default router;
