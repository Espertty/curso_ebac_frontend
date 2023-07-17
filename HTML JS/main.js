const form = document.getElementById('myForm');
        const campoA = document.getElementById('campoA');
        const campoB = document.getElementById('campoB');
        const resultado = document.getElementById('resultado');

        form.addEventListener('submit', function(event) {
            event.preventDefault(); // Impede o envio do formulário

            const valorA = parseInt(campoA.value);
            const valorB = parseInt(campoB.value);

            if (valorB > valorA) {
                resultado.textContent = 'Formulário válido!';
                resultado.style.color = 'green';
            } else {
                resultado.textContent = 'Formulário inválido. O número B deve ser maior que o número A.';
                resultado.style.color = 'red';
            }
        });