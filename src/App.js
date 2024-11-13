import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Routes,
  useNavigate,
} from "react-router-dom";
import "./App.css"; // Import file CSS yang baru dibuat
function Home() {
  return <h2>Home</h2>;
}

function About() {
  return <h2>About</h2>;
}

// membuat komponen form di halaman “Contact” yang menyimpan input pengguna useState.
function Contact() {
  // Menyimpan input pengguna untuk nama dan pesan
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  // Menggunakan useNavigate untuk melakukan navigasi
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Nama:", name);
    console.log("Pesan:", message);

    //=============================================================================================
    // kita arahkan ke halaman "/contact" setelah form berhasil
    navigate("/contact");
    //==============================================================================================

    // Reset form setelah submit
    setName("");
    setMessage("");
  };

  return (
    <div>
      <h2>Contact</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nama:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Pesan:</label>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          ></textarea>
        </div>
        <button type="submit">Kirim</button>
      </form>
    </div>
  );
}

function App() {
  return (
    <Router>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route exact path="/" Component={Home} />
        <Route path="/about" Component={About} />
        <Route path="/contact" Component={Contact} />
      </Routes>
    </Router>
  );
}

export default App;
