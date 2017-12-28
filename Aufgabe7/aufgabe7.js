/*
Aufgabe: Aufgabe 7 - StudiVZ
Name: Michelle Zei�ner
Matrikel:
Datum: 30.10.2017
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/
var StudiVZ;
(function (StudiVZ) {
    var students = [];
    var stop = false;
    while (!stop) {
        var action = prompt("Datensatz anlegen (n), abfragen(a) oder Programm beenden (s)\nn,a oder s eingeben");
        switch (action) {
            case "n":
            case "N":
                var input = prompt("Eingabe (jeweils mit Komma getrennt) von\nMatrikelnummer, Name, Vorname, Alter, Geschlecht (0 oder 1) und Kommentar");
                alert(saveData(input));
                break;
            case "a":
            case "A":
                var matrikel = parseInt(prompt("Eingabe Matrikelnummer"));
                alert(queryData(matrikel));
                break;
            case "s":
            case "S":
                stop = true;
        }
    }
    function saveData(_input) {
        //return "Hier fehlt noch der richtige Code...";
        let array = _input.split(",");
        let s = {
            matrnr: parseInt(array[0]),
            name: array[1],
            vorname: array[2],
            alter: parseInt(array[3]),
            geschlecht: parseInt(array[4]) == 1,
            comment: array[5]
        };
        students.push(s);
        let Geschlecht;
        if (parseInt(array[4]) == 1) {
            Geschlecht = "weiblich";
        }
        else {
            Geschlecht = "maennlich";
        }
        return "Deine Daten wurden verarbeitet: \n Matrikelnummer: " + s.matrnr + "\n Name: " + s.name + "\n Vorname: " + s.vorname + "\n Alter: " + s.alter + "\n Geschlecht: " + s.geschlecht + "\n Kommentar: " + s.comment;
    }
    function queryData(_matrikel) {
        //return "Hier fehlt noch der richtige Code...";
        let i = 0;
        for (i; i < students.length; i++) {
            if (_matrikel == students[i].matrnr) {
                let geschlecht = students[i].geschlecht ? "weiblich" : "maennlich";
                return "Matrikelnummer:" + students[i].matrnr + "\n Name:" + students[i].name + "\n Vorname:" + students[i].vorname + "\n Alter:" + students[i].alter + "\n Geschlecht:" + geschlecht + "\n Kommentar:" + students[i].comment;
            }
        }
    }
})(StudiVZ || (StudiVZ = {}));
//# sourceMappingURL=aufgabe7.js.map