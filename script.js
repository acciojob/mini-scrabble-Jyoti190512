document.addEventListener('DOMContentLoaded', function() {
    const evaluatedText = document.getElementById('evaluatedText');
    const letterCount = document.getElementById('letterCount');

    evaluatedText.addEventListener('input', function() {
        const text = this.value; // Remove leading and trailing spaces
        const count = text.length;
        letterCount.textContent = count;
    });
});

