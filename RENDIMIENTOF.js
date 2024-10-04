        // Navegación
        const navLinks = document.querySelectorAll('.nav-link');
        const sections = document.querySelectorAll('.section');

        navLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const targetSection = link.getAttribute('data-section');
                sections.forEach(section => {
                    section.classList.remove('active');
                    if (section.id === targetSection) {
                        section.classList.add('active');
                    }
                });
            });
        });

        // Actualización de estadísticas en tiempo real
        function actualizarEstadisticas() {
            document.getElementById('posesion').textContent = Math.floor(Math.random() * 20 + 50) + '%';
            document.getElementById('tiros').textContent = Math.floor(Math.random() * 10 + 10);
            document.getElementById('corners').textContent = Math.floor(Math.random() * 5 + 5);
            document.getElementById('goles').textContent = Math.floor(Math.random() * 3 + 6);
            document.getElementById('asistencias').textContent = Math.floor(Math.random() * 3 + 3);
        }

        setInterval(actualizarEstadisticas, 5000);

        // Botón de detalles
        document.getElementById('detalles-btn').addEventListener('click', () => {
            alert('Detalles del próximo partido:\n\nColombia vs Argentina\nEstadio Metropolitano, Barranquilla\nFecha: 20 de septiembre de 2024\nHora: 19:00 (hora local)');
        });

        // Cargar jugadores
        const jugadores = [
            { nombre: 'Luis Díaz', posicion: 'Delantero' },
            { nombre: 'James Rodríguez', posicion: 'Mediocampista' },
            { nombre: 'David Ospina', posicion: 'Portero' },
            { nombre: 'Yerry Mina', posicion: 'Defensa' }
        ];

        const jugadoresContainer = document.getElementById('jugadores-container');
        jugadores.forEach(jugador => {
            const jugadorCard = document.createElement('div');
            jugadorCard.className = 'card';
            jugadorCard.innerHTML = `
                <div class="card-header">${jugador.nombre}</div>
                <div class="card-body">
                    <p>Posición: ${jugador.posicion}</p>
                </div>
            `;
            jugadoresContainer.appendChild(jugadorCard);
        });

        // Cargar estadísticas
        const estadisticas = [
            { categoria: 'Partidos Jugados', valor: 10 },
            { categoria: 'Victorias', valor: 7 },
            { categoria: 'Empates', valor: 2 },
            { categoria: 'Derrotas', valor: 1 },
            { categoria: 'Goles a Favor', valor: 22 },
            { categoria: 'Goles en Contra', valor: 8 }
        ];

        const estadisticasBody = document.getElementById('estadisticas-body');
        estadisticas.forEach(stat => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${stat.categoria}</td>
                <td>${stat.valor}</td>
            `;
            estadisticasBody.appendChild(row);
        });

        // Cargar calendario
        const partidos = [
            { fecha: '20 Sep 2024', rival: 'Argentina', competicion: 'Eliminatorias Mundial 2026' },
            { fecha: '10 Oct 2024', rival: 'Perú', competicion: 'Eliminatorias Mundial 2026' },
            { fecha: '14 Oct 2024', rival: 'Ecuador', competicion: 'Eliminatorias Mundial 2026' },
            { fecha: '14 Nov 2024', rival: 'Uruguay', competicion: 'Eliminatorias Mundial 2026' }
        ];

        const calendarioBody = document.getElementById('calendario-body');
        partidos.forEach(partido => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${partido.fecha}</td>
                <td>${partido.rival}</td>
                <td>${partido.competicion}</td>
            `;
            calendarioBody.appendChild(row);
        });