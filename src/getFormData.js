import fetchNewsChannel from './fetchChannel';

const choseChannel = (e) => {
    e.preventDefault();
    localStorage.removeItem('chosen_channel');

    const formValue = document.getElementById('channelForm').elements;

    const channel = formValue[0].value;

    localStorage.setItem('chosen_channel', channel);

    fetchNewsChannel(channel);
};


export default choseChannel;