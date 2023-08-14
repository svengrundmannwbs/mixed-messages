const talks = [
  {
    id: 0,
    sentA: "Na, hallo da draußen, du verzweifelter PC-User!",
    sentB:
      "Ich bin dein Mann, Mo - äh, entschuldige, ich meinte natürlich dein PC-Techniker Mo.",
    sentC:
      "Wenn dein treuer Gefährte - der gute alte PC - Probleme hat, dann hör mir zu, denn hier kommt die beste Werbung, die du je gehört hast!",
  },

  {
    id: 1,
    sentA: "Brauchst du schnellen PC-Support?",
    sentB: "Kein Problem! Ich bin der IT-Spezialist, dem du vertrauen kannst.",
    sentC:
      "Egal, ob deine Maschine langsamer ist als eine Schnecke im Schneckentempo oder ob sie seltsame Geräusche macht, die dich nervös machen - ich bin zur Stelle!",
  },
  {
    id: 2,
    sentA:
      "Was ist das? Du hast dir die neueste Gaming-Ausrüstung geleistet, aber sie verhält sich, als hätte sie keine Lust zu spielen?",
    sentB:
      "Hey, du musst nicht verzweifeln - ruf einfach den PC-Techniker Mo an!",
    sentC:
      "Ich werde deine Hardware aufrüsten und optimieren, bis du mit Leichtigkeit die virtuelle Welt beherrschst.",
  },
  {
    id: 3,
    sentA:
      "Und für alle, die ihr digitales Leben mit wichtigen Daten und Fotos gefüllt haben, hört gut zu: Datenverlust ist kein Schicksal!",
    sentB:
      "Wenn deine Festplatte abstürzt, stehe ich bereit, um die verlorenen Daten zu retten.",
    sentC:
      "Ich bin wie ein IT-Spezialist-Engel, der aus der Datenrettungs-Himmel herabsteigt, um dich zu erlösen!",
  },
  {
    id: 4,
    sentA:
      "Aber warte, es kommt noch besser: Du musst deinen PC nicht einmal aus dem Haus schleppen.",
    sentB:
      "Ich bin ein PC-Techniker, der auch Hausbesuche macht! Rufe mich einfach an, und ich werde direkt zu dir kommen und deinen PC vor Ort behandeln.",
    sentC:
      "Keine Sorge, ich bin diskret wie ein Schatten, und deine digitalen Geheimnisse sind bei mir in sicheren Händen!",
  },
  {
    id: 5,
    sentA:
      "Und hier ist noch ein besonderes Angebot, das dich umhauen wird: Kostenlose Erstberatung!",
    sentB:
      "Das ist richtig, du kannst mich anrufen, ohne auch nur einen Cent zu zahlen. Wir besprechen deine Probleme, und ich gebe dir einen klaren Weg zur Lösung auf.",
    sentC: "Wo sonst bekommst du eine so großzügige Behandlung?",
  },
  {
    id: 6,
    sentA:
      "Also, worauf wartest du noch? Schmeiße den PC-Ärger aus dem Fenster und wähle die Nummer von PC-Techniker Mo!",
    sentB:
      "Ich bin dein Rettungsanker in der digitalen Welt - immer da, wenn du mich brauchst.",
    sentC:
      "Vergiss die Sorgen und ruf mich an, denn hier wird jeder PC gerettet!",
  },
];
//Sentence randomizer
const randomize = (length) => {
  return Math.floor(Math.random() * length);
};

// runtime variables
const randArr = [];
for (let i = 0; i < 3; i++) {
  randArr.push(randomize(talks.length));
}

// Output
const logToConsole = (array) => {
  // Output string
  let output = `${talks[array[0]].sentA} ${talks[array[1]].sentB} ${
    talks[array[2]].sentC
  } [Mo ${array[0]}:${array[1]}:${array[2]}]`;
  console.log(output);
};

logToConsole(randArr);
