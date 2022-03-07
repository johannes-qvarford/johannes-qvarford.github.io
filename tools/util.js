async function runAsync(f) {
    await f()
}

module.exports.runAsync = runAsync