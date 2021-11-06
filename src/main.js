let canvas, ctx;

const mouseCoordinates = Object.seal({
    x: window.innerWidth / 2,
    y: window.innerHeight / 2
})

const getMouseCoordinates = e => {
    mouseCoordinates.x = e.clientX;
    mouseCoordinates.y = e.clientY;
};

const resizeCanvas = () => {
    canvas.height = window.innerHeight;
    canvas.width = window.innerWidth;
};

const draw = () => {
    ctx.fillRect(0, 0, canvas.width, canvas.height)

    ctx.strokeStyle = '#ffffff'

    ctx.beginPath()
    ctx.arc(
        mouseCoordinates.x,
        mouseCoordinates.y,
        50,
        0,
        Math.PI * 2
    )
    ctx.stroke()
};

const step = () => {
    draw()
    window.requestAnimationFrame(step)
};

const init = () => {
    canvas = document.createElement('canvas');
    document.body.appendChild(canvas);
    ctx = canvas.getContext('2d');

    window.addEventListener('resize', resizeCanvas);
    window.addEventListener('mousemove', getMouseCoordinates);

    resizeCanvas();

    step()
};

init();
