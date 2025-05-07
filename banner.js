<div id="banner-container">
  <!-- LCP 최적화: 미리 출력되는 2개 배너 -->
  <div class="banner">
    <a href="https://a8l-audi.com/" target="_blank" rel="nofollow noopener noreferrer">
      <img src="https://imagedelivery.net/YBuUVvHrWBzVF83Na77hDQ/42adcbce-2231-4973-8e14-0ee48c8b3f00/public" alt="a8l-audi.com" loading="eager">
    </a>
  </div>
  <div class="banner">
    <a href="https://aha-bmw.com/" target="_blank" rel="nofollow noopener noreferrer">
      <img src="https://imagedelivery.net/YBuUVvHrWBzVF83Na77hDQ/ef33775e-5535-44d3-7638-9e6a0eaf6b00/public" alt="aha-bmw.com" loading="eager">
    </a>
  </div>
</div>

<script>
(function () {
  // 스타일 삽입
  const style = document.createElement('style');
  style.textContent = `
    #banner-container {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      gap: 10px;
      padding: 10px;
      background-color: transparent;
    }
    .banner {
      flex: 0 1 calc(25% - 10px);
      max-width: calc(25% - 10px);
      box-sizing: border-box;
      border: 1px solid #444;
      border-radius: 8px;
      overflow: hidden;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
    }
    .banner img {
      width: 100%;
      height: auto;
      display: block;
    }
    .banner a {
      text-decoration: none;
      display: block;
    }
    @media (max-width: 768px) {
      .banner {
        flex: 0 1 calc(50% - 10px);
        max-width: calc(50% - 10px);
      }
    }
  `;
  document.head.appendChild(style);

  const additionalBanners = [
    { url: "https://1bet1.one/", img: "https://imagedelivery.net/hn8cyNBhDj7fHt_rfVXsFQ/4f4a6af4-213f-4dd0-38e4-db20582f8c00/public" },
    { url: "https://winner1.site/", img: "https://imagedelivery.net/hn8cyNBhDj7fHt_rfVXsFQ/c517cdb9-359c-417e-2506-9e3c34382600/public" },
    { url: "https://lula.asia/", img: "https://imagedelivery.net/hn8cyNBhDj7fHt_rfVXsFQ/b3379438-2c35-4ba0-e4ef-a6ca90e6b100/public" },
    { url: "https://onetop.space/", img: "https://imagedelivery.net/hn8cyNBhDj7fHt_rfVXsFQ/ca17535c-ddac-4664-4dcd-da171cec5d00/public" },
    { url: "https://xn--jp2bl9m0na51v.com/", img: "https://imagedelivery.net/hn8cyNBhDj7fHt_rfVXsFQ/3e2b4101-5992-47fa-3ed5-31aeb4f0df00/public" },
    { url: "http://rc337.com/", img: "https://imagedelivery.net/hn8cyNBhDj7fHt_rfVXsFQ/20199e87-2b76-4011-2412-fcb5c5164a00/public" },
    { url: "http://dg745.com/", img: "https://imagedelivery.net/hn8cyNBhDj7fHt_rfVXsFQ/ecf0c844-3ea7-48e1-d565-ba1cadf15900/public" },
    { url: "https://xn--p49al7tolbl8o8tj.com/", img: "https://imagedelivery.net/hn8cyNBhDj7fHt_rfVXsFQ/ff2d6728-7523-4452-bd48-ecdb8072a600/public" },
    { url: "https://xn--vy7ba476b.com/", img: "https://imagedelivery.net/hn8cyNBhDj7fHt_rfVXsFQ/c4352a78-3a5f-42ce-5255-5f9be9ced200/public" },
    { url: "https://xn--he5b11d80l.kr/", img: "https://imagedelivery.net/hn8cyNBhDj7fHt_rfVXsFQ/182b8e5f-e5b7-494b-dd67-d567235fad00/public" },
    { url: "https://xn--k01bo01c.com/", img: "https://imagedelivery.net/hn8cyNBhDj7fHt_rfVXsFQ/e7ffbf88-05fc-43cb-c033-2b0419995d00/public" }
  ];

  // 셔플 함수
  function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }

  shuffle(additionalBanners);
  const bannerContainer = document.getElementById('banner-container');
  if (bannerContainer) {
    additionalBanners.forEach((banner) => {
      const a = document.createElement('a');
      a.href = banner.url;
      a.target = "_blank";
      a.rel = "nofollow noopener noreferrer";

      const img = document.createElement('img');
      img.src = banner.img;
      img.loading = "lazy";
      try {
        img.alt = new URL(banner.url).hostname;
      } catch {
        img.alt = "무료웹툰";
      }

      const div = document.createElement('div');
      div.className = 'banner';

      a.appendChild(img);
      div.appendChild(a);
      bannerContainer.appendChild(div);
    });
  }
})();
</script>
