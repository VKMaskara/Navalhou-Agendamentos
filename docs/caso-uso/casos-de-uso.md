# 📄 Casos de Uso — Navalhou

Teremos apenas 3 atores:

```text
                 NAVALHOU

        Cliente
           │
           │
     Proprietário
           │
           │
        Barbeiro
```

---

# 1. Cliente

O cliente não possui login no MVP.

Ele apenas utiliza o sistema para realizar e gerenciar seus agendamentos.

## Casos de Uso

### CU01 — Consultar serviços

**Objetivo**

Visualizar os serviços oferecidos pela barbearia.

---

### CU02 — Escolher barbeiro

**Objetivo**

Selecionar um barbeiro disponível para realizar o atendimento.

---

### CU03 — Consultar horários disponíveis

**Objetivo**

Visualizar os horários livres do barbeiro escolhido.

---

### CU04 — Realizar agendamento

**Objetivo**

Selecionar serviço, barbeiro, data e horário para criar um agendamento.

---

### CU05 — Cancelar agendamento

**Objetivo**

Cancelar um agendamento realizado.

---

### CU06 — Reagendar atendimento

**Objetivo**

Alterar a data e/ou o horário de um agendamento existente.

---

### CU07 — Receber confirmação

**Objetivo**

Receber a confirmação de que o agendamento foi registrado com sucesso.

---

# 2. Barbeiro

O barbeiro possui login.

Ele administra apenas suas próprias informações e agenda.

## Casos de Uso

### CU08 — Realizar login

### CU09 — Visualizar agenda

### CU10 — Consultar clientes do dia

### CU11 — Bloquear horários

### CU12 — Desbloquear horários

### CU13 — Atualizar status do atendimento

Exemplo:

```text
Agendado
    ↓
Finalizado

ou

Agendado
    ↓
Não compareceu
```

### CU14 — Visualizar dashboard

O barbeiro poderá visualizar apenas:

- Receita própria
- Atendimentos próprios
- Serviços realizados
- Agenda pessoal

### CU15 — Editar perfil

---

# 3. Proprietário (Administrador)

O administrador possui acesso completo à barbearia.

## Casos de Uso

### CU16 — Realizar login

### CU17 — Gerenciar barbeiros

- Cadastrar
- Editar
- Desativar

### CU18 — Gerenciar serviços

- Cadastrar
- Editar
- Ativar
- Desativar
 
### CU19 — Gerenciar clientes

Visualizar e consultar clientes cadastrados automaticamente pelos agendamentos.

### CU20 — Criar agendamento

Agendar um cliente diretamente pelo sistema.

### CU21 — Cancelar agendamento

### CU22 — Reagendar atendimento

### CU23 — Gerenciar horários da barbearia

Definir:

- Dias de funcionamento
- Horários de abertura
- Horários de fechamento

### CU24 — Visualizar dashboard geral

Visualizar:

- Receita diária
- Receita mensal
- Clientes atendidos
- Serviços realizados
- Agenda geral

### CU25 — Configurar dados da barbearia

Editar:

- Nome
- Logo
- Endereço
- Telefone
- Horário de funcionamento

---

# 📊 Resumo

| Ator | Casos de Uso |
|------|--------------:|
| Cliente | 7 |
| Barbeiro | 8 |
| Proprietário | 10 |

**Total:** 25 casos de uso