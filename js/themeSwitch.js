lightThemeButton.addEventListener('click', () => {
	let href = './css/light.css';
	setLocalStorageTheme(href);
});

darkThemeButton.addEventListener('click', () => {
	let href = './css/black.css';
	setLocalStorageTheme(href);
});

const setLocalStorageTheme = (href) => {
	documentStylesLink.href = href;
	localStorage.setItem('style', JSON.stringify(href));
};
