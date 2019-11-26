const fs = require("fs");

const caminho = __dirname + "/arquivo.json";

// Síncrono (não recomendado para arquivos grandes)
const conteudo = fs.readFileSync(caminho, "utf-8");
console.log(conteudo);

//Assíncrono

fs.readFile(caminho, "utf-8", (erro, conteudo) => {
    const config = JSON.parse(conteudo);
    console.log(`${config.db.host}:${config.db.port}`)
});