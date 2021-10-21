themeStylesheet = document.getElementById('theme-stylesheet');
themeToggler = document.getElementById('theme-toggler');

if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
	themePreference = 'dark';
}
if (window.matchMedia('(prefers-color-scheme: light)').matches) {
	themePreference = 'light';
}

setTheme(themePreference);

if (typeof(Storage) !== 'undefined') {
	if (localStorage.getItem('themePreference')) {
		themePreference = localStorage.getItem('themePreference');
		setTheme(themePreference);
	}
	themeToggler.onclick = function() {
		if (themePreference == 'dark') {
			themePreference = 'light';
		}
		else {
			themePreference = 'dark';
		}
		localStorage.setItem('themePreference', themePreference);
		setTheme(themePreference);
	};
}

function setTheme(themePreference) {
	if (themePreference == 'dark')
	{
		themeStylesheet.href = "css/dark-theme.css";
		themeToggler.innerHTML = '<button class="btn btn-light" id="theme-toggler"><i class="fas fa-sun"></i> Light Mode</button>';
	}
	else
	{
		themeStylesheet.href = "css/light-theme.css";
		themeToggler.innerHTML = '<button class="btn btn-dark" id="theme-toggler"><i class="fas fa-moon"></i> Dark Mode</button>';
	}
}