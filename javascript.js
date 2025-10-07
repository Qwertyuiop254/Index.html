// ...existing code...
// preserved manual edits
console.log('Hello from javascript.js');

// Small site scripts: nav toggle, year, and contact form handling
document.addEventListener('DOMContentLoaded', function(){
	// Year in footer
	var yearEl = document.getElementById('year');
	if(yearEl) yearEl.textContent = new Date().getFullYear();

	// Mobile nav toggle
	var navToggle = document.getElementById('navToggle');
	var siteNav = document.getElementById('siteNav');
	if(navToggle && siteNav){
		navToggle.addEventListener('click', function(){
			siteNav.classList.toggle('open');
			var expanded = navToggle.getAttribute('aria-expanded') === 'true';
			navToggle.setAttribute('aria-expanded', String(!expanded));
		});
	}

	// Contact form simple validation and simulated submit
	var form = document.getElementById('contactForm');
	var msg = document.getElementById('formMessage');
	if(form){
		form.addEventListener('submit', function(e){
			e.preventDefault();
			var name = form.name.value.trim();
			var email = form.email.value.trim();
			var message = form.message.value.trim();
			if(!name || !email || !message){
				msg.textContent = 'Please fill out all fields.';
				msg.style.color = 'crimson';
				return;
			}
			// Simulate submit
			msg.textContent = 'Sending...';
			msg.style.color = 'black';
			setTimeout(function(){
				msg.textContent = 'Thanks, your message was sent (simulated).';
				msg.style.color = 'green';
				form.reset();
			}, 800);
		});
	}
});
