import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('logout');
  this.route('login');
  this.route('facebook');
  this.route('google');
  this.route('github');
});

export default Router;
