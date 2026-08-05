export async function up(knex) {
    await knex.schema.createTable('services', (table) => {
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
            .string('name', 150)
            .notNullable()
        table
            .text('description')
        table
            .integer('duration')
            .notNullable()
        table
            .decimal('price', 10, 2)
            .notNullable()
        table
            .boolean('active').defaultTo(true)
            .notNullable()
        table
            .timestamp('created_at', {
                useTz: true
            })
            .defaultTo(knex.fn.now())
        table
            .timestamp('updated_at',{
                useTz: true
            })
            .defaultTo(knex.fn.now())
    })
}

export async function down(knex) {
    await knex.schema.dropTable('services')
}


