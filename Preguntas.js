function getRandomQuestions(questionBank, numQuestions) {
  let shuffled = questionBank.sort(() => 0.5 - Math.random());
  let selectedQuestions = shuffled.slice(0, numQuestions);
  
  selectedQuestions.forEach((question, index) => {
      question.numb = index + 1;
  });
  return selectedQuestions;
}

let questionBank = [
    {
        "numb": 1,
        "question": "¿Cuál es el nombre del protagonista de 'Naruto'?",
        "answer": "Naruto",
        "options": [
          "Sasuke",
          "Kakashi",
          "Naruto",
          "Sakura"
        ]
      },
      {
        "numb": 2,
        "question": "¿En qué anime aparece el personaje Luffy?",
        "answer": "One Piece",
        "options": [
          "Bleach",
          "One Piece",
          "Fairy Tail",
          "Death Note"
        ]
      },
      {
        "numb": 3,
        "question": "¿Quién es el mentor de Goku en 'Dragon Ball'?",
        "answer": "Maestro Roshi",
        "options": [
          "Maestro Roshi",
          "Vegeta",
          "Piccolo",
          "Krillin"
        ]
      },
      {
        "numb": 4,
        "question": "¿Cuál es el nombre del club de música ligera en 'K-On!'?",
        "answer": "Light Music Club",
        "options": [
          "Light Music Club",
          "Rock Club",
          "Pop Music Club",
          "Jazz Club"
        ]
      },
      {
        "numb": 5,
        "question": "¿Qué animal es Happy en 'Fairy Tail'?",
        "answer": "Gato",
        "options": [
          "Perro",
          "Gato",
          "Conejo",
          "Pájaro"
        ]
      },
      {
        "numb": 6,
        "question": "¿Cuál es el poder de Ichigo en 'Bleach'?",
        "answer": "Shinigami",
        "options": [
          "Ninja",
          "Shinigami",
          "Alquimista",
          "Mago"
        ]
      },
      {
        "numb": 7,
        "question": "¿En qué anime aparece el personaje Light Yagami?",
        "answer": "Death Note",
        "options": [
          "Tokyo Ghoul",
          "One Punch Man",
          "Death Note",
          "Attack on Titan"
        ]
      },
      {
        "numb": 8,
        "question": "¿Qué deporte practican en 'Haikyuu!!'?",
        "answer": "Voleibol",
        "options": [
          "Fútbol",
          "Baloncesto",
          "Voleibol",
          "Tenis"
        ]
      },
      {
        "numb": 9,
        "question": "¿Quién es el protagonista de 'Attack on Titan'?",
        "answer": "Eren Yeager",
        "options": [
          "Armin Arlert",
          "Eren Yeager",
          "Mikasa Ackerman",
          "Levi Ackerman"
        ]
      },
      {
        "numb": 10,
        "question": "¿Cómo se llama la organización criminal en 'Naruto'?",
        "answer": "Akatsuki",
        "options": [
          "Espada",
          "Phantom Troupe",
          "Akatsuki",
          "Homunculi"
        ]
      },
      {
        "numb": 11,
        "question": "¿En qué anime se encuentra la Academia U.A.?",
        "answer": "My Hero Academia",
        "options": [
          "My Hero Academia",
          "Blue Exorcist",
          "Sword Art Online",
          "Black Clover"
        ]
      },
      {
        "numb": 12,
        "question": "¿Qué tipo de criatura es Totoro en 'Mi Vecino Totoro'?",
        "answer": "Espíritu del bosque",
        "options": [
          "Espíritu del bosque",
          "Fantasma",
          "Dragón",
          "Gato"
        ]
      },
      {
        "numb": 13,
        "question": "¿Cómo se llama el protagonista de 'Sword Art Online'?",
        "answer": "Kirito",
        "options": [
          "Asuna",
          "Klein",
          "Kirito",
          "Yui"
        ]
      },
      {
        "numb": 14,
        "question": "¿En qué anime aparece el personaje Edward Elric?",
        "answer": "Fullmetal Alchemist",
        "options": [
          "Fullmetal Alchemist",
          "Black Clover",
          "Fairy Tail",
          "Hunter x Hunter"
        ]
      },
      {
        "numb": 15,
        "question": "¿Cuál es el objetivo de Gon Freecss en 'Hunter x Hunter'?",
        "answer": "Encontrar a su padre",
        "options": [
          "Convertirse en Hokage",
          "Encontrar a su padre",
          "Ser el mejor espadachín",
          "Obtener todas las bolas de dragón"
        ]
      },
      {
        "numb": 16,
        "question": "¿Qué anime trata sobre la vida después de la muerte en una escuela?",
        "answer": "Angel Beats!",
        "options": [
          "Angel Beats!",
          "Clannad",
          "Your Lie in April",
          "Toradora!"
        ]
      },
      {
        "numb": 17,
        "question": "¿Cuál es el nombre del protagonista de 'Tokyo Ghoul'?",
        "answer": "Ken Kaneki",
        "options": [
          "Ken Kaneki",
          "Touka Kirishima",
          "Yoshimura",
          "Nishiki Nishio"
        ]
      },
      {
        "numb": 18,
        "question": "¿Qué tipo de criaturas son los titanes en 'Attack on Titan'?",
        "answer": "Humanos transformados",
        "options": [
          "Robots",
          "Humanos transformados",
          "Demonios",
          "Animales gigantes"
        ]
      },
      {
        "numb": 19,
        "question": "¿En qué anime los personajes usan 'quirks' o poderes especiales?",
        "answer": "My Hero Academia",
        "options": [
          "Fairy Tail",
          "My Hero Academia",
          "Bleach",
          "Sword Art Online"
        ]
      },
      {
        "numb": 20,
        "question": "¿Cuál es el nombre del demonio que hace un contrato con Ciel Phantomhive en 'Black Butler'?",
        "answer": "Sebastian Michaelis",
        "options": [
          "Grell Sutcliff",
          "Claude Faustus",
          "Sebastian Michaelis",
          "Alois Trancy"
        ]
      },
      {
        "numb": 21,
        "question": "¿En qué anime los personajes viajan a través de puertas dimensionales?",
        "answer": "Steins;Gate",
        "options": [
          "The Seven Deadly Sins",
          "Re:Zero",
          "Steins;Gate",
          "No Game No Life"
        ]
      },
      {
        "numb": 22,
        "question": "¿Quién es el protagonista de 'One Punch Man'?",
        "answer": "Saitama",
        "options": [
          "Genos",
          "Bang",
          "Saitama",
          "King"
        ]
      },
      {
        "numb": 23,
        "question": "¿Cuál es el nombre del protagonista de 'Naruto' después del salto temporal?",
        "answer": "Naruto Uzumaki",
        "options": [
          "Naruto Uzumaki",
          "Sasuke Uchiha",
          "Shikamaru Nara",
          "Rock Lee"
        ]
      },
      {
        "numb": 24,
        "question": "¿En qué anime aparece el personaje Natsu Dragneel?",
        "answer": "Fairy Tail",
        "options": [
          "Fairy Tail",
          "Blue Exorcist",
          "Attack on Titan",
          "Bleach"
        ]
      },
      {
        "numb": 25,
        "question": "¿Qué tipo de criaturas son las 'puella magi' en 'Puella Magi Madoka Magica'?",
        "answer": "Magas",
        "options": [
          "Hechiceras",
          "Ángeles",
          "Magas",
          "Cazadoras de demonios"
        ]
      },
      {
        "numb": 26,
        "question": "¿Cuál es el nombre del protagonista de 'Sword Art Online'?",
        "answer": "Kirito",
        "options": [
          "Kirito",
          "Eugeo",
          "Sinon",
          "Klein"
        ]
      },
      {
        "numb": 27,
        "question": "¿Quién es el protagonista de 'Code Geass'?",
        "answer": "Lelouch Lamperouge",
        "options": [
          "Suzaku Kururugi",
          "Lelouch Lamperouge",
          "C.C.",
          "Nunnally vi Britannia"
        ]
      },
      {
        "numb": 28,
        "question": "¿Qué deporte practican en 'Kuroko no Basket'?",
        "answer": "Baloncesto",
        "options": [
          "Balonmano",
          "Baloncesto",
          "Fútbol",
          "Voleibol"
        ]
      },
      {
        "numb": 29,
        "question": "¿Cómo se llama el protagonista de 'Death Note'?",
        "answer": "Light Yagami",
        "options": [
          "L",
          "Misa Amane",
          "Light Yagami",
          "Near"
        ]
      },
      {
        "numb": 30,
        "question": "¿Qué clase de criaturas cazan los protagonistas en 'Hunter x Hunter'?",
        "answer": "Bestias mágicas",
        "options": [
          "Demonios",
          "Fantasmas",
          "Bestias mágicas",
          "Criminales"
        ]
      }
]

let questions = getRandomQuestions(questionBank, 10);