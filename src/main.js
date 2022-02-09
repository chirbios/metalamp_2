import noUiSlider from 'nouislider';
import 'nouislider/dist/nouislider.css';

import './main.scss';
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
    start: [20, 80],
    connect: true,
    range: {
        'min': 0,
        'max': 100
    }
});


// datepicker

$(".datepicker").datepicker({
  minDate: 0,
  showOn: "button",
  buttonText: "expand_more",
  buttonImage: "https://www.pngmart.com/files/15/Vector-Arrow-Down-PNG-Picture.png",
  buttonImageOnly: true,
  showOtherMonths: true,
  selectOtherMonths: true,
  showButtonPanel: true,
  beforeShowDay: function(date) {
    var date1 = $.datepicker.parseDate($.datepicker._defaults.dateFormat, $("#input1").val());
    var date2 = $.datepicker.parseDate($.datepicker._defaults.dateFormat, $("#input2").val());
    return [true, date1 && ((date.getTime() == date1.getTime()) || (date2 && date >= date1 && date <= date2)) ? "dp-highlight" : ""];
  },
  onSelect: function(dateText, inst) {
    var date1 = $.datepicker.parseDate($.datepicker._defaults.dateFormat, $("#input1").val());
    var date2 = $.datepicker.parseDate($.datepicker._defaults.dateFormat, $("#input2").val());
            var selectedDate = $.datepicker.parseDate($.datepicker._defaults.dateFormat, dateText);

            
            if (!date1 || date2) {
      $("#input1").val(dateText);
      $("#input2").val("");
                $(this).datepicker();
            } else if( selectedDate < date1 ) {
                $("#input2").val( $("#input1").val() );
                $("#input1").val( dateText );
                $(this).datepicker();
            } else {
      $("#input2").val(dateText);
                $(this).datepicker();
    }
  }
});
  $( function() {
    $.extend($.datepicker,{_checkOffset:function(inst,offset,isFixed){return offset}});
    $( "#from, #to" ).datepicker({
      showOn: "button",
      buttonText: "expand_more",
      buttonImage: "https://www.pngmart.com/files/15/Vector-Arrow-Down-PNG-Picture.png",
      buttonImageOnly: true,
      showOtherMonths: true,
      selectOtherMonths: true,
      showButtonPanel: true,
      onSelect: function(dateText, inst) {
        var date1 = $.datepicker.parseDate($.datepicker._defaults.dateFormat, $("#input1").val());
        var date2 = $.datepicker.parseDate($.datepicker._defaults.dateFormat, $("#input2").val());
        var selectedDate = $.datepicker.parseDate($.datepicker._defaults.dateFormat, dateText);
    
    
        if (!date1 || date2) {
            $("#from").val(dateText);
            $("#to").val("");
            $(this).datepicker();
        } else if( selectedDate < date1 ) {
            $("#to").val( $("#from").val() );
            $("#from").val( dateText );
            $(this).datepicker();
        } else {
            $("#to").val(dateText);
            $(this).datepicker();
        }
      }
    });
      
    $.datepicker.regional['ru'] = {
      closeText: 'Закрыть',
      prevText: 'Предыдущий',
      nextText: 'Следующий',
      currentText: 'Сегодня',
      monthNames: ['Январь','Февраль','Март','Апрель','Май','Июнь','Июль','Август','Сентябрь','Октябрь','Ноябрь','Декабрь'],
      monthNamesShort: ['Янв','Фев','Мар','Апр','Май','Июн','Июл','Авг','Сен','Окт','Ноя','Дек'],
      dayNames: ['воскресенье','понедельник','вторник','среда','четверг','пятница','суббота'],
      dayNamesShort: ['вск','пнд','втр','срд','чтв','птн','сбт'],
      dayNamesMin: ['Вс','Пн','Вт','Ср','Чт','Пт','Сб'],
      weekHeader: 'Не',
      dateFormat: 'dd.mm.yy',
      firstDay: 1,
      isRTL: false,
      showMonthAfterYear: false,
      yearSuffix: ''
    };
      
      
    var dateFormat = "dd.mm.yy",
      from = $( "#from" )
      .datepicker({
        defaultDate: "+1w",
        changeMonth: true,
        numberOfMonths: 3
      })
      .on( "change", function() {
        to.datepicker( "option", "minDate", getDate( this ) );
      }),
      to = $( "#to" ).datepicker({
        defaultDate: "+1w",
        changeMonth: true,
        numberOfMonths: 3
      })
      .on( "change", function() {
      from.datepicker( "option", "maxDate", getDate( this ) );
    });
  
    function getDate( element ) {
      var date;
      try {
        date = $.datepicker.parseDate( dateFormat, element.value );
      } catch( error ) {
        date = null;
      }
  
      return date;
    }
    $.datepicker.setDefaults($.datepicker.regional['ru']);
  });


    
