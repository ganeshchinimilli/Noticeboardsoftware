import React, { useRef} from "react"
import { connect } from "react-redux";
import { signIn } from "actions/auth";
import { setLoading, clearAlert } from "actions/general";
import Alerts from "utils/alerts"
import "./login.css"
const Login = ({
  signIn,
  setLoading,
  history,
}) => {


  const emailRef = useRef()
  const passwordRef = useRef()

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    signIn(emailRef.current.value, passwordRef.current.value, () => history.push("/", { from: 'login' })).then(() => {
      setLoading(false);
    });
  }

  return (

    
    <div class="wrapper">
    <div class="logo"> 
    <img src="https://www.freepnglogos.com/uploads/apex-legends-logo-png/apex-legends-characters-circle-logo-transparent-png-24.png" alt=""/> 
    </div>
    <form   class="p-3 mt-3" onSubmit={handleSubmit}>
    <div class="form-field d-flex align-items-center"> <span class="far fa-user"></span> 
        <input type="text" name="userName" id="userName" placeholder="Username"  ref={emailRef}  required/> </div>
        <div class="form-field d-flex align-items-center"> <span class="fas fa-key"></span>
         <input type="password" name="password" id="pwd" placeholder="Password" ref={passwordRef} required/> </div>
         
         <Alerts />
          <button class="btn mt-3"    type="submit" >Login</button>
    </form>
 
 </div>
    
  );
};

function mapStateToProps(state) {
  return {};
}

function mapDispatchToProps(dispatch) {
  return {
    clearAlert: () => dispatch(clearAlert()),
    setLoading: (status) => dispatch(setLoading(status)),
    signIn: (email, password, callback) =>
      dispatch(signIn(email, password, callback))
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);