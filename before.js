

module.exports = async function ({ unattended, prompts, predefinedProperties }) {
//  return 
    // don't ask when running in silent mode.
    let preselectedProperties = {
        vscode: true,
        author: "",
        version: "0.0.0",
        description: "",
        license: "",
        githubUrl: "",
        theiaVersion: 'latest',
        lernaVersion: "2.4.0",
        somevalue:"not some value",
        ...predefinedProperties

    }



    return {
        predefinedProperties: preselectedProperties
    };

};