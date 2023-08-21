const express = require('express')
const fs = require('fs')
const router = express.Router()
const createfile = require('../Controller/FirstController')

router.get('/Router', createfile.createfile)

module.exports = router