import React from 'react'
import learnChart from '../pictures/subs/pieChart.png';

const LearnStyleChartComponent = () => {

    return(
        <div className='chart-comp'>
            <h3>Learning Style</h3>
            <img src={learnChart} alt='Grade Chart' height='100'/>
        </div>
    )
}

export default LearnStyleChartComponent;