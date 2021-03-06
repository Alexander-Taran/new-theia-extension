const test = require('ava');
const after = require('../after');

const ansiColors = (m) => m;
ansiColors.inverse = ansiColors;
ansiColors.underline = ansiColors;
ansiColors.bold = ansiColors;

const isAvailable = bin => bin === 'yarn';


test('camelToSnake handles camelCase', t => {
  t.is(after.camelToSnake('camelCase'), 'camel-case')
})
test('camelToSnake handles camelCCase', t => {
  t.is(after.camelToSnake('camelCCase'), 'camel-ccase')
})


test('"after" task only prints summary in unattended mode', async t => {
  const prompts = {
    select() {
      t.fail('should not call me');
    }
  };

  function run(cmd, args) {
    t.fail('should not call me');
  }

  let printOut = '';
  await after({
    unattended: true,
    here: false,
    prompts,
    run,
    properties: { name: 'my-app' },
    notDefaultFeatures: ['a', 'b-c', 'skip-install'],
    ansiColors
  }, {
    _isAvailable: isAvailable,
    _log(m) {
      printOut += m + '\n';
    }
  });

  t.is(printOut,
    '\nGet Started\n' +
    'cd my-app\n' +
    'yarn install\n' +
    'yarn start\n\n'
  );
});

test('"after" task only prints summary in unattended mode and here mode', async t => {
  const prompts = {
    select() {
      t.fail('should not call me');
    }
  };

  function run(cmd, args) {
    t.fail('should not call me');
  }

  let printOut = '';
  await after({
    unattended: true,
    here: true,
    prompts,
    run,
    properties: { name: 'my-app' },
    notDefaultFeatures: ['a', 'b-c', 'skip-install'],
    ansiColors
  }, {
    _isAvailable: isAvailable,
    _log(m) {
      printOut += m + '\n';
    }
  });

  t.is(printOut,
    '\nGet Started\n' +
    'yarn install\n' +
    'yarn start\n\n'
  );
});

test('"after" task installs deps, and prints summary', async t => {
  const prompts = {
    select(opts) {
      t.deepEqual(opts.choices.map(c => c.value), [undefined, 'yarn']);
      return 'yarn';
    }
  };

  function run(cmd, args) {
    t.is(cmd, 'yarn');
    t.deepEqual(args, ['install']);
  }

  let printOut = '';
  await after({
    unattended: false,
    here: false,
    prompts,
    run,
    properties: { name: 'my-app' },
    notDefaultFeatures: ['a', 'b-c'],
    ansiColors
  }, {
    _isAvailable: isAvailable,
    _log(m) {
      printOut += m + '\n';
    }
  });

  t.is(printOut,
    '\nNext time, you can try to create similar project in silent mode:\n' +
    ' npx makes Alexander-Taran/new-theia-extension new-project-name  -s a,b-c \n\n' +
    'Get Started\n' +
    'cd my-app\n' +
    'yarn start\n\n'
  );
});

test('"after" task installs deps, and prints summary in here mode', async t => {
  const prompts = {
    select(opts) {

      t.deepEqual(opts.choices.map(c => c.value), [undefined]);
      return 'yarn';
    }
  };

  function run(cmd, args) {
    t.is(cmd, 'yarn');
    t.deepEqual(args, ['install']);
  }

  let printOut = '';
  await after({
    unattended: false,
    here: true,
    prompts,
    run,
    properties: { name: 'my-app' },
    notDefaultFeatures: ['a', 'b-c'],
    ansiColors
  }, {
    _isAvailable: () => true,
    _log(m) {
      printOut += m + '\n';
    }
  });

  t.is(printOut,
    '\nNext time, you can try to create similar project in silent mode:\n' +
    ' npx makes Alexander-Taran/new-theia-extension new-project-name --here  -s a,b-c \n\n' +
    'Get Started\n' +
    'yarn start\n\n'
  );
});
