const start = new Date('1975-04-05T00:00:00');

function update() {
    const now = new Date();

    let anni = now.getFullYear() - start.getFullYear();
    let mesi = now.getMonth() - start.getMonth();
    let giorni = now.getDate() - start.getDate();
    let ore = now.getHours() - start.getHours();

    if (ore < 0) {
        ore += 24;
        giorni--;
    }

    if (giorni < 0) {
        const mesePrec = new Date(now.getFullYear(), now.getMonth(), 0).getDate();
        giorni += mesePrec;
        mesi--;
    }

    if (mesi < 0) {
        mesi += 12;
        anni--;
    }

    // Calcolo minuti, secondi e decimi
    let minuti = now.getMinutes() - start.getMinutes();
    let secondi = now.getSeconds() - start.getSeconds();
    let decimi = Math.floor((now.getMilliseconds() - start.getMilliseconds()) / 100);

    if (decimi < 0) {
        decimi += 10;
        secondi--;
    }

    if (secondi < 0) {
        secondi += 60;
        minuti--;
    }

    if (minuti < 0) {
        minuti += 60;
        ore--;
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

// Avvio
update();
setInterval(update, 100); // ogni 100ms per aggiornare i decimi
