import Ember from "ember";
import { CanMixin } from "ember-can";

export default Ember.Route.extend(CanMixin, {
  session: Ember.inject.service(),
  beforeModel() {
    if (!this.can("view google")) {
      alert("You are not logged in with Google.");
      this.transitionTo("index");
    }
  }
});
