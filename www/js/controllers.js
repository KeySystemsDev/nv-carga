angular.module('starter.controllers', [])

.controller('AppCtrl', function() {

})

.controller('ContactoCtrl', function($scope , $ionicPopup,  Mensaje) {
  	$scope.formData = {i_correo_fijo : 'nvcarga@gmail.com'};

    $scope.map = {  center: 
                            {   latitude: 28.469389, 
                                longitude:  -81.277089
                            },
                        marker: 
                            {   latitude: 28.469389, 
                                longitude:  -81.277089
                            }, 
                        zoom: 15, 
                        id: 0,
                        options: {scrollwheel: false}
                    };

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
