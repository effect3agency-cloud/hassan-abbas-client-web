import { Badge } from "@/components/ui/badge";

const ContactUs = () => {
  const contacts = [
    {
      name: "Hassan Abbas",
      role: "Sales & Marketing",
      phone: "832 970-2805",
      email: "Habbas7725@gmail.com",
      image: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=100",
      badge: "Manager"
    },
    {
      name: "Sarah Johnson",
      role: "Customer Support",
      phone: "832 555-0123",
      email: "support@precisionsigns.com",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=100&h=100&auto=format&fit=crop",
      badge: "Support"
    },
    {
      name: "Michael Chen",
      role: "Project Manager",
      phone: "832 555-0199",
      email: "projects@precisionsigns.com",
      image: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=100",
      badge: "Manager"
    }
  ];

  return (
    <section id="contact-us" className="w-full py-16 md:py-24 px-6 bg-background">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Badge variant="default" className="bg-primary text-primary-foreground border-primary">
              Contact Us
            </Badge>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Get In Touch
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our team is here to help you with your signage needs. Reach out to us directly.
          </p>
        </div>

        {/* Contact Cards */}
        <div className="flex flex-wrap items-center justify-center gap-6">
          {contacts.map((contact, index) => (
            <div key={index} className="text-sm text-muted-foreground w-80 divide-y divide-border border border-border rounded-lg bg-card shadow-lg">
              <div className="flex items-start justify-between p-4">
                <div>
                  <div className="flex items-center space-x-2 mb-1">
                    <h3 className="text-lg text-foreground font-semibold">{contact.name}</h3>
                    <Badge variant="default" className="text-xs">
                      {contact.badge}
                    </Badge>
                  </div>
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
