'use strict'

/*
 * main.js - entry point for using the state machine to process files
 *
 */

const fs = require('fs')
const fsPromises = fs.promises
const path = require('path')

const stateMachine = require('./stateMachine')

async function runStateMachine (scheme, file) {
  try {
    const fileContents = await fsPromises.readFile(path.join(__dirname, file))
    const lines = fileContents.split('\n')
    if (lines.length === 0) throw new Error('The file is empty')
      return await stateMachine(scheme, lines)
  } catch (err) {
    throw new Error(err)
  }			
}

runStateMachine(process.argv[2], process.argv[3])
