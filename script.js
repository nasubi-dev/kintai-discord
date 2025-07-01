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
  try {
    console.log("API呼び出し開始...");

    // 複数のプロキシを試す
    const proxies = [
      "https://kintai-discord-v2.nasubi.dev/api/stats", // 直接
      "https://cors-anywhere.herokuapp.com/https://kintai-discord-v2.nasubi.dev/api/stats", // cors-anywhere
      "https://api.allorigins.win/get?url=" +
        encodeURIComponent("https://kintai-discord-v2.nasubi.dev/api/stats"), // allorigins
    ];

    let response;
    let lastError;

    for (let i = 0; i < proxies.length; i++) {
      try {
        console.log(`プロキシ ${i + 1} を試行中: ${proxies[i]}`);
        response = await fetch(proxies[i], {
          method: "GET",
          headers: {
            Accept: "*/*",
            "User-Agent": "Thunder Client (https://www.thunderclient.com)",
            "X-Requested-With": "XMLHttpRequest",
          },
        });

        if (response.ok) {
          console.log(`プロキシ ${i + 1} で成功`);
          break;
        }
      } catch (error) {
        console.log(`プロキシ ${i + 1} でエラー:`, error);
        lastError = error;
        continue;
      }
    }

    if (!response || !response.ok) {
      throw lastError || new Error("全てのプロキシで失敗");
    }

    console.log("レスポンス受信:", response);
    console.log("レスポンスステータス:", response.status);
    console.log("レスポンスOK:", response.ok);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    let data = await response.json();
    console.log("受信データ:", data);

    // alloriginsプロキシを使用した場合の処理
    if (data.contents) {
      data = JSON.parse(data.contents);
      console.log("パース後のデータ:", data);
    }

    console.log("Bot統計情報:", data);

    // レスポンスの構造に合わせて修正
    if (data.success && data.data) {
      console.log("サーバー数:", data.data.serverCount);
      // 数値をアニメーションで表示
      animateNumber("#server-count", data.data.serverCount);
    } else {
      console.error("APIレスポンスの形式が期待と異なります:", data);
      document.getElementById("server-count").textContent = "N/A";
    }
  } catch (error) {
    console.error("Bot統計情報の取得に失敗しました:", error);
    console.error("エラーの詳細:", error.message);
    console.error("エラーの種類:", error.name);
    console.error("エラーのスタック:", error.stack);
    document.getElementById("server-count").textContent = "N/A";
  }
}

// 数値をアニメーションで表示する関数
function animateNumber(selector, targetNumber) {
  const element = document.querySelector(selector);
  const duration = 2000; // 2秒
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
