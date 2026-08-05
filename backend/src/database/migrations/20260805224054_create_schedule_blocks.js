export async function up(knex) {
    await knex.schema.createTable('schedule_blocks', (table) => {
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
            .timestamp('start_datetime', {
                useTz: true
            })
            .notNullable()
        table
            .timestamp('end_datetime', {
                useTz: true
            })
            .notNullable()
        table
            .string('reason', 225)
        table
            .timestamp('created_at', {
                useTz: true
            })
            .defaultTo(knex.fn.now())


    })
}

export async function down(knex) {
    await knex.schema.dropTable('schedule_blocks')
}
