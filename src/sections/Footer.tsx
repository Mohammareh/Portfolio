const Footer = () => {
  return (
    <footer className="border-t py-10 z-20 pointer-events-none">
      <div className="mx-auto flex w-[97vw] flex-col gap-4 px-5 text-sm md:flex-row md:items-center md:justify-between">
        <div className="flex flex-col">
          <p>© 2026 Mohammed. All Rights Reserved.</p>
          <p>
            Made with love and Tea (20% sugar). Took 5 days for the first
            production ready version
          </p>
        </div>
        <div className="flex space-x-6">
          <a
            href="https://github.com/Mohammareh"
            className="hover:text-primary pointer-events-auto"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/mohammed-alrassas-1b707341b"
            className="hover:text-primary pointer-events-auto"
          >
            LinkedIn
          </a>
          <p className="pointer-events-auto">Email: xdmohammad83@gmail.com</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
