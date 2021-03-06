import React from 'react';
import helpButton from '../images/help.png';
import helpHighlighted from '../images/help-highlighted.png';
import Image from '../components/Image';
import Title from '../components/Title';
import Help from './Help';
import Options from './Options';
import Opponent from './Opponent';
import GameFunctions from './GameFunctions';
import Play from '../images/play.png'
import backGround from '../images/backgroundOption3.jpg';

// This class is used as the outermost container for the game. Inside will be the game 
// board (a smaller container), and the persistent buttons in the corners (state dependent)

class GameContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          inGame: false,
          homeScreen: true,
          helpScreen: false,
          opponent: false,
          options: false,
          returnScreen: 'home'
        };
        this.showHelp = this.showHelp.bind(this);
        this.showOpponent = this.showOpponent.bind(this);
      };

    showHelp(){
        console.log('Changing to helpscreen');
        this.setState({
            homeScreen: false,
            helpScreen: true,
            });
    }

    highlightHelp(e) {
        e.target.src = helpHighlighted;
    }

    unhighlightHelp(e) {
        e.target.src = helpButton;
    }
    
    showOpponent(){
        console.log('Changing to Opponent Screen');
        this.setState({
            inGame: false,
            homeScreen: false,
            helpScreen: false,
            opponent: true,
            options: false,
        });
    }
    
    showGame(){
        console.log('Changing to Game Screen');
        this.setState({
            inGame: true,
            homeScreen: false,
            helpScreen: false,
            opponent: false,
            options: false,
        });
    }


    render() {
        const myStyle = {
            display: 'inline-grid',
            gridTemplateColumns: '15% auto 15%',
            gridTemplateRows: '50% auto',
            backgroundColor: '#2196F3',
            height: '100vh',
            width: '100vw',
            borderRadius: '10px',
            //marginLeft: '10%',
            //marginTop: '5%',
            // backgroundColor: 'pink',
            backgroundImage: 'url('+backGround+')',
            backgroundSize: '100%',
        };

        const playButtonDiv = {
            gridColumnStart: '2',
            gridColumnEnd: '3',
            height: 'auto',
        };

        const helpButtonDiv = {
            gridColumnStart: '3',
            gridColumnEnd: '4',
            gridRowStart: '2',
            gridRowEnd: '3'
        };

        const helpButtonStyle = {
            display: 'block',
            marginTop: '139%',
            width: '33%',
            height: 'auto',
            marginRight: '8.7%',
            float: 'Right'
        }

        const titleStyle = {
            gridColumnStart: '2',
            gridColumnEnd: '3',
            //border: '5px solid black'
        };

        const playButtonStyle = {
            display: 'block',
            marginTop: '10%',
            marginLeft: '40%'
        };

        if (this.state.helpScreen){
            return <Help returnScreen={'home'}/>
        }
        else if(this.state.inGame){
            return <GameFunctions />
        }
        else if(this.state.options){
            return <Options />
        }
        else if(this.state.opponent){
            return <Opponent />
        }
        else if (this.state.homeScreen){
            return (
                <div style={myStyle}>
                    <div style={titleStyle}><Title /></div>
                    <div style ={playButtonDiv}><input style={playButtonStyle} onClick={this.showOpponent} type="image" src={Play} name="PlayButton"/></div>
                    <div style={helpButtonDiv}><input style={helpButtonStyle} onClick={this.showHelp} onMouseEnter={(e) => this.highlightHelp(e)} onMouseLeave={(e) => this.unhighlightHelp(e)}  type="image" src={helpButton} name="helpbutton"/></div>
                </div>
            )
        }; 
    }
};

export default GameContainer;
