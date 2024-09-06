import s from './Fedback.module.css';
const Feedback = ({ good, neutral, bad, total, positivePercentange }) => {
  return (
    <>
      <ul className={s.list}>
        <li className={s.item}>Good: {good}</li>
        <li className={s.item}>Neutral: {neutral}</li>
        <li className={s.item}>Bad: {bad}</li>
        <li className={s.item}>Total: {total}</li>
        <li className={s.item}>Positive: {positivePercentange}%</li>
      </ul>
    </>
  );
};

export default Feedback;
