require('bootstrap');
import '../styles/index.scss';

const prepareModal = (article) => {
    const setModal = () => {
        if (article.title) document.getElementById('contentModalTitle').innerHTML = article.title;
        if (article.content) document.getElementById('contentModalBody').innerHTML = article.content;
        if (article.url) document.getElementById('contentModalLink').setAttribute('href', article.url);
    };

    const btnToggleModals = document.getElementsByClassName('btn__modal-toggle');

    const btnsToggle = Array.from(btnToggleModals);

    btnsToggle.forEach( item => {
        item.addEventListener('click', setModal)
    });
};

const sortBtnHandler = (e) => {
    const value = e.target.value;

    fetchNewsChannel(sessionStorage.getItem('chosen_channel'), value)
};

document.getElementById('channelForm').addEventListener('submit', choseChannel);

const btnSort = document.getElementsByClassName('button-sort');

const buttons = Array.from(btnSort);

buttons.map( item => {
    item.addEventListener('click', sortBtnHandler)
});

function choseChannel(e) {
    e.preventDefault();
    sessionStorage.removeItem('chosen_channel');

    const formValue = document.getElementById('channelForm').elements;

    const channel = formValue[0].value;

    sessionStorage.setItem('chosen_channel', channel);

    fetchNewsChannel(channel);
}

const fetchNewsChannel = (channelName, sortBy='publishedAt', endpoint='everything', number=10) => {
    if (!channelName) {
        return false;
    }

    const apiKey = 'afc39ad1a17c44038da1608b7110a0cf';

    const body = `${endpoint}?q=${channelName}&sortBy=${sortBy}&pageSize=${number}&apiKey=${apiKey}`;

    fetch(`https://newsapi.org/v2/${body}`, {
        method: 'get'
    })
        .then(response => {
            if (response.ok) {
                return response.json();
            }
            throw new Error('Network response was not ok.');
        })
        .then( data => createResultNodes(data));
};

const fillTextBlock = (node, data) => {
    if (data.title) node.children[0].innerHTML = data.title;
    if (data.description) node.children[1].innerHTML = data.description;
    if (data.author) node.children[4].innerHTML = data.author;
    if (data.publishedAt) node.children[5].innerHTML = data.publishedAt;
};

const createResultNodes = ({ articles }) => {
    if (!articles) throw new Error('There is no data');

    let resultsSection = document.getElementsByClassName('search-results')[0];
    const newsBlock = document.getElementsByClassName('search-results__block')[0];

    while (resultsSection.children.length !== 3) {
        resultsSection.removeChild(resultsSection.lastChild);
    }

    articles.map( (article, i)=> {
        const cloneNewsBlock = newsBlock.cloneNode(true);

        if (i === 1) resultsSection.removeChild(newsBlock);

        resultsSection.appendChild(cloneNewsBlock);

        fillTextBlock(cloneNewsBlock, article);

        prepareModal(article);
    });

    resultsSection.style.display= 'block';
};
