import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";

function App() {
  return (
    <div className="app-container">
      <header className="top-bar">
        <h1>Fintrack Pro</h1>
        <div className="user-profile-">MS</div>
      </header>

      <div className="main-layout">
        <aside className="sidebar">
          <nav>
            <ul>
              <li>Dashoard</li>
              <li>Transaksi</li>
              <li>Cypto Watchlist</li>
            </ul>
          </nav>
        </aside>

        <main className="content-area">
          <section className="card">
            <h2>Total Saldo</h2>
            <p>Rp 15.000.000</p>
          </section>
        </main>
      </div>
    </div>
  );
}

export default App;
