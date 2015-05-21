angular.module('starter.controllers', [])

.controller('AppCtrl', function() {

})

.controller('ContactoCtrl', function($scope , $ionicPopup,  Mensaje) {
  	$scope.formData = {i_correo_fijo : 'nvcarga@gmail.com'};

  	$scope.enviar = function(formData){
  		console.log(formData);

  		Mensaje.get(formData).$promise.then(function(data) {
            
                    $ionicPopup.alert({ title:    'Mensaje de Enviado',
                                        template: 'El mensaje fue enviado.'});

                    $scope.formData = {i_correo_fijo : 'diego.carciente@gmail.com'};

                }, function(error) {
                    // error hand
                    console.log(error);
                    $ionicPopup.alert({ title:    'Mensaje de Error',
                                        template: 'No se pudo enviar el mensaje.'});
                });
  	}
});
