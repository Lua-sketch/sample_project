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

  function showSlide4(n) {
    slides4[currentSlide4].classList.remove('active-slide4');
    slides4[n].classList.add('active-slide4');
    currentSlide4 = n;
    if(currentSlide4 === 0){
      previousButton4.style.display = 'none';
    }
    else{
      previousButton4.style.display = 'inline-block';
    }
    if(currentSlide4 === slides4.length-1){
      nextButton4.style.display = 'none';
      submitButton4.style.display = 'inline-block';
    }
    else{
      nextButton4.style.display = 'inline-block';
      submitButton4.style.display = 'none';
    }
  }

  function showNextSlide4() {
    console.log('next4 button');
    showSlide4(currentSlide4 + 1);
  }

  function showPreviousSlide4() {
    showSlide4(currentSlide4 - 1);
  }

  // Variables
  const quizContainer4 = document.getElementById('quiz4');
  const resultsContainer4 = document.getElementById('results4');
  const submitButton4 = document.getElementById('submit4');
  const myQuestions4 = [
    {
      question:"A mecânica quântica é usada em",
      answers:{
        a:"Relógios atômicos e GPS",
        b:"Smartphones/computadores modernos",
        c:"Telecomunicações",
        d:"Todos os anteriores"
      },
      correctAnswer:"d"
    },
    {
      question:"A luz é feita de",
      answers:{
        a:"Ondas",
        b:"Partículas",
        c:"Ambos"
      },
      correctAnswer:"c"
    },
    {
      question:"Se você deixa luz passar por duas finas fendas, e observa o resultado final, você vê",
      answers:{
        a:"Duas linhas iluminadas, uma atrás de cada fenda",
        b:"Várias linhas iluminadas e outras sem luz, um padrão de interferência",
        c:"A tela inteira iluminada uniformemente",
        d:"Nenhuma luz, ela foi bloqueada"
      },
      correctAnswer:"b"
    },
    {
      question:"Para retirar elétrons de um átomo,",
      answers:{
        a:"Podemos usar bastante luz de baixa energia ou menos luz de alta energia",
        b:"Precisamos de luz com uma energia alta o suficiente",
        c:"Não podemos retirar elétrons de um átomo"
      },
      correctAnswer:"b"
    },
    {
      question:"A velocidade de uma partícula em função de sua massa e comprimento de onda é",
      answers:{
        a:"v = h/(m*λ)",
        b:"v = (m*h)/λ",
        c:"v = (λ*h)/m",
        d:"v = m*λ*h"
      },
      correctAnswer:"a"
    },
    {
      question:"Sobre a função de onda de uma partícula, é incorreto afirmar que",
      answers:{
        a:"Ela depende de x e t",
        b:"Ela nos fornece a posição de uma partícula em determinado momento",
        c:"Sua evolução temporal é descrita pela equação de Schrodinger",
        d:"Todas as anteriores"
      },
      correctAnswer:"b"
    },
    {
      question:"O operador Hamiltaniano",
      answers:{
        a:"Nos fornece o momento linear de uma partícula",
        b:"Não influencia a evolução temporal da função de onda de uma partícula",
        c:"Nos fornece a energia cinética de uma partícula",
        d:"Nos fornece a energia total de uma partícula"
      },
      correctAnswer:"d"
    },
    {
      question:"Uma partícula tem maior probabilidade de se encontrar onde",
      answers:{
        a:"Ela tem menos energia",
        b:"Sua função de onda tem a maior amplitude",
        c:"Ela tem menos momento linear",
        d:"Nenhuma das anteriores"
      },
      correctAnswer:"b"
    }
  ]

  // Kick things off
  buildQuiz(myQuestions4, quizContainer4, 4);

  // Pagination
  const previousButton4 = document.getElementById("previous4");
  const nextButton4 = document.getElementById("next4");
  const slides4 = document.querySelectorAll(".slide4");
  let currentSlide4 = 0;

  // Show the first slide
  showSlide4(currentSlide4);

  function showResults4(){
    showResults(quizContainer4, myQuestions4, resultsContainer4);
  };

  // Event listeners
  submitButton4.addEventListener("click", showResults4, false);
  previousButton4.addEventListener("click", showPreviousSlide4);
  nextButton4.addEventListener("click", showNextSlide4);
})();
