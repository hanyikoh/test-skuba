### Step 1: Install Node.js
First, you need Node.js installed on your computer since TypeScript runs on top of it.

- Go to https://nodejs.org
- Download the LTS (Long Term Support) version
- Run the installer and follow the setup wizard
- Verify installation by opening a terminal/command prompt and typing:
```bash
node --version
npm --version
```

### Step 2: Create Your Project Folder
Create a new folder for your project (you can do this through your file explorer or terminal)
Navigate to that folder in your terminal:
```bash
cd path/to/your/project-folder
```

### Step 3: Initialize a New Node.js Project
Run this command in your project folder:

```bash
npm init
```
This creates a package.json file that tracks your project's dependencies and settings. The -y flag accepts all default options.

### Step 4: Install TypeScript
You have two options:

Option A: Install globally (recommended for beginners)
```bash
npm install -g typescript
```
Option B: Install locally to your project

```bash
npm install --save-dev typescript
```

### Step 5: Install Additional Development Tools
Install these helpful packages:
```bash
npm install --save-dev @types/node ts-node nodemon
@types/node: Provides TypeScript type definitions for Node.js
ts-node: Lets you run TypeScript files directly without compiling first
nodemon: Automatically restarts your app when files change
```

### Step 6: Create TypeScript Configuration
Create a tsconfig.json file in your project root:
```bash
npx tsc --init
```
This creates a configuration file with sensible defaults. You can also create it manually with basic settings:
```json
{
  "compilerOptions": {
    "target": "ES2020",
    "module": "commonjs",
    "outDir": "./dist",
    "rootDir": "./src",
    "strict": true,
    "esModuleInterop": true,
    "skipLibCheck": true,
    "forceConsistentCasingInFileNames": true
  },
  "include": ["src/**/*"],
  "exclude": ["node_modules", "dist"]
}
```

### Step 7: Create Project Structure
Create these folders and files:
```bash
your-project/
├── src/
│   └── index.ts
├── dist/
├── package.json
└── tsconfig.json
```

Create a src folder and add an index.ts file inside it with some basic code:

```ts
// src/index.ts
function greet(name: string): string {
    return `Hello, ${name}!`;
}

const message = greet("World");
console.log(message);
```

### Step 8: Add Scripts to package.json
Open your package.json file and add these scripts to the "scripts" section:
```json
{
  "scripts": {
    "build": "tsc",
    "start": "node dist/index.js",
    "dev": "ts-node src/index.ts",
    "watch": "nodemon --exec ts-node src/index.ts"
  }
}
```
Step 9: Test Your Setup
Now you can run your TypeScript code in different ways:

Compile and run:
```bash
npm run build
npm start
```

Run directly (development mode):
```bash
npm run dev
```

Run with auto-restart on changes:
```bash
npm run watch
```