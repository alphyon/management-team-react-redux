import React from "react";
import {connect} from "react-redux";

const MainPlayers = ({mains, removePlayer}) => (
    <section>
        <h2>Main Players</h2>
        <div className="field">
            {
                mains.map(player => (
                    <article className="main" key={player.id}>
                        <div>
                            <img src={player.photo} alt={player.name}/>
                            <button onClick={() => removePlayer(player)}>X</button>
                            <p>{player.name}</p>
                        </div>
                    </article>
                ))
            }
        </div>
    </section>
)

const mapStateToProps = state => ({
    mains: state.mains
})
const mapDispatchToProps = dispatch => ({
    removePlayer(player) {
        dispatch({
            type: "REMOVE_PLAYER",
            player
        })
    },
})

export default connect(mapStateToProps, mapDispatchToProps)(MainPlayers)