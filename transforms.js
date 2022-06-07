const { Transform } = require('stream'); // stream is core Node.js module
const path = require('path')

 function _capitalize(name) {
  return name.substring(0, 1).toUpperCase() + name.substring(1)
}

exports.append = function (properties, features) {
  const extensionName = properties.name
  const unscopedExtensionName = extensionName[0] === '@' ?
    extensionName.substring(extensionName.indexOf('/') + 1) :
    extensionName;
  const extensionPath = path.normalize(unscopedExtensionName).replace('/', '-');
  const extensionPrefix = extensionPath.split('-').map(name => _capitalize(name)).join('');
  
  properties.extensionPath = extensionPath
  properties.extensionPrefix = extensionPrefix
  console.log(properties)

  return new Transform({
    objectMode: true,
    transform: function (file, env, cb) {

      if (file.isBuffer()) {
        // change .ext to .ts or .js file
        file.path = file.path.replace(/_extensionPath_/g, `${extensionPath}`)

        //   file.extname = features.includes('typescript') ? '.ts' : '.js'
      }
      cb(null, file);
    }
  });
};