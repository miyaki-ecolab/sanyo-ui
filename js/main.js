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



// タッチデバイス向けにポップアップ表示のサポートを強化
document.addEventListener('DOMContentLoaded', function() {
    const genreItems = document.querySelectorAll('.genre-list li');

    genreItems.forEach(item => {
        item.addEventListener('touchstart', function(e) {
            // タッチ開始でポップアップの表示/非表示をトグル
            const popup = this.querySelector('.genre-popup');

            // 他のすべてのポップアップを非表示に
            document.querySelectorAll('.genre-popup.touch-visible').forEach(el => {
                if (el !== popup) {
                    el.classList.remove('touch-visible');
                }
            });
            // このポップアップを表示/非表示切り替え
            if (popup) {
                popup.classList.toggle('touch-visible');

                if (popup.classList.contains('touch-visible')) {
                    e.preventDefault(); // リンク遷移を防止（ポップアップ表示時のみ）
                }
            }
        });
    });
    // ポップアップ以外の場所をタップしたら閉じる
    document.addEventListener('touchstart', function(e) {
        if (!e.target.closest('.genre-list li')) {
            document.querySelectorAll('.genre-popup.touch-visible').forEach(el => {
                el.classList.remove('touch-visible');
            });
        }
    });
});

// タッチデバイス用のスタイル追加（JavaScript経由）
const style = document.createElement('style');
style.innerHTML = `
  @media (pointer: coarse) {
    .genre-popup {
      transition: none;
      opacity: 0;
      visibility: hidden;
    }
    
    .genre-popup.touch-visible {
      opacity: 1;
      visibility: visible;
      pointer-events: auto;
    }
  }
`;
document.head.appendChild(style);

// ヘッダーのスクロール監視
document.addEventListener("DOMContentLoaded", function () {
    const header = document.querySelector(".header"); // ターゲットのヘッダー要素

    window.addEventListener("scroll", function () {
        if (window.scrollY > 0) {
            console.log('scrolled')
            header.classList.add("scrolled"); // スクロール時にクラスを追加
        } else {
            header.classList.remove("scrolled"); // 元に戻す
        }
    });
});

