// 確保網頁元素都載入完成後再執行
$(document).ready(function() {
  
  if (document.getElementById('typed-text')) {
    new Typed('#typed-text', {
      // 💡 正式上架後，隨時可以在這裡修改你想顯示的文字
      strings: ['數位媒體設計 / 個人視覺作品集'], 
      
      typeSpeed: 80,       // 每個字掉落落下的速度 (毫秒)
      backSpeed: 40,       // 倒退刪除字體的速度
      backDelay: 4000,     // 文字完整顯示後，停留在畫面上的時間 (3000ms = 3秒)
      loop: true,          // 關鍵：設定為 true 就會無限重複播放
      showCursor: true,    // 顯示打字游標
      cursorChar: '|',     // 游標的形狀樣式
    });
  }

});


// 🌙 亮暗色切換邏輯
$('#themeToggle').click(function() {
  // 檢查目前最外層的 <html> 是不是 dark 模式
  if ($('html').attr('data-bs-theme') === 'dark') {
    // 如果是暗的，就切換回亮的
    $('html').removeAttr('data-bs-theme');
    $(this).html('🌙 深色').removeClass('btn-outline-light').addClass('btn-outline-dark');
  } else {
    // 如果是亮的，就啟動暗黑模式
    $('html').attr('data-bs-theme', 'dark');
    $(this).html('☀️ 亮色').removeClass('btn-outline-dark').addClass('btn-outline-light');
  }
});
