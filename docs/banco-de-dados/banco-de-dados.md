# 🗄️ Banco de Dados

## Visão Geral

O Navalhou utiliza um banco de dados relacional desenvolvido em **PostgreSQL**, projetado para garantir integridade, organização e escalabilidade.

A modelagem foi construída seguindo princípios de normalização, buscando evitar redundância de dados e facilitar a manutenção do sistema.

O banco foi projetado para suportar o gerenciamento completo de uma barbearia, contemplando usuários, clientes, serviços, agendamentos, horários de funcionamento e autenticação.

---

# Tecnologias

- PostgreSQL
- Knex.js
- UUID como identificador primário
- Modelagem Relacional

---

# Modelo Entidade-Relacionamento (DER)

> Inserir aqui a imagem do DER atualizado.

---

# Entidades

## Barbershops

Armazena as informações da barbearia.

### Responsabilidades

- Dados cadastrais
- Endereço
- Contato
- Logo
- Status da barbearia

Relacionamentos

- 1:N Users
- 1:N Customers
- 1:N Services
- 1:N Business Hours
- 1:N Appointments

---

## Users

Armazena os usuários autenticados do sistema.

Tipos de usuários:

- Administrador
- Barbeiro

### Responsabilidades

- Login
- Autenticação
- Gerenciamento da agenda
- Dashboard
- Cadastro de informações pessoais

Relacionamentos

- N:1 Barbershops
- N:N Services
- 1:N Appointments
- 1:N Schedule Blocks
- 1:N Refresh Tokens

---

## Customers

Armazena os clientes da barbearia.

O cliente **não possui autenticação** no MVP.

Seu cadastro é realizado automaticamente durante o primeiro agendamento.

### Responsabilidades

- Dados do cliente
- Histórico de atendimentos

Relacionamentos

- N:1 Barbershops
- 1:N Appointments

---

## Services

Representa o catálogo de serviços oferecidos pela barbearia.

Os serviços pertencem à barbearia e podem ser associados a um ou mais barbeiros.

### Responsabilidades

- Nome do serviço
- Descrição
- Preço
- Duração
- Status

Relacionamentos

- N:1 Barbershops
- N:N Users
- 1:N Appointments

---

## Barber Services

Tabela intermediária responsável por relacionar barbeiros aos serviços que executam.

Este relacionamento permite que:

- Um barbeiro realize vários serviços.
- Um serviço seja realizado por vários barbeiros.

Relacionamentos

- N:1 Users
- N:1 Services

---

## Appointments

Tabela central do sistema.

Armazena todos os agendamentos realizados na barbearia.

### Responsabilidades

- Cliente
- Barbeiro
- Serviço
- Data
- Horário
- Status
- Forma de pagamento
- Valor do atendimento

Relacionamentos

- N:1 Barbershops
- N:1 Customers
- N:1 Users
- N:1 Services

---

## Business Hours

Armazena os horários de funcionamento da barbearia.

Permite definir:

- Dias de funcionamento
- Horário de abertura
- Horário de fechamento
- Dias fechados

Relacionamentos

- N:1 Barbershops

---

## Schedule Blocks

Armazena bloqueios de horários realizados pelo barbeiro ou administrador.

Esses bloqueios impedem novos agendamentos durante o período definido.

Relacionamentos

- N:1 Users

---

## Refresh Tokens

Armazena os Refresh Tokens utilizados durante o processo de autenticação JWT.

Relacionamentos

- N:1 Users

---

# Principais Relacionamentos

## Barbershop

```text
Barbershop

├── Users
├── Customers
├── Services
├── Business Hours
└── Appointments
```

---

## Users × Services

O relacionamento entre barbeiros e serviços é do tipo **N:N**, implementado através da tabela intermediária **Barber Services**.

```text
Users

↓

Barber Services

↓

Services
```

Essa abordagem permite que:

- Um barbeiro realize vários serviços.
- Um serviço seja executado por vários barbeiros.

---

## Appointments

A tabela **Appointments** é o núcleo do sistema.

Ela conecta:

- Barbearia
- Cliente
- Barbeiro
- Serviço

Além de armazenar todas as informações necessárias para o atendimento.

---

# Decisões de Arquitetura

Durante a modelagem do banco de dados foram adotadas as seguintes decisões:

- Utilização de UUID como chave primária em todas as tabelas.
- Utilização de PostgreSQL como banco de dados relacional.
- Exclusão lógica através do campo `active` para entidades que podem ser desativadas.
- Clientes não possuem autenticação no MVP.
- Cada usuário pertence a apenas uma barbearia.
- Os serviços pertencem à barbearia e não ao barbeiro.
- O relacionamento entre barbeiros e serviços é do tipo N:N.
- O histórico de agendamentos é preservado para consultas e geração de relatórios.

---

# Ordem das Migrations

As migrations deverão ser executadas respeitando a ordem das dependências entre as tabelas.

1. Barbershops
2. Users
3. Customers
4. Services
5. Business Hours
6. Barber Services
7. Appointments
8. Schedule Blocks
9. Refresh Tokens

---

# Considerações Finais

A modelagem do banco de dados foi desenvolvida buscando simplicidade, organização e escalabilidade, permitindo futuras expansões do sistema sem necessidade de alterações estruturais significativas.

A estrutura atende aos requisitos definidos para o MVP do Navalhou e servirá como base para o desenvolvimento do backend utilizando Node.js, Express, Knex.js e PostgreSQL.