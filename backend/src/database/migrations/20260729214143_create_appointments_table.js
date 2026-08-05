export async function up(knex) {
    await knex.schema.createTable('appointments', (table) => {
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
            .uuid('customer_id')
            .notNullable()
            .references('id')
            .inTable('custumers')
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
            .date('appointment_date', {
                useTz: true
            })
            .notNullable()
        table
            .time('start_time', {
                useTz: true
            })
            .notNullable()
        table
            .time('end_time', {
                useTz: true
            })
            .notNullable()
        table
            .enum('status', ['scheduled', 'completed', 'canceled', 'no_show'])
            .defaultTo('scheduled')
        table
            .decimal('total_amount', 10, 2)
            .defaultTo(0.00)
        table
            .decimal('discount', 10, 2)
            .defaultTo(0.00)
        table
            .enum('payment_method', ['cash', 'credit_card', 'debit_card', 'pix'])
            .defaultTo('cash')
            .notNullable()
        table
            .text('notes')
        table
            .uuid('created_by_user_id')
            .nullable()
            .references('id')
            .inTable('users')
        table
            .timestamp('created_at', {
                useTz: true
            })
            .defaultTo(knex.fn.now())
        table
            .timestamp('updated_at', {
                useTz: true
            })
            .defaultTo(knex.fn.now())

    })
}

export async function down(knex) {
    await knex.schema.dropTable('appointments')
}

