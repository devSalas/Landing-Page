import {Link} from 'wouter'

export default function VideoCardSmall({id, title, video, userId}) {

  return (
    <Link href={`/video/${id}`} >
      <div className="flex gap-4 items-center">
        <video className="rounded-xl aspect-video w-48" src={video}></video>
        <section>
          <h4 className='text-lg'>{title}</h4>
          <div className='flex items-center gap-2'>
            <img className='bg-red-500 w-6 h-6 rounded-full' src={""} alt="" />
            <p className='text-neutral-500'>{userId}</p>
          </div>
          <p className='text-neutral-500'>16,426M View now</p>
        </section>
      </div>
    </Link>
  )
}
