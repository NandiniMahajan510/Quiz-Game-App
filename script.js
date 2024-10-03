const questJSON = [
  {
    category: 'Food & Drink',
    id: 'qa-1',
    correctAnswer: 'Three',
    options: ['Two', 'Three', 'Four', 'Five'],
    question:
      "How many pieces of bun are in a Mcdonald's Big Mac?",
  },
  {
    correctAnswer: 'L. Frank Baum',
    options: [
      'Suzanne Collins',
      'James Fenimore Cooper',
      'L. Frank Baum',
      'Donna Leon',
    ],
    question:
      "Which author wrote 'The Wonderful Wizard of Oz'?",
  },
  {
    correctAnswer: 'Atlanta United',
    options: [
      'Atlanta United',
      'Atlanta Impact',
      'Atlanta Bulls',
      'Atlanta Stars',
    ],
    question:
      'Which of these is a soccer team based in Atlanta?',
  },
  {
    correctAnswer: 'A Nanny',
    options: [
      'A Sow',
      'A Lioness',
      'A Hen',
      'A Nanny',
    ],
    question: 'A female goat is known as what?',
  },
  {
    correctAnswer: 'P. L. Travers',
    options: [
      'J. R. R. Tolkien',
      'P. L. Travers',
      'Lewis Carroll',
      'Enid Blyton',
    ],
    question:
      "Which author wrote 'Mary Poppins'?",
  },
]
let score = 0;
let currentelement=0;
const questionElement = document.getElementById("question");
const optionsElement = document.getElementById("options");
const scoreElement = document.getElementById("score");
const nextElement=document.getElementById("next_btn");

showQuestion();
nextElement.addEventListener("click",nextQuestion);

function showQuestion(){
  const { correctAnswer, options, question} = questJSON[currentelement];
  questionElement.textContent = question;
  const shuffledOptions = shuffleOptions(options);
  shuffledOptions.forEach((opt) => {
    const btn = document.createElement('button');
    btn.textContent = opt;
    optionsElement.appendChild(btn);
    btn.addEventListener("click", () => {
      if (opt === correctAnswer) {
        score = score + 1
      } else {
        score = score - 0.25;
      }
      scoreElement.textContent = `Score:${score}`;
      const butn=document.createElement("button");
      nextQuestion();
    })
  });
}
function nextQuestion(){
  currentelement++;
  optionsElement.textContent="";
  if(currentelement>=questJSON.length){
    questionElement.textContent="Quiz Completed!!!"
    
  }
  else{ 
    showQuestion(); 
  }
}
function shuffleOptions(options) {
  for (let i = options.length - 1; i >= 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [options[j], options[i]] = [options[i], options[j]];
  }
  return options;
}

