# `index.html` 檔案教學

`index.html` 是計算機網頁的骨架，它定義了網頁的結構和內容。這個檔案負責載入CSS樣式和JavaScript腳本，並包含了計算機的所有按鈕和顯示螢幕。

## 檔案結構概覽

```html
<!DOCTYPE html>
<html lang="zh-TW">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>計算機</title>
    <link rel="stylesheet" href="calculator.css">
</head>
<body>
    <div class="calculator">
        <div class="display">
            <input type="text" id="display" readonly>
        </div>
        <div class="buttons">
            <!-- 按鈕區域 -->
        </div>
    </div>
    <script src="calculator.js"></script>
</body>
</html>
```

## 主要組成部分

1.  **`<!DOCTYPE html>` 和 `<html>`**: 定義了這是一個HTML5文件，並設定語言為繁體中文。

2.  **`<head>` 區塊**: 包含了網頁的元數據和外部資源的連結。
    *   `<meta charset="UTF-8">`: 設定字符編碼為UTF-8，確保網頁能正確顯示各種語言文字。
    *   `<meta name="viewport" content="width=device-width, initial-scale=1.0">`: 設定視口，使網頁在不同設備上都能良好顯示（響應式設計的基礎）。
    *   `<title>計算機</title>`: 設定網頁標題，會顯示在瀏覽器標籤頁上。
    *   `<link rel="stylesheet" href="calculator.css">`: 連結外部CSS文件 `calculator.css`，用於定義計算機的樣式和外觀。

3.  **`<body>` 區塊**: 包含了網頁的所有可見內容。
    *   `<div class="calculator">`: 這是整個計算機的容器，所有計算機的元素都包含在這個 `div` 裡面。CSS會針對這個類別來設定計算機的整體樣式。
    *   `<div class="display">`: 這是計算機的顯示螢幕區域。
        *   `<input type="text" id="display" readonly>`: 這是實際的顯示螢幕，一個文本輸入框。`readonly` 屬性確保用戶不能直接在裡面輸入，只能通過按鈕操作。`id="display"` 用於JavaScript獲取這個元素並操作其內容。
    *   `<div class="buttons">`: 這是所有計算機按鈕的容器。
        *   內部包含了多個 `<button>` 元素，每個按鈕都有不同的類別（`btn`, `number`, `operator`, `clear`, `equals`, `zero`）和 `onclick` 事件，用於觸發JavaScript函數來執行計算機的邏輯。
            *   `onclick="appendToDisplay(value)"`: 用於數字和小數點按鈕，將值添加到顯示器。
            *   `onclick="clearDisplay()"`: 清除顯示器內容。
            *   `onclick="deleteLast()"`: 刪除顯示器最後一個字符。
            *   `onclick="calculate()"`: 執行計算。
            *   `onclick="handleOperator(op)"`: 處理運算符（加、減、乘、除）。
    *   `<script src="calculator.js"></script>`: 連結外部JavaScript文件 `calculator.js`，這個腳本包含了計算機的所有互動邏輯和計算功能。它被放置在 `<body>` 結束標籤之前，以確保HTML元素在腳本執行前已經載入完成。

## 如何使用

這個 `index.html` 檔案是計算機的入口點。您只需要在瀏覽器中打開它，就可以看到計算機的介面並開始使用。它會自動載入 `calculator.css` 來美化介面，並載入 `calculator.js` 來提供互動功能。

