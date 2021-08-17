import React from 'react'
import gpaChart from '../pictures/subs/circleNum.png';

const GpaChartComponent = () => {

    return(
        <div className='chart-comp'>
            <h3>GPA</h3>
            <img src={gpaChart} alt='GPA Chart' height='100'/>
        </div>
    )
}
export default GpaChartComponent;