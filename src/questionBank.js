const questionBank = [
  {
    title: "Dawn or  Dusk?",
    answers: [
      {
        answer: "Dawn",
        gryffindor: 50,
        ravenclaw: 50
      },
      {
        answer: "Dusk",
        hufflepuff: 50,
        slytherin: 50
      }
    ]
  },
  {
    title: "Forest or River?",
    answers: [
      {
        answer: "Forest",
        gryffindor: 50,
        ravenclaw: 50
      },
      {
        answer: "River",
        hufflepuff: 50,
        slytherin: 50
      }
    ]
  },
  {
    title: "Moon or Stars?",
    answers: [
      {
        answer: "Moon",
        ravenclaw: 50,
        slytherin: 50
      },
      {
        answer: "Stars",
        gryffindor: 50,
        hufflepuff: 50
      }
    ]
  },
  {
    title: "Which of the following would you most hate people to call you?",
    answers: [
      {
        answer: "Incapable",
        slytherin: 100
      },
      {
        answer: "Close-Minded",
        ravenclaw: 100
      },
      {
        answer: "Cowardly",
        gryffindor: 100
      },
      {
        answer: "Lazy",
        hufflepuff: 100
      }
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
        answer: "Intelligent",
        ravenclaw: 100,
      }
    ]
  },
  {
    title: "How would you like to be known to history?",
    answers: [
      {
        answer: "The wise",
        ravenclaw: 100,
      },
      {
        answer: "The kind",
        hufflepuff: 100,
      },
      {
        answer: "The exceptional",
        slytherin: 100,
      },
      {
        answer: "The virtuous",
        gryffindor: 100,
      },
    ]
  },
  {
    title: "If you could have more of one of the following things in your Muggle life, which would you choose?",
    answers: [
      {
        answer: "Time",
        hufflepuff: 100
      },
      {
        answer: "Luck",
        gryffindor: 100
      },
      {
        answer: "Wisdom",
        ravenclaw: 100
      },
      {
        answer: "Skill",
        slytherin: 100
      }
    ]
  },
  {
    title: "Once every century, the Flutterby bush produces flowers that adapt their scent to attract the unwary. If it lured you, it would smell of:",
    answers: [
      {
        answer: "Cold mountain air",
        gryffindor: 100
      },
      {
        answer: "City air on a summer night",
        slytherin: 100
      },
      {
        answer: "A bookstore",
        ravenclaw: 100
      },
      {
        answer: "Home",
        hufflepuff: 100
      }
    ]
  },
  {
    title: "Four goblets are placed before you. Which would you drink?",
    answers: [
      {
        answer: "The foaming, frothing, silvery liquid that sparkles as though containing ground diamonds.",
        ravenclaw: 50,
      },
      {
        answer: "The smooth, thick, richly purple drink that gives off a delicious smell of chocolate and plums.",
        hufflepuff: 50,
      },
      {
        answer: "The golden liquid so bright that it hurts the eye, and which makes sunspots dance all around the room.",
        gryffindor: 50,
      },
      {
        answer: "The mysterious black liquid that gleams like ink, and draws you in with a scent you can't quite describe",
        slytherin: 50,
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
        answer: "The statue of an old wizard with a strangely twinkling eye",
        slytherin: 50,
      },
      {
        answer: "The mouth of a cave too dark to see into, but with faint music coming from within",
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
        answer: "The small pewter box, unassuming and plain, with a scratched message upon it that reads ‘I open only for the most honorable'",
        gryffindor: 100,
      }
    ]
  },
  {
    title: "A troll has gone beserk in the Room of Hidden Things at Hogwarts. It is about to smash, crush and tear several items and treasures. In which order would you rescue these objects from the troll's club, if you could?",
    answers: [
      {
        answer: "First, the broomsticks belonging to the students on the Quidditch Team. Then student records going back 1000 years. Finally, an old handwritten book, written in a language you don't recognize.",
        gryffindor: 50,
        hufflepuff: 50,
      },
      {
        answer: "First, student records going back 1000 years. Then an old handwritten book, written in a language you don't recognize. Finally, the broomsticks belonging to the students on the Quidditch Team",
        slytherin: 100,
      },
      {
        answer: "First, an old handwritten book, written in a language you don't recognize. Then the broomsticks belonging to the students on the Quidditch Team. Finally, student records going back 1000 years.",
        ravenclaw: 100,
      },
      {
        answer: "First, the broomsticks belonging to the students on the Quidditch Team. Then an old handwritten book, written in a language you don't recognize. Finally, student records going back 1000 years.",
        gryffindor: 100,
      },
      {
        answer: "First student records going back 1000 years. Then, the broomsticks belonging to the students on the Quidditch Team. Finally, an old handwritten book, written in a language you don't recognize.",
        hufflepuff: 100,
      },
      {
        answer: "First, an old handwritten book, written in a language you don't recognize. Then student records going back 1000 years. Finally, the broomsticks belonging to the students on the Quidditch Team",
        ravenclaw: 50,
        slytherin: 50,
      }
    ]
  },
  {
    title: "Which of the following do you find most difficult to deal with?",
    answers: [
      {
        answer: "Being worried",
        hufflepuff: 50,
        ravenclaw: 50,
      },
      {
        answer: "Being judged",
        hufflepuff: 50,
        slytherin: 50,
      },
      {
        answer: "Loneliness",
        gryffindor: 50,
        hufflepuff: 50,
      },
      {
        answer: "Being micromanaged",
        gryffindor: 50,
        slytherin: 50,
      },
      {
        answer: "Being lied to",
        gryffindor: 50,
        ravenclaw: 50,
      },
      {
        answer: "Being ignored",
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
        answer: "Power of super speed",
        gryffindor: 50,
        slytherin: 50,
      },
      {
        answer: "Power of superhuman strength",
        hufflepuff: 50,
        slytherin: 50,
      },
      {
        answer: "Power to speak to animals",
        hufflepuff: 50,
        ravenclaw: 50,
      },
      {
        answer: "Power of elasticity (super stretching)",
        gryffindor: 50,
        hufflepuff: 50,
      },
      {
        answer: "Power to experience the past",
        gryffindor: 50,
        ravenclaw: 50,
      },
    ]
  },
  {
    title: "What are you most looking forward to learning about at Hogwarts?",
    answers: [
      {
        answer: "Apparition and Disapparition",
        ravenclaw: 50,
        slytherin: 50,
      },
      {
        answer: "Secret passages in the castle",
        gryffindor: 75,
        slytherin: 25,
      },
      {
        answer: "The Room of Requirement",
        ravenclaw: 25,
        slytherin: 75,
      },
      {
        answer: "Flying on a broomstick",
        gryffindor: 100,
      },
      {
        answer: "Magical communities like Hogsmeade",
        hufflepuff: 100,
      },
      {
        answer: "All about the other witches and wizards in my classes",
        hufflepuff: 75,
        slytherin: 25,
      },
      {
        answer: "Everything about your classes!",
        ravenclaw: 100,
      }
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
        answer: "Care of Magical Creatures",
        hufflepuff: 100,
      }
    ]
  },
  {
    title: "Which of the following would you most like to study?",
    answers: [
      {
        answer: "Centaurs",
        gryffindor: 50,
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
    title: "A Muggle confronts you and says that they are sure you are a witch/wizard. Do you:",
    answers: [
      {
        answer: "Spend a long time trying to convince them otherwise",
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
        answer: "Turn the conversation around to talk about them",
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
        answer: "Waking up to find that no one has any idea who you are.",
        hufflepuff: 100,
      },
      {
        answer: "You are being chased by something that you can't see.",
        slytherin: 100,
      }
    ]
  },
  {
    title: "If you were attending hogwarts, which magical creature would you be most interested in studying?",
    answers: [
      {
        answer: "Thestral",
        hufflepuff: 50,
        ravenclaw: 50,
      },
      {
        answer: "Phoenix",
        gryffindor: 50,
        ravenclaw: 50,
      },
      {
        answer: "Hippogriff",
        gryffindor: 50,
        hufflepuff: 50,
      },
      {
        answer: "Niffler",
        hufflepuff: 50,
        slytherin: 50,
      },
      {
        answer: "Unicorn",
        ravenclaw: 50,
        slytherin: 50,
      },
      {
        answer: "Dragon",
        gryffindor: 50,
        slytherin: 50,
      }
    ]
  },
  {
    title: "Black or white?",
    answers: [
      {
        answer: "Black",
        gryffindor: 50,
        slytherin: 50,
      },
      {
        answer: "White",
        hufflepuff: 50,
        ravenclaw: 50,
      }
    ]
  },
  {
    title: "Heads or tails?",
    answers: [
      {
        answer: "Heads",
        hufflepuff: 50,
        ravenclaw: 50,
      },
      {
        answer: "Tails",
        gryffindor: 50,
        slytherin: 50,
      },
    ]
  },
  {
    title: "Left or right?",
    answers: [
      {
        answer: "Left",
        slytherin: 50,
        ravenclaw: 50,
      },
      {
        answer: "Right",
        gryffindor: 50,
        hufflepuff: 50,
      },
    ]
  },
  {
    title: "The sorting hat takes your opinion into consideration. What house do you feel you belong in?",
    answers: [
      {
        answer: "Gryffindor",
        gryffindor: 250,
      },
      {
        answer: "Ravenclaw",
        ravenclaw: 250,
      },
      {
        answer: "Hufflepuff",
        hufflepuff: 250,
      },
      {
        answer: "Slytherin",
        slytherin: 250,
      }
    ]
  },
  {
    title: "Which of these Dumbledore quotations speak to you?",
    answers: [
      {
        answer: '"Pity the living, and above all, those who live without love."',
        hufflepuff: 100,
      },
      {
        answer: '"It’s the unknown we fear when we look upon death and darkness, nothing more."',
        ravenclaw: 100,
      },
      {
        answer: '"It matters not what someone is born, but what they grow to be."',
        slytherin: 100,
      },
      {
        answer: '"It is our choices that show what we truly are far more than our abilities"',
        gryffindor: 100,
      }
    ]
  },
  {
    title: "The first Quidditch match of the season is approaching, and you can't wait to get involved. What role are you playing?",
    answers: [
      {
        answer: "Seeker",
        gryffindor: 25,
        slytherin: 75,
      },
      {
        answer: "Chaser",
        hufflepuff: 25,
        ravenclaw: 75,
      },
      {
        answer: "Beater",
        gryffindor: 75,
        slytherin: 25,
      },
      {
        answer: "Keeper",
        hufflepuff: 100,
      }
    ]
  },
  {
    title: "You find yourself with some unexpected free time alone. What do you do?",
    answers: [
      {
        answer: "Call a friend to catch up",
        gryffindor: 50,
        hufflepuff: 50,
      },
      {
        answer: "Work on a passion project",
        gryffindor: 50,
        ravenclaw: 50,
      },
      {
        answer: "Spend some time outside",
        gryffindor: 50,
        slytherin: 50,
      },
      {
        answer: "Work on a creative hobby",
        hufflepuff: 50,
        ravenclaw: 50,
      },
      {
        answer: "Some sort of project around the house",
        hufflepuff: 50,
        slytherin: 50,
      },
      {
        answer: "Read a book",
        ravenclaw: 50,
        slytherin: 50,
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
        answer: "You blew off plans with them",
        slytherin: 100,
      },
      {
        answer: "They are frustrated because you've been acting like a know-it-all",
        ravenclaw: 100,
      }
    ]
  },
  {
    title: "Two of your friends are fighting with each other. What do you do?",
    answers: [
      {
        answer: "Mediate a conversation between the two",
        gryffindor: 50,
        hufflepuff: 50,
      },
      {
        answer: "Listen to both of them, without passing judgement",
        hufflepuff: 50,
        ravenclaw: 50,
      },
      {
        answer: "Privately try to convince each of them to move on",
        hufflepuff: 50,
        slytherin: 50,
      },
      {
        answer: "Tell each of them what you would do in their situation",
        gryffindor: 50,
        ravenclaw: 50,
      },
      {
        answer: "Let them figure it out on their own",
        ravenclaw: 50,
        slytherin: 50,
      },
      {
        answer: "Defend the friend whose side you agree with",
        gryffindor: 50,
        slytherin: 50,
      }
    ]
  },
  {
    title: "You are walking through the woods and come across a river blocking your path. There is an old, rickety bridge crossing the river, and you can't tell if it would support your weight all the way across. What do you do?",
    answers: [
      {
        answer: "Try and cross the bridge, even if it might be more risky",
        gryffindor: 50,
        slytherin: 50,
      },
      {
        answer: "Try to find another way around, even if you might not succeed",
        hufflepuff: 50,
        ravenclaw: 50,
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
        answer: "Tell them that you really want to stick with your schedule, but give them a copy of the schedule in case they want to do something similar.",
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
    title: "Oh no! After young Harry Potter defeated He-Who-Must-Not-Be-Named, the Ministry of Magic has its hands full. There are Dark Wizards on the run, wizards and Muggles alike have been injured by magical accidents, and Muggles have even noticed an influx of owls during the day. What are you doing to help respond to the crisis?",
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
        answer: "You are on the Catastrophe Response Committee, fixing property damage and/or healing injuries from magical duels or celebrations gone out of hand",
        hufflepuff: 100,
      },
      {
        answer: "You're an Auror, rounding up Dark Wizards on the loose",
        gryffindor: 100,
      }
    ]
  }
  ];
  
  export default questionBank;