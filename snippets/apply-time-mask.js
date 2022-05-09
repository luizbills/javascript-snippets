// mask for time in format HH:MM
function applyTimeMask(input) {
    if (!input) return console.error('missing HTML Element');

    const callback = function (evt) {
        const target = evt.target;
        const value = target.value.replace(/[^0-9]/g, '');
        const parts = value.slice(0, 4).match(/.{1,2}/g);
        if (parts) {
            parts[0] = parts[0] <= 23 ? parts[0] : 23;
            if (parts.length > 1) {
                parts[1] = parts[1] <= 59 ? parts[1] : 59;
            }
        }
        target.value = parts ? parts.join(':') : '';
    }

    input.type = 'tel';
    input.addEventListener('input', callback);
    if (input.value) input.dispatchEvent(new window.Event('input'));
}
