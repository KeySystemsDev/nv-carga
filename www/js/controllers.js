angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {

})

.controller('PlaylistsCtrl', function($scope, Lista) {
  $scope.lista = Lista.all();
})

.controller('PlaylistCtrl', function($scope, $stateParams, Lista) {
  $scope.articulo = Lista.get($stateParams.id_lista);
});
