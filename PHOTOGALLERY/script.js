const images = document.querySelectorAll(".gallery-item img");

const modal = document.getElementById("modal");

const modalImg = document.getElementById("modal-img");

const closeBtn = document.querySelector(".close");

/* Open Modal */

images.forEach(image => {

    image.addEventListener("click", () => {

        modal.style.display = "block";

        modalImg.src = image.src;

    });

});

/* Close Button */

closeBtn.addEventListener("click", () => {

    modal.style.display = "none";

});

/* Close Outside */

modal.addEventListener("click", () => {

    modal.style.display = "none";

});