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
         <Body>
          <Router>
               <Routes>
                   <Route path="/"  element={<Welcom />} />
                   <Route path="/termsUse"  element={<TermsUse />} />
                   <Route path="/privacyPolicy"  element={<PrivacyPolicy />} />
                   <Route path="/begin"  element={<Begin />} />
                   <Route path="/questionary"  element={<Questionary />} />
                   <Route path="/home"  element={<Home />} />       
               </Routes>
           </Router>
         </Body>
      </div>
    </AppRoot>
  );
}

export default App;
