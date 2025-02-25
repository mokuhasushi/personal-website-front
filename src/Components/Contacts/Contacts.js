const Contacts = () => {
  return (
    <div>
      <p>Feel free to contact me!</p>
      <ul>
        <li>tironeantonio@gmail.com</li>
        <li>+33 0666718495</li>
        <li>Instagram: @tonyy31415</li>
        <li>
          <a href="https://www.linkedin.com/in/tironeantonio/">
            Linkedin Account
          </a>
        </li>
        <li>
          <a href="https://github.com/mokuhasushi">Github Account</a>
        </li>
        <li>
          <a href="https://vimeo.com/niotir">
            Vimeo Account
          </a>
        </li>
        <li>
          <a href="https://www.youtube.com/@donspazioanto">
            YouTube Account
          </a>
        </li>
      </ul>
      And{" "}
      <a
        href="https://niotir-md.s3.eu-west-1.amazonaws.com/public/CV+Antonio+Tirone+Eng.pdf"
        target={"_blank"}
        rel={"noreferrer"}
      >
        here
      </a>{" "}
      you can find a copy of my CV.
    </div>
  );
};

export default Contacts;
