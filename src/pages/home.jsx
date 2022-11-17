import VideoCard from "../components/VideoCard";

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
          <div className="flex items-center justify-between py-4">
            <h2 className="text-xl">Strams of the day</h2>
            <button className="h-10 w-24 bg-neutral-800 rounded-full">View all</button>
          </div>

          <article className="flex overflow-x-scroll flex-col flex-wrap h-72 gap-4">
            <VideoCard title="Street work" video={"videos/001.mp4"} user="Mr.Rick Tomson" image={"https://randomuser.me/api/portraits/men/27.jpg"} />
            <VideoCard title="Jugando GTA" video={"videos/002.mp4"} user="Bob gamer450" image={"https://randomuser.me/api/portraits/men/81.jpg"}/>
            <VideoCard title="Street work" video={"videos/003.mp4"} user="Milena Foster" image={"https://randomuser.me/api/portraits/women/63.jpg"}/>
            <VideoCard title="Street work" video={"videos/004.mp4"} user="Mr.Rick Tomson" image={"https://randomuser.me/api/portraits/men/27.jpg"}/>
            <VideoCard title="Street work" video={"videos/005.mp4"} user="Alex123" image={"https://randomuser.me/api/portraits/men/73.jpg"}/>
            
          </article>
            
        </section>
      </main>
    </>
  );
}

export default Home;
