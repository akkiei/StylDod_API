const express = require('express');
const router = express.Router();
const registerService = require('../service/service.Register');

router.get('/', (req, res) => {
	res.send('This is the test url for API');
});

router.post('/', async (req, res) => {
	const registerServiceObj = new registerService();
	const result = await registerServiceObj.AddUser(req.body);
	if (result == -1 || result == [] || result == undefined)
		res.status(200).send({
			message: 'Unable to Register',
			status: 500
		});
	else if(result == -2){
		res.status(200).send({
			message: 'User already exists',
			status: 400
		});
	}
	else {
		res.status(200).send({
			message: 'Success',
			status: 200
		});
	}
});

module.exports = router;
