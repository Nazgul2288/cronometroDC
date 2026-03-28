const start = new Date('1975-04-05T00:00:00');

function update() {
    const now = new Date();
    let diffMs = now - start; // differenza totale in millisecondi

    // Calcolo decimi di secondo
    const decimi = Math.floor((diffMs % 1000) / 100);

    // Calcolo secondi
    const secondiTot = Math.floor(diffMs / 1000);
    const secondi = secondiTot % 60;

    // Calcolo minuti
    const minutiTot = Math.floor(secondiTot / 60);
    const minuti = minutiTot % 60;

    // Calcolo ore
    const oreTot = Math.floor(minutiTot / 60);
    const ore = oreTot % 24;

    // Calcolo giorni
    const giorniTot = Math.floor(oreTot / 24);

    // Ora calcoliamo anni e mesi approssimando i mesi a 30 giorni
    let anni = 0, mesi = 0, giorni = giorniTot;
    while (giorni >= 365) {
        anni++;
        giorni -= 365;
    }
    while (giorni >= 30) {
        mesi++;
        giorni -= 30;
    }

    // Aggiorna il DOM
    document.getElementById('anni').textContent = anni;
    document.getElementById('mesi').textContent = mesi;
    document.getElementById('giorni').textContent = giorni;
    document.getElementById('ore').textContent = ore;
    document.getElementById('minuti').textContent = minuti;
    document.getElementById('secondi').textContent = secondi;
    document.getElementById('decimi').textContent = decimi;
}

// Avvio cronometro
update();
setInterval(update, 100); // aggiorna ogni 100ms per i decimi
