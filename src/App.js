import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      friends: [],
      picture: '',
      name: '',
    };

    this.updatePicture = this.updatePicture.bind(this);
    this.updateName = this.updateName.bind(this);
    this.addFriend = this.addFriend.bind(this);
  }

  updatePicture(value) {
    this.setState({picture: value});
  }
  
  updateName(value) {
    this.setState({name: value});
  }

  addFriend() {
    const {friends, picture, name } = this.state;

    let newFriends = friends.slice();
    newFriends.push({ picture, name });

    this.setState({friends:newFriends, picture: '', name: '',});
  }


  render() {
    console.log(this.state);
    const friends = this.state.friends.map( (friend, i) => (
      <div key={`friend-${i}-${friend.name}`}>
        <img src={friend.picture}/>
        <span>{friend.name}</span>
      </div>
    ));

    return (
      <div>
        <span>Picture:</span>
        <input onChange={e => this.updatePicture(e.target.value)} value={this.state.picture} />
        <span>Name:</span>
        <input onChange={e => this.updateName(e.target.value)} value={this.state.name} />
        <button onClick={ () => this.addFriend()}>Add Friend</button>
        {friends}
      </div>
    );
  }
}

export default App;
