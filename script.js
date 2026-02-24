function orderWA(produk) {
  var nomor = "6282284033320";
  var pesan = "Halo MAXXIPLUSS Perfume, saya ingin order: " + produk;
  window.open(
    "https://wa.me/" + nomor + "?text=" + encodeURIComponent(pesan),
    "_blank",
  );
}

particlesJS("particles-js", {
  particles: {
    number: { value: 80 },
    color: { value: "#ffffff" },
    shape: { type: "circle" },
    opacity: { value: 0.5 },
    size: { value: 3 },
    move: { enable: true, speed: 2 },
  },
});
// Navbar scroll effect
window.addEventListener("scroll", function () {
  document
    .querySelector(".navbar")
    .classList.toggle("scrolled", window.scrollY > 50);
});

// Mobile menu toggle
function toggleMenu() {
  document.querySelector(".nav-menu").classList.toggle("active");
}
