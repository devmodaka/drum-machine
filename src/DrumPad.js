import React from "react";
import PropTypes from "prop-types";

class DrumPad extends React.Component{
    handleClick = () => {
        const { id, playSound } = this.props;
        playSound(id);
    };

    render() {
        const { id, sound, name } = this.props;
        return (
            <div id={`${name}`} className="drum-pad" onClick={this.handleClick}>
                {id}
                <audio id={id} className="clip" src={sound}></audio>
            </div>
        );
    }
}

DrumPad.propTypes = {
    id: PropTypes.string.isRequired,
    sound: PropTypes.string.isRequired,
    playSound: PropTypes.func.isRequired,
  };

export default DrumPad;