const links = document.querySelectorAll('a[href^="#"]'); // все ссылки, с атрибутом href, начинающимся с "#"
links.forEach(item => item.addEventListener('click',
 function(e) {
	e.preventDefault();
	const id = item.getAttribute('href').slice(1);

	document.getElementById(id).scrollIntoView({
		behavior: 'smooth',
		block: 'start'
	});
}));

