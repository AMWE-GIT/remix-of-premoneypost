import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { CountryCodeSelector } from './CountryCodeSelector';

const ContactSection = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    countryCode: '+971',
    message: ''
  });
  
  const [errors, setErrors] = useState<{
    name?: string;
    company?: string;
    email?: string;
    phone?: string;
  }>({});
  
  const [touched, setTouched] = useState({
    name: false,
    company: false,
    email: false,
    phone: false,
    message: false
  });
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error when user types
    if (errors[name as keyof typeof errors]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };
  
  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name } = e.target;
    setTouched(prev => ({ ...prev, [name]: true }));
    validateField(name, formData[name as keyof typeof formData]);
  };
  
  const validateField = (name: string, value: string) => {
    // Don't validate message field
    if (name === 'message') return true;
    
    if (!value.trim()) {
      setErrors(prev => ({ ...prev, [name]: 'Field is required' }));
      return false;
    }
    
    if (name === 'email') {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(value)) {
        setErrors(prev => ({ ...prev, [name]: 'Invalid email address' }));
        return false;
      }
    }
    
    setErrors(prev => ({ ...prev, [name]: undefined }));
    return true;
  };
  
  const handleCountryCodeChange = (value: string) => {
    setFormData(prev => ({ ...prev, countryCode: value }));
  };
  
  const validateForm = () => {
    const newErrors: {[key: string]: string} = {};
    let isValid = true;
    
    // Check required fields - excluding message
    if (!formData.name.trim()) {
      newErrors.name = 'Field is required';
      isValid = false;
    }

    if (!formData.company.trim()) {
      newErrors.company = 'Field is required';
      isValid = false;
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Field is required';
      isValid = false;
    } else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email)) {
        newErrors.email = 'Invalid email address';
        isValid = false;
      }
    }
    
    if (!formData.phone.trim()) {
      newErrors.phone = 'Field is required';
      isValid = false;
    }
    
    setErrors(newErrors);
    // Set all fields as touched
    setTouched({
      name: true,
      company: true,
      email: true,
      phone: true,
      message: true
    });
    
    return isValid;
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    // Get the actual code for submission
    const actualCode = formData.countryCode.split('-')[0] || formData.countryCode;
    
    // Format phone with country code for submission
    const formattedData = {
      ...formData,
      phone: formData.phone ? `${actualCode} ${formData.phone}` : ''
    };
    
    // In a real app, you would send this data to your backend
    console.log("Form submitted:", formattedData);
    
    // Set form as submitted
    setFormSubmitted(true);
  };

  // Render thank you message when form is submitted
  if (formSubmitted) {
    return (
      <section id="contact" className="pt-32 pb-24">
        <div className="container mx-auto px-4 flex justify-center">
          <div className="max-w-lg w-full">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-cardo font-bold mb-16 text-center">Contact</h2>
            
            <div className="text-center">
              <p className="text-xl font-source-sans font-semibold">
                <span className="text-neon">Thank you</span> for reaching out.
                <br />
                We will get back to you within 3 working days.
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="pt-32 pb-24">
      <div className="container mx-auto px-4 flex justify-center">
        <div className="max-w-lg w-full">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-cardo font-bold mb-16 text-center">Contact</h2>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-base font-source-sans font-semibold mb-2 text-white">Name</label>
              <Input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                onBlur={handleBlur}
                className={`w-full px-4 py-3 bg-secondary text-black rounded-lg focus:outline-none focus:ring-2 focus:ring-white ${
                  touched.name && errors.name ? 'border-red-500 ring-1 ring-red-500' : ''
                }`}
                placeholder="Your name"
              />
              {touched.name && errors.name && (
                <p className="text-red-500 text-sm mt-1 font-source-sans">{errors.name}</p>
              )}
            </div>

            <div>
              <label htmlFor="company" className="block text-base font-source-sans font-semibold mb-2 text-white">Company</label>
              <Input
                type="text"
                id="company"
                name="company"
                value={formData.company}
                onChange={handleChange}
                onBlur={handleBlur}
                className={`w-full px-4 py-3 bg-secondary text-black rounded-lg focus:outline-none focus:ring-2 focus:ring-white ${
                  touched.company && errors.company ? 'border-red-500 ring-1 ring-red-500' : ''
                }`}
                placeholder="Your company"
              />
              {touched.company && errors.company && (
                <p className="text-red-500 text-sm mt-1 font-source-sans">{errors.company}</p>
              )}
            </div>
            
            <div>
              <label htmlFor="email" className="block text-base font-source-sans font-semibold mb-2 text-white">Email</label>
              <Input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                onBlur={handleBlur}
                className={`w-full px-4 py-3 bg-secondary text-black rounded-lg focus:outline-none focus:ring-2 focus:ring-white ${
                  touched.email && errors.email ? 'border-red-500 ring-1 ring-red-500' : ''
                }`}
                placeholder="your.email@example.com"
              />
              {touched.email && errors.email && (
                <p className="text-red-500 text-sm mt-1 font-source-sans">{errors.email}</p>
              )}
            </div>
            
            <div>
              <label htmlFor="phone" className="block text-base font-source-sans font-semibold mb-2 text-white">Phone</label>
              <div className={`relative flex bg-secondary text-black rounded-lg ${
                touched.phone && errors.phone ? 'border-red-500 ring-1 ring-red-500' : ''
              }`}>
                <div className="flex-shrink-0 pl-3 flex items-center">
                  <CountryCodeSelector 
                    value={formData.countryCode} 
                    onValueChange={handleCountryCodeChange}
                    className="bg-transparent text-black w-auto px-0 py-0 focus:ring-0"
                  />
                </div>
                <Input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className="flex-grow border-0 bg-transparent rounded-l-none focus:ring-0 focus:outline-none"
                  placeholder="Phone number"
                />
              </div>
              {touched.phone && errors.phone && (
                <p className="text-red-500 text-sm mt-1 font-source-sans">{errors.phone}</p>
              )}
            </div>
            
            <div>
              <label htmlFor="message" className="block text-base font-source-sans font-semibold mb-2 text-white">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                onBlur={handleBlur}
                rows={5}
                className="w-full px-4 py-3 bg-secondary text-black rounded-lg focus:outline-none focus:ring-2 focus:ring-white text-sm font-source-sans"
                placeholder="Tell us what you're building and where you are today. We'll get back to you within 3 working days."
              ></textarea>
              {/* No error message for the message field */}
            </div>
            
            <div className="text-center">
              <Button type="submit" className="px-8 py-3">
                Send
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
