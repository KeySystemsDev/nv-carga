angular.module('starter.services', [])

.factory('Lista', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var lista = [{
    id: 0,
    name: 'Servicios',
    lastText: 'You on your way?',
    image: 'https://pbs.twimg.com/profile_images/514549811765211136/9SgAuHeY.png'
  }, {
    id: 1,
    name: 'Quiénes Somos',
    lastText: 'Hey, it\'s me',
    image: 'https://avatars3.githubusercontent.com/u/11214?v=3&s=460'
  },{
    id: 2,
    name: 'Envios',
    lastText: 'I should buy a boat',
    image: 'https://pbs.twimg.com/profile_images/479090794058379264/84TKj_qa.jpeg'
  }, {
    id: 3,
    name: 'Importación de Vehículos',
    lastText: 'Look at my mukluks!',
    image: 'https://pbs.twimg.com/profile_images/479090794058379264/84TKj_qa.jpeg'
  }, {
    id: 4,
    name: 'Pagos',
    lastText: 'Look at my mukluks!',
    image: 'https://pbs.twimg.com/profile_images/578237281384841216/R3ae1n61.png'
  }, {
    id: 5,
    name: 'Como Comprar',
    lastText: 'Look at my mukluks!',
    image: 'https://pbs.twimg.com/profile_images/578237281384841216/R3ae1n61.png'
  }, {
    id: 6,
    name: 'Contacto',
    lastText: 'This is wicked good ice cream.',
    image: 'https://pbs.twimg.com/profile_images/578237281384841216/R3ae1n61.png'
  }];

  return {
    all: function() {
      return lista;
    },
    get: function(id_lista) {
      for (var i = 0; i < lista.length; i++) {
        if (lista[i].id === parseInt(id_lista)) {
          return lista[i];
        }
      }
      return null;
    }
  };
});
