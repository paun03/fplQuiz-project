// DOM

// OBJECTS

let q1 = {
    text: "Which team has scored the least amount of goals?",
    answers: ["Luton Town", "Everton", "Sheffield United", "Burnley"],
    indexOfTrue: 2
};

let q2 = {
    text: "Who is the highest scoring defender? (HINT: 97 Points)",
    answers: ["Alexander-Arnold", "Trippier", "Saliba", "Porro"],
    indexOfTrue: 0
};

let q3 = {
    text: "Which original 4.0M goalkeeper has scored the most points?",
    answers: ["Turner", "Dubravka", "Bentley", "Areola"],
    indexOfTrue: 3
};

let q4 = {
    text: "Which 100+ points player has played the least amount of minutes?",
    answers: ["Watkins", "Son", "Salah", "Halland"],
    indexOfTrue: 3
};

let q5 = {
    text: "Who has scored the most amount of penalties?",
    answers: ["Halland", "Palmer", "Salah", "Alvarez"],
    indexOfTrue: 1
};

let q6 = {
    text: "Which of these has yet to score a hat-trick in 2023/24 campaign?",
    answers: ["Salah", "Son", "Watkins", "Ferguson"],
    indexOfTrue: 0
};

let q7 = {
    text: "Which of these has not scored a goal against Brighton & Hove Albion?",
    answers: ["Solanke", "Son", "Gordon", "Salah"],
    indexOfTrue: 2
};

let q8 = {
    text: "Who scored the most amount of points among these players thus far?",
    answers: ["Trippier", "Solanke", "Diaby", "Hee Chan"],
    indexOfTrue: 1
};

let q9 = {
    text: "Who is Chelsea's best scorer points wise so far? (HINT: 81 Point)",
    answers: ["Jackson", "Disasi", "Palmer", "Sterling"],
    indexOfTrue: 3
};

let q10 = {
    text: "Which keeper has the most amount of points to his name?",
    answers: ["Allison", "Ederson", "Pope", "Raya"],
    indexOfTrue: 0
};

let q11 = {
    text: "Which of these teams has the highest scoring player?",
    answers: ["West Ham", "Wolverhampton Wonderers", "Newcastle", "Manchester United"],
    indexOfTrue: 0
};

let q12 = {
    text: "Which of Arsenals midfielders has the most amount of points?",
    answers: ["Martinelli", "Ødegaard", "Saka", "Rice"],
    indexOfTrue: 2
};

let q13 = {
    text: "Who is Uniteds top scorer?",
    answers: ["Garnacho", "Fernandes", "Rashford", "Onana"],
    indexOfTrue: 3
};

let q14 = {
    text: "Who is tied with Palhinha with most yellow cards thus far?",
    answers: ["Emerson", "Fernandes", "McBurnie", "Jackson"],
    indexOfTrue: 3
};

let q15 = {
    text: "After Salah, who has the best influence rating?",
    answers: ["Trafford", "Anderesen", "Haaland", "Gross"],
    indexOfTrue: 0
};

let questions = [q1, q2, q3, q4, q5, q6, q7, q8, q9, q10, q11, q12, q13, q14, q15];

// SHUFFLE

let randomArray = (arr) => {
    let temp = 0;
    for (let i = arr.length - 1; i >= 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }
    return arr;
};

console.log(randomArray(questions));

// SELECTORS

let main = document.querySelector(".main-section-class")
let answers = document.querySelector(".answers");

// BUTTONS 

let btnSubmit = document.querySelector("#submit");
let btnNewGame = document.querySelector("#newGame");

// FUNCTIONS

let createAQuiz = (arr) => {
    for (let i = 0; i < 5; i++) {
        let div = document.createElement("div");
        div.classList.add("question");
        main.appendChild(div);
        let h1 = document.createElement("h1");
        h1.textContent = `${i + 1}. ${arr[i].text}`;
        div.appendChild(h1);
        let radioDiv = document.createElement("div");
        radioDiv.classList.add("radioDiv");
        for (let j = 0; j < arr[i].answers.length; j++) {
            let radio = document.createElement("input");
            let label = document.createElement("label");
            let radioLabelDiv = document.createElement("div");
            radio.type = "radio";
            label.textContent = arr[i].answers[j];
            radio.name = `options${i}`;
            radio.value = `${j}`;
            radioLabelDiv.appendChild(label);
            radioLabelDiv.appendChild(radio);
            radioDiv.appendChild(radioLabelDiv);
        }
        div.appendChild(radioDiv);
    }
};

createAQuiz(questions);

let checkIfTrue = (arr, newArray) => {
    for (let i = 0; i < Math.min(5, arr.length); i++) {
        let isTrue = false;
        for (let j = 0; j < newArray.length; j++) {
            if (arr[i].indexOfTrue == newArray[j].value) {
                isTrue = true;
            };
        }
        if (isTrue == true) {
            let pTrue = document.createElement("p");
            pTrue.innerText = `Question ${i + 1} is CORRECT!`;
            pTrue.style.color = "greenyellow";
            answers.appendChild(pTrue);
        } else {
            let pFalse = document.createElement("p");
            pFalse.innerText = `Question ${i + 1} is FALSE!`;
            pFalse.style.color = "red";
            answers.appendChild(pFalse);
        };
    }
};

let printResults = () => {
    let h3 = document.createElement("h3");
        h3.textContent = "RESULTS: ";
        h3.classList.add("results");
        answers.appendChild(h3);
};

btnSubmit.addEventListener("click", () => {
    let selectAllRadios = document.querySelectorAll("input[type='radio']:checked");
    let newArray = Array.from(selectAllRadios);
    if (newArray.length !== 5) {
        alert("Please Insert All Answers!");
    } else {
        printResults();
        checkIfTrue(questions, newArray);
        btnSubmit.disabled = true;
    }    
});

btnNewGame.addEventListener("click", () => {
    location.reload();
});