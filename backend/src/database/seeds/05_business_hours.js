import { DEFAULT_BARBERSHOP_ID } from '../seedIds.js'

const BUSINESS_HOURS_DATA = [
  {
    barbershop_id: DEFAULT_BARBERSHOP_ID,
    day_of_week: 0,
    open_time: '00:00:00',
    close_time: '00:00:00',
    closed: true
  },
  {
    barbershop_id: DEFAULT_BARBERSHOP_ID,
    day_of_week: 1,
    open_time: '09:00:00',
    close_time: '19:00:00',
    closed: false
  },
  {
    barbershop_id: DEFAULT_BARBERSHOP_ID,
    day_of_week: 2,
    open_time: '09:00:00',
    close_time: '19:00:00',
    closed: false
  },
  {
    barbershop_id: DEFAULT_BARBERSHOP_ID,
    day_of_week: 3,
    open_time: '09:00:00',
    close_time: '19:00:00',
    closed: false
  },
  {
    barbershop_id: DEFAULT_BARBERSHOP_ID,
    day_of_week: 4,
    open_time: '09:00:00',
    close_time: '19:00:00',
    closed: false
  },
  {
    barbershop_id: DEFAULT_BARBERSHOP_ID,
    day_of_week: 5,
    open_time: '09:00:00',
    close_time: '19:00:00',
    closed: false
  },
  {
    barbershop_id: DEFAULT_BARBERSHOP_ID,
    day_of_week: 6,
    open_time: '09:00:00',
    close_time: '17:00:00',
    closed: false
  }
]

export async function seed(knex) {
  await knex('business_hours').insert(BUSINESS_HOURS_DATA)
}