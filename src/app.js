import angular from 'angular';
import router from 'angular-ui-router';
import components from './components/components.module.js';

angular.module('app', [router, components])
       .config(function ($locationProvider) {
              $locationProvider.hashPrefix('');
        });

angular.bootstrap(document, ['app'])