(function (global) {
  System.config({
    transpiler: "plugin-babel",
    babelOptions: {
      es2015: true,
      react: true,
    },
    meta: {
      "*.css": { loader: "css" },
    },
    paths: {
      // paths serve as alias
      "npm:": "node_modules/",
    },
    // map tells the System loader where to look for things
    map: {
      css: "npm:systemjs-plugin-css/css.js",
      react: "npm:react/umd/react.production.min.js",
      "react-dom": "npm:react-dom/umd/react-dom.production.min.js",
      "@grapecity/activereports/pdfexport":
        "npm:@grapecity/activereports/dist/ar-js-pdf.js",
      "@grapecity/activereports/tabulardataexport":
        "npm:@grapecity/activereports/dist/ar-js-tabular-data.js",

      "@grapecity/activereports/htmlexport":
        "npm:@grapecity/activereports/dist/ar-js-html.js",

      "@grapecity/activereports/xlsxexport":
        "npm:@grapecity/activereports/dist/ar-js-xlsx.js",

      "@grapecity/activereports-react":
        "npm:@grapecity/activereports-react/lib/index.js",
      "@grapecity/activereports/reportviewer":
        "npm:@grapecity/activereports/dist/ar-js-viewer.js",
      "@grapecity/activereports/viewer":
        "npm:@grapecity/activereports/dist/ar-js-viewer.js",
      "@grapecity/activereports/reportdesigner":
        "npm:@grapecity/activereports/dist/ar-js-designer.js",
      "@grapecity/activereports/core":
        "npm:@grapecity/activereports/dist/ar-js-core.js",
      "@grapecity/activereports/styles": "npm:@grapecity/activereports/styles",
      "@grapecity/activereports-localization-ja":
        "npm:@grapecity/activereports-localization/dist/designer/ja-locale.js",
      "@grapecity/activereports-localization-zh":
        "npm:@grapecity/activereports-localization/dist/designer/zh-locale.js",

      "@grapecity/ar-js-pagereport":
        "npm:@grapecity/activereports/dist/ar-js-core.js",

      "plugin-babel": "npm:systemjs-plugin-babel/plugin-babel.js",
      "systemjs-babel-build":
        "npm:systemjs-plugin-babel/systemjs-babel-browser.js",
    },
    // packages tells the System loader how to load when no filename and/or no extension
    packages: {
      src: {
        defaultExtension: "jsx",
      },
      node_modules: {
        defaultExtension: "js",
      },
    },
  });
})(this);
