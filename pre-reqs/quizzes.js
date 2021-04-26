(function(){
  // Functions
  function buildQuiz(questions, quizContainer, i){
    // variable to store the HTML output
    const output = [];
    i = i | 0;

    // for each question...
    questions.forEach(
      (currentQuestion, questionNumber) => {

        // variable to store the list of possible answers
        const answers = [];

        // and for each available answer...
        for(letter in currentQuestion.answers){

          // ...add an HTML radio button
          answers.push(
            `<label>
              <input type="radio" name="question${questionNumber}" value="${letter}">
              ${letter} :
              ${currentQuestion.answers[letter]}
            </label>`
          );
        }

        // add this question and its answers to the output
        const slide = "slide" + i
        output.push(
          `<div class=${slide}>
            <div class="question"> ${currentQuestion.question} </div>
            <div class="answers"> ${answers.join("")} </div>
          </div>`
        );
      }
    );

    // finally combine our output list into one string of HTML and put it on the page
    quizContainer.innerHTML = output.join('');
  }

  function showResults(quizContainer, questions, resultsContainer){

    // gather answer containers from our quiz
    const answerContainers = quizContainer.querySelectorAll('.answers');

    // keep track of user's answers
    let numCorrect = 0;

    // for each question...
    questions.forEach( (currentQuestion, questionNumber) => {

      // find selected answer
      const answerContainer = answerContainers[questionNumber];
      const selector = `input[name=question${questionNumber}]:checked`;
      const userAnswer = (answerContainer.querySelector(selector) || {}).value;

      // if answer is correct
      if(userAnswer === currentQuestion.correctAnswer){
        // add to the number of correct answers
        numCorrect++;

        // color the answers green
        answerContainers[questionNumber].style.color = 'lightgreen';
      }
      // if answer is wrong or blank
      else{
        // color the answers red
        answerContainers[questionNumber].style.color = 'red';
      }
    });

    // show number of correct answers out of total
    resultsContainer.innerHTML = `${numCorrect} de ${questions.length}`;
  }

  function showSlide(n) {
    slides1[currentSlide].classList.remove('active-slide');
    slides1[n].classList.add('active-slide');
    currentSlide = n;
    if(currentSlide === 0){
      previousButton.style.display = 'none';
    }
    else{
      previousButton.style.display = 'inline-block';
    }
    if(currentSlide === slides1.length-1){
      nextButton.style.display = 'none';
      submitButton1.style.display = 'inline-block';
    }
    else{
      nextButton.style.display = 'inline-block';
      submitButton1.style.display = 'none';
    }
  }

  function showSlide2(n) {
    slides2[currentSlide2].classList.remove('active-slide2');
    slides2[n].classList.add('active-slide2');
    currentSlide2 = n;
    if(currentSlide2 === 0){
      previousButton2.style.display = 'none';
    }
    else{
      previousButton2.style.display = 'inline-block';
    }
    if(currentSlide2 === slides2.length-1){
      nextButton2.style.display = 'none';
      submitButton2.style.display = 'inline-block';
    }
    else{
      nextButton2.style.display = 'inline-block';
      submitButton2.style.display = 'none';
    }
  }

  function showNextSlide1() {
    console.log('next button');
    showSlide(currentSlide + 1);
  }

  function showPreviousSlide1() {
    showSlide(currentSlide - 1);
  }

  function showNextSlide2() {
    console.log('next2 button');
    showSlide2(currentSlide2 + 1);
  }

  function showPreviousSlide2() {
    showSlide2(currentSlide2 - 1);
  }

  // Variables
  const quizContainer1 = document.getElementById('quiz1');
  const resultsContainer1 = document.getElementById('results1');
  const submitButton1 = document.getElementById('submit1');
  const myQuestions1 = [
    {
      question: "Qual o raio do círculo trigonométrico?",
      answers: {
        a: "10",
        b: "1",
        c: "qualquer raio (não importa)"
      },
      correctAnswer: "b"
    },
    {
      question: "O que representa o eixo x do ciclo trigonométrico? E o eixo y?",
      answers: {
        a: "x: seno, y: cosseno",
        b: "x: tangente, y: cotangente",
        c: "x: cosseno, y: seno"
      },
      correctAnswer: "c"
    },
    {
      question: "Como podemos encontrar a tangente de um ângulo?",
      answers: {
        a: "tangente = (cateto oposto)/(cateto adjacente)",
        b: "tangente = (cateto adjacente)/(hipotenusa)",
        c: "tangente = (seno)/(cosseno)",
        d: "'a' e 'c' estão corretos"
      },
      correctAnswer: "d"
    },
    {
      question: "sin²(θ) + cos²(θ) = ?",
      answers: {
        a: "1",
        b: "0",
        c: "tan(θ)",
        d: "não tem valor fixo"
      },
      correctAnswer: "a"
    },
    {
      question: "sin(-θ) = ?, cos(-θ) = ?, tan(-θ) = ?",
      answers: {
        a: "sin(θ), cos(θ), tan(θ)",
        b: "-sin(θ), -cos(θ), -tan(θ)",
        c: "-sin(θ), cos(θ), -tan(θ)",
        d: "-sin(θ), cos(θ), tan(θ)"
      },
      correctAnswer: "c"
    },
    {
      question: "Como podemos expressar -sin(θ)?",
      answers: {
        a: "cos(θ+𝜋/2)",
        b: "sin(θ+𝜋)",
        c: "sin(θ-𝜋)",
        d: "todas as anteriores"
      },
      correctAnswer:"d"
    },
    {
      question: "Como podemos expressar cos(θ)?",
      answers: {
        a: "sin(θ+𝜋/2)",
        b: "sin(θ-𝜋/2)",
        c: "cos(θ+𝜋)",
        d: "todas as anteriores"
      },
      correctAnswer: "a"
    },
    {
      question: "Quantos graus correspondem a 𝜋/4 radianos?",
      answers: {
        a: "30",
        b: "45",
        c: "60",
        d: "nenhuma das anteriores"
      },
      correctAnswer: "b"
    },
    {
      question: "Quantos radianos correspondem a 210 graus?",
      answers: {
        a: "𝜋/6",
        b: "2𝜋/3",
        c: "7𝜋/6",
        d: "nenhuma das anteriores"
      },
      correctAnswer: "c"
    },
    {
      question: "(x = 60, y = 80) = ?",
      answers: {
        a: "(r = 70, θ = 4/3 rad)",
        b: "(r = 70, θ = arctan(4/3) rad)",
        c: "(r = 100, θ = 4/3 rad)",
        d: "(r = 100, θ = arctan(4/3) rad)"
      },
      correctAnswer: "d"
    },
    {
      question: "(r = 30, θ = 2𝜋/3 rad) = ?",
      answers: {
        a: "(x = -15, y = 15)",
        b: "(x = -15, y = 15√3)",
        c: "(x = 15, y = 15)",
        d: "(x = 15, y = 15√3)"
      },
      correctAnswer: "b"
    },
    {
      question: "z = 3 - 3i = ?",
      answers: {
        a: "3√2.exp(i.3𝜋/4)",
        b: "3√2(cos(3𝜋/4) + isin(3𝜋/4))",
        c: "3√2.exp(i.7𝜋/4)",
        d: "todas as anteriores"
      },
      correctAnswer: "d"
    },
    {
      question: "z = 30.exp(i.𝜋/6) = ?",
      answers: {
        a: "15√3 + 15i",
        b: "15√3 - 15i",
        c: "15 + 15√3i",
        d: "15 - 15√3i"
      },
      correctAnswer: "a"
    },
    {
      question: "z = 3 - 3i => z* = ?",
      answers: {
        a: "3 + 3i",
        b: "3√2.exp(-i.3𝜋/4)",
        c: "a e b",
        d: "nenhuma das anteriores"
      },
      correctAnswer: "c"
    },
    {
      question: "(3 - 3i) + (-14 + 7i) = ?",
      answers: {
        a: "-11 + 4i",
        b: "11 - 4i",
        c: "17 + 10i",
        d: "nenhuma das anteriores"
      },
      correctAnswer: "a"
    },
    {
      question: "(3 - 3i)(-14 + 7i) = ?",
      answers: {
        a: "-42 + 63i",
        b: "42 - 63i",
        c: "-21 + 63i",
        d: "21 - 63i"
      },
      correctAnswer: "c"
    },
    {
      question: "Se A = (cachorro, gato, abelha, macaco, lesma) e B = (macaco, lesma), então:",
      answers:{
        a: "A = B",
        b: "A ⊃ B",
        c: "A ⊂ B",
        d: "nenhuma, a ordem dos elementos importa"
      },
      correctAnswer: "b"
    },
    {
      question: "Qual o espaço amostral de uma jogada de dados?",
      answers: {
        a: "Ω = (1, 2, 3, 4, 5, 6)",
        b: "Ω = (6, 5, 4, 3, 2, 1)",
        c: "Ω = (4, 5, 6, 3, 1, 2)",
        d: "todos os anteriores"
      },
      correctAnswer: "d"
    },
    {
      question: "Qual o valor esperado de uma jogada de dados (assumindo um dado justo)?",
      answers: {
        a: "E = 1.1/6 + 2.1/6 + 3.1/6 + 4.1/6 + 5.1/6 + 6.1/6",
        b: "E = 3,5",
        c: "a e b",
        d: "não há valor esperado pois as probabilidades são iguais"
      },
      correctAnswer: "c"
    },
    {
      question: "Qual a variância de uma jogada de dados?",
      answers: {
        a: "var = 3,5",
        b: "var ~ 2.92",
        c: "var = 3",
        d: "var = 0"
      },
      correctAnswer: "b"
    },
    {
      question: "Se |v ⟩ = [[2], [9], [1 + 13i], [4]], então ⟨v | = ?",
      answers: {
        a: "[2, 9, 1 + 13i, 4]",
        b: "[-2, -9, 1 - 13i, -4]",
        c: "[-2, -9, -1 - 13i, -4]",
        d: "[2, 9, 1 - 13i, 4]"
      },
      correctAnswer: "d"
    },
    {
      question: "O que é superposição?",
      answers: {
        a: "Quando um qubit não pode ser descrito separadamente de outro",
        b: "Quando um qubit se encontra em um estado 'entre' 0 e 1",
        c: "Quando um qubit interfere com o outro",
        d: "Quando um qubit está em mais de uma posição ao mesmo tempo"
      },
      correctAnswer: "b"
    },
    {
      question: "Qual a probabilidade de obtermos 0 ao medir o estado |ψ ⟩ = √3/2|0 ⟩ + 1/2|1 ⟩?",
      answers: {
        a: "É imprevisível, não temos como saber",
        b: "√3/2",
        c: "3/4",
        d: "nenhuma das anteriores"
      },
      correctAnswer: "c"
    }
  ];

  const quizContainer2 = document.getElementById('quiz2');
  const resultsContainer2 = document.getElementById('results2');
  const submitButton2 = document.getElementById('submit2');
  const myQuestions2 = [
    {
      question:"Qual das seguintes quantidades é uma quantidade escalar?",
      answers:{
        a:"massa",
        b:"peso",
        c:"velocidade"
      },
      correctAnswer: "a"
    },
    {
      question:"Se viajo com velocidade 20 para a direita e 30 para baixo, posso representar minha velocidade total como",
      answers:{
        a:"[[20] [30]]",
        b:"[[20] [-30]]",
        c:"[[30] [20]]",
        d:"[[-30] [20]]"
      },
      correctAnswer:"b"
    },
    {
      question:"A magnitude da minha velocidade seria",
      answers:{
        a:"25",
        b:"20",
        c:"36"
      },
      correctAnswer:"c"
    },
    {
      question:"Se passo a andar três vezes mais rápido, a velocidade se torna",
      answers:{
        a:"[[60] [-90]]",
        b:"[[90] [60]]",
        c:"[[60] [90]]",
        d:"[[-90] [60]]"
      },
      correctAnswer:"a"
    },
    {
      question:"E se aumento minha velocidade original por 20 para a esquerda e 30 para baixo?",
      answers:{
        a:"[[0] [0]]",
        b:"[[-60] [0]]",
        c:"[[-50] [-10]]",
        d:"[[0] [-60]]"
      },
      correctAnswer:"d"
    },
    {
      question:"A forma do vetor da minha velocidade é",
      answers:{
        a:"2 X 1",
        b:"1 X 2",
        c:"1 X 1",
        d:"nenhuma das anteriores"
      },
      correctAnswer:"a"
    },
    {
      question:"A forma do transposto do vetor da minha velocidade é",
      answers:{
        a:"2 X 1",
        b:"1 X 2",
        c:"1 X 1",
        d:"nenhuma das anteriores"
      },
      correctAnswer:"b"
    },
    {
      question:"Qual será a versão normalizada do vetor de minha velocidade original?",
      answers:{
        a:"[[20] [30]]/25",
        b:"[[0.8] [-1.2]]",
        c:"[[0.55] [-0.833]]",
        d:"[[20] [30]]/36"
      },
      correctAnswer:"c"
    },
    {
      question:"A magnitude do vetor [[4-3i] [7+i]] é",
      answers:{
        a:"55 - 10i",
        b:"75",
        c:"√(55 - 10i)",
        d:"√75"
      },
      correctAnswer:"d"
    },
    {
      question:"[[0, 1] [1, 0]] [[4] [3]] =",
      answers:{
        a:"[[4] [3]]",
        b:"[[3] [4]]",
        c:"[[-4] [-3]]",
        d:"É impossível realizar esta operação"
      },
      correctAnswer:"b"
    },
    {
      question:"[[0, 1, 0, 0] [0, 0, 0, 1] [1, 0, 0, 0] [0, 0, 1, 0]] [[0, 1, 2, 3] [4, 5, 6, 7] [8, 9, 10, 11] [12, 13, 14, 15]] =",
      answers:{
        a:"[[1, 3, 0, 2] [5, 7, 4, 6] [9, 11, 8, 10] [13, 15, 12, 14]]",
        b:"[[0, 1, 2, 3] [4, 5, 6, 7] [8, 9, 10, 11] [12, 13, 14, 15]]",
        c:"[[0, 1, 0, 0] [0, 0, 0, 7] [8, 0, 0, 0] [0, 0, 14, 0]]",
        d:"[[4, 5, 6, 7] [12, 13, 14, 15] [0, 1, 2, 3] [8, 9, 10, 11]]",
        e:"É impossível realizar esta operação"
      },
      correctAnswer:"d"
    },
    {
      question:"[[0, 1, 2, 3] [4, 5, 6, 7] [8, 9, 10, 11] [12, 13, 14, 15]] [[0] [1]] =",
      answers:{
        a:"[[0, 1, 2, 3] [4, 5, 6, 7] [8, 9, 10, 11] [12, 13, 14, 15]]",
        b:"[[0, 0, 0, 0] [4, 5, 6, 7]]",
        c:"É impossível realizar esta operação"
      },
      correctAnswer:"c"
    },
    {
      question:"[[0, -i] [i, 0]]⁻¹",
      answers:{
        a:"[[i, 0] [0, -i]]",
        b:"[[0, -i] [i, 0]]",
        c:"[[0, -1/i] [1/i, 0]]",
        d:"não existe"
      },
      correctAnswer:"b"
    }
  ]

  // Kick things off
  buildQuiz(myQuestions1, quizContainer1, 1);

  buildQuiz(myQuestions2, quizContainer2, 2);

  // Pagination
  const previousButton = document.getElementById("previous");
  const nextButton = document.getElementById("next");
  const previousButton2 = document.getElementById("previous2");
  const nextButton2 = document.getElementById("next2");
  const slides1 = document.querySelectorAll(".slide1");
  const slides2 = document.querySelectorAll(".slide2");
  let currentSlide = 0;
  let currentSlide2 = 0;

  // Show the first slide
  showSlide(currentSlide);
  showSlide2(currentSlide2);

  function showResults1(){
    showResults(quizContainer1, myQuestions1, resultsContainer1);
  };

  function showResults2(){
    showResults(quizContainer2, myQuestions2, resultsContainer2);
  };

  // Event listeners
  submitButton1.addEventListener("click", showResults1, false);
  previousButton.addEventListener("click", showPreviousSlide1);
  nextButton.addEventListener("click", showNextSlide1);

  submitButton2.addEventListener("click", showResults2, false);
  previousButton2.addEventListener("click", showPreviousSlide2);
  nextButton2.addEventListener("click", showNextSlide2);
})();
