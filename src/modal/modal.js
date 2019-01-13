class ErrorModal {
    constructor() {
        this.body = document.querySelector('body');
    }

    createElement(elem, classes, attr) {
        const element = document.createElement(elem);

        if (classes && classes.length) {
            classes.forEach(item => element.classList.add(item));
        }
        if (attr && attr.length) {
            attr.forEach(item => element.setAttribute(item.name, item.value));
        }

        return element;
    }

    render(error) {
        const modal = this.createElement('div', ['modal']);
        const content = this.createElement('div', ['content']);
        const closeBtn = this.createElement('button');

        closeBtn.addEventListener('click', this.close.bind(this));
        closeBtn.textContent = 'Close';
        content.textContent = error;

        content.appendChild(closeBtn);
        modal.appendChild(content);
        this.body.appendChild(modal);
    }

    close() {
        const modal = document.querySelector('.modal');
        this.body.removeChild(modal);
    }
}

const erorModal = new ErrorModal();

Object.freeze(erorModal);

export default erorModal;