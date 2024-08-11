import { useState } from "react";
import { Link } from "react-router-dom";

const Contact = () => {
  const [isFocused, setIsFocused] = useState({
    nameInput: false,
    emailInput: false,
    PhoneInput: false,
  });
  const [inputValue, setInputValue] = useState({
    nameInput: "",
    emailInput: "",
    PhoneInput: "",
  });

  return (
    <main className="container my-[100px]">
      <ul className=" flex gap-2 mb-[150px]">
        <li className="text-[#878787] hover:text-lis-hover-color duration-300">
          <Link to="/">Home</Link>
        </li>
        <span className="text-[#878787]">/</span>
        <li>Contact</li>
      </ul>
      <section className="flex gap-8 flex-wrap lg:flex-nowrap">
        <section className="p-10 shadow-contactShadow rounded w-full lg:w-[31%]">
          <div className="flex gap-4 items-center mb-5">
            <div>
              <img src="./imgs/icons-phone.png" alt="" />
            </div>
            <div>Call To Us</div>
          </div>
          <div className="flex flex-col gap-3">
            <p>We are available 24/7, 7 days a week.</p>
            <p>Phone: +8801611112222</p>
          </div>

          <hr className="my-5 border-border-color" />
          <div className="flex gap-4 items-center mb-5">
            <div>
              <img src="./imgs/icons-mail.png" alt="" />
            </div>
            <div>Write To US</div>
          </div>
          <div className="flex flex-col gap-3">
            <p>Fill out our form and we will contact you within 24 hours.</p>
            <p>Emails: customer@exclusive.com</p>
            <p>Emails: support@exclusive.com</p>
          </div>
        </section>
        <section className="p-10 rounded shadow-contactShadow w-full lg:w-fit flex flex-col">
          <div className="flex gap-3 mb-5 flex-wrap sm:flex-nowrap">
            <div className="relative w-full">
              <input
                type="text"
                onChange={(e) =>
                  setInputValue({ ...inputValue, nameInput: e.target.value })
                }
                onFocus={() => setIsFocused({ ...isFocused, nameInput: true })}
                onBlur={() => setIsFocused({ ...isFocused, nameInput: false })}
                className="py-2 px-4 bg-[#f5f5f5] rounded outline-none w-full"
              />
              {!inputValue.nameInput && !isFocused.nameInput && (
                <div className="absolute inset-y-0 left-0 flex items-center pointer-events-none py-2 px-4 text-[#9ba3b0]">
                  {/* Placeholder element here */}
                  Your Name <span className="text-[#f1b5b5] ml-1"> *</span>
                </div>
              )}
            </div>
            <div className="relative w-full">
              <input
                type="email"
                onChange={(e) =>
                  setInputValue({ ...inputValue, emailInput: e.target.value })
                }
                onFocus={() => setIsFocused({ ...isFocused, emailInput: true })}
                onBlur={() => setIsFocused({ ...isFocused, emailInput: false })}
                className="py-2 px-4 bg-[#f5f5f5] rounded outline-none w-full"
              />
              {!inputValue.emailInput && !isFocused.emailInput && (
                <div className="absolute inset-y-0 left-0 flex items-center pointer-events-none py-2 px-4 text-[#9ba3b0]">
                  {/* Placeholder element here */}
                  Your Email <span className="text-[#f1b5b5] ml-1"> *</span>
                </div>
              )}
            </div>
            <div className="relative w-full">
              <input
                type="tel"
                onChange={(e) =>
                  setInputValue({ ...inputValue, PhoneInput: e.target.value })
                }
                onFocus={() => setIsFocused({ ...isFocused, PhoneInput: true })}
                onBlur={() => setIsFocused({ ...isFocused, PhoneInput: false })}
                className="py-2 px-4 bg-[#f5f5f5] rounded outline-none w-full"
              />
              {!inputValue.PhoneInput && !isFocused.PhoneInput && (
                <div className="absolute inset-y-0 left-0 flex items-center pointer-events-none py-2 px-4 text-[#9ba3b0]">
                  {/* Placeholder element here */}
                  Your Phone <span className="text-[#f1b5b5] ml-1">*</span>
                </div>
              )}
            </div>
          </div>
          <div className="grow">
            <textarea
              className="bg-[#f5f5f5] py-2 px-4 outline-none resize-none h-full w-full"
              placeholder="Your Message"
              name=""
              id=""
            ></textarea>
          </div>
          <div className="text-right">
            <button className="bg-main-color duration-300 hover:bg-main-hover-bg py-4 px-[4vw] rounded text-white mt-7">
              Send Massage
            </button>
          </div>
        </section>
      </section>
    </main>
  );
};

export default Contact;
