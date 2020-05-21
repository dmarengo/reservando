var expect = chai.expect;

describe('Testeá la función reservarHorario(horario)', function(){
    it('El horario correspondiente se elimina del arreglo', function(){
        var cantHorariosRestaurant = listadoDeRestaurantes[0].horarios.length;
        listadoDeRestaurantes[0].reservarHorario('13:00');
        expect(listadoDeRestaurantes[0].horarios.length).to.equal(cantHorariosRestaurant-1); 
    }) 
    it('Se mantiene la cantidad de elementos del arreglo', function(){
        var cantHorariosRestaurant = listadoDeRestaurantes[0].horarios.length
        listadoDeRestaurantes[0].reservarHorario('19:00');
        expect(listadoDeRestaurantes[0].horarios.length).to.equal(cantHorariosRestaurant);
    })
    it('el arreglo se mantenga igual, exactamente con los mismos elementos',function(){
        var horariosRestaurant = listadoDeRestaurantes[0].horarios.length;
        listadoDeRestaurantes[0].reservarHorario("19:00");
        expect(listadoDeRestaurantes[0].horarios.length).to.equal(horariosRestaurant);
    })
})

describe('Testeá la función obtenerPuntuación()',function(){
    it('Dado un restaurant con determinadas calificaciones, la puntuación (que es el promedio de ellas) se calcula correctamente.',function(){
        var miRestaurant = listadoDeRestaurantes[2];
        expect(miRestaurant.obtenerPuntuacion()).to.equal(7,4);
    })
    it('Dado un restaurant que no tiene ninguna calificación, la puntuación es igual a 0',function(){
        var miRestaurant = listadoDeRestaurantes[2];
        miRestaurant.calificaciones = [0];
        expect(miRestaurant.obtenerPuntuacion()).to.equal(0);
    })
})

describe('Testea la funcion calificar()',function(){
    it('Agregar una nueva calificacion al restaurant', function(){
        var miRestaurant = listadoDeRestaurantes[2];
        var totalCalificaciones = miRestaurant.calificaciones.length;
        miRestaurant.calificar(5); 
        expect(miRestaurant.calificaciones.length).to.eql(totalCalificaciones + 1);
    })
    it('Validar que se agrego la calificacion al restaurant', function(){
        var miRestaurant = listadoDeRestaurantes[2];
        miRestaurant.calificar(5); 
        var totalCalificaciones = miRestaurant.calificaciones.pop();
        expect(totalCalificaciones).to.equal(5);
    })
})

describe('Testeá la función obtenerRestaurantes()', function(){
    it('Dado un id, busca el restaurante', function(){
        var listaRestaurantes = [
            new Restaurant(1, "TAO Uptown", "Asiática", "Nueva York", ["13:00", "15:30", "18:00"], "../img/asiatica1.jpg", [6, 7, 9, 10, 5]),
            new Restaurant(2, "Mandarín Kitchen", "Asiática", "Londres", ["15:00", "14:30", "12:30"], "../img/asiatica2.jpg", [7, 7, 3, 9, 7]),
            new Restaurant(3, "Burgermeister", "Hamburguesa", "Berlín", ["11:30", "12:00", "22:30"], "../img/hamburguesa4.jpg", [5, 8, 4, 9, 9]),
            new Restaurant(4, "Bleecker Street Pizza", "Pizza", "Nueva York", ["12:00", "15:00", "17:30"], "../img/pizza2.jpg", [8, 9, 9, 4, 6, 7]),
            new Restaurant(5, "Jolly", "Asiática", "Berlín", ["12:00", "13:30", "16:00"], "../img/asiatica3.jpg", [8, 3, 9, 5, 6, 7]),
            new Restaurant(6, "Green salad", "Ensalada", "Berlín", ["17:00", "19:00", "20:30"], "../img/ensalada2.jpg", [8, 3, 2, 1, 8, 7]),
            new Restaurant(7, "Osteria Da Fortunata", "Pasta", "Roma", ["13:00", "15:30", "18:00"], "../img/pasta2.jpg", [7, 7, 7, 7, 3, 9]),
            new Restaurant(8, "Cafe Francoeur", "Desayuno", "París", ["14:30", "15:30", "19:00"], "../img/desayuno1.jpg", [4, 7, 9, 8, 10]),
            new Restaurant(9, "La Trottinette", "Pasta", "París", ["16:00", "18:00", "21:30"], "../img/pasta5.jpg", [8, 8, 7, 7, 7, 7]),
            new Restaurant(10, "New London Cafe", "Desayuno", "Londres", ["12:00", "13:00", "14:30"], "../img/desayuno3.jpg", [9, 4, 6, 5, 6]),
        ];
        var restauranteBuscado = new Restaurant(2, "Mandarín Kitchen", "Asiática", "Londres", ["15:00", "14:30", "12:30"], "../img/asiatica2.jpg", [7, 7, 3, 9, 7]);
        var listaDeRestaurants = new Listado(listaRestaurantes);
        expect(listaDeRestaurants.buscarRestaurante(2)).to.eql(restauranteBuscado);
    })
    it('Devuelve "No se encuentra ningun restaurant", porque no le pasamos ningun parametro', function(){
        var listaRestaurantes = [
            new Restaurant(10, "TAO Uptown", "Asiática", "Nueva York", ["13:00", "15:30", "18:00"], "../img/asiatica1.jpg", [6, 7, 9, 10, 5]),
            new Restaurant(9, "Mandarín Kitchen", "Asiática", "Londres", ["15:00", "14:30", "12:30"], "../img/asiatica2.jpg", [7, 7, 3, 9, 7]),
            new Restaurant(8, "Burgermeister", "Hamburguesa", "Berlín", ["11:30", "12:00", "22:30"], "../img/hamburguesa4.jpg", [5, 8, 4, 9, 9]),
            new Restaurant(7, "Bleecker Street Pizza", "Pizza", "Nueva York", ["12:00", "15:00", "17:30"], "../img/pizza2.jpg", [8, 9, 9, 4, 6, 7]),
            new Restaurant(6, "Jolly", "Asiática", "Berlín", ["12:00", "13:30", "16:00"], "../img/asiatica3.jpg", [8, 3, 9, 5, 6, 7]),
            new Restaurant(5, "Green salad", "Ensalada", "Berlín", ["17:00", "19:00", "20:30"], "../img/ensalada2.jpg", [8, 3, 2, 1, 8, 7]),
            new Restaurant(4, "Osteria Da Fortunata", "Pasta", "Roma", ["13:00", "15:30", "18:00"], "../img/pasta2.jpg", [7, 7, 7, 7, 3, 9]),
            new Restaurant(3, "Cafe Francoeur", "Desayuno", "París", ["14:30", "15:30", "19:00"], "../img/desayuno1.jpg", [4, 7, 9, 8, 10]),
            new Restaurant(2, "La Trottinette", "Pasta", "París", ["16:00", "18:00", "21:30"], "../img/pasta5.jpg", [8, 8, 7, 7, 7, 7]),
            new Restaurant(1, "New London Cafe", "Desayuno", "Londres", ["12:00", "13:00", "14:30"], "../img/desayuno3.jpg", [9, 4, 6, 5, 6])
        ];
        var listaDeRestaurantes = new Listado(listaRestaurantes);
        expect(listaDeRestaurantes.buscarRestaurante()).to.eql("No se ha encontrado ningún restaurant");
    })
})

