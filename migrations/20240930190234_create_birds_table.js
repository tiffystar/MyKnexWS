/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('birds', table => {
        table.increments('id'); 
        table.string('common_name').notNullable();
        table.string('genus');
        table.string('species');
        table.timestamps(true, true); 
      });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTableIfExists('birds');
};
