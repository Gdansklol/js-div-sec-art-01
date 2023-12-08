### style.css gå igenomgång

1. display: none; är motsatsen till display: block;. När du sätter display: none; på ett element i CSS, göms elementet helt och hållet från visningen på webbsidan. Det tar ingen plats i layouten, och det påverkar inte andra element runt omkring det.

Här är en kort jämförelse:

display: block;:

Elementet visas som ett blockelement.
Tar upp hela bredden tillgänglig i sitt överordnade element och börjar på en ny rad.
Andra element placeras på nya rader efter det.
display: none;:

Elementet göms helt och syns inte på webbsidan.
Det tar ingen plats i layouten, och andra element beter sig som om det inte existerar.
Denna egenskap (display: none;) är användbar när du vill gömma eller visa element dynamiskt med hjälp av JavaScript eller när du vill tillfälligt dölja element med hjälp av CSS.

2. a {
    color: #fff;
    text-decoration: none; /* Remove default underline from links */
}

3. @media only screen and (max-width: 768px) {

Öppnar media query för skärmar med en maxbredd av 768 pixlar.
nav ul {

Öppnar regeln för att stilisera <ul> inuti <nav>.
display: none;

Döljer standardvisningen av navigeringslänkarna (<ul>) i mobilvisning genom att sätta display: none;.
flex-direction: column;

Ändrar riktningen på flexbox-container (<ul>) till en kolumnlayout för att stapla länkarna vertikalt.
position: absolute;

Sätter positioneringen till absolut, vilket innebär att elementet positioneras relativt till dess närmaste icke-statiska förälderelement.
top: 60px;

Anger avståndet från toppen för den absoluta positionen, justeras efter behov.
left: 0;

Placerar elementet helt till vänster i sitt förälderelement.
width: 100%;

Sätter bredden till 100% för att täcka hela bredden av förälderelementet.
background-color: #333;

Ger en mörk bakgrundsfärg.
}

Stänger regeln för <ul> inuti media query.
nav li {

Öppnar regeln för att stilisera <li> inuti <nav>.
margin: 0;

Tar bort eventuella marginaler runt varje listelement.
text-align: center;

Centrerar texten horisontellt inuti varje listelement.
}

Stänger regeln för <li> inuti media query.
.hamburger {

Öppnar regeln för att stilisera element med klassen .hamburger.
display: block;

Visar hamburgerikonen genom att sätta display: block; i mobilvisning.
}

Stänger regeln för .hamburger.
.nav-links.show {

Öppnar regeln för att stilisera element med klassen .nav-links när de har klassen .show.
display: flex;

Visar navigeringslänkarna genom att sätta display: flex; när klassen .show är närvarande.
}

Stänger regeln för .nav-links.show.
}

Stänger media query.
