<!DOCTYPE html>
<html>
<head>
 
</head>
<body>
for (let i = 0; i < winCombinations.length; i++) {
    const [a, b, c] = winCombinations[i];
    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        document.getElementById(a).classList.add('winner');
        document.getElementById(b).classList.add('winner');
        document.getElementById(c).classList.add('winner');
        break;
    }
}

// Блокируем дальнейшее нажатие на ячейки
document.querySelectorAll('td').forEach(td => td.style.cursor = 'default');
return;
}

// Проверяем, закончилась ли игра в ничью
if (checkDraw()) {
// Добавляем класс "loser" всем ячейкам, если это был последний ход и никто не выиграл
document.querySelectorAll('td').forEach(td => td.classList.add('loser'));
return;
}

// Переключаем текущего игрока
currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
}

// Обработчик события клика по ячейке таблицы
document.querySelectorAll('td').forEach((td, index) => {
td.addEventListener('click', function () {
// Проверяем, не занята ли уже ячейка
if (board[index] === '') {
    // Обновляем состояние игры
    updateGameState(index);
}
});
});
</script>

</body>
</html>