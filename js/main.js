const items = document.querySelectorAll('.block__item');
const slogan = document.querySelectorAll('.block__slogan');
const sloganArr = [
	'Печень утки разварная с артишоками.',
	'Головы щучьи с чесноком да свежайшая сёмгушка.',
	'Филе из цыплят с трюфелями в бульоне.',
];
const sloganDisabledArr = [
	'Печалька, с фуа-гра закончился.',
	'Печалька, с рыбой закончился.',
	'Печалька, с курой закончился.',
];

items.forEach((item, index) => {
	item.addEventListener('click', () => {
		toggleActiveCard(index);
	});
});

slogan.forEach((item, index) => {
	if (!slogan[index].classList.contains('block__slogan_disabled')) {
		item.addEventListener('click', e => {
			e.preventDefault();
			toggleActiveCard(index);
		});
	} else {
		slogan[index].innerHTML = sloganDisabledArr[index];
	}
});

function toggleActiveCard(index) {
	items[index].classList.toggle('block__item_active');

	if (items[index].classList.contains('block__item_active')) {
		slogan[index].textContent = sloganArr[index];
	} else {
		slogan[index].innerHTML =
			'Чего сидишь? Порадуй котэ, <a class="block__link">купи.</a>';
	}
}

console.log('Загрузилось!');
