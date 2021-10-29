let canvas, ctx;
let x = 0;

const resizeCanvas = () => {
    canvas.height = window.innerHeight;
    canvas.width = window.innerWidth;
};

const draw = () => {
    ctx.fillRect(0, 0, canvas.width, canvas.height)

    ctx.strokeStyle = '#ffffff'

    ctx.beginPath()
    ctx.arc(x, 100, 50, 0, Math.PI * 2)
    ctx.stroke()
}

const update = () => {
    x++
}

const step = () => {
    update()
    draw()
    window.requestAnimationFrame(step)
}

const init = () => {
    canvas = document.createElement('canvas');
    document.body.appendChild(canvas);
    ctx = canvas.getContext('2d');

    window.addEventListener('resize', resizeCanvas);

    resizeCanvas();

    step()
};

init();
