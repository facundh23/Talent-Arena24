import express from 'express';
import { DeviceTypeHandler } from '../handlers/device-type.handler';

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const result = await DeviceTypeHandler.getAllDeviceTypes();
    res.json(result);
  } catch (error) {
    res.status(500).send();
  }
});

export default router;
