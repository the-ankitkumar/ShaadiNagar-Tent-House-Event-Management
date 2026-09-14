import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/ShaadiNagar_logo_embedded.svg";
import heroImg from "../assets/wedding (image 1).jpg";

const FacebookIcon = () => (
  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="#1877F2">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
  </svg>
);

const GoogleIcon = () => (
  <svg className="w-5 h-5" viewBox="0 0 24 24">
    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" />
    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
  </svg>
);

const AppleIcon = () => (
  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.05 20.28c-.98.95-2.05.88-3.08.4-1.09-.5-2.08-.48-3.24 0-1.44.62-2.2.44-3.06-.4C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
  </svg>
);

const EyeIcon = () => (
  <svg className="w-5 h-5 text-neutral-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
    <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
);

const EyeOffIcon = () => (
  <svg className="w-5 h-5 text-neutral-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
    <path strokeLinecap="round" strokeLinejoin="round" d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88" />
  </svg>
);

const UserIcon = () => (
  <svg className="w-5 h-5 text-neutral-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
  </svg>
);

const MailIcon = () => (
  <svg className="w-5 h-5 text-neutral-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
  </svg>
);

const PhoneIcon = () => (
  <svg className="w-5 h-5 text-neutral-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
  </svg>
);

const CalendarIcon = () => (
  <svg className="w-5 h-5 text-neutral-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
    <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
  </svg>
);

export default function SignUpPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    location: "India",
    eventDate: "",
    phone: "",
    role: "planning",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({});

  const handleChange = (field, value) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    setErrors((prev) => ({ ...prev, [field]: undefined }));
  };

  const validate = () => {
    const newErrors = {};
    if (!form.name.trim()) newErrors.name = "Name is required";
    if (!form.email.trim()) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(form.email)) newErrors.email = "Enter a valid email";
    if (!form.password.trim()) newErrors.password = "Password is required";
    else if (form.password.length < 6) newErrors.password = "Password must be at least 6 characters";
    if (!form.phone.trim()) newErrors.phone = "Phone number is required";
    else if (!/^\d{10}$/.test(form.phone.replace(/\s/g, ""))) newErrors.phone = "Enter a valid 10-digit phone number";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validate();
    setErrors(newErrors);
    if (Object.keys(newErrors).length === 0) {
      alert("Sign up successful! (Frontend only — no backend connected)");
    }
  };

  return (
    <div className="h-screen flex flex-col bg-neutral-50/60 overflow-hidden">
      {/* Top Logo Bar */}
      <div className="w-full py-3 flex justify-center bg-white border-b border-neutral-100 shrink-0">
        <Link to="/">
          <img src={logo} alt="ShaadiNagar" className="h-20 md:h-24" />
        </Link>
      </div>

      {/* Content — Centered Container */}
      <div className="flex-1 flex items-center justify-center p-4 md:p-6 overflow-hidden">
        <div className="w-full max-w-4xl h-full max-h-[580px] bg-white rounded-2xl shadow-xl border border-neutral-200/80 hover:border-sky-300 hover:shadow-2xl hover:shadow-sky-200/60 transition-all duration-300 flex overflow-hidden group">
          {/* Left — Wedding Image with Logo & Quote */}
          <div className="hidden lg:block lg:w-[38%] relative h-full shrink-0">
            <img
              src={heroImg}
              alt="Beautiful wedding"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-transparent flex flex-col justify-end p-6 text-white">
              <div className="flex items-center gap-2 mb-2">
                <span className="font-serif font-bold text-xl tracking-wide text-amber-400 drop-shadow-md">
                  ShaadiNagar
                </span>
                <span className="text-[10px] font-bold uppercase tracking-widest bg-amber-500/20 text-amber-300 px-2.5 py-0.5 rounded-full border border-amber-500/30">
                  Events
                </span>
              </div>
              <p className="font-serif text-xs md:text-sm font-semibold italic leading-relaxed text-white/95">
                “Begin your journey with us. Crafting your dream celebrations into unforgettable memories.”
              </p>
            </div>
          </div>

          {/* Right — Sign Up Form */}
          <div className="flex-1 flex flex-col items-center justify-center px-6 md:px-10 py-5 bg-white overflow-y-auto">
            <div className="w-full max-w-sm">
              {/* Social Buttons */}
              <div className="space-y-2">
                <button
                  type="button"
                  className="w-full flex items-center justify-center gap-3 px-4 py-2 border border-neutral-300 rounded-lg text-xs font-medium text-neutral-700 hover:bg-sky-50 hover:border-sky-300 hover:text-sky-900 transition-all duration-200"
                >
                  <FacebookIcon />
                  Sign up with Facebook
                </button>
                <button
                  type="button"
                  className="w-full flex items-center justify-center gap-3 px-4 py-2 border border-neutral-300 rounded-lg text-xs font-medium text-neutral-700 hover:bg-sky-50 hover:border-sky-300 hover:text-sky-900 transition-all duration-200"
                >
                  <GoogleIcon />
                  Sign up with Google
                </button>
                <button
                  type="button"
                  className="w-full flex items-center justify-center gap-3 px-4 py-2 border border-neutral-300 rounded-lg text-xs font-medium text-neutral-700 hover:bg-sky-50 hover:border-sky-300 hover:text-sky-900 transition-all duration-200"
                >
                  <AppleIcon />
                  Sign up with Apple
                </button>
              </div>

              {/* Divider */}
              <div className="flex items-center gap-3 my-2.5">
                <div className="flex-1 h-px bg-neutral-200" />
                <span className="text-[11px] text-neutral-400 whitespace-nowrap">Or sign up with your email</span>
                <div className="flex-1 h-px bg-neutral-200" />
              </div>

              {/* Sign Up Form */}
              <form onSubmit={handleSubmit} className="space-y-2">
                {/* Name */}
                <div>
                  <div className="relative">
                    <input
                      type="text"
                      id="signup-name"
                      placeholder="Name and surname"
                      value={form.name}
                      onChange={(e) => handleChange("name", e.target.value)}
                      className={`w-full px-3 py-1.5 pr-10 border rounded-lg text-xs text-neutral-800 placeholder-neutral-400 outline-none transition-colors focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 ${
                        errors.name ? "border-red-400" : "border-neutral-300"
                      }`}
                    />
                    <span className="absolute right-3 top-1/2 -translate-y-1/2"><UserIcon /></span>
                  </div>
                  {errors.name && <p className="text-red-500 text-[10px] mt-0.5">{errors.name}</p>}
                </div>

                {/* Email */}
                <div>
                  <div className="relative">
                    <input
                      type="email"
                      id="signup-email"
                      placeholder="Email"
                      value={form.email}
                      onChange={(e) => handleChange("email", e.target.value)}
                      className={`w-full px-3 py-1.5 pr-10 border rounded-lg text-xs text-neutral-800 placeholder-neutral-400 outline-none transition-colors focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 ${
                        errors.email ? "border-red-400" : "border-neutral-300"
                      }`}
                    />
                    <span className="absolute right-3 top-1/2 -translate-y-1/2"><MailIcon /></span>
                  </div>
                  {errors.email && <p className="text-red-500 text-[10px] mt-0.5">{errors.email}</p>}
                </div>

                {/* Password */}
                <div>
                  <div className="relative">
                    <input
                      type={showPassword ? "text" : "password"}
                      id="signup-password"
                      placeholder="Password"
                      value={form.password}
                      onChange={(e) => handleChange("password", e.target.value)}
                      className={`w-full px-3 py-1.5 pr-10 border rounded-lg text-xs text-neutral-800 placeholder-neutral-400 outline-none transition-colors focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 ${
                        errors.password ? "border-red-400" : "border-neutral-300"
                      }`}
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 hover:opacity-70 transition-opacity"
                    >
                      {showPassword ? <EyeOffIcon /> : <EyeIcon />}
                    </button>
                  </div>
                  {errors.password && <p className="text-red-500 text-[10px] mt-0.5">{errors.password}</p>}
                </div>

                {/* Event Location */}
                <div>
                  <div className="relative">
                    <select
                      id="signup-location"
                      value={form.location}
                      onChange={(e) => handleChange("location", e.target.value)}
                      className="w-full px-3 py-1.5 border border-neutral-300 rounded-lg text-xs text-neutral-800 outline-none transition-colors focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 appearance-none bg-white cursor-pointer"
                    >
                      <option value="India">India</option>
                      <option value="Bihar">Bihar</option>
                      <option value="Jharkhand">Jharkhand</option>
                      <option value="Uttar Pradesh">Uttar Pradesh</option>
                      <option value="Delhi">Delhi</option>
                      <option value="Maharashtra">Maharashtra</option>
                      <option value="Rajasthan">Rajasthan</option>
                      <option value="Other">Other</option>
                    </select>
                    <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
                      <svg className="w-3.5 h-3.5 text-neutral-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                    <label className="absolute -top-2 left-2 bg-white px-1 text-[10px] text-neutral-500">Event location</label>
                  </div>
                </div>

                {/* Event Date + Phone */}
                <div className="grid grid-cols-2 gap-2.5">
                  <div>
                    <div className="relative">
                      <input
                        type="date"
                        id="signup-date"
                        value={form.eventDate}
                        onChange={(e) => handleChange("eventDate", e.target.value)}
                        className="w-full px-3 py-1.5 border border-neutral-300 rounded-lg text-xs text-neutral-800 outline-none transition-colors focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20"
                      />
                      <label className="absolute -top-2 left-2 bg-white px-1 text-[10px] text-neutral-500">Event date</label>
                    </div>
                  </div>
                  <div>
                    <div className="relative">
                      <input
                        type="tel"
                        id="signup-phone"
                        placeholder="Phone number"
                        value={form.phone}
                        onChange={(e) => handleChange("phone", e.target.value)}
                        className={`w-full px-3 py-1.5 pr-10 border rounded-lg text-xs text-neutral-800 placeholder-neutral-400 outline-none transition-colors focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 ${
                          errors.phone ? "border-red-400" : "border-neutral-300"
                        }`}
                      />
                      <span className="absolute right-3 top-1/2 -translate-y-1/2"><PhoneIcon /></span>
                    </div>
                    {errors.phone && <p className="text-red-500 text-[10px] mt-0.5">{errors.phone}</p>}
                  </div>
                </div>

                {/* Role Selector */}
                <div className="flex items-center gap-3 py-0.5">
                  <span className="text-[11px] text-neutral-600 font-medium">I am</span>
                  <label className="flex items-center gap-1 cursor-pointer">
                    <input
                      type="radio"
                      name="role"
                      value="planning"
                      checked={form.role === "planning"}
                      onChange={(e) => handleChange("role", e.target.value)}
                      className="w-3.5 h-3.5 accent-green-600"
                    />
                    <span className="text-[11px] text-neutral-700">Planning my event</span>
                  </label>
                  <label className="flex items-center gap-1 cursor-pointer">
                    <input
                      type="radio"
                      name="role"
                      value="guest"
                      checked={form.role === "guest"}
                      onChange={(e) => handleChange("role", e.target.value)}
                      className="w-3.5 h-3.5 accent-green-600"
                    />
                    <span className="text-[11px] text-neutral-700">Wedding guest</span>
                  </label>
                </div>

                {/* Terms */}
                <p className="text-[10px] text-neutral-400">
                  By clicking &apos;Sign up&apos; I accept the{" "}
                  <a href="#" className="text-amber-600 hover:text-amber-700 underline underline-offset-2">Terms of Use</a>{" "}
                  of ShaadiNagar.
                </p>

                {/* Submit */}
                <button
                  type="submit"
                  id="signup-submit"
                  className="w-full py-2 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg transition-all duration-300 shadow-md hover:shadow-lg text-xs"
                >
                  Sign up
                </button>
              </form>

              {/* Login Link */}
              <p className="text-center text-xs text-neutral-500 mt-2 mb-1">
                Already have an account?{" "}
                <Link to="/login" className="text-rose-600 font-semibold hover:text-rose-700 transition-colors">
                  Log in
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

