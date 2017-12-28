/*
Aufgabe: Aufgabe 7 - StudiVZ
Name: Michelle Zeiﬂner
Matrikel: 
Datum: 30.10.2017
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/

namespace StudiVZ {
    interface StudentData {
        // hier ist noch die richtige Datenstruktur festzulegen
        matrnr: number;
        name: string;
        vorname: string;
        alter: number;
        geschlecht:  boolean;
        comment: string;
    }
    var students: StudentData[] = [];
    var stop: boolean = false;

    while (!stop) {
        var action: string = prompt("Datensatz anlegen (n), abfragen(a) oder Programm beenden (s)\nn,a oder s eingeben");

        switch (action) {
            case "n":
            case "N":
                var input: string = prompt("Eingabe (jeweils mit Komma getrennt) von\nMatrikelnummer, Name, Vorname, Alter, Geschlecht (0 oder 1) und Kommentar");
                alert(saveData(input));
                break;
            case "a":
            case "A":
                var matrikel: number = parseInt(prompt("Eingabe Matrikelnummer"));
                alert(queryData(matrikel));
                break;
            case "s":
            case "S":
                stop = true;
        }
    }

    function saveData(_input: string): string {
        //return "Hier fehlt noch der richtige Code...";
        let array: string [] = _input.split(",");
        let s: StudentData = {
            matrnr: parseInt(array[0]),
            name: array[1],
            vorname: array[2],
            alter: parseInt(array[3]),
            geschlecht: parseInt(array[4])==1,
            comment: array[5]    
        };
        students.push(s);
        let Geschlecht: string;
        if (parseInt(array[4]) == 1) {
            Geschlecht = "weiblich";
        }
        else {
            Geschlecht = "maennlich";
}
        
        return "Deine Daten wurden verarbeitet: \n Matrikelnummer: " + s.matrnr + "\n Name: " + s.name + "\n Vorname: " + s.vorname + "\n Alter: " + s.alter + "\n Geschlecht: " + s.geschlecht+ "\n Kommentar: " + s.comment;
    }
    function queryData(_matrikel: number): string {
        //return "Hier fehlt noch der richtige Code...";
        let i: number = 0;
        for(i; i < students.length; i++){
            if (_matrikel == students[i].matrnr){
            let geschlecht: string = students[i].geschlecht ? "weiblich" : "maennlich";
            return "Matrikelnummer:" + students[i].matrnr + "\n Name:" + students[i].name + "\n Vorname:" + students[i].vorname + "\n Alter:" + students[i].alter + "\n Geschlecht:" + geschlecht + "\n Kommentar:" + students[i].comment;    
            }    
        }
        
    }
}