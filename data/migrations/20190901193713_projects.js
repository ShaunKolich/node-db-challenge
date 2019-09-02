
exports.up = function(knex) {
    return knex.schema.createTable('projects', tbl => {
        tbl.increments();
        tbl.string('name',128).notNullable();
        tbl.string('description', 128);
        tbl.boolean('Completed').default('false');
    })
        .createTable('resource', tbl => {
            tbl.increments();
            tbl.string('name', 128).notNullable().unique();
            tbl.string('description', 128);

        })
        .createTable('task', tbl => {
            tbl.string('id', 10).notNullable();
            tbl.string('description', 128).notNullable();
            tbl.string('notes', 128);
            tbl.boolean('Completed').default('false');
    })
};

exports.down = function(knex) {
    return knex.schema
        .dropTableIfExists('projects')
        .dropTableIfExists('resource')
        .dropTableIfExists('task');
};
