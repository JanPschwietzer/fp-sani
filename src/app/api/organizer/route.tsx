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
    const { email, password, agb, name} = body;

    if (!email || !password || !agb || !name) {
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
            veranstalter: {
                create: {
                    name: name,
                }
            }
        },
    });

    return new NextResponse(JSON.stringify(user),{
        status: 200
    });
    
}

export async function PUT(request: NextRequest) {

    const session = await getServerSession(authOptions as any) as Session;

    const body: Veranstalter = await request.json();

    if (!body.veranstalter) {
        return new NextResponse("Es wurden nicht alle benötigten Daten übermittelt.",{
            status: 400
        });
    }
    const existingUser = await client.user.findUnique({
        where: {
            email: session.user?.email!,
        },
        select: {
            veranstalter: true
        }
    });
    if (existingUser?.veranstalter) {
        await client.veranstalter.update({
            where: {
                userId: body.id,
            },
            data: {
                name: body.veranstalter.name,
                username: body.veranstalter.username,
                beschreibung: body.veranstalter.beschreibung,
                website: body.veranstalter.website,
                email: body.veranstalter.email,
                telefon: body.veranstalter.telefon,
                facebookLink: body.veranstalter.facebookLink,
                instagramLink: body.veranstalter.instagramLink,
                authCode: body.veranstalter.authCode,
                agbLink: body.veranstalter.agbLink,
                iban: body.veranstalter.iban,
                bic: body.veranstalter.bic,
                bank: body.veranstalter.bank,
                kontoinhaber: body.veranstalter.kontoinhaber,
            }
        });
    }
    else {
        return new NextResponse("Sie haben keinen Veranstalteraccount.",{
            status: 403
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
            include: {
                veranstalter: true
            }
        }).then((data) => {return data});
        if (user) {
            return new NextResponse(JSON.stringify(user),{
                status: 200
            });
        }
    }
}