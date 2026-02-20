import React, { useState } from "react";
import logo from "./assets/logo.png";
import indiaImg from "./assets/india.jpg";
import prabhasImg from "./assets/prabhas.jpg";
import jupiterImg from "./assets/jupiter.jpg";
import lionImg from "./assets/lion.jpeg";
import cheetahImg from "./assets/cheetah.jpeg";
import tajMahalImg from "./assets/tajmahal.jpg";
import gitaImg from "./assets/gita.jpg";
import peacockImg from "./assets/peacock.jpg";
import gangesImg from "./assets/ganges.jpg";
import cricketImg from "./assets/cricket.jpg";
import resultVideo from "./assets/video.mp4";
import videos from "./assets/videos.mp4";
import "./App.css";

const questions = [
  {
    question: "Endhi atta choosthunnav BD 3D lo kanapadindha",
    options: ["bujji gadu", "ramana gadu", "suri", "pandu gadu"],
    answer: "ramana gadu",
    image: indiaImg
  },
  {
    question: "one bad habit",
    options: ["Prabhas", "Mahesh Babu", "Allu Arjun", "Ram Charan"],
    answer: "Prabhas",
    image: prabhasImg
  },
  {
    question: "padi kotla mandhi sontham chesukunna gunde ra adhi",
    options: ["Rajini Kanth", "Kamal Hassan", "Chiranjeevi", "Pawan Kalyan"],
    answer: "Chiranjeevi",
    image: jupiterImg
  },
  {
    question: "kya rey setting aa",
    options: ["RajiniKanth", "Vijay Thalapathy", "Kamal Hassan", "Ajith"],
    answer: "RajiniKanth",
    image: lionImg
  },
  {
    question: "vaadi jadalu muttukunte vadiki sarru mantadhi",
    options: ["Nani", "Vijay devarakonda", "Ram Charan", "Ntr"],
    answer: "Nani",
    image: cheetahImg
  },
  {
    question: "kya rey dhavde",
    options: ["They call him OG", "Gabbar Singh", "Agnathavasi", "Kushi"],
    answer: "They call him OG",
    image: tajMahalImg
  },
  {
    question: "mondi kathi",
    options: ["Brundhavanam", "Aravindha Sametha", "Aadhi", "Naaga"],
    answer: "Aravindha Sametha",
    image: gitaImg
  },
  {
    question: "nee shathru evaro cheppu nee balamento cheptha",
    options: ["Dhruva", "Magadheera", "Rangastalam", "Vinaya Vedheya Rama"],
    answer: "Dhruva",
    image: peacockImg
  },
  {
    question: "rappa rappa",
    options: ["Ram Charan", "Allu Arjun", "Prabhas", "Mahesh Babu"],
    answer: "Allu Arjun",
    image: gangesImg
  },
  {
    question: "Motham Thalabettestha sir",
    options: ["Nani", "Vijay Devarakonda", "Suhas", "Pawan Kalyan"],
    answer: "Vijay Devarakonda",
    image: cricketImg
  }
];

function Quiz() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState(Array(questions.length).fill(null));
  const [showResult, setShowResult] = useState(false);

  const currentQuestion = questions[currentIndex];
  const userName = localStorage.getItem("userName") || "User";

  const handleOptionClick = (option) => {
    if (answers[currentIndex] !== null) return;
    const newAnswers = [...answers];
    newAnswers[currentIndex] = option;
    setAnswers(newAnswers);
  };

  const handleNext = () => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setShowResult(true);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const score = answers.filter(
    (ans, idx) => ans === questions[idx].answer
  ).length;

  /* ================= RESULT SCREEN ================= */
  if (showResult) {
    const isAllCorrect = score === questions.length;
    const selectedVideo = isAllCorrect ? resultVideo : videos;

    return (
      <div className="quiz-container">
        <img src={logo} alt="Logo" className="logo" />

        <h2>Nuvvu thopu ra, {userName}!</h2>
        <p>You scored {score} out of {questions.length}</p>

        <div className="result-video-container">
          <video className="result-video" controls autoPlay>
            <source src={selectedVideo} type="video/mp4" />
          </video>
        </div><br></br>

        <button
          onClick={() => {
            localStorage.clear();
            window.location.reload();
          }}
        >
          Logout
        </button><br></br><br></br>

        <footer className="footer">
          © 2026 VamshiKrishna. All Rights Reserved.
        </footer>
      </div>
    );
  }

  /* ================= QUIZ SCREEN ================= */
  return (
    <div className="quiz-container">
      <img src={logo} alt="Logo" className="logo" />

      <h2>"NI HERO KI RTC CROSS ROAD RECORD UNDHA"</h2>

      <div className="question-box">
        <h2>{currentQuestion.question}</h2>

        <div className="options">
          {currentQuestion.options.map((opt, idx) => (
            <button
              key={idx}
              onClick={() => handleOptionClick(opt)}
              disabled={answers[currentIndex] !== null}
              style={{
                backgroundColor:
                  answers[currentIndex] === opt
                    ? opt === currentQuestion.answer
                      ? "#28a745"
                      : "#dc3545"
                    : "#19212c"
              }}
            >
              {opt}
            </button>
          ))}
        </div>

        {answers[currentIndex] !== null && (
          <div className="answer-text">
            {answers[currentIndex] === currentQuestion.answer ? (
              <p className="correct">✅ Correct Answer! 🔥</p>
            ) : (
              <p className="wrong">
                ❌ Correct Answer is: {currentQuestion.answer}
              </p>
            )}
          </div>
        )}

        {answers[currentIndex] !== null && (
          <div className="image-container">
            <img
              src={currentQuestion.image}
              alt="Question"
              className="question-image"
            />
          </div>
        )}
      </div>

      <div className="nav-buttons">
        <button onClick={handlePrev} disabled={currentIndex === 0}>
          Previous
        </button>

        <button onClick={handleNext}>
          {currentIndex === questions.length - 1 ? "Finish" : "Next"}
        </button>
      </div><br></br><br></br>

      <footer className="footer">
        © 2026 VamshiKrishna. All Rights Reserved.
      </footer>
    </div>
  );
}

export default Quiz;  