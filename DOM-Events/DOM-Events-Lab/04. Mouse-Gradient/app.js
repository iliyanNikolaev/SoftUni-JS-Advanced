function attachGradientEvents() {
    let divGradientElement = document.getElementById('gradient');

    let resultDivElement = document.getElementById('result');

    const gradientMousemoveHandler = (e) => {
        const maxWidth = e.target.clientWidth - 1;

        let currentWidth = e.offsetX;

        let percent = Math.trunc((currentWidth / maxWidth) * 100);

        resultDivElement.textContent = percent + '%';
    }

    const gradientMouseoutHandler = () => {
        resultDivElement.textContent = '';
    }

    divGradientElement.addEventListener('mousemove', gradientMousemoveHandler)
    divGradientElement.addEventListener('mouseout', gradientMouseoutHandler)
}