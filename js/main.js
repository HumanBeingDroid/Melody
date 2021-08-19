$(function() {
    var currentFloor = 2; //текущий этаж
    var floorPath = $('.main__image-home path');
    var counterUp = $('.counter-button_up'); //кнопка увеличения этажа
    var counterDown = $('.counter-button_down'); // кнопка уменьшения этажа
    
    // функция при наведении курсора на этаж
    $(floorPath).on('mouseover', function() {
        $(floorPath).removeClass('main__image-home-current-floor'); //удаляем активный класс у этажей
        currentFloor = $(this).attr('data-floor'); // получаем значение текущего этажа
        $('.counter').text(currentFloor); 
    });
    
    //функция отслеживания клика по кнопке Вверх
    counterUp.on('click', function() {
        if (currentFloor < 18) {
        currentFloor++;
        usCurrentFloor = currentFloor.toLocaleString('en-US', {minimumIntegerDigits: 2,
        useGroupping: false });
      $('.counter').text(usCurrentFloor);
      $(floorPath).removeClass('main__image-home-current-floor');
      $(`[data-floor = ${usCurrentFloor}]`).toggleClass('main__image-home-current-floor');
  }
    // функция отслеживания клика по кнопке Вниз
    });
    counterDown.on('click', function() {
        if (currentFloor > 2) {
            currentFloor--;
            usCurrentFloor = currentFloor.toLocaleString('en-US', {minimumIntegerDigits: 2,
            useGroupping: false });
        $('.counter').text(usCurrentFloor);
        $(floorPath).removeClass('main__image-home-current-floor');
        $(`[data-floor = ${usCurrentFloor}]`).toggleClass('main__image-home-current-floor');
        }
    })
});


