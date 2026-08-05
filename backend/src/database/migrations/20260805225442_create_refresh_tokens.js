export async function up(knex) {
 await knex.schema.createTable('refresh_tokens', (table) => {
    table
        .uuid('id')
        .primary()
        .defaultTo(knex.raw('gen_random_uuid()'))
    table
        .uuid('user_id')
        .notNullable()
        .references('id')
        .inTable('users')
    table
        .text('token')
        .notNullable()
    table
        .timestamp('expires_at', {
            useTz: true
        })
        .notNullable()
    table
        .timestamp('created_at', {
            useTz: true
        })
        .defaultTo(knex.fn.now())
 })
}

export async function down(knex) {
    await knex.schema.dropTable('refresh_tokens')
}