const items = document.querySelectorAll('.block__item');
const itemsActive = document.querySelectorAll('.block__item_active');
const itemDisabled = document.querySelectorAll('.block__item_disabled');
const blockSlogans = document.querySelectorAll('.block__slogan');
const arrSloganDisabled = [
	'Печалька, с фуа-гра закончился.',
	'Печалька, с рыбой закончился.',
	'Печалька, с курой закончился.',
];

document.addEventListener('DOMContentLoaded', function () {
	blockSlogans.forEach((item, index) => {
		if (item.classList.contains('block__slogan_disabled')) {
			item.textContent = arrSloganDisabled[index];
		}
	});
});

items.forEach((item, index) => {
	item.addEventListener('click', () => {
		addActiveClass(index);
	});
});

function addActiveClass(index) {
	items.forEach(item => item.classList.remove('block__item_active'));

	items[index].classList.add('block__item_active');

	removeSlogan();
	addSlogan(index);
}

function removeSlogan() {
	blockSlogans.forEach(slogan => {
		if (!slogan.classList.contains('block__slogan_disabled')) {
			slogan.innerHTML =
				'Чего сидишь? Порадуй котэ, <a class="block__link">купи.</a>';
		}
	});
}

function addSlogan(index) {
	const slogan = [
		'Печень утки разварная с артишоками.',
		'Головы щучьи с чесноком да свежайшая сёмгушка.',
		'Филе из цыплят с трюфелями в бульоне.',
	];

	blockSlogans[index].textContent = slogan[index];
}
