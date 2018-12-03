import { createResultNodes } from './createNodes';

async function fetchNewsChannel({ channelName, sortBy = 'publishedAt', endpoint = 'everything', number = 10}) {
    if (!channelName) {
        return false;
    }

    const apiKey = 'afc39ad1a17c44038da1608b7110a0cf';

    const body = `${endpoint}?q=${channelName}&sortBy=${sortBy}&pageSize=${number}&apiKey=${apiKey}`;
    const url =  'https://newsapi.org/v2/';
    const fetch = FetchFactory.create('GET');

    const jsonData = await fetch.send(url+body);
    createResultNodes(jsonData);
}

class FetchFactory {
    constructor(request) {
        this.request = request;
    }

    static create(request) {
        this.request = request;
        return this;
    }

    static async send(url) {
        const response = await fetch(url, { method: this.request })
            .catch(async (error) => {
                const modalWindow = await import('./modal/modal');
                modalWindow.default.render(error);
            });
        return response.json();
    }
}

const FetchRequest = new Proxy(fetchNewsChannel, {
    apply: function(target, thisArg, argumentsList) {
        return target.apply(thisArg, argumentsList);
    }
});

export default FetchRequest;
