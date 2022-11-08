const mongoose = require('mongoose');
const url = 'mongodb+srv://ElphillTechnology:elphill123@cluster0.tyvvzim.mongodb.net/trading?retryWrites=true&w=majority'


module.exports = async () => {
	try {
		console.log('connecting...')
		await mongoose.connect(url, {useNewUrlParser: true, useUnifiedTopology: true});
		
		console.log('DB Connected Successfully');
	} catch(error) {
		console.log('DB conncetion failed', error);
		throw new Error(error);
	}
};