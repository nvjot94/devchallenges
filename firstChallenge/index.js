const toggleMode = () => {

	if (localStorage.getItem('isDarkModeActivated') == 'true') {
		//deactivate dark mode
		document.documentElement.setAttribute('data-theme', 'light');
		localStorage.setItem('isDarkModeActivated', 'false');
	} else {
		//activate dark mode
		document.documentElement.setAttribute('data-theme', 'dark');
		localStorage.setItem('isDarkModeActivated', 'true');
	}
};

const setCurrent=()=>{
	localStorage.getItem('isDarkModeActivated') == 'true'?
	document.documentElement.setAttribute('data-theme', 'dark'):
	document.documentElement.setAttribute('data-theme', 'light');
}

const bindEvents = () => {
	document
		.querySelector('.dark-mode')
		.addEventListener('click', toggleMode);
	localStorage.isDarkModeActivated = localStorage.length
		? localStorage.isDarkModeActivated
		: 'false';
		setCurrent();
};


window.addEventListener('load', bindEvents);
