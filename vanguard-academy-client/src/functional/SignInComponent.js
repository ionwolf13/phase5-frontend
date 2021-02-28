
import ProfileSection from '../presentational/ProfileSection.js'

const SignInComponent = ({students, rooms}) => {

    return(
        <div>
            <form onSubmit={(e) => {e.preventDefault()
                console.log("iwas clicked")}}>
                    <label>Username</label><br></br>
                    <input type="text" name="username"/>  <br></br>  
                    <label>PassWord</label><br></br>
                    <input type="text" name="password"/><br></br>
                    <button type="submit" value="submit">Submit</button>
            </form>
                
                <ProfileSection students={students} rooms={rooms}/>
        </div>
    )
}

export default SignInComponent;