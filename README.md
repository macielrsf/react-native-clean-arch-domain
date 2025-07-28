# React Native Clean Architecture - DDD & SOLID

This project demonstrates the implementation of Clean Architecture, Domain-Driven Design (DDD) and SOLID principles in React Native with TypeScript.

## 🌍 Languages / Idiomas

- 🇺🇸 **[English](README.md)** - Main documentation
- 🇧🇷 **[Português (Portuguese)](README_PT-BR.md)** - Documentação em português

---

## 🏗️ Architecture

### **Clean Architecture**
- **Presentation Layer**: React Native components and hooks
- **Domain Layer**: Business logic and entities
- **Infrastructure Layer**: APIs and external services

### **Domain-Driven Design (DDD)**
- **Entities**: Post, User
- **Value Objects**: IDs, timestamps
- **Services**: postService, postApi
- **Repositories**: Abstraction for data access

### **SOLID Principles**
- **Single Responsibility**: Each class has a single responsibility
- **Open/Closed**: Extensible without modification
- **Liskov Substitution**: Well-defined interfaces
- **Interface Segregation**: Specific interfaces
- **Dependency Inversion**: Inverted dependencies

## 🚀 Technologies

- **React Native** - Mobile framework
- **TypeScript** - Static typing
- **Tanstack React Query** - State management and caching
- **React Navigation** - Navigation
- **Lodash** - JavaScript utilities

## 📁 Project Structure

```
src/
├── components/          # Reusable components
│   ├── ui/             # UI components
│   └── layout/         # Layout components
├── domain/             # Domain layer
│   └── Post/           # Post domain
│       ├── postApi.ts      # Infrastructure (API)
│       ├── postService.ts  # Domain service
│       ├── postHooks.ts    # React Query hooks
│       └── postListMock.ts # Mocked data
├── screens/            # Application screens
│   └── app/
│       └── HomeScreen/     # Main screen
├── types/              # TypeScript types
└── utils/              # Utilities and hooks
```

## 🎯 Features

### **Main Screen (HomeScreen)**
- ✅ Infinite scroll post list
- ✅ Fixed header with title
- ✅ Loading states
- ✅ Error handling
- ✅ Pull to refresh
- ✅ Smart caching with React Query

### **Clean Architecture**
- ✅ Clear separation of responsibilities
- ✅ Dependency inversion
- ✅ Testability
- ✅ Maintainability
- ✅ Scalability

## 🛠️ Setup

### **Installation**
```bash
npm install
```

### **Execution**
```bash
npx expo start
```

### **Development**
```bash
# Check TypeScript types
npx tsc --noEmit

# Linting (if configured)
npx eslint src/
```

## 📊 Components

### **Presentational Components**
- `PostItem`: Displays an individual post
- `LoadingSpinner`: Loading indicator
- `ErrorMessage`: Displays errors with retry
- `Screen`: Base layout with safe area

### **Smart Components**
- `HomeScreen`: Manages state and business logic

## 🔄 Hooks

### **React Query Hooks**
- `usePosts`: Fetches all posts
- `usePost`: Fetches post by ID
- `usePostsByUser`: Fetches posts by user

### **Utility Hooks**
- `useDebounce`: Value debouncing
- `useSearchWithDebounce`: Search with debounce

## 🎨 UI/UX

### **Design System**
- Consistent colors
- Hierarchical typography
- Standardized spacing
- Reusable components

### **User Experience**
- Informative loading states
- Friendly error handling
- Clear visual feedback
- Optimized performance

## 🔧 Configuration

### **TypeScript**
- Path mapping configured
- Strict mode enabled
- Well-defined types

### **React Query**
- Optimized cache
- Automatic retry
- Background refetch
- Configured stale time

## 📈 Performance

### **Optimizations**
- React Query for caching
- Optimized FlatList
- useCallback for callbacks
- Component lazy loading

### **Monitoring**
- Console logs for debugging
- Performance profiling
- Memory usage tracking

## 🧪 Testing

### **Prepared Structure**
- Testable components
- Isolated hooks
- Mockable services
- Abstracted APIs

## 🚀 Deploy

### **Build**
```bash
# Android
npx expo build:android

# iOS
npx expo build:ios
```

## 📚 Documentation

### **Documentation Files**
- `README.md`: Main documentation (English)
- `README_EN.md`: Portuguese documentation (Português)

## 🤝 Contributing

### **Patterns**
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

## 📄 License

This project is an educational example of Clean Architecture implementation in React Native.

---

**Developed with ❤️ following the best software architecture practices.** 