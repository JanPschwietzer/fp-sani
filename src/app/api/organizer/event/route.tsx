import { Session, getServerSession } from "next-auth";
import { authOptions } from "../../auth/[...nextauth]/route";
import { NextRequest, NextResponse } from "next/server";
import client from "@/lib/prismadb";

export async function PUT(request: NextRequest) {

    const session = await getServerSession(authOptions as any) as Session;

    const body: Veranstaltung = await request.json();

    if (!body.name || !body.beschreibung || !body.startDatum || !body.endDatum || !body.strasse || !body.hausnummer || !body.plz || !body.ort || !body.land) {
        return new NextResponse("Es wurden nicht alle benötigten Daten übermittelt.",{
            status: 400
        });
    }
    if (body.startDatum > body.endDatum) {
        return new NextResponse("Das Startdatum darf nicht nach dem Enddatum liegen.",{
            status: 400
        });
    }
    const existingUser = await client.user.findUnique({
        where: {
            email: session.user?.email!,
        },
        include: {
            veranstalter: true
        }
    });
    if (existingUser?.veranstalter) {
        const result = await client.$transaction([client.veranstaltungen.update({
            where: {
                id: body.id,
                veranstalterId: existingUser.veranstalter.id
            },
            data: {
                        name: body.name,
                        beschreibung: body.beschreibung,
                        bild: body.bild,
                        startDatum: body.startDatum,
                        endDatum: body.endDatum,
                        strasse: body.strasse,
                        hausnummer: body.hausnummer,
                        plz: body.plz,
                        ort: body.ort,
                        land: body.land,
                        veroeffentlicht: body.veroeffentlicht
            }
            })
        ])
        return new NextResponse(JSON.stringify(result[0]),{
            status: 200
        });
    }
}

export async function DELETE(request: NextRequest) {
    const session = await getServerSession(authOptions as any) as Session;
    const body: Veranstaltung = await request.json();

    const existingUser = await client.user.findUnique({
        where: {
            email: session.user?.email!,
        },
        include: {
            veranstalter: true
        }
    });
    if (existingUser?.veranstalter) {
        const result = await client.$transaction([client.veranstaltungen.delete({
            where: {
                id: body.id,
                veranstalterId: existingUser.veranstalter.id
            }
        })])
        return new NextResponse(JSON.stringify(result[0]),{
            status: 200
        });
    }
}

export async function POST(request: NextRequest) {

    const session = await getServerSession(authOptions as any) as Session;

    const body: Veranstaltung = await request.json();

    if (!body.name || !body.beschreibung || !body.startDatum || !body.endDatum || !body.strasse || !body.hausnummer || !body.plz || !body.ort || !body.land) {
        return new NextResponse("Es wurden nicht alle benötigten Daten übermittelt.",{
            status: 400
        });
    }
    if (body.startDatum > body.endDatum) {
        return new NextResponse("Das Startdatum darf nicht nach dem Enddatum liegen.",{
            status: 400
        });
    }
    const existingUser = await client.user.findUnique({
        where: {
            email: session.user?.email!,
        },
        include: {
            veranstalter: true
        }
    });
    if (existingUser?.veranstalter) {
        const result = await client.$transaction([client.veranstaltungen.create({
            data: {
                        name: body.name,
                        veranstalterId: existingUser.veranstalter.id,
                        beschreibung: body.beschreibung,
                        bild: body.bild,
                        startDatum: body.startDatum,
                        endDatum: body.endDatum,
                        strasse: body.strasse,
                        hausnummer: body.hausnummer,
                        plz: body.plz,
                        ort: body.ort,
                        land: body.land,
            }
            })
        ])
        return new NextResponse(JSON.stringify(result[0]),{
            status: 200
        });
    }
}