import { useMemo } from 'react';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

let store;

// initialState
const initialState = {
  cars: null,
  loading: false,
  error: false,
};

// Reducers
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'REQUEST_CARS':
      return {
        ...state,
        cars: null,
        loding: true,
        error: false,
      };
    case 'REQUEST_CARS_SUCCEEDED':
      return {
        ...state,
        cars: action.cars,
        loding: false,
        error: false,
      };
    case 'REQUEST_CARS_FAILED':
      return {
        ...state,
        cars: null,
        loading: false,
        error: true,
      };
    case 'ADD_CAR':
      return {
        ...state,
        cars: [...state.cars, action.newCar ]
      }
    case 'REMOVE_CAR':
      return {
        ...state,
        cars: state.cars.filter(item => item.id !== action.id)
      }
    default:
      return state;
  }
}

// Action Creators
const requestCars = () => {
  return { type: 'REQUEST_CARS' }
};

const requestCarsSuccess = (data) => {
  return { type: 'REQUEST_CARS_SUCCEEDED', cars: data }
};

const requestCarsError = () => {
  return { type: 'REQUEST_CARS_FAILED' }
};

export const addCar = (data) => {
  return { type: 'ADD_CAR', newCar: data }
};

export const removeCar = (data) => {
  return { type: 'REMOVE_CAR', id: data }
};

export const fetchCars = (dispatch) => {
  dispatch(requestCars());
  return fetch('https://rawgit.com/Varinetz/e6cbadec972e76a340c41a65fcc2a6b3/raw/90191826a3bac2ff0761040ed1d95c59f14eaf26/frontend_test_table.json')
    .then(res => res.json())
    .then(
      data => dispatch(requestCarsSuccess(data)),
      err => dispatch(requestCarsError())
    );
};


// createStore
function initStore(preloadedState = initialState) {
  return createStore(
    reducer,
    preloadedState,
    composeWithDevTools(applyMiddleware())
  );
}

export const initializeStore = (preloadedState) => {
  let _store = store ?? initStore(preloadedState);

  // After navigating to a page with an initial Redux state, merge that state
  // with the current state in the store, and create a new store
  if (preloadedState && store) {
    _store = initStore({
      ...store.getState(),
      ...preloadedState,
    })
    // Reset the current store
    store = undefined;
  }

  // For SSG and SSR always create a new store
  if (typeof window === 'undefined') return _store;
  // Create the store once in the client
  if (!store) store = _store;

  return _store
}

export function useStore(initialState) {
  const store = useMemo(() => initializeStore(initialState), [initialState]);
  return store;
}