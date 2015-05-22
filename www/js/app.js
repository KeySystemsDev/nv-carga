// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'starter.services', 'uiGmapgoogle-maps', 'ngResource'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

  .state('app', {
    url: "/app",
    abstract: true,
    templateUrl: "templates/menu.html",
    controller: 'AppCtrl'
  })
  
    .state('app.lista', {
      url: "/lista",
      views: {
        'menuContent': {
          templateUrl: "templates/lista.html"
        }
      }
    })

  .state('app.servicio', {
    url: "/servicio",
    views: {
      'menuContent': {
        templateUrl: "templates/servicio.html",
      }
    }
  })

  .state('app.quienessomos', {
    url: "/quienes-somos",
    views: {
      'menuContent': {
        templateUrl: "templates/quienes-somos.html",
      }
    }
  })

  .state('app.envios', {
    url: "/envios",
    views: {
      'menuContent': {
        templateUrl: "templates/envios.html",
      }
    }
  })

  .state('app.vehiculos', {
    url: "/vehiculos",
    views: {
      'menuContent': {
        templateUrl: "templates/vehiculos.html",
      }
    }
  })

  .state('app.pagos', {
    url: "/pagos",
    views: {
      'menuContent': {
        templateUrl: "templates/pagos.html",
      }
    }
  })

  .state('app.comprar', {
    url: "/comprar",
    views: {
      'menuContent': {
        templateUrl: "templates/comprar.html",
      }
    }
  })

  .state('app.contacto', {
    url: "/contacto",
    views: {
      'menuContent': {
        templateUrl: "templates/contacto.html",
         controller: 'ContactoCtrl'
      }
    }
  });
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/lista');
})

.directive('browseTo', function ($ionicGesture) {
 return {
  restrict: 'A',
  link: function ($scope, $element, $attrs) {
   var handleTap = function (e) {
    // todo: capture Google Analytics here
    var inAppBrowser = window.open(encodeURI($attrs.browseTo), '_system');
   };
   var tapGesture = $ionicGesture.on('tap', handleTap, $element);
   $scope.$on('$destroy', function () {
    // Clean up - unbind drag gesture handler
    $ionicGesture.off(tapGesture, 'tap', handleTap);
   });
  }
 }
});
