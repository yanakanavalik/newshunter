require('bootstrap');
import '../styles/index.scss';

import choseChannel from './getFormData';
import { sortBtnHandler } from './sortBtnHandler';

/** Set event listeners for fetch news channel*/
document.getElementById('channelForm').addEventListener('submit', choseChannel);

/** Set event listeners for sorting buttons*/
const btnSort = document.getElementsByClassName('button-sort');

const buttons = Array.from(btnSort);

buttons.map( item => {
    item.addEventListener('click', sortBtnHandler)
});