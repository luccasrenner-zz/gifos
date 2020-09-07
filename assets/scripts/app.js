import modules_export from './services/gifos.js';

const {
    getTrendings,
    searchGif
} = modules_export;

getTrendings();
searchGif('corazon');
