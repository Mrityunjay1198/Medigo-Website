const router = require('express').Router()
let User = require('../Modals/UserModal')

router.route('/').get((req,res) => {
    User.find()
    .then(users => res.json(users))
    .catch(err => res.status(400).json('Error: '+ err))
    //res.send("User")
})

router.route('/add').post((req,res) => {
    const name = req.body.name
    const mobile = req.body.mobile
    const email = req.body.email
    const address = req.body.address
    const password = req.body.password
    const status = req.body.status

    const newUser = new User({
        name, mobile, email, address, password, status
    });
    newUser.save()
        .then(() => res.json('User Added !'))
        .catch(err => res.status(400).json('Error: '+err))
})

module.exports = router;