
module.exports = [
    {
        name: 'name',
        message: 'Please name this new project:',
        default: 'my-app',
        validate: value => value.match(/^(@[.a-zA-Z1-9_-]+\/)?[.a-zA-Z1-9_-]+$/) ? null :
            'Please only use letters, numbers, dot(.), dash(-) and underscore(_).'
    },
    {
        message: 'Standalone or with theia apps?',
        choices: [
            { title: 'Create project with apps' },
            { value: 'standalone', title: 'Only extension' }
        ]
    },
    {
        message: "fake question because features not specified in questions do not get passed through before->questions->transforms pipeline",
        choices: [

            { value: 'hello-world', title: 'Hello World' },
            { value: 'widget', title: 'Widget (with unit tests)' },
            { value: 'labelprovider', title: 'LabelProvider' },
            { value: 'tree-editor', title: 'Tree Editor' },
            { value: 'backend', title: 'Backend Communication' },
            { value: 'empty', title: 'Empty' }
        ]
    },
    {
        multiple: true,
        message: 'Create root project and apps? (default: both selected)',
        choices: [
            { if: "!standalone", value: 'browser', selected: true, title: 'browser-app' },
            { if: "!standalone", value: 'electron', selected: true, title: 'electron-app' }
        ]
    },
    {

        name: 'author',
        message: "The extension's author"

    },
    {

        name: 'version',
        message: "The extension's version",
        default: '0.0.0'
    },
    {

        name: 'description',
        message: "The extension's description"
    },
    {

        name: 'theiaVersion',
        message: "The version of Theia to use",
        default: 'latest'
    },
    {

        name: 'lernaVersion',
        message: "The version of lerna to use",
        default: '2.4.0'
    },
    {
        message: 'Add vscode configuration files?',
        choices: [
            { value: 'vscode', title: 'yes' },
            { title: 'No.' }
        ]
    },
    {
        message: "Install dependencies?",
        choices: [
            { title: 'Yes, please (if yarn available)' },
            { value: 'skip-install', title: 'No' },
        ]
    },

];