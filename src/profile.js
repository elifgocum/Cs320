import React, {Component} from "react";

class profile extends Component {
    render() {
        return (
            <div>
                <h2>Profile</h2>

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
                        <label>Birthday</label><br/>
                        <input type="date" name="party" min="1920-01-01" max="2002-01-01"/>
                    </p>
                    <p>
                        <label htmlFor="img">Select image:</label>
                        <input type="file" id="img" name="img" accept="image/*"/>
                    </p>
                </form>
            </div>
        );
    }
}

export default profile;