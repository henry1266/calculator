
# `calculator.js` 檔案教學

`calculator.js` 檔案是計算機的核心大腦，它包含了所有處理用戶輸入、執行數學運算和更新顯示螢幕的JavaScript邏輯。這個檔案使得計算機具有互動性。

## 檔案結構概覽

```javascript
let display = document.getElementById("display");
let currentInput = "";
let operator = "";
let previousInput = "";
let shouldResetDisplay = false;

// 初始化顯示
display.value = "0";

// 添加到顯示器
function appendToDisplay(value) { ... }

// 清除顯示器
function clearDisplay() { ... }

// 刪除最後一個字符
function deleteLast() { ... }

// 執行計算
function calculate() { ... }

// 處理運算符
function handleOperator(op) { ... }

// 修改HTML中的運算符按鈕事件 (DOMContentLoaded)
document.addEventListener("DOMContentLoaded", function() { ... });

// 添加按鈕點擊效果
function addButtonClickEffect(button) { ... }

// 鍵盤支援
document.addEventListener("keydown", function(event) { ... });

// 防止在顯示器中直接輸入
display.addEventListener("keydown", function(event) { ... });

// 防止右鍵菜單
document.addEventListener("contextmenu", function(event) { ... });

// 添加觸摸支援（移動設備）
document.addEventListener("touchstart", function() {}, {passive: true});
```

## 主要函數和變數說明

1.  **全局變數**: 
    *   `display`: 獲取HTML中ID為`display`的輸入框元素，這是計算機的顯示螢幕。
    *   `currentInput`: 儲存當前用戶輸入的數字或計算結果。
    *   `operator`: 儲存當前選定的運算符（如`+`, `-`, `*`, `/`）。
    *   `previousInput`: 儲存進行運算前的第一個數字。
    *   `shouldResetDisplay`: 布林值，用於判斷在輸入新數字前是否需要清除顯示螢幕（例如，在執行完一次計算後）。

2.  **`appendToDisplay(value)`**: 
    *   **功能**: 將數字或小數點添加到顯示螢幕上。
    *   **邏輯**: 
        *   如果`shouldResetDisplay`為`true`，則清空顯示螢幕。
        *   處理初始`0`的情況，確保不會出現`07`這樣的數字。
        *   將`value`添加到顯示螢幕的當前內容後。
        *   更新`currentInput`變數。
        *   觸發按鈕點擊動畫效果。

3.  **`clearDisplay()`**: 
    *   **功能**: 清除顯示螢幕和所有相關的計算狀態。
    *   **邏輯**: 
        *   將`display.value`設定為`0`。
        *   重置`currentInput`, `operator`, `previousInput`和`shouldResetDisplay`變數。
        *   觸發按鈕點擊動畫效果。

4.  **`deleteLast()`**: 
    *   **功能**: 刪除顯示螢幕上的最後一個字符。
    *   **邏輯**: 
        *   如果顯示內容長度大於1，則刪除最後一個字符。
        *   如果只剩下一個字符，則將顯示設定為`0`。
        *   更新`currentInput`變數。
        *   觸發按鈕點擊動畫效果。

5.  **`calculate()`**: 
    *   **功能**: 執行實際的數學計算。
    *   **邏輯**: 
        *   檢查`previousInput`, `operator`, `currentInput`是否都已設定，如果沒有則不執行計算。
        *   將`previousInput`和`currentInput`轉換為浮點數。
        *   使用`switch`語句根據`operator`執行加、減、乘、除運算。
        *   **錯誤處理**: 如果除數為`0`，則顯示`Error`。
        *   **結果格式化**: 如果結果是整數，則直接顯示；如果是小數，則保留最多8位小數並移除末尾的`0`。
        *   更新`currentInput`，並重置`operator`和`previousInput`，設定`shouldResetDisplay`為`true`。
        *   觸發按鈕點擊動畫效果。

6.  **`handleOperator(op)`**: 
    *   **功能**: 處理運算符按鈕的點擊事件。
    *   **邏輯**: 
        *   如果`currentInput`為空，則不執行任何操作。
        *   如果`previousInput`和`operator`都已存在，且不是剛計算完的狀態，則先執行前一個運算。
        *   設定當前的`operator`。
        *   將`currentInput`的值儲存到`previousInput`。
        *   設定`shouldResetDisplay`為`true`，以便下次輸入數字時清空顯示。
        *   觸發按鈕點擊動畫效果。

7.  **`DOMContentLoaded` 事件監聽器**: 
    *   **功能**: 確保在HTML內容完全載入後才執行JavaScript代碼。
    *   **邏輯**: 重新綁定運算符按鈕的`onclick`事件，以確保它們正確調用`handleOperator`函數，並將`×`轉換為`*`以便計算。

8.  **`addButtonClickEffect(button)`**: 
    *   **功能**: 為按鈕添加視覺點擊動畫效果。
    *   **邏輯**: 
        *   為點擊的按鈕添加`btn-clicked`類別（在`calculator.css`中定義了動畫）。
        *   使用`setTimeout`在200毫秒後移除該類別，使動畫完成。

9.  **鍵盤支援 (`keydown` 事件監聽器)**:
    *   **功能**: 允許用戶使用鍵盤操作計算機。
    *   **邏輯**: 
        *   監聽`keydown`事件，獲取按下的鍵。
        *   `event.preventDefault()`: 阻止瀏覽器對某些鍵（如空格鍵）的默認行為。
        *   根據按下的鍵（數字、小數點、運算符、Enter、Escape、Backspace等）調用相應的計算機函數。

10. **防止直接輸入和右鍵菜單**: 
    *   `display.addEventListener('keydown', ...)`: 阻止用戶直接在顯示螢幕的輸入框中鍵入字符。
    *   `document.addEventListener('contextmenu', ...)`: 阻止在計算機介面上顯示右鍵菜單，提供更一致的用戶體驗。

11. **觸摸支援 (`touchstart` 事件監聽器)**:
    *   **功能**: 改善移動設備上的觸摸響應。
    *   **邏輯**: 添加一個空的`touchstart`監聽器，並設定`passive: true`，這可以提高滾動性能，因為它告訴瀏覽器事件監聽器不會調用`preventDefault()`。

## 如何使用

`calculator.js` 檔案通過 `index.html` 中的 `<script>` 標籤被引入。當您打開 `index.html` 時，瀏覽器會載入並執行這個JavaScript檔案，從而使計算機的所有按鈕和鍵盤輸入都能正常工作，並執行數學運算。如果您想修改計算邏輯、添加新功能或調整互動行為，只需編輯這個JavaScript檔案即可。

