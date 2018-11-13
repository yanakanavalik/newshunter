import fillTextBlock from './fillTextBlock'

export const createResultNodes = ({ articles }) => {
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
    });

    resultsSection.style.display= 'block';
};
