document.addEventListener("DOMContentLoaded", function () {
  // 스타일 자동 삽입
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

  // 배너 데이터
  const banners = [
    { url: "https://1bet1.one/", img: "https://imagedelivery.net/hn8cyNBhDj7fHt_rfVXsFQ/4f4a6af4-213f-4dd0-38e4-db20582f8c00/public" },
    { url: "https://winner1.site/", img: "https://imagedelivery.net/hn8cyNBhDj7fHt_rfVXsFQ/c517cdb9-359c-417e-2506-9e3c34382600/public" },
    { url: "https://lula.asia/", img: "https://imagedelivery.net/hn8cyNBhDj7fHt_rfVXsFQ/b3379438-2c35-4ba0-e4ef-a6ca90e6b100/public" },
    { url: "https://onetop.space/", img: "https://imagedelivery.net/hn8cyNBhDj7fHt_rfVXsFQ/ca17535c-ddac-4664-4dcd-da171cec5d00/public" }
  ];

  // DOM에 삽입
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
