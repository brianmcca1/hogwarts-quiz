import Question from "./Question";
import questionBank from "./questionBank";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import React, { useState, useEffect } from "react";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

function App() {
  let name = "";
  const [pointTotals, setPointTotals] = useState({});
  const [submittedAnswers, setSubmittedAnswers] = useState(false);

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
    const version = "v0.1"
    const answers = findAnswers(event.target);
    const points = getPointTotals(answers);
    firebase.firestore().collection('results').doc(`${version}: ${name}`).set({version, answers, points}).then(() => {
      console.log("Just set data:");
      console.log(answers);
    });
    setPointTotals(points);
    setSubmittedAnswers(true);
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

  const getPercentage = houseTotal => {
    if (!houseTotal) {
      return 0;
    }
    return Math.round((houseTotal / (pointTotals.gryffindor + pointTotals.hufflepuff + pointTotals.slytherin + pointTotals.ravenclaw)) * 100);
  }

  useEffect(() => {
    if (!firebase.apps.length) {
      firebase.initializeApp(firebaseConfig);
    }
  }, []);

  return (
    <div className="App">
      <div className="title">
        <img height="100" width="100" alt="Hogwarts logo" src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/88ea2f25-febc-4acd-a81e-550202715dc3/d5najhh-4f69bfa2-3c87-4e75-9fc5-9bab1e3e30e9.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3sicGF0aCI6IlwvZlwvODhlYTJmMjUtZmViYy00YWNkLWE4MWUtNTUwMjAyNzE1ZGMzXC9kNW5hamhoLTRmNjliZmEyLTNjODctNGU3NS05ZmM1LTliYWIxZTNlMzBlOS5wbmcifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6ZmlsZS5kb3dubG9hZCJdfQ.iuuKu_jzr7AorcexGZzjaNGQrJwDevi0Cl2F7aEDX54"/>
        <h1>The One True Hogwarts House Quiz</h1>
        <h3>By Olivia Losiewicz and Brian McCarthy</h3>
      </div>
      <Form onSubmit={handleSubmit} onReset={handleSubmit} className="form">
        <Form.Label className="enterName">Enter your name</Form.Label>
        <Form.Control
          required
          className="mb-2 nameField"
          type="text"
          placeholder="First name"
          id="name"
        />
        {
          questionBank.map(q =>
            <Question question={q} key={q.title}/>
          )
        }
        {submittedAnswers ? 
          <div>
            <h1>Submitted successfully!</h1>
            <p>Since this was a small subset of questions, your results would not be representitive. Once these questions are finalized, you'll have the chance to take the full quiz to get your final results!</p>
          </div>
          : <></>
        }
        <Button variant="primary" type="submit" className="sortButton">Sort me!</Button>
      </Form>

      {/* <h1>Gryffindor: {getPercentage(pointTotals.gryffindor)}%</h1>
      <h1>Ravenclaw: {getPercentage(pointTotals.ravenclaw)}%</h1>
      <h1>Slytherin: {getPercentage(pointTotals.slytherin)}%</h1>
      <h1>Hufflepuff: {getPercentage(pointTotals.hufflepuff)}%</h1> */}
    </div>

  );
}

export default App;
