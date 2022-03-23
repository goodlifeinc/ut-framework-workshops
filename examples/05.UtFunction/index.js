const tz = require("ut-function.timezone");

function delay(t, v) {
    return new Promise(function (resolve) {
        setTimeout(resolve.bind(null, v), t);
    });
}

function getRandomInt(min, max, length = 5) {
    min = Math.ceil(min);
    max = Math.floor(max);
    const result = Math.floor(Math.random() * (max - min + 1)) + min;
    return `${result}`.padStart(length, "0");
}

async function main() {
    console.log(getRandomInt(0, 99999));
    console.log(`DWHIST${tz(Date.now(), "%s")}${getRandomInt(0, 99999)}`);
    // await delay(1000);
    console.log(`DWHIST${tz(Date.now(), "%s")}${getRandomInt(0, 99999)}`);
    // await delay(1000);
    console.log(`DWHIST${tz(Date.now(), "%s")}${getRandomInt(0, 99999)}`);
    // await delay(1000);
    console.log(`DWHIST${tz(Date.now(), "%s")}${getRandomInt(0, 99999)}`);
}

main();

// customer.add -> (middleware) generate displayId -> store in mongodb
