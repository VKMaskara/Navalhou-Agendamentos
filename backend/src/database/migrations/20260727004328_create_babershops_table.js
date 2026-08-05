export async function up(knex) {

    await knex.schema.createTable('barbershops', (table) => {
        table
            .uuid('id')
            .primary()
            .defaultTo(knex.raw('gen_random_uuid()'))
        table
            .string('fantasy_name', 150)
            .notNullable()
        table
            .string('corporate_name', 150)
        table
            .string('cnpj', 18)
            .unique()
        table
            .string('phone', 20)
            .notNullable()
        table
            .string('email', 150)
            .notNullable()
            .unique()
        table
            .text('logo')
        table
            .string('zip_code', 9)
        table
            .string('street', 150)
        table
            .string('number', 20)
        table
            .string('district', 100)
        table
            .string('city', 100)
        table
            .string('state', 2)
        table
            .boolean('active').defaultTo(true)
            .notNullable()
        table
            .timestamp('created_at', {
                useTz: true
            })
            .defaultTo(knex.fn.now())
        table
            .timestamp('updated_at')
            .defaultTo(knex.fn.now())
    })

}

export async function down(knex) {
    await knex.schema.dropTable('barbershops')
}
