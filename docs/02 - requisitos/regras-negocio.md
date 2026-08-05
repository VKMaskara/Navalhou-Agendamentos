# Regras de Negócio — Navalhou

---

# 👥 Clientes

## RN001 — Identificação do cliente

Um cliente deve ser identificado pelo número de telefone, que deve ser único dentro da barbearia.

## RN002 — Cadastro simplificado

O cliente não necessita criar uma conta ou possuir autenticação para realizar um agendamento.

## RN003 — Dados obrigatórios

Para realizar um agendamento, o cliente deve possuir:

- Nome;
- Telefone;
- E-mail.

---

# 💈 Barbeiros

## RN004 — Cadastro de barbeiros

Somente o proprietário da barbearia pode cadastrar novos barbeiros.

## RN005 — Acesso do barbeiro

Todo barbeiro cadastrado deve possuir um usuário de acesso ao sistema.

## RN006 — Restrição de dados

O barbeiro pode visualizar somente informações relacionadas aos seus próprios atendimentos.

## RN007 — Serviços realizados

Um barbeiro só poderá receber agendamentos de serviços que estejam associados a ele.

---

# ✂️ Serviços

## RN008 — Cadastro de serviços

Somente o proprietário pode cadastrar serviços.

## RN009 — Serviço ativo

Apenas serviços ativos podem ser utilizados em novos agendamentos.

## RN010 — Valor do serviço

O valor cadastrado no serviço será utilizado para cálculo dos indicadores financeiros.

## RN011 — Duração do serviço

A duração cadastrada no serviço deve ser considerada para cálculo da disponibilidade da agenda.

---

# 📅 Agendamentos

Essa é a parte mais importante.

## RN012 — Dados obrigatórios

Todo agendamento deve possuir:

- Cliente;
- Barbeiro;
- Serviço;
- Barbearia;
- Data;
- Horário.

## RN013 — Conflito de horários

Um barbeiro não pode possuir dois agendamentos ativos no mesmo horário.

## RN014 — Disponibilidade

Um horário somente poderá ser disponibilizado caso:

- Esteja dentro do horário de funcionamento;
- Não exista outro agendamento;
- Não exista bloqueio.

## RN015 — Duração do serviço

O sistema deve considerar a duração do serviço ao reservar um horário.

Exemplo:

Corte

09:00

Duração: 1h

Próximo horário:

10:00

## RN016 — Status do agendamento

Um agendamento deve possuir apenas um dos seguintes estados:

- Agendado;
- Finalizado;
- Cancelado;
- Não compareceu.

## RN017 — Histórico

Agendamentos não devem ser excluídos fisicamente.

Devem permanecer registrados para histórico.

---

# 🏢 Barbearia

## RN018 — Isolamento de dados

Cada barbearia deve visualizar somente seus próprios dados.

## RN019 — Proprietário

O usuário que cria uma barbearia será automaticamente seu administrador.

## RN020 — Funcionamento

Cada barbearia possui sua própria configuração de horários.

---

# 🕒 Horários

## RN021 — Funcionamento semanal

Cada dia pode possuir:

- Horário inicial;
- Horário final;
- Ou estar fechado.

## RN022 — Fora do expediente

Não devem existir agendamentos fora do horário configurado.

---

# 🚫 Bloqueios

## RN023 — Bloqueio de agenda

Um bloqueio torna um período indisponível para novos agendamentos.

## RN024 — Responsabilidade do bloqueio

O bloqueio pode ser criado:

- Pelo próprio barbeiro;
- Pelo proprietário.

## RN025 — Bloqueio de dia inteiro

Um bloqueio pode representar uma indisponibilidade completa do dia.

---

# 🔐 Autenticação

## RN026 — Perfis de acesso

O sistema possui dois tipos de usuário:

- Administrador;
- Barbeiro.

## RN027 — Senhas

As senhas nunca devem ser armazenadas em texto puro.

## RN028 — Permissões

Usuários somente podem acessar funcionalidades permitidas pelo seu perfil.

---

# 📊 Dashboard

## RN029 — Cálculo financeiro

O faturamento deve considerar apenas agendamentos finalizados.

## RN030 — Dados do barbeiro

O barbeiro visualiza somente seus próprios indicadores.

## RN031 — Dados do proprietário

O proprietário visualiza os indicadores gerais da barbearia.