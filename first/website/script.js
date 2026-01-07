
 setInterval(() => {
    document.querySelectorAll('.card-blur').forEach(card => {
      card.style.filter = 'blur(4px)';
    });
  }, 1);
  
document.addEventListener("DOMContentLoaded", () => {
    const TOKEN_VALIDO = "irmaislonge2025";
    //const TOKEN_VALIDO = "Q15qxgcvQImhc1uDYwUIycyK5L3D01AW5cihRTzr3ViTxuVVWv8F13soryEYcYHV";
    const params = new URLSearchParams(window.location.search);
    const token = params.get("token");

    if (token !== TOKEN_VALIDO) {
        document.body.innerHTML = `
      <div style="
        background: black;
        color: red;
        height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 1.8rem;
        font-family: Arial, sans-serif;
        text-align: center;
        padding: 20px;
      ">
        ⛔ Acesso não autorizado
      </div>
    `;
        throw new Error("Token inválido");
    }
});

document.addEventListener("DOMContentLoaded", () => {
  const token = "irmaislonge2025";

  const menuHTML = `
    <nav class="food-nav">
      <nav class="global-menu jp-menu">
        <a href="index.html?token=${token}">Home</a>
        <a href="restaurante.html?token=${token}">Restaurantes</a>
        <a href="osaka.html?token=${token}">Osaka</a>
        <a href="nagano.html?token=${token}">Nagano</a>
        <a href="tokyo.html?token=${token}">Tokyo</a>
        <a href="teshima.html?token=${token}">Teshima</a>
        <a href="dicas.html?token=${token}">Dicas</a>
        <a href="bomau.html?token=${token}">Bom e Mau</a>
        <a href="mustgo.html?token=${token}">Must go</a>
      </nav>
    </nav>
  `;

  const container = document.getElementById("global-menu");
  if (container) {
    container.innerHTML = menuHTML;
  }
});

document.querySelectorAll('.insta-link').forEach(link => {
    const user = link.dataset.ig;

    // Deep links universais
    const iosURL = `instagram://user?username=${user}`;
    const androidURL = `intent://instagram.com/${user}#Intent;package=com.instagram.android;scheme=https;end`;
    const webURL = `https://www.instagram.com/${user}`;

    const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent);
    const isAndroid = /Android/.test(navigator.userAgent);

    link.addEventListener('click', e => {
        e.preventDefault();

        if (isIOS) {
            window.location = iosURL;
            setTimeout(() => window.open(webURL, "_blank"), 400);
        } else if (isAndroid) {
            window.location = androidURL;
            setTimeout(() => window.open(webURL, "_blank"), 400);
        } else {
            window.open(webURL, "_blank");
        }
    });
});



document.querySelectorAll('.address-link').forEach(link => {
    const address = encodeURIComponent(link.dataset.address);

    // Detecta iPhone / iOS
    const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent);

    // Define o link correto
    const url = isIOS ?
        `http://maps.apple.com/?q=${address}` :
        `https://www.google.com/maps?q=${address}`;

    link.setAttribute("href", url);
    link.setAttribute("target", "_blank");
});

document.querySelectorAll(".card").forEach(card => {
    card.addEventListener("click", () => {

        const popup = document.getElementById("card-popup");
        const popupCard = popup.querySelector(".popup-card");

        const imgSrc = card.querySelector("img")?.src || "";
        const title = card.querySelector("h2")?.outerHTML || "";
        const rating = card.querySelector(".rating")?.outerHTML || "";
        const tag = card.querySelector(".tag")?.outerHTML || "";
        const descShort = card.querySelector(".content p")?.outerHTML || "";
        const descExtra = card.querySelector(".card-extra")?.innerHTML || "";

        popupCard.innerHTML = `
      <button class="popup-close">✕</button>
      <div class="popup-photo"><img src="${imgSrc}"></div>
      <div class="popup-main">
        ${title}
        ${rating}
        ${tag}
        ${descShort}
      </div>
      <div class="popup-extra">${descExtra}</div>
    `;

        popup.classList.add("active");
        document.body.classList.add("popup-open");

        popupCard.querySelector(".popup-close").addEventListener("click", () => {
            popup.classList.remove("active");
            document.body.classList.remove("popup-open");
        });
    });
});

document.querySelector(".popup-bg").addEventListener("click", () => {
    document.getElementById("card-popup").classList.remove("active");
    document.body.classList.remove("popup-open");
});
document.querySelectorAll(".icon-row a").forEach(icon => {
    icon.addEventListener("click", e => {
        e.stopPropagation(); // impede abrir o popup
    });
});


