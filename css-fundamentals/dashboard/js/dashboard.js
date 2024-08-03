var variable = 1;
console.log('VARIABLE NUMÉRICA: ' + (variable + 1))
variable = 'Hola';
console.log(variable + ' mundo!');
variable = true;
console.log('VARIABLE BOOLEANA: '+ variable);

var variableArregloUnidimensional = [1, '2', 3, 4, true];
console.log('Arreglo:');
console.log(variableArregloUnidimensional);

var arregloJson = [
    {
        'nombre': 'VmtDev',
        'apellido': 'Bootcamp FullStack',
        'valoracion': 10,
        'infoAdicional': {
            'duracion': '360h',
            'nmaterias': 14
        },
        'docentes': [
            {
                'nombre': 'José Morán',
                'materia': 'c sharp',
            },
            {
                'nombre': 'Arturo Delgado',
                'materia': '.net core',
            },
            {
                'nombre': 'Maria Isabel Galarza',
                'materia': 'Propedeutico'
            }
        ]
    },
    {
        'nombre': 'VmtDev',
        'apellido': 'Bootcamp DataScience',
        'valoracion': 10,
        'infoAdicional': {},
        'docente': []
    }
];

console.log(arregloJson);
const varConstante = 'hola';

console.log(varConstante);


function obtenerTextoBuscar(){
    let valBuscar = document.getElementById('buscar');
    window.alert(valBuscar.value);
}

function saludo(){
    
}