System.config({
  map: {
    app: "dist/app"
},
  packages: {
    app: {
      main: 'main.js',
      format: 'register',
      defaultExtension: 'js'
    }
  }
});
