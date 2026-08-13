"use client";
import { useState, useRef, useEffect } from "react";

function FileUpload() {
  const [file, setFile] = useState<File | null>(null);

  const inputRef = useRef<HTMLInputElement>(null);

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files?.[0] ?? null;
    setFile(selectedFile);
    if (!selectedFile) return;
    if (!selectedFile.name.endsWith(".dem")) {
      // set an error here, banner event?
      console.log("bad file type");
    }
    console.log(selectedFile);

    // do the api call here
    //   cs2 demos are quite large, we will have to stream the upload to the backend, and then poll the status of parsing
    // read XMLHttpRequest
    // if !res.ok, upload failed

    // poll the status of the upload

    // type UploadState =
    //   | { status: "idle" }
    //   | { status: "uploading"; file: File; progress: number }
    //   | { status: "parsing"; file: File; id: string }
    //   | { status: "ready"; file: File; id: string }
    //   | { status: "failed"; file: File; message: string };

    if (file) {
      // do some things here
      console.log(file);
    }
  };

  const handleRemoveFile = () => {
    console.log(`Removing file: ${file?.name}`);
    setFile(null);
    if (inputRef.current) inputRef.current.value = "";
  };
  return (
    <label
      htmlFor="file-upload"
      className="flex w-full max-w-md cursor-pointer flex-col items-center justify-center gap-2 rounded-xl border-2 border-dashed border-zinc-300 bg-white px-6 py-12 text-center transition-colors hover:border-zinc-400 hover:bg-zinc-100 dark:border-zinc-700 dark:bg-zinc-900 dark:hover:border-zinc-500 dark:hover:bg-zinc-800"
    >
      <svg
        aria-hidden="true"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
        className="size-8 text-zinc-400 dark:text-zinc-500"
      >
        <path d="M12 16V4m0 0L8 8m4-4 4 4" />
        <path d="M4 16v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2" />
      </svg>
      <p className="text-sm font-medium text-zinc-700 dark:text-zinc-200">
        Drag and drop files here
      </p>
      <p className="text-xs text-zinc-500 dark:text-zinc-400">
        or click to browse
      </p>
      <input
        id="file-upload"
        type="file"
        accept=".dem"
        onChange={handleFileUpload}
        className="sr-only"
      />
      {file ? (
        <button type="button" onClick={handleRemoveFile}>
          remove
        </button>
      ) : (
        <></>
      )}
    </label>
  );
}

export default FileUpload;
