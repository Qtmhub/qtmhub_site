"use client";

import React, { useState } from "react";
import  Button  from "@/components/ui/Button";
import Image from "next/image";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const fullName = `${formData.firstName} ${formData.lastName}`;

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: fullName,
          email: formData.email,
          message: formData.message,
        }),
      });
      
      const result = await response.json();

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      
      if (response.ok) {
        alert("Thank you for your message! We'll get back to you soon.");
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          message: "",
        });
      } else {
        alert(result.error || "Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("There was an error sending your message. Please try again later.");
    }
  };
  
  return (
    <section  id="contact" className="w-full py-16 bg-[#002A3A] text-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between gap-12">
          {/* Left Side - Text and Illustration */}
          <div className="w-full lg:w-2/5 flex flex-col">
            <div className="mb-8">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">Let's Collaborate</h2>
              <p className="text-lg">Share your vision, and let's bring it to life.</p>
            </div>

            <div className="hidden lg:block mt-8">
              <Image
                src="/images/butterfly.svg"
                alt="Professionals collaborating on budget planning"
                width={600}
                height={400}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div className="w-full lg:w-1/2">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <input
                    type="text"
                    name="firstName"
                    placeholder="First Name"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                    className="w-full p-3 rounded-md bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#00E676]"
                  />
                </div>
                <div>
                  <input
                    type="text"
                    name="lastName"
                    placeholder="Last Name"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                    className="w-full p-3 rounded-md bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#00E676]"
                  />
                </div>
              </div>

              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full p-3 rounded-md bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#00E676]"
                />
              </div>

              <div>
                <textarea
                  name="message"
                  placeholder="Message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full p-3 rounded-md bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#00E676]"
                />
              </div>

              <div>
                <Button
                  type="submit"
                  className="bg-[#00E676] hover:bg-[#00C853] text-black font-medium rounded-md px-6 py-4"
                >
                  Get in touch
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}