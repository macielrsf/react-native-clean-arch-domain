# React Native Clean Architecture - DDD & SOLID

Este projeto demonstra a implementação de Clean Architecture, Domain-Driven Design (DDD) e princípios SOLID em React Native com TypeScript.

## 🌍 Languages / Idiomas

- 🇧🇷 **[Português (Portuguese)](README.md)** - Documentação principal
- 🇺🇸 **[English](README_EN.md)** - English documentation

---

## 🏗️ Arquitetura

### **Clean Architecture**
- **Presentation Layer**: Componentes React Native e hooks
- **Domain Layer**: Lógica de negócio e entidades
- **Infrastructure Layer**: APIs e serviços externos

### **Domain-Driven Design (DDD)**
- **Entities**: Post, User
- **Value Objects**: IDs, timestamps
- **Services**: postService, postApi
- **Repositories**: Abstração para acesso a dados

### **SOLID Principles**
- **Single Responsibility**: Cada classe tem uma responsabilidade
- **Open/Closed**: Extensível sem modificação
- **Liskov Substitution**: Interfaces bem definidas
- **Interface Segregation**: Interfaces específicas
- **Dependency Inversion**: Dependências invertidas

## 🚀 Tecnologias

- **React Native** - Framework mobile
- **TypeScript** - Tipagem estática
- **Tanstack React Query** - Gerenciamento de estado e cache
- **React Navigation** - Navegação
- **Lodash** - Utilitários JavaScript

## 📁 Estrutura do Projeto

```
src/
├── components/          # Componentes reutilizáveis
│   ├── ui/             # Componentes de UI
│   └── layout/         # Componentes de layout
├── domain/             # Camada de domínio
│   └── Post/           # Domínio de posts
│       ├── postApi.ts      # Infraestrutura (API)
│       ├── postService.ts  # Serviço de domínio
│       ├── postHooks.ts    # Hooks React Query
│       └── postListMock.ts # Dados mockados
├── screens/            # Telas da aplicação
│   └── app/
│       └── HomeScreen/     # Tela principal
├── types/              # Tipos TypeScript
└── utils/              # Utilitários e hooks
```

## 🎯 Funcionalidades

### **Tela Principal (HomeScreen)**
- ✅ Lista de posts com scroll infinito
- ✅ Header fixo com título
- ✅ Loading states
- ✅ Error handling
- ✅ Pull to refresh
- ✅ Cache inteligente com React Query

### **Arquitetura Limpa**
- ✅ Separação clara de responsabilidades
- ✅ Inversão de dependências
- ✅ Testabilidade
- ✅ Manutenibilidade
- ✅ Escalabilidade

## 🛠️ Configuração

### **Instalação**
```bash
npm install
```

### **Execução**
```bash
npx expo start
```

### **Desenvolvimento**
```bash
# Verificar tipos TypeScript
npx tsc --noEmit

# Linting (se configurado)
npx eslint src/
```

## 📊 Componentes

### **Presentational Components**
- `PostItem`: Exibe um post individual
- `LoadingSpinner`: Indicador de carregamento
- `ErrorMessage`: Exibe erros com retry
- `Screen`: Layout base com safe area

### **Smart Components**
- `HomeScreen`: Gerencia estado e lógica de negócio

## 🔄 Hooks

### **React Query Hooks**
- `usePosts`: Busca todos os posts
- `usePost`: Busca post por ID
- `usePostsByUser`: Busca posts por usuário

### **Utility Hooks**
- `useDebounce`: Debounce de valores
- `useSearchWithDebounce`: Busca com debounce

## 🎨 UI/UX

### **Design System**
- Cores consistentes
- Tipografia hierárquica
- Espaçamentos padronizados
- Componentes reutilizáveis

### **Experiência do Usuário**
- Loading states informativos
- Error handling amigável
- Feedback visual claro
- Performance otimizada

## 🔧 Configurações

### **TypeScript**
- Path mapping configurado
- Strict mode ativado
- Tipos bem definidos

### **React Query**
- Cache otimizado
- Retry automático
- Background refetch
- Stale time configurado

## 📈 Performance

### **Otimizações**
- React Query para cache
- FlatList otimizada
- useCallback para callbacks
- Lazy loading de componentes

### **Monitoramento**
- Console logs para debug
- Performance profiling
- Memory usage tracking

## 🧪 Testes

### **Estrutura Preparada**
- Componentes testáveis
- Hooks isolados
- Services mockáveis
- APIs abstraídas

## 🚀 Deploy

### **Build**
```bash
# Android
npx expo build:android

# iOS
npx expo build:ios
```

## 📚 Documentação

### **Arquivos de Documentação**
- `README.md`: Documentação principal (Português)
- `README_EN.md`: Documentação em inglês (English)

## 🤝 Contribuição

### **Padrões**
- Clean Architecture
- DDD principles
- SOLID principles
- TypeScript strict
- Component composition

### **Commits**
- Conventional commits
- Feature branches
- Code review
- Documentation updates

## 📄 Licença

Este projeto é um exemplo educacional de implementação de Clean Architecture em React Native.

---

**Desenvolvido com ❤️ seguindo as melhores práticas de arquitetura de software.** 