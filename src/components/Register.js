import axios from 'axios';
import { useState } from 'react';
import { Link,  useNavigate} from 'react-router-dom';

const Register = ()=>{
    // Use for navigate on previous history
    let history = useNavigate(); 
    const [data, setData] = useState({
        email: "",
        username: "",
        password: ""
    });

    const handlechange=(e)=>{
        setData({ ...data, [e.target.name]: e.target.value});
    }

    const submitForm=(e)=>{
        e.preventDefault();
        const sentData = {
            email:data.email,
            username: data.username,
            password: data.password
        }

        console.log(sentData);
        axios.post('http://localhost/php/register.php', sentData)
        .then((result)=>{
            if(result.data.Status === 'Invalid'){
                alert('Invalid User');
            }else{
                // history to push dashboard
                history(`/Login`);
            }
        })
    }
    return(
        <div className="container go-login">
            <div className="form__container form__container-register">
                <form onSubmit={submitForm}>
                <h3 className="form__heading">Create Account</h3>
                <div className="field">
                    <input type="email" className='' required name="email" onChange={handlechange} value={data.email} />
                    <label  title="Email" data-title="Email"></label>
                </div>
                <div className="field mt-3">
                    <input type="text" name="username" required onChange={handlechange} value={data.username} />
                    <label  title="User Name" data-title="User Name"></label>
                </div>
                <div className="row mt-3">
                    <div className="col-md-12 col-sm-12">
                        <div className="field">
                            <input type="password" name="password" required onChange={handlechange} value={data.password} />
                            <label title="Password" data-title="Password"></label>
                        </div>
                    </div>
                </div>
                <button type="submit" className="btn btn--main mt-2" name="signup">Sign Up</button>
                </form>
            </div>
            <div className="overlay-container">
                <div className="overlay overlay--left">
                    <img src="assets/register.png" width="108px" />
                    <p className="overlay__desc">One Account, Will change your Buisness</p>
                    <Link to="/login" id="go-login" className="btn btn--main-outline">Sign In</Link>
                </div>
            </div>
        </div>
    )
}

export default Register;