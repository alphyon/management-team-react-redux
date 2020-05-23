import React from "react";
import {connect} from "react-redux";

const SubtitutePlayers =({substitutes, removePlayer})=>(
<section>
    <h2>Subtitutes Players</h2>
    <div className="field">
        {
            substitutes.map(player=>(
                <article className="subtitute" key={player.id}>
                    <div>
                        <img src={player.photo} alt={player.name}/>
                        <button onClick={()=>removePlayer(player)}>X</button>
                        <p>{player.name}</p>
                    </div>
                </article>
            ))
        }
    </div>
</section>
)

const mapStateToProps = state => ({
    substitutes: state.substitutes
})
const mapDispatchToProps = dispatch => ({
    removePlayer(player){
        dispatch({
            type: "REMOVE_PLAYER",
            player
        })
    },
})

export default connect(mapStateToProps, mapDispatchToProps)(SubtitutePlayers)