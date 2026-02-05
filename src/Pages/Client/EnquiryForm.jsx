import { useState } from "react";

const EnquiryForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    companyName: "",
    phoneNumber: "",
    email: "",
    serviceInterestedIn: "",
    briefRequirement: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Submitted Data:", formData);

    alert(
      "Thank you for contacting us. Our team will review your requirement and contact you shortly."
    );

    setFormData({
      name: "",
      companyName: "",
      phoneNumber: "",
      email: "",
      serviceInterestedIn: "",
      briefRequirement: "",
    });
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-slate-100 to-slate-200 flex items-center justify-center p-4">
      <div className="max-w-5xl w-full bg-white/80 backdrop-blur-xl shadow-2xl overflow-hidden grid md:grid-cols-2">

        {/* Left Content */}
        <div className="bg-gradient-to-br from-blue-600 to-blue-800 text-white p-10 flex flex-col justify-center">
          <h2 className="text-4xl font-bold mb-4">
            Let’s discuss your project scope
          </h2>
          <p className="text-blue-100 leading-relaxed">
            Share your project requirements with us. Our expert team will
            evaluate your needs and get back to you with the best solution.
          </p>
        </div>

        {/* Right Form */}
        <div className="p-10">
          <form onSubmit={handleSubmit} className="space-y-6">

            {/* Name & Company */}
            <div className="grid md:grid-cols-2 gap-5">
              <div>
                <label className="label">
                  Name <span className="star">*</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="input"
                />
              </div>

              <div>
                <label className="label">Company / Organisation</label>
                <input
                  type="text"
                  name="companyName"
                  placeholder="Company / Organisation"
                  value={formData.companyName}
                  onChange={handleChange}
                  className="input"
                />
              </div>
            </div>

            {/* Phone & Email */}
            <div className="grid md:grid-cols-2 gap-5">
              <div>
                <label className="label">Phone Number</label>
                <input
                  type="tel"
                  name="phoneNumber"
                  placeholder="Phone Number"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  className="input"
                />
              </div>

              <div>
                <label className="label">
                  Email <span className="star">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="input"
                />
              </div>
            </div>

            {/* Service */}
            <div>
              <label className="label">
                Service Interested In <span className="star">*</span>
              </label>
              <select
                name="serviceInterestedIn"
                value={formData.serviceInterestedIn}
                onChange={handleChange}
                required
                className="input text-gray-600"
              >
                <option value="">Select Service</option>
                <option value="HVAC">HVAC</option>
                <option value="Fire Fighting">Fire Fighting</option>
                <option value="False Ceiling">False Ceiling</option>
                <option value="Multiple Services">Multiple Services</option>
              </select>
            </div>

            {/* Requirement */}
            <div>
              <label className="label">Brief Requirement</label>
              <textarea
                name="briefRequirement"
                rows="4"
                placeholder="Share a few details about your requirement"
                value={formData.briefRequirement}
                onChange={handleChange}
                className="input resize-none"
              />
            </div>

            {/* Note */}
            <p className="text-xs text-gray-500">
              <span className="star">*</span> Required fields
            </p>

            {/* Submit */}
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition-all shadow-lg hover:shadow-xl"
            >
              Submit Requirement
            </button>
          </form>
        </div>
      </div>

      {/* Reusable Styles */}
      <style jsx="true">{`
        .input {
          width: 100%;
          padding: 0.75rem 1rem;
          border-radius: 0.75rem;
          border: 1px solid #e5e7eb;
          background-color: white;
          outline: none;
          transition: all 0.2s ease;
        }
        .input:focus {
          border-color: #2563eb;
          box-shadow: 0 0 0 2px rgba(37, 99, 235, 0.2);
        }
        .label {
          display: block;
          margin-bottom: 0.25rem;
          font-size: 0.875rem;
          font-weight: 500;
          color: #374151;
        }
        .star {
          color: #ef4444;
        }
      `}</style>
    </section>
  );
};

export default EnquiryForm;
