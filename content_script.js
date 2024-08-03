new MutationObserver(() => {
    const footer = document.querySelector('.toast-notification__text');
    footer && footer.remove();
}).observe(document.body, { childList: true, subtree: true });