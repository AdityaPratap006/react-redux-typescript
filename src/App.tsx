import React, { useEffect } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { AnyAction } from 'redux';

import { Todo, fetchTodos } from './redux/actions';
import { StoreState } from './redux/reducers/root.reducer';
import { ThunkDispatch } from 'redux-thunk';

interface AppProps {
  todos?: Todo[];
  fetchTodos?: () => any;
}

const _App = (props: AppProps): JSX.Element => {
  const { todos, fetchTodos } = props;

  useEffect(() => {
    console.log({ todos });

    fetchTodos!();

  }, []);

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

interface MapDispatchType {
  fetchTodos: () => any;
}

const mapDispatchToProps = (dispatch: ThunkDispatch<any, any, AnyAction>): MapDispatchType => {
  return ({
    fetchTodos: () => dispatch(fetchTodos()),
  });
}

export const App = connect(
  mapStateToProps,
  mapDispatchToProps
)(_App);
