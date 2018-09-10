
import React from 'react';
import { Sparklines, SparklinesLine } from 'react-sparklines';

const Chart = (props) => (

    <div>
        <Sparklines height={100} width={160} data={props.data}>
            <SparklinesLine color={props.color} />
        </Sparklines>   
    </div>
);

export default Chart;