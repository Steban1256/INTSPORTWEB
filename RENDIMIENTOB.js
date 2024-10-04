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

       // Actualización de estadísticas del jugador destacado
       function actualizarEstadisticasJugador() {
           document.getElementById('ppg').textContent = (Math.random() * 5 + 26).toFixed(1);
           document.getElementById('apg').textContent = (Math.random() * 2 + 5).toFixed(1);
           document.getElementById('rpg').textContent = (Math.random() * 2 + 4).toFixed(1);
       }

       setInterval(actualizarEstadisticasJugador, 5000);

       // Botón de detalles
       document.getElementById('detalles-btn').addEventListener('click', () => {
           alert('Detalles del próximo partido:\n\nBoston Celtics vs Brooklyn Nets\nTD Garden, Boston\nFecha: 15 de septiembre de 2024\nHora: 7:30 PM ET');
       });

       // Cargar jugadores
       const jugadores = [
           { nombre: 'LeBron James', equipo: 'Los Angeles Lakers', ppg: 25.7 },
           { nombre: 'Kevin Durant', equipo: 'Phoenix Suns', ppg: 29.1 },
           { nombre: 'Giannis Antetokounmpo', equipo: 'Milwaukee Bucks', ppg: 31.2 },
           { nombre: 'Nikola Jokic', equipo: 'Denver Nuggets', ppg: 24.5 }
       ];

       const jugadoresContainer = document.getElementById('jugadores-container');
       jugadores.forEach(jugador => {
           const jugadorCard = document.createElement('div');
           jugadorCard.className = 'card';
           jugadorCard.innerHTML = `
               <div class="card-header">${jugador.nombre}</div>
               <div class="card-body">
                   <p>Equipo: ${jugador.equipo}</p>
                   <p>PPG: ${jugador.ppg}</p>
               </div>
           `;
           jugadoresContainer.appendChild(jugadorCard);
       });

       // Cargar estadísticas
       const estadisticas = [
           { categoria: 'Promedio de Puntos por Equipo', valor: '112.3' },
           { categoria: 'Promedio de Rebotes por Equipo', valor: '44.5' },
           { categoria: 'Promedio de Asistencias por Equipo', valor: '25.6' },
           { categoria: 'Eficiencia en Tiros de Campo', valor: '46.5%' },
           { categoria: 'Eficiencia en Tiros Libres', valor: '77.8%' },
           { categoria: 'Promedio de Triples por Equipo', valor: '12.4' }
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
           { fecha: '15 Sep 2024', equipos: 'Boston Celtics vs Brooklyn Nets', hora: '7:30 PM' },
           { fecha: '16 Sep 2024', equipos: 'Miami Heat vs Chicago Bulls', hora: '8:00 PM' },
           { fecha: '17 Sep 2024', equipos: 'LA Clippers vs Dallas Mavericks', hora: '10:30 PM' },
           { fecha: '18 Sep 2024', equipos: 'Philadelphia 76ers vs New York Knicks', hora: '7:00 PM' }
       ];

       const calendarioBody = document.getElementById('calendario-body');
       partidos.forEach(partido => {
           const row = document.createElement('tr');
           row.innerHTML = `
               <td>${partido.fecha}</td>
               <td>${partido.equipos}</td>
               <td>${partido.hora}</td>
           `;
           calendarioBody.appendChild(row);
       });