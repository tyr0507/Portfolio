// 🔒 網頁設計終極安全鎖：等全網頁所有資源（含圖片、CDN）徹底載入完畢才執行
window.addEventListener('load', function() {
  
  var targetElement = document.getElementById('typed-text');
  
  // 1. 確保抓得到這個元素，且它身上沒有被綁定過打字機（防抽搐核心）
  if (targetElement && !targetElement.classList.contains('typed-initialized')) {
    
    // 2. 徹底清空內部，防止殘留物干擾
    targetElement.innerHTML = ""; 
    
    // 3. 標記這個元素已經被初始化了，不准第二次執行
    targetElement.classList.add('typed-initialized');
    
    // 4. 正式啟動 Typed.js
    new Typed('#typed-text', {
      strings: ['數位媒體設計 / 個人視覺作品集'], 
      typeSpeed: 80,       // 每個字掉落落下的速度 (毫秒)
      backSpeed: 40,       // 倒退刪除字體的速度
      backDelay: 4000,     // 文字完整顯示後，停留在畫面上的時間
      loop: true,          // 無限重複播放
      showCursor: true,    // 顯示打字游標
      cursorChar: '|',     // 游標的形狀樣式
    });
  }
});

// 🌙 亮暗色切換邏輯
$(document).ready(function() {
  $('#themeToggle').click(function() {
    if ($('html').attr('data-bs-theme') === 'dark') {
      $('html').removeAttr('data-bs-theme');
      $(this).html('🌙 深色').removeClass('btn-outline-light').addClass('btn-outline-dark');
    } else {
      $('html').attr('data-bs-theme', 'dark');
      $(this).html('☀️ 亮色').removeClass('btn-outline-dark').addClass('btn-outline-light');
    }
  });
});
