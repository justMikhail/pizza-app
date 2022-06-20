import AppHeader from './components/AppHeader';
import AppFooter from './components/AppFooter';

function App() {
  return (
    <div className="page">
      <div className="page__header">
        <AppHeader/>
      </div>
      <div className="page__main">
        MAIN
      </div>
      <div className="page__footer">
        <AppFooter/>
      </div>
    </div>
  );
}

export default App;
