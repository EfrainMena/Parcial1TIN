(function(){
    //variables
    var lista = document.getElementById("lista"),
        tareaInput = document.getElementById("tareaInput"),
        btnNuevaTarea = document.getElementById("btn-agregar");

    // Funciones
    var agregarTarea = function(){
        event.preventDefault();
        var tarea = tareaInput.value;
        var nuevaTarea = document.createElement("li");
        var enlace = document.createElement("a");
        var contenido = document.createTextNode(tarea);
        tareaInput.className = "form-control is-valid  success_bg";
        tareaInput.setAttribute("placeholder", "Agregada correctamente");

        if (tarea === "") {
            tareaInput.setAttribute("placeholder", "Agrega una tarea válida");
            tareaInput.className = "form-control is-invalid  error_bg";
            return false;
        }

        //agregamos el contenido al enlace
        enlace.appendChild(contenido);
        // le establecemos un atributo href
        enlace.setAttribute("href", "#");
        enlace.setAttribute("class", "list-group-item list-group-item-action");
        //agregamos el enlace (a) a la nueva terea (li)
        nuevaTarea.appendChild(enlace);
        //agregamos la nueva tarea a la lista
        lista.appendChild(nuevaTarea);
        //limpiar input
        tareaInput.value = "";

        //ciclo para nuevos elementos
        for (var i = 0; i < lista.children.length; i++) {
            lista.children[i].addEventListener("click", function(){
                this.parentNode.removeChild(this);
            });
            
        }

    };
    var comprobarInput = function(){
        tareaInput.className = "form-control";
        tareaInput.setAttribute("placeholder", "Agrega tu tarea"); 
    };
    var eliminarTarea = function(){
        this.parentNode.removeChild(this);
    };

    //eventos
    // agregar tarea
    btnNuevaTarea.addEventListener("click", agregarTarea);

    //comprobar input
    tareaInput.addEventListener("click", comprobarInput);

    //borrando elementos de la lista
    for (var i = 0; i < lista.children.length; i++) {
        lista.children[i].addEventListener("click", eliminarTarea);
        
    }

}());