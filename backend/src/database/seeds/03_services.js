import { DEFAULT_BARBERSHOP_ID, SERVICE_BARBA_ID, SERVICE_CORTE_ID } from "../seedIds.js";

export async function seed(knex) {

  const SERVICE_DATA = [
    {
      id: SERVICE_CORTE_ID,
      barbershop_id: DEFAULT_BARBERSHOP_ID,
      name: 'Corte de Cabelo',
      description: 'Serviço de corte de cabelo profissional.',
      duration: 30,
      price: 25.00,
      active: true
    },
    {
      id: SERVICE_BARBA_ID,
      barbershop_id: DEFAULT_BARBERSHOP_ID,
      name: 'Barba',
      description: 'Serviço de barba profissional.',
      duration: 20,
      price: 15.00,
      active: true
    }
  ]

  await knex('services').insert(SERVICE_DATA)
}