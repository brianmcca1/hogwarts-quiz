const questionBank = [
  {
    title: "How would you like to be known to history?",
    answers: [
      {
        answer: "The wise",
        ravenclaw: 100
      },
      {
        answer: "The kind",
        hufflepuff: 100
      },
      {
        answer: "The exceptional",
        slytherin: 100
      },
      {
        answer: "The brave",
        gryffindor: 100
      }
    ],
  },
  {
    title: "If you could have more of one of the following things in your Muggle life, which would you choose?",
    answers: [
      {
        answer: "Time: you get an extra hour each day",
        hufflepuff: 100,
      },
      {
        answer: "Luck: everything goes your way",
        gryffindor: 100,
      },
      {
        answer: "Wisdom: the capacity to understand things more readily",
        ravenclaw: 100,
      },
      {
        answer: "Skill: instance improvement at any set of skills you choose",
        slytherin: 100,
      }
    ]
  },
  {
    title: "Which of the following would you most hate people to call you?",
    answers: [
      {
        answer: "Incapable",
        slytherin: 100,
      },
      {
        answer: "Close-Minded",
        ravenclaw: 100,
      },
      {
        answer: "Cowardly",
        gryffindor: 100,
      },
      {
        answer: "Selfish",
        hufflepuff: 100,
      },
    ]
  },
  {
    title: "When you  post on social media, how do you want your followers to  perceive you?",
    answers: [
      {
        answer: "Fun",
        hufflepuff: 100,
      },
      {
        answer: "Adventurous",
        gryffindor: 100,
      },
      {
        answer: "Cultured",
        slytherin: 100,
      },
      {
        answer: "Supportive",
        hufflepuff: 100,
      },
      {
        answer: "Informed",
        gryffindor: 100,
      },
      {
        answer: "Accomplished",
        slytherin: 100,
      },
      {
        answer: "Artistic",
        ravenclaw: 100,
      },
      {
        answer: "I have never thought about it",
        ravenclaw: 100,
      }
    ]
  },
  {
    title: "You enter an enchanted garden. What would you be most curious to examine first?",
    answers: [
      {
        answer: "The silver leafed tree bearing golden apples",
        ravenclaw: 50,
      },
      {
        answer: "The fat red toadstools that appear to be talking to each other",
        hufflepuff: 50,
      },
      {
        answer: "The bubbling pool, in the depths of which something mysterious is swirling",
        slytherin: 50,
      },
      {
        answer: "The statue of an old wizard with a strangely twinkling eye",
        gryffindor:  50,
      }
    ]
  },
  {
    title: "Four boxes are placed before you. Which would you try to open?",
    answers: [
      {
        answer: "The small tortoiseshell box, embellished with gold, inside which some small creature seems to be squeaking.",
        hufflepuff: 100,
      },
      {
        answer: "The gleaming emerald box with a silver lock and key, marked with a mysterious rune that you know to be the mark of a powerful witch or wizard",
        slytherin: 100,
      },
      {
        answer: "The ornate golden casket, standing on clawed feet, whose inscription warns that secret knowledge lies within.",
        ravenclaw: 100,
      },
      {
        answer: "The small pewter box, unassuming and plain, with a scratched message upon it that reads ‘I open only for the most honorable",
        gryffindor: 100,
      }
    ]
  },
  {
    title: "A troll has gone beserk in the Room of Hidden Things at Hogwarts. It is about to smash, crush and tear several items and treasures. In which order would you rescue these objects from the troll's club, if you could?",
    answers: [
      {
        answer: "First, the broomsticks belonging to the students on the Quidditch Team. Then student records going back 1000 years. Finally, a mysterious handwritten book full of strange runes.",
        gryffindor: 50,
        hufflepuff: 50,
      },
      {
        answer: "First, student records going back 1000 years. Then a mysterious handwritten book full of strange runes. Finally, the broomsticks belonging to the students on the Quidditch Team",
        slytherin: 100,
      },
      {
        answer: "First, a mysterious handwritten book full of strange runes. Then the broomsticks belonging to the students on the Quidditch Team. Finally, student records going back 1000 years.",
        ravenclaw: 100,
      },
      {
        answer: "First, the broomsticks belonging to the students on the Quidditch Team. Then a mysterious handwritten book full of strange runes. Finally, student records going back 1000 years.",
        gryffindor: 100,
      },
      {
        answer: "First student records going back 1000 years. Then, the broomsticks belonging to the students on the Quidditch Team. Finally, a mysterious handwritten book full of strange runes.",
        hufflepuff: 100,
      },
      {
        answer: "First, a mysterious handwritten book full of strange runes. Then student records going back 1000 years. Finally, the broomsticks belonging to the students on the Quidditch Team",
        ravenclaw: 50,
        slytherin: 50,
      }
    ]
  },
  {
    title: "If you could have any power, which would you choose?",
    answers: [
      {
        answer: "Power to move objects with your mind",
        ravenclaw: 50,
        slytherin: 50,
      },
      {
        answer: "Power to influence opinions",
        gryffindor: 50,
        slytherin: 50,
      },
      {
        answer: "Power of superhuman strength",
        hufflepuff: 50,
        slytherin: 50,
      },
      {
        answer: "Power to speak any language",
        hufflepuff: 50,
        ravenclaw: 50,
      },
      {
        answer: "Power to turn into an animal",
        gryffindor: 50,
        hufflepuff: 50,
      },
      {
        answer: "Power of super speed",
        gryffindor: 100,
      },
      {
        answer: "Power to experience the past",
        gryffindor: 50,
        ravenclaw: 50,
      },
    ]
  },
  {
    title: "Which of these disciplines are you most excited to learn about at Hogwarts?",
    answers: [
      {
        answer: "Transfiguration",
        ravenclaw: 100,
      },
      {
        answer: "Potions",
        slytherin: 100,
      },
      {
        answer: "Defense Against the Dark Arts",
        gryffindor: 100,
      },
      {
        answer: "Charms",
        hufflepuff: 100,
      }
    ]
  },
  {
    title: "Which of the following would you most like to study?",
    answers: [
      {
        answer: "Centaurs",
        gryffindor:  50,
        ravenclaw: 50,
      },
      {
        answer: "Sphinxes",
        ravenclaw: 75,
        slytherin: 25,
      },
      {
        answer: "Dementors",
        hufflepuff: 50,
        slytherin: 50,
      },
      {
        answer: "Ghosts",
        hufflepuff: 50,
        ravenclaw: 50,
      },
      {
        answer: "Giants",
        slytherin: 100,
      },
      {
        answer: "Werewolves",
        gryffindor: 50,
        hufflepuff: 50,
      }
    ]
  },
  {
    title: "A Muggle confronts you and says that they are sure you are a witch or wizard. Do  you:",
    answers: [
      {
        answer: "Spend as long as necessary trying to convince them otherwise",
        ravenclaw: 100,
      },
      {
        answer: "Flatly deny it and walk away",
        slytherin: 100,
      },
      {
        answer: "Agree and walk away, leaving them to wonder whether you're bluffing",
        gryffindor: 100,
      },
      {
        answer: "Politely deny it, and then turn the conversation around to talk about them",
        hufflepuff: 100,
      }
    ]
  },
  {
    title: "Which nightmare would frighten you most?",
    answers: [
      {
        answer: "Standing on top of something very high and realizing suddenly that there are no hand- or footholds, nor any barrier to stop you falling.",
        ravenclaw: 100,
      },
      {
        answer: "You are locked in a dark windowless room, when an eye peers the keyhole",
        gryffindor: 100,
      },
      {
        answer: "Waking up to find that neither your friends nor your family have any idea who you are.",
        hufflepuff: 100,
      },
      {
        answer: "You are being chased by something that you can't see. You scream but no sound comes out",
        slytherin: 100,
      }
    ]
  },
  {
    title: "You're home alone and you hear a peculiar noise from your attic that sounds like some sort of small wild animal. You're a little bit nervous about what it might be. What do you do?",
    answers: [
      {
        answer: "Call animal control, just in case. Safety first!",
        hufflepuff: 100,
      },
      {
        answer: "Grab something to protect yourself and see for yourself what's making the noise",
        gryffindor: 100,
      },
      {
        answer: "Ignore it",
        slytherin: 100,
      },
      {
        answer: "Consult google to figure out which animals it might be, how dangerous they are, and how best to deal with them",
        ravenclaw: 100,
      }
    ]
  },
  {
    title: "A loved one is upset with you. Why?",
    answers: [
      {
        answer: "A small disagreement spiraled out of control because you wouldn't admit that you were wrong",
        gryffindor: 100,
      },
      {
        answer: "You were being a pushover",
        hufflepuff: 100,
      },
      {
        answer: "You haven't been spending enough time with them",
        slytherin: 100,
      },
      {
        answer: "They are frustrated because you've been acting like a know-it-all",
        ravenclaw: 100,
      }
    ]
  },
  {
    title: "You're training for the Scotland Sweeper- a broomstick marathon across the whole country of Scotland. You are determined to get a personal best time, and have created a training schedule to allow you to achieve this goal. A friend, who is much slower than you, signs up for the Sweeper too, and asks if you can train together. You know that training with the friend will slow you down. What do you do? ",
    answers: [
      {
        answer: "Tell them honestly that you're hoping for a personal best, so you'll do a few practice runs with them, but you want to train alone. ",
        slytherin: 100,
      },
      {
        answer: "Tell them that you really want to stick with your schedule, but give them a copy of the schedule in case they want to join you.",
        ravenclaw: 100,
      },
      {
        answer: "Agree to train with them. As for your own goals, you'll cross that bridge when you get there",
        gryffindor: 100,
      },
      {
        answer: "You know you probably won't make a new personal best, but you agree to train with them anyways. At least you can help your friend.",
        hufflepuff: 100,
      }
    ]
  },
  {
    title: "Oh no! After young Harry Potter defeated He-Who-Must-Not-Be-Named, muggles noticed an influx of owls flying around during the day. Your work for the Department of Magical Accidents and Catastrophes, which is dispersing several teams to clear up this conundrum. Which role are you playing?",
    answers: [
      {
        answer: "You're on the Muggle-Worthy Excuse Committee, a team tasked with researching Muggle science and coming up with a plausible explanation for the owls to publish in the newspapers",
        ravenclaw: 100,
      },
      {
        answer: "You're the Head of the team, leading the task force and coordinating with other Ministry departments to increase your manpower",
        slytherin: 100,
      },
      {
        answer: "You are on the Catastrophe Contact Committee, talking to Muggles to figure out the scope of what they saw to assess the damage and inform the Ministry's response",
        hufflepuff: 100,
      },
      {
        answer: "You're part of the Accidental Magic Reversal squad, going undercover in Muggle birdwatching groups to spread fake explanations for why the owls were out in the day",
        gryffindor: 100,
      }
    ]
  }
    // {
    //   title: "Dawn or Dusk?",
    //   answers: [
    //     {
    //       answer: "Dawn",
    //       ravenclaw: 50,
    //       gryffindor: 50,
    //     },
    //     {
    //       answer: "Dusk",
    //       hufflepuff: 50,
    //       slytherin: 50,
    //     },
    //   ]
    // },
    // {
    //   title: "Forest or River?",
    //   answers: [
    //     {
    //       answer: "Forest",
    //       ravenclaw: 50,
    //       gryffindor: 50,
    //     },
    //     {
    //       answer: "River",
    //       hufflepuff: 50,
    //       slytherin: 50,
    //     },
    //   ]
    // },
    // {
    //   title: "Moon or Stars?",
    //   answers: [
    //     {
    //       answer: "Moon",
    //       ravenclaw: 50,
    //       slytherin: 50,
    //     },
    //     {
    //       answer: "Stars",
    //       hufflepuff: 50,
    //       gryffindor: 50,
    //     },
    //   ]
    // },
    // {
    //   title: "Which of the following would you most hate to have people call you?",
    //   answers: [
    //     {
    //       answer: "Incapable",
    //       slytherin: 100,
    //     },
    //     {
    //       answer: "Close-Minded",
    //       ravenclaw: 100,
    //     },
    //     {
    //       answer: "Cowardly",
    //       gryffindor: 100,
    //     },
    //     {
    //       answer: "Selfish",
    //       hufflepuff: 100,
    //     },
    //   ]
    // },
    // {
    //   title: "When you post on social media, how do you want your followers to perceive you?",
    //   answers: [
    //     {
    //       answer: "Fun",
    //       hufflepuff: 100,
    //     },
    //     {
    //       answer: "Adventurous",
    //       gryffindor: 100,
    //     },
    //     {
    //       answer: "Cultured",
    //       slytherin: 100,
    //     },
    //     {
    //       answer: "Supportive",
    //       hufflepuff: 100,
    //     },
    //     {
    //       answer: "Informed",
    //       gryffindor: 100,
    //     },
    //     {
    //       answer: "Accomplished",
    //       slytherin: 100,
    //     },
    //     {
    //       answer: "Artistic",
    //       ravenclaw: 100,
    //     },
    //     {
    //       answer: "I have never thought about it",
    //       ravenclaw: 100,
    //     },
    //   ]
    // },
    // {
    //   title: "How would you like to be known to history?",
    //   answers: [
    //     {
    //       answer: "The wise",
    //       ravenclaw: 100,
    //     },
    //     {
    //       answer: "The kind",
    //       hufflepuff: 100,
    //     },
    //     {
    //       answer: "The great",
    //       slytherin: 100,
    //     },
    //     {
    //       answer: "The virtuous",
    //       gryffindor: 100,
    //     },
    //   ]
    // },
    // {
    //   title: "Given the choice, would you rather invent a potion that would give you more:",
    //   answers: [
    //     {
    //       answer: "Time: you get an extra hour each day",
    //       hufflepuff: 100,
    //     },
    //     {
    //       answer: "Luck: everything goes your way",
    //       gryffindor: 100,
    //     },
    //     {
    //       answer: "Wisdom: the capacity to understand things more readily",
    //       ravenclaw: 100,
    //     },
    //     {
    //       answer: "Skill: instant improvement at any set of skills you choose",
    //       slytherin: 100,
    //     }
    //   ]
    // }
  ];
  
  export default questionBank;