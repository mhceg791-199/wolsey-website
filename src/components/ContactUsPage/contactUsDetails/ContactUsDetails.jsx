import map from "../../../assets/world-map-gold.jpg";

function ContactMapDetails() {
  return (
    <div className=" w-full bg-mainDark text-white rounded-b-sm overflow-hidden shadow-lg border border-mainGold/30">
      <div className="relative w-full border-8 bg-mainDark border-mainDark">
        <img src={map} alt="map" className="w-full object-cover h-64 md:h-72" />
        <div className="absolute inset-0 bg-mainDark/50 to-transparent pointer-events-none"></div>
      </div>

      <div className="py-6 px-6">
        <h3 className="text-2xl font-semibold text-mainGold pb-4 border-b border-mainGold/30">
          CONTACT US
        </h3>

        {/* Address */}
        <div className="flex items-start gap-4 mt-6">
          <i className="fa-solid fa-location-dot text-mainGold text-2xl mt-1"></i>
          <div>
            <h4 className="text-lg font-semibold">Address</h4>
            <a
              href="https://www.google.com/maps/place/1302+4+St+SW,+Calgary,+AB+T2R+0X8%D8%8C+%D9%83%D9%86%D8%AF%D8%A7%E2%80%AD/@51.04038,-114.071582,18z/data=!4m6!3m5!1s0x5371701da500ff39:0xeae3aa8bbbbe6e56!8m2!3d51.0405048!4d-114.0712558!16s%2Fg%2F11bw42vbb3?hl=ar&entry=ttu&g_ep=EgoyMDI1MTExMi4wIKXMDSoASAFQAw%3D%3D"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 text-md hover:text-mainGold transition-colors duration-300"
            >
              Calgary office #200, 1302 4th Street SW
            </a>
          </div>
        </div>

        {/* Email */}
        <div className="flex items-start gap-4 mt-5">
          <i className="fa-solid fa-earth-americas text-mainGold text-2xl mt-1"></i>
          <div>
            <h4 className="text-lg font-semibold">Do you have a Question?</h4>
            <a
              href="mailto:info@wolsey.ca"
              className="text-gray-400 text-md hover:text-mainGold transition-colors duration-300"
            >
              info@wolsey.ca
            </a>
          </div>
        </div>

        {/* <div className="flex items-start gap-4 mt-5">
          <i className="fa-solid fa-phone text-mainGold text-2xl mt-1"></i>
          <div>
            <h4 className="text-lg font-semibold">Phone</h4>
            <a
              href="tel:+14034524711"
              className="text-gray-400 text-md hover:text-mainGold transition-colors duration-300"
            >
              +1 403-452-4711
            </a>
          </div>
        </div> */}
      </div>
    </div>
  );
}

export default ContactMapDetails;
