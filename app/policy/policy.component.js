function PolicyController() {

}

angular.module('FqApp').component('chillPolicy', {
  templateUrl: 'app/policy/policy.component.html',
  controller: PolicyController,
  bindings: {
    hero: '='
  }
});