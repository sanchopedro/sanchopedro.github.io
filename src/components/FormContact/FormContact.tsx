import React from "react";

interface FormState {
  name: string;
  email: string;
  message: string;
}

function FormContact() {
  return (
    <div>
      <form className="container max-w-5xl mx-auto px-4 mt-5" action="">
        <div className="lg:grid lg:grid-cols-2 lg:gap-2 lg:space-y-2 space-y-5 ">
          <div className="flex items-center relative">
            <input
              className="rounded-full p-2 pl-10 h-10 w-full text-sm text-white border-gray-200 bg-zinc-700 placeholder:uppercase"
              type="text"
              placeholder="your name"
            />
            <svg
              className="absolute ml-2 mr-2 w-5 left-0"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
              ></path>
            </svg>
          </div>

          <div className="flex items-center relative">
            <input
              className="rounded-full p-2 pl-10 h-10 w-full text-sm text-white border-gray-200 bg-zinc-700  placeholder:uppercase"
              type="email"
              placeholder="YOUR EMAIL"
            />
            <svg
              className="absolute ml-2 mr-2 w-5"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
              ></path>
            </svg>
          </div>

          <div className="flex justify-center items-start relative w-full col-span-2">
            <textarea
              className="rounded-3xl p-2 pl-10 w-full h-40 text-sm text-white border-gray-200 bg-zinc-700  placeholder:uppercase"
              name="message"
              id="message"
              placeholder="your message"
            ></textarea>
            <svg
              className="absolute ml-3 mr-2 w-5 mt-2 left-0"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 01-.923 1.785A5.969 5.969 0 006 21c1.282 0 2.47-.402 3.445-1.087.81.22 1.668.337 2.555.337z"
              ></path>
            </svg>
          </div>
        </div>
        <div className="flex justify-center">
          <button
            className="inline-flex items-center justify-center uppercase text-sm text-blue-900 bg-blue-500 font-medium mt-4 px-3 py-2 rounded-full hover:bg-gray-700 hover:text-white"
            type="submit"
          >
            <svg
              className="mr-2 w-5 -rotate-45	"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"
              ></path>
            </svg>
            Send Message
          </button>
        </div>
      </form>
    </div>
  );
}

export default FormContact;
