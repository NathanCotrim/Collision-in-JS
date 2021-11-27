const RADIUS_RANGE = {
    min: 5,
    max: 50
}

export class Circle {
    constructor(positions = { x: 0, y: 0 }, radius = 1, color = '#ffffff') {
        this.positions = positions 
        this.radius = radius
        this.color = color
    }

    setPosition(positions = this.positions) {
        this.positions = positions
    }

    setRadius(radius) {
        this.radius = radius
    }

    setDimensions(screenWidth, screenHeight) {
        this.setPosition({
            x: Math.random() * screenWidth,
            y: Math.random() * screenHeight
        })

        const randomRadius = Math.random() * (RADIUS_RANGE.max - RADIUS_RANGE.min) + RADIUS_RANGE.min

        this.setRadius(randomRadius);
    }

    draw(canvasContext) {
        canvasContext.strokeStyle = this.color

        canvasContext.beginPath()
        canvasContext.arc(
            this.positions.x,
            this.positions.y,
            this.radius,
            0,
            Math.PI * 2
        )
        canvasContext.stroke()
    }
}