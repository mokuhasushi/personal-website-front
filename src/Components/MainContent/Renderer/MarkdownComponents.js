const AWrapper = ({ href, title, children, setMDPath }) => {
  if (title === "internal") {
    return (
      <InternalLink href={href} setMDPath={setMDPath}>
        {children}
      </InternalLink>
    );
  } else {
    return (
      <a href={href} title={title}>
        {children}
      </a>
    );
  }
};

const InternalLink = ({ href, children, setMDPath }) => {
  return (
    <button
      type="button"
      className="btn btn-link"
      onClick={() => setMDPath(href)}
    >
      {children}
    </button>
  );
};

export { AWrapper, InternalLink };
