$(function() {
    var currentFloor = 2; //текущий этаж
    var floorPath = $('.home-item'); // векторный этаж на картинке
    var counterUp = $('.counter-button-up'); //кнопка увеличения этажа
    var counterDown = $('.counter-button-down'); // кнопка уменьшения этажа
    var modal = $('.modal'); // затемненная область 
    var modalCounter = $('.modal-counter'); // счетчик этажей в диалоговом окне
    var modalCloseButton = $('.modal-close-button'); 
    var viewFlatsButton = $('.view-button');
    var currentFlat = 40; // текущая квартира
    var flatsPath = $('.current-flat');
    var flatsLink = $('.flat-link');
    
    //функция при наведении курсора на ссылку
    $(flatsPath).on('mouseover', function() {
        currentFlat = $(this).attr('data-flat'); // получаем значение текущей квартиры с картинки
        flatsPath.removeClass('current-flat'); // убираем активный класс текущего этажа
        flatsLink.removeClass('current-flat-item');
        $(`[data-flat = ${currentFlat}]`).toggleClass('current-flat'); // текущая квартира подсвечивается 
        $(`[data-item = ${currentFlat}]`).toggleClass('current-flat-item'); // текущая ссылка подчеркивается и меняет цвет
    });
    
    $(flatsLink).on('click', function() {
        currentFlat = $(this).attr('data-item'); // получаем характеристики текущей ссылки на квартиру
        flatsPath.removeClass('current-flat'); // убираем активный класс текущего этажа
        flatsLink.removeClass('current-flat-item');
        $(`[data-flat = ${currentFlat}]`).toggleClass('current-flat'); // текущая квартира подсвечивается 
        $(`[data-item = ${currentFlat}]`).toggleClass('current-flat-item'); // текущая ссылка подчеркивается и меняет цвет   
    });
    
    // функция при наведении курсора на этаж
    $(floorPath).on('mouseover', function() {
        $(floorPath).removeClass('image-home-current-floor'); //удаляем активный класс у этажей
        currentFloor = $(this).attr('data-floor'); // получаем значение текущего этажа
        $('.counter').text(currentFloor); // выводим в счетчик цифру текущего этажа
    });
    
    //функция отслеживания клика по кнопке Вверх
    counterUp.on('click', function() {
        if (currentFloor < 18) {
        currentFloor++;
        usCurrentFloor = currentFloor.toLocaleString('en-US', {minimumIntegerDigits: 2,
        useGroupping: false });
      $('.counter').text(usCurrentFloor); // на счетчике выводится цифра текущего этажа
      $(floorPath).removeClass('image-home-current-floor'); // удаляем активный класс текущего этажа
      $(`[data-floor = ${usCurrentFloor}]`).toggleClass('image-home-current-floor'); 
      // извлекаем номер этажа и присваиваем ему класс текущего этажа
  }
    });
    
    // функция отслеживания клика по кнопке Вниз
    counterDown.on('click', function() {
        if (currentFloor > 2) {
            currentFloor--;
            usCurrentFloor = currentFloor.toLocaleString('en-US', {minimumIntegerDigits: 2,
        useGroupping: false });
        $('.counter').text(usCurrentFloor); // на счетчике выводится цифра текущего этажа
      $(floorPath).removeClass('image-home-current-floor'); // удаляем активный класс текущего этажа
      $(`[data-floor = ${usCurrentFloor}]`).toggleClass('image-home-current-floor'); 
      // извлекаем номер этажа и присваиваем ему класс текущего этажа
        }
    });
    
    floorPath.on('click', toggleModal); // при нажатии на этаж открывается модальное окно
    modalCloseButton.on('click', toggleModal); // при нажатии на крестик закрывается модальное окно
    viewFlatsButton.on('click', toggleModal); 
    // при нажатии на кнопку открывается модальное окно
    
     // функция переключения класса для открытия модального окна 
    function toggleModal() {
        modal.toggleClass('is-open');
        $(modalCounter).text(usCurrentFloor = currentFloor.toLocaleString('en-US', {minimumIntegerDigits: 2, useGroupping: false })); // в модальном окне меняется номер этажа
    }
   
});

