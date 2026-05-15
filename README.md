# Fylo Website

## Architecture: Modular Feature-Based

This project follows a strict **Modular Feature-Based Architecture** to ensure scalability and maintainability.

### Folder Structure
- `src/features/`: Core business logic and UI organized by feature (e.g., `landing-page`).
  - `pages/`: Feature-specific route components.
  - `components/`: Local UI components used only within this feature.
  - `routes.ts`: Feature-specific route definitions.
  - `index.ts`: Barrel export for the feature.
- `src/shared/`: Resources used by multiple features.
  - `components/ui/`: Generic UI primitives (e.g., buttons, inputs).
  - `composables/`: Shared Vue composables.
  - `utils/`: Shared utility functions.
- `src/router/`: Centralized routing configuration.
- `src/stores/`: Global state management (Pinia).
- `src/config/`: Environment variable validation (Zod).

### Tech Stack
- **Framework:** Vue 3 (Composition API)
- **Styling:** Tailwind CSS v4
- **Build Tool:** Vite
- **Runtime:** Bun
- **Validation:** Zod

### Development
```bash
bun install
bun run dev
```
