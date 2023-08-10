const express = require('express');
const router = express.Router();
const authMiddleware = require('../middlewares/authMiddleware');
const userController = require('../controllers/userController');

router.post('/login', userController.login);
router.get('/notifications', userController.getNotReadenNotifications);
router.delete('/deleteNotification/:notificationId' ,authMiddleware, userController.deleteNotification);
// Protected route that requires authentication
router.get('/protected', authMiddleware, (req, res) => {
  // You can access the authenticated user ID as req.body.userId here
  res.status(200).send({ message: 'Protected route accessed successfully', userId: req.body.userId });
});

module.exports = router;