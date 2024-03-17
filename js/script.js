document.addEventListener('DOMContentLoaded', function() {
    const solutionBtn = document.getElementById('solutionBtn');
    const clearBtn = document.getElementById('clearBtn');
    const backBtn = document.getElementById('backBtn');
    const resultContainer = document.getElementById('result-container');
    const solutionParagraph = document.getElementById('solution');
    const inputFields = document.querySelectorAll('.input-container input');
    const inputContainer = document.querySelector('.input-container');

    solutionBtn.addEventListener('click', function() {
        const a = parseFloat(document.getElementById('a').value);
        const b = parseFloat(document.getElementById('b').value);
        const c = parseFloat(document.getElementById('c').value);

        if (isNaN(a) || isNaN(b) || isNaN(c)) {
            alert('Please enter valid coefficients.');
            return;
        }

        const discriminant = b * b - 4 * a * c;

        if (discriminant > 0) {
            const x1 = (-b + Math.sqrt(discriminant)) / (2 * a);
            const x2 = (-b - Math.sqrt(discriminant)) / (2 * a);
            solutionParagraph.textContent = `x1 = ${x1.toFixed(2)}, x2 = ${x2.toFixed(2)}`;
        } else if (discriminant === 0) {
            const x = -b / (2 * a);
            solutionParagraph.textContent = `x1 = ${x.toFixed(2)}, x2 = ${x.toFixed(2)}`;
        } else {
            const realPart = (-b / (2 * a)).toFixed(2);
            const imaginaryPart = (Math.sqrt(Math.abs(discriminant)) / (2 * a)).toFixed(2);
            solutionParagraph.textContent = `x1 = ${realPart} + ${imaginaryPart}i, x2 = ${realPart} - ${imaginaryPart}i`;
        }

        resultContainer.classList.remove('hidden');
        inputContainer.style.display = 'none';
        backBtn.style.display = 'block';
    });

     clearBtn.addEventListener('click', function() {
        inputFields.forEach(input => input.value = '');
    });

    backBtn.addEventListener('click', function() {
        resultContainer.classList.add('hidden');
        inputContainer.style.display = 'block';
        backBtn.style.display = 'none';
    });
});
