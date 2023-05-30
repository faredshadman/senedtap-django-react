import Meeting from "../../assets/images/meeting.svg";
const SearchHero = () => {
  return (
    <section className="bg-blue-100 pt-20 lg:px-16 px-5">
      <div className="flex flex-col lg:flex-row">
        <div className="lg:w-1/2 lg:pr-10 py-20">
          <h1 className="text-3xl lg:text-5xl font-bold text-blue-900">
            AXTARDIĞINIZ SƏNƏDİ <br /> BİR KLİKLƏ TAPIN!
          </h1>
          <div className="flex flex-col sm:flex-row w-full mt-10 gap-5">
            <input
              className="border rounded-md outline-none flex-1 pl-2 py-1"
              placeholder="Axtar..."
            />
            <button className="bg-blue-700 text-white px-8  py-1 rounded-md">
              Tap
            </button>
          </div>
        </div>
        <div className="flex flex-1 justify-center lg:justify-end">
          <img src={Meeting} alt="Meeting svg" />
        </div>
      </div>
    </section>
  );
};

export default SearchHero;
