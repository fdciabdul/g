const axios = require('axios');
const gopay = require('./lib/gopay.class');


gopay.getTransactionHistory().then(data => {
    console.log(data);
})