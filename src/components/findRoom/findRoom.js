//dropdown
'use strict';
$(document).ready(function dropdown() {
	let guestsNumber = $('.guests__number'),
	showDropDown = $('.js-show-drop-down'),
	blockDropDown = $('.drop-down'),
	inputArea = $('.input-area'),
	btnPlus = $('.js-plus-btn'),
	btnMinus = $('.js-minus-btn');

	showDropDown.on('click tap', () => {
		blockDropDown.toggle('show')
	});

	guestsNumber.each( (index, item) => {
		let dataValue = inputArea.attr('data-value');
	})

	inputArea.each( (index, item) => {
		item.innerHTML = $(item).attr('data-value')
	})

	btnPlus.on('click tap', function(){
		let inputArea = $(this).closest('.guests__field').find('.input-area');
		let dataValue = inputArea.attr('data-value');

		inputArea.attr('data-value', Number(dataValue) + 1);
		inputArea.text(Number(dataValue) + 1);
	})

	btnMinus.on('click tap', function(){
		let inputArea = $(this).closest('.guests__field').find('.input-area');
		let dataValue = inputArea.attr('data-value');

		inputArea.attr('data-value', Number(dataValue) - 1);
		inputArea.text(Number(dataValue) - 1);
	})
});


