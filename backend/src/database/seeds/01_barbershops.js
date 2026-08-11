import { DEFAULT_BARBERSHOP_ID } from '../seedIds.js'

const DEFAULT_BARBERSHOP = {
  id: DEFAULT_BARBERSHOP_ID,
  fantasy_name: 'Navalhou Barbearia',
  corporate_name: 'Navalhou Serviços LTDA',
  cnpj: '12.345.678/0001-90',
  phone: '(11) 99999-9999',
  email: 'contato@navalhou.com',
  logo: null,
  zip_code: '06600-000',
  street: 'Rua das Tesouras',
  number: '123',
  district: 'Centro',
  city: 'Itapevi',
  state: 'SP',
  active: true
}

export async function seed(knex) {
  await knex('barbershops').insert(DEFAULT_BARBERSHOP)
}