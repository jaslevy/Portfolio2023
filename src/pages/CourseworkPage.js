import React from 'react';
import '../styles/CourseworkPage.css';

function CourseworkPage() {
  return (
    <div className="coursework-container">
      <div className="intro-section">
        <p className="intro-text">
          Below is a list of my technical coursework from both undergraduate and
          graduate school. During my academic career, I have focused on gaining
          a strong foundation in computer science, with a particular emphasis on
          <strong> machine learning</strong> and <strong>software engineering</strong> fundamentals. I have also
          taken courses in <strong>algorithms</strong>, <strong>computer networks</strong>, <strong>computer systems</strong>, and
          <strong> databases</strong>, which have given me a solid understanding of the principles
          and concepts underlying these areas.
        </p>
      </div>

      <div className="course-categories">
        <div className="category">
          <h2 className="category-header systems">Systems & Core CS</h2>
          <div className="course-grid">
            <button style={{backgroundColor: '#364958'}} className="course-button" onClick={() => window.open('https://www.cs.princeton.edu/courses/archive/spring24/cos217/info.php', '_blank')}>Systems Programming</button>
            <button style={{backgroundColor: '#364958'}} className="course-button" onClick={() => window.open('https://course-websites.pages.dev/', '_blank')}>Advanced Programming Techniques</button>
            <button style={{backgroundColor: '#364958'}} className="course-button" onClick={() => window.open('https://cos316.princeton.systems/', '_blank')}>Computer System Design</button>
            <button style={{backgroundColor: '#364958'}} className="course-button" onClick={() => window.open('https://www.cs.princeton.edu/courses/archive/spring24/cos240/', '_blank')}>Reasoning About Computation</button>
            <button style={{backgroundColor: '#364958'}} className="course-button" onClick={() => window.open('https://www.cs.princeton.edu/courses/archive/fall24/cos226/', '_blank')}>Algorithms and Data Structures</button>
            <button style={{backgroundColor: '#364958'}} className="course-button" onClick={() => window.open('https://courses.cornell.edu/preview_course_nopop.php?catoid=60&coid=1100457', '_blank')}>Algorithms for Applications <strong>(Graduate)</strong></button>
            <button style={{backgroundColor: '#364958'}} className="course-button" onClick={() => window.open('https://classes.cornell.edu/browse/roster/FA22/class/CS/5682', '_blank')}>Human-Computer Interaction <strong>(Graduate)</strong></button>
            <button style={{backgroundColor: '#364958'}} className="course-button" onClick={() => window.open('https://web3.princeton.edu/elements-of-defi/', '_blank')}>Decentralized Finance</button>
            <button style={{backgroundColor: '#364958'}} className="course-button" onClick={() => window.open('https://www.cs.princeton.edu/courses/archive/fall23/cos350/#:~:text=The%20course%20aims%20to%20help,when%20building%20and%20deploying%20technology.', '_blank')}>Ethics of Computing</button>
          </div>
        </div>

        <div className="category">
          <h2 className="category-header math">Mathematics & Theory</h2>
          <div className="course-grid">
            <button style={{backgroundColor: '#3b6064'}} className="course-button" onClick={() => window.open('https://exams.math.princeton.edu/mat202', '_blank')}>Linear Algebra</button>
            <button style={{backgroundColor: '#3b6064'}} className="course-button" onClick={() => window.open('https://exams.math.princeton.edu/mat201', '_blank')}>Multivariable Calculus</button>
            <button style={{backgroundColor: '#3b6064'}} className="course-button" onClick={() => window.open('https://www.cs.princeton.edu/~pparedes/teaching/spring23/cos445/', '_blank')}>Economics and Computing</button>
            <button style={{backgroundColor: '#3b6064'}} className="course-button" onClick={() => window.open('https://fan.princeton.edu/fan/classes/245.html', '_blank')}>Statistics</button>
            <button style={{backgroundColor: '#3b6064'}} className="course-button" onClick={() => window.open('https://erebrova.github.io/387-syllabus.pdf', '_blank')}>Graph Theory and Networks</button>
          </div>
        </div>

        <div className="category">
          <h2 className="category-header ml">Machine Learning</h2>
          <div className="course-grid">
            <button style={{backgroundColor: '#55828b'}} className="course-button" onClick={() => window.open('https://princeton-introml.github.io/', '_blank')}>Intro to Machine Learning</button>
            <button style={{backgroundColor: '#55828b'}} className="course-button" onClick={() => window.open('https://bstewart.scholar.princeton.edu/soc306sml306-machine-learning-social-data-opportunities-and-challenges', '_blank')}>Machine Learning With Social Data</button>
            <button style={{backgroundColor: '#55828b'}} className="course-button" onClick={() => window.open('https://csml.princeton.edu/news/sml-310-research-projects-data-science-now-accepting-applications', '_blank')}>Research in Data Science</button>
            <button style={{backgroundColor: '#55828b'}} className="course-button" onClick={() => window.open('https://classes.cornell.edu/browse/roster/FA22/class/CS/5781', '_blank')}>Machine Learning Engineering <strong>(Graduate)</strong></button>
            <button style={{backgroundColor: '#55828b'}} className="course-button" onClick={() => window.open('https://classes.cornell.edu/browse/roster/SP23/class/CS/5787', '_blank')}>Deep Learning <strong>(Graduate)</strong></button>
            <button style={{backgroundColor: '#55828b'}} className="course-button" onClick={() => window.open('https://registrar.princeton.edu/course-offerings/course-details?courseid=015203&term=1242', '_blank')}>Computational Models of Cognition</button>
          </div>
        </div>

        <div className="category">
          <h2 className="category-header business">Business & Product</h2>
          <div className="course-grid">
            <button style={{backgroundColor: '#87bba2'}} className="course-button" onClick={() => window.open('https://registrar.princeton.edu/course-offerings/course-details?term=1252&courseid=012812', '_blank')}>Creating Value: Entrepreneurship</button>
            <button style={{backgroundColor: '#87bba2'}} className="course-button" onClick={() => window.open('https://registrar.princeton.edu/course-offerings/course-details?term=1252&courseid=012448', '_blank')}>Leadership Development for Business</button>
            <button style={{backgroundColor: '#87bba2'}} className="course-button" onClick={() => window.open('https://registrar.princeton.edu/course-offerings/course-details?term=1252&courseid=013922', '_blank')}>Venture Capital Finance</button>
            <button style={{backgroundColor: '#87bba2'}} className="course-button" onClick={() => window.open('https://classes.cornell.edu/browse/roster/FA23/class/TECHIE/5310', '_blank')}>Business Fundamentals <strong>(Graduate)</strong></button>
            <button style={{backgroundColor: '#87bba2'}} className="course-button" onClick={() => window.open('https://classes.cornell.edu/browse/roster/FA23/class/TECH/5900', '_blank')}>Product Studio <strong>(Graduate)</strong></button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CourseworkPage;