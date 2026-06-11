const PLACE_SETS = {
  classic: {
    label: "Klasyczne miejsca",
    places: [
      "lotnisko", "szpital", "restauracja", "komisariat", "plaża miejska",
      "kino", "teatr", "hotel", "bank", "sklep spożywczy",
      "muzeum", "biblioteka", "dworzec kolejowy", "autobus", "pociąg",
      "statek", "samolot", "stadion", "siłownia", "basen",
      "fryzjer", "poczta", "apteka", "zoo", "park",
      "kawiarnia", "stacja benzynowa", "centrum handlowe", "kościół", "cmentarz",
      "wesele", "targ", "gabinet dentystyczny", "warsztat samochodowy", "restauracja fast food",
      "lodziarnia", "kwiaciarnia", "pralnia", "piekarnia", "sklep zoologiczny",
      "salon kosmetyczny", "przychodnia", "poczekalnia", "myjnia samochodowa", "sklep odzieżowy",
      "sklep z elektroniką", "kiosk", "bankomat", "paczkomat", "taksówka"
    ]
  },
  travel: {
    label: "Podróże i wakacje",
    places: [
      "hotel all inclusive", "recepcja hotelowa", "hostel", "camping", "pole namiotowe",
      "plaża tropikalna", "bezludna wyspa", "promenada", "port morski", "marina",
      "latarnia morska", "statek wycieczkowy", "kajak", "żaglówka", "kolejka górska",
      "schronisko górskie", "szlak turystyczny", "punkt widokowy", "jaskinia turystyczna", "wodospad",
      "jezioro", "rzeka", "pustynny obóz", "dżungla", "safari",
      "lot balonem", "biuro podróży", "odprawa bagażowa", "kontrola bezpieczeństwa", "przejście graniczne",
      "stacja metra", "tramwaj", "przystanek autobusowy", "rynek starego miasta", "starówka",
      "ratusz", "deptak", "most zwodzony", "tunel drogowy", "wypożyczalnia rowerów",
      "wypożyczalnia samochodów", "port lotniczy", "dworzec autobusowy", "pensjonat", "apartament wakacyjny",
      "aquapark", "plażowy bar", "punkt informacji turystycznej", "kolejka linowa", "taras widokowy"
    ]
  },
  home: {
    label: "Dom i codzienność",
    places: [
      "kuchnia", "salon", "sypialnia", "łazienka", "balkon",
      "ogród", "piwnica", "strych", "garaż", "winda",
      "klatka schodowa", "osiedlowy sklep", "plac zabaw", "parking", "śmietnik",
      "pralnia samoobsługowa", "sklep meblowy", "sklep budowlany", "targ warzywny", "sklep mięsny",
      "warzywniak", "przymierzalnia", "sklep obuwniczy", "salon fryzjerski", "gabinet weterynaryjny",
      "apteka całodobowa", "sklep z zabawkami", "sklep papierniczy", "osiedlowy park", "podwórko",
      "garaż podziemny", "taras", "altanka", "dom jednorodzinny", "blok mieszkalny",
      "przedpokój", "spiżarnia", "pokój dziecięcy", "domofon", "rowerownia",
      "sklep z AGD", "stoisko z gazetami", "punkt ksero", "serwis telefonów", "pasmanteria"
    ]
  },
  culture: {
    label: "Rozrywka i kultura",
    places: [
      "koncert", "festiwal", "klub muzyczny", "dyskoteka", "karaoke",
      "escape room", "park rozrywki", "wesołe miasteczko", "kręgielnia", "sala gier",
      "planszówkarnia", "kasyno", "salon tatuażu", "wystawa sztuki", "galeria sztuki",
      "plan filmowy", "garderoba", "backstage", "kabaret", "stand-up",
      "opera", "filharmonia", "cyrk", "lodowisko miejskie", "park trampolin",
      "turniej e-sportowy", "studio nagraniowe", "sala prób", "konkurs talentów", "pokaz mody",
      "księgarnia", "klub książki", "premiera filmu", "festyn", "piknik rodzinny",
      "pokaz iluzjonisty", "sala taneczna", "muzeum figur woskowych", "teatr lalek", "kino samochodowe",
      "dom kultury", "amfiteatr", "jarmark", "salon gier VR", "klub komediowy",
      "wystawa dinozaurów", "sala balowa", "pokaz fajerwerków", "czytelnia", "antykwariat"
    ]
  },
  sport: {
    label: "Sport i aktywność",
    places: [
      "boisko piłkarskie", "hala sportowa", "kort tenisowy", "pole golfowe", "stok narciarski",
      "wypożyczalnia nart", "tor gokartowy", "tor wyścigowy", "ring bokserski", "sala fitness",
      "szkoła tańca", "skatepark", "ścianka wspinaczkowa", "park linowy", "stadnina rekreacyjna",
      "tor przeszkód", "sala jogi", "maraton", "mecz piłkarski", "trybuny stadionu",
      "szatnia sportowa", "wypożyczalnia kajaków", "spływ kajakowy", "boisko do koszykówki", "boisko do siatkówki",
      "plaża do siatkówki", "paintball", "strzelnica laserowa", "bilard", "park rowerowy",
      "trasa biegowa", "siłownia plenerowa", "sala do ping-ponga", "tor łuczniczy", "obóz harcerski",
      "klub sportowy", "wypożyczalnia łyżew", "centrum nurkowe", "skocznia narciarska", "boisko szkolne",
      "park do nordic walking", "trasa rowerowa", "sala squash", "basen olimpijski", "ścianka boulderowa"
    ]
  },
  food: {
    label: "Jedzenie i imprezy",
    places: [
      "pizzeria", "sushi bar", "food truck", "restauracja włoska", "restauracja chińska",
      "restauracja indyjska", "bar mleczny", "stołówka", "jadalnia", "grill w ogrodzie",
      "ognisko", "domówka", "urodziny", "poprawiny", "wieczór kawalerski",
      "wieczór panieński", "baby shower", "sylwester", "wigilia", "śniadanie hotelowe",
      "bufet", "cukiernia", "herbaciarnia", "bar na plaży", "pub",
      "klub nocny", "winiarnia", "piwiarnia", "ogródek restauracyjny", "kuchnia polowa",
      "piknik", "degustacja", "targ śniadaniowy", "festiwal jedzenia", "sala bankietowa",
      "kuchnia restauracyjna", "zaplecze restauracji", "ogródek działkowy", "przyjęcie niespodzianka", "stół wigilijny",
      "impreza grillowa", "kuchnia babci", "bar tapas", "stoisko z goframi", "nocny kebab"
    ]
  },
  unusual: {
    label: "Nietypowe miejsca",
    places: [
      "stacja kosmiczna", "łódź podwodna", "statek piracki", "zamek", "loch",
      "wulkan", "igloo", "tajne laboratorium", "bunkier", "baza wojskowa",
      "posterunek na Antarktydzie", "farma", "pasieka", "kopalnia", "elektrownia",
      "oczyszczalnia ścieków", "wysypisko śmieci", "zakład produkcyjny", "chłodnia", "szklarnia",
      "cyrk objazdowy", "plan serialu kryminalnego", "tajne spotkanie", "sala przesłuchań", "aukcja dzieł sztuki",
      "skarbiec", "rezydencja milionera", "ogród botaniczny", "tunel metra", "dach wieżowca",
      "opuszczony hotel", "stary młyn", "średniowieczny targ", "nawiedzony dom", "statek widmo",
      "lodowa jaskinia", "laboratorium szalonego naukowca", "wioska wikingów", "obóz rycerski", "piramida",
      "grobowiec faraona", "statek kosmiczny", "planeta obcych", "domek na drzewie", "podziemne miasto",
      "tajna baza", "wyspa skarbów", "zaginiona świątynia", "magiczna wieża", "podwodna restauracja"
    ]
  },
  extra: {
    label: "Dodatkowe miejsca",
    places: [
      "barbershop", "sauna", "łaźnia parowa", "spa", "gabinet masażu",
      "solarium", "manikiurzystka", "sklep z kosmetykami", "perfumeryjny butik", "sklep z biżuterią",
      "zegarmistrz", "optyk", "fotobudka", "studio fotograficzne", "drukarnia",
      "introligatornia", "sklep muzyczny", "sklep z instrumentami", "komis z płytami", "wypożyczalnia filmów",
      "sklep z komiksami", "sklep modelarski", "sklep wędkarski", "sklep ogrodniczy", "szkółka roślin",
      "centrum ogrodnicze", "punkt naprawy rowerów", "serwis komputerowy", "serwis konsol", "sklep z grami",
      "salon samochodowy", "komis samochodowy", "lakiernia", "wulkanizacja", "parking przy autostradzie",
      "motel", "zajazd", "karczma", "schronisko młodzieżowe", "domki letniskowe",
      "glamping", "przystań kajakowa", "pomost", "plaża nad jeziorem", "plaża kamienista",
      "wydmy", "klif", "molo", "basen hotelowy", "hotelowy korytarz",
      "pokój hotelowy", "minibar", "lobby hotelowe", "taras hotelowy", "windy hotelowe",
      "sala konferencyjna w hotelu", "pokład promu", "kabina na statku", "terminal promowy", "dworzec wodny",
      "przystań żeglarska", "plaża nudystów", "winnica", "plantacja kawy", "plantacja herbaty",
      "sad owocowy", "pole słoneczników", "pole lawendy", "farma dyń", "targ rybny",
      "hala targowa", "hala odlotów", "hala przylotów", "taśma bagażowa", "bramka lotniskowa",
      "salonik lotniskowy", "wypożyczalnia sprzętu plażowego", "sklep z pamiątkami", "budka z lodami", "budka z hot dogami",
      "taras kawiarni", "kawiarnia na dachu", "kawiarnia z kotami", "palarnia kawy", "piekarnia rzemieślnicza",
      "pracownia cukiernicza", "fabryka czekolady", "sklep z serami", "delikatesy", "hala z jedzeniem",
      "bar sałatkowy", "bar z ramenem", "pierogarnia", "naleśnikarnia", "taco bar",
      "burgerownia", "wegańska knajpka", "restauracja na łodzi", "kolacja w ciemności", "sala degustacyjna",
      "piwnica z winem", "mały browar", "kawiarnia dworcowa", "bar mleczny przy rynku", "kuchnia w food trucku",
      "studio kulinarne", "kurs gotowania", "warsztaty czekolady", "ogród piwny", "strefa chillout",
      "park kieszonkowy", "skwer", "fontanna", "bulwar nad rzeką", "promenada nad jeziorem",
      "ścieżka edukacyjna", "rezerwat przyrody", "punkt obserwacji ptaków", "wieża widokowa", "leśniczówka",
      "polana", "górska przełęcz", "dolina", "kanion", "bagno",
      "torfowisko", "łąka", "brzeg rzeki", "przystanek tramwaju wodnego", "ogród zoologiczny nocą",
      "motylarnia", "akwarium miejskie", "oceanarium", "terrarium", "mini zoo",
      "park dinozaurów", "ogród japoński", "labirynt z żywopłotu", "palmiarnia", "oranżeria",
      "wystawa kwiatów", "targ staroci", "pchli targ", "garażowa wyprzedaż", "antresola sklepu",
      "magazyn sklepu", "przedsionek kina", "sala kinowa VIP", "budka biletera", "szatnia w teatrze",
      "foyer", "loża teatralna", "orkiestron", "scena plenerowa", "sala prób chóru",
      "pracownia malarska", "pracownia ceramiki", "pracownia rzeźby", "warsztaty rękodzieła", "kurs tańca",
      "sala baletowa", "szkoła aktorska", "studio dubbingu", "radiowe studio", "pokój podcastowy",
      "redakcja magazynu", "księgarnia podróżnicza", "czytelnia komiksów", "klub jazzowy", "piwnica kabaretowa",
      "sala bingo", "turniej szachowy", "klub brydżowy", "pokój zagadek", "laser tag",
      "arena nerf", "centrum zabaw", "małpi gaj", "dmuchańce", "mini golf",
      "automaty arcade", "symulator lotu", "pokój karaoke prywatny", "sala prób zespołu", "namiot festiwalowy",
      "pole festiwalowe", "brama festiwalu", "stoisko z koszulkami", "punkt pierwszej pomocy", "strefa autografów",
      "fan zone", "trybuna VIP", "tunel stadionowy", "murawa stadionu", "ławka rezerwowych",
      "szatnia basenowa", "jacuzzi", "brodzik", "zjeżdżalnia wodna", "wieża ratownika",
      "wypożyczalnia desek SUP", "szkoła surfingu", "plaża dla psów", "tor saneczkowy", "kolejka krzesełkowa",
      "górska karczma", "wypożyczalnia snowboardów", "trasa narciarska", "park snowboardowy", "lodowa tafla",
      "szkółka jeździecka", "maneż", "padok", "stajnia", "siodlarnia",
      "hala wspinaczkowa", "wypożyczalnia kasków", "pole namiotowe nad rzeką", "biwak w lesie", "ognisko harcerskie",
      "dom na łodzi", "pływający targ", "most linowy", "drewniany pomost", "wiejska chata",
      "stara stodoła", "młyn wodny", "kuźnia", "warsztat garncarski", "pracownia szkła",
      "huta szkła", "tartak", "suszarnia ziół", "pasterska bacówka", "serowarnia",
      "mleczarnia", "pas startowy", "hangar", "wieża kontroli lotów", "lądowisko helikopterów",
      "port rzeczny", "śluza", "zapora wodna", "wiatrak", "farma wiatrowa",
      "farma fotowoltaiczna", "obserwatorium astronomiczne", "planetarium", "radioteleskop", "kopuła teleskopu"
    ]
  }
};
