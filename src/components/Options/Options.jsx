import s from './Options.module.css';

const Options = ({ onFeedbackCange }) => {
  return (
    <>
      <button onClick={() => onFeedbackCange('good')} className={s.button}>
        Good
      </button>
      <button onClick={() => onFeedbackCange('neutral')} className={s.button}>
        Neutral
      </button>
      <button onClick={() => onFeedbackCange('bad')} className={s.button}>
        Bad
      </button>
      <button className={s.button}>Reset</button>
    </>
  );
};

export default Options;
