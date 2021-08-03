const questionBank = [
  {
    title: "Dawn or  Dusk?",
    answers: [
      {
        answer: "Dawn",
        gryffindor: 20,
        ravenclaw: 20
      },
      {
        answer: "Dusk",
        hufflepuff: 20,
        slytherin: 20
      }
    ]
  },
  {
    title: "Forest or River?",
    answers: [
      {
        answer: "Forest",
        gryffindor: 20,
        ravenclaw: 20
      },
      {
        answer: "River",
        hufflepuff: 20,
        slytherin: 20
      }
    ]
  },
  {
    title: "Moon or Stars?",
    answers: [
      {
        answer: "Moon",
        ravenclaw: 20,
        slytherin: 20
      },
      {
        answer: "Stars",
        gryffindor: 20,
        hufflepuff: 20
      }
    ]
  },
  {
    title: "Four boxes are placed before you. Which would you try to open?",
    answers: [
      {
        answer: "The small tortoiseshell box, embellished with gold, inside which some small creature seems to be squeaking.",
        hufflepuff: 80,
      },
      {
        answer: "The gleaming emerald box with a silver lock and key, marked with a mysterious rune that you know to be the mark of a powerful witch or wizard",
        slytherin: 80,
      },
      {
        answer: "The ornate golden casket, standing on clawed feet, whose inscription warns that secret knowledge lies within.",
        ravenclaw: 80,
      },
      {
        answer: "The small pewter box, unassuming and plain, with a scratched message upon it that reads ‘I open only for the most honorable'",
        gryffindor: 80,
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
    title: "Which nightmare would frighten you most?",
    answers: [
      {
        answer: "Standing on top of something very high and realizing suddenly that there are no hand- or footholds, nor any barrier to stop you falling.",
        ravenclaw: 100,
      },
      {
        answer: "You are trapped in a box with no room to stand. An eye peers through the keyhole.",
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
    title: "Two of your friends are fighting with each other. What do you do?",
    answers: [
      {
        answer: "Propose an imperfect compromise",
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
    title: "You enter an enchanted garden. What would you be most curious to examine first?",
    answers: [
      {
        answer: "The silver leafed tree bearing golden apples",
        ravenclaw: 60,
      },
      {
        answer: "The fat red toadstools that appear to be talking to each other",
        hufflepuff: 60,
      },
      {
        answer: "The statue of an old wizard with a strangely twinkling eye",
        slytherin: 60,
      },
      {
        answer: "The mouth of a cave too dark to see into, but with faint music coming from within",
        gryffindor:  60,
      }
    ]
  },
  {
    title: "Once every century, the Flutterby bush produces flowers that adapt their scent to attract the unwary. If it lured you, it would smell of:",
    answers: [
      {
        answer: "Cold mountain air",
        gryffindor: 80
      },
      {
        answer: "A cafe",
        slytherin: 80
      },
      {
        answer: "A bookstore",
        ravenclaw: 80
      },
      {
        answer: "Home",
        hufflepuff: 80
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
    title: "Which of the following would you most hate people to call you?",
    answers: [
      {
        answer: "Incapable",
        slytherin: 150
      },
      {
        answer: "Ignorant",
        ravenclaw: 150
      },
      {
        answer: "Cowardly",
        gryffindor: 150
      },
      {
        answer: "Lazy",
        hufflepuff: 150
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
        answer: "Being lonely",
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
    title: "Which of these disciplines are you most excited to learn about at Hogwarts?",
    answers: [
      {
        answer: "Transfiguration",
        ravenclaw: 80,
      },
      {
        answer: "Potions",
        slytherin: 80,
      },
      {
        answer: "Defense Against the Dark Arts",
        gryffindor: 80,
      },
      {
        answer: "Care of Magical Creatures",
        hufflepuff: 80,
      }
    ]
  },
  {
    title: "A Muggle confronts you and says that they are sure you are a witch/wizard. Do you:",
    answers: [
      {
        answer: "Spend a long time trying to convince them otherwise",
        ravenclaw: 150,
      },
      {
        answer: "Politely deny it and walk away",
        slytherin: 150,
      },
      {
        answer: "Agree and walk away, leaving them to wonder whether you're bluffing",
        gryffindor: 150,
      },
      {
        answer: "Turn the conversation around to talk about them",
        hufflepuff: 150,
      }
    ]
  },
  {
    title: "What are you most looking forward to learning about at Hogwarts?",
    answers: [
      {
        answer: "Apparition and Disapparition",
        ravenclaw: 40,
        slytherin: 40,
      },
      {
        answer: "Secret passages in the castle",
        gryffindor: 60,
        slytherin: 20,
      },
      {
        answer: "The Room of Requirement",
        ravenclaw: 20,
        slytherin: 60,
      },
      {
        answer: "Flying on a broomstick",
        gryffindor: 80,
      },
      {
        answer: "Magical communities like Hogsmeade",
        hufflepuff: 80,
      },
      {
        answer: "All about the other witches and wizards in my classes",
        hufflepuff: 60,
        slytherin: 20,
      },
      {
        answer: "Everything about the classes!",
        ravenclaw: 80,
      }
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
    title: "Which of the following would you most like to study?",
    answers: [
      {
        answer: "Centaurs",
        gryffindor: 40,
        ravenclaw: 40,
      },
      {
        answer: "Sphinxes",
        ravenclaw: 60,
        slytherin: 20,
      },
      {
        answer: "Dementors",
        hufflepuff: 40,
        slytherin: 40,
      },
      {
        answer: "Ghosts",
        hufflepuff: 40,
        ravenclaw: 40,
      },
      {
        answer: "Giants",
        slytherin: 80,
      },
      {
        answer: "Werewolves",
        gryffindor: 40,
        hufflepuff: 40,
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
    title: "A troll has gone beserk in the Room of Hidden Things at Hogwarts. It is about to smash, crush and tear several items and treasures. In which order would you rescue these objects from the troll's club, if you could?",
    answers: [
      {
        answer: "First, a handful of wands left behind by students fleeing from the troll. Then a stack of letters that were mailed to students from home. Finally, an old handwritten book, written in a language you don't recognize.",
        gryffindor: 50,
        hufflepuff: 50,
      },
      {
        answer: "First, a stack of letters that were mailed to students from home. Then an old handwritten book, written in a language you don't recognize. Finally, a handful of wands left behind by students fleeing from the troll.",
        slytherin: 100,
      },
      {
        answer: "First, an old handwritten book, written in a language you don't recognize. Then a handful of wands left behind by students fleeing from the troll. Finally, a stack of letters that were mailed to students from home.",
        ravenclaw: 100,
      },
      {
        answer: "First, a handful of wands left behind by students fleeing from the troll. Then an old handwritten book, written in a language you don't recognize. Finally, a stack of letters that were mailed to students from home.",
        gryffindor: 100,
      },
      {
        answer: "First, a stack of letters that were mailed to students from home. Then, a handful of wands left behind by students fleeing from the troll. Finally, an old handwritten book, written in a language you don't recognize.",
        hufflepuff: 100,
      },
      {
        answer: "First, an old handwritten book, written in a language you don't recognize. Then a stack of letters that were mailed to students from home. Finally, a handful of wands left behind by students fleeing from the troll.",
        ravenclaw: 50,
        slytherin: 50,
      }
    ]
  },
  {
    title: "You're training for the Scotland Sweeper- a broomstick marathon across the whole country of Scotland. You are determined to get a personal best time, and have created a training schedule to allow you to achieve this goal. A friend, who is much slower than you, signs up for the Sweeper too, and asks if you can train together. You know that training with the friend will slow you down. What do you do? ",
    answers: [
      {
        answer: "Tell them honestly that you're hoping for a personal best, so you'll do a few practice runs with them, but you want to train alone.",
        slytherin: 80,
      },
      {
        answer: "Tell them that you really want to stick with your schedule, but give them a copy of the schedule in case they want to do something similar.",
        ravenclaw: 80,
      },
      {
        answer: "Agree to train with them. As for your own goals, you'll cross that bridge when you get there.",
        gryffindor: 80,
      },
      {
        answer: "You know you probably won't make a new personal best, but you agree to train with them anyways. At least you can help your friend.",
        hufflepuff: 80,
      }
    ]
  },
  {
    title: "You have a tendency to be:",
    answers: [
      {
        answer: "Stubborn",
        gryffindor: 150,
      },
      {
        answer: "A pushover",
        hufflepuff: 150,
      },
      {
        answer: "Selfish",
        slytherin: 150,
      },
      {
        answer: "A know-it-all",
        ravenclaw: 150,
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
  },
  {
    title: "If you were attending hogwarts, which magical creature would you be most interested in studying?",
    answers: [
      {
        answer: "Thestral",
        hufflepuff: 30,
        ravenclaw: 30,
      },
      {
        answer: "Phoenix",
        gryffindor: 30,
        ravenclaw: 30,
      },
      {
        answer: "Hippogriff",
        gryffindor: 30,
        hufflepuff: 30,
      },
      {
        answer: "Niffler",
        hufflepuff: 30,
        slytherin: 30,
      },
      {
        answer: "Unicorn",
        ravenclaw: 30,
        slytherin: 30,
      },
      {
        answer: "Dragon",
        gryffindor: 30,
        slytherin: 30,
      }
    ]
  },
  {
    title: "You find yourself with some unexpected free time alone. What do you do?",
    answers: [
      {
        answer: "Call a friend to catch up",
        gryffindor: 75,
        hufflepuff: 75,
      },
      {
        answer: "Work on a passion project",
        gryffindor: 75,
        ravenclaw: 75,
      },
      {
        answer: "Spend some time outside",
        gryffindor: 75,
        slytherin: 75,
      },
      {
        answer: "Work on a creative hobby",
        hufflepuff: 75,
        ravenclaw: 75,
      },
      {
        answer: "Some sort of project around the house",
        hufflepuff: 75,
        slytherin: 75,
      },
      {
        answer: "Read a book",
        ravenclaw: 75,
        slytherin: 75,
      }
    ]
  },
  {
    title: "Four goblets are placed before you. Which would you drink?",
    answers: [
      {
        answer: "The foaming, frothing, silvery liquid that sparkles as though containing ground diamonds.",
        ravenclaw: 60,
      },
      {
        answer: "The smooth, thick, richly purple drink that gives off a delicious smell of chocolate and plums.",
        hufflepuff: 60,
      },
      {
        answer: "The golden liquid so bright that it hurts the eye, and which makes sunspots dance all around the room.",
        gryffindor: 60,
      },
      {
        answer: "The mysterious black liquid that gleams like ink, and draws you in with a scent you can't quite describe",
        slytherin: 60,
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
        gryffindor: 15,
        slytherin: 45,
      },
      {
        answer: "Chaser",
        hufflepuff: 15,
        ravenclaw: 45,
      },
      {
        answer: "Beater",
        gryffindor: 45,
        slytherin: 15,
      },
      {
        answer: "Keeper",
        hufflepuff: 60,
      }
    ]
  },
  {
    title: "Black or white?",
    answers: [
      {
        answer: "Black",
        gryffindor: 20,
        slytherin: 20,
      },
      {
        answer: "White",
        hufflepuff: 20,
        ravenclaw: 20,
      }
    ]
  },
  {
    title: "Heads or tails?",
    answers: [
      {
        answer: "Heads",
        hufflepuff: 20,
        ravenclaw: 20,
      },
      {
        answer: "Tails",
        gryffindor: 20,
        slytherin: 20,
      },
    ]
  },
  {
    title: "Left or right?",
    answers: [
      {
        answer: "Left",
        slytherin: 20,
        ravenclaw: 20,
      },
      {
        answer: "Right",
        gryffindor: 20,
        hufflepuff: 20,
      },
    ]
  },
  {
    title: "The sorting hat takes your opinion into consideration. What house do you feel you belong in?",
    answers: [
      {
        answer: "Gryffindor",
        gryffindor: 200,
      },
      {
        answer: "Ravenclaw",
        ravenclaw: 200,
      },
      {
        answer: "Hufflepuff",
        hufflepuff: 200,
      },
      {
        answer: "Slytherin",
        slytherin: 200,
      },
      {
        answer: "I don't know",
      }
    ]
  },
  ];
  
  export default questionBank;