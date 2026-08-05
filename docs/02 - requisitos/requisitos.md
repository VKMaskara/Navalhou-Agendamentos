## Requisitos Funcionais

### Agendamentos

**RF01** - O sistema deve permitir que o cliente visualize todos os barbeiros cadastrados.

**RF02** - O sistema deve permitir que o cliente escolha o barbeiro desejado para realizar o atendimento.

**RF03** - O sistema deve permitir que o cliente visualize os serviços oferecidos pelo barbeiro selecionado.

**RF04** - O sistema deve permitir que o cliente escolha um serviço antes de visualizar os horários disponíveis.

**RF05** - O sistema deve exibir apenas os dias e horários disponíveis para o serviço e barbeiro selecionados.

**RF06** - O sistema deve permitir que o cliente realize um agendamento.

**RF07** - O sistema deve impedir agendamentos em horários já ocupados.

**RF08** - O sistema deve permitir que o cliente cancele um agendamento.

**RF09** - O sistema deve permitir que o cliente reagende um agendamento.

**RF10** - O sistema deve permitir que o cliente visualize seus próximos agendamentos.

**RF11** - O sistema deve confirmar ao cliente quando um agendamento for realizado com sucesso.

## Clientes

### Cadastro

**RF12** - O sistema deve cadastrar automaticamente um cliente durante a realização do seu primeiro agendamento.

**RF13** - O sistema deve verificar se já existe um cliente cadastrado com o telefone informado antes de criar um novo cadastro.

**RF14** - O sistema deve solicitar as seguintes informações para identificação do cliente:

- Nome;
- Telefone;
- E-mail.

---

### Consulta

**RF15** - O sistema deve permitir que o proprietário da barbearia visualize todos os clientes cadastrados.

**RF16** - O sistema deve permitir que o barbeiro visualize os clientes associados aos seus agendamentos.

**RF17** - O sistema deve permitir a pesquisa de clientes pelo nome.

**RF18** - O sistema deve permitir a pesquisa de clientes pelo telefone.

---

### Agendamentos

**RF19** - O sistema deve permitir que um cliente realize agendamentos sem a necessidade de criar uma conta ou realizar login.

**RF20** - O sistema deve permitir que o proprietário da barbearia realize agendamentos em nome de um cliente.

**RF21** - O sistema deve permitir que o barbeiro realize agendamentos em nome de um cliente.

---

### Histórico

**RF22** - O sistema deve manter o histórico de agendamentos realizados por cada cliente.

## Barbeiros

### Cadastro

**RF23** - O sistema deve permitir que apenas o proprietário da barbearia cadastre novos barbeiros.

**RF24** - O sistema deve permitir que o barbeiro edite seus próprios dados cadastrais.

**RF25** - O sistema deve permitir que o proprietário da barbearia desative um barbeiro sem excluir seu histórico de dados.

---

### Agenda

**RF26** - O sistema deve possuir uma agenda individual para cada barbeiro.

**RF27** - O sistema deve permitir que o barbeiro bloqueie horários em sua própria agenda.

**RF28** - O sistema deve permitir que o barbeiro defina seus dias e horários de trabalho.

---

### Serviços

**RF29** - O sistema deve permitir que um barbeiro ofereça múltiplos serviços.

**RF30** - O sistema deve permitir que cada barbeiro escolha quais serviços deseja oferecer.

---

### Dashboard

**RF31** - O sistema deve permitir que o barbeiro visualize seus ganhos.

**RF32** - O sistema deve permitir que o barbeiro visualize apenas seus próprios agendamentos.

**RF33** - O sistema deve permitir que o barbeiro visualize apenas os clientes relacionados aos seus atendimentos.

## Serviços

### Cadastro

**RF34** - O sistema deve permitir que apenas o proprietário da barbearia cadastre novos serviços.

**RF35** - O sistema deve permitir que apenas o proprietário da barbearia edite os serviços cadastrados.

**RF36** - O sistema deve permitir que o proprietário da barbearia desative um serviço sem excluir seu histórico.

---

### Informações

**RF37** - O sistema deve exigir um nome para o serviço.

**RF38** - O sistema deve exigir um preço para o serviço.

**RF39** - O sistema deve exigir uma duração para o serviço.

**RF40** - O sistema deve validar que o preço do serviço seja maior que zero.

**RF41** - O sistema deve validar que a duração do serviço seja maior que zero.

**RF42** - O sistema deve permitir o cadastro de uma descrição para o serviço.

---

### Relacionamento

**RF43** - O sistema deve permitir que um barbeiro ofereça múltiplos serviços.

**RF44** - O sistema deve permitir que um mesmo serviço seja oferecido por diferentes barbeiros.

**RF45** - O sistema deve utilizar o mesmo preço do serviço para todos os barbeiros da barbearia.

**RF46** - O sistema deve utilizar a mesma duração do serviço para todos os barbeiros da barbearia.

---

### Agendamentos

**RF47** - O sistema deve permitir o agendamento apenas de serviços ativos.

**RF48** - O sistema deve exigir que o cliente selecione um serviço antes de visualizar os horários disponíveis.

===
## Agendamentos

### Cadastro

**RF49** - O sistema deve permitir que clientes realizem agendamentos.

**RF50** - O sistema deve permitir que barbeiros realizem agendamentos em nome de clientes.

**RF51** - O sistema deve permitir que o proprietário realize agendamentos em nome de clientes.

**RF52** - Todo agendamento deve estar obrigatoriamente vinculado a um cliente, um barbeiro, um serviço e uma barbearia.

**RF53** - Todo agendamento deve possuir data, horário e status.

---

### Disponibilidade

**RF54** - O sistema deve exibir apenas os horários disponíveis para agendamento.

**RF55** - O sistema deve impedir agendamentos em horários já ocupados para o mesmo barbeiro.

**RF56** - O sistema deve considerar a duração do serviço para calcular a disponibilidade dos horários.

**RF57** - O sistema deve considerar os horários de funcionamento da barbearia durante o agendamento.

**RF58** - O sistema deve considerar os bloqueios de agenda do barbeiro durante o agendamento.

---

### Agendamento

**RF59** - O sistema deve permitir que um cliente possua múltiplos agendamentos.

**RF60** - O sistema deve permitir que um cliente realize mais de um agendamento no mesmo dia, desde que não haja conflito de horários.

**RF61** - O sistema deve permitir o agendamento apenas de serviços ativos.

**RF62** - O sistema deve registrar automaticamente a data e a hora de criação do agendamento.

---

### Cancelamento

**RF63** - O sistema deve permitir que clientes cancelem seus agendamentos.

**RF64** - O sistema deve permitir que barbeiros cancelem agendamentos.

**RF65** - O sistema deve permitir que o proprietário cancele agendamentos.

**RF66** - O sistema deve exigir o registro do motivo do cancelamento.

**RF67** - O sistema deve manter no histórico todos os agendamentos cancelados.

---

### Status

**RF68** - Todo agendamento deve possuir um status.

**RF69** - O sistema deve utilizar os seguintes status para um agendamento:

- Agendado;
- Finalizado;
- Cancelado;
- Não compareceu.

**RF70** - O sistema deve permitir a atualização do status de um agendamento durante seu ciclo de vida.

---

### Histórico

**RF71** - O barbeiro deve visualizar apenas o histórico de seus próprios atendimentos.

**RF72** - O proprietário deve visualizar todos os agendamentos da barbearia.

**RF73** - O sistema deve manter o histórico completo de todos os agendamentos realizados.

---

### Confirmação

**RF74** - O sistema deve confirmar ao usuário quando um agendamento for realizado com sucesso.

---
## Barbearia

### Cadastro

**RF75** - O sistema deve permitir que um proprietário realize o cadastro de uma nova barbearia.

**RF76** - O sistema deve criar automaticamente o proprietário como administrador da barbearia após a conclusão do cadastro.

**RF77** - O sistema deve permitir que o proprietário edite as informações da barbearia.

**RF78** - O sistema deve permitir que a barbearia seja desativada sem excluir seu histórico de dados.

---

### Informações

**RF79** - O sistema deve exigir o nome da barbearia durante o cadastro.

**RF80** - O sistema deve exigir um endereço para a barbearia.

**RF81** - O sistema deve exigir um telefone para contato.

**RF82** - O sistema deve exigir um e-mail válido para a barbearia.

**RF83** - O sistema deve permitir o cadastro de uma logo.

**RF84** - O sistema deve permitir o cadastro de uma descrição da barbearia.

---

### Funcionamento

**RF85** - O sistema deve permitir a configuração dos dias de funcionamento da barbearia.

**RF86** - O sistema deve permitir a configuração do horário de funcionamento da barbearia.

**RF87** - O sistema deve impedir agendamentos fora dos dias e horários de funcionamento.

---

### Relacionamentos

**RF88** - O sistema deve permitir que uma barbearia possua múltiplos barbeiros.

**RF89** - O sistema deve permitir que uma barbearia possua múltiplos serviços.

---

### Gestão

**RF90** - O sistema deve permitir que o proprietário visualize os indicadores gerais da barbearia.

===
## Usuários / Autenticação

### Cadastro

**RF91** - O sistema deve permitir que um proprietário crie uma conta durante o cadastro de uma nova barbearia.

**RF92** - O sistema deve criar automaticamente o proprietário como administrador da barbearia.

**RF93** - O sistema deve permitir que apenas o proprietário cadastre novos usuários barbeiros.

**RF94** - O sistema deve criar uma conta de acesso para cada barbeiro cadastrado.

---

### Login

**RF95** - O sistema deve permitir que usuários realizem autenticação.

**RF96** - O sistema deve permitir login utilizando e-mail e senha.

**RF97** - O sistema deve permitir recuperação de senha.

**RF98** - O sistema deve manter a sessão do usuário após autenticação.

---

### Permissões

**RF99** - O sistema deve possuir diferentes níveis de acesso.

**RF100** - O sistema deve possuir os seguintes perfis:

- Administrador;
- Barbeiro.

**RF101** - O administrador deve possuir acesso ao gerenciamento completo da barbearia.

**RF102** - O administrador deve poder gerenciar barbeiros.

**RF103** - O administrador deve poder gerenciar serviços.

**RF104** - O administrador deve poder configurar horários da barbearia.

**RF105** - O administrador deve poder visualizar o dashboard geral da barbearia.

**RF106** - O barbeiro deve poder visualizar sua própria agenda.

**RF107** - O barbeiro deve poder criar agendamentos.

**RF108** - O barbeiro deve poder cancelar agendamentos.

**RF109** - O barbeiro deve poder gerenciar os serviços que realiza.

**RF110** - O barbeiro deve poder visualizar seus próprios ganhos.

---

### Segurança

**RF111** - O sistema deve armazenar senhas de usuários de forma segura.

**RF112** - O sistema deve utilizar autenticação baseada em token JWT.

---

### Controle de Usuários

**RF113** - O sistema deve permitir que usuários sejam desativados sem excluir seus dados históricos.

===
## Horários de Funcionamento

### Configuração

**RF114** - O sistema deve permitir que apenas o proprietário configure os horários de funcionamento da barbearia.

**RF115** - O sistema deve permitir que cada barbearia possua sua própria configuração de horários de funcionamento.

**RF116** - O sistema deve permitir configurar horários diferentes para cada dia da semana.

**RF117** - O sistema deve permitir definir dias em que a barbearia não possui funcionamento.

**RF118** - O sistema deve permitir alterar os horários de funcionamento cadastrados.

---

### Regras de Funcionamento

**RF119** - O sistema deve permitir apenas um período de funcionamento por dia.

**RF120** - O sistema deve utilizar os horários de funcionamento da barbearia para determinar a disponibilidade de agendamentos.

**RF121** - O sistema deve impedir a criação de agendamentos fora do horário de funcionamento da barbearia.

---

### Relacionamento

**RF122** - O sistema deve permitir que uma barbearia possua múltiplos registros de horários de funcionamento.

**RF123** - O sistema não deve permitir que barbeiros possuam horários de funcionamento independentes da barbearia.

===
## Bloqueios de Agenda

### Cadastro

**RF124** - O sistema deve permitir que o barbeiro crie bloqueios em sua própria agenda.

**RF125** - O sistema deve permitir que o proprietário crie bloqueios para barbeiros da sua barbearia.

**RF126** - O sistema deve vincular cada bloqueio a um barbeiro específico.

---

### Informações

**RF127** - O sistema deve exigir uma data para criação de um bloqueio.

**RF128** - O sistema deve permitir informar horário inicial e final para um bloqueio.

**RF129** - O sistema deve permitir criar bloqueios de dia inteiro.

**RF130** - O sistema deve permitir informar um motivo para o bloqueio.

---

### Gerenciamento

**RF131** - O sistema deve permitir que o barbeiro edite seus próprios bloqueios.

**RF132** - O sistema deve permitir que o barbeiro remova bloqueios criados por ele.

**RF133** - O sistema deve permitir que o proprietário remova bloqueios criados por ele.

---

### Disponibilidade

**RF134** - O sistema deve impedir agendamentos durante períodos bloqueados.

**RF135** - O sistema não deve exibir ao cliente os horários bloqueados.

---

### Limitações do MVP

**RF136** - O sistema não deve permitir bloqueios recorrentes no MVP.

===
## Dashboard

### Acesso

**RF137** - O sistema deve permitir que o proprietário visualize o dashboard da barbearia.

**RF138** - O sistema deve permitir que o barbeiro visualize seu próprio dashboard.

**RF139** - O sistema deve restringir o acesso dos usuários conforme seu nível de permissão.

---

### Proprietário

**RF140** - O sistema deve permitir que o proprietário visualize os indicadores gerais da barbearia.

**RF141** - O sistema deve permitir que o proprietário visualize informações de todos os barbeiros da barbearia.

---

### Barbeiro

**RF142** - O sistema deve permitir que o barbeiro visualize apenas informações relacionadas aos seus próprios atendimentos.

**RF143** - O sistema deve permitir que o barbeiro visualize seus próprios ganhos.

---

### Indicadores

**RF144** - O sistema deve exibir o faturamento realizado no dia.

**RF145** - O sistema deve exibir o faturamento realizado no mês.

**RF146** - O sistema deve exibir a quantidade de clientes atendidos.

**RF147** - O sistema deve exibir a quantidade de serviços realizados.

**RF148** - O sistema deve exibir a quantidade de agendamentos realizados.

**RF149** - O sistema deve exibir a quantidade de cancelamentos.

---

### Filtros

**RF150** - O sistema deve permitir filtrar informações do dashboard por período.

---

### Atualização

**RF151** - O sistema deve atualizar automaticamente os indicadores conforme novos dados forem registrados.

---

### Interface

**RF152** - O sistema deve apresentar os indicadores do dashboard utilizando componentes de visualização simplificados.