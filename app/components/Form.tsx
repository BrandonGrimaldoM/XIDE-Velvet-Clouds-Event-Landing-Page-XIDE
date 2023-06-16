export default function Form(){
    return(
       <form>
        <p className="text-xs py-2">Full name</p>
        <input type="text" placeholder="Full name" className="bg-white bg-opacity-[0.04] w-full h-9 pl-3 mb-5 outline-none"/>

        <p className="text-xs py-2">Email</p>
        <input type="text" placeholder="Email" className="bg-white bg-opacity-[0.04] w-full h-9 pl-3 mb-5 outline-none"/>

        <p className="text-xs py-2">Phone</p>
        <input type="text" placeholder="Phone" className="bg-white bg-opacity-[0.04] w-full h-9 pl-3 mb-5 outline-none"/>

        <p className="text-xs py-2">Message</p>
        
        <textarea name="messase" placeholder="Message" className="bg-white bg-opacity-[0.04] w-full h-44 p-3 mb-5 outline-none resize-none" ></textarea>

        
          <button type="submit" className="bg-[#00FF85] w-full rounded-md p-3 my-1 lg:w-auto lg:px-9">
            <p className="uppercase text-black font-bold text-sm">submit</p>
          </button>
        

       </form>
    )
}