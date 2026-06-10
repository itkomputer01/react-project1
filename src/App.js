import React, { useState, useEffect } from 'react';

export default function App() {
  // State for the flexible pricing calculator (Hourly Rate)
  const [basePrice, setBasePrice] = useState(40); // Default React + Node + MySQL Fullstack ($40)
  const [hours, setHours] = useState(15); // Default 15 hours
  const [discount, setDiscount] = useState(6); // Hourly discount for the 15-hour package
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    // Calculate total price based on hours and bulk discount
    const finalRate = basePrice - discount;
    setTotalPrice(finalRate * hours);
  }, [basePrice, hours, discount]);

  const handleHoursChange = (e) => {
    const val = parseInt(e.target.value);
    setHours(val);
    // Set dynamic discount rates based on the selected package
    if (val === 2) setDiscount(0);
    else if (val === 5) setDiscount(2);
    else if (val === 10) setDiscount(4);
    else if (val === 15) setDiscount(6);
  };

  return (
    <div className="bg-slate-900 text-slate-100 min-h-screen font-sans antialiased selection:bg-emerald-500 selection:text-slate-900">
      
      {/* 1. NAVBAR */}
      <nav className="sticky top-0 z-50 backdrop-blur-md bg-slate-900/80 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-xl font-black tracking-wider bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
              KURSUSWEB<span className="text-slate-400 text-sm font-normal">.web.id</span>
            </span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
            <a href="#curriculum" className="hover:text-emerald-400 transition-colors">Curriculum</a>
            <a href="#features" className="hover:text-emerald-400 transition-colors">Benefits</a>
            <a href="#calculator" className="hover:text-emerald-400 transition-colors">Rate Calculator</a>
          </div>
          <div>
            <a href="#calculator" className="bg-gradient-to-r from-emerald-500 to-cyan-500 text-slate-900 font-bold px-5 py-2 rounded-full text-sm hover:opacity-90 transition-opacity shadow-lg shadow-emerald-500/20">
              Book Now
            </a>
          </div>
        </div>
      </nav>

      {/* 2. HERO SECTION */}
      <header className="relative py-20 lg:py-32 overflow-hidden border-b border-slate-800">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full pointer-events-none opacity-20">
          <div className="absolute top-[-10%] left-[-10%] w-[400px] h-[400px] rounded-full bg-emerald-500 blur-[120px]"></div>
          <div className="absolute bottom-[10%] right-[-10%] w-[400px] h-[400px] rounded-full bg-cyan-500 blur-[120px]"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 text-center lg:text-left">
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 mb-6">
                ✨ 1-on-1 International Private Class
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight mb-6">
                Master Fullstack Web <br className="hidden sm:inline" />
                <span className="bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent">
                  React, Node.js &amp; MySQL
                </span>
              </h1>
              <p className="text-lg text-slate-400 max-w-2xl mx-auto lg:mx-0 mb-8 leading-relaxed">
                Build secure real-time applications, learn relational database architecture, and master automated deployment using global industry standards. Flexible hourly-based pricing tailored to your schedule.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <a href="#curriculum" className="bg-slate-800 hover:bg-slate-700 text-white font-semibold px-8 py-3.5 rounded-xl transition-all border border-slate-700 text-center">
                  View Syllabus
                </a>
                <a href="#calculator" className="bg-gradient-to-r from-emerald-500 to-cyan-500 text-slate-900 font-extrabold px-8 py-3.5 rounded-xl transition-all shadow-lg shadow-emerald-500/10 text-center">
                  Calculate Learning Cost
                </a>
              </div>
            </div>
            
            <div className="lg:col-span-5 relative">
              <div className="bg-slate-800/40 p-2 rounded-2xl border border-slate-700/60 shadow-2xl backdrop-blur-sm">
                <div className="bg-slate-950 rounded-xl p-4 font-mono text-xs text-emerald-400 overflow-x-auto shadow-inner border border-slate-900">
                  <div className="flex items-center gap-1.5 border-b border-slate-800 pb-3 mb-3 text-slate-500">
                    <span className="w-3 h-3 rounded-full bg-red-500/40"></span>
                    <span className="w-3 h-3 rounded-full bg-yellow-500/40"></span>
                    <span className="w-3 h-3 rounded-full bg-green-500/40"></span>
                    <span className="ml-2 text-[10px]">project-workspace @ kursusweb</span>
                  </div>
                  <p className="text-slate-500">{"// Initializing fullstack server integration"}</p>
                  <p className="text-cyan-400">import <span className="text-amber-400">Express</span> from <span className="text-emerald-300">'express'</span>;</p>
                  <p className="text-cyan-400">import <span className="text-amber-400">mysql</span> from <span className="text-emerald-300">'mysql2/promise'</span>;</p>
                  <p className="mt-2 text-purple-400">const <span className="text-slate-300">app</span> = <span className="text-cyan-400">Express()</span>;</p>
                  <p className="text-purple-400">const <span className="text-slate-300">db</span> = <span className="text-cyan-400">await mysql.createConnection(config)</span>;</p>
                  <p className="mt-2 text-slate-400">app.get(<span className="text-emerald-300">'/api/data'</span>, async (req, res) =&gt; &#123;</p>
                  <p className="text-emerald-400">&nbsp;&nbsp;<span className="text-slate-500">{"// Secured query preventing SQL Injection"}</span></p>
                  <p className="text-yellow-300">&nbsp;&nbsp;const [rows] = await db.execute('SELECT * FROM users');</p>
                  <p className="text-cyan-400">&nbsp;&nbsp;res.json(rows);</p>
                  <p className="text-slate-400">&#125;);</p>
                  <p className="mt-4 text-slate-500 animate-pulse">out: 🚀 START DEPLOY... SUCCESS VIA GITHUB ACTIONS</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* 3. CORE CURRICULUM SECTIONS */}
      <section id="curriculum" className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-b border-slate-800">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Industry-Standard Modern Curriculum</h2>
          <p className="text-slate-400">Our roadmap is designed from fundamentals to automated CI/CD pipelines on production VPS servers.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Pillar 1 */}
          <div className="bg-slate-800/30 border border-slate-800 rounded-2xl p-6 hover:border-emerald-500/30 transition-all group">
            <div className="w-12 h-12 rounded-xl bg-cyan-500/10 flex items-center justify-center text-cyan-400 mb-5 font-bold group-hover:scale-110 transition-transform">01</div>
            <h3 className="text-xl font-bold text-white mb-2">Frontend React.js</h3>
            <p className="text-sm text-slate-400 leading-relaxed">
              Modern components, state management (Context/Redux), Hooks (useState, useEffect), Tailwind CSS, and Axios API integrations.
            </p>
          </div>
          {/* Pillar 2 */}
          <div className="bg-slate-800/30 border border-slate-800 rounded-2xl p-6 hover:border-emerald-500/30 transition-all group">
            <div className="w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-400 mb-5 font-bold group-hover:scale-110 transition-transform">02</div>
            <h3 className="text-xl font-bold text-white mb-2">Backend Node.js</h3>
            <p className="text-sm text-slate-400 leading-relaxed">
              RESTful API architecture using Express.js, custom middleware development, JSON handling, bcrypt hashing, and JWT token authentication.
            </p>
          </div>
          {/* Pillar 3 */}
          <div className="bg-slate-800/30 border border-slate-800 rounded-2xl p-6 hover:border-emerald-500/30 transition-all group">
            <div className="w-12 h-12 rounded-xl bg-amber-500/10 flex items-center justify-center text-amber-400 mb-5 font-bold group-hover:scale-110 transition-transform">03</div>
            <h3 className="text-xl font-bold text-white mb-2">MySQL Database</h3>
            <p className="text-sm text-slate-400 leading-relaxed">
              Relational database design, complex table joins, SQL Injection protection, and modern ORM implementations (Prisma/Sequelize).
            </p>
          </div>
          {/* Pillar 4 */}
          <div className="bg-slate-800/30 border border-slate-800 rounded-2xl p-6 hover:border-emerald-500/30 transition-all group">
            <div className="w-12 h-12 rounded-xl bg-purple-500/10 flex items-center justify-center text-purple-400 mb-5 font-bold group-hover:scale-110 transition-transform">04</div>
            <h3 className="text-xl font-bold text-white mb-2">CI/CD Deployment</h3>
            <p className="text-sm text-slate-400 leading-relaxed">
              Linux Ubuntu VPS configuration, SSH management, Nginx reverse proxy servers, and pipeline automation with GitHub Actions.
            </p>
          </div>
        </div>
      </section>
   {/*    Curiculum session */}

   {/* 3.5 FEATURES & BENEFITS SECTION */}
      <section id="features" className="py-20 bg-slate-950/40 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Why Learn With <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">ITKomputer</span>?
            </h2>
            <p className="text-slate-400">
              We don't just teach code. We provide an exclusive premium learning ecosystem built for your absolute success.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="p-8 rounded-2xl bg-slate-900 border border-slate-800 hover:border-cyan-500/20 transition-all group">
              <div className="w-12 h-12 rounded-xl bg-cyan-500/10 flex items-center justify-center text-2xl mb-6 group-hover:scale-110 transition-transform">
                🎯
              </div>
              <h3 className="text-xl font-bold text-white mb-3">1-on-1 Dedicated Sesi</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Zero distractions. The entire class duration is 100% focused on your project, your screen, and your learning pace. No generic group webinars.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="p-8 rounded-2xl bg-slate-900 border border-slate-800 hover:border-emerald-500/20 transition-all group">
              <div className="w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center text-2xl mb-6 group-hover:scale-110 transition-transform">
                🚀
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Real-World Production Case</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Skip the boring theories. You will build and scale production-ready systems, handle real runtime bugs, and deal with security configurations.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="p-8 rounded-2xl bg-slate-900 border border-slate-800 hover:border-purple-500/20 transition-all group">
              <div className="w-12 h-12 rounded-xl bg-purple-500/10 flex items-center justify-center text-2xl mb-6 group-hover:scale-110 transition-transform">
                ⚡
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Post-Class Code Review</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Gain exclusive access to private repository reviews. Get professional code refactoring advice to ensure your build is clean and performant.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* 4. HOURLY RATE CALCULATOR SECTION */}
      <section id="calculator" className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">Customizable &amp; Flexible Learning Plan</h2>
            <p className="text-slate-400 mb-6 leading-relaxed">
              Every topic is tailored to your individual learning pace. Our intelligent calculator instantly determines the best rates based on your custom hourly package selection.
            </p>
            <ul className="space-y-4 text-sm text-slate-300">
              <li className="flex items-start gap-3">
                <span className="text-emerald-400 mt-0.5">✔</span>
                <div><strong>Tailored Curriculum:</strong> Core materials are adjusted to match your current programming knowledge.</div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-emerald-400 mt-0.5">✔</span>
                <div><strong>Automatic Volume Discounts:</strong> The more hours you book, the lower the base hourly rate becomes.</div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-emerald-400 mt-0.5">✔</span>
                <div><strong>Consulting Mode:</strong> Sesi privat can be utilized directly to review or debug existing production code from your current project.</div>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-6">
            <div className="bg-slate-800/40 border border-slate-700/60 rounded-3xl p-6 sm:p-8 backdrop-blur-sm shadow-xl">
              <div className="mb-6">
                <h3 className="text-xl font-bold text-white">Hourly Rate Calculator</h3>
                <p className="text-xs text-slate-400">Select your core path &amp; duration for instant pricing estimates</p>
              </div>

              <div className="space-y-5">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">Core Track Option</label>
                  <select 
                    className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-emerald-500"
                    onChange={(e) => setBasePrice(parseInt(e.target.value))}
                  >
                    <option value={40}>React + Node.js + MySQL Fullstack — Base: $40/hr</option>
                    <option value={30}>Frontend React.js Only — Base: $30/hr</option>
                    <option value={35}>Backend Node.js &amp; MySQL Only — Base: $35/hr</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">Package Duration (Hours)</label>
                  <select 
                    value={hours}
                    onChange={handleHoursChange}
                    className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-emerald-500"
                  >
                    <option value={2}>2 Hours (Trial &amp; Setup) — Regular Price</option>
                    <option value={5}>5 Hours (Topic-Focused) — Save $2/hr</option>
                    <option value={10}>10 Hours (Deep Dive Study) — Save $4/hr</option>
                    <option value={15}>15 Hours (Complete Course curriculum) — Save $6/hr</option>
                  </select>
                </div>

                <div className="bg-slate-900/60 p-4 rounded-xl border border-slate-800 space-y-3">
                  <div className="flex justify-between items-center text-sm text-slate-400">
                    <span>Final Hourly Rate:</span>
                    <span className="font-mono text-white font-semibold">${basePrice - discount}/hr</span>
                  </div>
                  <hr className="border-slate-800" />
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-slate-400">Total Tuition Investment:</span>
                    <span className="font-mono text-2xl font-black text-emerald-400">${totalPrice}</span>
                  </div>
                  {discount > 0 && (
                    <div className="text-[11px] text-cyan-400 flex items-center gap-1">
                      🎉 You saved a bulk total discount of: <strong>${discount * hours}</strong>
                    </div>
                  )}
                </div>

                <a 
                  href="https://wa.me/6282110231599?text=Hi%20KursusWeb%20Admin,%20I%20am%20interested%20in%20enrolling%20the%20Fullstack%20React%20Node%20MySQL%20Private%20Class." 
                  target="_blank" 
                  rel="noreferrer" 
                  className="block w-full text-center bg-gradient-to-r from-emerald-500 to-cyan-500 text-slate-900 font-extrabold py-3.5 rounded-xl hover:opacity-95 transition-opacity"
                >
                  Secure Your Private Session via WA
                </a>
                
                <div className="text-center text-[11px] text-slate-500">
                  🔒 Secure 256-bit Connection &amp; Integrated With Itkomputer.com
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. FOOTER */}
      <footer className="border-t border-slate-800 mt-20 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>© 2026 KURSUSWEB.web.id - ITKomputer Online Private Course. All rights reserved.</p>
          <p>Contact Us: admin@itkomputer.com | +6282110231599</p>
        </div>
      </footer>

    </div>
  );
}