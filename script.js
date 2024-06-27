document.addEventListener("DOMContentLoaded", function() {
    const loveMessageElement = document.getElementById('loveMessage');

    const startDate = new Date(2023, 5, 23); // 23 июня 2023 года
    const currentDate = new Date();
    const diffTime = Math.abs(currentDate - startDate);
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));

    if (diffDays % 2 === 0) {
        loveMessageElement.textContent = "Сегодня Леша любит Юлю больше!";
    } else {
        loveMessageElement.textContent = "Сегодня Юля любит Лешу больше!";
    }
});
