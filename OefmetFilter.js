const studenten = [
  { naam: "Lola", geslaagd: true },
  { naam: "Manu", geslaagd: true },
  { naam: "Mir", geslaagd: true },
  { naam: "Rubs", geslaagd: false },
  { naam: "Kat", geslaagd: false },
  { naam: "jop", geslaagd: true },
];

const geslaagdeStudenten = studenten.filter((student) => student.geslaagd);

console.log(geslaagdeStudenten);
