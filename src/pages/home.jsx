const Home = () => {
  return ( 
    <>
      <header className="grid md:grid-cols-2 gap-8">
        <div >
          <h1 className="text-5xl font-bold md:text-left text-center">PLAY, COMPLETE, FOLLOW POPULAR STREAMERS</h1>
          <p className="mt-4 text-white/75">the best streamers pather here to have a good time, be among us, join us!</p>
        </div>
        <div className="">
          <video className="rounded-xl border" src="videoPrueba.mp4"></video>
          <figcaption className="py-2">classrom iestp gilda</figcaption>
        </div>
      </header>
      <main>
        <section>
          <div className="flex items-center justify-between">
            <h2 className="py-4">Strams of the day</h2>
            <button className="h-10 w-24 bg-neutral-800 rounded-full">View all</button>
          </div>
          {/* <article className="gap-4 grid sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4"> */}
          <article className="gap-4 flex flex-wrap h-72 bg-slate-400">
            <div className="max-w-xs">
              <video className="rounded-xl border" src="videoPrueba.mp4"></video>
              <figcaption>Video 1</figcaption>
            </div>
            <div className="max-w-xs">
              <video className="rounded-xl border" src="videoPrueba.mp4"></video>
              <figcaption>Video 1</figcaption>
            </div>
            <div className="max-w-xs">
              <video className="rounded-xl border" src="videoPrueba.mp4"></video>
              <figcaption>Video 1</figcaption>
            </div>
            
            
          </article>
        </section>
      </main>
    </>
   );
}
 
export default Home;
