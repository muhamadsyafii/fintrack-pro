import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";
import type { Transaction, User } from "./types";

function App() {
  const currentUser: User = {
    id: "U-001",
    name: "Muhamad Syafii",
    email: "muhamadsyafii4@gmail.com",
    // avatarUrl tidak diisi tidak apa-apa karena opsional (?)
  };

  const mockTransactions: Transaction[] = [
    {
      id: "T-001",
      title: "Gaji Bulanan",
      amount: 15000000,
      date: "2026-06-01",
      type: "income",
    },
    {
      id: "T-002",
      title: "Beli Kopi",
      amount: 35000,
      date: "2026-06-02",
      type: "expense",
    },
    {
      id: "T-003",
      title: "Langganan VPS Linux",
      amount: 150000,
      date: "2026-06-03",
      type: "expense",
    },
  ];

  // Mengambil inisial nama untuk Avatar (Misal: "Muhamad Syafii" -> "MS")
  const getInitials = (name: string) => {
    return name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase();
  };

  return (
    <div className="app-container">
      <header className="top-bar">
        <h1>Fintrack Pro</h1>
        <div className="user-profile-" title={currentUser.name}>
          {getInitials(currentUser.name)}
        </div>
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
            <p>Rp 14.815.000</p>
          </section>

          <h3 className="section-title">Riwayat Transaksi</h3>
          <div className="card transaction-list">
            {mockTransactions.map((trx) => (
              <div key={trx.id} className="transaction-item">
                <div>
                  <h4 className="transaction-title">{trx.title}</h4>
                  <small className="transaction-date">{trx.date}</small>
                </div>

                <div className={`transaction-amount ${trx.type}`}>
                  {trx.type === "income" ? "+" : "-"} Rp{" "}
                  {trx.amount.toLocaleString("id-ID")}
                </div>
              </div>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;
