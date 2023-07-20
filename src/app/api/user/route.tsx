import bcrypt from 'bcrypt';
import prisma from '../../../lib/prismadb';
import { NextRequest, NextResponse } from 'next/server';
import { Session, getServerSession } from 'next-auth';
import { authOptions } from '../auth/[...nextauth]/route';
import client from '../../../lib/prismadb';

export async function POST(request: NextRequest) {

    const session = await getServerSession(authOptions as any) as Session;
    if (session) {	
        return new NextResponse("Sie sind bereits eingeloggt.",{
            status: 403
        });
    }

    const body = await request.json();
    const { email, password, agb, vorname, nachname} = body;

    if (!email || !password || !agb || !vorname || !nachname) {
        return new NextResponse("Bitte füllen Sie alle Felder aus.",{
            status: 400
        });
    }
    const existingUser = await prisma.user.findUnique({
        where: {
            email: email,
        },
    });
    if (existingUser) {
        return new NextResponse("Diese Email ist bereits registriert.",{
            status: 400
        });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await prisma.user.create({
        data: {
            email: email,
            password: hashedPassword,
            vorname: vorname,
            nachname: nachname,
        },
    });

    return new NextResponse(JSON.stringify(user),{
        status: 200
    });
    
}

export async function PUT(request: NextRequest) {

    const session = await getServerSession(authOptions as any) as Session;

    const body: Adresse = await request.json();

    if (!body.id || !body.vorname || !body.nachname || !body.adress) {
        return new NextResponse("Es wurden nicht alle benötigten Daten übermittelt.",{
            status: 400
        });
    }
    const existingUser = await client.user.findUnique({
        where: {
            id: body.id,
        },
        select: {
            email: true,
            adress: true
        }
    });
    if (existingUser?.email !== session.user?.email) {
        return new NextResponse("Sie sind nicht berechtigt diese Daten zu ändern.",{
            status: 403
        });
    }
    if (existingUser?.adress) {
        await client.user.update({
            where: {
                id: body.id,
            },
            data: {
                vorname: body.vorname,
                nachname: body.nachname,
            }
        });
        await client.adresse.update({
            where: {
                userId: body.id,
            },
            data: {
                street: body.adress.street,
                streetNumber: body.adress.streetNumber,
                zipCode: body.adress.zipCode,
                city: body.adress.city,
                country: body.adress.country,
            }
        });
    }
    else {

        await client.user.update({
            where: {
                id: body.id,
            },
            data: {
                vorname: body.vorname,
                nachname: body.nachname,
                adress: {
                    create: {
                        street: body.adress.street,
                        streetNumber: body.adress.streetNumber,
                        zipCode: body.adress.zipCode,
                        city: body.adress.city,
                        country: body.adress.country,
                    }
                },
            }
        });
    }
    return new NextResponse("Adresse erfolgreich gespeichert.",{
        status: 200
    });
}

export async function GET(request: NextRequest) {

    const session = await getServerSession(authOptions as any) as Session;
    if (!session) {	
        return new NextResponse("Sie sind nicht eingeloggt.",{
            status: 403
        });
    }
    else {
        const user = await client.user.findFirst({
            where: {
                email: session.user?.email,
            },
            select: {
                id: true,
                email: true,
                vorname: true,
                nachname: true,
                adress: {
                    select: {
                        street: true,
                        streetNumber: true,
                        zipCode: true,
                        city: true,
                       	country: true,
                    },
                },
            }
        }).then((data) => {return data});
        if (user) {
            return new NextResponse(JSON.stringify(user),{
                status: 200
            });
        }
    }
}