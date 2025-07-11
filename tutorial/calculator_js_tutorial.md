# `calculator.js` 檔案教學：計算機的「大腦」

`calculator.js` 檔案是我們計算機的「大腦」！它包含了所有讓計算機「動起來」的程式碼。當你點擊按鈕時，它會處理你的輸入，執行數學運算，並把結果顯示出來。沒有它，我們的計算機就只是一個空殼子。

## 檔案結構概覽 (JavaScript 程式碼)

```javascript
let display = document.getElementById("display");
let currentInput = "";
let operator = "";
let previousInput = "";
let shouldResetDisplay = false;

// 初始化顯示：讓顯示螢幕一開始是 0
display.value = "0";

// 函數：把數字或小數點加到顯示螢幕上
function appendToDisplay(value) { ... }

// 函數：清除顯示螢幕和所有計算狀態
function clearDisplay() { ... }

// 函數：刪除顯示螢幕上最後一個字
function deleteLast() { ... }

// 函數：執行實際的數學計算
function calculate() { ... }

// 函數：處理運算符號 (加、減、乘、除)
function handleOperator(op) { ... }

// 事件監聽：當網頁載入完成後，做一些設定
document.addEventListener("DOMContentLoaded", function() { ... });

// 函數：給按鈕添加點擊動畫效果
function addButtonClickEffect(button) { ... }

// 事件監聽：支援鍵盤輸入
document.addEventListener("keydown", function(event) { ... });

// 事件監聽：防止直接在顯示螢幕輸入文字
display.addEventListener("keydown", function(event) { ... });

// 事件監聽：防止右鍵菜單彈出
document.addEventListener("contextmenu", function(event) { ... });

// 事件監聽：改善移動設備的觸摸響應
document.addEventListener("touchstart", function() {}, {passive: true});
```

## 主要函數和變數說明 (白話解釋)

JavaScript 程式碼由變數 (用來儲存資料) 和函數 (用來執行動作) 組成。讓我們來看看這個計算機的大腦是怎麼運作的：

### 1. 全局變數：計算機的「記憶」

這些變數就像計算機的短期記憶，用來儲存當前的狀態和數字。

*   `let display = document.getElementById("display");`：這行程式碼找到 `index.html` 裡那個 `id` 是 `display` 的元素 (也就是我們的顯示螢幕)，並把它儲存在 `display` 這個變數裡。這樣我們就可以透過 `display` 這個變數來控制顯示螢幕的內容了。
*   `let currentInput = "";`：這個變數用來儲存你目前正在輸入的數字，或是計算後的結果。
*   `let operator = "";`：這個變數用來儲存你選擇的運算符號，例如 `+` (加)、`-` (減)、`*` (乘)、`/` (除)。
*   `let previousInput = "";`：這個變數用來儲存你輸入的第一個數字，在進行運算之前。
*   `let shouldResetDisplay = false;`：這是一個「開關」。當它變成 `true` 時，表示在輸入下一個數字之前，顯示螢幕需要先被清空 (例如，當你完成一次計算後，再輸入新數字時)。

### 2. `appendToDisplay(value)` 函數：把數字「寫」到螢幕上

*   **功能**：當你點擊數字鍵或小數點時，這個函數會把這些值顯示在計算機的螢幕上。
*   **運作方式**：
    *   它會檢查 `shouldResetDisplay` 這個開關。如果開關是 `true`，它會先清空顯示螢幕，然後再顯示新的數字。
    *   它還會處理一些特殊情況，例如避免數字前面出現多餘的 `0` (像 `07` 這種不正常的數字)。
    *   最後，它會把新的數字加到顯示螢幕的內容後面，並更新 `currentInput` 變數。
    *   它還會觸發一個小動畫，讓按鈕看起來像是被點擊了。

### 3. `clearDisplay()` 函數：讓計算機「歸零」

*   **功能**：當你點擊「清除」按鈕時，這個函數會清空顯示螢幕，並把所有計算狀態都重置，讓計算機回到最初的狀態。
*   **運作方式**：
    *   它會把 `display.value` (顯示螢幕的內容) 設定為 `0`。
    *   同時，它會把 `currentInput`, `operator`, `previousInput`, `shouldResetDisplay` 這些變數都清空或重置回預設值。
    *   同樣，它也會觸發按鈕的點擊動畫。

### 4. `deleteLast()` 函數：刪除「最後一個字」

*   **功能**：當你點擊「刪除」按鈕時，這個函數會把顯示螢幕上最後一個輸入的字元刪掉。
*   **運作方式**：
    *   它會檢查顯示螢幕上還有沒有字。如果還有字，它會把最後一個字刪掉。
    *   如果只剩下一個字，它會把顯示螢幕設定為 `0`。
    *   它也會更新 `currentInput` 變數，並觸發按鈕動畫。

### 5. `calculate()` 函數：執行「數學運算」

*   **功能**：當你點擊「等於」按鈕時，這個函數會執行實際的數學計算，並顯示結果。
*   **運作方式**：
    *   它會先檢查你是否已經輸入了足夠的數字和運算符號來進行計算。
    *   然後，它會把 `previousInput` 和 `currentInput` 轉換成數字 (因為它們一開始是文字)。
    *   它會根據 `operator` (運算符號) 來判斷要執行加、減、乘、除哪種運算。
    *   **錯誤處理**：如果發生「除以零」這種數學上不允許的情況，它會顯示 `Error`。
    *   **結果格式化**：它會把計算結果顯示在螢幕上。如果結果是整數，就直接顯示；如果是小數，它會保留最多 8 位小數，並且會把小數點後面多餘的 `0` 移除，讓結果看起來更簡潔。
    *   計算完成後，它會更新 `currentInput`，並重置 `operator` 和 `previousInput`，同時把 `shouldResetDisplay` 設定為 `true`，為下一次計算做準備。
    *   最後，它也會觸發按鈕的點擊動畫。

### 6. `handleOperator(op)` 函數：處理「運算符號」

*   **功能**：當你點擊加、減、乘、除這些運算符號按鈕時，這個函數會處理它們。
*   **運作方式**：
    *   它會檢查你是否已經輸入了數字。如果沒有，它就不會做任何事。
    *   如果之前已經有數字和運算符號了，它會先執行之前的計算。
    *   然後，它會把當前你點擊的運算符號儲存在 `operator` 變數裡。
    *   它會把 `currentInput` 的值儲存到 `previousInput`，這樣 `currentInput` 就可以準備接收下一個數字了。
    *   它也會把 `shouldResetDisplay` 設定為 `true`，這樣當你輸入下一個數字時，顯示螢幕會自動清空。
    *   最後，它也會觸發按鈕的點擊動畫。

### 7. `DOMContentLoaded` 事件監聽器：網頁「準備好了」

*   **功能**：這個程式碼會等待整個 HTML 網頁的內容都載入完成後，才開始執行裡面的 JavaScript 程式碼。這樣可以確保我們在操作網頁元素時，這些元素都已經存在了，不會出錯。
*   **運作方式**：
    *   它會重新設定運算符號按鈕的點擊事件，確保它們能正確地呼叫 `handleOperator` 函數。
    *   它還會把 HTML 中顯示的 `×` (乘號) 轉換成 JavaScript 能夠理解的 `*`，方便計算。

### 8. `addButtonClickEffect(button)` 函數：按鈕的「小動畫」

*   **功能**：這個函數會讓按鈕在被點擊時，有一個視覺上的動畫效果，讓你知道按鈕被按下了。
*   **運作方式**：
    *   它會給被點擊的按鈕添加一個 `btn-clicked` 的 CSS 類別 (這個類別在 `calculator.css` 裡定義了動畫)。
    *   然後，它會設定一個小小的延遲 (200 毫秒)，時間到了之後，再把這個類別移除，讓動畫完成。

### 9. 鍵盤支援 (`keydown` 事件監聽器)：用「鍵盤」操作計算機

*   **功能**：這個程式碼讓你可以直接用電腦鍵盤來操作計算機，就像操作實體計算機一樣方便。
*   **運作方式**：
    *   它會監聽你鍵盤上的按鍵動作。
    *   `event.preventDefault()`：這行程式碼很重要！它會阻止瀏覽器對某些按鍵的預設行為 (例如，按下空白鍵時，瀏覽器可能會向下滾動頁面)。
    *   然後，它會根據你按下的鍵 (數字、小數點、運算符號、Enter 鍵、Escape 鍵、Backspace 鍵等等)，來呼叫計算機裡相對應的功能。

### 10. 防止直接輸入和右鍵菜單：讓計算機更「專注」

*   `display.addEventListener('keydown', ...)`：這行程式碼會阻止你直接在顯示螢幕的輸入框裡用鍵盤輸入文字，因為顯示螢幕只能顯示計算結果，不能手動輸入。
*   `document.addEventListener('contextmenu', ...)`：這行程式碼會阻止你在計算機介面上點擊滑鼠右鍵時彈出瀏覽器的右鍵菜單，讓使用者體驗更一致。

### 11. 觸摸支援 (`touchstart` 事件監聽器)：為「手機」優化

*   **功能**：這行程式碼是為了改善計算機在手機或平板等觸摸設備上的反應速度。
*   **運作方式**：
    *   它添加了一個空的 `touchstart` 事件監聽器，並設定了 `passive: true`。這會告訴瀏覽器，這個觸摸事件不會阻止頁面滾動，從而提高滾動的流暢度。

## 如何使用這個 `calculator.js` 檔案？

`calculator.js` 檔案是透過 `index.html` 中的 `<script>` 標籤被引入的。當你打開 `index.html` 時，瀏覽器會載入並執行這個 JavaScript 檔案，這樣計算機的所有按鈕和鍵盤輸入就能正常工作，並執行數學運算了。

如果你想修改計算邏輯、添加新功能 (例如更多數學函數) 或調整互動行為，你只需要編輯這個 `calculator.js` 檔案，然後重新整理瀏覽器，就可以看到你的改變了！動手試試看，你會發現寫程式讓東西動起來是多麼有趣的事！


