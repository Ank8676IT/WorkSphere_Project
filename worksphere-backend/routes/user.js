const express = require('express');
const router = express.Router();
const UserController = require('../controller/user')
const Authentication = require('../authentication/auth');


// Public routes (no auth middleware)
router.post('/register', UserController.register)
router.post('/login', UserController.login)
router.post('/google', UserController.loginThroughGmail)

// Protected routes (with auth middleware)
router.put('/update', Authentication.auth, UserController.updateUser)
router.get('/user/:id', Authentication.auth, UserController.getProfileById)
router.post('/logout', Authentication.auth, UserController.logout)

router.get('/self', Authentication.auth, (req, res) => {
    return res.status(200).json({
        user: req.user
    })
})

module.exports = router;