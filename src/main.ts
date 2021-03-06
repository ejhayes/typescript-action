import * as core from '@actions/core'
// import * as github from '@actions/github'
import {wait} from './wait'

async function run(): Promise<void> {
  try {
    core.info('This is some informational message')
    const ms: string = core.getInput('milliseconds')
    core.debug(`Waiting ${ms} milliseconds ...`)

    core.debug(new Date().toTimeString())
    await wait(parseInt(ms, 10))
    core.debug(new Date().toTimeString())
    core.info('Something else new....')
    core.setOutput('time', new Date().toTimeString())
  } catch (error) {
    core.setFailed(error.message)
  }
}

run()
