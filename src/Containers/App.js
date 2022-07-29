import React, {Component} from "react";
import Searchbox from "../Components/Searchbox";
import CardList from "../Components/CardList";
import Scroll from "../Components/Scroll";
import { directory } from "../directory";
import './App.css';
import DisplayCard from "../Components/DisplayCard";

class App extends Component {
    constructor() { 
        super()
        this.state = {
            directory: directory,
            searchfield: "",
        }
    } 

    // also set the directory in state as empty if you use this as directory will update when user list is fetched from the server (directory: [])

    // componentDidMount() {
    //     fetch('https://jsonplaceholder.typicode.com/users')
    //     .then(response => response.json())
    //     .then(users => this.setState({directory: users}))
    // }

    whenISearch = (event) => {
        this.setState({searchfield: event.target.value})
    }

    render() {
        const {directory, searchfield} = this.state
        const filteredDirectory = directory.filter(directory => {
            return directory.name.toLocaleLowerCase().includes(searchfield.toLocaleLowerCase())
        })

        return !directory.length ?
            <h1>loading</h1> :
        (
            <div className="tc">
                <h1 style={{fontSize: "3rem"}}>RoboDirectory</h1>
                <Searchbox searchChange = { this.whenISearch }/>
                <DisplayCard/>
                <Scroll> 
                    <CardList directory = { filteredDirectory }/>
                </Scroll>
            </div>
        )
    }
}

export default App;