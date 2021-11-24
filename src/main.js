import { Circle } from './circle';

let canvas, canvasContext, circle;

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

const update = () => {
    circle.setPosition(mouseCoordinates)
}

const draw = () => {
    canvasContext.fillRect(0, 0, canvas.width, canvas.height)

    circle.draw(canvasContext)
};

const step = () => {
    update()
    draw()
    window.requestAnimationFrame(step)
};

const init = () => {
    canvas = document.createElement('canvas');
    document.body.appendChild(canvas);
    canvasContext = canvas.getContext('2d');
    circle = new Circle({ x: 0, y: 0 }, 40)

    window.addEventListener('resize', resizeCanvas);
    window.addEventListener('mousemove', getMouseCoordinates);

    resizeCanvas();

    step()
};

init();
