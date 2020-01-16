import React, { Component } from 'react';
import PropTypes from 'react-proptypes';

import {
  Text
} from 'react-native';

// begin redux imports
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as Animatable from 'react-native-animatable';

// begin custom component imports
import Question from './Question';
// preparing for Animatables.
Question = Animatable.createAnimatableComponent(Question);


class Quiz extends Component{
  constructor(props){
    super(props);
    this.state = {
      maxQuestions: 2,
      questions: [],
      isQuizEnded: false,
      currentQuestionIdx: 0,
    }
  }
  getValidNumberOfQuestions = () => {
      // Hardcoded - to think about allowing the user to dynamically set this in the API?
      const { maxQuestions } = this.state;
      const { questionList } = this.props;
      return questionList.length > maxQuestions ? maxQuestions : questionList.length;
  }
  getQuestions = () => {
      // I'm going to handle the disabling on the API side instead.
      const { questionList, quizType } = this.props;
      let numberOfQuestions = this.getValidNumberOfQuestions()
      let sample = questionList.map(x => ({ x, r : Math.random() }))
                      .sort((a, b) => a.r - b.r)
                      .map(a => a.x)
                      .slice(0, numberOfQuestions);
      this.setState({
        questions: sample,
      })
  }
  incrementIndex = () => {
    const { currentQuestionIdx, questions } = this.state;
    currentQuestionIdx+1 > questions.length-1 
    ? this.setState({ isQuizEnded: true })
    : this.setState((prevState) => ({ currentQuestionIdx: prevState.currentQuestionIdx+1 }))
  }

  render(){
    const { currentQuestionIdx, questions } = this.state;
    return (
      currentQuestionIdx > questions.length - 1
      ? <Question
          qnName={questions[currentQuestionIdx].questions_name}
          label={questions[currentQuestionIdx].label}
          options={questions[currentQuestionIdx].options}
          answer={questions[currentQuestionIdx].answer}
          callback={()=>{this.incrementIndex()}}
        />
      : null
    )
  }
}

Quiz.propTypes = {
  quizType: PropTypes.string.isRequired,
}

const mapStateToProps = state => ({
    questionList: state.questions
})

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({
      CALL_API
  }, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Quiz);