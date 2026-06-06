// 🔒 全域防護鎖：防止重複載入導致的打字機雙槓與抽搐
if (typeof window.portfolioInitialized === 'undefined') {
  window.portfolioInitialized = true;

  // 1. 🌙 深色模式切換（採用最穩定的原生 JS 監聽）
  document.addEventListener('DOMContentLoaded', function() {
    const themeToggle = document.getElementById('themeToggle');
    if (themeToggle) {
      themeToggle.addEventListener('click', function() {
        const htmlEl = document.documentElement;
        if (htmlEl.getAttribute('data-bs-theme') === 'dark') {
          htmlEl.removeAttribute('data-bs-theme');
          this.innerHTML = '🌙 深色';
          this.className = 'btn btn-sm btn-outline-dark mt-1';
        } else {
          htmlEl.setAttribute('data-bs-theme', 'dark');
          this.innerHTML = '☀️ 亮色';
          this.className = 'btn btn-sm btn-outline-light mt-1';
        }
      });
    }
  });

  // 2. ✍️ 打字機特效（嚴格限制：必須元素存在且內部完全空白才執行）
  window.addEventListener('load', function() {
    const target = document.getElementById('typed-text');
    if (target && target.innerHTML === "") {
      new Typed('#typed-text', {
        strings: ['數位媒體設計 / 個人視覺作品集'], 
        typeSpeed: 80,       
        backSpeed: 40,       
        backDelay: 3000,     
        loop: true,          
        showCursor: true,    
        cursorChar: '|' // 完美的單個槓槓
      });
    }
  });

  // 3. ▲ 回到頂端按鈕（從 HTML 移過來統一管理的 jQuery 功能）
  $(document).ready(function(){
    $(window).scroll(function() {
      if ($(this).scrollTop() > 300) {
        $('#BackTop').fadeIn(222);
      } else {
        $('#BackTop').fadeOut(222);
      }
    });
    $('#BackTop').click(function() {
      $('html, body').animate({scrollTop: 0}, 333);
      return false;
    });
  });
}
