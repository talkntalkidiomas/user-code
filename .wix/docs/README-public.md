# The Public Folder

The `src/public` folder contains the public code files for your site. You can import code from these files into any other file on your site.

## Import code from other files

To import functions from other files to use in your public code files, use the following syntax. Trying to import from the relative path in your site's files doesn't work.

For other public code files:

```javascript
import {functionName} from 'public/myFileName';
```

For backend code files:

```javascript
import {functionName} from 'backend/myFileName.web';
```

Learn more about the [Wix IDE](https://support.wix.com/en/article/about-the-wix-ide).