const toastAlertaInicioSesion = document.getElementById('liveToast')
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

function eventoForm(){
    let email = document.getElementById('email');
    let password = document.getElementById('password');
    let usuarioEmail = usuarios.find(x => x.email == email.value);
    
    if(usuarioEmail == undefined){
        mostrarAlerta();
    }else{
        if(usuarioEmail['password'] == password.value){
            localStorage.setItem('usuario', usuarioEmail.usuario);
            localStorage.setItem('email', usuarioEmail.email);
            localStorage.setItem('tipousuario', usuarioEmail.tipousuario);
            window.location.href ='../../js-list-table/page/lis-table.html';
            
        }else{
           mostrarAlerta(); 
        }
    }

    // if(email.value != "" && password.value != ""){
        //     alert("Su email es: " + email.value + " Su contraseña es: " + password.value);
        
        // }else{
            //     alert("Los campos no pueden estar vacio.");
            // }
            
    }
        
function mostrarAlerta(){
    const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastAlertaInicioSesion)
    toastBootstrap.show()
}
        