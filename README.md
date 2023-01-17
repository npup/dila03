# dila03

Testar att bygga ett (typescript-) lib med dependencies och publicera till npm.

De intressanta filerna är:

    package.json
    vite.config.ts

Och ev. `tsconfig.json`.


## Checkout, install:

    git clone git@github.com:npup/dila03.git
    cd dila03
    npm i

## Test-webbsidor

    npm start

Öppna webbläsaren på http://localhost:8080

## Utveckling och publicera nytt


### Utveckling

Redigera filerna i `src/`, sen rebuild:

    npm run build

### Publicering

När man är nöjd med ändringar: uppdatera `package.json#version` och publicera.

Först som `--dry-run`:

    npm publish --dry-run

Sedan på riktigt:

    npm publish
