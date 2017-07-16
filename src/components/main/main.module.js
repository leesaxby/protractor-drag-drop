import angular from 'angular';
import router from 'angular-ui-router';
import welcome from './welcome/welcome.component.js';

require('angular-drag-and-drop-lists');

export default angular.module('main', [router, 'dndLists'])
        .component('welcome', welcome)
        .config(function ($stateProvider) {
            $stateProvider
                .state('main', {
                    url: '/main',
                    component: 'welcome'
                })
        }).name;
