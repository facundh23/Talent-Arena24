import express from 'express';
import { DeviceHandler } from '../handlers/device.handler';

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const result = await DeviceHandler.getAllDevices();
    res.json(result);
  } catch (error) {
    res.status(500).send();
  }
});

router.get('/status-count', async (req, res) => {
  try {
    const offlineDevices = await DeviceHandler.countOfflineDevices();
    const onlineDevices = await DeviceHandler.countOnlineDevices();
    res.json({offlineDevices, onlineDevices});
  } catch (error) {
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
