import axios from 'axios';
import { useState } from 'react';
import { Route,Routes,BrowserRouter } from 'react-router-dom';
import './App.css';
import Footer from './Component/Footer';
import Header from './Component/Header/Header';
import Home from './Pages/Home/Home';
import Quiz from './Pages/Quiz/Quiz';
import Result from './Pages/Result/Result';


function App() {
  const [name, setName] = useState("");
  const [score, setScore] = useState();
  const [questions, setQuestions] = useState()
  const fetchQuestions =async(category=" ",difficulty=" ")=> {

    const {data} = await axios.get(`https://opentdb.com/api.php?amount=10${
      category && `&category=${category}`}${difficulty&& `&difficulty=${difficulty}`}&type=multiple`);
      setQuestions(data.results)
  }
  return (
    <>
    <BrowserRouter>
    <div className="app" style={{backgroundImage:"url(./ques1.png)"}}>
      <Header/>
      <Routes >
        <Route path='/' exact element={<Home name={name} setName={setName} fetchQuestions={fetchQuestions} />} />
         
        <Route path='/quiz' exact element={<Quiz 
        name = {name}
        questions = {questions}
        setQuestions={setQuestions}
        score = {score}
        setScore = {setScore}
        />} />
          
        <Route path='/result' exact  element={<Result />} />
          
      </Routes>
    </div>
    <Footer/>
    </BrowserRouter>
    </>
  );
}

export default App;
