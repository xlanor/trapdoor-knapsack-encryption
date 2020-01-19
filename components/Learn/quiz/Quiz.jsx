import React, { Component } from 'react';
import PropTypes from 'prop-types';

import {
  Text
} from 'react-native';

// begin redux imports
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { CALL_API } from '../../../api/Questions';

import * as Animatable from 'react-native-animatable';

// begin custom component imports
import Question from './Question';


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
  componentDidMount = () => {
    this.getQuestions()
  }
  getValidNumberOfQuestions = () => {
      // Hardcoded - to think about allowing the user to dynamically set this in the API?
      const { maxQuestions } = this.state;
      let questionList = this.getQuestionByType()
      return questionList.length > maxQuestions ? maxQuestions : questionList.length;
  }
  getQuestionByType = () => {
      const { quizType,questionList } = this.props;
      switch(quizType){
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
  }
  getQuestions = () => {
      // I'm going to handle the disabling on the API side instead.
      const { questionList, quizType } = this.props;
      let numberOfQuestions = this.getValidNumberOfQuestions()
      console.log(`NOQN ${numberOfQuestions}`)
      let ql = this.getQuestionByType()
      let sample = ql.map(x => ({ x, r : Math.random() }))
                      .sort((a, b) => a.r - b.r)
                      .map(a => a.x)
                      .slice(0, numberOfQuestions);
      console.log(` SAMPLE ${sample}`)
      this.setState({
        questions: sample,
      })
  }
  incrementIndex = () => {
    const { currentQuestionIdx, questions } = this.state;
    const { callback } = this.props;
    console.log(`CALLBACK`)
    console.log(callback)
    currentQuestionIdx+1 > questions.length-1 
    ? this.setState({ isQuizEnded: true }, callback)
    : this.setState((prevState) => ({ currentQuestionIdx: prevState.currentQuestionIdx+1 }))
  }

  render(){
    const { currentQuestionIdx, questions, isQuizEnded } = this.state;
      const { questionList, quizType } = this.props;

    return (
      <>
      {
        isQuizEnded
        ? null
        :currentQuestionIdx <= questions.length - 1 && questions.length != 0
          ?(
              <Question
                qnName={questions[currentQuestionIdx].questions_name}
                label={questions[currentQuestionIdx].questions_label}
                options={questions[currentQuestionIdx].options}
                answer={questions[currentQuestionIdx].answer}
                callback={()=>{this.incrementIndex()}}
              />
           
            
          )
          : null
      
      }
    
      </>
    )
  }
}

Quiz.propTypes = {
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