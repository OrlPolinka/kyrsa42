window.addEventListener("DOMContentLoaded", function() {

    const roulette = document.querySelector('.roulette .images');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    const numImages = roulette.children.length; // Общее количество изображений
    const imageWidth = roulette.firstElementChild.clientWidth; // Ширина каждого изображения
    let currentIndex = 0;
    let intervalId; // Идентификатор интервала для автоматической прокрутки

    // Функция для обновления ширины изображения и перерисовки рулетки
    function updateRouletteWidth() {
        const imageWidth = roulette.firstElementChild.clientWidth; // Получаем ширину каждого изображения
        roulette.style.transition = 'none'; // Отключаем переход для предотвращения анимации при изменении размеров
        roulette.style.transform = `translateX(-${currentIndex * imageWidth}px)`; // Перемещаем рулетку на текущий индекс
    }

    window.addEventListener('resize', updateRouletteWidth); // Добавляем обработчик события изменения размера окна
    
    prevBtn.addEventListener('click', function() {
        currentIndex = (currentIndex - 1 + numImages) % numImages; // Обновляем индекс с учетом зацикливания
        updateRoulette();
    });

    nextBtn.addEventListener('click', function() {
        currentIndex = (currentIndex + 1) % numImages; // Обновляем индекс с учетом зацикливания
        updateRoulette();
    });

    function updateRoulette() {
        roulette.style.transition = 'transform 0.5s ease'; // Устанавливаем переход для плавного перемещения
        roulette.style.transform = `translateX(-${currentIndex * imageWidth}px)`;
    }

    // Функция для автоматической прокрутки каждые 3 секунды
    function startAutoScroll() {
        intervalId = setInterval(function() {
            currentIndex = (currentIndex + 1) % numImages; // Прокручиваем к следующему изображению
            updateRoulette();
        }, 3000); // Каждые 3 секунды
    }

    function stopAutoScroll() {
        clearInterval(intervalId);
    }

    // Запускаем автоматическую прокрутку при загрузке страницы
    startAutoScroll();


    prevBtn.addEventListener('mouseenter', stopAutoScroll);
    prevBtn.addEventListener('mouseleave', startAutoScroll);

    nextBtn.addEventListener('mouseenter', stopAutoScroll);
    nextBtn.addEventListener('mouseleave', startAutoScroll);

});
