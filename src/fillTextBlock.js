const fillTextBlock = (node, data) => {
    if (data.title) node.children[0].innerHTML = data.title;
    if (data.description) node.children[1].innerHTML = data.description;

    if (data.urlToImage) node.children[3].setAttribute('src', data.urlToImage);

    if (data.content) node.children[5].innerHTML = data.content;
    if (data.author) node.children[8].innerHTML = data.author;
    if (data.publishedAt) node.children[9].innerHTML = data.publishedAt;
    if (data.url) node.children[10].children[0].setAttribute('href', data.url);
};

export default fillTextBlock;