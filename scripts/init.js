const fs = require('fs')

if (!fs.existsSync(__dirname + '/../.env')) {
  fs.copyFileSync(__dirname + '/../.env.template', __dirname + '/../.env')
}
