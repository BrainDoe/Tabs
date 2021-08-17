function setUpTabs() {
	document.querySelectorAll('.tabs-button').forEach(button => {
		button.addEventListener('click', () => {
			const sideBar = button.parentElement;
			const tabsContainer = sideBar.parentElement;
			const tabNumber = button.dataset.forTab;
			tabToActivate = tabsContainer.querySelector(`.tabs-content[data-tab="${tabNumber}"]`);

			sideBar.querySelectorAll('.tabs-button').forEach(button => {
				button.classList.remove('tabs-button-active');
			});

			tabsContainer.querySelectorAll('.tabs-content').forEach(tab => {
				tab.classList.remove('tabs-content-active');
			});


			button.classList.add('tabs-button-active');
			tabToActivate.classList.add('tabs-content-active');

			// document.querySelectorAll('.tabs').forEach(tabsContainer => {
			// 	tabsContainer.querySelector('.tabs-sidebar .tabs-button').click();
			// });
		});
	});
}

document.addEventListener('DOMContentLoaded', () => {
	setUpTabs();
});