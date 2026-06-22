* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: Arial, sans-serif;
}

body {
  background: #0f0f17;
  color: #fff;
  padding: 20px;
}

header {
  text-align: center;
  margin-bottom: 30px;
}

header h1 {
  font-size: 28px;
}

header p {
  color: #aaa;
}

.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
}

/* CARD */
.card {
  background: #1b1b2a;
  padding: 20px;
  border-radius: 12px;
  box-shadow: 0 0 10px rgba(0,0,0,0.3);
  transition: 0.3s;
}

.card:hover {
  transform: translateY(-5px);
}

.card h2 {
  margin-bottom: 10px;
}

.card p {
  color: #bbb;
  margin-bottom: 15px;
}

/* TIMER */
.timer {
  font-size: 18px;
  color: #00ff99;
  margin-bottom: 10px;
}

/* PROGRESS BAR */
.bar {
  width: 100%;
  height: 8px;
  background: #333;
  border-radius: 10px;
  overflow: hidden;
}

.progress {
  height: 100%;
  width: 0%;
  background: linear-gradient(90deg, #6c5ce7, #00ff99);
  transition: 0.5s;
}

/* RESPONSIVO */
@media (max-width: 600px) {
  header h1 {
    font-size: 22px;
  }
}
