let diaSemana = prompt("¿Que día es hoy?")

switch (diaSemana) {
    case "lunes":
        alert("Hoy es lunes.")
        window.confirm("• 30 minutos de caminata \n• 15 minutos de bicicleta");
        break;

    case "martes":
        alert("Hoy es Martes.")
        window.confirm("• 3 series de 15 abdominales \n• 3 series de 10 lagartija ");
        break;

    case "miercoles":
        alert("Hoy es Miercoles.")
        window.confirm("• 50 sentadillas \n• 50 Zancadas alternas");
        break;

    case "Jueves":
        alert("Hoy es jueves.")
        window.confirm("• 15 minutos de trote \n• 3 series de 15 Plancha con flexión");
        break;

    case "viernes":
        alert("Hoy es Viernes.")
        window.confirm("• 3 series de 15 puente lumbar \n• 10 minutos corriendo ");
        break;

    case "sabado":
        alert("Hoy es Sabado.")
        window.confirm("• Descanso ");
        break;

    case "domingo":
        alert("Hoy es Domingo.")
        window.confirm("• Descanso ");
        break;

    default:
        alert("Escribe el día de la semana en minúscula");
}