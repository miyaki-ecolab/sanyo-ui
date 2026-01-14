<!-- JavaScriptでモバイルメニューの開閉制御 -->

const menuToggle = document.querySelector('.menu-toggle');
const mainNav = document.querySelector('.main-nav');

// 画面幅に応じてメニューボタンの表示を制御
function checkScreenSize() {
    if (window.innerWidth <= 768) {
        menuToggle.style.display = 'block';
    } else {
    menuToggle.style.display = 'none';
    mainNav.classList.remove('open');
    }
}

// メニュートグル機能
menuToggle.addEventListener('click', function() {
    mainNav.classList.toggle('open');
});

// 初期化と画面サイズ変更時の処理
window.addEventListener('load', checkScreenSize);
window.addEventListener('resize', checkScreenSize);
