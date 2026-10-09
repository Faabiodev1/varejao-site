const CAREERS_EMAIL = "";

const careersForm = document.querySelector("#careers-form");
const careersNote = document.querySelector("#careers-note");

careersForm.addEventListener("submit", (event) => {
    event.preventDefault();

    if (!CAREERS_EMAIL) {
        careersNote.textContent = "O recebimento de candidaturas ainda não foi configurado. Entre em contato com a equipe do Varejão para enviar seu cadastro.";
        return;
    }

    const formData = new FormData(careersForm);
    const subject = encodeURIComponent(`Candidatura — ${formData.get("name")}`);
    const body = encodeURIComponent(
        `Nome: ${formData.get("name")}\nE-mail: ${formData.get("email")}\nTelefone: ${formData.get("phone")}\nÁrea de interesse: ${formData.get("position")}\n\nSobre mim:\n${formData.get("message")}`
    );

    window.location.href = `mailto:${CAREERS_EMAIL}?subject=${subject}&body=${body}`;
});
