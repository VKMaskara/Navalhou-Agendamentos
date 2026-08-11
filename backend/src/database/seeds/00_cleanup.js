export async function seed(knex) {
  await knex('refresh_tokens').del()
  await knex('appointments').del()
  await knex('schedule_blocks').del()
  await knex('barber_services').del()
  await knex('business_hours').del()
  await knex('services').del()
  await knex('custumers').del()
  await knex('users').del()
  await knex('barbershops').del()
}