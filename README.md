## Create a Next.js project with TypeScript

### 1. Create a new Next.js project

Run in command line: ```npx create-next-app <app-name>```.

### 2. Configure with TypeScript
- Create file `tsconfig.json` in the root folder of the project.
- Run in command line: ```npm install -D typescript @types/react @types/node```.
- Run in command line: ```npm run dev```.
- Use the `"moduleResolution": "node"` in the `tsconfig.json`.
- Turn on TypeScript strict mode `"strict": true`.

### 3. Change current `js` files to `tsx` files
In the `_app.tsx` file, change the code like this:
```typescript jsx
function MyApp({ Component, pageProps } : AppProps) {
  return <Component {...pageProps} />
}
```

## Install Tailwind CSS with Next.js

### 1. Install Tailwind CSS
Run in command line:
```shell
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

### 2. Configure the template paths
Add the paths to all template files in `tailwind.config.js` file.
```javascript
module.exports = {
  content: [
    "./components/**/*.{js,ts,jsx,tsx}",
    "./containers/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

### 3. Add the Tailwind directives to CSS
Add the `@tailwind` directives for each of Tailwind’s layers to `./styles/globals.css` file.
```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

### 4. Start the build process
Run in command line: ```npm run dev```.