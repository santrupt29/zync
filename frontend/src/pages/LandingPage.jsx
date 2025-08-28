import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';
import Navbar from '../components/Navbar';

const LandingPage = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const navigate = useNavigate();
  const handleLogin = async () => {
    navigate("/auth");
  }

  const features = [
    {
      icon: "💬",
      title: "Real-time Messaging",
      description: "Lightning-fast communication with your team members across all devices"
    },
    {
      icon: "📹",
      title: "Video Calls & Meetings", 
      description: "High-quality video conferencing with screen sharing and recording"
    },
    {
      icon: "🔒",
      title: "Secure & Private",
      description: "End-to-end encryption ensures your conversations stay confidential"
    },
    {
      icon: "📁",
      title: "File Sharing",
      description: "Share documents, images, and files seamlessly within conversations"
    },
    {
      icon: "🔔",
      title: "Smart Notifications",
      description: "Customizable alerts to keep you informed without overwhelming you"
    },
    {
      icon: "🌐",
      title: "Cross-Platform",
      description: "Available on web, desktop, and mobile - work from anywhere"
    }
  ];

  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Product Manager at TechCorp",
      message: "Zync transformed how our team collaborates. The interface is intuitive and the features are exactly what we needed.",
      avatar: "👩‍💼"
    },
    {
      name: "Michael Rodriguez", 
      role: "CTO at StartupXYZ",
      message: "Finally, a communication tool that doesn't get in the way. Clean, fast, and reliable.",
      avatar: "👨‍💻"
    },
    {
      name: "Emily Johnson",
      role: "Team Lead at DesignStudio",
      message: "The video call quality is outstanding, and the file sharing makes our workflow so much smoother.",
      avatar: "👩‍🎨"
    }
  ];

  const stats = [
    { number: "10K+", label: "Active Users" },
    { number: "50K+", label: "Messages Sent Daily" }, 
    { number: "99.9%", label: "Uptime" },
    { number: "500+", label: "Teams Using Zync" }
  ];

  return (
    <div className="overflow-x-hidden bg-gray-900">
      <Navbar />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-900 via-purple-900 to-violet-900 text-white pt-32 pb-20 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-20 w-2 h-2 bg-purple-400 rounded-full opacity-40"></div>
          <div className="absolute top-40 right-32 w-1 h-1 bg-pink-400 rounded-full opacity-40"></div>
          <div className="absolute bottom-32 left-32 w-1.5 h-1.5 bg-purple-400 rounded-full opacity-40"></div>
        </div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center px-8 relative z-10">
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
            {/* Badge */}
            <div className="inline-block bg-gray-800/50 backdrop-blur-md px-4 py-2 rounded-full text-sm mb-6 border border-gray-700">
              <span>✨ New: AI-powered message suggestions</span>
            </div>

            {/* Main Title */}
            <h1 className="text-6xl md:text-7xl font-black leading-tight mb-6">
              Where Work
              <br />
              Happens <span className="inline-block animate-spin">✨</span>
            </h1>

            {/* Description */}
            <p className="text-xl mb-8 text-gray-300 leading-relaxed">
              Connect with your team instantly through secure, real-time messaging. 
              Experience seamless collaboration with powerful features designed for modern teams.
            </p>
            
            {/* Feature Pills */}
            <div className="flex flex-wrap gap-4 mb-10">
              <div className="bg-gray-800/50 backdrop-blur-md px-5 py-3 rounded-full flex items-center gap-2 text-sm border border-gray-700">
                <span>💬</span>
                Real-time messaging
              </div>
              <div className="bg-gray-800/50 backdrop-blur-md px-5 py-3 rounded-full flex items-center gap-2 text-sm border border-gray-700">
                <span>📹</span>
                Video calls & meetings
              </div>
              <div className="bg-gray-800/50 backdrop-blur-md px-5 py-3 rounded-full flex items-center gap-2 text-sm border border-gray-700">
                <span>🔒</span>
                Secure & private
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 mb-12">
              <button onClick={handleLogin} className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:-translate-y-1 transition-all duration-300 shadow-2xl hover:shadow-3xl flex items-center gap-2">
                Get Started with Zync
                <span>→</span>
              </button>
              {/* <button className="bg-transparent border-2 border-gray-700 text-gray-300 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-800/30 hover:border-gray-600 transition-all duration-300 flex items-center gap-2">
                <span>▶️</span> Watch Demo
              </button> */}
            </div>

            {/* Social Proof */}
            <div className="text-gray-400">
              <span className="block mb-4">Trusted by 500+ teams worldwide</span>
              <div className="flex flex-wrap gap-8 text-sm text-gray-500">
                <span>🏢 TechCorp</span>
                <span>🚀 StartupXYZ</span>
                <span>🎨 DesignStudio</span>
                <span>📊 DataCorp</span>
              </div>
            </div>
          </div>
          
          {/* Hero Visual */}
          <div className="relative h-[500px] hidden md:block">
            {/* Floating Cards */}
            <div className="absolute top-12 left-12 bg-gray-800/90 backdrop-blur-md rounded-xl p-6 shadow-2xl border border-gray-700 animate-bounce" style={{animationDelay: '0s', animationDuration: '3s'}}>
              <div className="flex gap-4 items-start text-gray-200">
                <span className="text-2xl">👩‍💼</span>
                <div>
                  <div className="font-semibold text-sm mb-1 text-white">Sarah Chen</div>
                  <div className="text-gray-400 text-sm">Great job on the presentation! 🎉</div>
                </div>
              </div>
            </div>
            
            <div className="absolute top-36 right-8 bg-gray-800/90 backdrop-blur-md rounded-xl p-6 shadow-2xl border border-gray-700 animate-bounce" style={{animationDelay: '1s', animationDuration: '3s'}}>
              <div className="text-center text-gray-200">
                <div className="font-semibold text-sm mb-4 text-white">Team Standup</div>
                <div className="flex gap-2 justify-center">
                  <span className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center text-lg">👨‍💻</span>
                  <span className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center text-lg">👩‍🎨</span>
                  <span className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center text-lg">👨‍💼</span>
                  <span className="w-10 h-10 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full flex items-center justify-center text-lg">👩‍💼</span>
                </div>
              </div>
            </div>

            <div className="absolute bottom-24 left-5 bg-gray-800/90 backdrop-blur-md rounded-xl p-6 shadow-2xl border border-gray-700 animate-bounce" style={{animationDelay: '2s', animationDuration: '3s'}}>
              <div className="flex items-center gap-4 text-gray-200">
                <span className="text-2xl">🔔</span>
                <div>
                  <div className="font-semibold text-sm text-white">3 new messages</div>
                  <div className="text-gray-400 text-xs">#marketing-team</div>
                </div>
              </div>
            </div>

            {/* Central Illustration */}
            <div className="absolute right-24 top-1/2 transform -translate-y-1/2 z-[-1]">
              <div className="text-8xl text-center mb-8 animate-pulse filter drop-shadow-2xl">💡</div>
              <div className="relative w-48 h-48 mx-auto">
                <span className="absolute top-0 left-1/2 transform -translate-x-1/2 text-3xl animate-ping" style={{animationDelay: '0s'}}>👩‍💼</span>
                <span className="absolute top-1/2 right-0 transform -translate-y-1/2 text-3xl animate-ping" style={{animationDelay: '2s'}}>👨‍💻</span>
                <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 text-3xl animate-ping" style={{animationDelay: '4s'}}>👩‍🎨</span>
                <span className="absolute top-1/2 left-0 transform -translate-y-1/2 text-3xl animate-ping" style={{animationDelay: '6s'}}>👨‍💼</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-gray-800 py-16 border-b border-gray-700">
        <div className="max-w-6xl mx-auto px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={index}>
                <div className="text-4xl md:text-5xl font-black bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-400 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 bg-gray-900">
        <div className="max-w-6xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Everything your team needs
            </h2>
            <p className="text-xl text-gray-400">
              Powerful features that make collaboration effortless
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-gray-800/50 backdrop-blur-sm p-10 rounded-2xl shadow-xl hover:-translate-y-2 hover:shadow-2xl transition-all duration-300 border border-gray-700 hover:border-gray-600">
                <div className="text-5xl mb-6 block">{feature.icon}</div>
                <h3 className="text-2xl font-semibold text-white mb-4">{feature.title}</h3>
                <p className="text-gray-400 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-24 bg-gray-800">
        <div className="max-w-6xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Loved by teams everywhere
            </h2>
            <p className="text-xl text-gray-400">
              See what our users have to say about Zync
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gray-900/50 backdrop-blur-sm p-10 rounded-2xl border-l-4 border-purple-500 shadow-xl hover:shadow-2xl transition-all duration-300">
                <div className="mb-6">
                  <p className="text-lg text-gray-300 leading-relaxed italic">
                    "{testimonial.message}"
                  </p>
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-3xl">{testimonial.avatar}</span>
                  <div>
                    <div className="font-semibold text-white">{testimonial.name}</div>
                    <div className="text-gray-400 text-sm">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section
      <section className="bg-gradient-to-br from-gray-900 via-purple-900 to-violet-900 text-white py-24 text-center">
        <div className="max-w-4xl mx-auto px-8">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Ready to transform your team communication?
          </h2>
          <p className="text-xl mb-10 text-gray-300">
            Join thousands of teams who've already made the switch to Zync
          </p>
          
          <div className="flex flex-wrap gap-4 justify-center mb-8">
            <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-10 py-5 rounded-full font-semibold text-xl hover:-translate-y-1 transition-all duration-300 shadow-2xl hover:shadow-3xl flex items-center gap-2">
              Start Free Trial
              <span>→</span>
            </button>
            <button className="bg-transparent border-2 border-gray-700 text-gray-300 px-10 py-5 rounded-full font-semibold text-xl hover:bg-gray-800/30 hover:border-gray-600 transition-all duration-300">
              Schedule Demo
            </button>
          </div>
          
          <div className="flex flex-wrap gap-8 justify-center text-gray-400 text-sm">
            <span>✅ No credit card required</span>
            <span>✅ 14-day free trial</span>
            <span>✅ Cancel anytime</span>
          </div>
        </div>
      </section> */}

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16 border-t border-gray-800">
        <div className="max-w-6xl mx-auto px-8">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div className="md:col-span-2">
              <div className="flex items-center gap-3 font-bold text-2xl mb-4">
                <img src="/Zync2.png" alt="Zync" className="w-8 h-8" />
                <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">ZYNC</span>
              </div>
              <p className="text-gray-400 leading-relaxed">
                Where work happens. Connect, collaborate, and create together.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-6 text-white">Product</h4>
              <ul className="space-y-3 text-gray-400">
                <li><a href="#features" className="hover:text-purple-400 transition-colors">Features</a></li>
                <li><a href="#security" className="hover:text-purple-400 transition-colors">Security</a></li>
                <li><a href="#integrations" className="hover:text-purple-400 transition-colors">Integrations</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-6 text-white">Company</h4>
              <ul className="space-y-3 text-gray-400">
                <li><a href="#about" className="hover:text-purple-400 transition-colors">About</a></li>
                <li><a href="#blog" className="hover:text-purple-400 transition-colors">Blog</a></li>
                <li><a href="#contact" className="hover:text-purple-400 transition-colors">Contact</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-8 flex flex-wrap justify-between items-center">
            <div className="text-gray-500">
              <span>© 2025 Zync. All rights reserved.</span>
            </div>
            <div className="flex gap-8 text-gray-400 text-sm">
              <a href="#privacy" className="hover:text-purple-400 transition-colors">Privacy Policy</a>
              <a href="#terms" className="hover:text-purple-400 transition-colors">Terms of Service</a>
              <a href="#cookies" className="hover:text-purple-400 transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
