export default function RegistrationSection() {
  return (
    <section id="register" className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="mx-auto max-w-2xl">
        <div className="rounded-lg border border-[#dfe6d7] p-8">
          <h2 className="text-3xl font-bold text-[#172018] mb-2">Ready to Join?</h2>
          <p className="text-[#61705d] mb-8">
            Fill out the form below to express your interest and we'll get back to you within 48 hours.
          </p>
          <form className="space-y-6">
            <div>
              <label className="block text-sm font-semibold text-[#172018] mb-2">Select Program</label>
              <select className="w-full px-4 py-3 rounded-lg border border-[#dfe6d7] bg-white focus:outline-none focus:border-[#1b5e2b]">
                <option>Choose a program...</option>
                <option>Startup Incubation Program</option>
                <option>Innovation Fellowship</option>
                <option>Hackathon 2026</option>
                <option>Research Commercialization</option>
                <option>Mentorship Program</option>
                <option>Grants & Funding</option>
              </select>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-[#172018] mb-2">First Name</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 rounded-lg border border-[#dfe6d7] bg-white focus:outline-none focus:border-[#1b5e2b]"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-[#172018] mb-2">Last Name</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 rounded-lg border border-[#dfe6d7] bg-white focus:outline-none focus:border-[#1b5e2b]"
                  required
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-semibold text-[#172018] mb-2">Email</label>
              <input
                type="email"
                className="w-full px-4 py-3 rounded-lg border border-[#dfe6d7] bg-white focus:outline-none focus:border-[#1b5e2b]"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-[#172018] mb-2">Tell us about yourself (500 chars max)</label>
              <textarea
                maxLength={500}
                rows={4}
                className="w-full px-4 py-3 rounded-lg border border-[#dfe6d7] bg-white focus:outline-none focus:border-[#1b5e2b]"
                placeholder="What are your goals? What do you hope to achieve?"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-[#1b5e2b] text-white py-3 rounded-lg font-bold hover:bg-[#154a22] transition"
            >
              Submit Application
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}