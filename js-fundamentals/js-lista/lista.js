var lutilesEscolares = ['lapiz', 'cuaderno', 'plumas', 'borrador'];
for(i=0; i <  lutilesEscolares.length; i++){
    console.log(lutilesEscolares[i]);
}

const list = document.getElementById('miLista');

function generar_lista(){
    for(i=0; i < lutilesEscolares.length; i++){
        const li = document.createElement('li');
        li.textContent = lutilesEscolares[i];
        list.append(li);
    }
}