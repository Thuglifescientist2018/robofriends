import React from 'react';
import './App.css';
import CardList from '../components/CardList';

import SearchBox from '../components/Searchbox';
import Scroll from '../components/Scroll';
import ErrorBoundary from '../components/ErrorBoundary';




class App extends React.Component {
    constructor() {
        super();
        this.state = {
            robots: [],
            searchField: ''
        }
    }
    componentDidMount() {
        fetch(`https://jsonplaceholder.typicode.com/users`).then(response => response.json()).then(robots => this.setState({robots})) // robots: robots is equal to just robots
    }
    onSearchChange =(event) => {
        this.setState({searchField: event.target.value})
       
    }
    render() {
        const {robots, searchField} = this.state
        const filteredRobots  = robots.filter((robot) => {
            return robot.name.toLowerCase().includes(searchField.toLowerCase())
        })

       return !robots.length ? (
          
                <div className='tc'>
                <h1> Loading</h1>
                </div>
       ):(

            <main className="App tc">
                <h1 className='f2'>RoboFriends</h1>
                <SearchBox searchChange={this.onSearchChange} />
                <ErrorBoundary>

                <Scroll>
                <CardList robots={filteredRobots} />

                </Scroll>
    
                </ErrorBoundary>
            </main>
        )
        }

    }

export default App;