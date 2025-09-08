// GSAPアニメーション設定
document.addEventListener("DOMContentLoaded", function () {
  console.log("GSAP Animation Started");

  // ハンバーガーメニューの制御
  const hamburger = document.getElementById("hamburger");
  const navMenu = document.getElementById("nav-menu");

  hamburger.addEventListener("click", function () {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
  });

  // メニューリンクをクリックしたときにメニューを閉じる
  const navLinks = document.querySelectorAll(".nav-menu a");
  navLinks.forEach((link) => {
    link.addEventListener("click", function () {
      hamburger.classList.remove("active");
      navMenu.classList.remove("active");
    });
  });

  // ヒーローセクションのアニメーション
  const heroTimeline = gsap.timeline();

  heroTimeline.to(
    [
      ".hero-title",
      ".hero-subtitle",
      ".hero-description",
      ".cta-button",
      ".bot-stats",
    ],
    {
      duration: 1,
      opacity: 1,
      y: 0,
      ease: "power2.out",
    }
  );

  // ボタンのホバーアニメーション
  const button = document.querySelector(".cta-button");

  button.addEventListener("mouseenter", function () {
    gsap.to(this, {
      duration: 0.3,
      scale: 1.1,
      boxShadow: "0 10px 20px rgba(0,0,0,0.2)",
      ease: "power2.inOut",
    });
  });

  button.addEventListener("mouseleave", function () {
    gsap.to(this, {
      duration: 0.3,
      scale: 1,
      boxShadow: "0 5px 10px rgba(0,0,0,0.1)",
      ease: "power2.out",
    });
  });

  // スクロールトリガーでのアニメーション
  gsap.registerPlugin(ScrollTrigger);

  // ナビゲーションのスムーススクロール
  gsap.registerPlugin(ScrollToPlugin);

  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        gsap.to(window, {
          duration: 1,
          scrollTo: target,
          ease: "power2.inOut",
        });
      }
    });
  });
  gsap.to(".about .section-title", {
    scrollTrigger: {
      trigger: ".about .section-title",
      start: "top 80%",
      end: "bottom 20%",
      toggleActions: "play none none reverse",
    },
    duration: 1,
    opacity: 1,
    y: 0,
    ease: "power2.out",
  });

  // カードのアニメーション
  gsap.to(".card", {
    scrollTrigger: {
      trigger: ".cards",
      start: "top 80%",
      end: "bottom 20%",
      toggleActions: "play none none reverse",
    },
    duration: 1,
    opacity: 1,
    y: 0,
    stagger: 0.3,
    ease: "power2.out",
  });

  // コンタクトセクションのタイトル
  gsap.to(".contact .section-title", {
    scrollTrigger: {
      trigger: ".contact .section-title",
      start: "top 80%",
      end: "bottom 20%",
      toggleActions: "play none none reverse",
    },
    duration: 1,
    opacity: 1,
    y: 0,
    ease: "power2.out",
  });

  // 使い方ステップのアニメーション
  gsap.to(".step", {
    scrollTrigger: {
      trigger: ".usage-steps",
      start: "top 80%",
      end: "bottom 20%",
      toggleActions: "play none none reverse",
    },
    duration: 1,
    opacity: 1,
    y: 0,
    stagger: 0.3,
    ease: "power2.out",
  });

  // 変更履歴セクションのタイトル
  gsap.to(".changelog .section-title", {
    scrollTrigger: {
      trigger: ".changelog .section-title",
      start: "top 80%",
      end: "bottom 20%",
      toggleActions: "play none none reverse",
    },
    duration: 1,
    opacity: 1,
    y: 0,
    ease: "power2.out",
  });

  // 変更履歴エントリのアニメーション
  gsap.to(".changelog-entry", {
    scrollTrigger: {
      trigger: ".changelog-entries",
      start: "top 80%",
      end: "bottom 20%",
      toggleActions: "play none none reverse",
    },
    duration: 1,
    opacity: 1,
    y: 0,
    stagger: 0.2,
    ease: "power2.out",
  });

  // お問い合わせセクションのタイトル
  gsap.to(".features .section-title", {
    scrollTrigger: {
      trigger: ".features .section-title",
      start: "top 80%",
      end: "bottom 20%",
      toggleActions: "play none none reverse",
    },
    duration: 1,
    opacity: 1,
    y: 0,
    ease: "power2.out",
  });

  // アニメーション付きボックスの回転
  gsap.to(".animated-box", {
    scrollTrigger: {
      trigger: ".animated-box",
      start: "top 80%",
      end: "bottom 20%",
      toggleActions: "play none none reverse",
    },
    duration: 2,
    rotation: 405,
    scale: 1.2,
    ease: "power2.inOut",
    yoyo: true,
    repeat: -1,
  });

  // パララックス効果
  gsap.to(".hero", {
    scrollTrigger: {
      trigger: ".hero",
      start: "top top",
      end: "bottom top",
      scrub: true,
    },
    y: -100,
    ease: "none",
  });

  // ページロード時のローディングアニメーション
  gsap.from("body", {
    duration: 0.5,
    opacity: 0,
    ease: "power2.out",
  });

  // カードのホバーアニメーション
  document.querySelectorAll(".card").forEach((card) => {
    card.addEventListener("mouseenter", function () {
      gsap.to(this, {
        duration: 0.3,
        y: -10,
        boxShadow: "0 15px 30px rgba(0,0,0,0.2)",
        ease: "power2.out",
      });
    });

    card.addEventListener("mouseleave", function () {
      gsap.to(this, {
        duration: 0.3,
        y: 0,
        boxShadow: "0 5px 15px rgba(0,0,0,0.1)",
        ease: "power2.out",
      });
    });
  });
});

// Discord Bot統計情報を取得する関数
async function fetchBotStats() {
  let response = await fetch("https://kintai-discord-v2.nasubi.dev/api/stats", {
    method: "GET",
    headers: {
      Accept: "*/*",
      "User-Agent": "Thunder Client (https://www.thunderclient.com)",
    },
  });
  let data = await response.json();
  console.log("Bot統計情報:", data);
    animateNumber("#server-count", 22);

  // レスポンスの構造に合わせて修正
  if (data.success && data.data) {
    // 数値をアニメーションで表示
    animateNumber("#server-count", data.data.serverCount);
  } else {
    console.error("APIレスポンスの形式が期待と異なります:", data);
    document.getElementById("server-count").textContent = "N/A";
  }
  // animateNumber("#user-count", 1);
}

// 数値をアニメーションで表示する関数
function animateNumber(selector, targetNumber) {
  const element = document.querySelector(selector);
  const duration = 500; // 2秒
  const startTime = Date.now();

  function updateNumber() {
    const elapsed = Date.now() - startTime;
    const progress = Math.min(elapsed / duration, 1);

    // イージング関数
    const easeOut = 1 - Math.pow(1 - progress, 3);
    const currentNumber = Math.floor(targetNumber * easeOut);

    element.textContent = currentNumber.toLocaleString();

    if (progress < 1) {
      requestAnimationFrame(updateNumber);
    }
  }

  updateNumber();
}

// ページロード時に統計情報を取得
setTimeout(fetchBotStats, 1500); // ヒーローアニメーション後に開始

// ウィンドウリサイズ時の処理
window.addEventListener("resize", function () {
  ScrollTrigger.refresh();
});
