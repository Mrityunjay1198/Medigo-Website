const router = require('express').Router()
let Orders = require('../Modals/OrderModal')

router.route('/').get((req,res) => {
    Orders.find()
    .then(orders => res.json(orders))
    .catch(err => res.status(400).json('Error: '+ err))
})

router.route('/add').post((req,res) => {
    const userid = req.body.userid
    const prescription = req.body.prescription
    const status = req.body.status

    const newOrder = new Orders({
        userid, prescription, status
    });
    newOrder.save()
        .then(() => res.json('New Order Added !'))
        .catch(err => res.status(400).json('Error: '+err))
})

module.exports = router;