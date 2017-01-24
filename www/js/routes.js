angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

      .state('tabsController.doaO', {
    url: '/doacao',
    views: {
      'tab1': {
        templateUrl: 'templates/doaO.html',
        controller: 'doaOCtrl'
      }
    }
  })

  .state('tabsController.desaparecidos', {
    url: '/desaparecido',
    views: {
      'tab2': {
        templateUrl: 'templates/desaparecidos.html',
        controller: 'desaparecidosCtrl'
      }
    }
  })

  .state('tabsController.encontrados', {
    url: '/encontrados',
    views: {
      'tab3': {
        templateUrl: 'templates/encontrados.html',
        controller: 'encontradosCtrl'
      }
    }
  })

  .state('tabsController.cadastroDesaparecido', {
    url: '/formAnimal',
    views: {
      'tab2': {
        templateUrl: 'templates/cadastroDesaparecido.html',
        controller: 'cadastroDesaparecidoCtrl'
      }
    }
  })

  .state('tabsController', {
    url: '/page1',
    templateUrl: 'templates/tabsController.html',
    abstract:true
  })

$urlRouterProvider.otherwise('/page1/doacao')

  

});