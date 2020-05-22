exports.up = function (knex) {
  return knex.schema.createTable("hobbits", (tbl) => {
    tbl.increments();

    tbl.string("name", 255).notNullable();
  });
};
//make a change and push
exports.down = function (knex) {
  // undo the operation in up
  return knex.schema.dropTableIfExists("hobbits");
};
