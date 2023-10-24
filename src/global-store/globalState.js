import { useState, useEffect } from "react";

function createStore(initialState) {
  let state = initialState;
  const listeners = new Set();

  const setState = (newState) => {
    state = newState;

    listeners.forEach((listener) => listener(state));
  };

  const getState = () => state;

  const subscribe = (listener) => {
    listeners.add(listener);

    return () => listeners.delete(listener);
  };

  return { setState, getState, subscribe };
}

export function create(initialState) {
  const store = createStore(initialState);

  function useStore() {
    const [state, setState] = useState(store.getState());

    useEffect(() => store.subscribe((state) => setState(state)), []);

    return state;
  }

  useStore.setState = store.setState;

  return useStore;
}
