import $ from './core'; // делаем мы это для того чтобы мы могли дальше импортировать модули
import './modules/display'; 
import './modules/classes';
import './modules/handlers';
import './modules/attribute';
import './modules/actions';
import './modules/effects';
import './components/dropdown';
import './components/modal';
import './components/tab';
import './components/accordion';
import './components/carousel';

export default $;

// lib нужен чтобы обогить функции доллар различными методами (модулями)