import './styles/styles.scss';

const appInit = () => {
    console.log('ElectronDemoApp initialized');
    const test = 'testing linting';
};

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        appInit();
    });
} else {
    appInit();
}
