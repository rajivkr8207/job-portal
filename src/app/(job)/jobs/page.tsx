import Link from 'next/link'

const jobs =async () => {

  // this code is only for showing loading page 
  await new Promise((resolve)=>{
    setTimeout(() => {
      resolve('resoled')
    }, 2000);
  })
  return (
    <div  className="h-screen flex items-center justify-center gap-3">

    <p className='text-2xl text-center font-semibold'>jobs
    </p>
    <Link href='/jobs/12' className="px-6 py-2 bg-purple-600 text-white rounded shadow hover:bg-purple-700 transition">
      View Jobs
    </Link>
    </div>
  )
}

export default jobs