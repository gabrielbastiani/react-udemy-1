import { createStore } from "redux";

import rootReducer from './modules/rootReducer';

function reserve(){
    return[];
}

const store = createStore(rootReducer);

export default store;