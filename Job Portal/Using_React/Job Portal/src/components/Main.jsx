import { useState } from "react";

function Main({ jobs, addJob }) {
  const [title, setTitle] = useState("");
  const [company, setCompany] = useState("");
  const [location, setLocation] = useState("");
  const [desc, setDesc] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (!title || !company || !location || !desc) return;

    addJob({ title, company, location, desc });

    setTitle("");
    setCompany("");
    setLocation("");
    setDesc("");
  }

  return (
    <main>

<section className="cat">
  <div>
    <h2>Job Categories</h2>
    <ul>
      <li>Animation</li>
      <li>Design</li>
      <li>Game development</li>
      <li>Marketing</li>
      <li>Research</li>
    </ul>
  </div>
</section>

<hr />

<section>
  <h2>Add New Job</h2>

  <form className="fr" onSubmit={handleSubmit}>
    <input className="in" placeholder="Job Title" value={title} onChange={(e) => setTitle(e.target.value)} />
    <input className="in" placeholder="Company" value={company} onChange={(e) => setCompany(e.target.value)} />
    <input className="in" placeholder="Location" value={location} onChange={(e) => setLocation(e.target.value)} />
    <textarea className="in" placeholder="Job Description" value={desc} onChange={(e) => setDesc(e.target.value)}></textarea>
    <br />
    <button type="submit" className="sub">Add Job</button>
  </form>
</section>

<hr />

<section>
  <h2>Available Jobs</h2>
  <h3>Available Jobs = <span>{jobs.length}</span></h3>

  <div className="jobss">
    <p>
      {jobs.map((job, index) => (
        <div key={index}>
          <article>
            <h3>{index + 1}. {job.title}</h3>
            <p><strong>Company:</strong> {job.company}</p>
            <p><strong>Location:</strong> {job.location}</p>
            <p><strong>Description:</strong> {job.desc}</p>
            <a href="#">Apply Now</a>
          </article>
          <hr />
        </div>
      ))}
    </p>
  </div>
</section>

<br />
<hr />

<section>
  <div>
    <h2>Top Searched Roles</h2>

    <table border="2" className="tb">
      <thead>
        <tr>
          <th>Company</th>
          <th>Industry</th>
          <th>Location</th>
        </tr>
      </thead>
      <tbody>
        <tr><td>Microsoft</td><td>Software</td><td>Remote</td></tr>
        <tr><td>Apple</td><td>IT Services</td><td>USA</td></tr>
        <tr><td>Mappa</td><td>Animation</td><td>Japan</td></tr>
      </tbody>
    </table>
  </div>
</section>

<br />
<hr />

<section>
  <div>
    <h2>Apply for a Job</h2>

    <form className="fr">
      <label>Name:</label><br />
      <input className="in" required placeholder="Enter your Name here" />

      <label>Email:</label><br />
      <input type="email" className="in" required placeholder="Enter your Email here" />

      <label>Select Job:</label><br />
      <select className="in">
        <option value="">Choose a job</option>
        <option>1. Full Stack Developer</option>
        <option>2. Animator</option>
        <option>3. Game Designer</option>
      </select>

      <label>Something about you that we must know</label><br />
      <textarea rows="4" cols="40" className="in"></textarea>
      <br />

      <button type="submit" className="sub">Submit</button>
    </form>
  </div>
</section>

<hr />

    </main>
  );
}

export default Main;