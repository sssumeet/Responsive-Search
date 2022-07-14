const colors = ["#b380ff", "#ff33ff", "#66ff33", "#1affff", "#ff3385", "#ffa31a", "#ff3300", "#66ffff"];

const container = document.getElementById("container");

const  N = 1000;
for(let i=0;i<N;i++){
    const square = document.createElement("div");

    square.classList.add("square");

    square.addEventListener("mouseover", () => {
        setColour(square);
    });

    square.addEventListener("mouseout", () => {
        removeColour(square);
    });

    container.appendChild(square);
}

const randomColor = () => {
    return colors[Math.floor(Math.random()*7)];
};

const setColour = (square) => {
    const color = randomColor();

    square.style.background = color;
};

const removeColour = (square) => {
    square.style.background = "#1d1d1d";
};


