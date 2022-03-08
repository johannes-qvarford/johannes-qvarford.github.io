const glob = require('glob');
const { runAsync } = require("./util");
const { outlines } = require("./outlines");

const paths = glob.sync("out/**/*.html");

runAsync(async () => {
    await outlines(paths, "outlines")
})