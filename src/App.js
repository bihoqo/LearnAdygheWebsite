import React from 'react';
import ExercisePage from './components/ExercisePage/ExercisePage.js';
import LessonPage from './components/LessonPage/LessonPage.js';
import ExcercisesHomepage from './pages/ExerciseHomepage.js'
import { BrowserRouter, Route } from 'react-router-dom';
import { Navbar, Nav, Button } from 'react-bootstrap';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <TopNavBar></TopNavBar>
      <div id='app'>
        <Route path='/' exact component={Home} />
        <Route path='/excercisesHome' exact component={ExcercisesHomepage} />
        <Route path='/exerciseQuestions1' component={ExercisePage} />
        <Route path='/exerciseQuestions2' component={ExercisePage} />
        <Route path='/lesson' component={LessonPage} />
      </div>
    </BrowserRouter>
  );
}

const TopNavBar = () => {
  return (
    <Navbar bg="light" variant="light">
      <Navbar.Brand href="/">Learn Adyghe</Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link href="/">Home</Nav.Link>
        <Nav.Link href="/excercisesHome">Excercises</Nav.Link>
        <Nav.Link href="/dictionary">Dictionary</Nav.Link>
      </Nav>
    </Navbar>
  )
}

const Home = () => (
  <div id='homeDiv'>
    <h1>Home page</h1>
    <h3>Excercises</h3>
    <p>
      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
    </p>
    <Button href="/excercisesHome">Go to excercises page</Button>
    <hr/>
    <h3>Dictionary</h3>
    <p>
      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
    </p>
    <Button href="/dictionary">Go to dicitonary page</Button>
  </div>
);


export default App;