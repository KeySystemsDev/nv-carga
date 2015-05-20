angular.module('starter.services', [])

.factory("Mensaje", function ($resource) {
    return $resource("http://keypanelservices.com/mail/mail.php", //la url donde queremos consumir
        {}, //aquí podemos pasar variables que queramos pasar a la consulta
        //a la función get le decimos el método, y, si es un array lo que devuelve
        //ponemos isArray en true
        { get: { method: "GET", isArray: false }
    })
});
