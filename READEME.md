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