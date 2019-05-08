# HighSchoolCertificate
Numele meu este Matei Octavian Mihai, elev la CN Carol I, Craiova Dolj, coordonator de proiect Niculescu Florin.<br/>
Acest site a fost creat ca raspuns la cerinta de creare a unui site pe tematica "Atomul" pentru proba practica a atestatului de la sfarsitul clasei a 12-a, profilul matematica-informatica.<br/>
<br/>
Pentru buna functionare a siteului, este necesar framework-ul [Node.js](https://nodejs.org/en/), fiindca acesta este responsabil pentru crearea serverului si gestionarea resurselor din cadrul codului sursa. Instructiunile de instalare si folosire se regasesc pe siteul oferit mai sus, fiind necesara pornirea sa ori din consola Visual Studio Code( IDE folosit prioritar pentru crearea siteului), ori din consola windows( cmd) .<br/>
Pentru un user-friendly environment am creat executabilul Start.exe, program ce detecteaza existenta framework-ului Node.js si in caz pozitiv, porneste automat serverul si site-ul intr-un window chrome. In caz contrar, se va pornit instalarea automat folosind setupul node din folder si dupa terminarea acestuia, se va proceda ca pe ramura pozitiva<br/><br/>
Codul sursa este impartit in sursele C++, setup-ul "node", README si aplicatiile Start si Server, iar sursele HTML,CSS, JS si .JPG sunt intr-un folder cu sursele .html,.css si .js si un subfolder cu imaginile folosite in prezentarea aptitudinilor informatice dobandite in 4 ani de liceu pe profilul de specialitate. <br/>
### Folderul Resourses are urmatoarele componente JavaScript:<br/>
1. main.js - Clasa JavaScript ce creeaza serverul si gestioneaza url-urile;
2. router.js - Clasa JavaScript ce filtreaza si interpreteaza resursele, cod chemat in main.js;
3. TitleSide.js - Clasa JavaScript ce asigura vizibilitate pentru bara de navigatie;
4. slideshow.js - Clasa JavaScript ce implementeaza functia de slideshow in galerie;
5. Components.js - Clasa JavaScript ce asigura generarea de continut dintr-un array de structuri ce reprezinta componentele unui atom.
<br/><br/>
### Folderul Resourses are urmatoarele componente Cascading Style Sheets( CSS):<br/>
1. categorii.css - CSS ce implementeaza structura de functionare a barii de navigatie si meniului;
2. style.css - CSS ce implementeaza structura de functionare a majoritatii elementelor din paginile HTML.
<br/><br/>
### Folderul Resourses are urmatoarele componente HyperText Markup Language( HTML):<br/>
1. home.html - Componeneta HTML in care se afiseaza informatiile principale si homePage-ul siteului
2. galery.html - Componenta HTML in care se afiseaza slideshow-ul si informatii despre marii oameni de stiinta
