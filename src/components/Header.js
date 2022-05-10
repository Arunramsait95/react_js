import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';


const Header =()=>{
    let history = useNavigate(); 
    const [isLoggedin, setIsLoggedin] = useState(true);
    const logout = () => {
        localStorage.removeItem('token-info');
        setIsLoggedin(false);
        history(`/`);
    };

    const handleKeyPress = (event) => {
        if(event.key === 'Enter'){
          const sent = {
             search: event.target.value
          }
          axios.post('http://localhost/php/search.php', sent)
            .then((result)=>{
                   const res = JSON.stringify(result);
                    alert(res);
            })
        }
      }
    
    return(
      <div className="primary-header">
      <div className="row m-0 align-items-center">
          <div className='d-flex justify-content-between'>
            <div className="logo">
                <h2 className="text-white"><i>Task WebApp</i></h2>
            </div>
            <div className='mt-4'>
                <a className='link' onClickCapture={logout}><i className="fa fa-power-off"></i> Logout</a>
            </div>
        </div>
      </div>
      <div className="row secondary-nav">
          <div className="col-md-2 p-0 col-3">
              <select className="form-control valuation" name="" id="">
                  <option>Search By Only Parent Value</option>
              </select>
          </div>
          <div className="col-md-10 p-0 col-6 searchbox">
              <input type="text" name=""  onKeyPress={handleKeyPress}  className="search form-control" placeholder="Search Here" />
          </div>
      </div>
  </div>
  
    )
}

export default Header;