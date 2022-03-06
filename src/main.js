'use strict';
import noUiSlider from 'nouislider';
import 'nouislider/dist/nouislider.css';
import arrowDown from './img/arrow_down.svg';
import './main.scss';
import dropdown from './components/findRoom/findRoom.js';

$(document).ready(function () {
	// Swiper
	const swiper = new Swiper(".swiper", {
	loop: true,
	navigation: {
		nextEl: ".swiper-button-next",
		prevEl: ".swiper-button-prev",
	},
	});
	//search room slider

	var slider = document.getElementById('slider');

	noUiSlider.create(slider, {
		start: [30, 70],
		connect: true,
		range: {
			'min': 0,
			'max': 100
		}
	});


	//datepicker



	var start_date = null, end_date = null;
	var timestamp_start_date = null, timestamp_end_date = null;
	var $input_start_date = null, $input_end_date = null;

	function getDateClass(date, start, end){
		if(end != null && start != null){
			if(date > start && date < end)
				return [ true, "sejour", "День" ];
		}
		
		if(date == start)
			return [ true, "start", "Прибытие" ];
		if(date == end)
			return [ true, "end", "Выезд" ];
		
		return false;
	}

	var options_start_date = {
		showAnim: false,
		constrainInput: true,
		numberOfMonths: 1,
		showOtherMonths: true,
		showButtonPanel: true,
		showOn: "button",
		buttonImage: arrowDown,
		buttonImageOnly: true,
		buttonText: "Select date",
		beforeShowDay: function(date){
			var timestamp_date = date.getTime();
			var result = getDateClass(timestamp_date, timestamp_start_date, timestamp_end_date);
			if(result != false)
				return result;
			
			return [true, "", ""];
		},
		onSelect: function(date_string, datepicker){
			start_date = $input_start_date.datepicker("getDate");
			timestamp_start_date = start_date.getTime();
		},
		onClose: function(){
			if(end_date != null){
				if(timestamp_start_date >= timestamp_end_date || end_date == null){
					$input_end_date.datepicker("setDate", null);
					end_date = null;
					timestamp_end_date = null;
					$input_end_date.datepicker("show");
					return;
				}
			}
			if(start_date != null && end_date == null)
				$input_end_date.datepicker("show");
		}
	};
	var options_end_date = {
		showAnim: false,
		constrainInput: true,
		numberOfMonths: 1,
		showOtherMonths: true,
		showButtonPanel: true,
		showOn: "button",
		buttonImage: arrowDown,
		buttonImageOnly: true,
		buttonText: "Select date",
		beforeShowDay: function(date){
			var timestamp_date = date.getTime();
			var result = getDateClass(timestamp_date, timestamp_start_date, timestamp_end_date);
			if(result != false)
				return result;
			
			return [ true, "", "Клик" ];
		},
		onSelect: function(date_string, datepicker){
			end_date = $input_end_date.datepicker("getDate");
			timestamp_end_date = end_date.getTime();
		},
		onClose: function(){
			if(end_date == null)
				return;
			
			if(timestamp_end_date <= timestamp_start_date || start_date == null){
				$input_start_date.datepicker("setDate", null);
				start_date = null;
				timestamp_start_date = null;
				$input_start_date.datepicker("show");
			}
		}
	};


	$input_start_date = jQuery("#start-date");
	$input_end_date = jQuery("#end-date");

	$input_start_date.datepicker(options_start_date);
	$input_end_date.datepicker(options_end_date);

	function get_days_difference(start_date, end_date){
		return Math.floor(end_date - start_date) / (1000*60*60*24);
	}

	( function( factory ) {
	"use strict";

		if ( typeof define === "function" && define.amd ) {

			define( [ "../widgets/datepicker" ], factory );
		} else {

			factory( jQuery.datepicker );
		}
	} )( function( datepicker ) {
	"use strict";

	datepicker.regional.ru = {
		closeText: "Применить",
		prevText: "&#x3C;Пред",
		nextText: "След&#x3E;",
		currentText: "Сегодня",
		monthNames: [ "Январь", "Февраль", "Март", "Апрель", "Май", "Июнь",
		"Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь" ],
		monthNamesShort: [ "Янв", "Фев", "Мар", "Апр", "Май", "Июн",
		"Июл", "Авг", "Сен", "Окт", "Ноя", "Дек" ],
		dayNames: [ "воскресенье", "понедельник", "вторник", "среда", "четверг", "пятница", "суббота" ],
		dayNamesShort: [ "вск", "пнд", "втр", "срд", "чтв", "птн", "сбт" ],
		dayNamesMin: [ "Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб" ],
		weekHeader: "Нед",
		dateFormat: "dd.mm.yy",
		firstDay: 1,
		isRTL: false,
		showMonthAfterYear: false,
		yearSuffix: "" };
	datepicker.setDefaults( datepicker.regional.ru );

	return datepicker.regional.ru;

	});

	

});




