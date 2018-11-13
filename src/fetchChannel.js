import { createResultNodes } from './createNodes';

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

export default fetchNewsChannel;