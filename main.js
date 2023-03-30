const items = document.querySelectorAll('.block__item');
const itemsActive = document.querySelectorAll('.block__item_active');
const itemDisabled = document.querySelectorAll('.block__item_disabled');
const blockSlogans = document.querySelectorAll('.block__slogan');
let blockLinks = document.querySelectorAll('.block__link');
const arrSloganDisabled = [
	'Печалька, с фуа-гра закончился.',
	'Печалька, с рыбой закончился.',
	'Печалька, с курой закончился.',
];
const slogan = [
	'Печень утки разварная с артишоками.',
	'Головы щучьи с чесноком да свежайшая сёмгушка.',
	'Филе из цыплят с трюфелями в бульоне.',
];

document.addEventListener('DOMContentLoaded', function () {
	blockSlogans.forEach((item, index) => {
		if (item.classList.contains('block__slogan_disabled')) {
			item.textContent = arrSloganDisabled[index];
		}
	});

	linkAddActive();
});

items.forEach((item, index) => {
	item.addEventListener('click', () => {
		if (!item.classList.contains('block__item_active')) {
			addActiveClass(index);
			linkAddActive();
		} else {
			removeActiveClass(index);
		}
	});
});

function linkAddActive() {
	blockLinks.forEach((link, inLink) => {
		link.addEventListener('click', e => {
			e.preventDefault();
			addActiveClass(inLink);
		});
	});
}

function addActiveClass(index) {
	items[index].classList.add('block__item_active');

	addSlogan(index);
}

function addSlogan(index) {
	blockSlogans[index].animate([{ opacity: '0' }, { opacity: '1' }], {
		duration: 500,
	});

	blockSlogans[index].textContent = slogan[index];
}

function removeActiveClass(index) {
	items[index].classList.remove('block__item_active');

	removeSlogan(index);
}

function removeSlogan(index) {
	if (!blockSlogans[index].classList.contains('block__slogan_disabled')) {
		blockSlogans[index].innerHTML =
			'Чего сидишь? Порадуй котэ, <a class="block__link">купи.</a>';

		blockLinks = document.querySelectorAll('.block__link');
		linkAddActive();
	}
}
