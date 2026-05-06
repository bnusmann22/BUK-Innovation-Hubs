import {
  FacebookIcon,
  TwitterIcon,
  LinkedinIcon,
  InstagramIcon,
} from "@/components/social-icons";

export default function TeamSection() {
  const teamMembers = [
    {
      id: 1,
      name: "Dr. Muhammad Ali",
      role: "Director",
      title: "Founder & Chief Innovation Officer",
      bio: "Former tech entrepreneur with 15+ years in innovation ecosystem development. Led multiple tech ventures and established partnerships with Fortune 500 companies.",
      image: "👨‍💼",
      socials: {
        facebook: "https://facebook.com",
        twitter: "https://twitter.com",
        linkedin: "https://linkedin.com",
        instagram: "https://instagram.com",
      },
    },
    {
      id: 2,
      name: "Fatima Hassan",
      role: "Head of Programs",
      title: "Senior Program Director",
      bio: "Expert in startup acceleration with track record of 20+ successful exits. Passionate about mentoring entrepreneurs and developing innovative programs.",
      image: "👩‍💼",
      socials: {
        facebook: "https://facebook.com",
        twitter: "https://twitter.com",
        linkedin: "https://linkedin.com",
        instagram: "https://instagram.com",
      },
    },
    {
      id: 3,
      name: "Kadir Sani",
      role: "Director of Operations",
      title: "Operations & Facilities Manager",
      bio: "Operations specialist with expertise in managing large-scale innovation ecosystems. Currently managing 7 hubs and 500+ daily active users.",
      image: "👨‍💼",
      socials: {
        facebook: "https://facebook.com",
        twitter: "https://twitter.com",
        linkedin: "https://linkedin.com",
        instagram: "https://instagram.com",
      },
    },
    {
      id: 4,
      name: "Hadiza Ibrahim",
      role: "Head of Partnerships",
      title: "Strategic Partnerships Lead",
      bio: "Strategic partner with proven ability to establish partnerships with Fortune 500 companies and leading global venture capitalists.",
      image: "👩‍💼",
      socials: {
        facebook: "https://facebook.com",
        twitter: "https://twitter.com",
        linkedin: "https://linkedin.com",
        instagram: "https://instagram.com",
      },
    },
    {
      id: 5,
      name: "Ahmed Yusuf",
      role: "Head of AI & Robotics",
      title: "AI & Robotics Hub Lead",
      bio: "PhD in Computer Science with research focus on machine learning. Published 30+ papers and mentored 50+ AI researchers.",
      image: "👨‍💻",
      socials: {
        facebook: "https://facebook.com",
        twitter: "https://twitter.com",
        linkedin: "https://linkedin.com",
        instagram: "https://instagram.com",
      },
    },
    {
      id: 6,
      name: "Aisha Malik",
      role: "Head of Design & Innovation",
      title: "Design & Innovation Hub Lead",
      bio: "Award-winning designer with 12 years of experience in UX/UI and product design. Led design teams at multiple tech startups.",
      image: "👩‍🎨",
      socials: {
        facebook: "https://facebook.com",
        twitter: "https://twitter.com",
        linkedin: "https://linkedin.com",
        instagram: "https://instagram.com",
      },
    },
  ];

  return (
    <section className="py-10 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {teamMembers.map((member) => (
            <div
              key={member.id}
              className="rounded-lg border border-[#dfe6d7] overflow-hidden hover:shadow-lg transition bg-gradient-to-br from-white to-[#f5f7f2]/50"
            >
              <div className="h-36 bg-gradient-to-br from-[#1b5e2b]/20 to-[#006b85]/20 flex items-center justify-center text-5xl">
                {member.image}
              </div>
              <div className="p-4">
                <h3 className="text-lg font-bold text-[#172018] mb-0.5">{member.name}</h3>
                <p className="text-[#1b5e2b] font-semibold text-[11px] mb-2.5">{member.role}</p>
                <p className="text-xs text-[#61705d] font-medium mb-2">{member.title}</p>
                <p className="text-xs text-[#61705d] leading-relaxed mb-3">{member.bio}</p>
                <div className="flex gap-2 pt-3 border-t border-[#dfe6d7]">
                  <a href={member.socials.facebook} target="_blank" rel="noopener noreferrer" className="text-[#61705d] hover:text-[#1b5e2b] transition" title="Facebook">
                    <FacebookIcon className="w-4 h-4" />
                  </a>
                  <a href={member.socials.twitter} target="_blank" rel="noopener noreferrer" className="text-[#61705d] hover:text-[#1b5e2b] transition" title="Twitter">
                    <TwitterIcon className="w-4 h-4" />
                  </a>
                  <a href={member.socials.linkedin} target="_blank" rel="noopener noreferrer" className="text-[#61705d] hover:text-[#1b5e2b] transition" title="LinkedIn">
                    <LinkedinIcon className="w-4 h-4" />
                  </a>
                  <a href={member.socials.instagram} target="_blank" rel="noopener noreferrer" className="text-[#61705d] hover:text-[#1b5e2b] transition" title="Instagram">
                    <InstagramIcon className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}