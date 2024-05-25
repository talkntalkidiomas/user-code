# CSS Styling

Styling with CSS allows you to completely customize the elements on your site. With CSS, you can change the colors, fonts, and sizes of different elements. You can also animate your elements and add responsive design.

There are 2 ways to apply CSS styling to your site:
1. To all elements by class, on all site pages. CSS editing is available for [these supported classes](https://www.wix.com/velo/reference/$w/styling-elements-with-css#$w_styling-elements-with-css_available-classes).
2. To only specific elements using a custom class. You can create custom classes using the CSS Classes panel, or with code using the [CustomClassList API](https://www.wix.com/velo/reference/$w/customclasslist).

## Getting started

Add a `global.css` file to your `src/styles` folder. Then, add a CSS rule to apply using one of the options below.

#### Add a CSS rule to an available class of elements
1. Check the [list of available classes](https://www.wix.com/velo/reference/$w/styling-elements-with-css#$w_styling-elements-with-css_available-classes). 
2. Use the class to add code that applies the CSS. For example, to change the background color of all buttons to red:
```js 
  .button {
    background-color: red;
  }
```

#### Add a CSS rule to a custom class you create
1. In the Wix Studio editor, select any element on your site.
2. Open the CSS Classes panel and add a custom class:
<img src="https://github-production-user-asset-6210df.s3.amazonaws.com/95754543/256530142-6cdafaf7-6cbb-45ad-aaef-59ca1f1344da.png" style="max-width:30vw" />

3. Add the CSS rule to your `global.css` file. For example, to change the cursor on a button to crosshair:
```js
  .myCustomClass {
    cursor: crosshair;
  }
```

## Additional resources
- For more information about CSS styling options, refer to the [MDN CSS reference docs](https://developer.mozilla.org/en-US/docs/Learn/CSS).
- To add custom classes with code, see the [CustomClassList API](https://www.wix.com/velo/reference/$w/customclasslist).
