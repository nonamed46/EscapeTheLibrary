var hints =
[
  "",
  "1. Gleich und gleich gesellt sich gern",
  "2. Google-Translater: Hexenschrift <-> Morse",
  "3. Klopft den Morse Code des Wortes, welches unter dem Klopfer steht.",
  "1. Suchet, so werdet Ihr finden!",
  "2. Befreit das Licht aus den Büchern!",
  "3. Beleuchtet GLEICHZEITIG die jeweiligen farbigen Segmente mit der passenden Lampe.",
  "1. Seid Ihr auf die Ukulele erpicht, so vergesst den 4. Buchtresor nicht!",
  "2. Die Wege zu den Locheingängen sind ultraviolett",
  "3. Öffnet die Ukulelentasche mit dem Schlüssel aus dem 4. Buchtresor, sucht mit der UV-Lampe die richtigen Eingänge in richtiger Reihenfolge und schaut Euch mit der Kamera die Symbole an. Gebt sie in der korrekten Reihenfolge am Code-Pad ein.",
  "1. Menschen, werdet Eins, haltet zusammen!",
  "2. Menschen verbindet Euch!",
  "3. Verbindet Euch als Menschenkette gemäß dem Vorbild und greift von der Hand in der Buchseite zum Bilderrahmen in der Bibliothek.",
  "1. Schaut der Wahrheit in die Augen!",
  "2. Die Bücher zeigen Euch den Weg, wie das mit den Kabeln geht!",
  "3. Findet die Bücher und legt die Buchrücken gemäß der Abbildung aneinander. So erhaltet Ihr den Schaltplan.",
  "1. Was ich jetzt gern einmal wüsste? Habt ihr denn schon eine Büste?",
  "2. Mir ist von alledem so dumm, als ging im Kopf ein Musikrad herum.",
  "3. Ihr Narren! Glaubt Ihr wirklich, dass Euch alles verraten wird?! Hahahaaaaaa, welch Irrtum! ICH bin der unschlagbare Mephisto – Hahahahaaaaa Ihr Dummköpfe!"
];

var hints_ar =
[
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  ""
];

var hints_heb =
[
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  ""
];



/*---------------------- START ----------------------*/
$(document).ready(function(){
  $('#hin01').on("click", function(){
     $('#s1_hinweis').text(hints[1]);
     $('#hinweis_ar').text(hints_ar[1]);
     $('#hinweis_heb').text(hints_heb[1]);
   } );
  $('#hin02').on("click", function(){
     $('#s1_hinweis').text(hints[2]);
     $('#hinweis_ar').text(hints_ar[2]);
     $('#hinweis_heb').text(hints_heb[2]);
   } );
  $('#hin03').on("click", function(){
     $('#s1_hinweis').text(hints[3]);
     $('#hinweis_ar').text(hints_ar[3]);
     $('#hinweis_heb').text(hints_heb[3]);
   } );

  $('#hin04').on("click", function(){
     $('#s2_hinweis').text(hints[4]);
     $('#hinweis_ar').text(hints_ar[4]);
     $('#hinweis_heb').text(hints_heb[4]);
   } );
  $('#hin05').on("click", function(){
     $('#s2_hinweis').text(hints[5]);
     $('#hinweis_ar').text(hints_ar[5]);
     $('#hinweis_heb').text(hints_heb[5]);
   } );
  $('#hin06').on("click", function(){
     $('#s2_hinweis').text(hints[6]);
     $('#hinweis_ar').text(hints_ar[6]);
     $('#hinweis_heb').text(hints_heb[6]);
   } );

  $('#hin07').on("click", function(){
     $('#s3_hinweis').text(hints[7]);
     $('#hinweis_ar').text(hints_ar[7]);
     $('#hinweis_heb').text(hints_heb[7]);
   } );
  $('#hin08').on("click", function(){
     $('#s3_hinweis').text(hints[8]);
     $('#hinweis_ar').text(hints_ar[8]);
     $('#hinweis_heb').text(hints_heb[8]);
   } );
  $('#hin09').on("click", function(){
     $('#s3_hinweis').text(hints[9]);
     $('#hinweis_ar').text(hints_ar[9]);
     $('#hinweis_heb').text(hints_heb[9]);
   } );

  $('#hin11').on("click", function(){
     $('#s4_hinweis').text(hints[11]);
     $('#hinweis_ar').text(hints_ar[11]);
     $('#hinweis_heb').text(hints_heb[11]);
    } );
  $('#hin12').on("click", function(){
     $('#s4_hinweis').text(hints[12]);
     $('#hinweis_ar').text(hints_ar[12]);
     $('#hinweis_heb').text(hints_heb[12]);
    } );
  $('#hin10').on("click", function(){
     $('#s4_hinweis').text(hints[10]);
     $('#hinweis_ar').text(hints_ar[10]);
     $('#hinweis_heb').text(hints_heb[10]);
    } );

  $('#hin13').on("click", function(){
     $('#s5_hinweis').text(hints[13]);
     $('#hinweis_ar').text(hints_ar[13]);
     $('#hinweis_heb').text(hints_heb[13]);
    } );
  $('#hin14').on("click", function(){
     $('#s5_hinweis').text(hints[14]);
     $('#s5_hinweis_ar').text(hints_ar[14]);
     $('#s5_hinweis_heb').text(hints_heb[14]);
    } );
  $('#hin15').on("click", function(){
     $('#s5_hinweis').text(hints[15]);
     $('#hinweis_ar').text(hints_ar[15]);
     $('#hinweis_heb').text(hints_heb[15]);
    } );

  $('#hin16').on("click", function(){
     $('#s6_hinweis').text(hints[16]);
     $('#hinweis_ar').text(hints_ar[16]);
     $('#hinweis_heb').text(hints_heb[16]);
    } );
  $('#hin17').on("click", function(){
     $('#s6_hinweis').text(hints[17]);
     $('#hinweis_ar').text(hints_ar[17]);
     $('#hinweis_heb').text(hints_heb[17]);
    } );
  $('#hin18').on("click", function(){
     $('#s6_hinweis').text(hints[18]);
     $('#hinweis_ar').text(hints_ar[18]);
     $('#hinweis_heb').text(hints_heb[18]);
    } );

});
