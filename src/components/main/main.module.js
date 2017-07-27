import angular from 'angular';
import router from 'angular-ui-router';
import dnd from './dnd/dnd.component.js';

require('angular-drag-and-drop-lists');

export default angular.module('main', [router, 'dndLists'])
        .component('dnd', dnd)
        .config(function ($stateProvider) {
            $stateProvider
                .state('main', {
                    url: '/main',
                    component: 'dnd'
                })
        }).name;
