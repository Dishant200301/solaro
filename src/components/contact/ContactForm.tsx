import { useRef } from "react";
import FadeSection from "@/components/FadeSection";
import { User, Phone, Mail, MessageSquare } from "lucide-react";

const ContactForm = () => {
    return (
        <section className="w-full px-5 md:px-8 lg:px-16 xl:px-28 py-12 md:py-20 bg-[rgb(159,43,43)] text-white">
            <div className="max-w-[1400px] mx-auto">
                <FadeSection className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
                    <div className="space-y-6">
                        <span className="font-body font-medium text-[12px] md:text-[14px] leading-[18px] uppercase tracking-[2px] opacity-90 block text-white">REACH OUT</span>
                        <h2 className="font-heading font-normal text-[40px] md:text-[50px] leading-[1.2] md:leading-[60px] text-white">Contact Us</h2>
                        <p className="font-body font-normal text-[14px] md:text-[16px] leading-[22px] md:leading-[26px] text-white/60 max-w-md">
                            Have questions or need assistance? We're here to help! Reach out to us via phone, email, or through our contact form, and we'll get back to you as soon as possible
                        </p>
                    </div>

                    <form className="space-y-6 md:space-y-8">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="space-y-2">
                                <label className="font-body font-normal text-[14px] leading-[20px] text-[rgb(250,245,241)] block uppercase tracking-wider">First Name</label>
                                <div className="border-b border-white/30 pb-2 flex items-center gap-3 group focus-within:border-white transition-colors">
                                    <User size={18} className="opacity-50 group-focus-within:opacity-100 transition-opacity" />
                                    <input
                                        type="text"
                                        required
                                        placeholder="Enter your first name"
                                        className="bg-transparent border-none outline-none w-full placeholder:text-white/50 font-body font-normal text-[16px] leading-[26px] text-white"
                                    />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label className="font-body font-normal text-[14px] leading-[20px] text-[rgb(250,245,241)] block uppercase tracking-wider">Name</label>
                                <div className="border-b border-white/30 pb-2 flex items-center gap-3 group focus-within:border-white transition-colors">
                                    <User size={18} className="opacity-50 group-focus-within:opacity-100 transition-opacity" />
                                    <input
                                        type="text"
                                        required
                                        placeholder="Enter your last name"
                                        className="bg-transparent border-none outline-none w-full placeholder:text-white/50 font-body font-normal text-[16px] leading-[26px] text-white"
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="space-y-2">
                                <label className="font-body font-normal text-[14px] leading-[20px] text-[rgb(250,245,241)] block uppercase tracking-wider">Mobile Number</label>
                                <div className="border-b border-white/30 pb-2 flex items-center gap-3 group focus-within:border-white transition-colors">
                                    <Phone size={18} className="opacity-50 group-focus-within:opacity-100 transition-opacity" />
                                    <input
                                        type="tel"
                                        required
                                        placeholder="Enter your mobile number"
                                        className="bg-transparent border-none outline-none w-full placeholder:text-white/50 font-body font-normal text-[16px] leading-[26px] text-white"
                                    />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label className="font-body font-normal text-[14px] leading-[20px] text-[rgb(250,245,241)] block uppercase tracking-wider">Email Address</label>
                                <div className="border-b border-white/30 pb-2 flex items-center gap-3 group focus-within:border-white transition-colors">
                                    <img src="/images/salon/email-icon.svg" alt="Email" className="w-[14px] h-[14px] mr-1 invert" />
                                    <input
                                        type="email"
                                        required
                                        placeholder="Enter your email address"
                                        className="bg-transparent border-none outline-none w-full placeholder:text-white/50 font-body font-normal text-[16px] leading-[26px] text-white"
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="font-body font-normal text-[14px] leading-[20px] text-[rgb(250,245,241)] block uppercase tracking-wider">Expert</label>
                            <div className="border-b border-white/30 pb-2 flex items-center gap-3 group focus-within:border-white transition-colors">
                                <img src="/images/salon/message.svg" alt="Message" className="w-[14px] h-[14px]  mt-1 invert mr-1" />
                                <input
                                    type="text"
                                    required
                                    placeholder="Enter Message"
                                    className="bg-transparent border-none outline-none w-full placeholder:text-white/50 font-body font-normal text-[16px] leading-[26px] text-white"
                                />
                            </div>
                        </div>

                        <button type="submit" className="bg-white text-[rgb(10,4,4)] font-body font-semibold text-[14px] leading-[14px] uppercase tracking-[2px] px-8 py-4 rounded-t-md rounded-bl-md hover:bg-white/90 transition-colors mt-8 w-max">
                            SEND MESSAGE
                        </button>
                    </form>
                </FadeSection>
            </div>
        </section>
    );
};

export default ContactForm;
