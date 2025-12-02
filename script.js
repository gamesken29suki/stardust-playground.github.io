document.addEventListener('DOMContentLoaded', () => {
    
    // === 1. ヒーローセクションのフェードインアニメーション ===
    // サイトロード後、メインタイトルをゆっくり表示させる
    const heroTitle = document.querySelector('.hero h1');
    if (heroTitle) {
        heroTitle.style.opacity = 0;
        // 0.5秒後に開始
        setTimeout(() => {
            heroTitle.style.transition = 'opacity 1.5s ease-in';
            heroTitle.style.opacity = 1;
        }, 500);
    }

    // === 2. スクロール時の要素アニメーション (Intersection Observer API) ===
    // カードなどの要素が画面内に入った時にアニメーションを適用する
    const observerOptions = {
        root: null, // ビューポートを基準
        rootMargin: '0px',
        threshold: 0.1 // 要素が10%見えたらトリガー
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // 要素が画面内に入ったら 'animate-in' クラスを追加
                entry.target.classList.add('animate-in');
                // 一度アニメーションしたら監視を停止
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // 監視対象の要素
    const elementsToAnimate = document.querySelectorAll('.custom-card-dark, .content-section h2');
    elementsToAnimate.forEach(el => {
        // 初期状態は非表示
        el.style.opacity = 0;
        // 監視に追加
        observer.observe(el);
    });
});

