import React, { useState } from 'react';


const LearningFormContainer = ({auth, currentStudentInfo, setCurrentStudentInfo}) => {

    const [learnValues, setLearnValues] = useState({formValues: [], taken: false, visual: 0, auditory: 0, kinesthetic: 0});

    const handleLearnForm = (e) => {

        let x = 0
        let y = 0
        let z = 0
        e.preventDefault()
        let arr = []
 
        for(let i = 0; i < 17; i++){
            // console.log(e.target.children[i], "this is", i)
            for(let x = 0; x < 3; x++){
                if(e.target.children[i].elements[x].checked === true){
                    arr.push(e.target.children[i].elements[x].value)
                }
            }

        }
        console.log(arr)
        console.log(learnValues.formValues)
        // setLearnValues({...learnValues, formValues: arr})
        console.log(learnValues.formValues)
        arr.map(v => {
            console.log(v)
            if(v === 'A'){
                x += 1
            }
            else if(v === 'V'){
                y += 1
            }
            else{
                z += 1
            }
        })
        setLearnValues({...learnValues, visual: y, auditory: x, kinesthetic: z})
        console.log(learnValues)
    }
    // console.log(learnValues)
    let learnType = ""
    if((learnValues.visual > learnValues.auditory) && (learnValues.visual > learnValues.kinesthetic)){
        console.log(" visual learners!")
        learnType = "VISUAL"
    }else if((learnValues.auditory > learnValues.visual) && (learnValues.auditory > learnValues.kinesthetic)){
        console.log("AUDITORY")
        learnType = "AUDITORY"
    }
    else if((learnValues.kinesthetic > learnValues.visual) && (learnValues.kinesthetic > learnValues.auditory)){
        console.log("KINESTHETIC")
        learnType = "KINESTHETIC"
    }
    else{
        console.log("take the test!")
        
    }
   
    return(

        <div className='lvl-2-comp'>
            
            <div>
                <h1> Learning Style Form </h1>
                <form onSubmit={e => handleLearnForm(e)} height={800}>
                    <fieldset className='fieldsets' name='group1' id='group1'>
                        <label>1. When you don’t quite understand or remember something:</label>
                        <div>
                            <input checked type='radio' value='A' name='question1' />
                            <label>It doesn’t ring a bell or resonate</label><br></br>
                        </div>
                        <div>
                            <input checked type='radio' value='V' name='question1' />
                            <label>It seems hazy or unclear </label><br></br>
                        </div>
                        <div>
                            <input checked type='radio' value='K' name='question1' />
                            <label> You can’t get a handle on it or feel it </label><br></br>
                        </div>
                    </fieldset><br></br>

                    <fieldset className='fieldsets' name='group2' id='group2'>
                        <label>2. You are about to give a friend directions to your home. Would you:</label>
                        <div>
                            <input type='radio' value='V' name='question2' checked />
                            <label>Draw a map on paper?</label>
                        </div>
                        <div>
                            <input type='radio' value='A' name='question2' checked />
                            <label>Tell her the directions?</label>
                        </div>
                        <div>
                            <input type='radio' value='K' name='question2' checked />
                            <label>Pick her up in your car?</label>
                        </div>
                    </fieldset><br></br>

                    <fieldset className='fieldsets' name='group3' id='group3'>
                        <label>3. You are staying in a hotel and have a rental car. You would like to visit a friend whose address you do not know. Would you like them to: </label>
                        <div>
                            <input type='radio' value='V' name='question3' checked />
                            <label> Draw you a map? </label><br></br>
                        </div>
                        <div>
                            <input type='radio' value='A' name='question3' checked />
                            <label> Tell you directions? </label><br></br>
                        </div>
                        <div>
                            <input type='radio' value='K' name='question3' checked />
                            <label> Pick you up in their car? </label><br></br>
                        </div>
                    </fieldset><br></br>
                
                    <fieldset className='fieldsets' name='group4' id='group4'>
                        <label>4. Learning technical material is easiest for you when: </label>
                        <div>
                            <input type='radio' value='A' name='question4' checked />
                            <label> Someone explains the ideas to you </label><br></br>
                        </div>
                        <div>
                            <input type='radio' value='V' name='question4' checked />
                            <label> You visualize the concepts and see the whole picture </label><br></br>
                        </div>
                        <div>
                            <input type='radio' value='K' name='question4' checked />
                            <label> You can learn by doing or get a feel for the ideas </label><br></br>
                        </div>
                    </fieldset><br></br>

                    <fieldset className='fieldsets' name='group5' id='group5'>
                        <label>5. You are going to cook a dessert as a special treat for your family. Do you: </label>
                        <div>
                            <input type='radio' value='K' name='question5' checked />
                            <label> Cook something familiar? </label><br></br>
                        </div>
                        <div>
                            <input type='radio' value='V' name='question5' checked />
                            <label> Look through a cookbook for ideas? </label><br></br>
                        </div>
                        <div>
                            <input type='radio' value='A' name='question5' checked />
                            <label> Ask for the advice of others? </label><br></br>
                        </div>
                    </fieldset><br></br>

                    <fieldset className='fieldsets' name='group6' id='group6'>
                        <label>6. You are about to purchase a new sound system. Other than the price, what would most influence your decision? </label>
                        <div>
                            <input type='radio' value='A' name='question6' checked />
                            <label> A friend speaking about it </label><br></br>
                        </div>
                        <div>
                            <input type='radio' value='K' name='question6' checked />
                            <label> How it makes you feel </label><br></br>
                        </div>
                        <div>
                            <input type='radio' value='V' name='question6' checked />
                            <label> Its distinctive look or appearance </label><br></br>
                        </div>
                    </fieldset><br></br>

                    <fieldset className='fieldsets' name='group7' id='group7'>
                        <label>7. Recall a time in your life when you learned how to do something like playing a new board game. Try to avoid choosing a very physical skill like riding a bike. How did you learn best? By: </label>
                        <div>
                            <input type='radio' value='V' name='question7' checked />
                            <label> Looking at the directions, pictures, diagrams, or charts </label><br></br>
                        </div>
                        <div>
                            <input type='radio' value='A' name='question7' checked />
                            <label> Listening to somebody explain it </label><br></br>
                        </div>
                        <div>
                            <input type='radio' value='K' name='question7' checked />
                            <label> Doing it </label><br></br>
                        </div>
                    </fieldset><br></br>

                    <fieldset className='fieldsets' name='group8' id='group8'>
                        <label>8. Which of these games to you prefer? </label>
                        <div>
                            <input type='radio' value='V' name='question8' checked />
                            <label> Pictionary </label><br></br>
                        </div>
                        <div>
                            <input type='radio' value='A' name='question8' checked />
                            <label> 20 Questions </label><br></br>
                        </div>
                        <div>
                            <input type='radio' value='K' name='question8' checked />
                            <label> Charades </label><br></br>
                        </div>
                    </fieldset><br></br>

                    <fieldset className='fieldsets' name='group9' id='group9'>
                        <label>9. You are about to learn how to use a new program on a computer. Would you: </label>
                        <div>
                            <input type='radio' value='V' name='question9' checked />
                            <label> Read the instructions? </label><br></br>
                        </div>
                        <div>
                            <input type='radio' value='A' name='question9' checked />
                            <label> Call a friend and ask questions about it? </label><br></br>
                        </div>
                        <div>
                            <input type='radio' value='K' name='question9' checked />
                            <label> Turn it on and learn by experimentation? </label><br></br>
                        </div>
                    </fieldset><br></br>

                    <fieldset className='fieldsets' name='group10' id='group10'>
                        <label>10. You most easily are aware of and notice: </label>
                        <div>
                            <input type='radio' value='A' name='question10' checked />
                            <label> The quality of music from a sound system </label><br></br>
                        </div>
                        <div>
                            <input type='radio' value='V' name='question10' checked />
                            <label> If colors, shapes, or patterns clash </label><br></br>
                        </div>
                        <div>
                            <input type='radio' value='K' name='question10' checked />
                            <label> If clothes feel uncomfortable </label><br></br>
                        </div>
                    </fieldset><br></br>

                    <fieldset className='fieldsets' name='group11' id='group11'>
                        <label>11. You are not sure whether a word should be spelled “separate” or “seperate.” Do you: </label>
                        <div>
                            <input type='radio' value='V' name='question11' checked />
                            <label> See the word in your mind and choose the best way it looks? </label><br></br>
                        </div>
                        <div>
                            <input type='radio' value='A' name='question11' checked />
                            <label> Sound it out? </label><br></br>
                        </div>
                        <div>
                            <input type='radio' value='K' name='question11' checked />
                            <label> Write down both versions? </label><br></br>
                        </div>
                    </fieldset><br></br>

                    <fieldset className='fieldsets' name='group12' id='group12'>
                        <label>12. A new movie has arrived in town. What would most influence your decision to go or not go? </label>
                        <div>
                            <input type='radio' value='A' name='question12' checked />
                            <label> Friends/family talking about it </label><br></br>
                        </div>
                        <div>
                            <input type='radio' value='K' name='question12' checked />
                            <label> You have an intuition or sense about it</label><br></br>
                        </div>
                        <div>
                            <input type='radio' value='V' name='question12' checked />
                            <label> You saw a preview of it </label><br></br>
                        </div>
                    </fieldset><br></br>

                    <fieldset className='fieldsets' name='group13' id='group13'>
                        <label>13. You most easily remember directions when you: </label>
                        <div>
                            <input type='radio' value='A' name='question13' checked />
                            <label> Repeat them to yourself as you hear them </label><br></br>
                        </div>
                        <div>
                            <input type='radio' value='V' name='question13' checked />
                            <label> Visualize them </label><br></br>
                        </div>
                        <div>
                            <input type='radio' value='K' name='question13' checked />
                            <label> Intuitively sense how to get there </label><br></br>
                        </div>
                    </fieldset><br></br>

                    <fieldset className='fieldsets' name='group14' id='group14'>
                        <label>14. Do you prefer a teacher or trainer who likes to use: </label>
                        <div>
                            <input type='radio' value='V' name='question14' checked />
                            <label> Handouts, flow diagrams, charts, and visuals? </label><br></br>
                        </div>
                        <div>
                            <input type='radio' value='K' name='question14' checked />
                            <label> Field trips, experiments, and applications? </label><br></br>
                        </div>
                        <div>
                            <input type='radio' value='A' name='question14' checked />
                            <label> Discussions, guest speakers, and conversations? </label><br></br>
                        </div>
                    </fieldset><br></br>

                    <fieldset className='fieldsets' name='group15' id='group15'>
                        <label>15. Once you completely understand a new idea: </label>
                        <div>
                            <input type='radio' value='K' name='question15' checked />
                            <label> It is now concrete, or you have a feel for it </label><br></br>
                        </div>
                        <div>
                            <input type='radio' value='A' name='question15' checked />
                            <label> You have it loud and clear </label><br></br>
                        </div>
                        <div>
                            <input type='radio' value='V' name='question15' checked />
                            <label> You can envision it </label><br></br>
                        </div>
                    </fieldset><br></br>

                    <fieldset className='fieldsets' name='group16' id='group16'>
                        <label>16. You make decisions best when you rely on: </label>
                        <div>
                            <input type='radio' value='K' name='question16' checked />
                            <label> Your gut instinct </label><br></br>
                        </div>
                        <div>
                            <input type='radio' value='V' name='question16' checked />
                            <label> What looks clearest to you </label><br></br>
                        </div>
                        <div>
                            <input type='radio' value='A' name='question16' checked />
                            <label> What sounds best to you </label><br></br>
                        </div>
                    </fieldset><br></br>

                    <fieldset className='fieldsets' name='group17' id='group17'>
                        <label>17. At a party, you are most interested in people who </label>
                        <div>
                            <input type='radio' value='A' name='question17' checked />
                            <label> Are interesting and articulate speakers </label><br></br>
                        </div>
                        <div>
                            <input type='radio' value='K' name='question17' checked />
                            <label> Convey a warm and relaxing feeling </label><br></br>
                        </div>
                        <div>
                            <input type='radio' value='V' name='question17' checked />
                            <label> Radiate a visual beauty </label><br></br>
                        </div>
                    </fieldset><br></br>
                    <button type='submit' value='submit'>Submit</button>
                </form>
            </div>
            <div>
                <h1> Your Learning Style </h1>
                <h2> You are a {learnType}!</h2>
                <div>
                <h2>Visual </h2>
                <p>
                    - learners can absorb more knowledge when seeing a graph, photograph, or any
                    type of visual representation of the topic or information.
                </p>
                <h2>Auditory </h2>
                <p>
                    - learners can absorb more knowledge by just listeninig to the information from 
                    others talking about a subject or gathering information from sounds.
                </p>
                <h2>Kinesthetic </h2>
                <p>
                    - learners prefer physcically interacting wtih something to learn, for example by 
                    touching, feeling, holding or doing like writing, hands on experience.
                </p>
                
                    
            </div>
            </div>
        </div>
    )
}

export default LearningFormContainer;