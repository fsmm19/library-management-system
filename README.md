# Sistema de Gestión de Biblioteca

El sistema permitirá a la biblioteca gestionar de forma eficiente el inventario de libros, los préstamos, las devoluciones, las multas, la administración de socios y los procesos de catalogación. Está dirigido principalmente a bibliotecarios y socios de la biblioteca. Su propósito es facilitar y optimizar las operaciones principales de una biblioteca, reemplazando los procesos manuales por una solución digital más ágil y organizada.

---

## Tecnologías utilizadas

- **Frontend:** [Next.js](https://nextjs.org/) + [TypeScript](https://www.typescriptlang.org/) + [Tailwind CSS](https://tailwindcss.com/)  
- **Backend:** [NestJS](https://nestjs.com/) sobre [Node.js](https://nodejs.org/)  
- **Base de datos:** [PostgreSQL](https://www.postgresql.org/) con ORM [Prisma](https://www.prisma.io/orm)
- **Autenticación y seguridad:** [Passport de NestJS](https://docs.nestjs.com/recipes/passport) + HTTPS
- **Despliegue:** [Microsoft Azure](https://azure.microsoft.com/)

---

## Estructura inicial del proyecto

```
library-management-system/
├── backend/ # API con NestJS
├── frontend/ # Interfaz web con Next.js + Tailwind
├── docs/ # Documentación (SRS, diagramas, etc.)
├── tests/ # Pruebas unitarias e integrales
├── .gitignore # Archivos y carpetas a ignorar por Git
├── CONTRIBUTING.md # Guía para contribuir al proyecto
└── README.md # Información general del proyecto
```

---

## Instalación y configuración (modo desarrollo)

### 1. Clonar el repositorio
```bash
git clone https://github.com/<user>/<library-management-system>.git
cd library-management-system
```

### 2. Configurar el backend (NestJS)
```bash
cd backend
pnpm install
pnpm run start:dev
```

### 3. Configurar el frontend (Next.js)
```bash
cd frontend
pnpm install
pnpm run dev
```

### 4. Levantar base de datos con Docker

Asegúrarse de tener [Docker](https://docs.docker.com/get-docker/) y [Docker Compose](https://docs.docker.com/compose/) instalados.

#### Comando principal

Desde el directorio `backend/`, ejecutar:

```bash
docker-compose up -d
```

#### Variables de entorno

En el archivo `backend/.env` definir las siguientes variables:

```env
POSTGRES_USER=your_username
POSTGRES_PASSWORD=your_password
POSTGRES_DB=library_db
```

### 5. Despliegue

- El proyecto será desplegado en Microsoft Azure.
- La documentación de despliegue se añadirá en fases posteriores.

---

## Estado del proyecto

- Fase inicial: definición de requisitos y preparación del entorno de desarrollo.
- Próximo paso: implementar la base del backend con NestJS y la autenticación con Auth.js.