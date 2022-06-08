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

module.exports = async function ({
  unattended, here, prompts, run, properties, notDefaultFeatures, ansiColors
}, {
  // for testing
  _isAvailable = isAvailable,
  _log = console.log
} = {}) {

  const c = ansiColors;
  let depsInstalled = false;

  if (notDefaultFeatures.indexOf('skip-install') === -1 && _isAvailable('yarn')) {
    await run('yarn', ['install']);
    depsInstalled = true;
  }
  if (!unattended) {

    _log(`\nNext time, you can try to create similar project in silent mode:`);
    _log(c.inverse(` npx makes Alexander-Taran/new-theia-extension new-project-name${here ? ' --here' : ''} -s ${notDefaultFeatures.length ? (notDefaultFeatures.join(',') + ' ') : ''}`));

  }
  _log(`\n${c.underline.bold('Get Started')}`);
  if (!here) _log('cd ' + properties.name);
  if (!depsInstalled) _log('yarn install');
  _log('yarn start\n');
};