import express from 'express';
import { NotifyHandler } from '../handlers/notify.handler';

const router = express.Router();

router.post('/', async (req, res) => {
  try {
    const result = await NotifyHandler.handlerDeviceStatusNotification(
      req.body
    );
    res.json(result);
  } catch (error) {
    res.status(500).send();
  }
});

export default router;
