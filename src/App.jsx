import React from 'react';
        import './App.css';

        function App() {
          return (
            <div className="App">
              <h1>ҰБТ-ға дайындау сайты</h1>
              <p>Бес пән бойынша дайындалуға арналған сайт.</p>
              <ul>
                <li><a href="/chemistry">Химия</a></li>
                <li><a href="/physics">Физика</a></li>
                <li><a href="/math">Математика</a></li>
                <li><a href="/kazakh">Қазақ тілі</a></li>
                <li><a href="/history">Тарих</a></li>
              </ul>
            </div>
          );
        }

        export default App;
