let rollCount = 0; // Счетчик бросков

document.getElementById('rollButton').addEventListener('click', rollDice);

function rollDice() {
    // рандомайзер
    const dice1 = Math.floor(Math.random() * 6) + 1;
    const dice2 = Math.floor(Math.random() * 6) + 1;

    // Обновление изображений костей
    document.getElementById('dice1').src = `img/dice${dice1}.png`;
    document.getElementById('dice2').src = `img/dice${dice2}.png`;

    // Общая сумма
    const sum = dice1 + dice2;

    // Счетчик
    rollCount++;
    
    // Обновление результатов
    document.getElementById('result').innerText = `You rolled: ${sum}`;
    document.getElementById('counter').innerText = `Roll count: ${rollCount}`;

    // Проверка на выигрыш (дубли)
    if (dice1 === dice2) {
        document.getElementById('result').innerText += ' - You rolled doubles!';
    }
}
