import {createResultNodes} from './createNodes';

const fetchNewsChannel = ({ channelName, sortBy = 'publishedAt', endpoint = 'everything', number = 10}) => {
    if (!channelName) {
        return false;
    }

    const apiKey = 'afc39ad1a17c44038da1608b7110a0cf';

    const body = `${endpoint}?q=${channelName}&sortBy=${sortBy}&pageSize=${number}&apiKey=${apiKey}`;

    fetchNews('https://newsapi.org/v2/', body, 'get');
};


const checkResponse = (response) => {
    if (response.ok) {
        return response.json();
    }
    throw new Error('Network response was not ok.');
};


const fetchNews = async (url, body, method) => {
    let data;
    let jsonData;

    try {
        data = await fetch(`${url}${body}`, {
            method: method
        });
    } catch (e) {
        throw new Error(e);
    }

    jsonData = await checkResponse(data);
    createResultNodes(jsonData);
};

export default fetchNewsChannel;