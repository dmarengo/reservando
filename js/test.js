var expect = chai.expect;

describe('Testeá la función reservarHorario(horario)', function(){
    it('El horario correspondiente se elimina del arreglo', function(){
        var cantHorariosRestaurant = listadoDeRestaurantes[2].horarios.lenght;
        listadoDeRestaurantes[2].reservarHorario('12:00');
        expect(listadoDeRestaurantes[2].horarios.lenght).to.equal(cantHorariosRestaurant-1);
    })
    it('Se mantiene la cantidad de elementos del arreglo', function(){
        var cantHorariosRestaurant = listadoDeRestaurantes[0].horarios.lenght
        listadoDeRestaurantes.reservarHorario("19:00");
        expect(listadoDeRestaurantes[0].horarios.lenght).to.equal([cantHorariosRestaurant]);
    })
    it('el arreglo se mantenga igual, exactamente con los mismos elementos',function(){
        var horariosRestaurant = listadoDeRestaurantes[0].horarios.lenght;
        listadoDeRestaurantes[0].reservarHorario("19:00");
        expect(listadoDeRestaurantes[0].horarios.lenght).to.equal([horariosRestaurant]);
    })
})

describe('Testeá la función obtenerPuntuación()',function(){
    it('Dado un restaurant con determinadas calificaciones, la puntuación (que es el promedio de ellas) se calcula correctamente.',function(){
        var miRestaurant = new Restaurant ('1, "TAO Uptown", "Asiática", "Nueva York", ["13:00", "15:30", "18:00"], "../img/asiatica1.jpg", [6, 7, 9, 10, 5]');
        expect(miRestaurant.obtenerPuntuacion()).to.equal(7,4);
    })
    it('Dado un restaurant que no tiene ninguna calificación, la puntuación es igual a 0',function(){
        var miRestaurant = new Restaurant ('1, "TAO Uptown", "Asiática", "Nueva York", ["13:00", "15:30", "18:00"], "../img/asiatica1.jpg", []');
        expect(miRestaurant.obtenerPuntuacion()).to.equal(0);
    })
})

describe('Testea la funcion calificar()',function(){
    it('Agregar una nueva calificacion al restaurant', function(){
        var miRestaurant = new Restaurant ('1, "TAO Uptown", "Asiática", "Nueva York", ["13:00", "15:30", "18:00"], "../img/asiatica1.jpg", [6, 7, 9, 10, 5]');
        var totalCalificaciones = miRestaurant.calificaciones.lenght;
        miRestaurant.calificar(5); 
        expect(miRestaurant.calificaciones.lenght).to.eql(totalCalificaciones + 1);
    })
    it('Validar que se agrego la calificacion al restaurant', function(){
        var miRestaurant = new Restaurant ('1, "TAO Uptown", "Asiática", "Nueva York", ["13:00", "15:30", "18:00"], "../img/asiatica1.jpg", [6, 7, 9, 10, 5]');
        miRestaurant.calificar(5); 
        expect(totalCalificaciones).to.equal(5);
    })
})

