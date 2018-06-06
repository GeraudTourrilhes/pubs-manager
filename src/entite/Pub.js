export class Pub{
    constructor(name, firstName, lastName, mail, openDays, start, end, beers){
        this._name = name;
        this.owner(firstName, lastName, mail);
        this._openDays = openDays;
        this.openHours(start, end);
        this._beers = beers;
    }

    owner(firstName, lastName, mail)
    {
        this._firstName = firstName;
        this._lastName = lastName;
        this._mail = mail;
    }

    openHours(start, end)
    {
        this._start = start;
        this._end = end;
    }

    get name(){
        return this._name;
    }

    set name(name){
        this._name= name;
    }

    get firstName(){
        return this._firstName;
    }

    set firstName(firstName){
        this._firstName= firstName;
    }


    get lastName(){
        return this._lastName;
    }

    set lastName(lastName){
        this._lastName= lastName;
    }

   
}
