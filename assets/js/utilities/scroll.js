/**
 * Animações de Scroll e Interações da Navbar
*/

document.addEventListener("DOMContentLoaded", () => {
  // -------------------------------------------------------------------------
  // 1. REVELAÇÃO DE ELEMENTOS AO ROLAR A PÁGINA (SCROLL REVEAL)
  // -------------------------------------------------------------------------
  const elementsToReveal = document.querySelectorAll(".reveal-on-scroll");

  if ("IntersectionObserver" in window) {
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.15 // Dispara quando 15% do elemento estiver visível
    };

    const scrollObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          // Para de observar após revelar uma vez
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    elementsToReveal.forEach((el) => scrollObserver.observe(el));
  } else {
    // Fallback para navegadores legados
    elementsToReveal.forEach((el) => el.classList.add("is-visible"));
  }

  // -------------------------------------------------------------------------
  // 2. ROLAGEM SUAVE AO CLICAR EM LINKS ÂNCORA (#)
  // -------------------------------------------------------------------------
  const anchorLinks = document.querySelectorAll('a[href^="#"]');

  anchorLinks.forEach((link) => {
    link.addEventListener("click", function (event) {
      const targetId = this.getAttribute("href");
      if (targetId === "#") return;

      const targetSection = document.querySelector(targetId);
      if (targetSection) {
        event.preventDefault();
        targetSection.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });
      }
    });
  });

  // -------------------------------------------------------------------------
  // 3. ATUALIZAÇÃO DO LINK ATIVO NA NAVBAR CONFORME A SEÇÃO VISÍVEL
  // -------------------------------------------------------------------------
  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll(".nav-menu .nav-link");

  window.addEventListener("scroll", () => {
    let currentSectionId = "";
    const scrollPosition = window.pageYOffset + 120; // Offset para o cabeçalho

    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;

      if (
        scrollPosition >= sectionTop &&
        scrollPosition < sectionTop + sectionHeight
      ) {
        currentSectionId = section.getAttribute("id");
      }
    });

    navLinks.forEach((link) => {
      link.classList.remove("active");
      if (link.getAttribute("href") === `#${currentSectionId}`) {
        link.classList.add("active");
      }
    });
  });
});