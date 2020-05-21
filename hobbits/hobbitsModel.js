const db = require("../data/dbConfig.js");

module.exports = {
  get,
  add,
  update,
  remove,
  getAll,
  findById,
};

function get() {
  return db("hobbits");
}
function findById(id) {
  return db("hobbits")
    .where({ id: Number(id) })
    .first();
}

function add(hobbit) {
  return db("hobbits")
    .insert(hobbit, "id")
    .then((id) => {
      return findById(id);
    });
}
async function update(id, changes) {
  return null;
}

function remove(id) {
  return null;
}

function getAll() {
  return db("hobbits");
}

function findById(id) {
  return null;
}
