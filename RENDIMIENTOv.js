const mainTeam = [
    { name: 'Amanda Coneo', position: 'Atacante', height: '1.80m', club: 'Denso Airybees (Japón)' },
    { name: 'María Alejandra Marín', position: 'Central', height: '1.85m', club: 'Beziers Angels (Francia)' },
    { name: 'Melissa Rangel', position: 'Armadora', height: '1.78m', club: 'Volley Bergamo (Italia)' },
    { name: 'Valerin Carabalí', position: 'Opuesta', height: '1.87m', club: 'Vallefoglia (Italia)' },
    { name: 'Ana Karina Olaya', position: 'Líbero', height: '1.68m', club: 'Nantes VB (Francia)' },
];

const teamStats = [
    { name: 'Ataques Exitosos', value: 58 },
    { name: 'Bloqueos', value: 12 },
    { name: 'Aces', value: 8 },
    { name: 'Recepciones Perfectas', value: 65 },
];

const upcomingMatches = [
    { date: '2024-06-20', opponent: 'Brasil', competition: 'Clasificatorias Olímpicas Sudamericanas', venue: 'Bogotá, Colombia' },
    { date: '2024-07-05', opponent: 'Argentina', competition: 'Copa América', venue: 'Buenos Aires, Argentina' },
    { date: '2024-07-15', opponent: 'Perú', competition: 'Copa América', venue: 'Lima, Perú' },
];

function showTab(tabName) {
    document.querySelectorAll('main > div').forEach(div => div.style.display = 'none');
    document.getElementById(tabName).style.display = 'block';

    if (tabName === 'jugadoras' && document.getElementById('playerTableBody').innerHTML === '') {
        populatePlayerTable();
    } else if (tabName === 'estadisticas' && !window.statsChart) {
        createStatsChart();
    } else if (tabName === 'calendario' && document.getElementById('matchTableBody').innerHTML === '') {
        populateMatchTable();
    }
}

function populatePlayerTable() {
    const tableBody = document.getElementById('playerTableBody');
    mainTeam.forEach(player => {
        const row = tableBody.insertRow();
        Object.values(player).forEach(value => {
            const cell = row.insertCell();
            cell.textContent = value;
        });
    });
}

function createStatsChart() {
    const ctx = document.getElementById('statsChart').getContext('2d');
    window.statsChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: teamStats.map(stat => stat.name),
            datasets: [{
                label: 'Valor',
                data: teamStats.map(stat => stat.value),
                backgroundColor: 'rgba(49, 130, 206, 0.8)',
            }]
        },
        options: {
            responsive: true,
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
}

function populateMatchTable() {
    const tableBody = document.getElementById('matchTableBody');
    upcomingMatches.forEach(match => {
        const row = tableBody.insertRow();
        Object.values(match).forEach(value => {
            const cell = row.insertCell();
            cell.textContent = value;
        });
    });
}

// Mostrar la pestaña de inicio por defecto
showTab('inicio');