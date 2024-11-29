import 'bootstrap/dist/css/bootstrap.min.css'
import MyNavbar from './components/MyNavbar';
import MyFooter from './components/MyFooter';
import MyMain from './components/MyMain';

document.body.classList.add('bg-dark');


function App() {
  
  return (
    <div className="App d-flex flex-column min-vh-100">
      <header className="App-header">
        <MyNavbar></MyNavbar>
    
      </header>
      <main className='flex-grow-1'>
        <MyMain></MyMain>
      </main>
      <MyFooter></MyFooter>
    </div>
  );
}

export default App;
