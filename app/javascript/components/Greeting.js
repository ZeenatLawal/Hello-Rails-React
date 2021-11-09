import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getGreetingsSuccess } from '../redux/greetings/greetings';

const Greeting = () => {
  const dispatch = useDispatch();
  const greeting = useSelector((state) => state.greetingsReducer.message);

  useEffect(() => {
    dispatch(getGreetingsSuccess());
  }, [dispatch]);

  return (
    <>
      <h1>
        <i>{greeting}</i>
        !!
      </h1>
    </>
  );
};

export default Greeting;
