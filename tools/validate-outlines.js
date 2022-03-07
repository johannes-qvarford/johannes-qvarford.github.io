const glob = require('glob');
const { runAsync } = require("./util");
const { outlines } = require("./outlines");
const { compareSync } = require("dir-compare")
const rimraf = require("rimraf")

const paths = glob.sync("_site/**/*.html");

runAsync(async () => {
    await outlines(paths, "_outlines")
    const result = compareSync("_outlines", "outlines", { compareContent: true })
    rimraf.sync("_outlines")

    const importantDifferences = result.diffSet.filter(f => f.state != 'equal')
    if (result.same) {
        console.log("Outlines are as excepted!")
    } else {
        console.log(importantDifferences)
        const diffs = importantDifferences
            .map(dif => `${dif.relativePath}/${dif.name1 || dif.name2} ${dif.state}`)
        console.log(`Outlines are different! differences:\n${diffs}`)
    }
})

function printDirDiff(result) {
    console.log('Directories are %s', result.same ? 'identical' : 'different')

    console.log('Statistics - equal entries: %s, distinct entries: %s, left only entries: %s, right only entries: %s, differences: %s',
        result.equal, result.distinct, result.left, result.right, result.differences)

    result.diffSet.filter(dif => dif.state == 'left' || dif.state == 'right')
        .forEach(dif => console.log('Difference - name1: %s, type1: %s, name2: %s, type2: %s, state: %s', dif.name1, dif.type1, dif.name2, dif.type2, dif.state))
}