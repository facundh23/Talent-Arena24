import express from 'express';
import { TrackingHandler } from '../handlers/tracking.handler';

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const result = await TrackingHandler.createTracking(req.body);
    res.json(result);
  } catch (error) {
    res.status(500).send();
  }
});

router.post('/', async (req, res) => {
  try {
    const result = await TrackingHandler.createTracking(req.body);
    res.json(result);
  } catch (error) {
    res.status(500).send();
  }
});

export default router;
