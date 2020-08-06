import React from 'react';
import './App.css';
import { connect } from 'react-redux';

import { Todo, fetchTodos } from './redux/actions';
import { StoreState } from './redux/reducers/root.reducer';

interface AppProps {
  todos?: Todo[];
  fetchTodos?: () => any;
}

const _App = (props: AppProps): JSX.Element => {
  const { todos, fetchTodos } = props;

  return (
    <div className="App">
      <h1>Hi there!</h1>
    </div>
  );
}


interface MapStateType {
  todos: Todo[]
}

const mapStateToProps = (state: StoreState): MapStateType => {
  return ({
    todos: state.todos,
  });
}

export const App = connect(
  mapStateToProps,
  null
)(_App);
