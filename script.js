// Funkce pro kontrolu, zda je číslo prvočíslo
function jePrvocislo(num) {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}

// Funkce pro zpracování formuláře
function zpracujFormular() {
    let cislo = document.getElementById("cislo").value;
    let vysledek = jePrvocislo(cislo) ? " je prvočíslo." : " není prvočíslo.";
    document.getElementById("vysledek").innerHTML = cislo + vysledek;
}

document.querySelector("button").onclick = function(event) {
    zpracujFormular();
}
