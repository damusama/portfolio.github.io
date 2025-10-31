// ページ全体の読み込みが完了したら実行
window.addEventListener('load', function() {
    // ローディング画面の要素を取得
    const loadingScreen = document.getElementById('loading');
    
    // loadingScreenに 'loaded' クラスを追加して非表示にする
    loadingScreen.classList.add('loaded');
});