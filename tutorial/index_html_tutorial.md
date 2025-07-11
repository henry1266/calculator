# `index.html` 檔案教學：計算機的「骨架」

`index.html` 是我們計算機網頁的基礎，就像蓋房子時的「骨架」一樣。它負責定義網頁的結構和內容，告訴瀏覽器網頁上會有什麼東西，以及它們會在哪裡。

這個檔案也會把我們的「裝潢師傅」 (`calculator.css`) 和「大腦」 (`calculator.js`) 載入進來，讓計算機變得漂亮又聰明！

## 檔案結構概覽 (HTML 程式碼)

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
            <!-- 這裡會放計算機的按鈕 -->
        </div>
    </div>
    <script src="calculator.js"></script>
</body>
</html>
```

## 主要組成部分 (白話解釋)

讓我們把上面的程式碼拆開來看，每個部分都有它的作用：

### 1. `<!DOCTYPE html>` 和 `<html>`：告訴瀏覽器這是什麼

*   `<!DOCTYPE html>`：這行程式碼告訴瀏覽器，這是一個最新的 HTML5 網頁文件。
*   `<html lang="zh-TW">`：這是整個網頁的開始和結束標籤。`lang="zh-TW"` 表示這個網頁的語言是繁體中文。

### 2. `<head>` 區塊：網頁的「設定」區域

這個部分放的是網頁的一些基本設定和外部資源的連結，這些東西通常不會直接顯示在網頁上，但對網頁的運作很重要。

*   `<meta charset="UTF-8">`：設定網頁的文字編碼。簡單來說，就是讓網頁能正確顯示各種語言的文字，不會出現亂碼。
*   `<meta name="viewport" content="width=device-width, initial-scale=1.0">`：這行很重要！它讓網頁在手機、平板等不同大小的裝置上都能自動調整大小，看起來不會跑版（這就是「響應式設計」的基礎）。
*   `<title>計算機</title>`：設定網頁的標題。當你在瀏覽器打開這個網頁時，這個標題會顯示在瀏覽器的分頁標籤上。
*   `<link rel="stylesheet" href="calculator.css">`：這行是把我們的「裝潢師傅」 (`calculator.css` 檔案) 連結進來。它告訴瀏覽器：「嘿，這個檔案裡有計算機的外觀設計，記得要套用喔！」

### 3. `<body>` 區塊：網頁的「內容」區域

這個部分包含了所有你會在網頁上看到的東西，像是文字、圖片、按鈕等等。

*   `<div class="calculator">`：這是一個大的「盒子」，把整個計算機的所有東西都裝在裡面。我們會在 `calculator.css` 裡針對這個盒子設定樣式，讓整個計算機看起來像一個整體。

    *   `<div class="display">`：這是計算機的「顯示螢幕」區域。
        *   `<input type="text" id="display" readonly>`：這就是計算機的實際顯示螢幕！它是一個文字輸入框，但因為有 `readonly` (只讀) 屬性，所以你不能直接用鍵盤輸入，只能透過按鈕來操作。`id="display"` 就像是給這個顯示螢幕取了一個名字，方便 `calculator.js` (我們的大腦) 找到它並控制它顯示什麼內容。

    *   `<div class="buttons">`：這是所有計算機「按鈕」的「盒子」。
        *   在這個盒子裡面，你會看到很多 `<button>` 元素。每個按鈕都有不同的類別 (例如 `btn`, `number`, `operator` 等等) 和 `onclick` 事件。`onclick` 事件的意思是：「當我被點擊時，請執行某個 JavaScript 函數。」
            *   `onclick="appendToDisplay(value)"`：當你點數字或小數點時，會把這些值加到顯示螢幕上。
            *   `onclick="clearDisplay()"`：清除顯示螢幕上的所有內容。
            *   `onclick="deleteLast()"`：刪除顯示螢幕上最後一個字。
            *   `onclick="calculate()"`：執行計算，算出結果。
            *   `onclick="handleOperator(op)"`：處理加、減、乘、除這些運算符號。

*   `<script src="calculator.js"></script>`：這行是把我們的「大腦」 (`calculator.js` 檔案) 連結進來。它包含了所有讓計算機可以互動和計算的程式碼。我們把它放在 `</body>` 結束標籤之前，這樣可以確保網頁上的所有元素都載入完畢後，JavaScript 程式碼才開始執行，避免出錯。

## 如何使用這個 `index.html` 檔案？

這個 `index.html` 檔案就是我們計算機的「入口」。你只需要用任何網頁瀏覽器 (例如 Chrome, Firefox, Edge 等) 打開它，就可以看到計算機的介面了！

瀏覽器會自動讀取 `index.html`，然後根據裡面的指示，載入 `calculator.css` 來美化介面，再載入 `calculator.js` 來提供互動功能。這樣，一個完整的計算機就呈現在你眼前了！

試著打開它，然後看看網頁的樣子，再對照上面的解釋，你會對網頁的結構有更清楚的認識！


