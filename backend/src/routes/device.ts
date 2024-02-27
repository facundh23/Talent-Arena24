import express from 'express';
import { DeviceHandler } from '../handlers/device.handler';

const router = express.Router();

router.post('/', async (req, res) => {
  try {
    const result = await DeviceHandler.createDevice(req.body);
    res.json(result);
  } catch (error) {
    res.status(500).send();
  }
});

export default router;
