import Question from "./Question";
import questionBank from "./questionBank";
import RESULTS_OPTIONS, { getResultsFromPercentages } from "./resultsConstants";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import React, { useState, useEffect } from "react";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

function App() {
  const VERSION = "v1.0-beta-1"
  const [pointTotals, setPointTotals] = useState({});
  const [submittedAnswers, setSubmittedAnswers] = useState(false);
  const [results, setResults] = useState(RESULTS_OPTIONS.UNDEFINED);

  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyA2iYm8Ihm1gFLlGQhC2StEOMnRe-VJfFo",
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
    firebase.firestore().collection('results').doc(`${VERSION}: ${new Date()}`).set({version: VERSION, answers, points}).then(() => {
      console.log("Just set data:");
      console.log(answers);
    });
    setPointTotals(points);
    setSubmittedAnswers(true);
    // TOOD: Break this up maybe
    setResults(getResultsFromPercentages(getPercentage(points.gryffindor, points), getPercentage(points.ravenclaw, points), getPercentage(points.hufflepuff, points), getPercentage(points.slytherin, points)));
  };

  const findAnswers = questions => {
    const answeredQuestions = [];
    const answers = {};
    for (let i = 0; i < questions.length; i++) {
      const q = questions[i];
      if (!answeredQuestions.includes(q.name) && q.checked) {
        answeredQuestions.push(q.name);
        answers[q.name] = q.id;
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
  }, []);

  const renderDescription = string => {
    return string.split('\n').map(substring => <p>{substring}</p>)
  };

  return (
    <div className="App">
      <div className="title">
        <img height="100" width="100" alt="Hogwarts logo" src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/88ea2f25-febc-4acd-a81e-550202715dc3/d5najhh-4f69bfa2-3c87-4e75-9fc5-9bab1e3e30e9.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3sicGF0aCI6IlwvZlwvODhlYTJmMjUtZmViYy00YWNkLWE4MWUtNTUwMjAyNzE1ZGMzXC9kNW5hamhoLTRmNjliZmEyLTNjODctNGU3NS05ZmM1LTliYWIxZTNlMzBlOS5wbmcifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6ZmlsZS5kb3dubG9hZCJdfQ.iuuKu_jzr7AorcexGZzjaNGQrJwDevi0Cl2F7aEDX54"/>
        <h1>The One True Hogwarts House Quiz</h1>
        <h3>By Olivia Losiewicz and Brian McCarthy</h3>
      </div>
      <Form onSubmit={handleSubmit} onReset={handleSubmit} className="form">
        {
          questionBank.map(q =>
            <Question question={q} key={q.title}/>
          )
        }
        <Button variant="primary" type="submit" className="sortButton">Sort me!</Button>
      </Form>

      {results !== RESULTS_OPTIONS.UNDEFINED ?
        <div className="results">
          <h3>You are a {results.title}!</h3>
          <div className="resultsDescription">{renderDescription(results.description)}</div>
          <h2>Gryffindor: {getPercentage(pointTotals.gryffindor)}%</h2>
          <h2>Ravenclaw: {getPercentage(pointTotals.ravenclaw)}%</h2>
          <h2>Slytherin: {getPercentage(pointTotals.slytherin)}%</h2>
          <h2>Hufflepuff: {getPercentage(pointTotals.hufflepuff)}%</h2>
        </div>
      : <></>}

    </div>

  );
}

export default App;
