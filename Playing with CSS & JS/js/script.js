// Lager et array som inneholder 4 tall verdier. Manipulerer så DOM'en ved å referere til en tom div i HTML documentet via ID, bruker document og getElementById. Setter deretter den indre HTML i den tomme div ved å skrive strings som også legger til tall verdiene fra arrayet via index verdiene 0-3.
const scores = [98, 108, 73, 85];
document.getElementById("scores").innerHTML = "Game 1 score: " + scores[0] + ", Game 2 score: " + scores[1] + ", Game 3 score: " + scores[2] + ", Game 4 score: " + scores[3];


// Lager en funksjon her som skal kalkulere gjennomsnittet av 4 tall verdier. Bruker parameterne a,b,c,d som "tomme verdier". Lager så en lokal variabel som gjør selve kalkulasjonen.Parametere abcd må inlukkes i parantes før de deles på 4, grunnet operator precedance (divider har høyere prioritet enn adder). Returnerer så kalkulasjonen.
// Setter så et nytt variable kalt avgScore til å være lik funksjonen, hvor vi så setter de faktiske tall verdiene som skal kalkuleres in funksjonen. De erstatter nå parameterne.
function AverageScore(a,b,c,d) {
    avgCalculation = (a+b+c+d) / 4;
    return avgCalculation;
}
const avgScores = AverageScore(98, 108, 73, 85);

// Lager en enkel onclick funksjon her som manipulerer DOM'en på samme måte som arrayet ved å sette den indre HTML til et tomt element i HTML documentet.
function ClickMe() {
    document.getElementById("clicked").innerHTML = "</br> And the average score is: " + avgScores;
}

// Lager en Visittkort funksjon her. Gir funksjonen ett navn, og legger til 4 parametere. Lager så custom objects med this.  3 typer objects (dom obj, events osv, innebygde obj Math new Date getHour osv, og custom obj feks this.). Lager så selve print funksjonen: hvor vi displayer informasjonen ved å sette var til en string + objectet fra den andre funksjonen. Hvor vi tilslutt printer det ut ved å manipulere DOMen igjen ved å sette indre HTML i et tomt element i documentet. Deretter lager vi ett kort som vi fyller informasjonen som skal erstatte parameterne i funksjonen. og printer det tilslutt ut ved å kalle på funksjonen.
function Card(name,address,phone,email) {
    this.name = name;
    this.address = address;
    this.phone = phone;
    this.email = email;
    this.PrintCard = PrintCard;
}
function PrintCard() {
    line1 = "Name: " + this.name + "<br>";
    line2 = "Address: " + this.address + "<br>";
    line3 = "Phone: " + this.phone + "<br>";
    line4 = "Email: " + this.email;
    document.getElementById("myCard").innerHTML = (line1+line2+line3+line4);
}
marius = new Card("Marius Skjellerud", "Thorvald Meyers Gate 5", "936 73 230", "m_skjellerud@hotmail.com");

marius.PrintCard();