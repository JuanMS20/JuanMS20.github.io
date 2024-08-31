document.addEventListener("DOMContentLoaded", () => {
    // ================================
    // Funcionalidad para la Información Personal
    // ================================

    const personalInfoList = document.getElementById("personalInfoList");
    let selectedPersonalInfo = null;

    document.getElementById("addPersonalInfo").addEventListener("click", () => {
        const nuevaInfo = prompt("Ingrese nueva información personal");
        if (nuevaInfo) {
            const nuevaElemento = document.createElement("li");
            nuevaElemento.textContent = nuevaInfo;
            nuevaElemento.classList.add("list-group-item");
            personalInfoList.appendChild(nuevaElemento);
            selectPersonalInfoHandler(nuevaElemento);
        }
    });

    document.getElementById("editPersonalInfo").addEventListener("click", () => {
        if (selectedPersonalInfo) {
            const nuevaInfo = prompt("Modificar la información", selectedPersonalInfo.textContent);
            if (nuevaInfo) {
                selectedPersonalInfo.textContent = nuevaInfo;
            }
        } else {
            alert("Seleccione una información para editar");
        }
    });

    document.getElementById("deletePersonalInfo").addEventListener("click", () => {
        if (selectedPersonalInfo) {
            personalInfoList.removeChild(selectedPersonalInfo);
            selectedPersonalInfo = null;
        } else {
            alert("No ha seleccionado ninguna información para eliminar");
        }
    });

    function selectPersonalInfoHandler(info) {
        info.addEventListener("click", () => {
            if (selectedPersonalInfo) {
                selectedPersonalInfo.classList.remove("active");
            }
            selectedPersonalInfo = info;
            selectedPersonalInfo.classList.add("active");
        });
    }

    document.querySelectorAll("#personalInfoList li").forEach(selectPersonalInfoHandler);


    // ================================
    // Funcionalidad para la Educación
    // ================================

    const educationInfoList = document.getElementById("educationInfoList");
    let selectedEducationInfo = null;

    document.getElementById("addEducationInfo").addEventListener("click", () => {
        const nuevaEducacion = prompt("Ingrese nueva información educativa");
        if (nuevaEducacion) {
            const nuevaElemento = document.createElement("li");
            nuevaElemento.textContent = nuevaEducacion;
            nuevaElemento.classList.add("list-group-item");
            educationInfoList.appendChild(nuevaElemento);
            selectEducationInfoHandler(nuevaElemento);
        }
    });

    document.getElementById("editEducationInfo").addEventListener("click", () => {
        if (selectedEducationInfo) {
            const nuevaInfo = prompt("Modificar la educación", selectedEducationInfo.textContent);
            if (nuevaInfo) {
                selectedEducationInfo.textContent = nuevaInfo;
            }
        } else {
            alert("Seleccione una educación para editar");
        }
    });

    document.getElementById("deleteEducationInfo").addEventListener("click", () => {
        if (selectedEducationInfo) {
            educationInfoList.removeChild(selectedEducationInfo);
            selectedEducationInfo = null;
        } else {
            alert("No ha seleccionado ninguna educación para eliminar");
        }
    });

    function selectEducationInfoHandler(info) {
        info.addEventListener("click", () => {
            if (selectedEducationInfo) {
                selectedEducationInfo.classList.remove("active");
            }
            selectedEducationInfo = info;
            selectedEducationInfo.classList.add("active");
        });
    }

    document.querySelectorAll("#educationInfoList li").forEach(selectEducationInfoHandler);


    // ================================
    // Funcionalidad para la Experiencia Laboral
    // ================================

    const workExperienceList = document.getElementById("workExperienceList");
    let selectedWorkExperience = null;

    document.getElementById("addWorkExperience").addEventListener("click", () => {
        const nuevaExperiencia = prompt("Ingrese nueva experiencia laboral");
        if (nuevaExperiencia) {
            const nuevaElemento = document.createElement("li");
            nuevaElemento.textContent = nuevaExperiencia;
            nuevaElemento.classList.add("list-group-item");
            workExperienceList.appendChild(nuevaElemento);
            selectWorkExperienceHandler(nuevaElemento);
        }
    });

    document.getElementById("editWorkExperience").addEventListener("click", () => {
        if (selectedWorkExperience) {
            const nuevaInfo = prompt("Modificar la experiencia laboral", selectedWorkExperience.textContent);
            if (nuevaInfo) {
                selectedWorkExperience.textContent = nuevaInfo;
            }
        } else {
            alert("Seleccione una experiencia laboral para editar");
        }
    });

    document.getElementById("deleteWorkExperience").addEventListener("click", () => {
        if (selectedWorkExperience) {
            workExperienceList.removeChild(selectedWorkExperience);
            selectedWorkExperience = null;
        } else {
            alert("No ha seleccionado ninguna experiencia laboral para eliminar");
        }
    });

    function selectWorkExperienceHandler(info) {
        info.addEventListener("click", () => {
            if (selectedWorkExperience) {
                selectedWorkExperience.classList.remove("active");
            }
            selectedWorkExperience = info;
            selectedWorkExperience.classList.add("active");
        });
    }

    document.querySelectorAll("#workExperienceList li").forEach(selectWorkExperienceHandler);
});
