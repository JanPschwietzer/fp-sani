import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import SignupPage from "@/components/Auth/SignupPage";
import { Session } from "inspector";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import React from "react";

export default async function SignupPageContainer() {
	const session: Session = await getServerSession(authOptions as any) as Session
	if (session) redirect('/user')
	return <SignupPage />;
}