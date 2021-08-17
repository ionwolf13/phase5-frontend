import React from 'react'
import gradeChart from '../pictures/subs/aPlus.png';

const GradeChartComponent = () => {

    return(
        <div className='chart-comp'>
            <h3>Avg Grade</h3>
            <img src={gradeChart} alt='Grade Chart' height='100'/>
        </div>
    )
}

export default GradeChartComponent;