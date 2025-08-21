# Razorpay Refund to Wallet Landing Page

## Overview

This is a React/TypeScript application built for creating a landing page for Razorpay's "Refund to Wallet" feature targeted at Shopify merchants. The application is built using a modern full-stack architecture with React frontend, Express backend, and PostgreSQL database integration.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite for fast development and optimized builds
- **Styling**: Tailwind CSS with custom Razorpay brand variables
- **UI Components**: Radix UI primitives with shadcn/ui component library
- **State Management**: TanStack Query (React Query) for server state management
- **Routing**: Wouter for lightweight client-side routing
- **Forms**: React Hook Form with Zod validation

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ES modules
- **Database ORM**: Drizzle ORM for type-safe database operations
- **Database**: PostgreSQL (configured for Neon Database)
- **Session Management**: Connect-pg-simple for PostgreSQL session storage
- **Development**: Hot reload with tsx and Vite middleware integration

### Key Components

1. **Landing Page Components**
   - Sticky navigation with smooth scrolling
   - Hero section with merchant logos and CTA
   - Feature sections with cards and animations
   - Mobile-responsive design with hamburger menu

2. **UI System**
   - Complete shadcn/ui component library
   - Razorpay brand colors and typography (Inter font)
   - Responsive design patterns
   - Accessibility features built-in

3. **Database Schema**
   - User management with username/password authentication
   - Extensible schema structure using Drizzle ORM
   - Migration system for database changes

## Data Flow

1. **Client-Side**: React components consume data via TanStack Query
2. **API Layer**: Express routes handle HTTP requests with type-safe validation
3. **Database**: Drizzle ORM provides type-safe database operations
4. **Storage**: Abstracted storage interface supports both in-memory and PostgreSQL

## External Dependencies

### Core Dependencies
- **@neondatabase/serverless**: PostgreSQL database connectivity
- **@tanstack/react-query**: Server state management
- **@radix-ui/***: Accessible UI primitives
- **drizzle-orm**: Type-safe database ORM
- **tailwindcss**: Utility-first CSS framework
- **wouter**: Lightweight routing library

### Development Dependencies
- **vite**: Build tool and development server
- **tsx**: TypeScript execution for development
- **@replit/vite-plugin-***: Replit-specific development tools

## Deployment Strategy

### Build Process
1. **Frontend**: Vite builds React app to `dist/public`
2. **Backend**: esbuild compiles TypeScript server to `dist/index.js`
3. **Database**: Drizzle migrations applied via `db:push` command

### Environment Configuration
- **DATABASE_URL**: PostgreSQL connection string (required)
- **NODE_ENV**: Environment mode (development/production)
- **REPL_ID**: Replit-specific environment detection
- **RZP_KEY**: Authentication key for API access (required for security)
- **VITE_RZP_KEY**: Client-side authentication key (should match RZP_KEY)

### Scripts
- `dev`: Development server with hot reload
- `build`: Production build for frontend and backend
- `start`: Production server startup
- `check`: TypeScript type checking
- `db:push`: Apply database schema changes

### Architecture Decisions

1. **Monorepo Structure**: Frontend, backend, and shared code in single repository for easier development and deployment
2. **TypeScript Throughout**: Full type safety from database to UI components
3. **Drizzle ORM**: Chosen for type safety and PostgreSQL compatibility, with migration support
4. **Tailwind + shadcn/ui**: Rapid UI development with consistent design system
5. **Vite Integration**: Fast development with middleware mode for backend integration
6. **Storage Abstraction**: Interface-based storage allows switching between in-memory and PostgreSQL
7. **RZP_KEY Authentication**: All endpoints (frontend and backend) require RZP_KEY header for access, returning 404 without proper authentication

### Security Implementation

**RZP_KEY Authentication System**: The application implements comprehensive authentication using a custom RZP_KEY header:

1. **Backend Protection**: Express middleware checks for `RZP_KEY` header on ALL requests
2. **Frontend Protection**: React AuthGuard component verifies authentication before rendering app
3. **API Integration**: All fetch requests automatically include RZP_KEY header
4. **404 Response**: Unauthenticated requests receive 404 "Not Found" instead of 401 to obscure the application's existence

**Deployment Requirements**:
- Set `RZP_KEY` environment variable on server
- Set `VITE_RZP_KEY` environment variable for client-side (same value as RZP_KEY)
- Without these keys, the application returns 404 for all routes and APIs

The application is designed to be easily deployable on Replit or external platforms like Render with automatic database provisioning and development tooling integration.