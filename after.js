// Use "after" task to ask user to install deps.

const { execSync } = require('child_process');

function isAvailable(bin) {
  try {
    execSync(bin + ' -v', { stdio: 'ignore' });
    return true;
  } catch (e) {
    return false;
  }
}

function camelToSnake(str) {
  return str.replace(/([a-z])([A-Z])/g, (_m, s1, s2) =>
    `${s1}-${s2.toLowerCase()}`

  ).toLowerCase()
}


const defexport  = async function ({
  unattended, here, prompts, run, properties, notDefaultFeatures, ansiColors
}, {
  // for testing
  _isAvailable = isAvailable,
  _log = console.log
} = {}) {


  const questions = require("./questions")



  function nonDefaultProperties(properties) {
    const nonDefaultProperties = []
    for (let propName in properties) {
      const question = questions.find(q => q.name == propName)
      if (question) {

        const defValue = question.default
        if (properties[propName] !== defValue) {
          nonDefaultProperties.push(`--${camelToSnake(propName)} "${properties[propName]}"`)

        }
      }
    }
    nonDefaultProperties.sort()
    return nonDefaultProperties.join(" ");
  }



  const c = ansiColors;
  let depsInstalled = false;

  if (notDefaultFeatures.indexOf('skip-install') === -1 && _isAvailable('yarn')) {
    await run('yarn', ['install']);
    depsInstalled = true;
  }
  if (!unattended) {

    _log(`\nNext time, you can try to create similar project in silent mode:`);
    _log(c.inverse(` npx makes Alexander-Taran/new-theia-extension new-project-name${here ? ' --here' : ''} ${nonDefaultProperties(properties)} -s ${notDefaultFeatures.length ? (notDefaultFeatures.join(',') + ' ') : ''}`));

  }
  _log(`\n${c.underline.bold('Get Started')}`);
  if (!here) _log('cd ' + properties.name);
  if (!depsInstalled) _log('yarn install');
  _log('yarn start\n');
};
defexport.camelToSnake = camelToSnake

module.exports = defexport