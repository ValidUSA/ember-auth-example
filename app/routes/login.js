import Ember from 'ember';

export default Ember.Route.extend({
  session: Ember.inject.service(),
  actions: {
    facebookLogin: function() {
      this.get('session').authenticate('authenticator:torii', 'facebook-oauth2').then(() => {
        this.transitionTo("index");
      });
      return;
    },
    googleLogin: function() {
      this.get('session').authenticate('authenticator:torii', 'google-oauth2').then(() => {
        this.transitionTo("index");
      });
      return;
    },
    githubLogin: function() {
      this.get('session').authenticate('authenticator:torii', 'github-oauth2').then(() => {
        this.transitionTo("index");
      });
      return;
    }
  }
});
