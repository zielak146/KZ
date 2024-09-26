const navItems = document.querySelectorAll('.nav_item');
const navBtn = document.querySelector('.burger-btn');
const navBar = document.querySelector('.nav');
const arrowUp = document.querySelector('.arrow-up');

const handleNav = () => {
	navBar.classList.toggle('active');
	navItems.forEach((item) => {
		item.addEventListener('click', () => {
			navBar.classList.remove('active');
		});
	});
	handleNavAnimation();
};

navBtn.addEventListener('click', handleNav);

const handleNavAnimation = () => {
	let time = `0`;
	navItems.forEach((item) => {
		item.classList.toggle('nav-items-animation');
		item.style.animationDelay = `.${time}s`;
		time++;
	});
};

const hiddenElements = document.querySelectorAll('.hidden');

const observer = new IntersectionObserver((entries) => {
	entries.forEach((entry) => {
		if (entry.isIntersecting) {
			entry.target.classList.add('show');
		} else {
			entry.target.classList.remove('show');
		}
	});
});

hiddenElements.forEach((el) => observer.observe(el));

// const btn = document.querySelector('.btn');

// const btnAnimation = (e) => {
// 	const y = e.clientY;
// 	const x = e.clientX;

// 	const innerY = e.target.offsetTop;
// 	const innerX = e.target.offsetLeft;

// 	const top = y - innerY;
// 	const left = x - innerX;
// 	const circle = document.createElement('span');
// 	circle.classList.add('circle');
// 	circle.style.top = `${top}px`;
// 	circle.style.left = `${left}px`;
// 	e.target.appendChild(circle);
// };

// btn.addEventListener('click', btnAnimation);

const headerHeading = document.querySelector('.header-heading');
let inputValue = `Websites tailored to your business. `;
let timeout;
let index = 0;
let speed = 70;
let startDelay = 700;

const writingAnimation = () => {
	headerHeading.innerHTML = inputValue.slice(0, index);
	headerHeading.classList.add('fade-in');
	index++;
	if (index > inputValue.length) return;
	const randomSpeed = speed + Math.random() * 100;
	setTimeout(writingAnimation, randomSpeed);
};

const addCursor = () => {
	const cursor = document.createElement('span');
	cursor.classList.add('cursor');
	headerHeading.appendChild(cursor);
};

// Start typing with a delay
setTimeout(() => {
	addCursor(); // Add the cursor before starting typing
	writingAnimation();
}, startDelay);

//ACCORDION
const accordion = document.querySelector('.accordion');
const accordionBtns = document.querySelectorAll('.accordion-btn');

function openAccordionItems() {
	if (this.nextElementSibling.classList.contains('active')) {
		this.nextElementSibling.classList.remove('active');
	} else {
		closeAccordionItem();
		this.nextElementSibling.classList.toggle('active');
	}
}

const closeAccordionItem = () => {
	const allActiveItems = document.querySelectorAll('.accordion-info');
	allActiveItems.forEach((item) => item.classList.remove('active'));
};

const clickOutsideAccordion = (e) => {
	if (
		e.target.classList.contains('accordion-btn') ||
		e.target.classList.contains('accordion-info') ||
		e.target.classList.contains('accordion-info-text')
	)
		return;

	closeAccordionItem();
};
accordionBtns.forEach((btn) =>
	btn.addEventListener('click', function () {
		console.log('Accordion button clicked:', this);
		openAccordionItems.call(this);
	})
);

window.addEventListener('click', clickOutsideAccordion);

//FOOTER YEAR

const footerYear = document.querySelector('.footer__year');
const handleCurrentYear = () => {
	const year = new Date().getFullYear();
	footerYear.innerText = year;
};

handleCurrentYear();

let scrollPos = 100;


function checkPosition() {
	if (window.scrollY > 0) {
		// User is scrolling away from the top
		navBtn.classList.add('btn-bg');
	} else {
		// User is at the top of the page
		navBtn.classList.remove('btn-bg');
	}
}

window.addEventListener('scroll', checkPosition);

