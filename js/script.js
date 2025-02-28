console.log('Hello world')
// import './scss/index.scss';

// Функция для установки высоты видимой области
// function setDynamicVH() {
//   const footerHeight = getComputedStyle(document.documentElement).getPropertyValue('--footer-height'); // Получаем высоту футера
//   const dynamicVH = window.innerHeight - parseFloat(footerHeight); // Вычисляем высоту без учета футера

//   // Устанавливаем кастомную переменную CSS
//   document.documentElement.style.setProperty('--dynamic-vh', `${dynamicVH}px`);
// }

// // Инициализация при загрузке страницы
// setDynamicVH();

// // Обработка изменения размеров окна
// window.addEventListener('resize', () => {
//   setDynamicVH();
// });

// // Обработка скролла для современных браузеров
// window.addEventListener('scroll', () => {
//   setDynamicVH();
// });