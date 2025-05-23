const Banner = ({ title }) => {
  return (
    <div
      className="relative bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "url('../images/heroBg.jpg')",
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-60 z-0" />

      {/* Centered Content */}
      <div className="relative z-10 flex items-center justify-center h-[40vh]">
        <h1 className="text-white text-2xl md:text-4xl font-bold text-center pt-10">
          {title}
        </h1>
      </div>
    </div>
  );
};

export default Banner;
