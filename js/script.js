
// Google Analytics Tag
(function() {
  var script = document.createElement("script");
  script.async = true;
  script.src = "https://www.googletagmanager.com/gtag/js?id=G-VPHHT30N5H";
  document.head.appendChild(script);

  script.onload = function() {
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-VPHHT30N5H');
  };
})();


$(function () {

  //ページ内スクロール
  var $nav = $(".header");

  $('a[href^="#"]').on("click", function () {
    var href = $(this).attr("href");
    var target = $(href == "#" || href == "" ? "html" : href);
    var position = target.offset().top;
    $("html, body").animate(
      {
        scrollTop: position,
      },
      300,
      "swing"
    );
    return false;
  });

  //ページトップ
  $("#js-page-top").on("click", function () {
    $("body,html").animate(
      {
        scrollTop: 0,
      },
      300
    );
    return false;
  });
});


// タブボタンをすべて取得
const tabButtons = document.querySelectorAll('.tab-button');
const tabPanels = document.querySelectorAll('.tab-panel');

tabButtons.forEach(button => {
  button.addEventListener('click', () => {
    // すべてのボタンとパネルから "active" を削除
    tabButtons.forEach(btn => btn.classList.remove('active'));
    tabPanels.forEach(panel => panel.classList.remove('active'));

    // クリックされたボタンと対応するパネルを "active" に
    button.classList.add('active');
    document.getElementById(button.dataset.target).classList.add('active');
  });
});
