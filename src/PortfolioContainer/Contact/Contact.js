import React, { useState } from "react";
import { useForm } from "react-hook-form";
import emailjs from "emailjs-com";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.min.css";

require("dotenv").config();
export default function Contact() {
  const [success, setSuccess] = useState(false);

  // const toastifySuccess = () => {
  //   toast("Form sent!", {
  //     position: "bottom-right",
  //     autoClose: 5000,
  //     hideProgressBar: true,
  //     closeOnClick: true,
  //     pauseOnHover: true,
  //     draggable: false,
  //     className: "submit-feedback success",
  //     toastId: "notifyToast",
  //   });
  // };

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const { name, email, subject, message } = data;
    try {
      const templateParams = {
        name,
        email,
        subject,
        message,
      };
      await emailjs.send(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        templateParams,
        process.env.REACT_APP_USER_ID
      );
      reset(setSuccess(true));
    } catch (e) {
      // console.log(e);
    }
  };
  console.log(process.env.REACT_APP_USER_ID);
  return (
    <div>
      <h2 className="headMain">Contact</h2>
      <div className="box-from">
        <form
          className="from-cont"
          id="contact-form"
          onSubmit={handleSubmit(onSubmit)}
          noValidate
        >
          {success ? (
            <h3 className="headMain">Sent success!!, thank you..</h3>
          ) : (
            ""
          )}

          {/* Row 1 of form */}
          <div className="from-col">
            <div>
              <input
                {...register("name", {
                  required: { value: true, message: "Please enter your name" },
                  maxLength: {
                    value: 30,
                    message: "Please use 30 characters or less",
                  },
                })}
                type="text"
                name="name"
                className="form-control formInput"
                placeholder="Name"
              ></input>
              {errors.name && (
                <span className="errorMessage headMain">
                  {errors.name.message}
                </span>
              )}
            </div>
            <div>
              <input
                {...register("email", {
                  required: true,
                  pattern:
                    /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                })}
                type="email"
                name="email"
                className="form-control formInput"
                placeholder="Email address"
              ></input>
              {errors.email && (
                <span className="errorMessage headMain">
                  Please enter a valid email address
                </span>
              )}
            </div>
          </div>
          {/* Row 2 of form */}
          <div className="from-col">
            <div>
              <input
                {...register("subject", {
                  required: { value: true, message: "Please enter a subject" },
                  maxLength: {
                    value: 75,
                    message: "Subject cannot exceed 75 characters",
                  },
                })}
                type="text"
                name="subject"
                className="form-control formInput"
                placeholder="Subject"
              ></input>
              {errors.subject && (
                <span className="errorMessage headMain">
                  {errors.subject.message}
                </span>
              )}
            </div>
          </div>
          {/* Row 3 of form */}
          <div className="from-col">
            <div>
              <textarea
                {...register("message", {
                  required: true,
                })}
                rows={3}
                name="message"
                className="form-control formInputTextAr"
                placeholder="Message"
              ></textarea>
              {errors.message && (
                <span className="errorMessage headMain">
                  Please enter a message
                </span>
              )}
            </div>
          </div>
          <div className="but-box">
            <button type="submit" className="but-submit ">
              <h3 className="">Submit</h3>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
