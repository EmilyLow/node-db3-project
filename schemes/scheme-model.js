
//!! Not sure if async/await should be in model or router. 
//Or if its doing promise processing in router, if I should define these as a promise somehow

const db = require("../data/config");

function find() {

    return db("schemes");
}

function findById(id) {

    let schemas = db("schemes").where("id", id);

    return schemas;
}

function add(data) {
    //!! Does this fail due to lack of await ect?
    //  let id = db("schemes").insert(data);
    
    //  return db("users").where("id", id)

    return db("schemes").insert(data);
}

function update(changes, id) {
    //!! How do you know what a database sql command will return? Is it standard?
    return db("schemes").where("id", id).update(changes);
}

function remove(id) {
 return db("schemes").where("id", id).del();
}

module.exports = {find, findById, add, update, remove};