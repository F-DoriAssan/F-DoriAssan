// Iniciamos la AOS de animaciones
AOS.init();

// Scroll definido con Jquery y activamos clase spy
$(document).ready(function () {
  $("#menu").click(function () {
    $(this).toggleClass("fa-times");
    $(".navbar").toggleClass("nav-toggle");
  });

  $(window).on("scroll load", function () {
    $("#menu").removeClass("fa-times");
    $(".navbar").removeClass("nav-toggle");

    if (window.scrollY > 60) {
      document.querySelector("#scroll-top").classList.add("active");
    } else {
      document.querySelector("#scroll-top").classList.remove("active");
    }

    // scroll spy (para cada sección. Si se desplaza si hay más de una altura determinada)
    $("section").each(function () {
      let height = $(this).height();
      let offset = $(this).offset().top - 200;
      let top = $(window).scrollTop();
      let id = $(this).attr("id");

      if (top > offset && top < offset + height) {
        $(".navbar ul li a").removeClass("active");
        $(".navbar").find(`[href="#${id}"]`).addClass("active");
      }
    });
  });

  // Scroll suave
  $('a[href*="#"]').on("click", function (e) {
    e.preventDefault();
    $("html, body").animate(
      {
        scrollTop: $($(this).attr("href")).offset().top,
      },
      500,
      "linear"
    );
  });
});

//Realizamos un if por si el foco esta fuera de la ventana
document.addEventListener("visibilitychange", function () {
  if (document.visibilityState === "visible") {
    document.title = "Portfolio | Federico Dorigatti";
    $("#favicon").attr("href", "/images/favicon.png");
  } else {
    document.title = "Siga viendo el portafolio";
    $("#favicon").attr("href", "/images/favhand.png");
  }
});

// Efectos del texto de inicio
let typed = new Typed(".typing-text", {
  strings: [
    "diseño web",
    "desarrollo web",
    "desarrollo backend",
    "desarrollo fullstack",
    "Servidor/Cliente",
  ],
  loop: true,
  typeSpeed: 50,
  backSpeed: 25,
  backDelay: 500,
});
// <!-- fin del efecto de texto -->

// <!-- Inicio del efectos titulos -->
VanillaTilt.init(document.querySelectorAll(".tilt"), {
  max: 20,
  speed: 400,
});
// <!-- fin del efecto titl -->

// Inicio del loader
function loader() {
  document.querySelector(".loader-container").classList.add("fade-out");
}
function fadeOut() {
  setInterval(loader, 500);
}
window.onload = fadeOut;
// fin del loader

/* ===== Animaciones del scroll(Pagina completa)===== */
const srtop = ScrollReveal({
  origin: "top",
  distance: "80px",
  duration: 1000,
  reset: true,
});

/* SCROLL INICIO*/
srtop.reveal(".home .content h3", { delay: 200 });
srtop.reveal(".home .content p", { delay: 200 });
srtop.reveal(".home .content .btn", { delay: 200 });

srtop.reveal(".home .image", { delay: 400 });
srtop.reveal(".home .linkedin", { interval: 600 });
srtop.reveal(".home .github", { interval: 800 });
srtop.reveal(".home .twitter", { interval: 1000 });
srtop.reveal(".home .telegram", { interval: 600 });
srtop.reveal(".home .instagram", { interval: 600 });
srtop.reveal(".home .dev", { interval: 600 });

/* SCROLL PERFIL */
srtop.reveal(".about .content h3", { delay: 300 });
srtop.reveal(".about .content .tag", { delay: 400 });
srtop.reveal(".about .content p", { delay: 300 });
srtop.reveal(".about .content .box-container", { delay: 300 });
srtop.reveal(".about .content .resumebtn", { delay: 300 });

/* SCROLL HABILIDADES */
srtop.reveal(".skills .container", { interval: 200 });
srtop.reveal(".skills .container .bar", { delay: 400 });

/* SCROLL EDUCACION */
srtop.reveal(".education .box", { interval: 200 });

/* SCROLL PROYECTOS */
srtop.reveal(".work .box", { interval: 200 });

/* SCROLL EXPERIENCIA */
srtop.reveal(".experience .timeline", { delay: 400 });
srtop.reveal(".experience .timeline .container", { interval: 400 });

/* SCROLL CONTACTO */
srtop.reveal(".contact .container", { delay: 400 });
srtop.reveal(".contact .container .form-group", { delay: 400 });
