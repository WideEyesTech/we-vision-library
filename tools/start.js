/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import path from 'path'
import webpack from 'webpack'

import clientConfig from './webpack.config'
import run from './run'

/**
 * Launches a development web server with 'live reload' functionality -
 * synchronizing URLs, interactions and code changes across multiple devices.
 */
async function start() {
  // await run(clean)
  // await run(copy.bind(undefined, true))

  await new Promise((resolve) => {
    const compiler = webpack(clientConfig)

    compiler.run(function(err, stats) {
      if (err) {
        console.log(err)
        reject()
      }

      process.stdout.write(stats.toString({
        colors: true,
        chunks: false
      }))

      process.stdout.write('\n')
      resolve()
    })
  })
}

export default start
