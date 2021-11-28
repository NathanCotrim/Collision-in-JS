const RADIUS_RANGE = {
    min: 5,
    max: 50
};

const OVERLAPING_COLOR = '#ff0000'

export class Circle {
    constructor(positions = { x: 0, y: 0 }, radius = 1, color = '#ffffff') {
        this.positions = positions;
        this.radius = radius;
        this.color = color;
        this.overlaping = false;
    }

    setPosition(positions = this.positions) {
        this.positions = positions;
    }

    setRadius(radius) {
        this.radius = radius;
    }

    setDimensions(screenWidth, screenHeight) {
        this.setPosition({
            x: Math.random() * screenWidth,
            y: Math.random() * screenHeight
        });

        const randomRadius = Math.random() * (RADIUS_RANGE.max - RADIUS_RANGE.min) + RADIUS_RANGE.min;

        this.setRadius(randomRadius);
    }

    isOverlaped(circle) {
        const dx = circle.positions.x - this.positions.x;
        const dy = circle.positions.y - this.positions.y;

        return Math.sqrt(dx * dx + dy * dy) <= this.radius + circle.radius;
    }

    setOverlaping(boolean) {
        this.overlaping = boolean
    }

    updateState() {
        this.overlaping = false
    }

    draw(canvasContext) {
        canvasContext.strokeStyle = this.overlaping ? OVERLAPING_COLOR : this.color;

        canvasContext.beginPath();
        canvasContext.arc(
            this.positions.x,
            this.positions.y,
            this.radius,
            0,
            Math.PI * 2
        );
        canvasContext.stroke();
    }
}