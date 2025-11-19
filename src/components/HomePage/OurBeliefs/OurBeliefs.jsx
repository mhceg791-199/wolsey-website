import SectionHeader from "../../shared/SectionHeader/SectionHeader";

export default function OurBeliefs() {
  return (
    <section className="bg-white py-8 md:py-20">
      <div className="max-w-5xl mx-auto px-6 text-center">
        {/* Title */}
        <h2 className="heading font-bold text-mainDark mb-6 tracking-wide">
          <SectionHeader firstWord="Our Core Beliefs"/>
        </h2>
        {/* Text */}
        <p className="text-gray-600 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">
          We stand by a philosophy that blends technical mastery with a
          human-centered approach. This is why our clients trust us.
        </p>
      </div>
    </section>
  );
}
