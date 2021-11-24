

export class Circle {
    constructor(positions = { x: 0, y: 0 }, ray = 1, color = '#ffffff') {
        this.positions = positions 
        this.ray = ray
        this.color = color
    }

    setPosition(positions = this.positions) {
        this.positions = positions
    }

    draw(canvasContext) {
        canvasContext.strokeStyle = this.color

        canvasContext.beginPath()
        canvasContext.arc(
            this.positions.x,
            this.positions.y,
            this.ray,
            0,
            Math.PI * 2
        )
        canvasContext.stroke()
    }
}