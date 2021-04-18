const { isAuth } = require('../middlewares/Auth');

const router = require('express').Router();

router
.use(isAuth)
.route('/')
.get(async(req,res,next) => {
    return res.json({
        message : "Hello from home!"
    })
})

module.exports = router