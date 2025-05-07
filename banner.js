document.addEventListener("DOMContentLoaded", function () {
  // 스타일 삽입 + CLS 최적화
  const style = document.createElement('style');
  style.textContent = `
#banner-container {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  justify-content: center;
  padding: 10px;
  background-color: transparent;
}

.banner {
  flex: 0 1 calc(25% - 10px);
  max-width: calc(25% - 10px);
  border: 1px solid #444;
  border-radius: 8px;
  background: #222;
  box-sizing: border-box;
  box-shadow: 0 2px 4px rgba(0,0,0,0.5);
  height: auto;
  overflow: hidden;
}

.banner img {
  display: block;
  width: 100%;
  height: auto;
}
@media (max-width: 768px) {
  .banner {
    flex: 0 1 calc(50% - 10px);
    max-width: calc(50% - 10px);
  }
}
  `;
  document.head.appendChild(style);

  // 전체 배너 리스트
  const banners = [
    { url: "https://1bet1.one/", img: "https://imagedelivery.net/hn8cyNBhDj7fHt_rfVXsFQ/4f4a6af4-213f-4dd0-38e4-db20582f8c00/public" },
    { url: "https://winner1.site/", img: "https://imagedelivery.net/hn8cyNBhDj7fHt_rfVXsFQ/c517cdb9-359c-417e-2506-9e3c34382600/public" },
    { url: "https://lula.asia/", img: "https://imagedelivery.net/hn8cyNBhDj7fHt_rfVXsFQ/b3379438-2c35-4ba0-e4ef-a6ca90e6b100/public" },
    { url: "https://onetop.space/", img: "https://imagedelivery.net/hn8cyNBhDj7fHt_rfVXsFQ/ca17535c-ddac-4664-4dcd-da171cec5d00/public" },
    { url: "https://xn--jp2bl9m0na51v.com/", img: "https://imagedelivery.net/hn8cyNBhDj7fHt_rfVXsFQ/3e2b4101-5992-47fa-3ed5-31aeb4f0df00/public" },
    { url: "https://xn--p49al7tolbl8o8tj.com/", img: "https://imagedelivery.net/hn8cyNBhDj7fHt_rfVXsFQ/ff2d6728-7523-4452-bd48-ecdb8072a600/public" },
    { url: "https://xn--vy7ba476b.com/", img: "https://imagedelivery.net/hn8cyNBhDj7fHt_rfVXsFQ/c4352a78-3a5f-42ce-5255-5f9be9ced200/public" },
    { url: "https://xn--he5b11d80l.kr/", img: "https://imagedelivery.net/hn8cyNBhDj7fHt_rfVXsFQ/182b8e5f-e5b7-494b-dd67-d567235fad00/public" },
    { url: "https://xn--k01bo01c.com/", img: "https://imagedelivery.net/hn8cyNBhDj7fHt_rfVXsFQ/e7ffbf88-05fc-43cb-c033-2b0419995d00/public" }
  ];

  // 🔁 랜덤 섞기
  function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }
  shuffle(banners);

  // 삽입
  const container = document.getElementById('banner-container');
  if (!container) return;

  banners.forEach(b => {
    const div = document.createElement('div');
    div.className = 'banner';

    const a = document.createElement('a');
    a.href = b.url;
    a.target = "_blank";
    a.rel = "nofollow noopener noreferrer";

    const img = document.createElement('img');
    img.src = b.img;
    img.alt = new URL(b.url).hostname;
    img.width = 320;
    img.height = 160;
    img.loading = "lazy";

    a.appendChild(img);
    div.appendChild(a);
    container.appendChild(div);
  });
});
