import React from "react";
import msg_icon from "../../assets/msg-icon.png";
import mail_icon from "../../assets/mail-icon.png";
import phone_icon from "../../assets/phone-icon.png";
import location_icon from "../../assets/location-icon.png";
import white_arrow from "../../assets/white-arrow.png";

const Contact = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "609caec9-a0b3-45c1-a11d-bcec412779a4");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div className="contact mx-auto my-20 w-[90%] flex justify-between content-center">
      <div className="contact-col basis-[48%] text-[#676767]">
        <h3 className="text-[#000f38] font-medium text-2xl flex items-center mb-5">
          Send us a messenger
          <img src={msg_icon} alt="" className="w-[35px] ml-3" />
        </h3>
        <p className="max-w-[450px]">
          Feel free to reach out through contact form or find our contact
          information below. Your feedback, questions, and suggestions are
          important to us as we strive to provide exceptional service to our
          university community.
        </p>
        <ul>
          <li className="flex items-center my-5 mx-0">
            <img src={mail_icon} alt="" className="w-6 mr-3" />
            Contact@ThienTan.dev
          </li>
          <li className="flex items-center my-5 mx-0">
            <img src={phone_icon} alt="" className="w-6 mr-3" />
            +84 866 554 764
          </li>
          <li className="flex items-center my-5 mx-0">
            <img src={location_icon} alt="" className="w-6 mr-3" />
            300 Cho Moi, An Giang, <br /> Vietnam
          </li>
        </ul>
      </div>
      <div className="contact-col basis-[48%] text-[#676767]">
        <form onSubmit={onSubmit}>
          <label htmlFor="name">Your Name</label>
          <input
            id="name"
            type="text"
            name="name"
            placeholder="Enter your name"
            className="block w-full bg-[#ebecfe] p-4 border-0 outline-0 mb-4 mt-1 resize-none"
            required
          />
          <label htmlFor="phone">Phone Number</label>
          <input
            id="phone"
            type="tel"
            name="phone"
            placeholder="Enter your phone number"
            className="block w-full bg-[#ebecfe] p-4 border-0 outline-0 mb-4 mt-1 resize-none"
          />
          <label htmlFor="message">Write your messenger here</label>
          <textarea
            id="message"
            name="message"
            rows={6}
            placeholder="Enter your message"
            className="block w-full bg-[#ebecfe] p-4 border-0 outline-0 mb-4 mt-1 resize-none"
          ></textarea>
          <button type="submit" className="btn dark-btn">
            Submit now <img src={white_arrow} alt="" className="w-6 ml-3" />
          </button>
        </form>
        <span className="my-5 mx-0 block">{result}</span>
      </div>
    </div>
  );
};

export default Contact;
