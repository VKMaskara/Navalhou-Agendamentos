export async function up(knex) {
    await knex.schema.createTable('barber_services', (table) => {
        table
            .uuid('id')
            .primary()
            .defaultTo(knex.raw('gen_random_uuid()'))
        table
            .uuid('barber_id')
            .notNullable()
            .references('id')
            .inTable('users')
        table
            .uuid('service_id')
            .notNullable()
            .references('id')
            .inTable('services')
        table
            .timestamp('created_at', {
                useTz: true
            })
            .defaultTo(knex.fn.now())
        table.unique([
            'barber_id',
            'service_id'
        ]);
    })
}

export async function down(knex) {
    await knex.schema.dropTable('barber_services')
}