"use client"
import Image from "next/image";
import { useSession } from "next-auth/react";
import { usePathname } from "next/navigation";
import Link from "next/link";

const ShowCard = ({ show, handleEdit, handleDelete }) => {
  const { data: session } = useSession();
  const pathName = usePathname();
  const authorizedEmails =  ["ignaluna98pb@gmail.com", "lualeva17@gmail.com", 
  "terriproduccionescontacto@gmail.com", "terriproducciones@gmail.com"];
  // process.env.AUTHORIZED_EMAILS.split(",")

  return (
    <article className="flex-center max-md:flex-col h-full py-9 max-md:px-16">
      <div className="max-md:hidden h-full flex flex-col justify-between items-center md:mr-2 border border-green-900 px-4 rounded-lg bg-green-900 bg-opacity-30">
        <div className="flex flex-col items-center w-full" >
          <Image
            src="/assets/icons/show/ubic2.svg"
            alt="Ubicación"
            width={50}
            height={50}
          />
          <div className="border-b border-green-900 flex-grow w-full my-5"></div>
          <p className="text-white">{show.location}</p>
        </div>
        <Link className="flex flex-col items-center w-full" href={show.eventLink} target="_blank" rel="noopener noreferrer">
          <Image
            src="/assets/icons/show/link3.svg"
            alt="Ubicación"
            width={50}
            height={50}
          />
          <div className="border-b border-green-900 flex-grow w-full my-5"></div>
          <p className="text-white">Link</p>
        </Link>
        <div className="flex flex-col items-center w-full">
          <Image
            src="/assets/icons/show/link2.svg"
            alt="calend"
            width={50}
            height={50}
          />
          <div className="border-b border-green-900 flex-grow w-full my-5"></div>
          <p className="text-white">{show.date}</p>
        </div>
      </div>
      <img
        src={show.flyer}
        alt='show_flyer'
        width={500}
        height={700}
        className="rounded-lg h-full transition duration-500 ease-in-out border border-green-900" />
      <div className="md:hidden mt-2 flex w-full py-6 justify-between items-center border border-green-900 rounded-lg bg-green-900 bg-opacity-30">
        <Link className="flex flex-col items-center w-full" href={`https://www.google.com/maps?q=${show.location}`} target="_blank" rel="noopener noreferrer">
          <Image
            src="/assets/icons/show/ubic2.svg"
            alt="Ubicación"
            width={50}
            height={50}
          />
        </Link>
        <Link className="flex flex-col items-center w-full" href={show.eventLink} target="_blank" rel="noopener noreferrer">
          <Image
            src="/assets/icons/show/link3.svg"
            alt="Ubicación"
            width={50}
            height={50}
          />
        </Link>
        <div className="flex flex-col items-center w-full">
          <Image
            src="/assets/icons/show/link2.svg"
            alt="calend"
            width={50}
            height={50}
          />
          <p className="text-white">{show.date}</p>
        </div>
      </div>

      {authorizedEmails.includes(session?.user.email)  && pathName === "/profile" && (
        <button onClick={() => handleDelete(show)} className='mt-5 flex-center gap-4 h-full  pt-3 border border-green-900 px-4 rounded-lg bg-green-900 bg-opacity-30'>
          {/* <p
            className='font-jura text-sm green_gradient cursor-pointer'
            onClick={handleEdit}
          >
            Edit
          </p> */}
          <p
            className='font-jura text-sm orange_gradient cursor-pointer'
          >
            Delete
          </p>
        </button>
      )}
    </article >
  );
};

export default ShowCard;
