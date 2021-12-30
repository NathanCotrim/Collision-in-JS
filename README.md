<div align="center">
    <img src="https://blog.mailrelay.com/wp-content/uploads/2017/11/mercado-objetivo.png"> <br> <br>
    <h1>
        Circle Collisions in JS
    </h1>
</div>

<br>
<br>

### 🍪 Description <br>

It's a simple javascript test framework, with purpose be able people execute tests simply and fast!

<br>

### 🌉 Usage <br>

It will find all files like it: \*.test.js, just run:

```
estj
```

<br>

-   To validate the tests it uses the nodejs assert, but its globally, you do not need to require it;
-   To create a test use the function it();
-   You can use beforeEach, it will execute before all tests;

<br>
Example:
<br>

```
beforeEach(() => {
    console.log('I am executing before a test')
})

it('should assert if 1 === 1', () => {
    assert.equal(1, 1)
})
```

<br>

### 🎗️ See It <br>


/home/nathan/Videos/Screencast from 30-12-2021 17:20:53.webm

<br>

### How does it works

### 🎠 Author

Nathan Cotrim - MIT
