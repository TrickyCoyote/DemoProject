window.addEventListener('DOMContentLoaded', () => {
    const replaceText = (selector: string, text: string | undefined) => {
        const element = document.querySelector(selector) as HTMLElement;
        if (element) {
            element.innerText = text ?? '';
        }
    };

    for (const dependency of ['chrome', 'node', 'electron']) {
        replaceText(`#${dependency}-version`, process.versions[dependency]);
    }
});
