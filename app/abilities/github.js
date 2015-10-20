import Ember from "ember";
import { Ability } from "ember-can";

export default Ability.extend({
  session: Ember.inject.service(),
  canView: Ember.computed("session", function () {
    var obj = this.get("session.store").restore();
    return obj.authenticated && obj.authenticated.provider === "github-oauth2";
  })
});
