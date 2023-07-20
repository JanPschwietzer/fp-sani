"use client"
import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { toast } from "react-toastify";

function SignupUserPage() {

    const [data, setData] = useState({
      email: '',
      password: '',
      passwordRepeat: '',
      vorname: '',
      nachname: '',
      agb: false
    })
    const router = useRouter();
  
    const handleSignUp = (e: any) => {
      e.preventDefault()
      if (!(data.password === data.passwordRepeat)) {
        toast("Passwörter sind nicht gleich!", {
          type: "error",
          theme: "colored"
        });
        return;
      }
      if (data.agb === false) {
        toast("Du musst die AGB akzeptieren!", {
          type: "error",
          theme: "colored"
        });
        return;
      }
      if (data.email === '' || data.password === '' || data.passwordRepeat === '' || data.vorname === '' || data.nachname === '') {
        toast("Bitte fülle alle Felder aus!", {
          type: "error",
          theme: "colored"
        });
        return;
      }
      axios.post('/api/user', {
        email: data.email,
        password: data.password,
        agb: data.agb,
        vorname: data.vorname,
        nachname: data.nachname
      })
      .then(() => {
        toast("Du wurdest erfolgreich registriert!", {
          type: "success",
          theme: "colored"
        })
        return router.push("/user")
      })
    }
  
    function handleGoogleSignUp() {
  
    }
  
    return (
      <div className='w-full'>
      <div className='max-w-[500px] mt-[12px] mx-auto w-full mb-[50px] md:mb-[200px] text-center flex flex-col'>
        <h1 className='my-5 text-2xl'>Registriere dich als Kunde</h1>
        <form onSubmit={(e) => handleSignUp(e)} className='flex flex-col gap-6'>
        <input className="p-3 border border-gray-300 rounded-md drop-shadow-md" type="text" placeholder='Vorname' name="vorname" id="vorname" onChange={(e) => setData({...data, vorname: e.target.value})} />
        <input className="p-3 border border-gray-300 rounded-md drop-shadow-md" type="text" placeholder='Nachname' name="nachname" id="nachname" onChange={(e) => setData({...data, nachname: e.target.value})} />
          
          <input className="p-3 border border-gray-300 rounded-md drop-shadow-md" type="email" placeholder='Email' name="email" id="email" onChange={(e) => setData({...data, email: e.target.value})} />
          <input className="p-3 border border-gray-300 rounded-md drop-shadow-md" type="password" placeholder='Passwort' name="password" id="password" onChange={(e) => setData({...data, password: e.target.value})} />
          <input className="p-3 border border-gray-300 rounded-md drop-shadow-md" type="password" placeholder='Passwort wiederholen' name="password" id="passwordRepeat" onChange={(e) => setData({...data, passwordRepeat: e.target.value})} />
          <div className='grid grid-cols-8 max-w-[500px]'>
            <input className='m-auto' type='checkbox' required={true} checked={data.agb} name="agb" id="agb" onChange={() => {setData({...data, agb: !data.agb})}} />
            <label htmlFor="agb" className='col-span-7'> Ich akzeptiere die <a href="/" className='text-[#248232] hover:underline'>AGB</a> und <a href="/" className='text-[#248232] hover:underline'>Datenschutzbestimmungen</a></label>
          </div>
          <button className='bg-[#2BA84A] hover:bg-[#248232] drop-shadow-xl border border-black text-white w-[300px] rounded-md font-medium mx-auto px-6 py-3 z-[0]' type="submit">Registrieren</button>
        </form>
        <div className='my-6'>oder</div>
          <div>
            <FcGoogle onClick={handleGoogleSignUp} className='inline-block hover:cursor-pointer hover:drop-shadow-md' size={40} />
          </div>
        <div className='mt-6'>Du hast schon einen Account? <a href="/user" className='text-[#248232] hover:underline'>Einloggen</a></div>
        <div className='my-1'>Du bist ein Veranstalter? <a href="/signup/organizer" className='text-[#248232] hover:underline'>Hier registrieren</a></div>
      </div>
    </div>
    )
  }
  
  export default SignupUserPage