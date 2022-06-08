module.exports = async function ({ unattended, prompts, predefinedProperties }) {

    if (unattended) { return }

    const preselectedFeatures = []

    const extensionType = await prompts.select(
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
        })
    preselectedFeatures.push(extensionType)

    const explicit = await prompts.select({
        message: 'Specify additional settings?',
        hint: 'author, theia version, github url etc..',
        choices: [
            { title: 'No. Procede with defaults' },
            { value: 'explicit', title: 'Go through the rest of questions' }
        ]
    })

    if (!explicit) {
        predefinedProperties,
        predefinedProperties
        return {
            silentQuestions: true,
            predefinedProperties,
            preselectedFeatures
        }
    }

    return {
        predefinedProperties,
        preselectedFeatures
    };

};