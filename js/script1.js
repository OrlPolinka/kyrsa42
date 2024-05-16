window.addEventListener("DOMContentLoaded", function() {

    const roulette = document.querySelector('.roulette .images');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    const numImages = roulette.children.length;
    const imageWidth = roulette.firstElementChild.clientWidth;
    let currentIndex = 0;
    let intervalId;

    // Функция для обновления ширины изображения и перерисовки рулетки
    function updateRouletteWidth() {
        const imageWidth = roulette.firstElementChild.clientWidth;
        roulette.style.transition = 'none'; // Отключаем переход для предотвращения анимации при изменении размеров
        roulette.style.transform = `translateX(-${currentIndex * imageWidth}px)`; // Перемещаем рулетку на текущий индекс
    }

    window.addEventListener('resize', updateRouletteWidth);
    
    prevBtn.addEventListener('click', function() {
        currentIndex = (currentIndex - 1 + numImages) % numImages;
        updateRoulette();
    });

    nextBtn.addEventListener('click', function() {
        currentIndex = (currentIndex + 1) % numImages; 
        updateRoulette();
    });

    function updateRoulette() {
        roulette.style.transition = 'transform 0.5s ease'; 
        roulette.style.transform = `translateX(-${currentIndex * imageWidth}px)`;
    }

    // Функция для автоматической прокрутки каждые 3 секунды
    function startAutoScroll() {
        intervalId = setInterval(function() {
            currentIndex = (currentIndex + 1) % numImages; 
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
