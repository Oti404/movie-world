# 🧠 Project Preferences & Decisions
*This file tracks the "Taste" of the project and the Current Mission Phase.*

## 🎯 Strategic Roadmap (Current Phase: 4)
*Instruct the agent to "Advance to Phase X" to unlock specific constraints.*

- [x] **Phase 1: The Foundation (Vue SPA)** ✅ COMPLETED (2025-12-20)
    - Stack: Vue 3, Vite, Vue Router.
    - Goal: Client-side rendering only. Clean component architecture.
- [x] **Phase 2: The Deployment (Vercel)** ✅ COMPLETED (2025-12-21)
    - Goal: Configure `vercel.json`, set up CI/CD pipeline, ensure build optimization.
- [x] **Phase 3: The Local Server (Node/Express)** ✅ COMPLETED (2025-12-22)
    - Goal: Create a standalone `server.js` for local API handling (Demo Branch only).
    - Note: This must happen on a separate branch `feat/local-server`.
- [x] **Phase 4: The Great Migration (Nuxt SSR)** ✅ COMPLETED (2025-12-23)
    - Goal: Port logic to Nuxt framework, enable SSR, remove separate router config.

## 🎨 Coding Style (Vue Focused)
- **Components:** Use **Composition API** with `<script setup lang="ts">`.
- **Naming:** PascalCase for component files (`UserProfile.vue`), kebab-case in templates (`<user-profile />`).
- **State:** Use `ref` for primitives, `reactive` for objects. Avoid Vuex (use Pinia if needed).

## 💾 Implementation Decisions
- **List Rendering:** Use Pagination (Server-side), NOT Infinite Scroll.
- **Styling:** Scoped CSS or Tailwind Utility classes.

## 📝 Git Commit Convention
- Format: `type(scope): description`
- Example: `feat(auth): add login validation logic`
