export async function up(knex) {
    await knex.schema.createTable('users', (table) => {
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
            .string('email', 150)
            .notNullable()
            .unique()
        table
            .string('phone', 20)
        table
            .string('password', 255) 
            .notNullable()
        table
           .string('role', 50)
           .notNullable();
        table
            .text('avatar')
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
    await knex.schema.dropTable('users')
}