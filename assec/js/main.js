let navBtn = document.querySelector('.nav-btn');
const mobileNav = document.querySelector('.mobile-nav');

navBtn.addEventListener('click', () => {
	console.log('click');
	mobileNav.classList.toggle('mobile-nav-active');
	navBtn.classList.toggle('nav-btn-close');
});


const scrIntoView = document.querySelector('.hero')
scrIntoView.addEventListener('click', (e) => {
	e.preventDefault();
	scrollView();
})

function scrollView() {
	const scrollMeButton = document.querySelector('.footer-copyright-descrip');
	scrollMeButton.scrollIntoView({
		block: "center",
		inline: 'nearest',
		behavior: "smooth"
	})
}