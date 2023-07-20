import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import SignupOrgaPage from "@/components/Auth/SignupOrgaPage";
import { Session } from "inspector";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import React from "react";

export default async function SignupPageOrgaContainer() {
	const session: Session = await getServerSession(authOptions as any) as Session
	if (session) redirect('/user')
	return <SignupOrgaPage />;
}