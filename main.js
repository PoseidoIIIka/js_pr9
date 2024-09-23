'use strict';

document.getElementById('myForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Получаем значения полей
    let nameInput = document.getElementById('name');
    let birthYearInput = document.getElementById('birthYear');
    let nameError = document.getElementById('nameError');
    let birthYearError = document.getElementById('birthYearError');
    let successMessage = document.getElementById('successMessage');

    let isValid = true;
    let currentYear = new Date().getFullYear();

    nameError.textContent = '';
    birthYearError.textContent = '';
    nameInput.classList.remove('error');
    birthYearInput.classList.remove('error');
    successMessage.style.display = 'none';

    if (nameInput.value.trim() === '') {
        nameError.textContent = 'Поле имя не может быть пустым';
        nameInput.classList.add('error');
        isValid = false;
    } else if (nameInput.value.trim().length < 2) {
        nameError.textContent = 'Имя должно содержать минимум 2 символа';
        nameInput.classList.add('error');
        isValid = false;
    }

    let birthYear = birthYearInput.value.trim();
    if (birthYear === '') {
        birthYearError.textContent = 'Поле год рождения не может быть пустым';
        birthYearInput.classList.add('error');
        isValid = false;
    } else if (birthYear.length !== 4 || isNaN(birthYear)) {
        birthYearError.textContent = 'Год рождения должен состоять из 4 цифр';
        birthYearInput.classList.add('error');
        isValid = false;
    } else {
        let age = currentYear - parseInt(birthYear, 10);
        if (age < 18) {
            birthYearError.textContent = 'Вам должно быть не менее 18 лет';
            birthYearInput.classList.add('error');
            isValid = false;
        }
    }

    if (isValid) {
        successMessage.style.display = 'block';
        nameInput.value = '';
        birthYearInput.value = '';
    }
});