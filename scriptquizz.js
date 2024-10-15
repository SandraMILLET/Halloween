const quizz = [
    {
      "number": 0,
      "question": "Quel est le nom du tueur masqué dans la saga Scream ?",
      "answers": [
        "Jason Voorhees",
        "Ghostface",
        "Michael Myers"
      ],
      "correct": "Ghostface",
    },
    {
      "number": 1,
      "question": "Dans quel film d'horreur retrouve-t-on un parasite extraterrestre qui prend le contrôle des humains ?",
      "answers": [
        "Alien",
        "The thing",
        "Predator"
      ],
      "correct": "The thing",
    },
    {
      "number": 2,
      "question": "Quelle est la célèbre réplique de Freddy Krueger dans les films Les Griffes de la nuit ?",
      "answers": [
        "I'll be back",
        "I'll find you",
        "Sweet dreams"
      ],
      "correct": "Sweet dreams",
    },
    {
      "number": 3,

      "question": "Dans quel film d'horreur un groupe d'adolescents est traqué par un tueur masqué dans un camp de vacances ?",
      "answers": [
        "Vendredi 13",
        "Halloween",
        "Massacre à la tronçonneuse"
      ],
      "correct": "Vendredi 13",
    },
    {
      "number": 4,
      "question": "Quel est le nom de la poupée maléfique dans la série de films d'horreur Chucky ?",
      "answers": [
        "Annabelle",
        'Tiffany',
        "Chucky"
      ],
      "correct": "Chucky",
    },
    {
        "number": 5,
        "question": "Dans quel film d'horreur un groupe d'amis se retrouve piégé dans une maison hantée par des esprits vengeurs ?",
        "answers": [
          "Le Projet Blair Witch",
          'Le Conjuring',
          "Les Autres"
        ],
        "correct": "Le Conjuring",
      },
    {
        "number": 6,
        "question": "Quel est le nom du réalisateur de la saga Scream ?",
        "answers": [
          "Wes Craven",
          'John Carpenter',
          "Alfred Hitchcock"
        ],
        "correct": "Wes Craven",
      },
      {
          "number": 7,
          "question": "Dans quel film d'horreur un jeune garçon découvre que son voisin est un vampire ?",
          "answers": [
            "Entretien avec un vampire",
            "L'Interview avec le Vampire",
            "Twilight"
          ],
          "correct": "L'Interview avec le Vampire",
        },
        {
            "number": 8,
            "question": "Quel est le nom du monstre créé par le Dr Frankenstein dans le roman de Mary Shelley ?",
            "answers": [
              "Le Monstre de Frankenstein",
              "Dracula",
              "La Momie"
            ],
            "correct": "Le Monstre de Frankenstein",
          },
          {
              "number": 9,
              "question": "Dans quel film d'horreur un groupe de personnes est forcé de jouer à un jeu macabre où elles doivent tuer ou être tuées ?",
              "answers": [
                "Le Cube",
                "Saw",
                "Les Dents de la mer"
              ],
              "correct": "Saw",
            }
  ];

  var score = 0;
  // initialisation J'affiche toutes mes questions
  const initialize = () => {
    const myQuizz = document.querySelector("#quizz");
    let quizzRender = '';

    quizz.map((question, id) => {
      console.log(id)
      quizzRender += `
      <h3 class="question">${question.question}</h3>

      <ul>
        <label class="labelQ">
        <input type="radio" id="${question.number}" name="question${id}" value="${question.answers[0]}">
        <label class="letter">A</label><span class="question">${question.answers[0]}</span><span class="verif${question.number}"></span>
        </label></br>

        <label class="labelQ">
        <input type="radio" id="${question.number}" name="question${id}" value="${question.answers[1]}">
        <label class="letter">B</label><span class="question">${question.answers[1]}</span><span class="verif${question.number}"></span>
        </label></br>

        <label class="labelQ">
        <input type="radio" id="${question.number}" name="question${id}" value="${question.answers[2]}">
        <label class="letter">C</label><span class="question">${question.answers[2]}</span><span class="verif${question.number}"> </span>
        </label></br>
      </ul>

      
    `
    })


    myQuizz.innerHTML = quizzRender;
  }
  initialize();

  // J'appelle mes éléments
  const submit = document.querySelector("button");
  const answers = [];
  const allInput = document.querySelectorAll('input');
  const renderScore = document.querySelector("#score");
  const tips = document.querySelectorAll(".tip");
  let count = 0;
  let test = 0;
  submit.disabled = true;


  // Verification que le nombre de radio checked soit égal aux nombres de questions que j'ai dans mon Quiz
  allInput.forEach(input => {
    input.addEventListener("change", () => {

      const allInputChecked = document.querySelectorAll('input[type="radio"]:checked').length;

      if (allInputChecked === quizz.length) {
        submit.disabled = false;
      }
    })
  });

  // Lorsqu'on clique sur notre bouton Valider mes réponses
  submit.addEventListener("click", (e) => {
    logic();

    //affichage tooltip
    tips.forEach(tip => {
      tip.style.display = "inline";
    });

    // Je remonte au top de la page
    window.scrollTo(0, 0);

    //J'affiche mon score
    renderScore.innerHTML += `Vous avez obtenu un score de ${score} sur ${quizz.length}`;

    //reset score
    score = 0;
    e.preventDefault();
  })

  // sert uniquement à calculer le score
  function logic() {
    const allInputChecked = document.querySelectorAll('input[type="radio"]:checked');

    // Je récupère les radios checked et les insèrent dans un tableau.
    for (input of allInput) {
      if (input.checked == true) {
        answers.push(input.value);
      }
    }
    // Vérifie que le tableau avec les radios checked contienne les bonnes réponses prédéfinis.
    for (quiz of quizz) {
      if (answers.includes(quiz.correct)) {
        score++;
      }
    }

// Vérification des valeurs des inputs checked avec le Quiz
    allInputChecked.forEach((inputValue, index) => {
      if (inputValue.value === quizz[index].correct) {
        inputValue.nextElementSibling.nextElementSibling.nextElementSibling.textContent = " Juste :)";
        inputValue.nextElementSibling.nextElementSibling.nextElementSibling.style.color = "green";
        inputValue.nextElementSibling.nextElementSibling.style.color = "green";
        console.log(`Réponse ${index} : Juste`);

      } else {

        inputValue.nextElementSibling.nextElementSibling.nextElementSibling.textContent = " Faux :(";
        inputValue.nextElementSibling.nextElementSibling.style.color = "red";
        inputValue.nextElementSibling.nextElementSibling.nextElementSibling.style.color = "red";
        inputValue.nextElementSibling.nextElementSibling.style.textDecoration = "line-through";
        console.log(`Réponse ${index} : Faux`);
      }

    })


  }

