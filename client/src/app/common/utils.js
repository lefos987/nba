import moment from 'moment';

export let formatDate = (date, format) => moment(date).format(format);

export let capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1);