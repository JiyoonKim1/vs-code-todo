import * as React from 'react';

type TrackingBoxProps = {
    isColored: Boolean,
    flipBoxState: Function,
    index: number
}

const TrackingBox = (props: TrackingBoxProps) => {
    return <button 
                className={props.isColored ? "colored-button" : "non-colored-button"} 
                onClick={e => props.flipBoxState(props.index)}
            >
        {props.index + 1}            
        </button>
}

export default TrackingBox;