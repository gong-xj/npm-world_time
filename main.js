moment = require('moment');

date = new Date()
formatedDate = moment(date).format('L')
console.log(formatedDate)