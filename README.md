# better-web-fs
![NPM Downloads](https://img.shields.io/npm/dw/better-web-fs)
![NPM License](https://img.shields.io/npm/l/better-web-fs)
![GitHub Repo stars](https://img.shields.io/github/stars/yogykyn/better-web-fs)

A library for accessing the file system in a web browser like accessing the [NodeJS Filesystem API promises](https://nodejs.org/api/fs.html#promises-api).

## How to install?
You can install via NPM, PNPM, Yarn or Bun.
```shell
npm install better-web-fs --save
```

```shell
pnpm add better-web-fs --save-prod
```

```shell
yarn add better-web-fs
```

```shell
bum install better-web-fs --save
```

## Usage
```javascript
import { IndexedFs, MemoryFs } from 'better-web-fs';

async function main() {
  const rootfs = new IndexedFs(125829120 /* 120 mb */);
  const tmpfs = new MemoryFs(12582912 /* 12 mb */);

  await rootfs.mount(tmpfs, '/tmp');
  await rootfs.writeFile('/tmp/test.txt', 'Hello world');
}

main();
```

## How to build?
Before building, make sure the required dependencies are installed. If not, run this :
```shell
npm install
```

To build, run the script [scripts/esbuild.mjs](scripts/esbuild.mjs). If you want the build to run in watch mode, add the ---watch flag. 

```shell
node scripts/esbuild.mjs
```

```shell
node scripts/esbuild.mjs --watch
```

Or you can run npm script to build.
```shell
npm run build
```
```shell
npm run dev
```
```shell
npm run watch:dev
```

## License
This project is under the MIT License, see [LICENSE](LICENSE) for more information.
