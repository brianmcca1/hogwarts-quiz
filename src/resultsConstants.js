const RESULTS_OPTIONS = {
  GRYFFINDOR: {
    title: 'Gryffindor',
    description: 'Congratulations! As a member of Gryffindor House, you’re courageous and driven by your primary value of fairness. If, unlike Harry Potter, you haven’t had the opportunity to fight off dark wizards, your bravery may show itself in how you stand up for others or yourself when you sense something is unfair, or how you hold on to your convictions. Gryffindors also tend to be adventurous and big-picture thinkers: you dream big, and are driven by passion for the things you care about. Members of Gryffindor House don’t have much time or energy for things they don’t feel passionate about, as they are busy giving 110% to their priorities. A Gryffindor often makes decisions using their gut feelings. On your worst days, you may be stubborn or impulsive.\nYou’re in good company- famous Gryffindors include Harry Potter, Hermione Granger, the entire Weasley family, Albus Dumbledore, all the Marauders….just like, pick up a Harry Potter book and you’ll find some.\nSome famous Muggles who identify as Gryffindor are Tom Holland, Selena Gomez, Kit Harrington, and Harry Potter actors Evanna Lynch, Daniel Radcliffe, and Bonnie Wright.',
  },
  GRYFFINPUFF: {
    title: 'Gryffinpuff',
    description: 'gryffinpuff description'
  },
  GRYFFINCLAW: {
    title: 'Gryffinclaw',
    description: 'gryffinclaw description'
  },
  GRYFFERIN: {
    title: 'Gryfferin',
    description: 'gryfferin description',
  },
  HUFFLEPUFF: {
    title: 'Hufflepuff',
    description: 'hufflepuff description',
  },
  HUFFLEDOR: {
    title: 'Huffledor',
    description: 'huffledor description',
  },
  HUFFLECLAW: {
    title: 'Huffleclaw',
    description: 'huffleclaw description',
  },
  HUFFLERIN: {
    title: 'Hufflerin',
    description: 'hufflerin description',
  },
  RAVENCLAW: {
    title: 'Ravenclaw',
    description: 'ravenclaw description',
  },
  RAVENDOR: {
    title: 'Ravendor',
    description: 'ravendor description',
  },
  RAVENPUFF: {
    title: 'Ravenpuff',
    description: 'ravenpuff desscription',
  },
  RAVERIN: {
    title: 'Raverin',
    description: 'raverin description'
  },
  SLYTHERIN: {
    title: 'Slytherin',
    description: 'slytherin description',
  },
  SLYTHERDOR: {
    title: 'Slytherdor',
    description: 'slytherdor description',
  },
  SLYTHERPUFF: {
    title: 'Slytherpuff',
    description: 'slytherpuff description',
  },
  SLYTHERCLAW: {
    title: 'Slytherclaw',
    description: 'slytherclaw description',
  },
  UNDEFINED: {
    title: 'Undefined',
    description: 'Undefined',
  },
};

const getResultsFromPercentages = (gryffindor, ravenclaw, hufflepuff, slytherin) => {
  switch([gryffindor, ravenclaw, hufflepuff, slytherin].indexOf(Math.max(gryffindor, ravenclaw, hufflepuff, slytherin))) {
    case 0: // Gryffindor was the highest
      if (ravenclaw > 25) {
        return RESULTS_OPTIONS.GRYFFINCLAW;
      } else if (hufflepuff > 25) {
        return RESULTS_OPTIONS.GRYFFINPUFF;
      } else if (slytherin > 25) { 
        return RESULTS_OPTIONS.GRYFFERIN;
      } else {
        return RESULTS_OPTIONS.GRYFFINDOR;
      }
    case 1: // Ravenclaw was the highest
      if (gryffindor > 25) {
        return RESULTS_OPTIONS.RAVENDOR;
      } else if (hufflepuff > 25) {
        return RESULTS_OPTIONS.RAVENPUFF;
      } else if (slytherin > 25) {
        return RESULTS_OPTIONS.RAVERIN;
      } else {
        return RESULTS_OPTIONS.RAVENCLAW;
      }
    case 2: // Hufflepuff was the highest
      if (gryffindor > 25) {
        return RESULTS_OPTIONS.HUFFLEDOR;
      } else if (ravenclaw > 25) {
        return RESULTS_OPTIONS.HUFFLECLAW;
      } else if (slytherin > 25) {
        return RESULTS_OPTIONS.HUFFLERIN;
      } else {
        return RESULTS_OPTIONS.HUFFLEPUFF;
      }
    case 3: // Slytherin was the highest
      if (gryffindor > 25) {
        return RESULTS_OPTIONS.SLYTHERDOR;
      } else if (ravenclaw > 25) {
        return RESULTS_OPTIONS.SLYTHERCLAW;
      } else if (hufflepuff > 25) {
        return RESULTS_OPTIONS.SLYTHERPUFF;
      } else {
        return RESULTS_OPTIONS.SLYTHERIN;
      }
    default:
        return RESULTS_OPTIONS.UNDEFINED;
  }
};

export { RESULTS_OPTIONS as default, getResultsFromPercentages };
