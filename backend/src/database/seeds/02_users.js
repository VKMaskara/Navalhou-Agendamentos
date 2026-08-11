import bcrypt from 'bcryptjs'
import {
  DEFAULT_BARBERSHOP_ID,
  ADMIN_USER_ID,
  BARBER_JOAO_ID,
  BARBER_PEDRO_ID
} from '../seedIds.js' 

export async function seed(knex) {

  const passwordHash =  await bcrypt.hash('Navalhou@123', 12)

  const USERS_DATA = [
  {
    id : ADMIN_USER_ID,
    barbershop_id: DEFAULT_BARBERSHOP_ID,
    name: 'ADMIN',
    email: 'admin@navalhou.com',
    password: passwordHash, // ponto de atenção hash.
    role: 'ADMIN',
    active: true
  },
  {
    id : BARBER_JOAO_ID,
    barbershop_id: DEFAULT_BARBERSHOP_ID,
    name: 'João',
    email: 'joao@navalhou.com',
    password: passwordHash, // ponto de atenção hash.
    role: 'BARBER',
    active: true
  },
  {
    id : BARBER_PEDRO_ID,
    barbershop_id: DEFAULT_BARBERSHOP_ID,
    name: 'Pedro',
    email: 'pedro@navalhou.com',
    password: passwordHash, // ponto de atenção hash.
    role: 'BARBER',
    active: true
  }
]


  await knex('users').insert(USERS_DATA)
}