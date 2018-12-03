const isBrowserSupportsAllFeatures = () => {
    return window.Promise && window.fetch && window.Symbol;
};

export default isBrowserSupportsAllFeatures;