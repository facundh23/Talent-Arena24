import express from 'express';
import { DeviceFilter, DeviceHandler } from '../handlers/device.handler';

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const result = await DeviceHandler.getAllDevices({
      name: req.query.name as string,
      type: req.query.type as string,
    });
    res.json(result);
  } catch (error) {
    console.log(error);
    res.status(500).send();
  }
});

router.post('/', async (req, res) => {
  try {
    const result = await DeviceHandler.createDevice(req.body);
    res.json(result);
  } catch (error) {
    console.log(error);
    res.status(500).send();
  }
});

export default router;
