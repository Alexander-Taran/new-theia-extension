


module.exports = [
    // ...
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
        message: "The extension's type?",
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
            { value: 'browser', selected: true, title: 'browser-app' },
            { value: 'electron', selected: true, title: 'electron-app' }
        ]
    },
    // ...
];