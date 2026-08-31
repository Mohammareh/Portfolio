const Footer = () => {
  return (
    <footer className="border-t py-10 z-20">
      <div className="mx-auto flex w-[97vw] flex-col gap-4 px-5 text-sm md:flex-row md:items-center md:justify-between">
        <div className="flex flex-col">
          <p>© {new Date().getFullYear()} Mohammed. All Rights Reserved.</p>
          <p>Made with love and Tea (20% sugar).</p>
        </div>
        <div className="flex space-x-6">
          <a
            href="https://github.com/Mohammareh"
            className="hover:text-primary"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/mohammed-alrassas-1b707341b"
            className="hover:text-primary"
          >
            LinkedIn
          </a>
          <a href={`mailto:Mohammed`} className="hover:text-primary">
            Email
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
