import moment from 'moment';

export let formatDate = (date, format, uiFriendly) => {
    if (uiFriendly) {
        if (moment().isSame(date, 'day')) {
            return 'Today';
        }
        else if (moment().subtract(1, 'days').isSame(date, 'day')) {
            return 'Yesterday';
        }
    }
    return moment(date).format(format);
};

export let capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1);