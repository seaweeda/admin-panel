const Banner = () => {
  return (
    <div className="container mt-32">
      <div className="grid lg:grid-cols-[66%, 34%] gap-4 pr-[15px]">
        <div className="h-[200px] md:h-[260px] bg-[url(/product-banner-1.jpg)] bg-cover bg-center rounded-x1 p-8 md:p-16">
          <p className="text-topHeadingSecondary text-x1 font-medium"> </p>
          <h2 className="text-topHeadingPrimary font-bold text-x1 sm:text-[40px] max-w-[240px]">
            {" "}
          </h2>
          <a
            className="inline-block mt-6 hover:text-accent text-topHeadingSecondary font-medium"
            href="#"
          ></a>
        </div>
        <div className="h-[260px] bg-[url(/product-banner-2.jpg)] bg-right rounded-x1 hidden lg:block"></div>
      </div>
    </div>
  );
};

export default Banner;