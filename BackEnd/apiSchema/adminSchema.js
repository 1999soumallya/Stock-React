const Joi = require('@hapi/joi');

module.exports.signupUserSchema = Joi.object().keys({
    email: Joi.string().required().email(),
    password: Joi.string().required().min(6),
    confirm_password : Joi.ref('password'),
    firstName : Joi.string().required(),
    lastName : Joi.string().required(),
    dob : Joi.string().required(),
    panNumber : Joi.string().required(),
    broker : Joi.string(),
    brokerId : Joi.string(),
    phone : Joi.number().required(),
    // street : Joi.string().required(),
    // city : Joi.string().required(),
    // pincode : Joi.number().required(),
    // state : Joi.string().required(),
    // country : Joi.string().required(),
    userType : Joi.string().valid('user', 'admin')
})

module.exports.loginUserSchema = Joi.object().keys({
    email: Joi.string().required().email(),
    password: Joi.string().required()
})

module.exports.updateUserSchema = Joi.object().keys({
    email: Joi.string().email(),
    phone : Joi.number(),
    // street : Joi.string(),
    // city : Joi.string(),
    // pincode : Joi.number(),
    // state : Joi.string(),
    // country : Joi.string(),
    firstName : Joi.string(),
    lastName : Joi.string(),
    dob : Joi.string(),
    panNumber : Joi.string(),
    broker : Joi.string(),
    brokerId : Joi.string(),
})

module.exports.updateUserStatusSchema = Joi.object().keys({
    user_id : Joi.string().required(),
    status : Joi.string().required().valid('active', 'inactive', 'suspended')
}).unknown(true)

module.exports.createClientApiSchema = Joi.object().keys({
    userId : Joi.string().required(),
    clientApiId : Joi.string().required(),
    key : Joi.string().required(),
    secret : Joi.string().required()
})
module.exports.updateClientApiStatusSchema = Joi.object().keys({
    userId : Joi.string().required(),
    apiId : Joi.string().required(),
    status : Joi.string().required().valid('active', 'inactive')
})

module.exports.createStrategySchema = Joi.object().keys({
    apiId : Joi.string().required(),
    userId : Joi.string().required(),
    strategyType : Joi.string().required().valid('time_based', 'wait_trade', 'range_breakout'),
    indices : Joi.string().required().valid('NIFTY', 'BANKNIFTY'),
    entryTime : Joi.when('strategyType', {
        is : 'time_based',
        then : Joi.string().isoDate().required()
    }),
    exitTime : Joi.string().isoDate().required(),
    // .when('strategyType', {
    //     is : 'time_based',
    //     // then : Joi.string().isoDate().greater(Joi.ref('entryTime'))
    //     then : Joi.string().isoDate().max(Joi.ref('entryTime'))
    // }),
    quantity : Joi.number().required().min(1),
    strikePriceATM : Joi.number().required().min(0),
    strikePriceOption : Joi.number().min(0),
    stopLoss : Joi.number().required().min(0),
    target : Joi.number().required().min(0),
    trailing : Joi.number().required().min(0),
    maxProfit : Joi.number().required().min(0),
    maxLoss : Joi.number().required().min(0)
})

module.exports.copyStrategySchema = Joi.object().keys({
    userId : Joi.string().required(),
    strategyId : Joi.string().required()
})

