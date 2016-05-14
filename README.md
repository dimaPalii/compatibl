# Colors
Used [angular-seed](https://github.com/angular/angular-seed) — the seed for AngularJS apps
This project is an application skeleton for a typical [AngularJS](http://angularjs.org/) web app.

## Getting Started
follow instructions from https://github.com/angular/angular-seed

or

Shortly:
```
npm install
```
```
grunt minify
```
```
npm start
```

Browse to the app at `http://localhost:8000/app/#/main`.

Click header menu to change order in table

### Directory Layout


```
app/                             --> all of the source files for the application
  assets/
      data/                      --> contain data.json used in app
      css/                       --> All styles  LESS files
      js/                        --> JavaScript files written for  app 
  components/                    --> all app specific modules
    directives/                  --> custom component
        ssTableDirective/        --> custom directive
    version/                     --> version related components
  view1/                         --> the view1 view template and logic
    view1.html                   --> the partial template
    view1.js                     --> the controller logic
    view1_test.js                --> tests of the controller
  main/                          --> the main view template and logic
    mainView.html                --> the partial template
    mainController.js            --> the controller logic
    mainService.js               --> data service for mainController
  app.js                         --> main application module
  app.css                        --> default stylesheet
  vendors.js                     --> vendors js
  vendors.css                    --> vendors stylesheet
  index.html                     --> app layout file (the main html template file of the app)
```