import React, {Component} from "react";

class register extends Component {
    render() {
        return (
            <div>
                <h2>register</h2>

                <form>
                    <p>
                        <label>First Name</label> <br/>
                        <input className="w3-input" type="text"/></p>
                    <p>
                        <label>Last Name</label><br/>
                        <input className="w3-input" type="text"/></p>
				    <p>
                        <label>Email</label><br/>
                        <input className="w3-input" type="text"/></p>
						
					<p>
                        <label>Phone</label><br/>
                        <input className="w3-input" type="text"/></p>
						
						<button type="submit">Register</button>


                </form>
            </div>
        );
    }
}
export default register;