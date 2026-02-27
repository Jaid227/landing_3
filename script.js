
// Scroll botón
function scrollToSection(id){
document.getElementById(id).scrollIntoView({behavior:'smooth'});
}

// Contadores animados
const counters = document.querySelectorAll('.counter');
counters.forEach(counter => {
counter.innerText = '0';
const updateCounter = () => {
const target = +counter.getAttribute('data-target');
const c = +counter.innerText;
const increment = target / 200;
if(c < target){
counter.innerText = `${Math.ceil(c + increment)}`;
setTimeout(updateCounter,10);
}else{
counter.innerText = target;
}
};
updateCounter();
});

// Modal imágenes
function openModal(src){
document.getElementById('modal').style.display="flex";
document.getElementById('modal-img').src=src;
}

function closeModal(){
document.getElementById('modal').style.display="none";
}

// FAQ
function toggleFAQ(btn){
const p = btn.nextElementSibling;
p.style.display = p.style.display === "block" ? "none" : "block";
}