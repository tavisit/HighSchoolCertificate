function Details(name,detail,image,href){
    this.name = name;
    this.detail = detail;
    this.image = image;
    this.href = href;
}
var Components = [
    new Details(//-----------------------General
        "Ce se intampla aici?",
        "Acest site a fost creat ca proiect in cadrul etapei practice a atestatului la informatica.\n\nToate informatiile sunt luate de pe diferite siteuri( majoritar Wikipedia) si sunt introduse in site cu ajutorul framework-ului Node.js si limbajului de programare JavaScript. Paginile sunt generate prin cod pentru o mai buna modificare ulterioara sau mentenanta.\nPentru crearea scheletului site-ului s-a folosit HTML si CSS pentru infrumusetarea acestuia\n\nCodul sursa impreuna cu imaginile si descrierea se gasesc pe GitHub la link-ul de mai jos.",
        "./Images/github.png",
        "https://github.com/tavisit/HighSchoolCertificate"
    ),
    new Details(//-----------------------Atomi
        "Atomul",
        "Un atom este cea mai mică unitate constitutivă a materiei comune care are proprietățile unui element chimic. Orice solid, lichid, gaz și plasmă este compus din atomi neutri sau ionizați. Atomii sunt foarte mici; dimensiuni tipice sunt în jur de 100 pm (a zecea miliardime dintr-un metru).[2] Atomii nu au limite bine definite, și există diferite moduri de a defini dimensiunea, care dau fiecare valori diferite, dar apropiate ca valoare.\nConform ipotezei De Broglie, atomii sunt suficient de mici încât încercarea de a le prezice comportamentul folosind fizica clasică — de exemplu, ca și cum ar fi niște bile de biliard — dă predicții vizibil incorecte din cauza efectelor cuantice. Prin dezvoltarea fizicii, modelele atomice au încorporat principii cuantice pentru a explica și prezice mai bine acest comportament.\nFiecare atom este format dintr-un nucleu și din unul sau mai mulți electroni legați de nucleu. Nucleul este format din unul sau mai mulți protoni și, de obicei, dintr-un număr similar de neutroni. Protonii și neutronii se numesc nucleoni. Peste 99,94% din masa unui atom este concentrată în nucleu. Protonii au sarcină electrică pozitivă, electronii au sarcină electrică negativă, iar neutronii nu au sarcină electrică. Dacă numărul de protoni este egal cu cel de electroni, atunci atomul este neutru din punct de vedere electric. Dacă un atom are mai mulți sau mai puțini electroni decât protoni, atunci acesta are un o sarcină totală negativă, respectiv pozitivă, și se numește ion.\nElectronii unui atom sunt atrași de protonii din nucleul atomic de această forță electromagnetică. Protonii și neutronii din nucleu sunt atrași unul de celălalt printr-o altă forță, forța nucleară, care de obicei este mai puternică decât forța electromagnetică de respingere ce acționează între protonii încărcați pozitiv. În anumite circumstanțe, forța electromagnetică de respingere poate deveni mai puternică decât forța nucleară, și nucleonii pot fi astfel scoși din nucleu, lăsând în urmă un element diferit: dezintegrarea nucleară rezultă în transmutație nucleară.\nNumărul de protoni din nucleu definește elementul chimic căruia îi aparține atomul: de exemplu, toți atomii de cupru atomi conțin 29 de protoni. Numărul de neutroni definește izotopul elementului.[3] Numărul de electroni influențează proprietățile magnetice ale unui atom. Atomii se pot atașa de unul sau mai mulți alți atomi prin legături chimice pentru a forma compuși chimici, cum ar fi moleculele. Capacitatea atomilor de a se asocia și disocia este responsabilă pentru cele mai multe dintre modificările fizice observate în natură, și este subiectul disciplinei chimie.",
        "./Images/atom.jpg",
        "https://ro.wikipedia.org/wiki/Atom"
    ),
    new Details(//-----------------------Neutroni
        "Neutronul",
        "Neutronul este o particulă subatomică, fără nicio sarcină electrică și masă (mn=1,675·10−27kg) puțin mai mare decât cea a protonului. Protonii și neutronii constituie nucleele atomilor. Numărul neutronilor, N, ai unui atom poate fi diferit pentru nucleele atomice ale aceluiași element. Așa se formează izotopii. A fost teoretizat de Ernest Rutherford în 1920 ca fiind un dublet neutru format din proton și electron. Neutronul este simbolizat prin n.\nNeutronii se pot găsi (în mișcare) și în afara atomului. Aceștia interacționează numai cu nucleele atomice. Pătrunderea neutronilor în nuclee are loc cu o probabilitate ridicată, mai ales atunci cand energia lor cinetică este scăzută. Acest fenomen poate afecta stabilitatea atomului (activare, transformare sau stabilizare). La trecerea neutronilor prin materie sunt posibile trei tipuri de interacții: împrăștiere elastică, împrăștiere inelastică și captură neutronică. Dacă un neutron se dezintegrează, acesta se separă într-un proton, un electron și un neutrin. Ajunși, prin ciocniri succesive, la energii joase și la un grad ridicat de imprăștiere, neutronii se comportă ca un gaz molecular care difuzează.\nMaterialele care încetinesc neutronii prin ciocniri elastice, fără a-i absorbi, poartă numele de moderatori (apă, deuteriu, beriliu, parafină, grafit).",
        "./Images/neutron.jpg",
        "https://ro.wikipedia.org/wiki/Neutron"
    ),
    new Details(//-----------------------Protoni
        "Protonul",
        "Protonii (din grecescul πρῶτον = primul) sunt particule subatomice din nucleele tuturor atomilor, având masa mp = 1,673·10−27 kg și sarcina electrică pozitivă qp= e = 1,602·10−19 C. Numărul protonilor este caracteristic pentru toți atomii unui element chimic. El reprezintă numărul de sarcini nucleare Z (numărul de sarcini electrice pozitive). Numărul de protoni stabilește poziția elementului în sistemul periodic al lui Mendeleev: numărul de protoni = numărul de sarcini nucleare = numărul de ordine. Protonul este simbolizat prin p+.\nDeoarece toți protonii unui atom au sarcină pozitivă și se află toți în nucleu, apare întrebarea de ce nu se resping, fenomen fizic obișnuit la particulele cu același semn al încărcăturii electrice. Răspunsul este dat de teoria cuantică a câmpului: protonii interacționează nu numai prin forța electrostatică, dar și prin forțe nucleare tari. Acestea din urmă sunt transmise de gluoni.\nProtonii au fost descoperiți în anul 1919 de către fizicianul Ernest Rutherford.",
        "./Images/proton.jpg",
        "https://ro.wikipedia.org/wiki/Proton"
    ),
    new Details(//-----------------------Electroni
        "Electronul",
        "Electronul este o particulă subatomică fundamentală cu sarcină electrică negativă, fiind simbolizat e-. Este un tip de lepton de spin ½ care participă la interacțiunile electromagnetice, masa acestuia fiind de aproximativ 1/1836 din cea a protonului. Împreună cu nucleul atomic, electronii formează atomul. Interacțiunea lor cu nucleii adiacenți este principala cauză a legăturilor chimice, electronii de valență fiind cei care participă la formarea acestor legături.\mDescoperirea electronului ca fiind o particulă subatomică a fost făcută în 1897 de J.J. Thomson la Laboratorul Cavendish, la Universitatea Cambridge, în timp ce studia tuburile cu rază catodică. Un tub cu rază catodică este un cilindru de sticlă etanș, în care doi electrozi sunt separați în vid. Când este aplicat voltaj între electrozi, sunt generate raze catodice ceea ce face ca tubul să strălucească. Prin acest experiment, Thomson a descoperit că sarcina negativă nu putea fi separată de raze (prin aplicarea magnetismului), și că razele nu pot fi refractate de un câmp electric. El a dedus că aceste raze, mai degrabă decât unde, erau mai degrabă particule încărcate negativ, pe care le-a numit “corpusculi”(electroni). El le-a măsurat raportul masă-sarcină electrică și a descoperit că este de peste o mie de ori mai mică decât cea a unui ion de hidrogen, sugerând că fie erau foarte încărcați electric, fie aveau o masă foarte mică. Experimentele ulterioare ale altor oameni de știință au confirmat concluzia din urmă. Proporția masei sarcinii electrice a fost și la ei independentă de alegerea materialului catodului și a gazului din tubul cu vid. Acesta l-a făcut pe Thomson să realizeze că ele sunt universale printre toate celelalte materiale.",
        "./Images/electron.jpg",
        "https://ro.wikipedia.org/wiki/Electron"
    ),
    new Details(//-----------------------Quarci
        "Quarcul",
        "Quarcul este o particulă elementară care interacționează prin forța nucleară puternică și care constituie materia „grea” (numită și barionică). Ipoteza existentei quarcului a fost propusă de teoreticianul Murray Gell-Mann în 1964.\nDupă un șir lung de experiențe și descoperiri, se cunoaște în prezent că materia este formată din molecule și moleculele din atomi care definesc elementele chimice, descoperite la sfârșitul secolului al XVIII-lea de către Lavoisier. După descoperirea periodicității elementelor și tabelului lui Mendeleev în a doua jumătate a secolului al XIX-lea, s-a ajuns la începutul secolului al XX-lea la o imagine a atomilor cu un nucleu dens, punctiform și masiv în jurul căruia „oscilează” electronii.\nNucleul atomic însă s-a dovedit mai apoi a fi și el divizibil și conținînd nucleoni (protoni și neutroni).[5] La începutul anilor 1970 s-a demonstrat însă experimental că și nucleonii sunt de fapt compuși, iar componenții lor, botezați „quarcuri” (en: Quark s) de către fizicianul teoretician Murray Gell-Mann, sunt considerați a fi indivizibili, adică particule elementare ca și electronii.\n\nQuarcurile sunt particule de spin 1/2, din familia de fermioni (un fermion, doi fermioni), nume generic atribuit particulelor care au proprietatea că nu se pot găsi în aceeași stare cuantică, spre deosebire de bosoni, particule cu spin întreg sau zero (0, 1, 2, ...), care au adesea rolul de mediator sau de „transportor” de radiație ( Electric field or Force carrier) și care se pot acumula ( sau „condensa”) în aceeași stare cuantică.\nO altă caracteristică tipică a quarcurilor este sarcina electrică fracționară: +2/3 pentru u,c,t și -1/3 pentru d,s,b.",
        "./Images/quark.jpg",
        "https://ro.wikipedia.org/wiki/Quarc"
    ),
    new Details(//-----------------------Leptoni
        "Leptonul",
        "Există dovezi experimentale pentru şase tipuri diferite de leptoni, dintre care trei tipuri prezintă o sarcină electrică negativă şi trei tipuri sunt neutri din punct de vedere electric. Cei mai cunoscuţi leptoni încărcaţi electric sunt:\n\n- Electronul (e)\n- Miuonul (μ)\n- Tauonul (τ)\n\nCei trei leptoni neutri din punct de vedere electric sunt  neutrinii (ν). Asociaţi fiecărui tip de lepton încărcat electriv, există trei tipuri distincte de neutrini:\n\n- neutrinul electronic (νe)\n- neutrinul miuonic (νμ)\n- neutrinul tauonic (ντ)\n\nPentru fiecare dintre aceşti leptoni există, de asemenea, o antiparticulă asociată care are aceeaşi masă, dar o sarcină electrică opusă.\n\nElectronul este familiar pentru toată lumea. El este direct răspunzător de proprietăţile chimice pentru aproape toţi atomii. Electronul reprezintă cea mai mică particulă încărcată electric pe care o cunoaştem şi este foarte stabil. Antiparticula corespunzătoare electronului este numită pozitron şi aceasta are o masă identică cu cea a electronului, dar o sarcină electrică pozitivă. Pozitronul a fost prima particulă de antimaterie care a fost descoperită.",
        "./Images/lepton.jpg",
        "https://www.scientia.ro/fizica/atomul/6117-ce-sunt-leptonii.html"
    ),
    new Details(//-----------------------Bosoni
        "Bosonul",
        "Bosonii sunt particule elementare care au spinul întreg și satisfac statistica Bose-Einstein. Au fost denumiți după fizicianul indian Satyendra Nath Bose.\nBosonii sunt responsabili de interacțiunea nucleară slabă, numită și interacțiunea slabă, care la rândul ei este responsabilă pentru radioactivitate și care acționează asupra tuturor particulelor de materie cu spin 1/2 (de exemplu: protonii sau neutronii), dar nu acționează asupra particulelor cu spin 0, 1 sau 2 (cum sunt fotonii sau gravitonii ).\nInteracțiunea slabă nu a fost înțeleasă bine până în 1967, când Abdus Salam de la Imperial College, Londra, și Steven Weinberg de la Harvard au propus teorii care unificau această interacțiune cu forța electromagnetică, la fel cum Maxwell a unificat electricitatea cu magnetismul, cu 100 de ani înaintea lor.\nTeoria Weinberg-Salam prezintă o proprietate numită „ruperea spontană a simetriei”. Aceasta înseamnă că ceea ce la energii joase par a fi mai multe particule complet diferite, sunt de fapt același tip de particule, dar în stări diferite. La energii înalte toate aceste particule se comportă asemănător. Efectul este asemănător comportării unei bile pe roata unei rulete. La energii înalte (când roata se învârtește repede) bila se comportă într-un singur fel - ea se rotește împreună cu roata. Dar când roata își încetinește mișcarea, energia bilei scade și în cele din urmă bila cade în una din cele 37 despărțituri ale roții. Cu alte cuvinte, la energii joase extistă 37 de stări diferite în care se poate găsi bila. Dacă, pentru un motiv oarecare, s-ar putea observa bila numai la energii joase, observatorul ar putea crede că există 37 de tipuri diferite de bile.",
        "./Images/boson.jpg",
        "https://ro.wikipedia.org/wiki/Boson"
    )
]

document.getElementById("Title").innerHTML = Components[0].name;
document.getElementById("Description").innerHTML = Components[0].detail;
document.getElementById("Image").src = Components[0].image;
document.getElementById("Link").href = Components[0].href;
document.getElementById("Image").style.width = "80%";
document.getElementById("Image").style.alignContent = "center";

function WritePage(clicked_id){
    document.getElementById("Title").innerHTML = Components[clicked_id].name;
    document.getElementById("Description").innerHTML = Components[clicked_id].detail;
    document.getElementById("Image").src = Components[clicked_id].image;
    document.getElementById("Image").style.width = "80%";
    document.getElementById("Image").style.alignContent = "center";
    document.getElementById("Link").href = Components[clicked_id].href;
}