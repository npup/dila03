import path from "path";
import * as url from "url";
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";

const __dirname = url.fileURLToPath(new URL(".", import.meta.url));

// Denna sträng förekommer även i package.json och behöver synkas dit vid ändring
const libName = "dila03";

export default defineConfig({
    build: {
        sourcemap: true,
        minify: true,
        lib: {
            formats: ["es", "cjs"],
            entry: path.resolve(__dirname, "src/index.ts"),
            name: libName,
            fileName: (format) => {
                switch (format) {
                    case "cjs":
                        return `${libName}.cjs`;
                    case "es":
                        return `${libName}.js`;
                }
                throw Error(`Konstigt modulformat: ${format}`);
            },
        },
    },
    plugins: [
        dts({
            insertTypesEntry: true,
            entryRoot: "./src",
        }),
    ],
});
