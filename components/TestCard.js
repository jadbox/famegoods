import React, { useState, useEffect } from 'react';
import Link from 'next/link';

export default function TestCard({ tags, title, video, gif, file }) {

// Sample file retrieval logic

  // const [images, setImages] = useState([]);
  // const [files, setFiles] = useState([]);
  // const [isLoading, setIsLoading] = useState(true);
  // const [term, setTerm] = useState('');
  //
  // useEffect(() => {
  //   if (file) {
  //     setFiles(...file.file)
  //   } else {
  //     setFiles(`https://source.unsplash.com/random`)
  //   }
  // }, []);

  //  Parent css removed: h-auto max-w-screen-sm

  return (
    <div className="container snap snap-y snap-mandatory p-8 ">
      <div className="snap-start always-stop max-w-sm rounded shadow-lg">
        <img className="w-full" src={gif} alt="Sunset in the mountains" />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{title}</div>

        </div>
        <div className="flex justify-between px-6 py-4">
          <Link href="/player">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mr-2">
              3 $TINGLES
            </button>
          </Link>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">{tags}</span>
        </div>
      </div>
    </div>
  )
}

// <section className="relative snap snap-y snap-mandatory">
//   <div className="snap-start always-stop rounded overflow-hidden shadow-xl my-8 mx-4">
//     <img src={gif} className="h-48 w-full object-cover" />
//     <div className="absolute bottom-0 left-0 px-6 py-4">
//       <div className="font-bold text-xl mb-2 text-white">{title}</div>
//       <div className="flex justify-between items-center py-4">
//         <Link href="/player">
//         <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mr-2">
//           3 $TINGLES
//         </button>
//         </Link>
//
//         <div className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-black mr-2">Tags: {tags}</div>
//       </div>
//     </div>
//   </div>
// </section>
