function App() {
  return (
    <div>
      {/* First Section */}
      <div
        className="relative grid h-screen grid-cols-1 bg-cover bg-center bg-no-repeat text-white md:grid-cols-2"
        style={{
          backgroundImage: `url(${process.env.PUBLIC_URL}/assets/classroom.webp)`,
        }}
      >
        <div className="absolute bottom-0 left-0 right-0 top-0 bg-gray-500 opacity-65"></div>
        <div>
          {/* Logo */}
          <div className="relative flex items-baseline pl-4 pt-20">
            <img
              className="h-14"
              src={`${process.env.PUBLIC_URL}/assets/star.webp`}
              alt="star"
            />
            <h2 className="text-2xl font-bold">EXPERTE, SIMON</h2>
          </div>

          {/* Hero Text */}
          <div className="relative pl-4 pt-20 text-4xl font-bold md:text-6xl">
            Game On with Responsibility and Kindness.
          </div>

          {/* Hero Paragraph */}
          <div className="relative pl-4 pt-4 text-lg md:text-xl">
            Whether you're looking for a responsible adult, gamer, hard worker
            or a best friend, here's your guy.
          </div>
        </div>
        <div className="relative text-center">
          <button className="w-32 bg-blue-500 p-4 md:mt-20">Skills</button>
        </div>
      </div>

      {/* Second Section */}
      <div className="md:grid md:h-screen md:grid-cols-2">
        <div>
          <img
            className="ml-auto mr-auto p-4 md:h-2/3 md:w-full"
            src={`${process.env.PUBLIC_URL}/assets/coffee.webp`}
            alt="coffee"
          />
        </div>
        <div className="md:pt-28">
          {/* About Title */}
          <div className="p-4 text-3xl font-semibold">About Simon</div>

          {/* About Text */}
          <div className="p-4 text-lg">
            Friendly individual with an indomitable will and patience of a
            Saint. Originates from Germany and enjoys to travel internationally.
            Armed with a plethora of skills at his disposal, he is an
            exceptional person making him a great role model.
          </div>

          {/* About Contact Button */}
          <div className="p-4">
            <button className="w-32 bg-blue-500 p-4 text-white">
              Get In Touch
            </button>
          </div>
        </div>
      </div>

      {/* Third Section */}
      <div className="m-4 text-center">
        <h2 className="p-4 text-3xl font-semibold">Skills & Abilities</h2>
        <div className="md:grid md:grid-cols-3">
          <div className="p-8">
            <img
              className="ml-auto mr-auto"
              src={`${process.env.PUBLIC_URL}/assets/remote_control.webp`}
              alt="remote control"
            />
            <h4 className="m-4 text-xl font-bold">Train Operation</h4>
            <p>Expertise in efficient and safe train operations.</p>
          </div>
          <div className="p-8">
            <img
              className="ml-auto mr-auto"
              src={`${process.env.PUBLIC_URL}/assets/baking.webp`}
              alt="baking"
            />
            <h4 className="m-4 text-xl font-bold">Makin' & Bakin'</h4>
            <p>From scratch to scrumptious - baking at its best.</p>
          </div>
          <div className="p-8">
            <img
              className="ml-auto mr-auto"
              src={`${process.env.PUBLIC_URL}/assets/french_toast.webp`}
              alt="french toast"
            />
            <h4 className="m-4 text-xl font-bold">Culinary Experte</h4>
            <p>Demonstrating a mastery of culinary arts and techniques.</p>
          </div>
        </div>
      </div>

      {/* Fourth Section */}
      <div className="p-2 md:grid md:h-screen md:grid-cols-2">
        {/* Description Text */}
        <div className="ml-auto mr-auto w-72 text-2xl font-bold md:w-full md:pl-4 md:text-4xl">
          The embodiment of <span className="text-blue-400">chill</span> and{" "}
          <span className="text-blue-400">spontaneous.</span>
          Will go from relaxing on his bed to travelling to Scandinavian Regions
          within seconds. Really unpredictable.
        </div>

        {/* Images */}
        <div className="md:grid md:grid-cols-2">
          <img
            className="ml-auto mr-auto h-60 w-60 p-4 md:mr-0 md:mt-36"
            src={`${process.env.PUBLIC_URL}/assets/coffee.webp`}
            alt="coffee"
          />
          <img
            className="ml-auto mr-auto h-60 w-60 p-4 md:ml-0 md:h-96"
            src={`${process.env.PUBLIC_URL}/assets/driving.webp`}
            alt="chilling"
          />
        </div>
      </div>

      {/* Fifth Section */}
      <div>
        {/* Images */}
        <div className="md:grid md:grid-cols-3">
          <img
            className="ml-auto mr-auto h-64 w-full p-4"
            src={`${process.env.PUBLIC_URL}/assets/train_drive.webp`}
            alt="train drive"
          />
          <img
            className="ml-auto mr-auto h-64 w-full p-4"
            src={`${process.env.PUBLIC_URL}/assets/control_panel.webp`}
            alt="control panel"
          />
          <img
            className="ml-auto mr-auto h-64 w-full p-4"
            src={`${process.env.PUBLIC_URL}/assets/consoles.webp`}
            alt="consoles"
          />
        </div>

        {/* Contact Information */}
        <div className="md:grid md:grid-cols-2 md:p-20">
          <h2 className="p-4 text-3xl font-bold">Contact Me</h2>
          <div>
            <div className="pl-4 font-bold text-blue-400">P.O. BOX</div>
            <div className="pb-4 pl-4">Somewhere in Germany</div>
            <div className="pl-4 font-bold text-blue-400">Email Address</div>
            <div className="pb-4 pl-4">simon@gamingexperte.com</div>
            <div className="pl-4 font-bold text-blue-400">Phone Number</div>
            <div className="pb-4 pl-4">(123) 456 7890</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
