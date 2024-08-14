const questions = [
    // 1
    {
        question: "What is the capital of Italy?",
        options: ["Rome", "Milan", "Venice", "Naples"],
        answer: "Rome"
    },
    // 2
    {
        question: "Which element has the atomic number 1?",
        options: ["Helium", "Hydrogen", "Lithium", "Oxygen"],
        answer: "Hydrogen"
    },
    // 3
    {
        question: "Who was the first President of the United States?",
        options: ["Thomas Jefferson", "Abraham Lincoln", "George Washington", "John Adams"],
        answer: "George Washington"
    },
    // 4
    {
        question: "Which planet is closest to the Sun?",
        options: ["Venus", "Earth", "Mercury", "Mars"],
        answer: "Mercury"
    },
    // 5
    {
        question: "Which country is famous for the Eiffel Tower?",
        options: ["Spain", "Germany", "France", "Italy"],
        answer: "France"
    },
    // 6
    {
        question: "What is the chemical symbol for gold?",
        options: ["Au", "Ag", "Pb", "Pt"],
        answer: "Au"
    },
    // 7
    {
        question: "Who wrote '1984'?",
        options: ["George Orwell", "Aldous Huxley", "Ray Bradbury", "Jules Verne"],
        answer: "George Orwell"
    },
    // 8
    {
        question: "Which country hosted the 2014 FIFA World Cup?",
        options: ["Brazil", "Argentina", "Germany", "South Africa"],
        answer: "Brazil"
    },
    // 9
    {
        question: "Which organ is responsible for pumping blood throughout the human body?",
        options: ["Liver", "Brain", "Heart", "Kidneys"],
        answer: "Heart"
    },
    // 10
    {
        question: "What is the largest planet in our solar system?",
        options: ["Saturn", "Jupiter", "Neptune", "Uranus"],
        answer: "Jupiter"
    },
    // 11
    {
        question: "In which year did World War II end?",
        options: ["1941", "1943", "1945", "1947"],
        answer: "1945"
    },
    // 12
    {
        question: "Which language is the most widely spoken worldwide?",
        options: ["English", "Spanish", "Mandarin", "Hindi"],
        answer: "Mandarin"
    },
    // 13
    {
        question: "Which continent is the Sahara Desert located in?",
        options: ["Asia", "Africa", "Australia", "South America"],
        answer: "Africa"
    },
    // 14
    {
        question: "What is the chemical formula for water?",
        options: ["H2O", "O2", "CO2", "NaCl"],
        answer: "H2O"
    },
    // 15
    {
        question: "Who painted 'The Starry Night'?",
        options: ["Pablo Picasso", "Leonardo da Vinci", "Vincent van Gogh", "Claude Monet"],
        answer: "Vincent van Gogh"
    },
    // 16
    {
        question: "What is the main ingredient in traditional Japanese miso soup?",
        options: ["Tofu", "Rice", "Soybeans", "Fish"],
        answer: "Soybeans"
    },
    // 17
    {
        question: "Which country is home to the kangaroo?",
        options: ["South Africa", "India", "Australia", "Brazil"],
        answer: "Australia"
    },
    // 18
    {
        question: "What is the hardest natural substance on Earth?",
        options: ["Gold", "Iron", "Diamond", "Platinum"],
        answer: "Diamond"
    },
    // 19
    {
        question: "Which artist is known for cutting off his own ear?",
        options: ["Claude Monet", "Vincent van Gogh", "Pablo Picasso", "Salvador Dalí"],
        answer: "Vincent van Gogh"
    },
    // 20
    {
        question: "What is the tallest mountain in the world?",
        options: ["K2", "Mount Kilimanjaro", "Mount Everest", "Mount Fuji"],
        answer: "Mount Everest"
    },
    // 21
    {
        question: "Which country gifted the Statue of Liberty to the United States?",
        options: ["England", "France", "Spain", "Italy"],
        answer: "France"
    },
    // 22
    {
        question: "Which element has the chemical symbol 'Fe'?",
        options: ["Lead", "Iron", "Zinc", "Copper"],
        answer: "Iron"
    },
    // 23
    {
        question: "Who is known as the Father of Modern Physics?",
        options: ["Albert Einstein", "Isaac Newton", "Galileo Galilei", "Niels Bohr"],
        answer: "Albert Einstein"
    },
    // 24
    {
        question: "Which ocean is the Bermuda Triangle located in?",
        options: ["Pacific Ocean", "Atlantic Ocean", "Indian Ocean", "Southern Ocean"],
        answer: "Atlantic Ocean"
    },
    // 25
    {
        question: "Which planet is known for its rings?",
        options: ["Saturn", "Mars", "Jupiter", "Uranus"],
        answer: "Saturn"
    },
    // 26
    {
        question: "What is the longest river in the world?",
        options: ["Amazon River", "Nile River", "Yangtze River", "Mississippi River"],
        answer: "Nile River"
    },
    // 27
    {
        question: "Who was the first woman to win a Nobel Prize?",
        options: ["Marie Curie", "Rosalind Franklin", "Ada Lovelace", "Jane Goodall"],
        answer: "Marie Curie"
    },
    // 28
    {
        question: "Which sport is known as the 'king of sports'?",
        options: ["Basketball", "Football (Soccer)", "Cricket", "Tennis"],
        answer: "Football (Soccer)"
    },
    // 29
    {
        question: "What is the capital city of Japan?",
        options: ["Seoul", "Beijing", "Tokyo", "Bangkok"],
        answer: "Tokyo"
    },
    // 30
    {
        question: "Which famous scientist developed the theory of relativity?",
        options: ["Albert Einstein", "Isaac Newton", "Galileo Galilei", "Stephen Hawking"],
        answer: "Albert Einstein"
    },
    //31
    {
        question: "What is the capital of France?",
        options: ["Berlin", "Madrid", "Paris", "Lisbon"],
        answer: "Paris"
    },
    //32
    {
        question: "Which planet is known as the Red Planet?",
        options: ["Earth", "Mars", "Jupiter", "Saturn"],
        answer: "Mars"
    },
    //33
    {
        question: "Who wrote 'Hamlet'?",
        options: ["Charles Dickens", "William Shakespeare", "Jane Austen", "Mark Twain"],
        answer: "William Shakespeare"
    },
    //34
    {
        question: "What is the largest ocean on Earth?",
        options: ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Pacific Ocean"],
        answer: "Pacific Ocean"
    },
    //35
    {
        question: "What is the smallest planet in our solar system?",
        options: ["Mercury", "Venus", "Earth", "Mars"],
        answer: "Mercury"
    },
    //36
    {
        question: "In which year did the Titanic sink?",
        options: ["1905", "1912", "1921", "1930"],
        answer: "1912"
    },
    //37
    {
        question: "Which country is known as the Land of the Rising Sun?",
        options: ["China", "Japan", "South Korea", "India"],
        answer: "Japan"
    },
    //38
    {
        question: "Who painted the Mona Lisa?",
        options: ["Vincent van Gogh", "Leonardo da Vinci", "Pablo Picasso", "Claude Monet"],
        answer: "Leonardo da Vinci"
    },
    //39
    {
        question: "What is the largest desert in the world?",
        options: ["Sahara Desert", "Gobi Desert", "Kalahari Desert", "Antarctic Desert"],
        answer: "Antarctic Desert"
    },
    //40
    {
        question: "Which element has the chemical symbol 'O'?",
        options: ["Oxygen", "Gold", "Osmium", "Zinc"],
        answer: "Oxygen"
    },
    //41
    {
        question: "Which city hosted the 2016 Summer Olympics?",
        options: ["Tokyo", "London", "Rio de Janeiro", "Beijing"],
        answer: "Rio de Janeiro"
    },
    //42
    {
        question: "What is the hardest natural substance on Earth?",
        options: ["Gold", "Iron", "Diamond", "Platinum"],
        answer: "Diamond"
    },
    //43
    {
        question: "What is the speed of light in vacuum?",
        options: ["300,000 km/s", "150,000 km/s", "500,000 km/s", "1,000,000 km/s"],
        answer: "300,000 km/s"
    },
    //44
    {
        question: "Who is the author of 'Pride and Prejudice'?",
        options: ["Charlotte Bronte", "Emily Bronte", "Jane Austen", "George Eliot"],
        answer: "Jane Austen"
    },
    //45
    {
        question: "Which gas do plants absorb from the atmosphere?",
        options: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Helium"],
        answer: "Carbon Dioxide"
    }
];

let selectedQuestions = [];
let currentQuestionIndex = 0;
let score = 0;

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function selectRandomQuestions(numQuestions) {
    const selectedIndices = new Set();  // To keep track of selected indices
    selectedQuestions = [];

    while (selectedIndices.size < numQuestions) {
        const randomIndex = getRandomInt(questions.length);
        if (!selectedIndices.has(randomIndex)) {
            selectedIndices.add(randomIndex);
            selectedQuestions.push(questions[randomIndex]);
        }
    }
}

function loadQuestion() {
    const questionElement = document.getElementById("question");
    const optionsElement = document.getElementById("options");

    const currentQuestion = selectedQuestions[currentQuestionIndex];
    questionElement.textContent = currentQuestion.question;

    optionsElement.innerHTML = "";
    currentQuestion.options.forEach(option => {
        const button = document.createElement("button");
        button.textContent = option;
        button.onclick = () => selectAnswer(button, option);
        optionsElement.appendChild(button);
    });

    document.getElementById("next-btn").style.display = "none";
}

function selectAnswer(button, selectedOption) {
    const currentQuestion = selectedQuestions[currentQuestionIndex];
    const correctAnswer = currentQuestion.answer;
    const buttons = document.querySelectorAll('#options button');

    if (selectedOption === correctAnswer) {
        button.style.backgroundColor = "green";
        score++;
    } else {
        button.style.backgroundColor = "red";
    }

    buttons.forEach(btn => {
        if (btn.textContent === correctAnswer) {
            btn.style.backgroundColor = "green";
        }
        btn.disabled = true; // Disable all buttons after selection
    });

    document.getElementById("next-btn").style.display = "block";
}

function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < selectedQuestions.length) {
        loadQuestion();
    } else {
        showResult();
    }
}

function restartQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    document.getElementById("result-container").classList.add("hide");
    document.getElementById("quiz-container").classList.remove("hide");
    selectRandomQuestions(5);
    loadQuestion();
}

function showResult() {
    document.getElementById("quiz-container").classList.add("hide");
    document.getElementById("result-container").classList.remove("hide");
    document.getElementById("score").textContent = `${score}/${selectedQuestions.length}`;

    // Trigger confetti if the user got all answers correct
    if (score === selectedQuestions.length) {
        confetti({
            particleCount: 100,
            spread: 70,
            origin: { y: 0.6 }
        });
    }
}
// Initialize the quiz with random questions
selectRandomQuestions(5);
loadQuestion();