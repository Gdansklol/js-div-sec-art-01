## review 

- div, avsnitt och artikel är alla HTML-element som används för att strukturera och organisera innehåll på en webbsida. Men de tjänar olika syften och har olika semantiska betydelser:

1. <div> (Division):

Elementet <div> är en generisk behållare som används för att gruppera innehåll och tillämpa stilar eller skript.
Det har ingen specifik semantisk betydelse och används ofta för layoutändamål.
Det är ett mångsidigt element och används ofta för att skapa uppdelningar eller sektioner på en sida.

```bash
<div>
    <p>This is some content inside a div.</p>
</div>

```

2. <section>:

Elementet <section> representerar en tematisk gruppering av innehåll och används ofta för att dela upp ett dokument i olika avsnitt.
Det hjälper till att organisera innehåll baserat på dess tema eller ämne, vilket ger en mer meningsfull struktur på sidan.
Det kan innehålla rubriker, stycken och annat innehåll relaterat till ett specifikt ämne.

```bash
<section>
    <h2>Section Heading</h2>
    <p>This is content within a section.</p>
</section>

```

3. <artikel>:

Elementet <artikel> representerar en fristående del av innehåll som kan distribueras och återanvändas oberoende.
Det används vanligtvis för artiklar, blogginlägg, foruminlägg, nyheter, etc.
Det bör vara vettigt på egen hand och är avsett att syndikeras eller distribueras.

```bash
<article>
    <h2>Article Title</h2>
    <p>This is the content of the article.</p>
</article>

```

- Sammanfattningsvis, medan <div> är en generisk behållare, används <section> för tematisk gruppering av innehåll och <article> används för fristående, distribuerbart innehåll som artiklar eller blogginlägg. Valet av lämpligt element beror på den semantiska betydelsen du vill förmedla och strukturen på ditt innehåll. Det rekommenderas att använda HTML-element som bäst beskriver syftet med ditt innehåll för bättre tillgänglighet och sökmotoroptimering.


##  bryta ner js koden för steg för steg

### function toggleMenu() steg för steg:
 

javascript

```bash
function toggleMenu() {
    document.querySelector('.nav-links').classList.toggle('show');
}
```

html
```bash
 <nav>
            <!-- Add a button for the hamburger icon with inline onclick event -->
            <button class="hamburger" onclick="toggleMenu()">☰</button>
            <ul class="nav-links">
                <!-- Updated links to point directly to the corresponding sections -->
                <li><a href="#home" onclick="showSection('home')">Home</a></li>
                <li><a href="#about" onclick="showSection('about')">About</a></li>
                <li><a href="#contact" onclick="showSection('contact')">Contact</a></li>
                <li><a href="#mindmap" onclick="showSection('mindmap')">Mind Map</a></li>

            </ul>
        </nav>
```

`document`
document representerar hela HTML-dokumentet i JavaScript. Det ger ett gränssnitt för att interagera med elementen på webbsidan.

`querySelector('.nav-links')`
querySelector är en metod som används på document för att välja det första elementet som matchar ett specifikt CSS-urval. Här används det för att välja det första elementet med klassen nav-links.

.classList
classList är ett objekt som representerar klasserna för ett element. Metoder som toggle och add används för att ändra klasserna.

.toggle('show')
toggle är en metod som används på classList för att byta (lägg till eller ta bort) en specifik klass på ett element. Här används det för att byta klassen 'show' på elementet med klassen nav-links.
Så sammanfattningsvis:

`document.querySelector('.nav-links')` väljer det första elementet med klassen nav-links.
classList.toggle('show') byter klassen 'show' på det valda elementet. Om klassen finns, tas den bort; om den inte finns, läggs den till.

Denna kod används för att hantera synligheten av navigationslänkarna när hamburgerikonen klickas på. Genom att använda classList.toggle('show') kan du enkelt växla mellan att visa och dölja navigationslänkarna genom att lägga till eller ta bort klassen 'show'.


### function showSection(sectionId){ }


- document.querySelectorAll('main section')
document.querySelectorAll('main section') väljer alla <section>-element som är barn till <main>-elementet. Detta returnerar en nodelist av sektionselement.

.forEach(section => { section.style.display = 'none'; })
.forEach används för att iterera över varje sektion i nodelist.
section.style.display = 'none'; sätter display: none; på varje sektion, vilket gömmer dem.

document.getElementById(sectionId)
document.getElementById(sectionId) väljer elementet med det unika id som motsvarar det angivna sectionId.
if (selectedSection) { selectedSection.style.display = 'block'; }
if (selectedSection) kontrollerar om det valda sektionselementet faktiskt existerar.
Om det gör det, selectedSection.style.display = 'block'; sätter display: block; på det valda sektionselementet, vilket gör det synligt.
Sammanfattningsvis:

Alla sektioner göms genom att sätta deras display till 'none'.
Den valda sektionen visas genom att sätta dess display till 'block'.
Den här funktionen används för att visa en specifik sektion med innehåll medan alla andra sektioner göms. Det är användbart när du vill byta mellan olika delar av din webbsida beroende på användarinteraktion.



