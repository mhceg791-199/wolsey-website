import { Link } from "react-router-dom";
import SocialMedia from "./SocialMedia/SocialMedia";

const linksTop = [
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/projects", label: "Projects" },
  { to: "/career", label: "Career" },
];

const linksBottom = [
  { to: "/contact-us", label: "Contact Us" },
  { to: "/privacy-policy", label: "Privacy Policy" },
  { to: "/terms-conditions", label: "Terms & Conditions" },
];

function Footer() {
  return (
    <div className="bg-mainDark">
      <footer className="grid md:grid-cols-10 grid-cols-1 px-5 py-3 gap-5 bg-mainDark text-white">
        
        {/* Logo */}
        <div className="md:col-span-2 flex justify-center items-center lg:px-8">
          <Link to="/" className="block">
            <img
              className="object-contain w-[75%] md:w-full m-auto"
              src="/images/logo2.webp"
              loading="lazy"
              alt="logo"
            />
          </Link>
        </div>

        {/* Links */}
        <div className="md:col-span-5 flex flex-col items-center md:items-start justify-center">
          
          <nav className="flex flex-wrap justify-center md:justify-start gap-1 font-semibold">
            {linksTop.map((l, i) => (
              <Link key={i} to={l.to} className="me-1 hover:opacity-80">
                {l.label} {i < linksTop.length - 1 && "|"}
              </Link>
            ))}
          </nav>

          <nav className="flex flex-wrap justify-center md:justify-start gap-1 mt-1 font-semibold">
            {linksBottom.map((l, i) => (
              <Link key={i} to={l.to} className="me-1 hover:opacity-80">
                {l.label} {i < linksBottom.length - 1 && "|"}
              </Link>
            ))}
          </nav>

          <p className="text-sm mt-2 text-center md:text-left">
            © 2024 Wolsey Structural Engineering, All rights reserved
          </p>
        </div>

        {/* Social */}
        <div className="md:col-span-3 flex justify-evenly items-center">
          <SocialMedia />
        </div>
      </footer>

      {/* SEO Hidden Paragraph */}
      <div className="text-[11px] opacity-60 mt-2 px-5 max-w-4xl mx-auto leading-relaxed pointer-events-none select-none text-mainDark">
        <p>
          Wolsey Structural Engineering is sometimes referred to or misspelled as
          Woolsey, Woseley, Wolsy, or Woolsy Engineering. All these variations point
          to the same company specializing in structural engineering, sustainable
          design solutions, building assessments, concrete and steel structure
          analysis, and engineering services across Canada and the USA.
        </p>
      </div>
    </div>
  );
}

export default Footer;

// import { Link } from "react-router-dom";
// import SocialMedia from "./SocialMedia/SocialMedia";

// const linksTop = [
//   { to: "/about", label: "About" },
//   { to: "/services", label: "Services" },
//   { to: "/projects", label: "Projects" },
//   { to: "/career", label: "Career" },
// ];

// const linksBottom = [
//   { to: "/contact-us", label: "Contact Us" },
//   { to: "/privacy-policy", label: "Privacy Policy" },
//   { to: "/terms-conditions", label: "Terms & Conditions" },
// ];

// function Footer() {
//   return (
//     <footer className="grid md:grid-cols-10 grid-cols-1 px-5 py-3 gap-5 bg-mainDark text-white">
      
//       {/* Logo */}
//       <div className="md:col-span-2 flex justify-center items-center lg:px-8">
//         <Link to="/" className="block">
//           <img
//             className="object-contain w-[75%] md:w-full m-auto"
//             src="/images/logo2.webp"
//             loading="lazy"
//             alt="logo"
//           />
//         </Link>
//       </div>

//       {/* Links */}
//       <div className="md:col-span-5 flex flex-col items-center md:items-start justify-center">
        
//         <nav className="flex flex-wrap justify-center md:justify-start gap-1 font-semibold">
//           {linksTop.map((l, i) => (
//             <Link key={i} to={l.to} className="me-1 hover:opacity-80">
//               {l.label} {i < linksTop.length - 1 && "|"}
//             </Link>
//           ))}
//         </nav>

//         <nav className="flex flex-wrap justify-center md:justify-start gap-1 mt-1 font-semibold">
//           {linksBottom.map((l, i) => (
//             <Link key={i} to={l.to} className="me-1 hover:opacity-80">
//               {l.label} {i < linksBottom.length - 1 && "|"}
//             </Link>
//           ))}
//         </nav>

//         <p className="text-sm mt-2 text-center md:text-left">
//           © 2024 Wolsey Structural Engineering, All rights reserved
//         </p>
//       </div>

//       {/* Social */}
//       <div className="md:col-span-3 flex justify-evenly items-center">
//         <SocialMedia />
//       </div>
//     </footer>
//   );
// }

// export default Footer;