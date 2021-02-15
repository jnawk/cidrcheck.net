import React from "react"
import ReactDOM from "react-dom"
const autoBind = require("auto-bind")

// import Container from "react-bootstrap/Container"
// import Row from "react-bootstrap/Row"
// import { LinkContainer as Link } from "react-router-bootstrap"
// import Button from "react-bootstrap/Button"

// order matters.  We want our styles to override bootstrap ones, so
// we import the bootstrap ones first.
// import "bootstrap/dist/css/bootstrap.min.css"
//
// import {
//     HashRouter as Router,
//     Switch,
//     Route
// } from "react-router-dom"

// import "./index.css"
// import EventConfigEditor from "./event-config-editor.js"
// import DocumentationDisplayer from "./docs-displayer.js"
// import Home from "./home.js"

import CIDRCheck from "./cidr-check.jsx"

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}

        autoBind(this)
    }

    componentDidMount() {
    }

    render(){
        return (
            <CIDRCheck/>
        )
    }
}

ReactDOM.render(<App />, document.getElementById("app"))
