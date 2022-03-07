const validator = require('html-validator')
const { readFileSync } = require('fs')
const glob = require('glob')
const { exit } = require('process')

const paths = glob.sync("_site/**/*.html");

(async () => {
  let failure = false
  for (const path of paths) {
    try {
      await validateFile(path)
    } catch (error) {
      failure = true
    }
  }
  if (failure) {
    console.log("One or more document errors were discovered!")
    exit(1)
  }
})()

async function validateFile(path) {
  const options = {
    format: 'text',
    data: readFileSync(path, 'utf8')
  }

  const result = await validator(options)
  console.log(path, result)
  if (result.startsWith("Error")) {
    throw new Error(result)
  }
}