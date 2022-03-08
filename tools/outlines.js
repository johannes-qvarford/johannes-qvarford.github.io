const HTML5Outline = require("h5o")
const { JSDOM } = require("jsdom")
const { readFileSync, writeFileSync, mkdirSync } = require("fs")
const { dirname } = require('path')

async function outlines(paths, subDirectory) {
    for (const path of paths) {
        const htmlString = readFileSync(path)
        const dom = new JSDOM(htmlString)
        const outline = HTML5Outline(dom.window.document.body);
        const html = outline.asHTML()
        const outputPath = inputToOutputPath(path, subDirectory)
        const outputDir = dirname(outputPath)
        console.log(path)
        mkdirSync(outputDir, { recursive: true })
        writeFileSync(outputPath, html)
    }
}

function inputToOutputPath(input, subDirectory) {
    return input.replaceAll("out", subDirectory)
}

module.exports.outlines = outlines
