import { useState } from "react";
import hassanAbbasImage from "../assets/Hassan abbas.jpeg";

const ContactUs = () => {
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [phone, setPhone] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"success" | "error" | null>(null);

  const validateEmail = (value: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!value) {
      setEmailError("");
    } else if (!emailRegex.test(value)) {
      setEmailError("Please enter a valid email address");
    } else {
      setEmailError("");
    }
  };

  const formatPhoneNumber = (value: string) => {
    // Remove all non-digit characters except + at the start
    const cleaned = value.replace(/[^\d+]/g, "");
    
    // Only allow + at the beginning
    const phoneNumber = cleaned.startsWith('+') 
      ? '+' + cleaned.slice(1).replace(/\+/g, '')
      : cleaned.replace(/\+/g, '');
    
    // Format as +1 (XXX) XXX-XXXX
    if (phoneNumber.length === 0) {
      return "";
    } else if (phoneNumber.startsWith('+')) {
      const digits = phoneNumber.slice(1);
      if (digits.length === 0) {
        return "+";
      } else if (digits.length === 1) {
        return `+${digits}`;
      } else if (digits.length <= 4) {
        return `+${digits.slice(0, 1)} (${digits.slice(1)}`;
      } else if (digits.length <= 7) {
        return `+${digits.slice(0, 1)} (${digits.slice(1, 4)}) ${digits.slice(4)}`;
      } else {
        return `+${digits.slice(0, 1)} (${digits.slice(1, 4)}) ${digits.slice(4, 7)}-${digits.slice(7, 11)}`;
      }
    } else {
      // If no + prefix, format without country code
      if (phoneNumber.length <= 3) {
        return `(${phoneNumber}`;
      } else if (phoneNumber.length <= 6) {
        return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3)}`;
      } else {
        return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3, 6)}-${phoneNumber.slice(6, 10)}`;
      }
    }
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatPhoneNumber(e.target.value);
    setPhone(formatted);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate email before submitting
    if (emailError || !email) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch("http://localhost:5678/webhook/hassan-onboarding", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          company,
          email,
          phone,
          subject,
          message,
          submittedAt: new Date().toISOString(),
        }),
      });

      if (response.ok) {
        setSubmitStatus("success");
        // Reset form
        setName("");
        setCompany("");
        setEmail("");
        setPhone("");
        setSubject("");
        setMessage("");
        setEmailError("");
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const contacts = [
    {
      name: "Hassan Abbas",
      role: "Sales & Marketing",
      phone: "+1 (832) 970-2805",
      email: "info@precisionsignsmedia.com",
      image: hassanAbbasImage
    },
    {
      name: "Sarah Johnson",
      role: "Customer Support",
      phone: "832 555-0123",
      email: "support@precisionsigns.com",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=100&h=100&auto=format&fit=crop"
    },
    {
      name: "Michael Chen",
      role: "Project Manager",
      phone: "832 555-0199",
      email: "projects@precisionsigns.com",
      image: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=100"
    }
  ];

  return (
    <section id="contact-us" className="w-full py-16 md:py-24 px-6 bg-background">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-orange-500 mb-4">
            Get In Touch
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We'd love to hear from you! Please fill out the form below or reach out to us directly.
          </p>
        </div>

        {/* Contact Form */}
        <div className="max-w-2xl mx-auto mb-16">
          {submitStatus === "success" && (
            <div className="mb-4 p-4 bg-green-50 border border-green-200 text-green-800 rounded-lg">
              Thank you! Your message has been sent successfully. We'll get back to you soon.
            </div>
          )}
          {submitStatus === "error" && (
            <div className="mb-4 p-4 bg-red-50 border border-red-200 text-red-800 rounded-lg">
              Oops! Something went wrong. Please try again or contact us directly.
            </div>
          )}
          <form
            onSubmit={handleSubmit}
            className="space-y-5"
          >
            <div className="flex flex-col items-center gap-y-5 gap-x-6 [&>*]:w-full sm:flex-row">
              <div>
                <label className="font-medium text-foreground">
                  Name
                </label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full mt-2 px-3 py-2 text-foreground bg-background outline-none border border-border focus:border-orange-500 shadow-sm rounded-lg transition-colors"
                />
              </div>
              <div>
                <label className="font-medium text-foreground">
                  Company
                </label>
                <input
                  type="text"
                  required
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                  className="w-full mt-2 px-3 py-2 text-foreground bg-background outline-none border border-border focus:border-orange-500 shadow-sm rounded-lg transition-colors"
                />
              </div>
            </div>
            <div>
              <label className="font-medium text-foreground">
                Email
              </label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  validateEmail(e.target.value);
                }}
                className={`w-full mt-2 px-3 py-2 text-foreground bg-background outline-none border ${emailError ? 'border-red-500' : 'border-border'} focus:border-orange-500 shadow-sm rounded-lg transition-colors`}
              />
              {emailError && (
                <p className="text-red-500 text-sm mt-1">{emailError}</p>
              )}
            </div>
            <div>
              <label className="font-medium text-foreground">
                Phone Number
              </label>
              <input
                type="tel"
                placeholder="(555) 000-0000"
                required
                value={phone}
                onChange={handlePhoneChange}
                maxLength={18}
                className="w-full mt-2 px-3 py-2 bg-background text-foreground outline-none border border-border focus:border-orange-500 shadow-sm rounded-lg transition-colors"
              />
            </div>
            <div>
              <label className="font-medium text-foreground">
                Subject
              </label>
              <input
                type="text"
                required
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                className="w-full mt-2 px-3 py-2 text-foreground bg-background outline-none border border-border focus:border-orange-500 shadow-sm rounded-lg transition-colors"
              />
            </div>
            <div>
              <label className="font-medium text-foreground">
                Message
              </label>
              <textarea 
                required
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full mt-2 h-36 px-3 py-2 resize-none bg-background outline-none border border-border focus:border-orange-500 shadow-sm rounded-lg transition-colors text-foreground"
              ></textarea>
            </div>
            <button
              type="submit"
              disabled={isSubmitting || !!emailError}
              className="w-full px-4 py-3 text-white font-medium bg-orange-500 hover:bg-orange-600 active:bg-orange-700 disabled:bg-gray-400 disabled:cursor-not-allowed rounded-lg duration-150 shadow-md"
            >
              {isSubmitting ? "Sending..." : "Submit"}
            </button>
          </form>
        </div>

        {/* Contact Cards */}
        <div className="text-center mb-8">
          <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
            Or Contact Our Team Directly
          </h3>
          <p className="text-muted-foreground">
            Our team is ready to assist you with any questions.
          </p>
        </div>
        
        <div className="flex flex-wrap items-center justify-center gap-6">
          {contacts.map((contact, index) => (
            <div key={index} className="text-sm text-muted-foreground w-80 divide-y divide-border border border-border rounded-lg bg-card shadow-lg">
              <div className="flex items-start justify-between p-4">
                <div>
                  <h3 className="text-lg text-foreground font-semibold mb-1">{contact.name}</h3>
                  <p className="text-muted-foreground">{contact.role}</p>
                </div>
                <img 
                  className="h-12 w-12 rounded-full border-2 border-primary/20" 
                  src={contact.image} 
                  alt={`${contact.name} profile`} 
                />
              </div>
              <div className="flex items-center divide-x divide-border">
                <a 
                  href={`mailto:${contact.email}`}
                  className="flex items-center justify-center gap-2 w-1/2 py-3 hover:bg-accent transition-colors"
                >
                  <svg width="18" height="14" viewBox="0 0 18 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16.5 2.5c0-.825-.675-1.5-1.5-1.5H3c-.825 0-1.5.675-1.5 1.5m15 0v9c0 .825-.675 1.5-1.5 1.5H3c-.825 0-1.5-.675-1.5-1.5v-9m15 0L9 7.75 1.5 2.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  Send Email
                </a>
                <a 
                  href={`tel:${contact.phone.replace(/\s/g, '')}`}
                  className="flex items-center justify-center gap-2 w-1/2 py-3 hover:bg-accent transition-colors"
                >
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11.29 3.75a3.75 3.75 0 0 1 2.962 2.963M11.289.75a6.75 6.75 0 0 1 5.963 5.955m-.75 5.985v2.25a1.5 1.5 0 0 1-1.635 1.5 14.84 14.84 0 0 1-6.472-2.303 14.6 14.6 0 0 1-4.5-4.5 14.84 14.84 0 0 1-2.303-6.502A1.5 1.5 0 0 1 3.085 1.5h2.25a1.5 1.5 0 0 1 1.5 1.29 9.6 9.6 0 0 0 .525 2.108 1.5 1.5 0 0 1-.338 1.582l-.952.952a12 12 0 0 0 4.5 4.5l.952-.952a1.5 1.5 0 0 1 1.582-.338c.681.254 1.388.43 2.108.526a1.5 1.5 0 0 1 1.29 1.522" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  Call Now
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
