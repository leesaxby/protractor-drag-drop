import angular from 'angular';
import router from 'angular-ui-router';
import welcome from './welcome/welcome.component.js';

export default angular.module('main', [router])
        .component('welcome', welcome)
        .config(function ($stateProvider) {
            $stateProvider
                .state('main', {
                    url: '/main',
                    component: 'welcome'
                })
        }).name;
        