import { SiGithub, SiLinkedin } from "react-icons/si";
const Footer = () => {
  return (
    <>
      <footer className="flex items-center justify-center w-full h-24 space-x-3 border-t">
        <a
          className="flex items-center justify-center "
          href="https://github.com/nova-gh/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <SiGithub size="26" className="hover:text-blue-300" />
        </a>
        <a
          className="flex items-center justify-center"
          href="https://www.linkedin.com/in/nawadip-ghimire/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <SiLinkedin size="26" className="hover:text-blue-300" />
        </a>
      </footer>
      <h2>test</h2>
    </>
  );
};

export default Footer;
