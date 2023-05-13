# React Button

## Internal vs External Package

When using this package as a internal package, the package.json can be like this:

```json
{
  "name": "@my-org/button",
  "version": "1.0.0",
   "main": "src/index.ts",
  "types": "src/index.ts",
  "files": [
    "dist"
  ],
  "scripts": {
    "build": "tsc"
  },
  "devDependencies": {
    "typescript": "^3.8.3"
  }
}
```

When using this package as a external package, the package.json can be like this:

```json
{
  "name": "@my-org/button",
  "version": "1.0.0",
  "main": "dist/index.umd.cjs",
  "module": "dist/index.js",
  "types": "dist/index.d.ts",
  "exports": {
    ".": {
      "import": "./dist/index.js",
      "require": "./dist/index.umd.cjs"
    },
    "./dist/style.css": "./dist/style.css"
  },
  "sideEffects": false,
  "files": [
    "dist"
  ],
}
```
