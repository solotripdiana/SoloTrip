
 setInterval(() => {
    document.querySelectorAll('.card-blur').forEach(card => {
      card.style.filter = 'blur(4px)';
    });
  }, 1);


  document.addEventListener("DOMContentLoaded", () => {

  	const popup = document.getElementById("card-popup");
  	if (!popup) return;

  	const popupCard = popup.querySelector(".popup-card");
  	const popupBg = popup.querySelector(".popup-bg");
  	const closeBtn = popup.querySelector(".popup-close");

  	function openPopup(card) {
  		const clone = card.cloneNode(true);
  		clone.classList.remove("from-left", "from-right");

  		popupCard.querySelectorAll(".card").forEach(c => c.remove());
  		popupCard.appendChild(clone);

  		popup.classList.add("active");
  		document.body.classList.add("popup-open");
  	}

  	function closePopup() {
  		popup.classList.remove("active");
  		document.body.classList.remove("popup-open");
  	}

  	document.querySelectorAll(".popup-card-trigger").forEach(card => {
  		card.addEventListener("click", () => openPopup(card));
  	});

  	popupBg.addEventListener("click", closePopup);
  	closeBtn.addEventListener("click", closePopup);

  });



document.body.classList.remove("popup-open");
