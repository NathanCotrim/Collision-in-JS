let canvas, ctx;

const resizeCanvas = () => {
    canvas.height = window.innerHeight;
    canvas.width = window.innerWidth;
};

const draw = () => {
    ctx.fillStyle = '#00ff00'
    ctx.fillRect(0, 0, 50, 35)

    ctx.fillStyle = '#0000ff'
    ctx.fillRect(120, 200, 50, 35)

    ctx.strokeStyle = '#ff0000'
    ctx.strokeRect(300, 90, 50, 35)

    ctx.arc(450, 220, 30, 0, Math.PI * 2)
    ctx.fill()
}

const init = () => {
    canvas = document.createElement('canvas');
    document.body.appendChild(canvas);
    ctx = canvas.getContext('2d');

    window.addEventListener('resize', resizeCanvas);

    resizeCanvas();

    draw()
};

init();
