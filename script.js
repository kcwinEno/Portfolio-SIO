// Animation au défilement (Scroll Reveal simple)
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        if (sectionTop < window.innerHeight - 100) {
            section.style.opacity = '1';
            section.style.transform = 'translateY(0)';
        }
    });
});

function openModal(modalId) {
    document.getElementById(modalId).style.display = "block";
    document.body.style.overflow = "hidden"; // Bloque le scroll
}

function closeModal(modalId) {
    document.getElementById(modalId).style.display = "none";
    document.body.style.overflow = "auto"; // Réactive le scroll
}

// Fermer si on clique à côté de la fenêtre
window.onclick = function(event) {
    if (event.target.classList.contains('modal')) {
        event.target.style.display = "none";
        document.body.style.overflow = "auto";
    }
}

// Sélection du bouton
const backToTopButton = document.getElementById("backToTop");

// Écoute du scroll
window.onscroll = function() {
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        backToTopButton.style.display = "block";
    } else {
        backToTopButton.style.display = "none";
    }
};

// Action au clic
backToTopButton.onclick = function() {
    window.scrollTo({
        top: 0,
        behavior: "smooth" // Remontée fluide
    });
};

function toggleContent(id, btn) {
    const content = document.getElementById(id);
    
    if (content.style.display === "none") {
        content.style.display = "block";
        btn.innerHTML = "👆 Réduire";
    } else {
        content.style.display = "none";
        btn.innerHTML = btn.id === "more-certifs" ? "👇 Afficher tout" : "➕ Lire la suite";
    }
}

function openLightbox(src) {
    document.getElementById("imgFull").src = src;
    document.getElementById("imageLightbox").style.display = "block";
    document.body.style.overflow = "hidden"; // Bloque le scroll derrière
}

function closeLightbox() {
    document.getElementById("imageLightbox").style.display = "none";
    document.body.style.overflow = "auto"; // Rend le scroll
}

console.log("Portfolio chargé avec succès - Candidat BTS SIO prêt !");
