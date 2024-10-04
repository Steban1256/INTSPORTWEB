function cambiarAnalisis() {
    const analisis = [
        "La etapa final del Tour de Francia 2024 fue un espectáculo de ciclismo de élite. Tadej Pogačar demostró su dominio al atacar en los Campos Elíseos, asegurando tanto la victoria de etapa como el maillot amarillo. Jonas Vingegaard y Primož Roglič completaron el podio tras una intensa batalla. Egan Bernal, aunque no pudo alcanzar el podio, mostró una gran recuperación y promete para futuras ediciones.",
        "En una jornada que resumió la intensidad de las tres semanas de competición, el equipo UAE Team Emirates de Pogačar controló la carrera de manera magistral. La estrategia de ataque en los últimos kilómetros dio sus frutos cuando Pogačar lanzó su sprint final. Vingegaard y Roglič, aunque mostraron su característica tenacidad, no pudieron contrarrestar la explosividad del esloveno. Bernal sorprendió a todos con un ataque tardío que le valió el cuarto puesto.",
        "El Tour de Francia 2024 concluyó con una etapa que no decepcionó. Con un perfil aparentemente plano pero exigente debido a la velocidad, vimos a los favoritos darlo todo en las calles de París. Pogačar demostró por qué es considerado el nuevo 'canibal' del ciclismo, mientras que Vingegaard, Roglič y Bernal, a pesar de perder tiempo, confirmaron su estatus entre la élite del ciclismo mundial. La edición de este año quedará en la memoria como una de las más disputadas de la historia reciente."
    ];
    const analisisElement = document.getElementById('analisisEtapa');
    let nuevoAnalisis = analisisElement.textContent;
    while (nuevoAnalisis === analisisElement.textContent) {
        nuevoAnalisis = analisis[Math.floor(Math.random() * analisis.length)];
    }
    analisisElement.textContent = nuevoAnalisis;
    analisisElement.style.animation = 'none';
    analisisElement.offsetHeight; /* trigger reflow */
    analisisElement.style.animation = null;
}

// Simulación de actualización de posiciones en tiempo real
setInterval(() => {
    const posiciones = ['posicionPogacar', 'posicionVingegaard', 'posicionRoglic', 'posicionBernal'];
    if (Math.random() < 0.2) {
        const i = Math.floor(Math.random() * 3);
        const temp = document.getElementById(posiciones[i]).textContent;
        document.getElementById(posiciones[i]).textContent = document.getElementById(posiciones[i+1]).textContent;
        document.getElementById(posiciones[i+1]).textContent = temp;
    }
}, 5000);