const openLoginBtn = document.getElementById('open-login-btn');
const openRegisterBtn = document.getElementById('open-register-btn');
const closeLoginBtn = document.getElementById('close-login');
const closeRegisterBtn = document.getElementById('close-register');

const loginModal = document.getElementById('login-modal');
const registerModal = document.getElementById('register-modal');

const switchToRegister = document.getElementById('switch-to-register');
const switchToLogin = document.getElementById('switch-to-login');

function openModal(modal) {
    modal.style.visibility = 'visible';
    modal.style.opacity = '1';
}

function closeModal(modal) {
    modal.style.visibility = 'hidden';
    modal.style.opacity = '0';
}

openLoginBtn.addEventListener('click', () => {
    openModal(loginModal);
});

openRegisterBtn.addEventListener('click', () => {
    openModal(registerModal);
});

closeLoginBtn.addEventListener('click', () => closeModal(loginModal));
closeRegisterBtn.addEventListener('click', () => closeModal(registerModal));

switchToRegister.addEventListener('click', (e) => {
    e.preventDefault();
    closeModal(loginModal);
    openModal(registerModal);
});

switchToLogin.addEventListener('click', (e) => {
    e.preventDefault();
    closeModal(registerModal);
    openModal(loginModal);
});

window.addEventListener('click', (e) => {
    if (e.target === loginModal) closeModal(loginModal);
    if (e.target === registerModal) closeModal(registerModal);
});

const textChangeBtns = document.querySelectorAll('.text-change-btn');
textChangeBtns.forEach(btn => {
    btn.addEventListener('click', function(e) {
        if (this.textContent.includes("Tanlash") || this.textContent.includes("A'zo bo'lish")) {
            this.textContent = "Tanlandi ✓";
        } else if (this.textContent.includes("Dasturlar")) {
            this.textContent = "Ko'rilmoqda...";
        }
    });
});

document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert("Xabaringiz muvaffaqiyatli yuborildi!");
    this.reset();
});

document.getElementById('login-form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert("Tizimga muvaffaqiyatli kirdingiz!");
    closeModal(loginModal);
    this.reset();
});

document.getElementById('register-form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert("Muvaffaqiyatli ro'yxatdan o'tdingiz!");
    closeModal(registerModal);
    this.reset();
});

window.addEventListener("load", () => {
  const loader = document.querySelector(".loader");

  setTimeout(() => {
    loader.classList.add("loader-hidden");
  }, 1500);

  loader.addEventListener("transitionend", () => {
    document.body.removeChild(loader);
  });
});