document.addEventListener('DOMContentLoaded', function(evento) {
    document.getElementById('form-sorteador').addEventListener('submit', function() {
        evento.preventDefault();

        let numeroMaximo = document.getElementById('numero-maximo').value;
        numeroMaximo = parseInt(numeroMaximo);

        let numeroAleatorio = Math.floor(Math.random() * numeroMaximo) + 1;
        
        document.getElementById('resultado-valor').innerText = numeroAleatorio;
        document.querySelector('.resultado').style.display = 'block';
    });
});
