const choseChannel = (e) => {
    e.preventDefault();
    localStorage.removeItem('chosen_channel');

    require([
        "fetchChannel.js",
        "sortBtnHandler.js",
        "loadCSS.js"
    ], function (fetchNewsChannel, sortBtnHandler, loadCSS) {
        const fetchChannel = fetchNewsChannel.default;
        const sortButton = sortBtnHandler.default;
        const loadCSSHandler = loadCSS.default;
        const formValue = document.getElementById('channelForm').elements;
        const btnSort = document.getElementsByClassName('button-sort');
        const buttons = Array.from(btnSort);
        const channel = formValue[0].value;

        loadCSSHandler('search-results');

        localStorage.setItem('chosen_channel', channel);

        buttons.map( item => {
            item.addEventListener('click', sortButton)
        });

        fetchChannel({channelName:channel});
    });
};


export default choseChannel;