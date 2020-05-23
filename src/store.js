import {createStore} from "redux"

const initialState = {
    players: [
        {
            id: 1,
            name: "Jon Doe",
            photo: "https://picsum.photos/id/100/200"

        },
        {
            id: 2,
            name: "Marco Polo",
            photo: "https://picsum.photos/id/200/200"

        },
        {
            id: 3,
            name: "Ken Kendall",
            photo: "https://picsum.photos/id/300/200"

        }
    ],
    mains: [],
    substitutes: []
}
const reducerManager = (state = initialState, action) => {
    if(action.type === "ADD_MAIN_PLAYER"){
        return {
            ...state,
            mains: state.mains.concat(action.player),
            players: state.players.filter(player =>player.id !== action.player.id)
        }
    }

    if(action.type === "ADD_SUB_PLAYER"){
        return {
            ...state,
            substitutes: state.substitutes.concat(action.player),
            players: state.players.filter(player =>player.id !== action.player.id)
        }
    }
    if(action.type === "REMOVE_PLAYER"){
        return {
            ...state,
            players: state.players.concat(action.player),
            substitutes: state.substitutes.filter(player =>player.id !== action.player.id),
            mains: state.mains.filter(player =>player.id !== action.player.id)
        }
    }
    return state
}
export default createStore(reducerManager)