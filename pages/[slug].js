import NotePageLayout from "../components/UI/NotePageLayout";
import Head from "next/head";
// db connection
import { dbConnect } from "../lib/dbConnect";
import { Note } from "../model/Note";
import * as copyToClipboard from "clipboard-copy";
const slugIndex = ({ noteText, noteSlug }) => {
  //   console.log(" slug:", noteSlug, "\n", "note content:", noteText);
  // onclick to copy to clipboard
  const copyNote = () => {
    copyToClipboard(noteText);
  };
  return (
    <NotePageLayout>
      <Head>
        <title>View note | textful</title>
        <meta name="description" content="View your note!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="space-y-5 text-center ">
        <h2 className="text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl ">
          Snippiet #{noteSlug}
        </h2>
        <button
          href="/"
          onClick={copyNote}
          className="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-black transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
          aria-label="Save Note"
          title="Copy Note"
          type="button"
        >
          Copy to clipboard
        </button>
      </div>
      <form
        onChange={(e) => setNote(e.target.value)}
        onSubmit={(e) => e.preventDefault()}
        action=""
        className="max-w-4xl mx-auto mt-10 text-white rounded-lg h-vh60"
      >
        <textarea
          // disabled to no user input
          disabled
          value={noteText}
          className="w-full h-full p-3 placeholder-current bg-gray-500"
        />
      </form>
    </NotePageLayout>
  );
};

export default slugIndex;

export const getServerSideProps = async (context) => {
  // wait for db connection
  await dbConnect();
  // get notes from slug
  const slug = context.params.slug;
  // find a note by the slug
  const noteObj = await Note.findOne({ slug });

  return {
    props: {
      noteText: noteObj.note,
      noteSlug: noteObj.slug,
    },
  };
};
