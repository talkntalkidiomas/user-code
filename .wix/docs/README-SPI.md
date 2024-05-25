# The SPI Folder for Custom Extensions

Custom extensions, also known as SPIs, allow you to add your own custom logic to existing Wix app flows and to integrate services from 3rd party providers. 

The process for implementing an SPI has these steps: 
1. Create a new extension on your site using the Wix Studio Code panel. 
1. Implement your extension with custom code using the Wix IDE. 
1. Deploy the extension by publishing your site. 

Learn more about [custom app extensions using SPIs](https://support.wix.com/en/article/velo-custom-app-extensions-using-spis).

## Creating a custom extension

From the Wix Studio Code panel, click *Packages & Apps*. Next to Custom Extensions, click the **+** icon. Follow the prompts to choose the type of extension you want to add and name it.

Adding a custom extension in the Code panel creates a folder under the `src/backend/___spi___` folder. The name of the folder is based on the extension you chose. Inside this is another folder with the name of the extension you set up. 

> **Important!** You must add the custom extension from the Code panel. Do not bypass the Wix Studio code panel to manually create the folders and files directly in the Wix IDE. 

## The SPI folder for custom extensions 

The `src/backend/___spi___` folder contains a subfolder for each custom extension on your site. 

Each subfolder contains a set of default code files for that extension. 

Using the Wix IDE, implement the custom code for your extension in these files. 

### Default extension files 

+ `<my-extension-name>.js`: The code in this file generally defines a function named after the purpose of the custom extension, such as `getShippingRates()` or `getFees()`. The function is called by Wix to retrieve the data provided by your extension.

+ `<my-extension-name>-config.js`: The code in this file generally defines a function that returns an object containing values used to configure your extension.

### Additional .js files

You can add more files to the subfolder for your extension as necessary. For example, you might not want to keep all your code in the main default extension files. 

To import from these files to the main extension files, use the following syntax:

```js
import { functionName } from './myFileName.js';
```

## Legal notices and limitations

+ If you connect to a 3rd-party provider using SPIs, you agree to the [Wix.com Terms of Use](https://www.wix.com/about/terms-of-use). Wix is not responsible for your use of such a 3rd-party provider, and any liability resulting from such use will be your responsibility.
+ The Custom Extensions feature currently can’t be added to a site when using Git Integration & Wix CLI.
+ The name for your integration can't contain spaces or special characters.
+ Trying to import additional `.js` files from the relative path in your site's repo doesn't work.
+ You can only create the custom extension using the Wix Studio Code panel. You cannot create the extension manually using the Wix IDE.