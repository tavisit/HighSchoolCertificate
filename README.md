# HighSchoolCertificate

Acest site a fost creat ca raspuns la cerinta de creare a unui site pe tematica "Atomul" pentru proba practica a atestatului de la sfarsitul clasei a 12-a, profilul matematica-informatica.<br/>
<br/>
Pentru buna functionare a siteului, este necesar framework-ul [Node.js](https://nodejs.org/en/), fiindca acesta este responsabil pentru crearea serverului si gestionarea resurselor din cadrul codului sursa. Instructiunile de instalare si folosire se regasesc pe siteul oferit mai sus, fiind necesara pornirea sa ori din consola Visual Studio Code( IDE folosit prioritar pentru crearea siteului), ori din consola windows( cmd)<br/><br/>
Codul sursa este impartit intr-un folder cu sursele .html,.css si .js si un subfolder cu imaginile folosite in prezentarea aptitudinilor informatice dobandite in 4 ani de liceu pe profilul de specialitate. <br/>
### Folderul are urmatoarele componente JavaScript:<br/>
1. main.js - Clasa JavaScript ce creeaza serverul si gestioneaza url-urile;
2. router.js - Clasa JavaScript ce filtreaza si interpreteaza resursele, cod chemat in main.js;
3. TitleSide.js - Clasa JavaScript ce asigura vizibilitate pentru bara de navigatie;
4. slideshow.js - Clasa JavaScript ce implementeaza functia de slideshow in galerie;
5. Components.js - Clasa JavaScript ce asigura generarea de continut dintr-un array de structuri ce reprezinta componentele unui atom.
<br/><br/>
### Folderul are urmatoarele componente Cascading Style Sheets( CSS):<br/>
1. categorii.css - CSS ce implementeaza structura de functionare a barii de navigatie si meniului;
2. style.css - CSS ce implementeaza structura de functionare a majoritatii elementelor din paginile HTML.
<br/><br/>
### Folderul are urmatoarele componente HyperText Markup Language( HTML):<br/>
1. home.html - Componeneta HTML in care se afiseaza informatiile principale si homePage-ul siteului
2. galery.html - Componenta HTML in care se afiseaza slideshow-ul si informatii despre marii oameni de stiinta
