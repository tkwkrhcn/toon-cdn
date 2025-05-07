(function () {
  // 스타일 삽입 (문법 오류 수정 포함)
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
      background: #222;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
      text-align: center;
      padding-bottom: 10px;
    }
    .banner img {
      width: 100%;
      height: auto;
      display: block;
    }
    .banner a.banner-button {
      margin-top: 8px;
      display: inline-block;
      padding: 6px 12px;
      background: #ff4d4d;
      color: #fff;
      font-weight: bold;
      text-decoration: none;
      border-radius: 4px;
      font-size: 14px;
    }
    .banner-button:hover {
      background: #e60000;
    }
    @media (max-width: 768px) {
      .banner {
        flex: 0 1 calc(50% - 10px);
        max-width: calc(50% - 10px);
      }
    }
  `;
  document.head.appendChild(style);

  // 고정 배너
  const fixedBanners = [
    { url: "https://xn--p49al7tolbl8o8tj.com/", img: "https://imagedelivery.net/hn8cyNBhDj7fHt_rfVXsFQ/ff2d6728-7523-4452-bd48-ecdb8072a600/public" },
    { url: "https://xn--vy7ba476b.com/", img: "https://imagedelivery.net/hn8cyNBhDj7fHt_rfVXsFQ/c4352a78-3a5f-42ce-5255-5f9be9ced200/public" },
    { url: "https://xn--he5b11d80l.kr/", img: "https://imagedelivery.net/hn8cyNBhDj7fHt_rfVXsFQ/182b8e5f-e5b7-494b-dd67-d567235fad00/public" },
    { url: "https://xn--he5b11d80l.kr/", img: "https://imagedelivery.net/hn8cyNBhDj7fHt_rfVXsFQ/182b8e5f-e5b7-494b-dd67-d567235fad00/public" },
    { url: "https://xn--k01bo01c.com/", img: "https://imagedelivery.net/hn8cyNBhDj7fHt_rfVXsFQ/e7ffbf88-05fc-43cb-c033-2b0419995d00/public" }
  ];

  // 셔플 대상 배너
  const banners = [
    { url: "https://a8l-audi.com/", img: "https://imagedelivery.net/YBuUVvHrWBzVF83Na77hDQ/42adcbce-2231-4973-8e14-0ee48c8b3f00/public" },
    { url: "https://aha-bmw.com/", img: "https://imagedelivery.net/YBuUVvHrWBzVF83Na77hDQ/ef33775e-5535-44d3-7638-9e6a0eaf6b00/public" },
    { url: "https://1bet1.one/", img: "https://imagedelivery.net/hn8cyNBhDj7fHt_rfVXsFQ/4f4a6af4-213f-4dd0-38e4-db20582f8c00/public" },
    { url: "https://winner1.site/", img: "https://imagedelivery.net/hn8cyNBhDj7fHt_rfVXsFQ/c517cdb9-359c-417e-2506-9e3c34382600/public" },
    { url: "https://lula.asia/", img: "https://imagedelivery.net/hn8cyNBhDj7fHt_rfVXsFQ/b3379438-2c35-4ba0-e4ef-a6ca90e6b100/public" },
    { url: "https://onetop.space/", img: "https://imagedelivery.net/hn8cyNBhDj7fHt_rfVXsFQ/ca17535c-ddac-4664-4dcd-da171cec5d00/public" },
    { url: "https://xn--jp2bl9m0na51v.com/", img: "https://imagedelivery.net/hn8cyNBhDj7fHt_rfVXsFQ/3e2b4101-5992-47fa-3ed5-31aeb4f0df00/public" },
    { url: "http://rc337.com/", img: "https://imagedelivery.net/hn8cyNBhDj7fHt_rfVXsFQ/20199e87-2b76-4011-2412-fcb5c5164a00/public" },
    { url: "http://dg745.com/", img: "https://imagedelivery.net/hn8cyNBhDj7fHt_rfVXsFQ/ecf0c844-3ea7-48e1-d565-ba1cadf15900/public" }
  ];

  function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }
  shuffle(banners);

  const finalBanners = [...banners, ...fixedBanners];

  const bannerContainer = document.getElementById('banner-container');
  if (!bannerContainer) return;

  finalBanners.forEach(banner => {
    const div = document.createElement('div');
    div.className = 'banner';

    const imgLink = document.createElement('a');
    imgLink.href = banner.url;
    imgLink.target = "_blank";
    imgLink.rel = "nofollow noopener noreferrer";

    const img = document.createElement('img');
    img.src = banner.img;
    img.loading = "lazy";
    try {
      img.alt = new URL(banner.url).hostname;
    } catch {
      img.alt = "무료웹툰";
    }

    imgLink.appendChild(img);

    const btn = document.createElement('a');
    btn.href = banner.url;
    btn.target = "_blank";
    btn.rel = "nofollow noopener noreferrer";
    btn.className = 'banner-button';
    btn.textContent = '방문하기';

    div.appendChild(imgLink);
    div.appendChild(btn);
    bannerContainer.appendChild(div);
  });
})();
