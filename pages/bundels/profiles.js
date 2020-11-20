import React from 'react';
import TPPCard from "../../components/tpp/TPPCard"
import { Icon } from '@iconify/react';
import filterSolid from '@iconify/icons-la/filter-solid';



const bundelHome = () => {
  return (
    <div className="flex flex-col justify-center items-center w-full">
      <img src="https://images.unsplash.com/photo-1538582709238-0a503bd5ae04?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"
        className="w-full bg-gray-300 h-48 w-full rounded-lg bg-cover bg-fixed bg-center">
      </img>

      <div className="bg-white bg-opacity-50 text-black rounded-xl shadow border-2 border-gray-200 -mt-20 py-4 px-4 w-10/12 lg:w-3/5">
        <div className="flex flex-wrap items-center">
          <div className="w-1/4 text-center hidden md:block">
            <div className="relative shadow mx-auto h-24 w-24 border-white rounded-full overflow-hidden border-4">
              <img className="object-cover w-full h-full" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=200&q=80" />
            </div>
          </div>
          <div className="w-full sm:w-1/2 md:w-2/5 text-left">
            <div className="p-2 xl:px-2 md:py-2">
              <h3 className="text-2xl font-karla">DFAME Launch Bundel</h3>
              <p className="text-sm text-gray font-karla">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            </div>
          </div>
          <div className="w-full sm:w-1/2 md:w-1/3 px-2 text-center">
            <div className="p-2 xl:px-5 md:py-2 item-center">
              <button className="block w-full h-12 py-2 rounded-full text-black bg-white border-2 border-gray-200 font-karla text-sm font-medium uppercase tracking-wider shadow-md hover:shadow hover:bg-white hover:text-black focus:shadow-none focus:outline-none transition duration-150 ease-in-out mb-3">Buy this bundel</button>
            </div>
          </div>
        </div>
      </div >
    </div>
  );
};

export default bundelHome