import { applyMiddleware, createStore } from "redux";
import rootReducers from "./rootReducers";
import { composeWithDevTools } from "@redux-devtools/extension";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./saga";

let sagaMiddleware = createSagaMiddleware();

const store = createStore(
  rootReducers,
  composeWithDevTools(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(rootSaga);

export default store;
