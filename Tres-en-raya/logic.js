let turno = 0;
const tablero = Array(9).fill(null); // Inicializar tablero con 9 casillas vacías
const btnPulsado =(e, pos) =>{
    // Verificar si la posición ya está ocupada
    if (tablero[pos]) return;

    turno ++;
    const btn = e.target;
    const color = turno % 2 ? 'limegreen':'crimson';
    btn.style.backgroundColor = color;
    tablero[pos] = color;
    if (haGanado()) {
        alert('¡Ha ganado ' + color + "!");
        reiniciarJuego();
    } else if (tablero.every(casilla => casilla)) {
        // Si todas las casillas están llenas y nadie ha ganado
        alert('¡Es un empate!');
        reiniciarJuego();
    }

}

const haGanado = () => {
    const combinacionesGanadoras = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 4, 8],
        [2, 4, 6],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8]
    ];
    
    // Verificar cada combinación ganadora
    return combinacionesGanadoras.some(combinacion => {
        const [a, b, c] = combinacion;
        return tablero[a]&&tablero[a] && tablero[a] == tablero[b] && tablero[a] == tablero[c];
    });
}
const reiniciarJuego = () => {
    // Reiniciar el tablero interno y visual
    tablero.fill(null);
    turno = 0;
    document.querySelectorAll('button').forEach(btn => {
        btn.style.backgroundColor = ''; // Limpiar colores de las casillas
    });
}

document.querySelectorAll('button').forEach(
    (obj , i) => obj.addEventListener('click' ,(e) => btnPulsado(e,i)));
