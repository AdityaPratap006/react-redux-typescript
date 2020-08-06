import React, { useEffect, useState } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { AnyAction } from 'redux';

import { Todo, fetchTodos, deleteTodo } from './redux/actions';
import { StoreState } from './redux/reducers/root.reducer';
import { ThunkDispatch } from 'redux-thunk';

interface AppProps {
  todos?: Todo[];
  fetchTodos?: typeof fetchTodos;
  deleteTodo?: typeof deleteTodo;
}

const _App = (props: AppProps): JSX.Element => {
  const [loading, setLoading] = useState<boolean>(true);

  const { todos, fetchTodos, deleteTodo } = props;

  useEffect(() => {
    setLoading(true);
    fetchTodos!();
    setLoading(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const todoClickHandler = (id: string): void => {
    deleteTodo!(id);
  };

  const renderList = (): JSX.Element[] | undefined => {
    return todos?.map(todo => (
      <div key={todo.id} onClick={() => todoClickHandler(todo.id)}>
        <h2>{todo.title}</h2>
        <h3>{todo.completed ? 'Done' : 'Pending'}</h3>
      </div>
    ));
  }

  return (
    <div className="App">
      <h1>Hi there!</h1>
      <div>
        {loading ? <h2>Loading todos...</h2> : renderList()}
      </div>
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
  deleteTodo: (id: string) => any;
}

const mapDispatchToProps = (dispatch: ThunkDispatch<any, any, AnyAction>): MapDispatchType => {
  return ({
    fetchTodos: () => dispatch(fetchTodos()),
    deleteTodo: (id) => dispatch(deleteTodo(id)),
  });
}

export const App = connect(
  mapStateToProps,
  mapDispatchToProps
)(_App);
