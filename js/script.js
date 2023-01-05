// Dynamic Year update
const yearEl = document.querySelector('.year');
const currentYear = new Date().getFullYear();
yearEl.textContent = currentYear;

// mobile nav
const btnNavEl = document.querySelector('.btn-mobile-nav');
const headerEl = document.querySelector('.header');

btnNavEl.addEventListener('click', function () {
	headerEl.classList.toggle('nav-open');
});

// smooth scrolling
const allLinks = document.querySelectorAll('a:link');
console.log(allLinks);

allLinks.forEach(function (link) {
	link.addEventListener('click', function (e) {
		e.preventDefault();

		const href = link.getAttribute('href');

		// scroll back to top
		if (href === '#')
			window.scrollTo({
				top: 0,
				behavior: 'smooth',
			});

		// scroll to section
		if (href !== '#' && href.startsWith('#')) {
			const sectionEl = document.querySelector(href);
			sectionEl.scrollIntoView({ behavior: 'smooth' });
		}

		// clos mobile nav
		if (link.classList.contains('main-nav-link'))
			headerEl.classList.toggle('nav-open');
	});
});
