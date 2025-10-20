# EventFinder App

Um aplicativo React Native com a idéia para busca de eventos por região, com filtros de localização e chat para eventos/locais não explorados.
<img width="204" height="449" alt="image" src="https://github.com/user-attachments/assets/c65fe166-9010-44c6-8741-c06d0ce95373" /> <img width="203" height="445" alt="image" src="https://github.com/user-attachments/assets/3c0e9cc7-270d-4e14-8300-2468609a6494" /> <img width="202" height="450" alt="image" src="https://github.com/user-attachments/assets/192ec689-ebd0-48bf-bee2-d0480a5b82c6" /> <img width="201" height="447" alt="image" src="https://github.com/user-attachments/assets/f82da95c-4b92-4b44-a623-5ac39b8cadc1" />




## 🚀 Funcionalidades

### 📍 Busca de Eventos por Região
- Filtros por região (Centro, Zona Norte, Zona Sul, Zona Leste, Zona Oeste)
- Filtros por categoria (Música, Gastronomia, Arte & Cultura, Esporte, Tecnologia, Educação)
- Visualização de eventos com informações detalhadas:
  - Data e horário
  - Localização
  - Preço
  - Número de interessados
  - Avaliação

### 💬 Chat de Eventos e Locais
- Chat interativo para descobrir eventos e locais não explorados
- Mensagens automáticas sobre novos eventos
- Sugestões de locais interessantes
- Interface de chat moderna com badges de mensagens não lidas

### 👤 Perfil do Usuário
- Estatísticas pessoais (eventos participados, locais descobertos, amigos)
- Menu de opções (eventos favoritos, salvos, locais visitados, etc.)
- Preferências de eventos personalizáveis
- Configurações de conta

## 🎨 Design

O aplicativo foi desenvolvido com um design moderno e intuitivo, inspirado no Manus, incluindo:

- **Cores**: Paleta baseada em roxo (#6366f1) como cor principal
- **Navegação**: Bottom tabs com ícones intuitivos
- **Cards**: Design limpo com sombras e bordas arredondadas
- **Tipografia**: Hierarquia clara com diferentes pesos de fonte
- **Interações**: Botões com estados hover e feedback visual

## 🛠️ Tecnologias Utilizadas

- **React Native** com Expo
- **React Navigation** para navegação entre telas
- **Expo Vector Icons** para ícones
- **React Native Screens** para otimização de performance
- **React Native Safe Area Context** para áreas seguras

## 📱 Estrutura do Projeto

```
EventFinderApp/
├── src/
│   ├── screens/
│   │   ├── EventsScreen.js      # Tela principal de eventos
│   │   ├── ChatScreen.js        # Tela de chat
│   │   └── ProfileScreen.js     # Tela de perfil
│   ├── components/
│   │   ├── EventCard.js         # Componente de card de evento
│   │   ├── FilterModal.js       # Modal de filtros
│   │   └── ChatMessage.js       # Componente de mensagem do chat
│   └── data/
│       └── eventsData.js        # Dados fictícios dos eventos
├── App.js                       # Componente principal com navegação
└── README.md                    # Documentação
```

## 🚀 Como Executar

1. **Instalar dependências:**
   ```bash
   npm install
   ```

2. **Executar no modo web:**
   ```bash
   npm run web
   ```

3. **Executar no dispositivo móvel:**
   ```bash
   npm run android  # Para Android
   npm run ios      # Para iOS (requer macOS)
   ```

## 📊 Dados Fictícios

O aplicativo inclui dados fictícios para demonstração:

- **8 eventos** distribuídos pelas diferentes regiões de São Paulo
- **6 regiões** disponíveis para filtro
- **6 categorias** de eventos
- **Mensagens de chat** simulando interações sobre eventos e locais

## 🎯 Funcionalidades Testadas

✅ Navegação entre abas  
✅ Filtros de região e categoria  
✅ Exibição de eventos filtrados  
✅ Chat interativo com envio de mensagens  
✅ Respostas automáticas do bot  
✅ Interface de perfil completa  
✅ Design responsivo para web  

## 🔮 Próximos Passos

Para uma versão de produção, seria interessante adicionar:

- Integração com APIs reais de eventos
- Sistema de autenticação
- Geolocalização para eventos próximos
- Notificações push
- Sistema de favoritos persistente
- Compartilhamento de eventos
- Integração com redes sociais
- Modo offline

## 📝 Notas de Desenvolvimento

Este projeto foi desenvolvido como uma demonstração de conceito, focando na experiência do usuário e na interface moderna. Todos os dados são fictícios e a funcionalidade de chat simula respostas automáticas para fins de demonstração.



## 🗺️ Nova Funcionalidade: Mapa de Eventos

### Funcionalidades do Mapa

- **Visualização Geográfica**: Mapa interativo mostrando eventos com suas localizações reais
- **Busca por Raio**: Filtro de eventos por distância (1km, 2km, 5km, 10km, 20km)
- **Filtros por Categoria**: Filtragem rápida por tipo de evento
- **Marcadores Coloridos**: Cada categoria tem uma cor específica
- **Informações de Distância**: Cada marcador mostra a distância do usuário
- **Localização Simulada**: Botão para simular mudança de localização
- **Detalhes do Evento**: Card com informações ao clicar nos marcadores

### Tecnologias Adicionais

- **Cálculos Geográficos**: Fórmula de Haversine para distâncias precisas
- **Coordenadas Reais**: Baseadas em locais reais de São Paulo
- **Interface Responsiva**: Adaptada para web e mobile

### Estrutura Atualizada

```
EventFinderApp/
├── src/
│   ├── screens/
│   │   ├── EventsScreen.js      # Tela principal de eventos
│   │   ├── MapScreen.js         # 🆕 Tela do mapa interativo
│   │   ├── ChatScreen.js        # Tela de chat
│   │   └── ProfileScreen.js     # Tela de perfil
│   ├── components/
│   │   ├── EventCard.js         # Componente de card de evento
│   │   ├── FilterModal.js       # Modal de filtros
│   │   └── ChatMessage.js       # Componente de mensagem do chat
│   ├── utils/
│   │   └── mapUtils.js          # 🆕 Utilitários para cálculos do mapa
│   └── data/
│       └── eventsData.js        # Dados fictícios (agora com coordenadas)
├── App.js                       # Navegação atualizada com 4 abas
└── README.md                    # Documentação
```

### Dados Geográficos

Os eventos agora incluem coordenadas reais de São Paulo:

- **Parque Ibirapuera**: Festival de Jazz
- **Largo da Batata**: Feira Gastronômica  
- **Av. Paulista**: Corrida Noturna
- **Campus USP**: Hackathon de Inovação
- **E mais locais autênticos...**

### Como Usar o Mapa

1. **Navegue para a aba "Mapa"**
2. **Ajuste o raio de busca** usando os botões de 1km a 20km
3. **Filtre por categoria** para ver apenas eventos específicos
4. **Clique nos marcadores** para ver detalhes dos eventos
5. **Use o botão de localização** para simular mudança de posição
6. **Observe as distâncias** mostradas em cada marcador

### Funcionalidades Testadas

✅ Navegação com 4 abas (Eventos, Mapa, Chat, Perfil)  
✅ Mapa interativo com marcadores coloridos  
✅ Filtros de raio de busca funcionais  
✅ Filtros de categoria no mapa  
✅ Cálculo preciso de distâncias  
✅ Simulação de localização do usuário  
✅ Cards de detalhes dos eventos  
✅ Interface responsiva  

O aplicativo agora oferece uma experiência completa de descoberta de eventos, combinando listas filtráveis, mapa interativo e chat social!





