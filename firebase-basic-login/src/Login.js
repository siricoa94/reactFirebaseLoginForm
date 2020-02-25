import React, {Component} from 'react';

import fire from './config/fire';

class Login extends Component {
    constructor(props) {
        super(props);
        // this.login.bind(this);
        // this.handleChange = this.handleChange.bind(this);
        this.state = {
            email: '',
            password: ''
        };
    };

    login(e) {
        e.preventDefault();
        fire.auth().signInWithEmailAndPassword(this.state.email, this.state.password).then((u) => {
        }).catch((error) => {
            console.log(error);
        });
    };

    heandleChange(e) {
        this.setState ({ [e.target.name]: e.target.value})
    };




    render () {
        return (
            <div>
                <form>
                    <div>
                        <label></label>
                        <input vaue={this.state.email} onChange={this.handleChange} type="email" name="email" aria-describedby="emailHelp" placeholder="Enter Email Please"></input>
                        <small id="emailHelp">We Might Share your email with someone, just kidding :D</small>
                    </div>
                    <div>
                        <label></label>
                        <input value={this.state.password} onChange={this.handleChange} type="password" name="password" placeholder="Enter Password Please"></input>
                    </div>
                    <button type="submit" onClick={this.login}>Login</button>
                    <button onClick={this.signup}>Sign Up</button>
                </form>
            </div>
        );
    };
}

export default Login;