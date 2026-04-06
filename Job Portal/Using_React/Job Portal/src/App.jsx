import { useState } from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  const [jobs, setJobs] = useState([
    {
      title: "Full Stack Developer",
      company: "Samsung Research & Development",
      location: "Chandigarh",
      desc: "Experienced in HTML, CSS, and JavaScript.",
    },
    {
      title: "Animator",
      company: "MAPPA Co., Ltd.",
      location: "Tokyo",
      desc: "Drawing and Animations",
    },
    {
      title: "Game Designer",
      company: "Unreal Engine",
      location: "California",
      desc: "Design user-friendly interfaces and experiences.",
    },
  ]);

  function addJob(job) {
    setJobs([...jobs, job]);
  }

  return (
    <div>
      <Header />
      <Main jobs={jobs} addJob={addJob} />
      <Footer />
    </div>
  );
}

export default App;