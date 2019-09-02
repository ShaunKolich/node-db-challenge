
exports.up = function(knex) {
    return knex.schema.createTable('projects', tbl => {
        tbl.increments();
        tbl.string('Name',128).notNullable();
        tbl.string('Description', 128);
        tbl.boolean('Completed').default('false');
    })
        .createTable('resource', tbl => {
            tbl.increments();
            tbl.string('Name', 128).notNullable();
            tbl.string('Description', 128);

        })
        .createTable('task', tbl => {
            tbl.increments();
            tbl.string('Description', 128).notNullable();
            tbl.string('Notes', 128);
            tbl.boolean('Completed').default('false');
    })
};

exports.down = function(knex) {
    return knex.schema
        .dropTableIfExists('projects')
        .dropTableIfExists('resource')
        .dropTableIfExists('task');
};
