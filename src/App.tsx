import './App.css';
import Header from './components/header/header';
import { AppRoot } from '@telegram-apps/telegram-ui';
import Body from 'components/body/body';
import Questionnaire from 'components/questionnaire/questionnaire';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Welcom from 'pages/welcom/welcom';
import Target from 'pages/target/target';
import AboutMyself from 'pages/aboutMyself/aboutMyself';
import DateBirth from 'pages/dateBirth/dateBirth';
import TargetWeek from 'pages/targetWeek/targetWeek';
import LifeStyle from 'pages/lifestyle/lifestyle';
import ReadyStart from 'pages/readyStart/readyStart';
import TermsUse from 'pages/termsUse/termsUse';
import PrivacyPolicy from 'pages/privacyPolicy/privacyPolicy';
import Begin from 'pages/begin/begin';

function App() {
  return (
    <AppRoot>
      <div className="App">
         <Header name='Микросервис' />
         <Body>
         <Router>
               <Routes>
                   <Route path="/test"  element={<Questionnaire />} />
                   <Route path="/"  element={<Welcom />} />
                   <Route path="/target"  element={<Target />} />
                   <Route path="/aboutmyself"  element={<AboutMyself />} />
                   <Route path="/datebirth"  element={<DateBirth />} />
                   <Route path="/targetWeek"  element={<TargetWeek />} />
                   <Route path="/lifeStyle"  element={<LifeStyle />} />
                   <Route path="/readyStart"  element={<ReadyStart />} />
                   <Route path="/termsUse"  element={<TermsUse />} />
                   <Route path="/privacyPolicy"  element={<PrivacyPolicy />} />
                   <Route path="/begin"  element={<Begin />} />
               </Routes>
           </Router>
         </Body>
      </div>
    </AppRoot>
  );
}

export default App;
