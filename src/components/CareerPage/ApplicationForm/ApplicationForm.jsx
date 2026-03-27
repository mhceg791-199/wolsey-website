// import { useState } from "react";
// import { Upload, Send, CheckCircle, AlertCircle } from "lucide-react";
// import SectionHeader from "../../shared/SectionHeader/SectionHeader";
// import { API_ENDPOINTS } from "../../../config/api";

// export default function ApplicationForm() {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     position: "",
//     experience: "",
//     portfolio: "",
//     coverLetter: "",
//     siteName: "Wolsey Structural Engineering",
//     siteURL: "https://www.wolsey.ca",
//   });

//   const [resume, setResume] = useState(null);
//   const [isDragging, setIsDragging] = useState(false);
//   const [loading, setLoading] = useState(false);
//   const [success, setSuccess] = useState(false);
//   const [error, setError] = useState(null);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleFileChange = (e) => {
//     if (e.target.files && e.target.files[0]) {
//       setResume(e.target.files[0]);
//     }
//   };

//   const handleDrop = (e) => {
//     e.preventDefault();
//     setIsDragging(false);
//     const file = e.dataTransfer.files[0];
//     if (file && file.type === "application/pdf") {
//       setResume(file);
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError(null);
//     setSuccess(false);
//     setLoading(true);

//     if (!resume) {
//       setError("Please upload your resume (PDF only)");
//       setLoading(false);
//       return;
//     }

//     const data = new FormData();
//     data.append("name", formData.name);
//     data.append("email", formData.email);
//     data.append("phone", formData.phone);
//     data.append("position", formData.position);
//     data.append("experience", formData.experience);
//     data.append("portfolio", formData.portfolio);
//     data.append("coverLetter", formData.coverLetter);
//     data.append("resume", resume);
//     data.append("siteName", "Wolsey Structural Engineering");
//     data.append("siteURL", "https://www.wolsey.ca");

//     try {
//       const res = await fetch(API_ENDPOINTS.submitApplication, {
//         method: "POST",
//         body: data,
//       });

//       const result = await res.json();

//       if (!res.ok) {
//         throw new Error(result.message || "Failed to submit application");
//       }

//       setSuccess(true);

//       // reset form
//       setFormData({
//         name: "",
//         email: "",
//         phone: "",
//         position: "",
//         experience: "",
//         portfolio: "",
//         coverLetter: "",
//         siteName: "Wolsey Structural Engineering",
//         siteURL: "https://www.wolsey.ca",
//       });
//       setResume(null);
//     } catch (err) {
//       setError(err.message || "Something went wrong. Please try again.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   const positions = [
//     "Architect",
//     "Junior Architect",
//     "Interior Designer",
//     "Project Manager",
//     "Draftsman",
//     "Urban Planner",
//     "Other",
//   ];

//   return (
//     <section className="py-20 bg-gray-50">
//       <div className="container mx-auto px-6">
//         <div className="max-w-4xl mx-auto">
//           {/* Section Title */}
//           <div className="text-center mb-12">
//             <h2 className="heading font-bold text-mainDark mb-6 tracking-wide">
//               <SectionHeader firstWord="Tell Us" />
//             </h2>
//             <p className="text-gray-600 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">
//               Submit your application and let's build something great together
//             </p>
//           </div>

//           {/* Application Form */}
//           <form
//             onSubmit={handleSubmit}
//             className="bg-white rounded-2xl shadow-xl p-8 md:p-12"
//           >
//             {/* Personal Information */}
//             <div className="mb-10">
//               <h3 className="text-2xl font-semibold text-mainDark mb-6 tracking-wide">
//                 Personal Information
//               </h3>
//               <div className="grid md:grid-cols-2 gap-6">
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-2">
//                     Full Name *
//                   </label>
//                   <input
//                     type="text"
//                     name="name"
//                     required
//                     value={formData.name}
//                     onChange={handleChange}
//                     className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all"
//                     placeholder="John Doe"
//                   />
//                 </div>
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-2">
//                     Email Address *
//                   </label>
//                   <input
//                     type="email"
//                     name="email"
//                     required
//                     value={formData.email}
//                     onChange={handleChange}
//                     className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all"
//                     placeholder="john@example.com"
//                   />
//                 </div>
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-2">
//                     Phone Number *
//                   </label>
//                   <input
//                     type="tel"
//                     name="phone"
//                     required
//                     value={formData.phone}
//                     onChange={handleChange}
//                     className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all"
//                     placeholder="(305) 123-4567"
//                   />
//                 </div>
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-2">
//                     Desired Position *
//                   </label>
//                   <select
//                     name="position"
//                     required
//                     value={formData.position}
//                     onChange={handleChange}
//                     className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all"
//                   >
//                     <option value="">Select Position</option>
//                     {positions.map((pos) => (
//                       <option key={pos} value={pos}>
//                         {pos}
//                       </option>
//                     ))}
//                   </select>
//                 </div>
//               </div>
//             </div>

//             {/* Professional Details */}
//             <div className="mb-10">
//               <h3 className="text-2xl font-semibold text-mainDark mb-6 tracking-wide">
//                 Professional Details
//               </h3>
//               <div className="space-y-6">
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-2">
//                     Years of Experience *
//                   </label>
//                   <select
//                     name="experience"
//                     required
//                     value={formData.experience}
//                     onChange={handleChange}
//                     className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all"
//                   >
//                     <option value="">Select Experience</option>
//                     <option value="0-1">0-1 years</option>
//                     <option value="1-3">1-3 years</option>
//                     <option value="3-5">3-5 years</option>
//                     <option value="5-10">5-10 years</option>
//                     <option value="10+">10+ years</option>
//                   </select>
//                 </div>
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-2">
//                     Portfolio URL (Optional)
//                   </label>
//                   <input
//                     type="url"
//                     name="portfolio"
//                     value={formData.portfolio}
//                     onChange={handleChange}
//                     className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all"
//                     placeholder="https://yourportfolio.com"
//                   />
//                 </div>
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-2">
//                     Cover Letter / Why Join Us? *
//                   </label>
//                   <textarea
//                     name="coverLetter"
//                     required
//                     value={formData.coverLetter}
//                     onChange={handleChange}
//                     rows={6}
//                     className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all resize-none"
//                     placeholder="Tell us about yourself and why you want to join our team..."
//                   />
//                 </div>
//               </div>
//             </div>

//             {/* Resume Upload */}
//             <div className="mb-10">
//               <h3 className="text-2xl font-semibold text-mainDark mb-6 tracking-wide">
//                 Upload Resume
//               </h3>
//               <div
//                 onDragOver={(e) => {
//                   e.preventDefault();
//                   setIsDragging(true);
//                 }}
//                 onDragLeave={() => setIsDragging(false)}
//                 onDrop={handleDrop}
//                 className={`relative border-2 border-dashed rounded-xl p-12 text-center transition-all ${
//                   isDragging
//                     ? "border-gray-900 bg-gray-50"
//                     : "border-gray-300 hover:border-gray-400"
//                 }`}
//               >
//                 <input
//                   type="file"
//                   accept=".pdf"
//                   onChange={handleFileChange}
//                   className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
//                 />
//                 <Upload className="w-12 h-12 mx-auto mb-4 text-gray-400" />

//                 {resume ? (
//                   <div className="space-y-2">
//                     <p className="text-lg font-medium text-gray-900">
//                       {resume.name}
//                     </p>
//                     <p className="text-sm text-gray-500">
//                       Click or drag to replace
//                     </p>
//                   </div>
//                 ) : (
//                   <div className="space-y-2">
//                     <p className="text-lg font-medium text-gray-900">
//                       Drop your resume here or click to upload
//                     </p>
//                     <p className="text-sm text-gray-500">
//                       PDF format only (Max 5MB)
//                     </p>
//                   </div>
//                 )}
//               </div>
//             </div>

//             {/* Messages */}
//             {error && (
//               <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-center gap-3 text-red-700">
//                 <AlertCircle className="w-5 h-5" />
//                 {error}
//               </div>
//             )}

//             {success && (
//               <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-center gap-3 text-green-700">
//                 <CheckCircle className="w-5 h-5" />
//                 Application submitted successfully! We'll get back to you soon.
//               </div>
//             )}

//             {/* Submit Button */}
//             <div className="flex justify-center">
//               <button
//                 type="submit"
//                 disabled={loading || success}
//                 className={`group relative px-12 py-4 bg-mainBrown text-white font-semibold rounded-lg overflow-hidden transition-all duration-300 hover:bg-mainBrown/90 hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed ${
//                   success ? "bg-green-600 hover:bg-green-600" : ""
//                 }`}
//               >
//                 <span className="relative z-10 flex items-center gap-3">
//                   {loading ? (
//                     <>Sending...</>
//                   ) : success ? (
//                     <>
//                       <CheckCircle className="w-5 h-5" />
//                       Submitted!
//                     </>
//                   ) : (
//                     <>
//                       <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
//                       Submit Application
//                     </>
//                   )}
//                 </span>
//                 <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform" />
//               </button>
//             </div>

//             <p className="text-center text-sm text-gray-500 mt-6">
//               We review all applications carefully and will contact qualified
//               candidates within 2 weeks.
//             </p>
//           </form>
//         </div>
//       </div>
//     </section>
//   );
// }

import { useState } from "react";
import { Upload, Send, CheckCircle, AlertCircle } from "lucide-react";
import SectionHeader from "../../shared/SectionHeader/SectionHeader";
import { API_ENDPOINTS } from "../../../config/api";

export default function ApplicationForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    position: "",
    experience: "",
    portfolio: "",
    coverLetter: "",
    siteName: "Wolsey Structural Engineering",
    siteURL: "https://www.wolsey.ca",
  });

  const [resume, setResume] = useState(null);
  const [isDragging, setIsDragging] = useState(false);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setResume(e.target.files[0]);
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);
    const file = e.dataTransfer.files[0];
    if (file && file.type === "application/pdf") {
      setResume(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError(null);

    if (!resume) {
      setError("Please upload your resume (PDF only)");
      return;
    }

    // ✅ Optimistic UI (instant success)
    setSuccess(true);
    setLoading(false);

    const data = new FormData();
    data.append("name", formData.name);
    data.append("email", formData.email);
    data.append("phone", formData.phone);
    data.append("position", formData.position);
    data.append("experience", formData.experience);
    data.append("portfolio", formData.portfolio);
    data.append("coverLetter", formData.coverLetter);
    data.append("resume", resume);
    data.append("siteName", formData.siteName);
    data.append("siteURL", formData.siteURL);

    // 🚀 Send in background (NO await)
    fetch(API_ENDPOINTS.submitApplication, {
      method: "POST",
      body: data,
    }).catch(() => {
      // ❌ لو حصل error
      setSuccess(false);
      setError("Something went wrong. Please try again.");
    });

    // 🔄 Reset فورًا
    setFormData({
      name: "",
      email: "",
      phone: "",
      position: "",
      experience: "",
      portfolio: "",
      coverLetter: "",
      siteName: "Wolsey Structural Engineering",
      siteURL: "https://www.wolsey.ca",
    });

    setResume(null);
  };

  const positions = [
    "Architect",
    "Junior Architect",
    "Interior Designer",
    "Project Manager",
    "Draftsman",
    "Urban Planner",
    "Other",
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Title */}
          <div className="text-center mb-12">
            <h2 className="heading font-bold text-mainDark mb-6 tracking-wide">
              <SectionHeader firstWord="Tell Us" />
            </h2>
            <p className="text-gray-600 text-lg md:text-xl">
              Submit your application and let's build something great together
            </p>
          </div>

          <form
            onSubmit={handleSubmit}
            className="bg-white rounded-2xl shadow-xl p-8 md:p-12"
          >
            {/* Personal Information */}
            <div className="mb-10">
              <h3 className="text-2xl font-semibold text-mainDark mb-6 tracking-wide">
                Personal Information
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all"
                    placeholder="john@example.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all"
                    placeholder="(305) 123-4567"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Desired Position *
                  </label>
                  <select
                    name="position"
                    required
                    value={formData.position}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all"
                  >
                    <option value="">Select Position</option>
                    {positions.map((pos) => (
                      <option key={pos} value={pos}>
                        {pos}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            {/* Professional Details */}
            <div className="mb-10">
              <h3 className="text-2xl font-semibold text-mainDark mb-6 tracking-wide">
                Professional Details
              </h3>
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Years of Experience *
                  </label>
                  <select
                    name="experience"
                    required
                    value={formData.experience}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all"
                  >
                    <option value="">Select Experience</option>
                    <option value="0-1">0-1 years</option>
                    <option value="1-3">1-3 years</option>
                    <option value="3-5">3-5 years</option>
                    <option value="5-10">5-10 years</option>
                    <option value="10+">10+ years</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Portfolio URL (Optional)
                  </label>
                  <input
                    type="url"
                    name="portfolio"
                    value={formData.portfolio}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all"
                    placeholder="https://yourportfolio.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Cover Letter / Why Join Us? *
                  </label>
                  <textarea
                    name="coverLetter"
                    required
                    value={formData.coverLetter}
                    onChange={handleChange}
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all resize-none"
                    placeholder="Tell us about yourself and why you want to join our team..."
                  />
                </div>
              </div>
            </div>

            {/* Resume Upload */}
            <div className="mb-10">
              <h3 className="text-2xl font-semibold text-mainDark mb-6 tracking-wide">
                Upload Resume
              </h3>
              <div
                onDragOver={(e) => {
                  e.preventDefault();
                  setIsDragging(true);
                }}
                onDragLeave={() => setIsDragging(false)}
                onDrop={handleDrop}
                className={`relative border-2 border-dashed rounded-xl p-12 text-center transition-all ${
                  isDragging
                    ? "border-gray-900 bg-gray-50"
                    : "border-gray-300 hover:border-gray-400"
                }`}
              >
                <input
                  type="file"
                  accept=".pdf"
                  onChange={handleFileChange}
                  className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                />
                <Upload className="w-12 h-12 mx-auto mb-4 text-gray-400" />

                {resume ? (
                  <div className="space-y-2">
                    <p className="text-lg font-medium text-gray-900">
                      {resume.name}
                    </p>
                    <p className="text-sm text-gray-500">
                      Click or drag to replace
                    </p>
                  </div>
                ) : (
                  <div className="space-y-2">
                    <p className="text-lg font-medium text-gray-900">
                      Drop your resume here or click to upload
                    </p>
                    <p className="text-sm text-gray-500">
                      PDF format only (Max 5MB)
                    </p>
                  </div>
                )}
              </div>
            </div>

            {/* Messages */}
            {error && (
              <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-center gap-3 text-red-700">
                <AlertCircle className="w-5 h-5" />
                {error}
              </div>
            )}

            {success && (
              <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-center gap-3 text-green-700">
                <CheckCircle className="w-5 h-5" />
                Application submitted successfully! We'll get back to you soon.
              </div>
            )}

            {/* Button */}
            {/* <button
              type="submit"
              className="w-full bg-mainBrown text-white py-4 rounded-lg flex items-center justify-center gap-2"
            >
              {success ? (
                <>
                  <CheckCircle size={18} /> Submitted
                </>
              ) : (
                <>
                  <Send size={18} /> Submit Application
                </>
              )}
            </button> */}
            {/* Submit Button */}
            <div className="flex justify-center">
              <button
                type="submit"
                disabled={loading || success}
                className={`group relative px-12 py-4 bg-mainBrown text-white font-semibold rounded-lg overflow-hidden transition-all duration-300 hover:bg-mainBrown/90 hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed ${
                  success ? "bg-green-600 hover:bg-green-600" : ""
                }`}
              >
                <span className="relative z-10 flex items-center gap-3">
                  {loading ? (
                    <>Sending...</>
                  ) : success ? (
                    <>
                      <CheckCircle className="w-5 h-5" />
                      Submitted!
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                      Submit Application
                    </>
                  )}
                </span>
                <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform" />
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
