const CONTACT_EMAIL = "";

const menuToggle = document.querySelector(".menu-toggle");
const navigation = document.querySelector(".primary-navigation");
const productGrid = document.querySelector(".product-grid");
const contactForm = document.querySelector("#contact-form");
const messageField = document.querySelector("#message");
const formNote = document.querySelector("#form-note");

function setMenuOpen(isOpen) {
    menuToggle.setAttribute("aria-expanded", String(isOpen));
    menuToggle.setAttribute("aria-label", isOpen ? "Fechar menu" : "Abrir menu");
    navigation.classList.toggle("is-open", isOpen);
}

menuToggle.addEventListener("click", () => {
    setMenuOpen(menuToggle.getAttribute("aria-expanded") !== "true");
});

navigation.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => setMenuOpen(false));
});

productGrid.addEventListener("click", (event) => {
    if (!(event.target instanceof Element)) {
        return;
    }

    const productLink = event.target.closest("[data-product]");
    if (productLink) {
        messageField.value = `Olá! Gostaria de saber mais sobre ${productLink.dataset.product}.`;
    }
});

contactForm.addEventListener("submit", (event) => {
    event.preventDefault();

    if (!CONTACT_EMAIL) {
        formNote.textContent = "Configure o e-mail de atendimento em CONTACT_EMAIL no arquivo script.js.";
        return;
    }

    const formData = new FormData(contactForm);
    const subject = encodeURIComponent(`Contato pelo site — ${formData.get("name")}`);
    const body = encodeURIComponent(
        `Nome: ${formData.get("name")}\nE-mail: ${formData.get("email")}\n\nMensagem:\n${formData.get("message")}`
    );

    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
});

document.querySelector("#current-year").textContent = new Date().getFullYear();
