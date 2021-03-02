const router = require('express').Router()
let Medicin = require('../Modals/MedicinModal')
//let Order = require('../Modals/OrderModal')
let MedicinType = require('../Modals/MedicinType')

router.route('/').get((req,res) => {
    Medicin.find(this.name)
    .then(orders => res.json(orders))
    .catch(err => res.status(400).json('Error: '+ err))
})

router.route('/add').post((req,res) => {
    const name = req.body.name
    const content = req.body.content
    const type = req.body.type
    const price = req.body.price
    const quantity = req.body.quantity
    const image = req.body.image
    const status = req.body.status

    const newMedicin = new Medicin({
        name, content, type, price, quantity, image, status
    });
    newMedicin.save()
        .then(() => res.json('Medicin Added !'))
        .catch(err => res.status(400).json('Error: '+err))
})

router.route('/type').get((req,res) => {
    MedicinType.find()
    .then(Types => res.json(Types))
    .catch(err => res.status(400).json('Error: '+ err))
})

router.route('/type/add').post((req,res) => {
    const medicintype = req.body.medicintype
    const status = req.body.status
    const newMedicinTpe = new MedicinType({
        medicintype, status
    });
    newMedicinTpe.save()
        .then(() => res.json(' New Medicin Type Added !'))
        .catch(err => res.status(400).json('Error: '+err))
})

module.exports = router;