interface Veranstalter {
    id: string,
    email: string,
    veranstalter: {
        name: string,
        username: string,
        beschreibung: string,
        website: string,
        email: string,
        telefon: string,
        instagramLink: string,
        facebookLink: string,
        agbLink: string,
        authCode: string,
        iban: string,
        bic: string,
        bank: string,
        kontoinhaber: string,
    }
}

interface Adresse {
    id: string,
    email: string,
    vorname: string,
    nachname: string,
    adress: {
        street: string,
        streetNumber: string,
        zipCode: string,
        city: string,
        country: string
    }
}

interface Veranstaltung {
    id: string,
    name: string,
    beschreibung: string,
    startDatum: Date,
    endDatum: Date,
    bild: string,
    strasse: string,
    hausnummer: string,
    plz: string,
    ort: string,
    land: string,
    veroeffentlicht: boolean,
}