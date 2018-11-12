require('bootstrap');
import '../styles/index.scss';
import './scroll';

document.getElementById('channelForm').addEventListener('submit', choseChannel);

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
    console.log(data);

    node.children[0].innerHTML = data.title;
    node.children[1].innerHTML = data.description;
    node.children[4].innerHTML = data.author;
    node.children[5].innerHTML = data.publishedAt;

    document.getElementsByClassName('modal')[0].classList.toggle('fade');
};

const createResultNodes = ({ articles }) => {
    if (!articles) throw new Error('There is no data');

    const resultsSection = document.getElementsByClassName('search-results')[0];
    const newsBlock = document.getElementsByClassName('search-results__block')[0];

    resultsSection.style.display= 'block';

    fillTextBlock(newsBlock, articles[0]);
};

