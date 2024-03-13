/*
Mi a különbség a box-sizing: border-box és a content-box között?

Most be van állítva az alapbeállítás, hogy content-box, tehát, ha nem írunk semmit akkor alapból is ilyen lesz 
és még csináltunk egy .square-t, ami alapból 200*200-as és kapott egy 5px-es bordert és egy 15px-es padding-et

* {
    box-sizing: content-box;
}

.square {
    height: 200px;
    width: 200px;
    border:5px solid grey;
    padding: 15px;
}

240*240-es lett ez a square, azért mert ezeket a dolgokat, hogy padding meg border, ezeket hozzáadja 

A border-box meg a belső térből fogja levenni!!!!!!!!!!!!
Míg a content-box a paddinget és a border-t hozzáadja a szélességhez és a magassághoz, addig a border-box a belsó térből vonja el 

* {
    box-sizing: border-box;
}

Így meg valóban 200*200-as lesz, de viszont kevesebb belső térrel fogunk rendelkezni!!!!!!
***************************************************************************************************************
Milyen szövegelrendezések vannak, meg egyaltálan hogyan tudunk szöveget, rendezni? 
!!!Ezt a text-align-val tudjuk megtenni 
    - center
    - right 
    - left  
    - justify (sorkízárt, tehát faltól falig)

Grid-nél meg a flex-nél van a justify-content és align-items 
Justify-content-vel elrendezni az elemeket horizontálisan, a align-content-vel pedig vertikálisan, 
ha pedig csak egy sor van és azt szeretnénk elhelyezni vertikálisan a szűlőelemében, akkor meg a align-items kell!!!!!!!
******************************************************************************************************************
Float és a clear 
1. Float:left 

Csináltunk három div-et, amik kaptak egy class="float-left-square"-et, és beléjük van írva az elsőbe 1, a másodikba 2, a harmadikba 3
-> 
.float-left-square {
    width: 200px;
    height: 200px;
    margin: 5px;
    float: left;
    background-color: red;
    line-height: 200px;
    color: white;
    text-align: center;
}

és ezek, megkapták a float: left tulajdonságot
és, akkor böngészőben egymás mellett lesznek így, hogy 1 - 2 - 3, ha meg nem lenne it megadva a float:left tulajdonság, akkor meg 
egymás alatt lennének 

Azért float: left, mert balra lebegteti ezeket a négyzeteket 

Ugy csináltuk ezt a négyzetet, ami kapott egy width és egy height 200px-t 
hogyan tudjuk a szöveget, amik ezekben a div-ekben vannak, amik megkapták ezt a class-t középre tenni
-> 
1. line-height - ugyanakkora, mint a height, ezzel középre teszi vertikálisan 
2. text-align: center - ezzel meg horizontálisan középre teszi 

Az a probléma a float-val, ha ez meg van adva valamelyik elemnek és utána csinálunk bármilyen más elemet,
aminek már nincs megadva semmilyen float: left tulajdonság, akkor is mellette fog megjelenni 
azért fog mellette megjelenni ezek ki vannak szedve a dokumentum flow-ból, tehát a lebegtetés lényegében ezt jelenti!!!!!!!!!!!!
és emiatt baloldalon jelennek meg az alatta lévő elemek a float: left-nél, mondjuk ez a h1-es tag, amiben bele van írva valami 

    <div class="float-left-square">1</div>
    <div class="float-left-square">2</div>
    <div class="float-left-square">3</div>

    <h1>sdfgdshg</h1>

És a clear-vel meg azt szoktuk csinálni, hogy magát a tag-et dobjuk le, ezért csinálunk egy ilyen class-t, hogy clear-left
.clear-left {
    clear: left;
}

és ezt a clear-left-et megadjuk ennek ->
    <div class="float-left-square">1</div>
    <div class="float-left-square">2</div>
    <div class="float-left-square clear-left">3</div>
    <div class="float-left-square">4</div>

!!!!!!!
és az történt, hogy amelyiknek megadtuk a clear-left-et, az ledobta saját magát 
tehát ebben az esetben, ami felül van, lesz két négyzetünk egy sorban és utána még két négyzet egy sorban 

csinálunk egy class-t, ami az lesz, hogy clear: both
tehát, ha a clear: left az a float: left-nek az ellentetje, a float:left-et fogja semmisé tenni 
!!!!
akkor a clear:both az a float left-et meg a float right-ot is 
és minden elem, ami azután jön, annak a dolognak, mondjuk egy div-nek, aminek megadtuk ezt a clear: both-ot, azok bemennek egymás alá, 
mint normál esetben tennék
.clear {
    clear: both;
}

    <div class="float-left-square">1</div>
    <div class="float-left-square">2</div>
    <div class="float-left-square clear-left">3</div>
    <div class="float-left-square">4</div>

    <div class="clear"></div>

    <h1>sdafrwgsdf</h1>

Tehát, így ez a h1-es tag az bemegy a négyzetek alá, hogy normális esetben történne, viszont ha nem lenne ott a <div class="clear"></div>
akkor viszont, nem menne be, hanem bemenne a négyzetek mellé 

2. Float: right
    <div class="float-right-square">1</div>
    <div class="float-right-square">2</div>
    <div class="float-right-square">3</div>
    <div class="float-right-square">4</div>

Ezek a float-right-square-ek mindenben meg fognak css-ben egyezni a float-left-square-vel, csak annyi a különbség, hogy ezek 
float: right-ok lesznek 

Ha megnézzük, hogy hogyan helyezkednek el ezek a float-right-ba sorolt div-ek, fordított sorrendben tehát 4 - 3 - 2 - 1
és a képernyő jobb oldaláról indulnak, tehát ezek gyakorlatilag tükörképei a float-left-square-eknek!!!!!!!!

Ugyanigy, modnjuk a harmadiknak megadunk egy clear: right-ot, az lesz a class-nek a tulajdonsága, hogy clear: right 
.clear-right {
    clear: right;
}

Akkor ugyanugy le fogja dobni magától a 3-ast és így fognak kinézni 
2 1 
4 3 (és ezek ternmészetesen a képernyő jobb felén fognak elhelyezkedni)

a float-left-square pedig, ilyen, ha a harmadiknak megadjuk a clear-left dolgot, amit feljebb csináltunk 
1 2
3 4 (a képernyő bal oldalán fognak elhelyezkedni a négyzetek)

Alapvetően kettő különbség van a float-right és a float-left között 
1. hogy melyik oldalra rendezi az elemeket float-right -> a jobb oldalra 
                                           float-left -> a bal oldalra 
2. elemeknek a sorrendje, a float-right a tükörképe tehát így jönnek, majd az elemek 4 - 3 - 2 - 1
***********************************************************************************************************************************
Milyen display tulajdonságok vannak?
Nagyon sokféle van
    - block
    - flex
    - grid
    - inline 
    - inline-block
    - table
    - table-cell

Mondjuk egy ul-nek, display: block a tulajdonsága az li-nek pedig display: list-item!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
és a list-item meghatároz bizonyos tulajdonságokat 
ha átírjuk a ez első li-nek a display: list-item-et, block-ra, akkor eltűnik a pont onnan, 
azért, mert a display: list-item az, ami ezt a pöttyöt odarakja!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

De ha modjuk csinálunk egy table-t, amiben lesz egy caption(beleírt szöveg)
//////////////////////////////////////////////////////////////////////////////////////////////
In HTML, the <caption> element is used to provide a title or a brief description for a table. 
The <caption> element must be placed immediately after the opening <table> tag and before any 
<thead>, <tbody>, <tfoot>, or <tr> elements within the table. Here's a basic example

<table>
  <caption>Monthly Expenses</caption>
  <thead>
    <tr>
      <th>Category</th>
      <th>Amount</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Rent</td>
      <td>$1000</td>
    </tr>
    <tr>
      <td>Utilities</td>
      <td>$200</td>
    </tr>
    <!-- Additional rows... -->
  </tbody>
</table>
///////////////////////////////////////////////////////////////////////////////////////////////////////////////
    <table>
        <caption>This is a table!</caption>
    </table>

és akkor ha megnézzük a table-nek a tulajdonságát display: table!!!!!
és akkor még ebben vannak különböző alapbeállítások a table-nek 
table {
    display: table;
    border-collapse: seperate;
    text-indent: initial;
    border-spacing: 2px;
    border-color: grey;
}
border-collapse: seperate azt jelenti, hogy amikor belerakjuk a cellákat, akkor azok nem nőnek egybe, hanem külön vannak 
de ha ebbe a table-be teszünk tr-t meg th-kat, akkor azok is kapnak alapértelmezet értékeket 
    <table>
        <caption>This is a table!</caption>
        <tr>
            <th>fdhrhb</th>
            <th>fdhrhb</th>
            <th>fdhrhb</th>
        </tr>
    </table>

pl. a th (meg a td is) az egy table-cell lesz, a tr meg egy table-row ->
th {
    display: table-cell
    vertical-align: inherit;
    font-weigth: bold;
    text-align: internal-center;
}
tr {
    display: table-row;
    vertical-align: inherit;
    border-color: inherit;
}
Tehát, ha mondjuk div-ekből össze akarunk rakni egy tábláztot, akkor azt meg tudjuk tenni, mert a külső div-nek tudunk adni egy display: table-t
a soroknak adhatunk display: table-row-t, a th-knak meg adhatunk display: table-cell-t!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

1. Mi az a display: block 
A display: block semmi mást nem hatátoz meg, csak azt, hogy az elemek egymás alatt helyezkednek el 

Tehát, mivel a dik-ek alapból kapnak dsiplay: block-ot!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    <div>1</div>
    <div>2</div>
    <div>3</div>
    <div>4</div>
tehát ezek egymás alatt fognak, majd elhelyezkedni -> 
1
2
3
4

Nézzük meg ugyanezt span-ekkel
A span-ek 
    <span>1</span>
    <span>2</span>
    <span>3</span>
    <span>4</span>
A span-ek egymás mellett helyezkednek el -> 1234

Miért vannak a span-ek egymás mellett -> 
Mert a span-ek nem rendelkeznek semmilyen alaptulajdonsággal!!!!!!!!!!!
és ha rámegyünk a böngészőben a span-re, lesz egy olyan, hogy styles és ott csak azt fogja mutatni, hogy 
* {
    box-sizing: border-box;
}
ezt is csak azért mutatja, mert minden elemnek ezt beállítottuk, amugy nem mutat semmit 
Tehát ez specifikusan a span-re lett kihegyezve, hanem ez az összes elemnek a tulajdonsága 
a span nem rendelkezik semmilyen display tulajdonsággal, azért mert ez egy karakter szítű elem!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
olyan, mint (i) italic 
és az italic sem rendelkezik display tulajdonsággal, viszont font-style-val meg igen
i {
    font-style: italic;
}
Tehát, azért nincsen a karakter színtű elemeknek display tulajdonsága, mert ezek arra jók, hogy sorfolytonosan egy szövegben 
valahogy megjelenjenek!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
pl. ugy, hogy az (i) az font-style: italic 
a bold
b {
    font-weigth: bold;
}
Tehát semmilyen sortörésre nincsen szükség ezeknél!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
és arra sincsen, szükség, hogy semmilyen sortörésre, nincsen szükség, mint pl. az inline-nál!!!!!!!

Mi van, ha ezeknek a span-eknek megadunk egy olyan class-t, hogy block, ami display: block lesz
    <span class="block">1</span>
    <span class="block">2</span>
    <span class="block">3</span>
    <span class="block">4</span>
    <i class="block">Italic</i>
    <b class="block">sdgsdg</b>

.block {
    display: block;
}
Akkor már ezek az elemek egymás alatt fognak elhelyezkedni 
de, ha mondjuk megkapna egy display: list-item-et akkor egymás alatt helyezkedne el pöttyökkel 
csak ha pöttyöket látni szeretnénk, akkor kell egy margin-left: 15px, mert amugy az ott van csak nem látszik
vagy ugyanerre jó a list-style-position: inside; is !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

Amugy meg az ul-nek (amibe beletsszük az li-ket) van egy margin-block-start: 1em;
ezért ott automatikusan láthatóak!!!!!!!!!!!!!!!!!!!!!!!!!!!!
ul {
    display: block;
    list-style-type: disc;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    padding-inline-start: 40px;
}
margin-block-start: 1em
Ugye az 1em az a szűlőelem betűméretének az 1-szerese, 16 az alapértelmezett, ezért ez 16px lesz 
És mivel az ul-nek a margin-block-start-ja meg a padding-ve arrébbrakja a listaelemeket (li) ezért látszanak ezek a pöttyök!!!!!!
***************************************************************************************************************************************
display: inline 
A display: inline egymás mellé rendezi az elemeket és 
ezeknek a tageknek nem adhatóak meg a width és a height tulajdonságok!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
Tehát, pont fordítotja a display: block-nak (csak itt nincs height meg width!!!!)

Csinálunk három div-et, ami alapból display: block, megadunk neki egy class="inline"-t ami display: inline lesz 
    <div class="inline">1</div>
    <div class="inline">2</div>
    <div class="inline">3</div>

Tehát ezek alapból egymás alatt helyezkednek el, de ha megadjuk ezt a inline nevű class-t, ami display: inline
akkor bemennek egymás mellé egy sorba 
.inline {
    display: inline;
    width: 100px;
    height: 30px;
    background-color: red;
}
itt hiába adtuk meg neki a width-et meg a height-ot, nem lesz jó, látszik a background-color:red - ből, hogy nem 30 meg 100px
A display: inline az valójában azért van, hogy azok az elemek, amiknek alapértelmezetten van egy display tulajdonséga, mondjuk hogy 
block, inline-block vagy grid, ezt ki lehesen küszöbölni ugy, hogy sorfolytonossan lehessen bele írni 
Tehát ez lényegében karakter színtű elemet tud csinálni a bekezdés színtű elemekből!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

A bekezdés színtű elemek, mint pl. a div vagy a paragrafus vagy a footer, nav, az összes olyanra mint a div ->
ezek arra valók, hogy tördeljék a sorokat és bekezdéseket rakjunk beléjük, tehét mondjuk szövegeket pl. a paragrafus 
de ha ezt viszont át akarjuk váltani karakter színtűvé, mint pl. az italic vagy a span, akkor azt mondjuk, hogy display: inline 
és akkor sorfolytonosan tudunk bele írni, viszont ilyenkor nem tudunk meghatározni szélességet és magasságot!!!!
de display: inline-block!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
*****************************************************************************************************************************************
display: inline-block
A display: inline-block az ugyanaz, mint a display: inline, csak 
meg tudunk neki határozni szélességet és magasságot!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

Tehát, ha ugyanugy van három div-ünk, csak az most egy olyan class-t fog kapni, hogy inline-block, ami display: inline-block
    <div class="inline-block">1</div>
    <div class="inline-block">2</div>
    <div class="inline-block">3</div>

.inline-block {
    display: inline-block;
    width: 100px;
    height: 30px;
    background-color: red;
    text-align: center;
    line-height: 30px;
    color: white;
}

Ez az inline-block class megkapta teljesen ugyanazokat a tulajdonságokat, mint az inline (display: inline-block!!)
csak itt már érvényesek a width és a height!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

Rengeteg fajta display van, nem kell az összeset megjegyezni, de eléggé logikus, hogy hogyan müködnek 
van három legalapvetőbb a block, inline, inline-block 

Viszont table a display tulajdonsága a table, table-row-nak a table-row, a th-nak pedig a table-cell, mert ez egy táblázat cella 
li tagnek list-item és úgy is müködnek, ahogy az ember elvárná tölük 

a flex-et meg a grid-et majd késöbb vesszük
*******************************************************************************************************************************************
Poziciók!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
1. Static
A static az alapértékmezett pozició. Nem müködnek nála a 
left, right, top, bottom tulajdonságok
Pontosan, azért mert ez statikus 
Csinékunk egy static square-t div-et -> <div class="static-square"></div>
.static-square {
    width: 200px;
    height: 200px;
    background-color: aqua;
    position: static;
    left: 200px;
}
Igazából erre, hogy position: static, erre nem is lenne szükség, mert ez az alapértelmezett, tehát ez mindig be van állítva 
!!!!!!!!!!!!!!!!!!!!!!!!
A left: 200px-re meg azt várnánk, hogy jobbra megy 200px-t a legközelebbi elemtől 
de ez itt nem fog müködni!!!!, mert hogy ez az egész egy position:static 
és akkor böngésző styles-ban is ki van húzva ez a tulajdonság és azt írja, hogy static property prevents left from having an effect 
Try setting position to something other than static

Tehát az összes többi az engedi ezeket a top, left, right, bottom-öket, csak a static nem 
******************************************************************************************************************************************
2. Relative 
A relative engedélyezi a left, right, top, bottom tulajdonságok érvényesítését 

Csináltunk egy class="relative-square" div-et -> <div class="relative-square"></div>
az majdnem ugyanaz lesz, mint a static-square, csak kap egy másik színt meg ugye a position: relative!!!!!!
.relative-square {
    width: 200px;
    height: 200px;
    background-color: khaki;
    position: relative;
    left: 50px;
    margin: 5px;
}
És akkor itt a left: 50px müködik, tehát a képernyő bal oldalától eltávolodik 50px-t

Csináltunk még egy class="relative-square" div-et és ccs-ben bálítottunk egy margin: 5px-t, hogy kicsit eltávolodjanak egymástól 
<div class="relative-square"></div>
<div class="relative-square"></div>

Látható, hogy ezek egymás alatt helyezkednek el, tehát a display: block tulajdonság az érvényes még !!!!!!
viszont mindegyik elment jobbra 55px-t  a left: 50px miatt meg a margin: 5px is hozzáadodik 
de ha csak azt akarjuk hogy alul és felül legyen margin és ne adodjon hozzá, csak 50px-t menjen el jobbra, akkor 
margin: 5px 0;
*************************************************************************************************************************************
3. absolute 
Mi az absolute -> 
Az absolute is engedélyezi a left, rigth, top, bottom tulajdonságokat, de ő egy abszolút pozociót határoz meg, 
és nem veszi figyelembe a többi elem helyzetét!!!!!

Csináltunk két class="absolute-square" div-et 
<div class="absolute-square" style="background-color: blue"></div>
<div class="absolute-square" style="background-color: crimson"></div>

.relative-square {
    width: 200px;
    height: 200px;
    position: absolute;
    left: 200px;
    margin: 5px 0;
}
Azért a div-ben határoztuk meg style-val background.color-t, hogy más színűek legyenek 
Hol van az egyik és hol van a másik?
Csak a crimson színűt látjuk, mert a blue az alatta van!!!!!!!, hiszen abszolut pozioót vesznek fel 
ezért vannak egymáson
Ezek egymás tetején vannak, az absolute pozició azt jelenti, hogy van itt nekünk egy window!!!!!!!!!!!!!!!!!!!!!!!!!!!!
window -> a látható képernyő a böngészön 
és ha mondjuk azt mondjuk az absolute pozicióra, hogy top: 50px meg right: 40px, akkor az valahol a látható képernyő jobb felső sarkában lesz 
Tökmindegym hogy hozzá képest hol helyezkedik el a többi elem 
de ezt demonstáljuk is ugy, hogy a crimson színűnek style-ban megadjuk -> 
<div class="absolute-square" style="background-color: crimson; left: 80px"></div>
-> 
akkor így már kátható lesz, hogy ezt a crimson színűt egy kicsit kitolzuk még jobbra (nem left: 50px hanem 80px) és 
így már látható a másik square is (legalábbis az a 30px belőle, amivel eltoltuk a crimson)
de mindig a crimson lesz felül, mert a html-ben azt csináltuk meg késöbb!!!!!!!

Csináltunk egy div-et class="fully-absolute square" és ezt teljesen abszolut módon fogjuk meghatározni ezt a sqaure-t 
<div class="fully-absolute-square"></div>

.fully-absolute-square {
    width: 200px;
    height: 200px;
    position: absolute;
    left: 500px;
    top: 150px;
    background-color: darkgoldenrod;
}

és akkor ez legfelül lesz, szóval mégsem a windows látható képernyőfelülethez fog viszonyítani, hanem teljesen a dokument 
tetejéhez!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
és akkor ez mindig itt lesz, ha lejebb húzzuk, akkor sem fog megjelenni 
de, ha mondjuk a top nem 150px hanem 900px, akkor meg akkor nem fogjuk látni ha teljesen felül vagyunk, mert nagyobb a top 900px
mint a képernyő látható heigth-ja!!!!!

Tehát itt az a nagyon fontos, hogy nem veszi figyelembe a többi elemet, mint pl. a relative-square!!!!!

Ami itt még érdekes, ez müködik a fixed-nél, relative-nál meg az absolute-nál is, kivéve a static-nél!!!!!
ha azt mondjuk, hogy felül most a crimson színű van, de ha azt mondjuk a kéknek, hogy z-index: 1 (vagy lehet több is, az a lényeg, hogy 0 van alul)
->
    <div class="absolute-square" style="background-color: blue; z-index: 1;"></div>
    <div class="absolute-square" style="background-color: crimson; left: 80px"></div>

Akkor a z-tengelyen fogja mozgatni és most már a blue lesz felül 
Mit jelent, hogy a z-tengelyen fogja mozgatni 
van az x-tengely a horizontális, az y-tengely a vertikális és van a z-tengely, ami pedig kiféle a harmadik dimenzió (mélység)

És itt a z-index egy egész szám, ami azt határozza meg, hogy hanyadik a z-tengelyen a sorrendben, tehát, hogy melyik van előlrébb 
meg hátrébb, de ez lehet negativ szám is, ha pl. azt mondjuk a blue-nak, hogy a z-index az nem 1 lesz, hanem -1, akkor megint a crimson 
színű lesz feljebb!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

    <div class="absolute-square" style="background-color: blue; z-index: -1;"></div>
    <div class="absolute-square" style="background-color: crimson; left: 80px; z-index: -2"></div>

de ha meg a blue-nak lesz a z-indexe -1, a crimson-nak meg -2, akkor megint a blue lesz feljebb 
az a lényeg, hogy amelyik a nagyobb számot kapja az lesz feljebb
*********************************************************************************************************************************************
4. Fixed
Nem a teljes dokumentumot fogja figyelembe venni, ugy mint az absolute, ami ugy határozza meg a saját pozióját, hogy a teljes dokumentumot 
veszi figyelembe, ezért tudjuk neki az mondani, hogy menjen le 2000px-re 
A fixed viszont csak azt a képernyőt fogja nekünk figyelembe venni, ami látható és ezen belül tud mozogni, ha az ablak mondjuk 
800px magas és 1500px széles 

Csinálunk egy div-et class="fixed-square" -> <div class="fixed-square"></div>

.fixed-square {
    width: 200px;
    height: 200px;
    position: fixed;
    left: 500px;
    top: 150px;
    background-color: firebrick;
}

Akkor eleinte ugyanott fognak elhelyezkedni, mint az absolute-square, mert ugyanaz a left meg a top van megadva, de!!!!!!!!!
de mivel, ha legörgetünk, akkor ez a fixed az jön, mindig a láthatő képernyőtől lesz jobbra 500px-re meg lejebb 150px-re 
nem úgy, mint az absolute, ami dokumentum tetejétől lesz lejjebb 150px-re, ezért ha lejjebb görgetünk az ott marad 
és nem fog látszodni, a fixed-square meg igen!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!4

Tehát a fixed-nél ha mozog az ablak, amihez viszonyítja magát, ezért ő is lejebb fog jönni vagy feljebb!!!

Nagyon hasonlít a position fixed meg az absolute, csak annyi a különbség a kettő között, hogy az absolute az a teljes
dokumentum szélességet és magasságot tudhatja magáénak, viszont a fixed pedig csak a látható ablak, képernyő szélességét és 
magasságát 
és ezért mondjuk fixed poziciónak, mert mindig ugyanott marad, mintha ráragadt volna valami az ablakra, szélvédőre
az mindig ott marad!!!!!!
*************************************************************************************************************************************
5. Sticky
A relative-nak meg a fixed-nek a keveréke!!!
Csináltunk egy div-et class="sticky-square" -> <div class="sticky-square"></div>

.sticky-square {
    width: 200px;
    height: 200px;
    position: sticky;
    left: 150px;
    top: 150px;
    background-color: goldenrod;
}

A sticky alapból egy position: relative, tehát müködik nála a left meg a top is, viszont amint elérjük azt a magasságot, amit itt 
top-nak adunk meg (ami teteje és a böngésző teteje között van), annyi távolság, amit mi ide beírtunk, tehát 150px, akkor ő elkezd
fixed-ként müködni!!!!!!!!

Tehát azért stick, mert ha lejövünk, akkor odaragad, úgyanugy, mint a fixed ilyenkor már 







*/