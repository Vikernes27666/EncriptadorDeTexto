document.getElementById('encrypt-btn').addEventListener('click', () => {
    const inputText = document.getElementById('input-text').value;
    if (inputText) {
        const encryptedText = btoa(inputText); // Utiliza base64 para encriptar
        document.getElementById('output-message').textContent = encryptedText;
    } else {
        document.getElementById('output-message').textContent = 'Ningún mensaje fue encontrado';
    }
});

document.getElementById('decrypt-btn').addEventListener('click', () => {
    const inputText = document.getElementById('input-text').value;
    if (inputText) {
        try {
            const decryptedText = atob(inputText); // Utiliza base64 para desencriptar
            document.getElementById('output-message').textContent = decryptedText;
        } catch (e) {
            document.getElementById('output-message').textContent = 'Error al desencriptar el mensaje';
        }
    } else {
        document.getElementById('output-message').textContent = 'Ningún mensaje fue encontrado';
    }
});





