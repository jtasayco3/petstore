const newman = require('newman')
const apiKey = 'PMAK-61db31676cc4a241693c9828-57711b602126303f6a8956082b2fbb278d'
const uid =  '18932548-3a12d6db-a52e-4237-b708-68f13668501a'
const uid_env = '18932548-2e44cba5-0386-4a9d-b0d5-895fe8329b33'
const collection = `https://api.getpostman.com/collections/${uid}?apikey=${apiKey}`
const enviroment = `https://api.getpostman.com/environments/${uid_env}?apikey=${apiKey}`

newman.run({
   
    environment: enviroment,
    collection: collection,
    reporters: 'htmlextra',
    reporter:{
        export: './htmlResults.html'
    }
    }, function (err){
        if (err) { throw err; }
    console.log ('Test Complete');
});