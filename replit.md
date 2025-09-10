# Portfolio Application

## Overview

This is a full-stack portfolio application showcasing Ethan Walker's blockchain development expertise. The application features an interactive 3D portfolio website built with React Three Fiber, combined with a PostgreSQL-powered backend using Express.js. The frontend presents an immersive experience with floating 3D elements, blockchain-themed visualizations, and smooth animations to highlight professional experience, skills, and projects in the blockchain/Web3 space.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript for type safety and modern development patterns
- **3D Graphics**: React Three Fiber ecosystem (@react-three/fiber, @react-three/drei, @react-three/postprocessing) for interactive 3D portfolio elements
- **UI Components**: Radix UI primitives with Tailwind CSS for accessible, customizable components
- **State Management**: TanStack Query for server state management and caching
- **Styling**: Tailwind CSS with CSS custom properties for theming and responsive design
- **Build Tool**: Vite for fast development and optimized production builds

### Backend Architecture
- **Runtime**: Node.js with Express.js framework for RESTful API development
- **Language**: TypeScript for type safety across the entire stack
- **Development**: Hot module replacement (HMR) integration with Vite during development
- **Middleware**: JSON/URL-encoded request parsing with comprehensive request logging

### Data Storage Solutions
- **Database**: PostgreSQL with Neon serverless database adapter for scalability
- **ORM**: Drizzle ORM for type-safe database operations and schema management
- **Schema**: Centralized schema definitions in shared directory for consistency
- **Migrations**: Drizzle Kit for database schema migrations and version control

### Project Structure
- **Monorepo Design**: Shared TypeScript interfaces and schemas between client and server
- **Client Directory**: React application with organized components, hooks, and utilities
- **Server Directory**: Express API with modular routing and storage abstraction
- **Shared Directory**: Common types, schemas, and validation logic

### Development Features
- **Hot Reloading**: Vite integration with Express for seamless development experience
- **Error Handling**: Runtime error overlay for development debugging
- **Asset Support**: GLSL shaders, 3D models (GLTF/GLB), and audio files for rich media
- **Path Aliases**: Simplified imports using @/ and @shared/ aliases

## External Dependencies

### Core Technologies
- **React Three Fiber**: 3D scene management and WebGL rendering
- **Drizzle ORM**: Type-safe PostgreSQL database operations
- **Neon Database**: Serverless PostgreSQL hosting and connection pooling
- **Zod**: Runtime type validation and schema parsing
- **TanStack Query**: Server state management and data synchronization

### UI and Styling
- **Radix UI**: Accessible headless UI component primitives
- **Tailwind CSS**: Utility-first CSS framework for responsive design
- **Framer Motion**: Animation library for smooth transitions and interactions
- **Lucide React**: Modern icon library for consistent iconography

### Development Tools
- **Vite**: Fast build tool with ES modules and hot module replacement
- **TypeScript**: Static type checking and enhanced developer experience
- **ESBuild**: Fast JavaScript bundler for production builds

### 3D and Media
- **Three.js**: WebGL library for 3D graphics (via React Three Fiber)
- **GLSL**: Shader language support for custom visual effects
- **Web Audio**: Browser audio APIs for interactive sound experiences