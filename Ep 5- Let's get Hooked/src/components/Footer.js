const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <div className="footer">
      Created By
      <span>❤️</span>
      <a
        href="https://www.linkedin.com/in/paritosh-sharma-01348a251"
        target="_blank"
      >
        Paritosh Sharma
      </a>
      <span>&copy;</span>
      {year}
      <strong>
        Shri <span>Ji</span>
      </strong>
    </div>
  );
};
export default Footer;
