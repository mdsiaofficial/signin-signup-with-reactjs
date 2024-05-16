import React, { useState, useEffect, act } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLock } from '@fortawesome/free-solid-svg-icons';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { faIdCard } from "@fortawesome/free-solid-svg-icons";
import { faSquarePhone } from "@fortawesome/free-solid-svg-icons";
import { faListOl } from "@fortawesome/free-solid-svg-icons";
// <FontAwesomeIcon icon={faUser} />
// <FontAwesomeIcon icon={faEnvelope} />
// <FontAwesomeIcon icon={faLock} />
export default function SignInSignUp() {

  const [action, setAction] = useState("SignUp");

  return (
    <>
      {/* header */}
      <section className="m-3">
        <h1 className="text-primary font-extrabold text-4xl text-center">{action}</h1>

        
      </section>

      {/* input section */}
      <section className="">
        <form
          onSubmit={(e) => e.preventDefault()}
          className="flex flex-col m-5 items-center justify-center"
        >

          <div className="flex gap-3 bg-slate-200 pt-16 p-3 px-16">
            <button className="bg-header h-12 w-12 hover:bg-headerHover trans">
              <FontAwesomeIcon className="h-6 w--6" icon={faUser} />
            </button>
            <input
              className="bg-header/10 w-[26rem] placeholder:capitalize hover:ring-1 hover:ring-header p-3 placeholder:font-semibold"
              type="text"
              placeholder="Enter your Full Name"
              required
            />
          </div>

          <div className="flex gap-3 bg-slate-200 p-3 px-16">
            <button className="bg-header h-12 w-12 hover:bg-headerHover trans">
              <FontAwesomeIcon className="h-6 w--6" icon={faIdCard} />
            </button>
            <input
              className="bg-header/10 w-[26rem] placeholder:capitalize hover:ring-1 hover:ring-header p-3 placeholder:font-semibold"
              type="number"
              placeholder="Enter your City University Student ID"
              required
            />
          </div>

          <div className="flex gap-3 bg-slate-200 p-3 px-16">
            <button className="bg-header h-12 w-12 hover:bg-headerHover trans">
              <FontAwesomeIcon className="h-6 w--6" icon={faListOl} />
            </button>
            <input
              className="bg-header/10 w-[26rem] placeholder:capitalize hover:ring-1 hover:ring-header p-3 placeholder:font-semibold"
              type="number"
              placeholder="Enter your City University Batch no."
              required
            />
          </div>

          <div className="flex gap-3 bg-slate-200 p-3 px-16">
            <button className="bg-header h-12 w-12 hover:bg-headerHover trans">
              <FontAwesomeIcon className="h-6 w--6" icon={faSquarePhone} />
            </button>
            <input
              className="bg-header/10 w-[26rem] placeholder:capitalize hover:ring-1 hover:ring-header p-3 placeholder:font-semibold"
              type="tel"
              placeholder="Enter your Phone No."
              required
            />
          </div>

          <div className="flex gap-3 bg-slate-200 p-3 px-16">
            <button className="bg-header h-12 w-12 hover:bg-headerHover trans">
              <FontAwesomeIcon className="h-6 w--6" icon={faEnvelope} />
            </button>
            <input
              className="bg-header/10 w-[26rem] placeholder:capitalize hover:ring-1 hover:ring-header p-3 placeholder:font-semibold"
              type="email"
              placeholder="Enter your email"
              required
            />
          </div>

          <div className="flex gap-3 bg-slate-200 pb-16 p-3 px-16">
            <button className="bg-header h-12 w-12 hover:bg-headerHover trans">
              <FontAwesomeIcon className="h-6 w--6" icon={faLock} />
            </button>
            <input
              className="bg-header/10 w-[26rem] placeholder:capitalize hover:ring-1 hover:ring-header p-3 placeholder:font-semibold"
              type="password"
              placeholder="Enter your password"
              required
            />
          </div>

          

          <section className="flex">
            <div onClick={() =>{
              setAction("SignUp")
            }} className={action === "SignIn" ? "SignIn" : "submit"}>
              <button className="bg-header flex gap-3 p-3 m-7 hover:bg-headerHover trans">
                <h1 className="font-bold">SignUp</h1>
                {/* <FontAwesomeIcon className="h-6 w--6" icon={faPaperPlane} /> */}
              </button>
            </div>

            <div onClick={() =>{
              setAction("SignIn")
            }} className={action === "SignUp" ? "SignUp" : "submit"}>
              <button className="bg-gray-400 flex gap-3 p-3 m-7 hover:bg-headerHover trans">
                <h1 className="font-bold">SignIn</h1>
                {/* <FontAwesomeIcon className="h-6 w--6" icon={faPaperPlane} /> */}
              </button>
            </div>
          </section>

          <section>
            <h3>Lost your password?</h3>
            <a href="">Reset here!</a>
          </section>
        </form>


      </section>
    </>
  )
}

