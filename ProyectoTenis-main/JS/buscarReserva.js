//todavia NO LA ESTOY USANDO
function verificarReservasUsuario() {
    // let inputDni = document.getElementById("inputDni")

    let inputDni = document.querySelectorAll('#inputDni')[0].value

    let dniUsuario = inputDni
    alert("el dni que escribiste es", dniUsuario)
    let validado = validadDni(dniUsuario)
    if(validado == false) {
    alert("DEFINITIVAMENTE no es valido")
    return
    }


    for (let dniR of reservas) {

        if (dniR.reservaDni() ==dniUsuario) {
         alert("existe")
                }
         
         else {
            console.log = "no tiene reservas agendadas"
         }
        }
 }



function validadDni(dni){
    let esDniValido = true
     if(dni == null || dni == undefined){
        alert(" ingrese un dni valido")
        esDniValido = false
     }
     else if( dni.length< 7 || dni.length>10){
        alert("la longitud no es correcta")
        esDniValido = false
     }
     return esDniValido
}