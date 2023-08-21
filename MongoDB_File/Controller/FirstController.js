const fs = require('fs')
const createfile =
    (req, res) => {
        // fs.writeFileSync('hey.txt', 'hey everyone')
        // res.json('File Created')
        res.write('<html><head></head><body><input type="text" id="fname" name="fname"></body></html>')

    }


module.exports = { createfile }