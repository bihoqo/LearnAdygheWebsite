import React from 'react';
import ExercisePage from './components/lessons/exercisePage/ExercisePage.js';
import LessonPage from './components/lessons/lessonPage/LessonPage.js';
import LessonsHomepage from './components/lessons/lessonsHomepage/LessonsHomepage.js';
import DictionaryPage from './components/dictionary/dictionaryPage/DictionaryPage.js';
import StoriesHomepage from './components/stories/storiesHomepage/StoriesHomepage.js';
import StoryPage from './components/stories/storyPage/StoryPage.js';
import { BrowserRouter, Route } from 'react-router-dom';
import { Navbar, Nav, Button } from 'react-bootstrap';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <TopNavBar></TopNavBar>
      <div id='app'>
        <Route path='/' exact component={Home} />
        <Route path='/lessonsHome' exact component={LessonsHomepage} />
        <Route path='/exercise' component={ExercisePage} />
        <Route path='/lesson' component={LessonPage} />
        <Route path='/dictionary' component={DictionaryPage} />
        <Route path='/stories' component={StoriesHomepage} />
        <Route path='/story' component={StoryPage} />
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
        <Nav.Link href="/lessonsHome">Lessons</Nav.Link>
        <Nav.Link href="/dictionary">Dictionary</Nav.Link>
        <Nav.Link href="/stories">Stories</Nav.Link>
      </Nav>
    </Navbar>
  )
}

const Home = () => (
  <div id='homeDiv'>
    <h3>Lessons</h3>
    <p>
      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
    </p>
    <Button href="/lessonsHome">Go to lesosns page</Button>
    <hr />
    <h3>Dictionary</h3>
    <p>
      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
    </p>
    <Button href="/dictionary">Go to dicitonary page</Button>
  </div>
);

export default App;