import React, { useState } from "react";
import { useForm } from "react-hook-form";
import emailjs from "emailjs-com";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

export default function Contact() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    setLoading(true);
    const { name, email, subject, message } = data;
    try {
      const templateParams = { name, email, subject, message };
      await emailjs.send(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        templateParams,
        process.env.REACT_APP_USER_ID
      );
      setSuccess(true);
      toast.success("Form sent! Thank you.");
      reset();
    } catch (e) {
      toast.error("Failed to send. Please try again.");
    } finally {
      setLoading(false);
    }
  };

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
          {success && (
            <h3 className="headMain">Sent success!!, thank you..</h3>
          )}
          <div className="from-col">
            <div>
              <label htmlFor="name">Name</label>
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
                id="name"
                className="form-control formInput"
                placeholder="Name"
                disabled={loading}
              />
              {errors.name && (
                <span className="errorMessage headMain">
                  {errors.name.message}
                </span>
              )}
            </div>
            <div>
              <label htmlFor="email">Email</label>
              <input
                {...register("email", {
                  required: true,
                  pattern:
                    /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                })}
                type="email"
                name="email"
                id="email"
                className="form-control formInput"
                placeholder="Email address"
                disabled={loading}
              />
              {errors.email && (
                <span className="errorMessage headMain">
                  Please enter a valid email address
                </span>
              )}
            </div>
          </div>
          <div className="from-col">
            <div>
              <label htmlFor="subject">Subject</label>
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
                id="subject"
                className="form-control formInput"
                placeholder="Subject"
                disabled={loading}
              />
              {errors.subject && (
                <span className="errorMessage headMain">
                  {errors.subject.message}
                </span>
              )}
            </div>
          </div>
          <div className="from-col">
            <div>
              <label htmlFor="message">Message</label>
              <textarea
                {...register("message", {
                  required: true,
                })}
                rows={3}
                name="message"
                id="message"
                className="form-control formInputTextAr"
                placeholder="Message"
                disabled={loading}
              />
              {errors.message && (
                <span className="errorMessage headMain">
                  Please enter a message
                </span>
              )}
            </div>
          </div>
          <div className="but-box">
            <button type="submit" className="but-submit" disabled={loading}>
              <h3 className="">{loading ? "Sending..." : "Submit"}</h3>
            </button>
          </div>
        </form>
        <ToastContainer position="bottom-right" autoClose={5000} hideProgressBar />
      </div>
    </div>
  );
}
