exports.up = function (knex) {
    return knex.schema.createTable('ongs', function (table) {
        table.string('id').primary();
        table.string('name').notNultable();
        table.string('email').notNultable();
        table.string('whatsapp').notNultable();
        table.string('city').notNultable();
        table.string('uf', 2).notNultable();
    });
};

exports.down = function (knex) {
    return knex.schema.dropTable('ongs');
};