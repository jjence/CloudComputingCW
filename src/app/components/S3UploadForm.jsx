"use client";
import { useState } from "react";

const UploadForm = () => {
  const [file, setFile] = useState(null);
  const [uploading, setUploading] = useState(false);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!file) return;

    setUploading(true);
    const formData = new FormData();
    formData.append("file", file);

    try {
      const response = await fetch("/api/s3-upload", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();
      console.log(data.status);
      setUploading(false);
    } catch (error) {
      console.log(error);
      setUploading(false);
    }
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="text-center">
                <div className="mt-2 space-y-2">
                    <h3 className="text-gray-800 text-2xl mb-8 font-bold sm:text-3xl">Upload your documents</h3>
                </div>
        </div>
        <div className="w-1/2 h-60 mx-auto rounded-lg border-2 border-dashed flex items-center justify-center">
            <label htmlFor="file" className="cursor-pointer text-center p-4 md:p-8">
                <svg className="w-20 h-15 mx-auto" viewBox="0 0 41 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12.1667 26.6667C8.48477 26.6667 5.5 23.6819 5.5 20C5.5 16.8216 7.72428 14.1627 10.7012 13.4949C10.5695 12.9066 10.5 12.2947 10.5 11.6667C10.5 7.0643 14.231 3.33334 18.8333 3.33334C22.8655 3.33334 26.2288 6.19709 27.0003 10.0016C27.0556 10.0006 27.1111 10 27.1667 10C31.769 10 35.5 13.731 35.5 18.3333C35.5 22.3649 32.6371 25.7279 28.8333 26.5M25.5 21.6667L20.5 16.6667M20.5 16.6667L15.5 21.6667M20.5 16.6667L20.5 36.6667" stroke="#4F46E5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
                <p className="mt-3 text-gray-700 max-w-xs mx-auto">Click to <span className="font-medium text-indigo-600">Upload your  file</span></p>
            </label>
            <input type="file" accept="image/*" onChange={handleFileChange} />
            <button className="w-100 px-4 py-2 mx-5 text-white font-medium bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-600 rounded-lg duration-150" type="submit" disabled={!file || uploading}>
                {uploading ? "Uploading..." : "Upload"}
            </button>
        </div>
      </form>
    </>
  );
};

export default UploadForm;