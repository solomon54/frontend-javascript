## 📄 Brief TypeScript README

TypeScript is a strongly typed superset of JavaScript that compiles to plain JavaScript. It adds optional **static types** to help catch errors early, improve code quality, and provide better tooling (like autocompletion and refactoring) at any scale.

---

### 📥 Installation

Before installing TypeScript, you need **Node.js** (which includes npm, the Node Package Manager) installed on your system.

- **Install Globally (Recommended for compiler tools):**
  This allows you to run the TypeScript compiler (`tsc`) from any directory in your terminal.

  ```bash
  npm install -g typescript
  ```

- **Install Locally (Recommended for project dependencies):**
  Install it as a development dependency within a specific project directory.

  ```bash
  npm install --save-dev typescript
  ```

  To execute the compiler from a local install, you typically use `npx`: `npx tsc`.

- **Verify Installation:**
  Check the installed version of the TypeScript compiler.

  ```bash
  tsc --version
  ```

---

### ⚙️ Setup and Configuration

1.  **Initialize Project (Optional but Recommended):**
    If you're in a new project folder, you should initialize a Node.js project first.

    ```bash
    npm init -y
    ```

2.  **Create a Configuration File:**
    The `tsconfig.json` file defines the root files and compiler options required to compile the TypeScript project.

    ```bash
    tsc --init
    ```

    This command creates a `tsconfig.json` file with default settings.

---

### ▶️ Run Commands (Compile & Execute)

TypeScript code (`.ts` files) must be compiled (transpiled) into JavaScript (`.js` files) before it can be run in environments like Node.js or a browser.

| Action                    | Command                   | Description                                                                            |
| :------------------------ | :------------------------ | :------------------------------------------------------------------------------------- |
| **Compile a single file** | `tsc filename.ts`         | Generates `filename.js` in the same directory.                                         |
| **Compile the project**   | `tsc`                     | Compiles all TypeScript files based on settings in `tsconfig.json`.                    |
| **Compile in watch mode** | `tsc --watch` or `tsc -w` | Compiles automatically whenever a `.ts` file changes (very useful during development). |
| **Run compiled JS**       | `node filename.js`        | Executes the resulting JavaScript file using Node.js.                                  |

- **Run Directly (Using `ts-node`):**
  For development, you can use **`ts-node`** to compile and run TypeScript files directly in a single step without generating intermediate `.js` files.

  1.  **Install `ts-node`** (locally or globally): `npm install -g ts-node`
  2.  **Run file:** `ts-node filename.ts`

---

### 💡 Example Workflow

1.  Create a file named `hello.ts`:

    ```typescript
    let greeting: string = "Hello, TypeScript!";
    console.log(greeting);
    ```

2.  **Compile:**

    ```bash
    tsc hello.ts
    ```

    (This creates a new file, `hello.js`, containing the equivalent JavaScript.)

3.  **Run:**

    ```bash
    node hello.js
    ```

    (Output: `Hello, TypeScript!`)
