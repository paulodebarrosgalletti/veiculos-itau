# Catálogo de Veículos - Aplicação Web

Projeto para entrevista Front-End Itaú.

## Tecnologias Utilizadas
**React.js com Vite** → Utilizado para o desenvolvimento rápido, garante uma boa estrutura de componentes.

**FontAwesome** → Ícones interativos para favoritos, carrossel e barra de pesquisa.

**CSS Modular** → Estilização individual para cada componente, garantindo organização e reaproveitamento de estilos.

## Como Rodar o Projeto

### Instalação das Dependências

```
git clone https://github.com/paulodebarrosgalletti/veiculos-itau
cd veiculos-itau
npm install
npm run dev
```
A aplicação será iniciada em http://localhost:5173.

## Estrutura do Projeto
```
/veiculos-itau
  ├── /public
  │   ├── /images → Contém todas as imagens dos veículos
  │   ├── data.json → Arquivo contendo os dados dos veículos
  ├── /src
  │   ├── /components
  │   │   ├── Header.jsx → Componente da barra de pesquisa
  │   │   ├── Header.css → Estilos do Header
  │   │   ├── Filters.jsx → Componente para filtrar os veículos por ano, marca, preço e quilometragem
  │   │   ├── Filters.css → Estilos do menu de filtros
  │   │   ├── VehicleCard.jsx → Exibição de cada veículo, incluindo carrossel e favoritos
  │   │   ├── VehicleCard.css → Estilização dos cards dos veículos
  │   │   ├── ContactModal.jsx → Modal com informações do vendedor e veículo
  │   │   ├── ContactModal.css → Estilos do modal de contato
  │   ├── App.jsx → Estrutura principal da aplicação, integrando pesquisa, filtros e exibição dos veículos
  │   ├── main.jsx → Arquivo responsável pela renderização do React
  │   ├── index.css → Estilos globais da aplicação
  ├── package.json → Arquivo de configuração do projeto e dependências
  ├── README.md → Documentação do projeto
  ```
## Funcionalidades
**Exibição de Veículos**
Os veículos são carregados a partir de um JSON e exibidos em um layout.

**Carrossel de Imagens**
Cada veículo tem um carrossel simples para visualizar as fotos, com navegação e indicador de posição.

**Modal de Contato**
Ao clicar no botão de contato, um modal abre com detalhes do vendedor e informações do veículo.

**Filtros Avançados**
O sistema de filtros dinâmicos permite refinar a busca por:
Marca → Obtido automaticamente do JSON.
Ano do Modelo → Obtido automaticamente do JSON.
Faixa de Preço → (Até 50.000, 50.000 a 150.000, 150.000 a 500.000, Acima de 500.000).
Quilometragem → (Até 10.000 km, Até 30.000 km, Acima de 50.000 km).
Botão de Limpar Filtros → Remove todos os filtros aplicados e exibe todos os veículos novamente

## Decisões de Desenvolvimento
**Responsividade**
O layout funciona bem em telas de diferentes tamanhos, mantendo a boa experiência no mobile e desktop.

**Código Modular e Reutilizável**
Cada funcionalidade é separada em componentes reutilizáveis, facilitando na manutenção e expansão do projeto.

## Deploy
O projeto pode ser acessado em:
🔗 https://veiculos-itau.vercel.app

