import Question from "./Question";
import questionBank from "./questionBank";
import { HOUSES, HOUSE_IMAGES, HOUSE_DESCRIPTIONS, HYBRID_TO_PRIMARY_HOUSE, getResultsFromPercentages } from "./resultsConstants";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import React, { useState, useEffect } from "react";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

if (!process.env.firebaseAPIKey) {
  require('dotenv').config();
}

function App() {
  const VERSION = "v1.2"
  let name = "";
  const [pointTotals, setPointTotals] = useState({});
  const [results, setResults] = useState(HOUSES.UNDEFINED);

  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: process.env.firebaseAPIKey,
    authDomain: "hogwartshousequiz-aa7fe.firebaseapp.com",
    databaseURL: "https://hogwartshousequiz-aa7fe.firebaseio.com",
    projectId: "hogwartshousequiz-aa7fe",
    storageBucket: "hogwartshousequiz-aa7fe.appspot.com",
    messagingSenderId: "805677095377",
    appId: "1:805677095377:web:8f2c01d627eacb0575a8f0",
    measurementId: "G-B5ZB54BSYR"
  };
  const handleSubmit = event => {
    event.preventDefault(); // Stop from refreshing/redirecting the page
    const answers = findAnswers(event.target);
    const points = getPointTotals(answers);
    const percentages = {
      gryffindor: getPercentage(points.gryffindor, points),
      ravenclaw: getPercentage(points.ravenclaw, points),
      hufflepuff: getPercentage(points.hufflepuff, points),
      slytherin: getPercentage(points.slytherin, points),
    };
    firebase.firestore().collection('results').doc(`${VERSION}: ${name} : ${new Date()}`).set({version: VERSION, answers, percentages}).then(() => {
      console.log("Just set data:");
      console.log(answers);
    });
    setPointTotals(points);
    setResults(getResultsFromPercentages(percentages.gryffindor, percentages.ravenclaw, percentages.hufflepuff, percentages.slytherin));
  };

  const findAnswers = questions => {
    const answeredQuestions = [];
    const answers = {};
    for (let i = 0; i < questions.length; i++) {
      const q = questions[i];
      if (q.id === "name") {
        name = q.value;
      } else {
        if (!answeredQuestions.includes(q.name) && q.checked) {
          answeredQuestions.push(q.name);
          answers[q.name] = q.id;
        }
      }
    }
    return answers;
  };

  const getPointTotals = answers => {
    const points = {
      gryffindor: 0,
      ravenclaw: 0,
      slytherin: 0,
      hufflepuff: 0,
    };
    questionBank.forEach(question => {
      if (answers[question.title]) {
        question.answers.forEach(answer => {
          if (answer.answer === answers[question.title]) {
            points.gryffindor = answer.gryffindor  ? points.gryffindor + answer.gryffindor : points.gryffindor;
            points.ravenclaw = answer.ravenclaw ? points.ravenclaw + answer.ravenclaw : points.ravenclaw;
            points.slytherin = answer.slytherin ? points.slytherin + answer.slytherin : points.slytherin;
            points.hufflepuff = answer.hufflepuff  ? points.hufflepuff + answer.hufflepuff : points.hufflepuff;
          }
        })
      }
    });
    return points;
  };

  const getPercentage = (houseTotal, points = pointTotals) => {
    if (!houseTotal) {
      return 0;
    }
    return Math.round((houseTotal / (points.gryffindor + points.hufflepuff + points.slytherin + points.ravenclaw)) * 100);
  }

  useEffect(() => {
    if (!firebase.apps.length) {
      firebase.initializeApp(firebaseConfig);
    }
  });

  useEffect(() => {
    const resultsElement = document.getElementById('resultsImage');
    if (resultsElement) {
      resultsElement.scrollIntoView({behavior: "smooth"});
    }
  }, [results]);

  const renderDescription = houseName => {
    if (houseName === HOUSES.UNDEFINED) {
      return '';
    }
    const baseDescription = HOUSE_DESCRIPTIONS[houseName];
    return baseDescription.split('\n').map(substring => <p>{substring}</p>)
  };

  const primaryHouse = HYBRID_TO_PRIMARY_HOUSE[results] || results;
  const secondaryHouse = HYBRID_TO_PRIMARY_HOUSE[results] ? results : HOUSES.UNDEFINED;

  return (
    <div className="App">
      <div className="title">
        <img height="100" width="100" alt="Hogwarts logo" src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/88ea2f25-febc-4acd-a81e-550202715dc3/d5najhh-4f69bfa2-3c87-4e75-9fc5-9bab1e3e30e9.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3sicGF0aCI6IlwvZlwvODhlYTJmMjUtZmViYy00YWNkLWE4MWUtNTUwMjAyNzE1ZGMzXC9kNW5hamhoLTRmNjliZmEyLTNjODctNGU3NS05ZmM1LTliYWIxZTNlMzBlOS5wbmcifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6ZmlsZS5kb3dubG9hZCJdfQ.iuuKu_jzr7AorcexGZzjaNGQrJwDevi0Cl2F7aEDX54"/>
        <h1>Verita-sort-em</h1>
        <h3>A Hogwarts House Sorting Quiz by Olivia Losiewicz and Brian McCarthy</h3>
      </div>
      <Form onSubmit={handleSubmit} onReset={handleSubmit} className="form">
        <Form.Label className="enterName">Enter your full name (Optional)</Form.Label>
        <Form.Control
          className="mb-2 nameField"
          type="text"
          placeholder="Name (Optional)"
          id="name"
        />
        {
          questionBank.map(q =>
            <Question question={q} key={q.title}/>
          )
        }
        <Button variant="primary" type="submit" className="sortButton">Sort me!</Button>
      </Form>

      {results !== HOUSES.UNDEFINED ?
        <div className="results">
          <img id="resultsImage" height="300" width="220" src={HOUSE_IMAGES[primaryHouse]} alt={primaryHouse}/>
          <h3 id="resultsHeader">You are a {primaryHouse}!</h3>
          <div className="resultsDescription">{renderDescription(primaryHouse)}</div>
          {secondaryHouse !== HOUSES.UNDEFINED ?
            <div className="secondaryResults">
              <h5>Based on your results, you may also identify as a {secondaryHouse}: </h5> 
              <div className="resultsDescription">{renderDescription(secondaryHouse)}</div>
            </div>
          : <> </>}
          <div id="pointTotals">
            <h2>Gryffindor: {getPercentage(pointTotals.gryffindor)}%</h2>
            <h2>Ravenclaw: {getPercentage(pointTotals.ravenclaw)}%</h2>
            <h2>Slytherin: {getPercentage(pointTotals.slytherin)}%</h2>
            <h2>Hufflepuff: {getPercentage(pointTotals.hufflepuff)}%</h2>
          </div>
        </div>
      : <></>}
      <div className="credits">
        <p>Special thanks to Erin McCarthy, Charlie Losiewicz, Lisa Losiewicz, Lexie Lieberthal, Carly Griffin, Nick Christo, Katie McCarthy, Steffen Hartwell-Jones, Julie McCarthy, Mike McCarthy, Dave Losiewicz, Meredith Ward, and Jessica Alberto for helping us in our testing!</p>
      </div>
    </div>

  );
}

export default App;
