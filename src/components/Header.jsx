export default function Header() {
  return (
    <header className="grid md:grid-cols-2 gap-8 ">
      <div className='md:text-left text-center'>
        <h2 className="md:text-6xl text-5xl">PLAY, COMPLETE, FOLLOW POPULAR STREAMERS</h2>
        <p className="mt-4 text-white/75">the best streamers pather here to have a good time, be among us, join us!</p>
      </div>
      <div className="">
        <video controls loop autoPlay className="rounded-xl min-w-full aspect-video" src="videos/001.mp4"></video>
        <figcaption className="py-2 text-neutral-300">Battle for Street work</figcaption>
      </div>
    </header>
  )
}
