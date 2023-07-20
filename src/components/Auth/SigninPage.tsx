"use client"
import React, { useState } from 'react'
import { FcGoogle } from 'react-icons/fc'
import { toast } from 'react-toastify';
import { signIn } from 'next-auth/react';
import { useRouter } from "next/navigation";

function SignInPage() {
  
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const router = useRouter();

    function handleCredentialsSignIn(e: any) {
        e.preventDefault()
        if (email === '' || password === '') {
          toast("Bitte fülle alle Felder aus!", {
            type: "error",
            theme: "colored"
        });
        return;
      }
      signIn('credentials', {
          email: email,
          password: password,
          redirect: false
      })
      .then((status) => {
          if (status?.error) {
              toast(status.error, {
                  type: "error",
                  theme: "colored"
              })
          }
          else {
              toast("Du wurdest erfolgreich eingeloggt!", {
                  type: "success",
                  theme: "colored"
              })
              return router.refresh();
          }
      })
    }
    
    async function handleGoogleSignIn() {

    }

  return (
    <div className='w-full'>
      <div className='max-w-[350px] mt-[96px] mx-auto w-full mb-[50px] md:mb-[200px] text-center flex flex-col'>
        <h1 className='my-5 text-2xl'>Einloggen</h1>
        <form onSubmit={(e) => handleCredentialsSignIn(e)} className='flex flex-col gap-6'>
          <input autoComplete='email' className="p-3 border border-gray-300 rounded-md drop-shadow-md" type="email" placeholder='Email' name="email" id="email" onChange={(e) => setEmail(e.target.value)} />
          <input className="p-3 border border-gray-300 rounded-md drop-shadow-md" type="password" placeholder='Passwort' name="password" id="password" onChange={(e) => setPassword(e.target.value)} />
          <button type="submit" className='bg-[#2BA84A] hover:bg-[#248232] drop-shadow-xl border border-black text-white w-full max-w-[350px] rounded-md font-medium mx-auto px-6 py-3 z-[0]' >Einloggen</button>
        </form>
        <div className='my-6'>oder</div>
        <div>
          <FcGoogle onClick={handleGoogleSignIn} className='inline-block hover:cursor-pointer hover:drop-shadow-md' size={40} />
        </div>
        <div className='my-6'>Du hast noch keinen Account? Registriere dich als <a href="/signup" className='text-[#248232] hover:underline'>Kunde</a> oder <a href="/signup/organizer" className='text-[#248232] hover:underline'>Veranstalter</a></div>
      </div>
    </div>
  )
}

export default SignInPage