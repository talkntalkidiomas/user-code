# The Pages Folder

The `src/pages` folder contains code files for each of the pages on your site as well as the [masterpage.js](https://support.wix.com/en/article/velo-working-with-the-velo-sidebar#global-site) file. The code you add to these files runs when visitors open pages on your site.

## Page code files

When you add a page to your site in the Wix editor, a code file for that page is added to the pages folder. The name of the file has 2 components: the name of the page that you define when you create it, and an ID string for internal use. The sections are separated by a period. 

![image](https://user-images.githubusercontent.com/89579857/188305074-6e2ee718-13b8-435d-9c75-bcb126f35718.png)

When you [add a dynamic page](https://support.wix.com/en/article/content-manager-about-dynamic-pages#adding-dynamic-pages) to your site, 2 code files are added to the pages folder corresponding to the dynamic list and dynamic item pages.

When you open a page's code file, you see the same sample code that appears in the Wix Studio Code panel.  

![image](https://user-images.githubusercontent.com/89579857/184646571-1e14f166-2b86-4f21-bf57-83468251bca8.png)

When you delete a page in the editor, the page's corresponding code file is deleted as well.

> **Notes:** 
> * Do not rename code files for pages. Wix uses these file names to associate the files with the appropriate pages on your site. If you rename a file, your code is ignored and a new code file is created for the page.
> * You can't create new code files for pages in the Wix IDE. To add a file, create a new page for your site in the editor. The page's code file then appears in the Wix IDE.

## masterpage.js

The code in `masterpage.js` runs on all pages of your site. This file is created automatically. This file is a good place to add code for elements that appear on all of your site's pages or for general site functionality.


## Import code from other files

To import functions from other code files to use in your page code, use the following syntax. Trying to import from the relative path in your site's files doesn't work.

For public code files:

```javascript
import {functionName} from 'public/myFileName';
```

For backend code files:

```javascript
import {functionName} from 'backend/myFileName.web';
```

Learn more about the [Wix IDE](https://support.wix.com/en/article/about-the-wix-ide).