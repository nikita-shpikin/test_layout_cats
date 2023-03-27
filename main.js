const itemsActive = document.querySelectorAll('.block__item_active');
const items = document.querySelectorAll('.block__item');
const blockSlogans = document.querySelectorAll('.block__slogan');

document.addEventListener('DOMContentLoaded', function () {
	itemsActive.forEach((item, index) => {
		addSlogan(index);
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
		slogan.innerHTML =
			'Чего сидишь? Порадуй котэ, <a class="block__link">купи.</a>';
	});
}

function addSlogan(index) {
	if (index === 0) {
		blockSlogans[index].textContent = 'Печень утки разварная с артишоками.';
	} else if (index === 1) {
		blockSlogans[index].textContent =
			'Головы щучьи с чесноком да свежайшая сёмгушка.';
	} else {
		blockSlogans[index].textContent = 'Филе из цыплят с трюфелями в бульоне.';
	}
}
