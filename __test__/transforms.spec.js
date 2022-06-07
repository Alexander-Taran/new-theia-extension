const test = require('ava');
const Vinyl = require('vinyl');
const { Writable } = require('stream');
const { append } = require('../transforms');
const extTransform = append;

test('Only one append transform', t => {
  t.is(typeof extTransform, 'function');
});

test('extention files are placed in a folder with name of the extension', async t => {


  const jsExt = extTransform({ name: '@scope/my-app' });

  jsExt.write(new Vinyl({
    path: '_extensionPath_/package.json',
    contents: Buffer.from('{}')
  }));
  jsExt.write(new Vinyl({
    path: '_extensionPath_/_extensionPath_-module.ts',
    contents: Buffer.from('{}')
  }));

  jsExt.end()

  const files = await jsExt.toArray()
  t.is(files.length, 2);
  t.is(files[0].path.replace(/\\/g, '/'), 'my-app/package.json');
  t.is(files[0].contents.toString(), '{}');
  t.is(files[1].path.replace(/\\/g, '/'), 'my-app/my-app-module.ts');
  t.is(files[1].contents.toString(), '{}');

});