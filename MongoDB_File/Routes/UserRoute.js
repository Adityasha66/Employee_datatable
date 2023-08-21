const express = require('express')

const router = express.Router()
const UserController = require('../Controller/UserController')

router.post('/User', UserController.addUser)

router.get('/User', UserController.getallUser)

router.get('/User/:id', UserController.getDatabyId)

router.delete('/User/:id', UserController.deleteUser)

router.put('/User/:id', UserController.editUser)

module.exports = router