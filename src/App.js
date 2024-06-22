import logo from "./logo.png";
import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <img src={logo} className="App-logo img-fluid" alt="logo" />
        </header>
        <main>
          <Dictionary />
        </main>
        <footer className="App-footer">
          <small>
            Open-Source Code on{" "}
            <a
              href="https://github.com/MigenaPl/dictonary-react-app"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>{" "}
            by Migena Plenishti, hosted on{" "}
            <a
              href="https://dictionary-app-by-mp.netlify.app/"
              target="_blank"
              rel="noreferrer"
            >
              Netlify
            </a>
            .
          </small>
        </footer>
      </div>
    </div>
  );
}
