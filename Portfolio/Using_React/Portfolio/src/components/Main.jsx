import React from "react";

function Main() {
  return (
    <main>

      <section>
        <hr></hr>
        <h2>Use links to connect to me</h2>

        <a href="https://leetcode.com/u/japsaini0/">LeetCode</a> {" | "}
        <a href="https://github.com/japsaini0">Github</a>
      </section>

      <hr />

      <section>
        <h2>Projects</h2>

        <h3>LDR Security System</h3>

        <p>
          Built a security system using a Light Dependent Resistor (LDR)
          that detects changes in light intensity. When the light beam
          is interrupted, the system triggers an alarm to indicate
          possible intrusion.
        </p>

        <ul>
          <li>Components Used: LDR, Buzzer, Arduino</li>
          <li>Purpose: Intruder detection</li>
          <li>Working: Alarm activates when light beam is blocked</li>
        </ul>
      </section>

      <hr />

      <section>
        <h2>Education</h2>

        <table border="1">
          <thead>
            <tr>
              <th>Degree</th>
              <th>Specialisation</th>
              <th>Year</th>
              <th>Institute</th>
              <th>Grades</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>BE</td>
              <td>CSE</td>
              <td>2028</td>
              <td>Chandigarh University</td>
              <td>8.27</td>
            </tr>

            <tr>
              <td>12th</td>
              <td>Non - Medical</td>
              <td>2024</td>
              <td>GSSS Chhina Bet</td>
              <td>90.4%</td>
            </tr>

            <tr>
              <td>10th</td>
              <td>General</td>
              <td>2022</td>
              <td>Akal Academy Tibber</td>
              <td>89%</td>
            </tr>
          </tbody>
        </table>
      </section>

      <hr />

      <section>
        <h2>Technical Skills</h2>

        <ul>
          <li>C/C++</li>
          <li>Python</li>
          <li>SQL</li>
          <li>DSA</li>
          <li>Java</li>
        </ul>
      </section>

      <hr />

      <section>
        <h2>Contact Form</h2>

        <form>
          <input type="text" placeholder="Enter name" />
          <br />

          <input type="email" placeholder="Enter email" />
          <br />

          <button type="submit">Submit</button>
        </form>
      </section>

    </main>
  );
}

export default Main;