document.addEventListener('DOMContentLoaded', () => {
    const powerSelect = document.getElementById('watt');
    const minuteInput = document.getElementById('beforeMin');
    const secondInput = document.getElementById('beforeSec');
    const jouleSpan = document.getElementById('joule');
    const m500Span = document.getElementById('m500');
    const s500Span = document.getElementById('s500');
    const m600Span = document.getElementById('m600');
    const s600Span = document.getElementById('s600');
    const m1000Span = document.getElementById('m1000');
    const s1000Span = document.getElementById('s1000');

    function calculate() {
        const power = parseInt(powerSelect.value);
        const minutes = parseInt(minuteInput.value) || 0;
        const seconds = parseInt(secondInput.value) || 0;
        const totalSeconds = minutes * 60 + seconds;
        const joules = power * totalSeconds;

        jouleSpan.textContent = joules;

        const times = {
            500: joules / 500,
            600: joules / 600,
            1000: joules / 1000
        };

        const one2 = (num) => (num <= 9 ? `0${num}` : num);
        m500Span.textContent = one2(Math.floor(times[500] / 60));
        s500Span.textContent = one2(Math.floor(times[500] % 60));
        m600Span.textContent = one2(Math.floor(times[600] / 60));
        s600Span.textContent = one2(Math.floor(times[600] % 60));
        m1000Span.textContent = one2(Math.floor(times[1000] / 60));
        s1000Span.textContent = one2(Math.floor(times[1000] % 60));
    }

    powerSelect.addEventListener('change', calculate);
    minuteInput.addEventListener('input', calculate);
    secondInput.addEventListener('input', calculate);
});