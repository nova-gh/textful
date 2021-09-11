import NotePageLayout from "../../components/UI/NotePageLayout";
import Head from "next/head";
import { useState } from "react";
const index = () => {
  // handle form input
  const [note, setNote] = useState("");
  // post req to BE
  const saveNote = () => {
    console.log("Current Note:", note);
  };
  return (
    <NotePageLayout>
      <Head>
        <title>Create a Note</title>
        <meta
          name="description"
          content="Create notes and access them via URL"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="space-y-5 text-center ">
        <h2 className="text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl ">
          Create your Note below!
        </h2>
        <p className="text-base text-gray-700 md:text-lg">
          Start typing or paste your note
        </p>
      </div>
      <form
        onChange={(e) => setNote(e.target.value)}
        onSubmit={(e) => e.preventDefault()}
        action=""
        className="max-w-4xl mx-auto mt-10 text-white rounded-lg h-vh60"
      >
        <textarea
          placeholder="Lets make a note!"
          className="w-full h-full p-3 placeholder-current bg-gray-500"
        />
        <button
          href="/"
          onClick={saveNote}
          className="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-black transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
          aria-label="Save Note"
          title="Save Note"
          type="submit"
        >
          Save your Notes
        </button>
      </form>
    </NotePageLayout>
  );
};

export default index;
