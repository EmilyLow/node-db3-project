
// Not sure config is exactly right for this
const db = require("../data/config");

function find() {

    return db("schemes");
}

module.exports = {find};