// Se adiciona un "event listener" para cuando se cargue todo el contenido de la página:
document.addEventListener("DOMContentLoaded", () => { 

    // ================================
    // Funcionalidad para la lista de tareas
    // ================================
    
    // Se obtiene referencia a la lista dinámica:
    const taskList = document.getElementById("taskList");
    
    // Referencia al elemento seleccionado de la lista:
    let selectedTask = null;
    
    // Se adiciona event listener a cada botón:
    document.getElementById("addTask").addEventListener("click", () => {
        const textoTarea = prompt("Ingrese el nombre de la tarea");
        if (textoTarea) {
            const nuevaTarea = document.createElement("li");
            nuevaTarea.textContent = textoTarea;
            taskList.appendChild(nuevaTarea);
            selectedTaskHandler(nuevaTarea);
        }
    });
    
    document.getElementById("deleteTask").addEventListener("click", () => {
        if (selectedTask) {
            taskList.removeChild(selectedTask);
            selectedTask = null;
        } else {
            alert("No ha seleccionado ninguna tarea para eliminar");
        }
    });
    
    document.getElementById("editTask").addEventListener("click", () => {
        if (selectedTask) {
            const nuevoTexto = prompt("Modificar la tarea", selectedTask.textContent);
            if (nuevoTexto) {
                selectedTask.textContent = nuevoTexto;
            }
        } else {
            alert("Seleccione una tarea para modificar");
        }
    });
    
    function selectedTaskHandler(task) {
        task.addEventListener("click", () => {
            if (selectedTask) {
                selectedTask.style.backgroundColor = ""; // Quita el estilo de la tarea previamente seleccionada
            }
            selectedTask = task;
            selectedTask.style.backgroundColor = "#f0f0f0"; // Resalta la tarea seleccionada
        });
    }

    // ================================
    // Funcionalidad para la lista de skills
    // ================================
    
    // Se obtiene referencia a la lista de skills:
    const skillsList = document.getElementById("skillsList");
    
    // Referencia al skill seleccionado:
    let selectedSkill = null;
    
    // Event listener para agregar un skill:
    document.getElementById("addSkill").addEventListener("click", () => {
        const textoSkill = prompt("Ingrese el nombre del skill");
        if (textoSkill) {
            const nuevoSkill = document.createElement("li");
            nuevoSkill.textContent = textoSkill;
            skillsList.appendChild(nuevoSkill);
            selectedSkillHandler(nuevoSkill);
        }
    });

    // Event listener para borrar un skill:
    document.getElementById("deleteSkill").addEventListener("click", () => {
        if (selectedSkill) {
            skillsList.removeChild(selectedSkill);
            selectedSkill = null;
        } else {
            alert("No ha seleccionado ningún skill para eliminar");
        }
    });

    // Event listener para editar un skill:
    document.getElementById("editSkill").addEventListener("click", () => {
        if (selectedSkill) {
            const nuevoTexto = prompt("Modificar el skill", selectedSkill.textContent);
            if (nuevoTexto) {
                selectedSkill.textContent = nuevoTexto;
            }
        } else {
            alert("Seleccione un skill para modificar");
        }
    });

    function selectedSkillHandler(skill) {
        skill.addEventListener("click", () => {
            if (selectedSkill) {
                selectedSkill.style.backgroundColor = ""; // Quita el estilo del skill previamente seleccionado
            }
            selectedSkill = skill;
            selectedSkill.style.backgroundColor = "#f0f0f0"; // Resalta el skill seleccionado
        });
    }
});
