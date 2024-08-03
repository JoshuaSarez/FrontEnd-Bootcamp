const usuarios = [
    {
        "usuario": "Juan1234",
        "email": "juan2024@gmail.com",
        "password": "123456",
        "tipousuario": "ADMIN"
    },
    {
        "usuario": "Jesus001",
        "email": "elyisus@gmail.com",
        "password": "123456",
        "tipousuario": "ADMIN"
    },
    {
        "usuario": "DavidDev",
        "email": "ddev@gmail.com",
        "password": "123456",
        "tipousuario": "USER"
    }
]

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

var nombreUsuario = document.getElementById('nombre');
//innerHTML reemplaza el contenido de un elemento HTML
nombreUsuario.innerHTML = localStorage.getItem('usuario');

var rolUsuario = document.getElementById('rol');
rolUsuario.innerHTML = localStorage.getItem('tipousuario');