import {configureStore} from '@reduxjs/toolkit'
import counterReducer from '../features/counter/counterSlice' 
//below we are overriding configureStore function according to our needs
// confugureStore has first attribute reducer which can have multiple reducer 
//and they contains state variable which we have to share with entire app or particular modules
export default configureStore({
    reducer:{
        counter: counterReducer
    },
})