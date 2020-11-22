const fs = require('fs');

const readStream = fs.createReadStream(`./package.json`);

readStream.on('data', function(chunk) {

    console.log(chunk.toString());

    process.nextTick(() => { console.log("NEXT TICK") });


    setTimeout(() => { console.log("TIME OUT") });

    setImmediate(() => { console.log("IMMEDIATE") });
});

readStream.on('error', function(err) {
    console.log(err);
})