# Guía de Contribución

Este documento define las convenciones que seguimos para mantener un código limpio, ordenado y consistente entre todos los integrantes del equipo.

---

## Estilo de código

### Identificadores
- **Variables y funciones:** `camelCase`  
  Ejemplo: `getUserData`, `totalBooks`
- **Clases e interfaces:** `PascalCase`  
  Ejemplo: `UserService`, `BookRepository`
- **Constantes:** `UPPER_CASE_SNAKE_CASE`  
  Ejemplo: `MAX_RETRIES`, `DEFAULT_TIMEOUT`
- **Archivos:**
  - Código en frontend/backend: `kebab-case` → `user-service.ts`
  - Componentes de React: `PascalCase` → `BookCard.tsx`

### Buenas prácticas
- Usar **TypeScript** en frontend y backend.  
- Evitar funciones largas → dividir en funciones pequeñas y claras.  
- Usar comentarios **solo donde el código no se explique por sí mismo**.  

---

## Organización de carpetas

- **Frontend (`frontend/`):**
  - `components/`, `pages/`, `styles/`, `utils/`
- **Backend (`backend/`):**
  - `src/modules/`, `src/common/`, `src/config/`

---

## Convenciones de commits

Seguimos la especificación de **[Conventional Commits](https://www.conventionalcommits.org/)**:

```
<type>(<area>): <short description>
```

### Tipos comunes
- `feat:` → Nueva funcionalidad  
- `fix:` → Corrección de errores  
- `docs:` → Cambios en documentación  
- `style:` → Formato (espacios, comas, puntos y coma, etc.)  
- `refactor:` → Refactorización de código sin cambio de funcionalidad  
- `test:` → Agregar o modificar pruebas  
- `chore:` → Cambios menores (dependencias, configs, etc.)  

**Ejemplos:**
- `feat(auth): implementar login con Auth.js`
- `fix(database): corregir error en migración de usuarios`
- `docs(readme): agregar instrucciones de instalación`

---

## Convenciones de ramas

- `main` → rama principal (solo código estable).
- `develop` → rama de integración de nuevas funciones.
- Ramas de trabajo:
  - `feature/<name>` → nuevas funcionalidades.
  - `fix/<name>` → correcciones de errores.
  - `docs/<name>` → documentación.

**Ejemplos:**
- `feature/user-authentication`
- `fix/book-loan-bug`
- `docs/setup-guide`

---

## Pull Requests (PRs)

1. Crear la rama desde `develop`.  
2. Asegurarse de que el código compile sin errores.  
3. Ejecutar pruebas (si aplica).  
4. Describir claramente qué cambios se hicieron.  
5. Esperar revisión y aprobación de al menos 1 integrante del equipo.  

---

## 🛠️ Herramientas recomendadas

- **Linting:** ESLint + Prettier  
- **Hooks de git (opcional):** Husky para validar commits y correr linters antes de subir cambios.  
- **Editor recomendado:** VSCode con extensiones para TypeScript y ESLint.

---

## 🚀 Flujo de trabajo sugerido

1. Crear rama desde `develop`.  
2. Hacer commits pequeños y claros siguiendo la convención.  
3. Abrir un Pull Request hacia `develop`.  
4. Una vez aprobado, se hace merge.  
5. La rama `main` solo recibe merges cuando se libera una versión estable.

---

> Nota: Estas convenciones son un punto de partida. El equipo puede revisarlas y ajustarlas conforme avance el proyecto.