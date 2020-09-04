import React, { Component } from 'react';

export class Signin extends Component {
    constructor() {
        super()
        this.state = {
            name: "",
            email: "",
            password: "",
            error: ""
        }
    }

    handleChange = (name) => (event) => {
        this.setState({error: ""});
        this.setState({[name]: event.target.value});
    };

    clickSubmit = event => {
        event.preventDefault();
        const {email, password} = this.state;
        const user = {
            email,
            password
        };
        // console.log(user);
        fetch("http://localhost:8080/signup", {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify(user)
        })
        .then(response => {
            return response.json();
        })
        .catch(err => console.log(err));
    };


    render() {
        const {name, email, password, error} = this.state;
        return (
            <div className="container">
                <h2 className="mt-5 mb-5">Signin</h2>

                <div className="alert alert-primary" style={{display: error ? "" : "none"}}>
                    {error}
                </div>

                <form>
                    <div className="form-group">
                        <label className="text-muted">Email</label>
                        <input onChange={this.handleChange("email")} type="email" className="form-control" value={email}/>
                    </div>
                    <div className="form-group">
                        <label className="text-muted">Password</label>
                        <input onChange={this.handleChange("password")} type="password" className="form-control" value={password}/>
                    </div>
                    <button onClick={this.clickSubmit} className="btn-raised btn-primary">
                        Submit
                    </button>
                </form>
            </div>
        );
    }
}

export default Signin