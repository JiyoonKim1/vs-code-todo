import * as React from 'react';
import TrackingBox from './TrackingBox';

type TrackingBarProps = {
    numberOfBoxes: number
}

const TrackingBar = (props: TrackingBarProps) => {
    const [boxStates, setBoxStates] = React.useState(Array(props.numberOfBoxes).fill(false));

    const flipBoxState = (boxIndex: number) => {
        const newBoxStates = [...boxStates.slice(0, boxIndex), !boxStates[boxIndex], ...boxStates.slice(boxIndex + 1)];
        setBoxStates(newBoxStates);
        console.log('flipBoxState clicked');
    }

    return <div>
        {boxStates.map((boxState, index) => <TrackingBox isColored={boxState} flipBoxState={flipBoxState} index={index}/>)}
    </div>
}

export default TrackingBar;