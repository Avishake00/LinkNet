import Header from '@/components/Header'


export default function Home() {
  return (
   <main>
    <section className='p-6 pt-16 max-w-4xl mx-auto'>
      <div className='max-w-md mb-8'>
      <h1 className='text-5xl font-bold'>Your One Link <br/> For Everything</h1>
      <h2 className='text-gray-500 text-xl mt-6'>
        Share your links,social profiles,contact info and more on one page</h2>
      </div>

      <form className='inline-flex items-center shadow-lg shadow-gray-400 '>
        <span className='bg-white py-4 pl-4 px-1'>
          LinkNet.to/
        </span>
        <input type='text' className='py-4' placeholder=' username'/>
        <button type='submit' className='bg-blue-500 text-white rounded-sm px-4 py-4'>
          Join For Free
        </button>
      </form>

    </section>
   </main>
  )
}
