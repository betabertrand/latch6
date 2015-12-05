angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
      
    .state('menu', {
      url: '/side-menu21',
      abstract:true,
      templateUrl: 'templates/menu.html'
    })
      
    
      
        
    .state('login', {
      url: '/login',
      templateUrl: 'templates/login.html',
      controller: 'loginCtrl'
    })
        
      
    
      
        
    .state('menu.welcome!', {
      url: '/splash',
      views: {
        'side-menu21': {
          templateUrl: 'templates/welcome!.html',
          controller: 'welcome!Ctrl'
        }
      }
    })
        
      
    
      
        
    .state('menu.home', {
      url: '/home',
      views: {
        'side-menu21': {
          templateUrl: 'templates/home.html',
          controller: 'homeCtrl'
        }
      }
    })
        
      
    
      
        
    .state('codeMunchers', {
      url: '/CM',
      templateUrl: 'templates/codeMunchers.html',
      controller: 'codeMunchersCtrl'
    })
        
      
    
      
        
    .state('codeMunchersLatched', {
      url: '/cmlatched',
      templateUrl: 'templates/codeMunchersLatched.html',
      controller: 'codeMunchersLatchedCtrl'
    })
        
      
    
      
        
    .state('latchOn', {
      url: '/latchup',
      templateUrl: 'templates/latchOn.html',
      controller: 'latchOnCtrl'
    })
        
      
    
      
        
    .state('pending', {
      url: '/pend',
      templateUrl: 'templates/pending.html',
      controller: 'pendingCtrl'
    })
        
      
    
      
        
    .state('menu.latches', {
      url: '/latches',
      views: {
        'side-menu21': {
          templateUrl: 'templates/latches.html',
          controller: 'latchesCtrl'
        }
      }
    })
        
      
    
      
        
    .state('unlatched', {
      url: '/unlatched',
      templateUrl: 'templates/unlatched.html',
      controller: 'unlatchedCtrl'
    })
        
      
    ;

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/side-menu21');

});