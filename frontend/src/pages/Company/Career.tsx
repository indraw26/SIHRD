import { MapPin, Clock, DollarSign } from "lucide-react";
import Layout from "./components/Layout";

const jobs = [
  {
    title: "Senior Mechanic",
    description: "Lead engine diagnostics and complex repairs with 5+ years of experience.",
    location: "New York, NY",
    type: "Full-time",
    salary: "$55K - $75K"
  },
  {
    title: "Brake Specialist",
    description: "Specialize in brake system repair, replacement, and ABS diagnostics.",
    location: "Los Angeles, CA",
    type: "Full-time",
    salary: "$45K - $60K"
  },
  {
    title: "Parts Advisor",
    description: "Manage parts inventory and advise customers on quality component selections.",
    location: "Chicago, IL",
    type: "Full-time",
    salary: "$40K - $50K"
  },
  {
    title: "Junior Technician",
    description: "Assist senior mechanics and gain hands-on experience in all repair areas.",
    location: "Houston, TX",
    type: "Full-time",
    salary: "$35K - $45K"
  },
  {
    title: "Service Writer",
    description: "Communicate with customers about service needs and coordinate repair schedules.",
    location: "Remote",
    type: "Full-time",
    salary: "$38K - $48K"
  },
  {
    title: "Detailing Specialist",
    description: "Interior and exterior vehicle detailing with attention to premium quality.",
    location: "Miami, FL",
    type: "Part-time",
    salary: "$20 - $28/hr"
  }
];

const CareerPage = () => {
  return (
    <Layout>
      <div className="bg-slate-50 min-h-screen py-24">
        <div className="container mx-auto px-4 max-w-6xl">
          {/* Header Section */}
          <div className="text-center mb-20 max-w-3xl mx-auto">
            <h3 className="text-orange-500 font-bold text-sm uppercase tracking-widest mb-4">
              CAREERS
            </h3>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Join Our Team
            </h1>
            <p className="text-gray-500 text-lg md:text-xl leading-relaxed">
              Build your career with a team that values expertise, growth, and a passion for automotive excellence.
            </p>
          </div>

          {/* Job Listings Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {jobs.map((job, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col h-full group"
              >
                <div className="flex-1">
                  <h2 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-orange-500 transition-colors">{job.title}</h2>
                  <p className="text-gray-500 text-[15px] leading-relaxed mb-6">
                    {job.description}
                  </p>

                  <div className="space-y-3 mb-8">
                    <div className="flex items-center text-sm text-gray-600">
                      <MapPin className="w-4 h-4 text-orange-500 mr-3" />
                      <span>{job.location}</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <Clock className="w-4 h-4 text-orange-500 mr-3" />
                      <span>{job.type}</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <DollarSign className="w-4 h-4 text-orange-500 mr-3" />
                      <span>{job.salary}</span>
                    </div>
                  </div>
                </div>

                <button className="w-full bg-orange-500 text-white font-semibold py-3.5 rounded-xl hover:bg-orange-600 transition-colors hover:shadow-md active:scale-[0.98]">
                  Apply Now
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default CareerPage;
