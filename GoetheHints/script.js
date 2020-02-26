var hints =
[
  "",
  "1. Gleich und gleich gesellt sich gern",
  "2. Google-Translater: Hexenschrift <-> Morse",
  "3. Klopfe den Morse Code von dem Wort unter dem Klopfer",
  "1. Suchet, so werdet ihr finden",
  "2. Befreit das Licht aus den Büchern!",
  "3. Beleuchtet GLEICHZEITIG die jeweiligen Segmente mit der passenden Lampe",
  "1. Bist auf die Geige du erpicht, vergiss den 4. Buchtresor nicht!",
  "2. Die Wege zu den Löchern sind Ultraviolett",
  "3. Öffne den Koffer mit dem Schlüssel aus dem 4. Buchtresor, suche mit der UV-Lampe die richtigen Löcher in richtiger Reihenfolge und schau dir mit der Kamera die richtigen Symbole an. Gib sie am Code-Pad ein.",
  "1. Be conected",
  "2. Mach nach was du siehst",
  "3. Verbindet euch als Menschenkette von der Hand zum Bilderrahmen in der Bibliothek",
  "1. Look into the eyes and search for more books",
  "2. Die Bücher zeigen dir den Weg, wie das mit den Kabeln geht!",
  "3. Lege die Muster nach und Folge den Augen zu den Büchern. Ordne diese richtig um den Schaltplan zu erhalten.",
  "1. Was ich jetzt gern einmal wüßte? Habt ihr denn schon eine Büßte?",
  "2. Na? Dreht ihr schon am Rad?",
  "3. Ihr Narren! Ihr glaubt auch das euch alles verraten wird. Da habt ihr euch aber getäuscht! Mfg Mephisto"
];

/*---------------------- START ----------------------*/
$(document).ready(function(){
  $('#hin01').on("click", function(){ $('#s1_hinweis').text(hints[1]); } );
  $('#hin02').on("click", function(){ $('#s1_hinweis').text(hints[2]); } );
  $('#hin03').on("click", function(){ $('#s1_hinweis').text(hints[3]); } );

  $('#hin04').on("click", function(){ $('#s2_hinweis').text(hints[4]); } );
  $('#hin05').on("click", function(){ $('#s2_hinweis').text(hints[5]); } );
  $('#hin06').on("click", function(){ $('#s2_hinweis').text(hints[6]); } );

  $('#hin07').on("click", function(){ $('#s3_hinweis').text(hints[7]); } );
  $('#hin08').on("click", function(){ $('#s3_hinweis').text(hints[8]); } );
  $('#hin09').on("click", function(){ $('#s3_hinweis').text(hints[9]); } );

  $('#hin11').on("click", function(){ $('#s4_hinweis').text(hints[11]); } );
  $('#hin12').on("click", function(){ $('#s4_hinweis').text(hints[12]); } );
  $('#hin10').on("click", function(){ $('#s4_hinweis').text(hints[10]); } );

  $('#hin13').on("click", function(){ $('#s5_hinweis').text(hints[13]); } );
  $('#hin14').on("click", function(){ $('#s5_hinweis').text(hints[14]); } );
  $('#hin15').on("click", function(){ $('#s5_hinweis').text(hints[15]); } );

  $('#hin16').on("click", function(){ $('#s6_hinweis').text(hints[16]); } );
  $('#hin17').on("click", function(){ $('#s6_hinweis').text(hints[17]); } );
  $('#hin18').on("click", function(){ $('#s6_hinweis').text(hints[18]); } );

});
