import React, { useState } from 'react';
import { View, Text, Button, TouchableOpacity, StyleSheet } from 'react-native';

type Question = {
    question: string;
    options: string[];
    answer: string;
  };

const questions = [
  { question: "What is the capital of France?", options: ["Paris", "Berlin", "Rome", "Madrid"], answer: "Paris" },
  { question: "Which planet is known as the Red Planet?", options: ["Earth", "Mars", "Jupiter", "Saturn"], answer: "Mars" },
  { question: "What is 10 + 5?", options: ["12", "15", "20", "25"], answer: "15" },
  { question: "Which ocean is the largest?", options: ["Atlantic", "Indian", "Arctic", "Pacific"], answer: "Pacific" },
  { question: "What is the currency of Japan?", options: ["Yen", "Dollar", "Euro", "Won"], answer: "Yen" },
  { question: "Who wrote 'Hamlet'?", options: ["Shakespeare", "Dante", "Homer", "Chaucer"], answer: "Shakespeare" },
  { question: "What is the boiling point of water?", options: ["100°C", "0°C", "50°C", "90°C"], answer: "100°C" },
  { question: "Which animal is known as the King of the Jungle?", options: ["Lion", "Tiger", "Elephant", "Bear"], answer: "Lion" },
  { question: "How many continents are there?", options: ["5", "6", "7", "8"], answer: "7" },
  { question: "What gas do plants absorb from the atmosphere?", options: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Hydrogen"], answer: "Carbon Dioxide" },
];

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [showScore, setShowScore] = useState(false);

  const handleOptionSelect = (option: string) => setSelectedOption(option);

  const handleNextQuestion = () => {
    if (selectedOption === questions[currentQuestion].answer) {
      setScore(score + 1);
    }
    setSelectedOption(null);
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowScore(true);
    }
  };

  const handleRestart = () => {
    setScore(0);
    setCurrentQuestion(0);
    setShowScore(false);
    setSelectedOption(null);
  };

  return (
    <View style={styles.container}>
      {showScore ? (
        <View>
          <Text style={styles.scoreText}>Your Score: {score} / {questions.length}</Text>
          <Button title="Restart Quiz" onPress={handleRestart} />
        </View>
      ) : (
        <View>
          <Text style={styles.questionText}>{questions[currentQuestion].question}</Text>
          {questions[currentQuestion].options.map((option, index) => (
            <TouchableOpacity
              key={index}
              style={[
                styles.optionButton,
                selectedOption === option ? styles.selectedOption : null,
              ]}
              onPress={() => handleOptionSelect(option)}
            >
              <Text style={styles.optionText}>{option}</Text>
            </TouchableOpacity>
          ))}
          <Button title="Next" onPress={handleNextQuestion} disabled={!selectedOption} />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, justifyContent: 'center' },
  questionText: { fontSize: 18, fontWeight: 'bold', marginBottom: 10 },
  optionButton: { padding: 10, marginVertical: 5, backgroundColor: '#ddd' },
  selectedOption: { backgroundColor: '#add8e6' },
  optionText: { fontSize: 16 },
  scoreText: { fontSize: 22, fontWeight: 'bold', marginBottom: 20, textAlign: 'center' },
});

export default Quiz;
