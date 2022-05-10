
    let slider = document.getElementById('myRange');
    let output = document.getElementById('demo');
    const grid = document.querySelector('.grid-div');
    const eraseButton = document.querySelector('.erase-button');
    const blackButton = document.querySelector('.black-button');
    const rainbowButton = document.querySelector('.rainbow-button');
    const colorPicker = document.querySelector('.color-picker');
    const animation = document.querySelector('.blink-animation');
    const button = document.getElementsByClassName('button');
    let buttonArray = Array.from(button);
    let cellsArray = [];
    let sliderValue = 16;
    output.innerHTML = slider.value + ' X ' + slider.value;


  
    //creates default grid
    function createGrid() {
        for (let i = 0; i <= 16 * 16; i++) {
            const div = document.createElement('div');
            grid.appendChild(div);
            div.classList.add('cell');
        }
        const cell = document.querySelectorAll('.cell');
        let makeArray = Array.from(cell);
        cellsArray = makeArray;
        cellsArray.forEach(element => colorChangeFunction(element, 'black'));
    }


    //buttons
    eraseButton.addEventListener('click', () => {
        eraseButton.classList.add('blink-animation');
        cellsArray.forEach(element  => {
            colorChangeFunction(element, 'white');
        })
    })

    blackButton.addEventListener('click', () => {
        blackButton.classList.add('blink-animation');
        cellsArray.forEach(element => {
            colorChangeFunction(element, 'black');
        })
    })


    rainbowButton.addEventListener('click', () => {
        rainbowButton.classList.add('blink-animation');
        cellsArray.forEach(element => {
            element.addEventListener('mouseenter', () => {
                element.style.cssText = `background-color: ${rainbowFunction()};`;
            })
        })
    })

    colorPicker.addEventListener('input', () => {
        cellsArray.forEach(element => {
            colorChangeFunction(element, event.target.value);
        })
    })

    //removes animation class
    buttonArray.forEach(element => {
        element.addEventListener('animationend', () => {
            element.classList.remove('blink-animation');
        })
    })

    //sets the active color
    function colorChangeFunction(element, color) {
            element.addEventListener('mouseenter', () => {
                element.style.cssText = `background-color: ${color};`;
            })
         
    }
    
    //generates random RGB values
    function rainbowFunction() {
        let num1 = Math.floor(Math.random() * 256);
        let num2 = Math.floor(Math.random() * 256);
        let num3 = Math.floor(Math.random() * 256);
        let rgbNum = 'rgb(' + num1 + ', ' + num2 + ', ' + num3 + ')';
        return rgbNum;
    }
    
    //clears the grid
    function clearGrid() {
        while (grid.firstChild) {
             grid.removeChild(grid.firstChild);
        }
    }

    //slider functionality
    slider.oninput = function() {
        output.innerHTML = this.value + ' X ' + this.value;
        sliderValue = Number(this.value);
        clearGrid();
        rePopulateGrid();
    }

    //defines new grid when slider is toggled 
    function rePopulateGrid() {
        grid.style.cssText = `grid-template-rows: repeat(${sliderValue}, 1fr); grid-template-columns: repeat(${sliderValue}, 1fr);`;
        for (let i = 0; i <= sliderValue * sliderValue; i++) {
            const div = document.createElement('div');
            grid.appendChild(div);
            div.classList.add('cell');
        }
        const cell = document.querySelectorAll('.cell');
        let makeArray = Array.from(cell);
        cellsArray = makeArray;
        cellsArray.forEach(element => colorChangeFunction(element, 'black'));
    }
    
    createGrid();