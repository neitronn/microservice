import './App.css';
import { AppRoot } from '@telegram-apps/telegram-ui';
import Body from 'components/body/body';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Welcom from 'pages/welcom/welcom';
import TermsUse from 'pages/termsUse/termsUse';
import PrivacyPolicy from 'pages/privacyPolicy/privacyPolicy';
import Begin from 'pages/begin/begin';
import Questionary from 'pages/questionary/questionary';
import Home from 'pages/home/home';
import { setUserId } from './server/server';
import { useRawInitData } from '@telegram-apps/sdk-react';
import { init, parseInitDataQuery } from '@telegram-apps/sdk';
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    init();
  }, []);

  return (
    <AppRoot>
      <AppContent />
    </AppRoot>
  );
}

function AppContent() {
  const rawInitData = useRawInitData();

  useEffect(() => {
    if (rawInitData) {
      try {
        const initData = parseInitDataQuery(rawInitData);
        if (initData && initData.user && initData.user.id) {
          setUserId(initData.user.id);
          console.log('Telegram User ID:', initData.user.id);
        }
      } catch (error) {
        console.error('Failed to parse init data:', error);
      }
    }
  }, [rawInitData]);

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Body><Welcom /></Body>} />
          <Route path="/termsUse" element={<Body><TermsUse /></Body>} />
          <Route path="/privacyPolicy" element={<Body><PrivacyPolicy /></Body>} />
          <Route path="/begin" element={<Body><Begin /></Body>} />
          <Route path="/questionary" element={<Body><Questionary /></Body>} />
          <Route path="/home" element={<Body style='basic'><Home /></Body>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
