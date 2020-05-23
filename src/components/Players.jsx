import React from "react";
import {connect} from "react-redux"

const Players = ({players, addMainPlayer, addMSubPlayer}) => (
    <section>
        <h2>Players</h2>
        <div className="players-container">
            {
                players.map(player => (
                    <article className="player" key={player.id}>
                        <img src={player.photo} alt={player.name}/>
                        <h3>{player.name}</h3>
                        <button onClick={() => addMainPlayer(player)}>Main</button>
                        <button onClick={() => addMSubPlayer(player)}>Substitute</button>
                    </article>
                ))
            }

        </div>
    </section>
)
const mapStateToProps = state => ({
    players: state.players
})
const mapDispatchToProps = dispatch => ({
    addMainPlayer(player){
        dispatch({
            type: "ADD_MAIN_PLAYER",
            player
        })
    },
    addMSubPlayer(player){
        dispatch({
            type: "ADD_SUB_PLAYER",
            player
        })
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(Players)