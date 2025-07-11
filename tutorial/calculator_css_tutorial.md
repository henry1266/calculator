
# `calculator.css` 檔案教學

`calculator.css` 檔案負責定義計算機網頁的所有視覺樣式，使其看起來美觀且易於使用。它包含了佈局、顏色、字體、按鈕樣式以及響應式設計等。

## 檔案結構概覽

```css
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    /* 全局樣式，如背景、字體、居中佈局 */
}

.calculator {
    /* 計算機容器樣式，如背景、陰影、圓角 */
}

.display {
    /* 顯示螢幕區域樣式 */
}

#display {
    /* 顯示螢幕輸入框樣式 */
}

.buttons {
    /* 按鈕網格佈局 */
}

.btn {
    /* 所有按鈕的通用樣式 */
}

.btn:hover {
    /* 按鈕懸停效果 */
}

.btn:active {
    /* 按鈕點擊效果 */
}

.number {
    /* 數字按鈕的特定樣式 */
}

.operator {
    /* 運算符按鈕的特定樣式 */
}

.clear {
    /* 清除按鈕的特定樣式 */
}

.equals {
    /* 等於按鈕的特定樣式 */
}

.zero {
    /* 數字0按鈕的特定樣式 */
}

/* 響應式設計 */
@media (max-width: 480px) {
    /* 小螢幕設備的樣式調整 */
}

/* 動畫效果 */
@keyframes fadeIn {
    /* 計算機載入動畫 */
}

.calculator {
    /* 應用載入動畫 */
}

.btn-clicked {
    /* 按鈕點擊動畫 */
}

@keyframes buttonClick {
    /* 按鈕點擊動畫細節 */
}
```

## 主要樣式說明

1.  **全局重置 (`*`)**: 
    *   `margin: 0; padding: 0;`: 移除所有元素的預設外邊距和內邊距。
    *   `box-sizing: border-box;`: 設定盒模型為邊框盒，使寬度和高度包含內邊距和邊框，方便佈局。

2.  **`body` 樣式**: 
    *   `font-family`: 設定網頁的字體。
    *   `background: linear-gradient(...)`: 設定頁面背景為漂亮的漸變色，提供現代感。
    *   `min-height: 100vh; display: flex; justify-content: center; align-items: center;`: 使用Flexbox將計算機容器垂直和水平居中，確保在任何螢幕尺寸下都居中顯示。
    *   `padding: 20px;`: 確保在小螢幕上內容不會緊貼邊緣。

3.  **`.calculator` (計算機容器)**:
    *   `background: rgba(255, 255, 255, 0.1); backdrop-filter: blur(10px);`: 實現毛玻璃效果，使背景模糊並帶有透明度。
    *   `border-radius: 20px;`: 圓角邊框，增加柔和感。
    *   `padding: 30px;`: 內部填充，使內容不緊貼邊緣。
    *   `box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);`: 增加陰影效果，使計算機看起來浮動在頁面上。
    *   `border: 1px solid rgba(255, 255, 255, 0.2);`: 輕微的白色邊框，增強毛玻璃效果的質感。
    *   `max-width: 350px; width: 100%;`: 設定最大寬度並使其響應式。
    *   `animation: fadeIn 0.5s ease-out;`: 應用載入時的淡入動畫。

4.  **`.display` 和 `#display` (顯示螢幕)**:
    *   `#display`: 設定輸入框的寬度、高度、背景色（深色）、文字顏色（白色）、字體大小、右對齊等。`border-radius` 和 `box-shadow` 增加了其視覺效果。

5.  **`.buttons` (按鈕容器)**:
    *   `display: grid; grid-template-columns: repeat(4, 1fr); gap: 15px;`: 使用CSS Grid佈局，將按鈕排列成4列，並設定按鈕之間的間距。

6.  **`.btn` (通用按鈕樣式)**:
    *   `height: 70px; border: none; border-radius: 15px;`: 設定按鈕的高度、無邊框和圓角。
    *   `font-size; font-weight; cursor: pointer;`: 設定字體大小、粗細和鼠標樣式。
    *   `transition: all 0.3s ease;`: 為所有屬性變化添加平滑過渡效果，用於懸停和點擊動畫。
    *   `box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);`: 按鈕的陰影效果。
    *   `:hover` 和 `:active`: 定義了按鈕懸停和點擊時的視覺變化，包括 `transform` (位移) 和 `box-shadow` (陰影)，提供了互動反饋。

7.  **特定按鈕樣式 (`.number`, `.operator`, `.clear`, `.equals`, `.zero`)**:
    *   這些類別為不同類型的按鈕設定了獨特的背景漸變色和文字顏色，以區分它們的功能。
    *   `.equals`: 使用 `grid-row: span 2;` 使等於按鈕跨越兩行，形成更大的按鈕。
    *   `.zero`: 使用 `grid-column: span 2;` 使數字0按鈕跨越兩列，形成更寬的按鈕。

8.  **響應式設計 (`@media`)**:
    *   `@media (max-width: 480px)`: 當螢幕寬度小於或等於480px時，應用特定的樣式調整，例如減小計算機的內邊距、顯示螢幕和按鈕的大小，以適應小螢幕設備（如手機）。

9.  **動畫 (`@keyframes`)**:
    *   `@keyframes fadeIn`: 定義了計算機容器在載入時從透明度0和縮放0.9到透明度1和縮放1的淡入效果。
    *   `@keyframes buttonClick`: 定義了按鈕點擊時的輕微縮放動畫，提供視覺反饋。

## 如何使用

`calculator.css` 檔案通過 `index.html` 中的 `<link>` 標籤被引入。當您打開 `index.html` 時，瀏覽器會自動載入並應用這些CSS樣式，使計算機呈現出設計好的外觀。如果您想修改計算機的顏色、佈局或任何視覺效果，只需編輯這個CSS檔案即可。

