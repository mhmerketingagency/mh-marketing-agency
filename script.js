// ==============================
// MH MARKETING AGENCY
// Premium JavaScript
// ==============================

// Smooth scroll for menu links
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));

        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Scroll animation
const observer = new IntersectionObserver((entries)=>{
    entries.forEach(entry=>{
        if(entry.isIntersecting){
            entry.target.classList.add("show");
        }
    });
});

document.querySelectorAll("section").forEach(section=>{
    section.classList.add("hidden");
    observer.observe(section);
});

// Contact Form
const form = document.querySelector("form");

if(form){

form.addEventListener("submit",function(e){

e.preventDefault();

alert("Thank you! Your request has been received. MH Marketing Agency will contact you soon.");

form.reset();

});

}
