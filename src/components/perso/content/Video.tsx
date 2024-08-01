const Video = () => {
  return (
    <div>
      <div className="bg-white">
        <div className="mx-auto max-w-5xl px-4 py-24 md:py-16 sm:px-6 lg:px-8">
          <h2 className="text-5xl font-bold tracking-tight text-slate-900 text-center leading-[3rem]">
            Devolopper votre activité en étant accompagné
          </h2>
          <div className="rounded-md overflow-hidden mt-16">
            <iframe
              width="100%"
              height="415"
              src="https://www.youtube.com/embed/T61tIrl5sks?si=81co6LtbeJFbRYP2&amp;controls=0"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Video;
