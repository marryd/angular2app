// map tells the System loader where to look for things
  var map = {
    'app':                        'dist/app',
    'rxjs':                       'node_modules/rxjs',
    'angular2-in-memory-web-api': 'node_modules/angular2-in-memory-web-api',
    '@angular':                   'node_modules/@angular'
  };

  // packages tells the System loader how to load when no filename and/or no extension
  var packages = {
    'app':                        { main: 'main.js',  defaultExtension: 'js' },
    'rxjs':                       { defaultExtension: 'js' },
    'angular2-in-memory-web-api': { defaultExtension: 'js' }
  };

  var packageNames = [
    '@angular/common',
    '@angular/compiler',
    '@angular/core',
    '@angular/http',
    '@angular/platform-browser',
    '@angular/platform-browser-dynamic',
    '@angular/router',
    '@angular/router-deprecated',
    '@angular/testing',
    '@angular/upgrade',
  ];

  // add package entries for angular packages in the form '@angular/common': { main: 'index.js', defaultExtension: 'js' }
  packageNames.forEach(function(pkgName) {
    packages[pkgName] = { main: 'index.js', defaultExtension: 'js' };
  });

  var config = {
    map: map,
    packages: packages
  }

System.config(config);

//
// System.config({
//   map: {
//     app: "dist/app",
//     "rxjs": "dist/lib/rxjs",
//     "angular2-in-memory-web-api": "dist/lib/angular2-in-memory-web-api",
//     "@angular": "dist/lib/@angular",
//     "reflect-metadata": "dist/lib/Reflect.js",
//     "crypto": "dist/lib/crypto-js/crypto-js.js"
// },
//   packages: {
//     app: {
//       main: 'main.js',
//       format: 'register',
//       defaultExtension: 'js'
//     },
//     rxjs: {defaultExtension: 'js'},
// "@angular": {defaultExtension: 'js'}
//   }
// });
