const User = require('../Model/user')

const addUser = (req, res) => {

    var user = new User({

        name: req.body.name,
        email: req.body.email,
        address: req.body.address,
        phoneNo: req.body.phoneNo,
        ctc: req.body.ctc
    })
    user.save((err, docs) => {
        if (!err) {
            res.json(docs)
        } else {
            res.json(err)
        }
    })
}



const getallUser = (req, res) => {
    User.find((err, docs) => {
        if (!err) {
            res.json(docs)
        } else {
            res.json(err)
        }
    })

}

const getDatabyId = (req, res) => {
    User.findById(req.params.id, (err, docs) => {
        if (!err) {
            res.json(docs)
        } else {
            res.json(err)
        }
    })

}

const deleteUser = (req, res) => {
    User.findByIdAndDelete(req.params.id, (err, docs) => {
        if (!err) {
            res.json(docs)
        } else {
            res.json(err)
        }
    })

}

const editUser = (req, res) => {
    User.findByIdAndUpdate(req.params.id, {
        name: req.body.name,
        email: req.body.email,
        address: req.body.address,
        phoneNo: req.body.phoneNo,
        ctc: req.body.ctc
    }, (err, docs) => {
        if (!err) {
            res.json(docs)
        } else {
            res.json(err)
        }
    })

}





module.exports = { addUser, getallUser, deleteUser, editUser, getDatabyId }