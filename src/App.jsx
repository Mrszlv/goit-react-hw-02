import { useState } from 'react';
import Feedback from './components/Feedback/Feedback';
import Descriptions from './components/Description/Description';
import Options from './components/Options/Options';

const App = () => {
  const [feedback, setFeedback] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const updateFeedback = feedbackType => {
    setFeedback(prevFeedback => ({
      ...prevFeedback,
      [feedbackType]: prevFeedback[feedbackType] + 1,
    }));
  };
  return (
    <>
      <Descriptions />

      <Options onFeedbackCange={updateFeedback} />

      <Feedback
        good={feedback.good}
        neutral={feedback.neutral}
        bad={feedback.bad}
      />
    </>
  );
};

export default App;
