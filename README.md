Reticulating Splines
====================

A fun addition to your loading screen, based on The Sims.

![example](example.png)

## Installing

#### Add script to your project:

```
    'reticulating-splines/dist/reticulating-splines.min.js'
```

#### Add dependency to your AngularJS module:

```javascript
    angular.module('myModule', ['reticulatingSplines'])
```

#### Use the directive to display messages on an interval:

```html
    <reticulating-splines
        theme="theme"
        interval="interval"
    </reticulating-splines>
```

Note: the attributes `theme` and `interval` are bound to the containing controller.

#### OR use the provided service to just get a random message:

```javascript
    .controller('MyController', function($scope, spline) {
        $scope.theme = 'sims';
        $scope.randomMessage = spline($scope.theme);
    })
```

## Available Themes

 * `'sims'` - A collection of messages from The Sims
 * `'web'` - A collection of web/management jargon (buzz words)

## Development

First you'll need [NodeJS](http://nodejs.org), and then you'll need to do an `npm install`.

```
    gulp
```

This will watch for changes and build the minified script.
