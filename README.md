# Sistema de Votação Eletrónica Escolar

## 📌 1️⃣ Identificação do Grupo

Grupo: N3  

Elementos:
- Rodrigo Malacute  
- João Ventura  
- Jorcel Neto  
- Nélio Fernandes  

Turma: _______  

Ano Letivo: 2025/2026  

---

## 📌 2️⃣ Descrição do Projeto

Este projeto consiste no desenvolvimento de um Sistema de Votação Eletrónica Escolar implementado exclusivamente em JavaScript e executado através do terminal (Node.js).

O sistema permite:
- Criar candidatos
- Registar votos
- Impedir votos duplicados
- Validar dados
- Calcular resultados
- Detetar empates
- Ativar segunda volta automática
- Determinar vencedor final

Todo o sistema foi desenvolvido com uma arquitetura modular, respeitando a separação clara de responsabilidades exigida no enunciado.

---

## 📂 3️⃣ Estrutura do Projeto
voting-system/
├── candidate.js
├── voteManager.js
├── validation.js
├── results.js
├── app.js
└── README.md


---

## 📌 4️⃣ Responsabilidade de Cada Ficheiro

### 🔹 candidate.js
Responsável exclusivamente pela gestão de candidatos.
Contém funções para:
- Criar candidato
- Incrementar votos
- Reiniciar votos (para segunda volta)

Este ficheiro não contém validações nem cálculos de resultados.

---

### 🔹 validation.js
Responsável apenas por validações.
Inclui funções para:
- Verificar se eleitor já votou
- Verificar se candidato existe
- Validar dados de entrada

Não contém lógica de registo de votos nem apresentação de resultados.

---

### 🔹 voteManager.js
Responsável pelo registo de votos.
Funções:
- Atribuir voto ao candidato correto
- Guardar lista de eleitores que já votaram
- Impedir votos duplicados

Não realiza cálculos de percentagens nem determina vencedores.

---

### 🔹 results.js
Responsável pelo cálculo e análise dos resultados.
Funções:
- Calcular total de votos
- Calcular percentagens (2 casas decimais)
- Determinar vencedor
- Detetar empate
- Verificar se há maioria absoluta (>50%)
- Selecionar os dois mais votados para segunda volta

Não regista votos.

---

### 🔹 app.js
Ficheiro principal responsável por:
- Criar candidatos
- Executar o processo de votação no terminal
- Mostrar resultados
- Ativar automaticamente segunda volta, se necessário

Não contém lógica de negócio complexa, apenas coordenação dos módulos.

---

## ⚙️ 5️⃣ Como Executar o Projeto

### 1️⃣ Instalar Node.js

É necessário ter o Node.js instalado no computador.

### 2️⃣ Inicializar o projeto

No terminal:


---

## 🗳️ 6️⃣ Como Funciona a Votação

1. O sistema apresenta os candidatos disponíveis.
2. O utilizador insere:
   - Nome do eleitor
   - Nome do candidato
3. O sistema valida:
   - Se o eleitor já votou
   - Se o candidato existe
4. O voto é registado.
5. Ao escrever "fim", termina a votação.
6. O sistema apresenta:
   - Total de votos
   - Percentagens
   - Vencedor ou empate

---

## 🔥 7️⃣ Segunda Volta Automática (Desafio Máximo)

Se nenhum candidato obtiver mais de 50% dos votos:

- O sistema seleciona automaticamente os dois mais votados
- Reinicia os votos
- Executa nova ronda de votação
- Calcula os resultados finais apenas entre esses dois

Esta funcionalidade foi implementada de forma totalmente automática.

---

## 📊 8️⃣ Requisitos Avançados Implementados

✔ Impedimento de votos duplicados  
✔ Detecção de empate  
✔ Percentagens com 2 casas decimais  
✔ Verificação de maioria absoluta  
✔ Segunda volta automática  
✔ Recontagem apenas entre os dois mais votados  
✔ Arquitetura modular  
✔ Separação clara de responsabilidades  

---

## 🧠 9️⃣ Decisões Técnicas

- Utilização de ES Modules (import/export)
- Não utilização de variáveis globais
- Funções com responsabilidade única
- Separação rigorosa entre:
  - Lógica de negócio
  - Validação
  - Cálculo
  - Execução

A arquitetura foi pensada para ser facilmente extensível para futuras eleições.

---

## ⚠️ 🔍 1️⃣0️⃣ Erros Conhecidos

Não foram identificados erros conhecidos.

---

## 👨‍💻 Contribuição Individual

Cada elemento do grupo contribuiu com commits individuais no repositório GitHub, garantindo participação ativa no desenvolvimento do projeto.
