// Assume add.wasm file exists that contains a single function adding 2 provided arguments
const fs = require("node:fs");
const path = require("node:path");

const wasmBuffer = fs.readFileSync(
    path.join(__dirname, "../pkg/rust_html_bindgen.core.wasm")
);

const { instantiate } = require("../pkg/rust_html_bindgen");

const main = async () => {
    return WebAssembly.compile(wasmBuffer).then(async (wasmModule) => {
        const wasm = await instantiate(() => wasmModule, {});
        return wasm.transformHtml(
            `
<p>Noah, brimming with excitement over
    `
        );
    });
};

main()
    .then((html) => {
        console.log(html);
    })
    .catch((err) => {
        console.error(err);
        process.exit(1);
    });
