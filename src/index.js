require('bootstrap');
import '../styles/index.scss';
import '../node_modules/babel-plugin-dual-import';

import choseChannel from './getFormData';
import sortBtnHandler from './sortBtnHandler';
import loadCSS from './loadCSS';

/** Set event listeners for fetch news channel*/
document.getElementById('channelForm').addEventListener('submit', choseChannel);