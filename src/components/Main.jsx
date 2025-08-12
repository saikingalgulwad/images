import React, { useEffect, useState } from 'react'

function Main({ startTransition, ispending, count }) {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);

  function getPage() {
    setPage(p => p + 1);
  }
  function backPage() {
    setPage(p => p - 1);
  }
  function getData() {
    startTransition(async () => {
      const images = await fetch(`https://picsum.photos/v2/list?page=${page}&limit=${count}`);
      const res = await images.json();
      setData(res);
    })
  }
  useEffect(() => {
    getData();
  }, [count]);
  useEffect(()=>{
   getData();
  },[page])


  return (
    <div className='flex flex-col gap-3 justify-center items-center'> 
        <h1 id='top' className='text-3xl font-extrabold'>{`Page no : ${page}`}</h1> 
      <div className='grid md:grid-cols-3 grid-cols-2 justify-between w-[90vw] gap-6'>
      {
        data.map((item, i) => (
          <div key={item.id} className='p-3'>
            {ispending ? <div className={`w-[300px] rounded-lg overflow-hidden bg-white shadow`}>
              {/* Image placeholder */}
              <div className={`h-[300px] bg-gray-300 relative overflow-hidden`}>
                <div className="absolute inset-0 bg-gradient-to-r from-gray-300 via-gray-200 to-gray-300 animate-shimmer" />
              </div>

              {/* Title placeholder */}

            </div> : <img className='rounded-2xl mb-2' src={item.download_url} height={300} width={300} alt={item.author} />}
            {ispending ? <div className="p-3">
              <div className="h-4 bg-gray-300 rounded w-3/4 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-gray-300 via-gray-200 to-gray-300 animate-shimmer" />
              </div>
            </div> : <div className='flex justify-between items-center md:w-[250px] mx-2 '><h1 className='text-[14px] font-bold'>{item.author}</h1> <p className='text-shadow-violet-200'>{`#${i}`}</p></div>}

          </div>
        ))
      }

    </div >
      <div >
        <a className='flex justify-center items-center gap-11 h-26' href="#top">
        <button onClick={backPage} className='text-white bg-amber-800 hover:bg-amber-400 rounded-2xl w-20 p-3 cursor-pointer '>back</button>
        <button onClick={getPage} className='text-white bg-blue-700 hover:bg-blue-500 rounded-2xl w-20 p-3 cursor-pointer '>Next</button>
        </a>
      </div>
    </div>

  )
}

export default Main