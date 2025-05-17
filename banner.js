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
}`;
  document.head.appendChild(style);

  // 고정 순서 배너 리스트
  const banners = [
    { url: "https://benz-Sclass.com/", img: "https://imagedelivery.net/hn8cyNBhDj7fHt_rfVXsFQ/6ee90779-8035-4a00-fbb0-5f9477bf6700/public" },
    { url: "https://benz-Sclass.com/", img: "https://imagedelivery.net/hn8cyNBhDj7fHt_rfVXsFQ/6ee90779-8035-4a00-fbb0-5f9477bf6700/public" },
    { url: "https://aha-v500.com/", img: "https://imagedelivery.net/hn8cyNBhDj7fHt_rfVXsFQ/60f20e5f-c9a5-48fb-6352-b94a65860400/public" },
    { url: "https://aha-v500.com/", img: "https://imagedelivery.net/hn8cyNBhDj7fHt_rfVXsFQ/60f20e5f-c9a5-48fb-6352-b94a65860400/public" },
    { url: "https://joatoon68.com/", img: "https://imagedelivery.net/hn8cyNBhDj7fHt_rfVXsFQ/182b8e5f-e5b7-494b-dd67-d567235fad00/public" },
    { url: "https://joatoon68.com/", img: "https://imagedelivery.net/hn8cyNBhDj7fHt_rfVXsFQ/182b8e5f-e5b7-494b-dd67-d567235fad00/public" },
    { url: "https://xn--vy7ba476b.com/", img: "https://imagedelivery.net/hn8cyNBhDj7fHt_rfVXsFQ/c4352a78-3a5f-42ce-5255-5f9be9ced200/public" },
    { url: "https://xn--k01bo01c.com/", img: "https://imagedelivery.net/hn8cyNBhDj7fHt_rfVXsFQ/e7ffbf88-05fc-43cb-c033-2b0419995d00/public" }
  ];

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
