<div align="center">
    <img src="https://blog.mailrelay.com/wp-content/uploads/2017/11/mercado-objetivo.png"> <br>
    <h2>
        Circle Collisions in JS
    </h2>
</div>

<br>
<br>

### 🐍 Description <br>

It's a simple javascript app, that identify collisions beetween circles.

<br>

### 💮 Usage <br>

just run:

```
yarn start
```

<br>

- The static files (index.html and main.css) are fixed at dist, we just generate the bundle with webpack and babel, that out in main.js (build script);
- The script start serve the webpack, that we can access from localhost:8080.

<br>

### 🏺 See It <br>

https://user-images.githubusercontent.com/82950902/147786012-43b0c309-7274-4f5f-a6c0-aba04073f787.mp4

<br>

### 🛰️ How does it works <br>

Basically we render the screen again on all mouse move with the same generated circles positions and the same background, just updating the cursor circle acordding the mouse coordenates! <br><br>
The math executed to verify collision basically is: We get the main circle positions (x, y) and remove from each one the related positions (x, y) from the circle that is verifying the collision, after it, we get this results, calc the square root from they^2 and compare if it is less or equal the current circle radius + the main circle radius, visualize:

```
isOverlaped(circle) {
    const dx = circle.positions.x - this.positions.x;
    const dy = circle.positions.y - this.positions.y;

    return Math.sqrt(dx * dx + dy * dy) <= this.radius + circle.radius;
}
```

### 🫀 Author <br>

Nathan Cotrim - MIT
