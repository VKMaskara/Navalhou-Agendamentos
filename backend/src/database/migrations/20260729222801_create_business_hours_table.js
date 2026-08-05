export async function up(knex) {
    await knex.schema.createTable('business_hours', (table) => {
        table
            .uuid('id')
            .primary()
            .defaultTo(knex.raw('gen_random_uuid()'))
        table
            .uuid('barbershop_id')
            .notNullable()
            .references('id')
            .inTable('barbershops')
        table
            .integer('day_of_week')
            .notNullable()
        table
        .time('open_time')
        .notNullable()
        table
        .time('close_time')
        .notNullable()
        table
         .boolean('closed')
         .notNullable()
        table.unique(['barbershop_id', 'day_of_week'])
    })
}

export async function down(knex) {
    await knex.schema.dropTable('business_hours')
}

