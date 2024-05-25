# The Backend Folder

The `src/backend` folder contains the backend code files for your site. Backend code files for Wix sites are written in JavaScript and run using the Node.js runtime environment.

## File types

Wix supports specialized backend files that perform different functions. Add the following files to the backend folder to include them in your site:
+ **Web Method files:**  
  These are files that allow you to expose functions in your site's backend that you can run in your frontend code. These files require a `.web.js` file extension. Learn more about [web methods](https://support.wix.com/en/article/about-web-methods).

+ **data.js**.  
  A file for [adding data hooks](https://support.wix.com/en/article/velo-using-data-hooks) to your site's collections.

+ **routers.js**  
  A file for implementing [routing and sitemap](https://support.wix.com/en/article/velo-about-routers#routing-code) functionality for your site.

+ **events.js**  
  A file for implementing your site's [backend event handlers](https://support.wix.com/en/article/velo-backend-events). 

+ **http-functions.js**  
  A file for implementing [HTTP endpoints](https://www.wix.com/velo/reference/wix-http-functions/introduction) that are exposed on your site.

+ **jobs.config**  
  A file for [scheduling recurring jobs](https://support.wix.com/en/article/velo-scheduling-recurring-jobs). Jobs consist of backend code that's run at regular intervals.
  
+ **General backend files**  
  JavaScript code files. You can import code from these files into any other backend file on your site. These files require a `.js` file extension.

## Import code from other files

To import functions from other code files to use in your backend code, use the following syntax. Trying to import from the relative path in your site's files doesn't work.

For public code files:

```javascript
import {functionName} from 'public/myFileName';
```

For other backend code files:

```javascript
import {functionName} from 'backend/myFileName';
```

## SPI folder
If you add [custom extensions](https://support.wix.com/en/article/velo-custom-app-extensions-using-spis) to your site, the backend folder contains a folder called `__spi__`. This folder contains subfolders with the code files for each custom extension. 

Learn more about the [`__spi__`](/.wix/docs/README-SPI.md) folder and about [implementing custom extensions](https://support.wix.com/en/article/velo-custom-app-extensions-using-spis#implementing-a-custom-extension-with-a-velo-spi).

## permissions.json

>**Important:**
>You only need to use this file if you export backend functions from `.jsw` files. We recommend using web methods and exporting backend functions from `.web.js` files instead. Learn more about [web methods](https://support.wix.com/en/article/about-web-methods).


The backend folder also contains the `permissions.json` file. This file defines [permissions](https://support.wix.com/en/article/velo-about-web-module-permissions) for the functions in your web module files. The file contains a key, `"web-methods"` which contains an object. Each key in that object corresponds to a web module file in your backend folder. Name these keys with the following syntax: `"backend/{path to file}/myFile.jsw"`. The value for each file name key is an object that contains keys named after the functions in that file. The values for each function name key are objects containing keys for each permission level. 

For example:
```json
{
  "web-methods": {
    "backend/myFileName.jsw": {
      "myFunction": {
        "siteOwner" : {
          "invoke" : // Boolean
        },
        "siteMember" : {
          "invoke" : // Boolean
        },
        "anonymous" : {
          "invoke" : // Boolean
        }  
      }
    }
  }
}
```

Set the permissions for each function using the following values:
* **Owner-only access**: 
  * `siteOwner.invoke`: `true`
  * `siteMember.invoke`: `false`
  * `anonymous.invoke` : `false`
* **Site member access**: 
  * `siteOwner.invoke`: `true`
  * `siteMember.invoke`: `true`
  * `anonymous.invoke` : `false`
* **Anyone can access**:
  * `anonymous.invoke`: `true`
  * `siteMember.invoke` : `true`
  * `anonymous.invoke`: `true`


The `"web-methods"` object must also contain a `"*"` key. The value for this key defines the default permissions that are applied to any function whose permissions you don't set manually.

Here is a sample `permissions.json` file for a site with a backend file called `helperFunctions.jsw`. The file's functions are called `calculate`, `fetchData`, and `syncWithServer`. In this case anyone can call `calculate`, site members can call `syncWithServer`, and only site owners can call `fetchData`.

```json
{
  "web-methods": {
    "*": {
      "*": {
        "siteOwner": {
          "invoke": true
        },
        "siteMember": {
          "invoke": true
        },
        "anonymous": {
          "invoke": true
        }
      }
    },
    "backend/helperFunctions.jsw": {
      "calculate": {
        "siteOwner": {
          "invoke": true
        },
        "siteMember": {
          "invoke": true
        },
        "anonymous": {
          "invoke": true
        }
      },
      "fetchData": {
        "siteOwner": {
          "invoke": true
        },
        "siteMember": {
          "invoke": false
        },
        "anonymous": {
          "invoke": false
        }
      },
      "syncWithServer": {
        "siteOwner": {
          "invoke": true
        },
        "siteMember": {
          "invoke": true
        },
        "anonymous": {
          "invoke": false
        }
      }
    }
  }
}
```

Learn more about the [Wix IDE](https://support.wix.com/en/article/about-the-wix-ide).