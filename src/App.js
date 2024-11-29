import 'bootstrap/dist/css/bootstrap.min.css'
import MyNavbar from './components/MyNavbar';
import MyFooter from './components/MyFooter';
import MyMain from './components/MyMain';



function App() {
  
  return (
    <div className="App d-flex flex-column min-vh-100">
      <header className="App-header">
        <MyNavbar></MyNavbar>
     <h1>Testo di prova</h1>
      </header>
      <main className='flex-grow-1'>
        <MyMain></MyMain>
      </main>
      <MyFooter></MyFooter>
    </div>
  );
}

export default App;
