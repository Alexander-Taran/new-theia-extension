<div align='center'>
<br />
<img src='https://raw.githubusercontent.com/theia-ide/generator-theia-extension/master/logo/theia.svg?sanitize=true' alt='theia logo' width='125'>

<h2>ECLIPSE THEIA - EXTENSION GENERATOR TEMPLATE</h2>



<br />

A [makes](https://makes.js.org) template that scaffolds a project structure for developing [Eclipse Theia](https://github.com/eclipse-theia/theia) extensions.

It closely replicates yeoman based [generator-theia-extension](https://github.com/eclipse-theia/generator-theia-extension).  
Produced projects are the same.  


<br />

</div>


## How to use

No local installation needed

Every configuration option is available via prompts or via command line in unnatended mode.

## Create a sample project 
To scaffold a project with a Theia extension including a browser and electron app, run:

```shell
npx makes Alexander-Taran/new-theia-extension
```




## Create a widget extension
```shell
npx makes Alexander-Taran/new-theia-extension my-widget -s widget
```

## Skip installing dependencies
To skip installing dependencies and building add   `skip-install`
```shell
npx makes Alexander-Taran/new-theia-extension my-widget -s widget,skip-install
```

## Standalone extension
To generate extension without browser or electron apps add `standalone`
```shell
npx makes Alexander-Taran/new-theia-extension my-widget -s widget,standalone
```

> makes will create a folder with the name of your project and scaffold the template inside, so you don't have to create the directory beforehand. But you can ask it to scaffold right in the directory where you run it.

## To not create a folder for project 
To scaffold the extension without creating a directory for it add `--here` option at the end. It will use current directory as the destination.

```shell
npx makes Alexander-Taran/new-theia-extension my-widget -s widget,standalone --here
```
## Fully customized unnatended setup
```shell
 npx makes Alexander-Taran/new-theia-extension my-widget --author "Me" --description "Very Cool" --lerna-version "2.4.1" --theia-version "0.24.0" --version "1.2.3" -s standalone,no-vscode,skip-install,widget
 ```

## Extension Options


| Template Option | Description | Documentation |
|:---|:---|:---|
| `hello-world` | Creates a simple extension which provides a command and menu item which displays a message | [readme](https://github.com/eclipse-theia/generator-theia-extension/blob/master/templates/hello-world/README.md) |
| `widget` | Creates the basis for a simple widget including a toggle command, alert message and button displaying a message. The template also contains an example unit test. | [readme](https://github.com/eclipse-theia/generator-theia-extension/blob/master/templates/widget/README.md) |
| `labelprovider` | Creates a simple extension which adds a custom label (with icon) for .my files | [readme](https://github.com/eclipse-theia/generator-theia-extension/blob/master/templates/labelprovider/README.md) |
| `tree-editor` | Creates a tree editor extension | [readme](https://github.com/eclipse-theia/generator-theia-extension/blob/master/templates/tree-editor/README.md) |
| `empty` | Creates a simple, minimal extension | [readme](https://github.com/eclipse-theia/generator-theia-extension/blob/master/templates/empty/README.md) |
| `backend` | Creates a backend communication extension | [readme](https://github.com/eclipse-theia/generator-theia-extension/blob/master/templates/backend/README.md) |



