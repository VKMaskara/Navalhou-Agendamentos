import {
  BARBER_JOAO_ID,
  BARBER_PEDRO_ID,
  SERVICE_CORTE_ID,
  SERVICE_BARBA_ID,
  BARBER_SERVICE_JOAO_CORTE_ID,
  BARBER_SERVICE_JOAO_BARBA_ID,
  BARBER_SERVICE_PEDRO_CORTE_ID
} from '../seedIds.js' 


export async function seed(knex) {
  const BARBER_SERVICES_DATA = [
    {
      id: BARBER_SERVICE_JOAO_CORTE_ID,
      barber_id: BARBER_JOAO_ID,
      service_id: SERVICE_CORTE_ID
    },
    {
      id: BARBER_SERVICE_JOAO_BARBA_ID,
      barber_id: BARBER_JOAO_ID,
      service_id: SERVICE_BARBA_ID
    },
    {
      id: BARBER_SERVICE_PEDRO_CORTE_ID,
      barber_id: BARBER_PEDRO_ID,
      service_id: SERVICE_CORTE_ID
    }
  ]
  await knex('barber_services').insert(BARBER_SERVICES_DATA)
}