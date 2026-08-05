export async function up(knex) {
 await knex.schema.createTable('custumers', (table) => {
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
            .string('phone', 20)
            .notNullable()
            
        table
            .string('email', 150)
            .notNullable()
            
        table
            .text('notes', 500)
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
    await knex.schema.dropTable('costumers')
}
