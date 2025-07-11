let display = document.getElementById('display');
let currentInput = '';
let operator = '';
let previousInput = '';
let shouldResetDisplay = false;

// 初始化顯示
display.value = '0';

// 添加到顯示器
function appendToDisplay(value) {
    addButtonClickEffect(event.target);
    
    if (shouldResetDisplay) {
        display.value = '';
        shouldResetDisplay = false;
    }
    
    if (display.value === '0' && value !== '.') {
        display.value = value;
    } else {
        display.value += value;
    }
    
    currentInput = display.value;
}

// 清除顯示器
function clearDisplay() {
    addButtonClickEffect(event.target);
    display.value = '0';
    currentInput = '';
    operator = '';
    previousInput = '';
    shouldResetDisplay = false;
}

// 刪除最後一個字符
function deleteLast() {
    addButtonClickEffect(event.target);
    
    if (display.value.length > 1) {
        display.value = display.value.slice(0, -1);
    } else {
        display.value = '0';
    }
    
    currentInput = display.value;
}

// 執行計算
function calculate() {
    addButtonClickEffect(event.target);
    
    if (previousInput === '' || operator === '' || currentInput === '') {
        return;
    }
    
    let result;
    const prev = parseFloat(previousInput);
    const current = parseFloat(currentInput);
    
    if (isNaN(prev) || isNaN(current)) {
        display.value = 'Error';
        return;
    }
    
    switch (operator) {
        case '+':
            result = prev + current;
            break;
        case '-':
            result = prev - current;
            break;
        case '*':
            result = prev * current;
            break;
        case '/':
            if (current === 0) {
                display.value = 'Error';
                return;
            }
            result = prev / current;
            break;
        default:
            return;
    }
    
    // 格式化結果
    if (result % 1 === 0) {
        display.value = result.toString();
    } else {
        display.value = result.toFixed(8).replace(/\.?0+$/, '');
    }
    
    currentInput = display.value;
    operator = '';
    previousInput = '';
    shouldResetDisplay = true;
}

// 處理運算符
function handleOperator(op) {
    addButtonClickEffect(event.target);
    
    if (currentInput === '') {
        return;
    }
    
    if (previousInput !== '' && operator !== '' && !shouldResetDisplay) {
        calculate();
    }
    
    operator = op;
    previousInput = currentInput;
    shouldResetDisplay = true;
}

// 修改HTML中的運算符按鈕事件
document.addEventListener('DOMContentLoaded', function() {
    // 重新綁定運算符按鈕
    const operatorButtons = document.querySelectorAll('.operator');
    operatorButtons.forEach(button => {
        const text = button.textContent;
        if (text === '+' || text === '-' || text === '×' || text === '/') {
            button.onclick = function() {
                const op = text === '×' ? '*' : text;
                handleOperator(op);
            };
        }
    });
});

// 添加按鈕點擊效果
function addButtonClickEffect(button) {
    button.classList.add('btn-clicked');
    setTimeout(() => {
        button.classList.remove('btn-clicked');
    }, 200);
}

// 鍵盤支援
document.addEventListener('keydown', function(event) {
    const key = event.key;
    
    // 防止默認行為
    event.preventDefault();
    
    if (key >= '0' && key <= '9') {
        appendToDisplay(key);
    } else if (key === '.') {
        if (!currentInput.includes('.')) {
            appendToDisplay(key);
        }
    } else if (key === '+' || key === '-') {
        handleOperator(key);
    } else if (key === '*') {
        handleOperator(key);
    } else if (key === '/') {
        handleOperator(key);
    } else if (key === 'Enter' || key === '=') {
        calculate();
    } else if (key === 'Escape' || key === 'c' || key === 'C') {
        clearDisplay();
    } else if (key === 'Backspace') {
        deleteLast();
    }
});

// 防止在顯示器中直接輸入
display.addEventListener('keydown', function(event) {
    event.preventDefault();
});

// 防止右鍵菜單
document.addEventListener('contextmenu', function(event) {
    event.preventDefault();
});

// 添加觸摸支援（移動設備）
document.addEventListener('touchstart', function() {}, {passive: true});

