import renderHeader from './components/header';
import renderMain from './components/main';
import renderFooter from './components/footer';

import 'bootstrap-icons/font/bootstrap-icons.css';
import './style.css';

document.addEventListener('DOMContentLoaded', function () {
	renderHeader();
	renderMain();
	renderFooter();
});
