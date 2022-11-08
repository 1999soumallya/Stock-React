const express = require('express');
const router = express.Router();

const joiSchemaValidation = require('../middleware/joiSchemaValidation');
const adminSchema = require('../apiSchema/adminSchema');

const adminController = require('../controller/adminController');

router.get('/manage/',
	adminController.findAllUser
)

router.put('/manage/user/:user_id',
	joiSchemaValidation.validateBody(adminSchema.updateUserSchema),
	adminController.updateUser
)

router.put('/manage/user/:user_id/status/:status',
	joiSchemaValidation.validateQueryParams(adminSchema.updateUserStatusSchema),
	adminController.updateUserStatus
)

router.post('/manage/client_api',
	joiSchemaValidation.validateBody(adminSchema.createClientApiSchema),
	adminController.createClientApi
)

router.get('/manage/client_api/:user_id',
	adminController.findAllClientApisByUserId
)

router.get('/manage/all_client_api',
	adminController.findAllApi
)

router.put('/manage/client_api/status',
	joiSchemaValidation.validateBody(adminSchema.updateClientApiStatusSchema),
	adminController.updateClientApiStatus
)

router.post('/manage/strategy',
	joiSchemaValidation.validateBody(adminSchema.createStrategySchema),
	adminController.createStrategy
)

router.post('/manage/strategy/copy',
	joiSchemaValidation.validateBody(adminSchema.copyStrategySchema),
	adminController.copyStrategy
)

// router.get('/manage/strategy/:apiId',
// 	// joiSchemaValidation.validateQueryParams(adminSchema.copyStrategySchema),
// 	adminController.getAllStrategyDetailsByApiId
// )


module.exports = router;