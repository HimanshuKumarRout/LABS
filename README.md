# LABS – Learn, Adapt, Build, Solve

A comprehensive online platform for Computer Science students to learn, practice, and experiment with programming and core CS concepts. Combines structured learning, hands-on coding, and DSA problem-solving in a single ecosystem.

---

## Prerequisites

- Node.js >= 22
- npm
- PostgreSQL (for backend)

## Tech Stack

| Layer            | Technology                    |
| ---------------- | ----------------------------- |
| Frontend         | React, Tailwind CSS, Vite     |
| Backend          | Node.js (Express)             |
| Database         | PostgreSQL                    |
| Code Execution   | Judge0 API / custom sandbox   |
| MDX Docs         | @mdx-js/rollup, @mdx-js/react |
| Live Code Blocks | @codesandbox/sandpack-react   |
| Search           | FlexSearch / Fuse.js          |
| Routing          | react-router-dom              |

## Features

### Learning Hub

Structured courses (C, C++, Python, Java), core subjects (DSA, DBMS, OS, CN, OOP), notes, tutorials, quizzes, and learning roadmaps.

### Coding Playground

In-browser code editor with multi-language support (C++, Python, Java, JavaScript), instant execution, and output console.

### DSA Practice System

LeetCode-like problem-solving with difficulty levels (Easy, Medium, Hard), tags (Arrays, Graphs, DP, etc.), test cases, submissions, and performance tracking.

### Playground / Experiment Zone

Mini tools, algorithm visualizers (sorting, pathfinding), and small coding experiments.

### Project Lab

Project ideas, upload and showcase projects, community exploration.

### User System

Authentication (login/signup), profiles, progress tracking, badges, and achievements.

### Documentation Site

File-based MDX docs with dark mode, local search, sidebar navigation, and live Sandpack code blocks.

---

## Quick Start

### 1. Clone the repository

```bash
git clone https://github.com/{yourusername}/LABS
cd LABS
```

### 2. Setup Server

```bash
cd Server
npm install
cp .env.example .env
# Fill in your database credentials and secrets in .env
npm run dev
```

> See [`Server/README.md`](./Server/README.md) for full setup guide.

### 3. Setup Client

```bash
cd ../Client
cd Client
npm install
cp .env.example .env
# Fill in credentials in .env
npm run dev
```

> See [`Client/README.md`](./Client/README.md) for full setup guide.

---

## Git Workflow

### Branching

Create feature branches from `dev` and merge back via pull request:

```bash
git checkout dev
git pull origin dev
git checkout -b feat/my-feature
# work, commit, push
git push origin feat/my-feature
```

### Commits

Use conventional commits:

```
feat: add DSA problem submission endpoint
fix: resolve race condition in code execution
refactor: extract validation middleware
docs: update API reference
chore: bump dependencies
```

### Commit Flow

```bash
# 1. Check what you changed
git status

# 2. Stage your files
git add .                        # all changed files

# 3. Commit with a conventional message
git commit -m "feat: add user authentication"

# 4. Push your branch
git push origin feat/my-feature
```

### Pre-commit Hook

Husky runs `lint-staged` automatically before every commit:

- Staged `.js` / `.jsx` files are formatted with Prettier then linted with ESLint
- Staged `.json` / `.md` / `.css` files are formatted with Prettier

If linting fails, the commit is blocked — fix the errors and try again.

### Pull Request Workflow

1. Push your branch and open a PR against `dev`
2. Request review from at least one teammate
3. Squash-merge into `dev` after approval
4. Delete the feature branch (local + remote)

   ```bash
   git branch -d feat/my-feature                 # delete local
   git push origin --delete feat/my-feature      # delete remote
   ```

---

## ESLint Rules

| Rule                     | Severity | Meaning                                                                                                                 |
| ------------------------ | -------- | ----------------------------------------------------------------------------------------------------------------------- |
| `eqeqeq`                 | error    | Enforces strict equality (`===` / `!==`) instead of loose (`==` / `!=`) to avoid type-coercion bugs                     |
| `curly`                  | error    | Requires braces `{}` around all control flow bodies (`if`, `else`, `for`, `while`) — no single-line unbraced statements |
| `no-unused-vars`         | warn     | Flags variables that are declared but never referenced — prefix with `_` to intentionally ignore                        |
| `no-duplicate-imports`   | error    | Prevents the same module from being imported more than once in a file                                                   |
| `import-x/no-unresolved` | error    | Ensures all import paths resolve to an actual file or module — catches typos and missing dependencies                   |

---
