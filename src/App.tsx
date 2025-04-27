import './App.css';
import { AppRoot } from '@telegram-apps/telegram-ui';
import Body from 'components/body/body';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Welcom from 'pages/welcom/welcom';
import TermsUse from 'pages/termsUse/termsUse';
import PrivacyPolicy from 'pages/privacyPolicy/privacyPolicy';
import Begin from 'pages/begin/begin';
/*import { init, themeParams, viewport, mainButton } from '@telegram-apps/sdk';
import { useState, useEffect } from 'react';
import { setServerUserInfo } from 'server/server';*/
import Questionary from 'pages/questionary/questionary';
import Home from 'pages/home/home';

/*init();

viewport.mount();
themeParams.mount();
mainButton.mount();

viewport.expand();
themeParams.bindCssVars();*/

function App() {

  /*const [userId, setUserId] = useState(null);

    useEffect(() => {
        // Проверяем, доступен ли Telegram Web App API
        if (window.Telegram && window.Telegram.WebApp) {
            // Получаем данные и парсим их
            const initData = window.Telegram.WebApp.initData;
            const userData = JSON.parse(decodeURIComponent(initData));

            // Получаем ID пользователя
            if (userData && userData.user) {
                setUserId(userData.user.id);
                setServerUserInfo('id', userData.user.id)
            }
        }
    }, []);*/

  return (
    <AppRoot>
      <div className="App">
          <Router>
               <Routes>
                   <Route path="/"  element={<Body><Welcom /></Body>} />
                   <Route path="/termsUse"  element={<Body><TermsUse /></Body>} />
                   <Route path="/privacyPolicy"  element={<Body><PrivacyPolicy /></Body>} />
                   <Route path="/begin"  element={<Body><Begin /></Body>} />
                   <Route path="/questionary"  element={<Body><Questionary /></Body>} />
                   <Route path="/home"  element={<Body style='basic'><Home /></Body>} />       
               </Routes>
           </Router>
      </div>
    </AppRoot>
  );
}

export default App;
