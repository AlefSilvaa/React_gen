import { createStore } from 'redux';
import {tokenReducer} from './tokens/tokensReducer';

const stroe = createStore (tokenReducer);

export default store