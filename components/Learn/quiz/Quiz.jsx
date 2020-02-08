import React, { Component } from 'react';
import PropTypes from 'prop-types';

// begin redux imports
import { connect } from 'react-redux';

// begin custom component imports
import Question from './Question';

class Quiz extends Component {
  constructor(props) {
    super(props);
    this.state = {
      maxQuestions: 2,
      questions: [],
      isQuizEnded: false,
      currentQuestionIdx: 0,
    };
  }

  componentDidMount = () => {
    this.getQuestions();
  };

  getValidNumberOfQuestions = () => {
    // Hardcoded - to think about allowing the user to dynamically set this in the API?
    const { maxQuestions } = this.state;
    const questionList = this.getQuestionByType();
    return questionList.length > maxQuestions ? maxQuestions : questionList.length;
  };

  getQuestionByType = () => {
    const { quizType, questionList } = this.props;
    switch (quizType) {
      case 'INTRO':
        return questionList.intro;
      case 'ALGO':
        return questionList.algo;
      case 'KEYGEN':
        return questionList.keygen;
      case 'ENCRYPT':
        return questionList.encrypt;
      case 'DECRYPT':
        return questionList.decrypt;
      default:
        return questionList.intro;
    }
  };

  getQuestions = () => {
    // I'm going to handle the disabling on the API side instead.
    const numberOfQuestions = this.getValidNumberOfQuestions();
    const ql = this.getQuestionByType();
    const sample = ql
      .map(x => ({ x, r: Math.random() }))
      .sort((a, b) => a.r - b.r)
      .map(a => a.x)
      .slice(0, numberOfQuestions);
    this.setState({
      questions: sample,
    });
  };

  incrementIndex = () => {
    const { currentQuestionIdx, questions } = this.state;
    const { callback } = this.props;
    if (currentQuestionIdx + 1 > questions.length - 1) {
      this.setState({ isQuizEnded: true }, callback);
    } else {
      this.setState(prevState => ({ currentQuestionIdx: prevState.currentQuestionIdx + 1 }));
    }
  };

  render() {
    const { currentQuestionIdx, questions, isQuizEnded } = this.state;

    return (
      <>
        {isQuizEnded ? null : currentQuestionIdx <= questions.length - 1 && questions.length != 0 ? (
          <Question
            qnName={questions[currentQuestionIdx].questions_name}
            label={questions[currentQuestionIdx].questions_label}
            options={questions[currentQuestionIdx].options}
            answer={questions[currentQuestionIdx].answer}
            callback={() => {
              this.incrementIndex();
            }}
          />
        ) : null}
      </>
    );
  }
}

Quiz.propTypes = {
  quizType: PropTypes.string.isRequired,
  callback: PropTypes.func.isRequired,
  questionList: PropTypes.shape({
    intro: PropTypes.arrayOf(
      PropTypes.shape({
        options: PropTypes.arrayOf(
          PropTypes.shape({
            label: PropTypes.string.isRequired,
            value: PropTypes.number.isRequired,
            selected: PropTypes.number.isRequired,
          }),
        ),
        questions_enabled: PropTypes.number.isRequired,
        questions_name: PropTypes.string.isRequired,
        questions_label: PropTypes.string.isRequired,
        answer: PropTypes.number.isRequired,
      }),
    ),
    algo: PropTypes.arrayOf(
      PropTypes.shape({
        options: PropTypes.arrayOf(
          PropTypes.shape({
            label: PropTypes.string.isRequired,
            value: PropTypes.number.isRequired,
            selected: PropTypes.number.isRequired,
          }),
        ),
        questions_enabled: PropTypes.number.isRequired,
        questions_name: PropTypes.string.isRequired,
        questions_label: PropTypes.string.isRequired,
        answer: PropTypes.number.isRequired,
      }),
    ),
    keygen: PropTypes.arrayOf(
      PropTypes.shape({
        options: PropTypes.arrayOf(
          PropTypes.shape({
            label: PropTypes.string.isRequired,
            value: PropTypes.number.isRequired,
            selected: PropTypes.number.isRequired,
          }),
        ),
        questions_enabled: PropTypes.number.isRequired,
        questions_name: PropTypes.string.isRequired,
        questions_label: PropTypes.string.isRequired,
        answer: PropTypes.number.isRequired,
      }),
    ),
    encrypt: PropTypes.arrayOf(
      PropTypes.shape({
        options: PropTypes.arrayOf(
          PropTypes.shape({
            label: PropTypes.string.isRequired,
            value: PropTypes.number.isRequired,
            selected: PropTypes.number.isRequired,
          }),
        ),
        questions_enabled: PropTypes.number.isRequired,
        questions_name: PropTypes.string.isRequired,
        questions_label: PropTypes.string.isRequired,
        answer: PropTypes.number.isRequired,
      }),
    ),
    decrypt: PropTypes.arrayOf(
      PropTypes.shape({
        options: PropTypes.arrayOf(
          PropTypes.shape({
            label: PropTypes.string.isRequired,
            value: PropTypes.number.isRequired,
            selected: PropTypes.number.isRequired,
          }),
        ),
        questions_enabled: PropTypes.number.isRequired,
        questions_name: PropTypes.string.isRequired,
        questions_label: PropTypes.string.isRequired,
        answer: PropTypes.number.isRequired,
      }),
    ),
  }),
};

const mapStateToProps = state => ({
  questionList: state.questions,
});

export default connect(mapStateToProps)(Quiz);
