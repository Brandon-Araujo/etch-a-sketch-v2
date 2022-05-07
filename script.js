
    let slider = document.getElementById('myRange');
    let output = document.getElementById('demo');
    const containerDiv = document.querySelector('.container-div');
    const eraseButton = document.querySelector('.eraseButton');
    let cellsArray = [];
    let sizePrompt = '256';
    let sliderValue = 16;
    output.innerHTML = slider.value;


          

    //creates the grid cells
    function createGrid() {
        for (let i = 0; i <= 81 * 81; i++) {
            const div = document.createElement('div');
            containerDiv.appendChild(div);
            div.classList.add('cell');
        }
        const cell = document.querySelectorAll('.cell');
        let makeArray = Array.from(cell);
        cellsArray = makeArray;
        cellsArray.forEach(element => colorChangeFunction(element, 'black'));
    }


    //creates event listener for erase button
    eraseButton.addEventListener('click', () => {
        cellsArray.forEach(element  => {
            colorChangeFunction(element, 'white');
        })
    })


    //sets the active color
    function colorChangeFunction(element, color) {
            element.addEventListener('mouseenter', () => {
                element.style.cssText = `background-color: ${color};`;
            })
                 
    }

            
    //clears the grid
    function clearGrid() {
        while (containerDiv.firstChild) {
                containerDiv.removeChild(containerDiv.firstChild);
        }
    }

    slider.oninput = function() {
        output.innerHTML = this.value;
        sliderValue = Number(this.value);
        clearGrid();
        rePopulateGrid();
    }

    function rePopulateGrid() {
        containerDiv.style.cssText = `grid-template-rows: repeat(${sliderValue}, 1fr); grid-template-columns: repeat(${sliderValue}, 1fr);`;
        for (let i = 0; i <= sliderValue * sliderValue; i++) {
            const div = document.createElement('div');
            containerDiv.appendChild(div);
            div.classList.add('cell');
        }
        const cell = document.querySelectorAll('.cell');
        let makeArray = Array.from(cell);
        cellsArray = makeArray;
        cellsArray.forEach(element => colorChangeFunction(element, 'black'));
    }
            

    createGrid();