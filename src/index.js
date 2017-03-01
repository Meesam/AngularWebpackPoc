import $ from 'jquery';
import 'bootstrap-loader';
import angular from 'angular';
import IndexController from './indexController';


export default angular.module('es6App',[])
  .controller('IndexController', IndexController)
