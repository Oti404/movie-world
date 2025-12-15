# 🧠 Project Preferences & Decisions
*This file tracks the "Taste" of the project and the Current Mission Phase.*

## 🎯 Strategic Roadmap (Current Phase: 1)
*Instruct the agent to "Advance to Phase X" to unlock specific constraints.*

- [x] **Phase 1: The Foundation (Vue SPA)** ✅ COMPLETED
    - Stack: Vue 3, Vite, Vue Router.
    - Goal: Client-side rendering only. Clean component architecture.
- [ ] **Phase 2: The Deployment (Vercel)**
    - Goal: Configure `vercel.json`, set up CI/CD pipeline, ensure build optimization.
- [ ] **Phase 3: The Local Server (Node/Express)**
    - Goal: Create a standalone `server.js` for local API handling (Demo Branch only).
    - Note: This must happen on a separate branch `feat/local-server`.
- [ ] **Phase 4: The Great Migration (Nuxt SSR)**
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