import { Circle } from './circle';

let canvas, canvasContext, mainCircle;
const NUM_OF_CIRCLES = 40;
const circles = [];

const mouseCoordinates = Object.seal({
    x: window.innerWidth / 2,
    y: window.innerHeight / 2
});

const getMouseCoordinates = e => {
    mouseCoordinates.x = e.clientX;
    mouseCoordinates.y = e.clientY;
};

const resizeCanvas = () => {
    canvas.height = window.innerHeight;
    canvas.width = window.innerWidth;
};

const update = () => {
    mainCircle.setPosition(mouseCoordinates)
    mainCircle.updateState()

    circles.forEach(circle => {
        circle.updateState()

        if (circle.isOverlaped(mainCircle)) {
            circle.setOverlaping(true)
            mainCircle.setOverlaping(true)
        }
    })
};

const draw = () => {
    canvasContext.fillRect(0, 0, canvas.width, canvas.height)

    mainCircle.draw(canvasContext)

    circles.forEach(circle => {
        circle.draw(canvasContext)
    })
};

const step = () => {
    update()
    draw()
    window.requestAnimationFrame(step)
};

const init = () => {
    window.addEventListener('resize', resizeCanvas);
    window.addEventListener('mousemove', getMouseCoordinates);

    canvas = document.createElement('canvas');
    document.body.appendChild(canvas);
    
    canvasContext = canvas.getContext('2d');
    resizeCanvas();

    mainCircle = new Circle({ x: 0, y: 0 }, 40)

    for (let i = 0; i < NUM_OF_CIRCLES; i++) {
        const circle = new Circle()
        circle.setDimensions(canvas.width, canvas.height)

        circles.push(circle)
    }
    
    step()
};

init();
