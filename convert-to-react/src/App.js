import React, { useState } from 'react';
import './App.css'; // Importera externa stilar

function App() {
  const [menuVisible, setMenuVisible] = useState(false);
  const [currentSection, setCurrentSection] = useState('home');

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  const hideMenu = () => {
    setMenuVisible(false);
  };

  const showSection = (sectionId, event) => {
    event.preventDefault();
    console.log(`Showing section: ${sectionId}`);
    setCurrentSection(sectionId);
    hideMenu(); // Dölj menyn när en länk klickas på
  };

  return (
    <div className="App">
      <header>
        <h1>BlueCrowns edu Frontend Dev</h1>
        <nav>
          <button className={`hamburger ${menuVisible ? 'show' : ''}`} onClick={toggleMenu}>
            ☰
          </button>
          <ul className={`nav-links ${menuVisible ? 'show' : ''}`}>
            <li>
              <a href="#home" onClick={(e) => showSection('home', e)}>
                Home
              </a>
            </li>
            <li>
              <a href="#about" onClick={(e) => showSection('about', e)}>
                About
              </a>
            </li>
            <li>
              <a href="#contact" onClick={(e) => showSection('contact', e)}>
                Contact
              </a>
            </li>
            <li>
              <a href="#mindmap" onClick={(e) => showSection('mindmap', e)}>
                Mind Map
              </a>
            </li>
          </ul>
        </nav>
      </header>

      <main>
        {currentSection === 'home' && (
          <section id="home">
            <h2>Home Section</h2>
            <div>
              <p>This is the home section content.</p>
            </div>
          </section>
        )}

        {currentSection === 'about' && (
          <section id="about">
            <h2>About Section</h2>
            <div>
              <article>
                <h3>Article Title 1</h3>
                <p>Content for Article 1.</p>
              </article>
              <article>
                <h3>Article Title 2</h3>
                <p>Content for Article 2.</p>
              </article>
            </div>
          </section>
        )}

        {currentSection === 'contact' && (
          <section id="contact">
            <h2>Contact Section</h2>
            <div>
              <article>
                <h3>Article Title 3</h3>
                <p>Content for Article 3.</p>
              </article>
              <article>
                <h3>Article Title 4</h3>
                <p>Content for Article 4.</p>
              </article>
            </div>
          </section>
        )}

        {currentSection === 'mindmap' && (
          <section id="mindmap">
            <h2>Mind Map Section</h2>
            <div>
              <article>
                <h3>Day-01</h3>
                <h3>Perseverance Project_Morning Habits</h3>
                <p>Step1. 3 minute visualization</p>
                <p> 1. I look at myself spending today’s schedule in the most ideal way.</p>
                <p> 2. Think about what you would ideally achieve today.</p>
                <p> 3. I picture myself waking up and going to sleep in the best mood today.</p>
                <p> 4. Please record the content and feelings that come to mind </p>
                <p>  while visualizing in a notebook and verify them in the feed.</p>
              </article>

              <article>
                <h3>Day-02</h3>
                <p>Content for Article</p>
                <p>Step2. 3 minute affirmations</p>
                <p>1. A fun and exciting day has begun today.</p>
                <p>2. I ___________ is a person who does it once.</p>
                <p>3. Today I will practice my morning secret routine for 20 minutes.</p>
                <p>4. I will also successfully achieve my goal _________________________________.</p>
              </article>
            </div>
          </section>
        )}
      </main>

      <footer>
        <p>© 2023 BlueCrowns Application </p>
      </footer>
    </div>
  );
}

export default App;







// import React, { useState } from 'react';
// import './App.css'; // Importera externa stilar

// function App() {
//   const [menuVisible, setMenuVisible] = useState(false);
//   const [currentSection, setCurrentSection] = useState('home'); // Lägg till en state för att hålla reda på nuvarande sektion

//   const toggleMenu = () => {
//     setMenuVisible(!menuVisible);
//   };

//   const hideMenu = () => {
//     setMenuVisible(false);
//   };

//   const showSection = (sectionId, event) => {
//     event.preventDefault();
//     console.log(`Showing section: ${sectionId}`);
//     setCurrentSection(sectionId); // Uppdatera nuvarande sektion när en länk klickas på
//   };

//   return (
//     <div className="App">
//       <header>
//         <h1>BlueCrowns edu Frontend Dev</h1>
//         <nav>
//         <button className={`hamburger ${menuVisible ? 'show' : ''}`} onClick={toggleMenu}>
//           ☰
//         </button>
//           <ul className={`nav-links ${menuVisible ? 'show' : ''}`}>
//             <li>
//               <a href="#home" onClick={(e) => showSection('home', e)}>
//                 Home
//               </a>
//             </li>
//             <li>
//               <a href="#about" onClick={(e) => showSection('about', e)}>
//                 About
//               </a>
//             </li>
//             <li>
//               <a href="#contact" onClick={(e) => showSection('contact', e)}>
//                 Contact
//               </a>
//             </li>
//             <li>
//               <a href="#mindmap" onClick={(e) => showSection('mindmap', e)}>
//                 Mind Map
//               </a>
//             </li>
//           </ul>
//         </nav>
//       </header>

//       <main>
//         {/* Dynamiskt visa innehåll baserat på nuvarande sektion */}
//         {currentSection === 'home' && (
//           <section id="home">
//             <h2>Home Section</h2>
//             <div>
//               <p>This is the home section content.</p>
//             </div>
//           </section>
//         )}
//         {currentSection === 'about' && (
//           <section id="about">
//             <h2>About Section</h2>
//             <div>
//               <article>
//                 <h3>Article Title 1</h3>
//                 <p>Content for Article 1.</p>
//               </article>
//               <article>
//                 <h3>Article Title 2</h3>
//                 <p>Content for Article 2.</p>
//               </article>
//             </div>
//           </section>
//         )}
//         {currentSection === 'contact' && (
//           <section id="contact">
//             <h2>Contact Section</h2>
//             <div>
//               <article>
//                 <h3>Article Title 3</h3>
//                 <p>Content for Article 3.</p>
//               </article>
//               <article>
//                 <h3>Article Title 4</h3>
//                 <p>Content for Article 4.</p>
//               </article>
//             </div>
//           </section>
//         )}
//         {currentSection === 'mindmap' && (
//           <section id="mindmap">
//             <h2>Mind Map Section</h2>
//             <div>
//               <article>
//                 <h3>Day-01</h3>
//                 <h3>Perseverance Project_Morning Habits</h3>
//                 <p>Step1. 3 minute visualization</p>
//            
//               </article>
//               <article>
//                 <h3>Day-02</h3>
//                 <p>Content for Article</p>
//               </article>
//             </div>
//           </section>
//         )}
//       </main>

//       <footer>
//         <p>© 2023 BlueCrowns Application </p>
//       </footer>
//     </div>
//   );
// }

// export default App;
