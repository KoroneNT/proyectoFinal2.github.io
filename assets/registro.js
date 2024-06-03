const form = document.getElementById('registration-form');
const resultDiv = document.getElementById('result');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const firstName = document.getElementById('first-name').value;
    const secondName = document.getElementById('second-name').value;
    const firstLastName = document.getElementById('first-last-name').value;
    const secondLastName = document.getElementById('second-last-name').value;
    const birthDate = document.getElementById('birth-date').value;

    const initials = `${firstName.charAt(0)}${secondName.charAt(0)}`;
    const lastNames = `${firstLastName.charAt(2)}${firstLastName.charAt(3)}${secondLastName.charAt(2)}${secondLastName.charAt(3)}`;
    const birthDateParts = birthDate.split('-');
    const year = birthDateParts[0];
    const month = birthDateParts[1];
    const day = birthDateParts[2];

    const email = `${initials}${lastNames}${year}${month}${day}@gmail.com`;

    resultDiv.innerText = `tu correo es: ${email}`;
});

