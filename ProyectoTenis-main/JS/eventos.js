let btnConsultarDni = document.getElementById("btnConsultarDni")
btnConsultarDni.addEventListener("click", verificarReservasUsuario)



const diaSelect = document.querySelector("#diaSelect")
diaSelect.addEventListener("click", reservaUsuario)

const horaSelect = document.querySelector("#horaSelect")
horaSelect.addEventListener("click", horarios)
