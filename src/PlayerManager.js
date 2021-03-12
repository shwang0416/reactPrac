import logo from './logo.svg';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Card, Container, Col, Row } from 'react-bootstrap';
import './PlayerManager.css';

class PlayerProfileCard extends React.Component {
    render() {
        console.log(this.props.name)
        return (
            <div id="card">
                <div className="personal">
                    <Avatar image="https://raw.githubusercontent.com/JustMonk/codepen-resource-project/master/img/pixel%20avatar.png" />
                    <NameHolder name={this.props.name} winRate={this.props.winRate} />
                </div>
                <Info point={this.props.point} money={this.props.money} gain={this.props.gain} />
                <InfoButton buy="매매목록" info="대화요청" />
            </div>
        );
    }

}

function InfoButton(props) {
    return (
        <div className="infoButton">
            <Button variant="info">{props.buy}</Button>
            <Button variant="danger">{props.info}</Button>
        </div>
    )
}

function Info(props) {
    return (
        <div className="info">
            <span>포인트 {props.point}</span>
            <span>자산 {props.money}</span>
            <span>수익률 {props.gain}</span>
        </div>
    );
}



function Avatar(props) {
    return (
        <div className="avatar">
            <img src={props.image} alt="user avatar" />
        </div>
    );
}

function NameHolder(props) {
    return (
        <div className="nameHolder">
            <h1>{props.name}</h1>
            <h2>승률: {props.winRate}</h2>
        </div>
    );
}

class PlayerManager extends React.Component {
    constructor(props) { // Initialize
        super(props);
        this.state = {
            users: Array(6).fill({
                name: "USER1",
                winRate: "40%",
                point: 100,
                money: "200 만원",
                gain: "24 % 🔺",
                isOnChat: false,
            }),
            userCount: 6,
            gamePhase: 0
        }
    }

    renderUser(userIdx) {
        return (
            <Card style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                    </Card.Text>
                    <Card.Link href="#">Card Link</Card.Link>
                    <Card.Link href="#">Another Link</Card.Link>
                </Card.Body>
            </Card>
        );
    }

    render() {
        const users = this.state.users;
        let userProfile = Array(6).fill(null);
        users.map((user, idx) => {
            if(idx >= 3) {
                userProfile[idx] = (<Col md={4}>
                    <PlayerProfileCard name={user.name} winRate={user.winRate} point={user.point} money={user.money} gain={user.gain} />
                </Col>)
            }
            else {
                userProfile[idx] = (<Col md={4}>
                    <PlayerProfileCard name={user.name} winRate={user.winRate} point={user.point} money={user.money} gain={user.gain} />
                </Col>)
            }
        })

        return (
            //@ 6명의 유저를 모두 출력 해주도록 함수를 호출
            //@ template 찾기
            <div>
                <p>
                    PlayerManager render()
                </p>
                <Container>
                    <Row>
                        {userProfile}
                    </Row>
                </Container>
            </div>
        );

    }
}

export default PlayerManager;


// class ProfileCard extends React.Component {
//     render() {
//        return (
//           <div id="card">
//              <div className="personal">
//                 <Avatar image="https://raw.githubusercontent.com/JustMonk/codepen-resource-project/master/img/pixel%20avatar.png" />
//                 <NameHolder name={this.props.name} career={this.props.career} />
//              </div>
//              <Info pens={this.props.pens} posts={this.props.posts} projects={this.props.projects} />
//              <Skills skills={this.props.skills} />
//              <Followers followers={this.props.followers} following={this.props.following} />
//              <RandomizeButton />
//           </div>
//        );
//     }
//  }

//  function RandomizeButton() {
//     let rand = Math.random;
//     let maxSkills = 3 + getRandom(2);

//     function getRandom(arg) {
//        if (Array.isArray(arg)) return arg[Math.round((rand() * (arg.length - 1)).toFixed(2))];
//        return Math.round((rand() * arg).toFixed(2)) || 1;
//     }

//     function randomize() {
//        let names = ["Mike", "Andrew", "Tom", "Jack", "Garry", "Nick", "Daniel"];
//        let surnames = ["Vazovsky", "Anderson", "Archer", "Armstrong", "Ash", "Bradley", "Collins"];
//        let careers = ["Frontend developer", "Backend developer", "Designer", "Data scientist", "Engineer", "Painter"];
//        let skills = ["CSS3", "Ruby", "PHP", "JavaScript", "React", "HTML5", "Vue.js", "Angular", "Python", "C#", "C++", "Java", "Node.JS"];
//        let randomSkils = [];
//        while (randomSkils.length <= maxSkills) { randomSkils.push(skills.splice(getRandom(skills.length - 1), 1)); }
//        ReactDOM.render(<ProfileCard name={getRandom(names) + " " + getRandom(surnames)} career={getRandom(careers)} pens={getRandom(60)} posts={getRandom(20)} projects={getRandom(10)} skills={randomSkils} followers={getRandom(44)} following={getRandom(27)} />, document.getElementById('root'));

//        //anim changeable data
//        let changeNodes = document.querySelectorAll('.nameHolder, .info span, .skills, .followers h2');
//        changeNodes.forEach(val => {
//           val.classList.add('animate-change');
//        });

//        changeNodes[0].addEventListener("animationend", animationEnd);
//        changeNodes[0].addEventListener("webkitAnimationEnd", animationEnd);
//        function animationEnd(e) {
//           changeNodes.forEach(val => {
//              val.classList.remove("animate-change");
//           });
//        }
//     }

//     return (
//        <a className="randomizeButton" onClick={randomize}>Randomize</a>
//     );
//  }

//  function Followers(props) {
//     return (
//        <div className="followers">
//           <div>
//              <h1>followers</h1>
//              <h2>{props.followers}</h2>
//           </div>
//           <div>
//              <h1>following</h1>
//              <h2>{props.following}</h2>
//           </div>
//        </div>
//     );
//  }

//  function Skills(props) {
//     let startKey = 0;
//     return (
//        <div className="skills">
//           {
//              props.skills.map(elem => {
//                 return <span key={startKey++}>{elem}</span>
//              })
//           }
//        </div>
//     );
//  }

//  function Avatar(props) {
//     return (
//        <div className="avatar">
//           <img src={props.image} alt="user avatar" />
//        </div>
//     );
//  }

//  function NameHolder(props) {
//     return (
//        <div className="nameHolder">
//           <h1>{props.name}</h1>
//           <h2>{props.career}</h2>
//        </div>
//     );
//  }

//  function Info(props) {
//     return (
//        <div className="info">
//           <span>Pens: {props.pens}</span>
//           <span>Posts: {props.posts}</span>
//           <span>Projects: {props.projects}</span>
//        </div>
//     );
//  }

//  ReactDOM.render(<ProfileCard name="Mike Vazovsky" career="Frontend developer" pens="14" posts="7" projects="5" skills={["CSS3", "HTML5", "JavaScript", "PHP"]} followers="45" following="12" />, document.getElementById('root'));