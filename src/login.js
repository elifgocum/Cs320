import React, {Component} from "react";

class login extends Component {
    render() {
        return (
            <div>
                <h2>login</h2>

                <form>
                    <p>
                        <label>Username</label> <br/>
                        <input className="w3-input" type="text"/></p>
                    <p>

						<label for="psw"><b>Password</b></label><br/>
                        <input className="w3-input" type="text"/></p>
						
						<button type="submit">Login</button>
                </form>
            </div>
        );
    }
}
export default login;