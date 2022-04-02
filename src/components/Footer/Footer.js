const Footer = () => {
  return (
    <div
      style={{
        textAlign: "center",
        marginBottom: 10,
        fontSize:"20px",
        fontWeight:500
      }}
    >
      Made with <span style={{color:"red"}}>&#10084;</span> by{" "}
      <a
        href="https://www.abhay-bhongade.netlify.app"
        style={{ cursor: "pointer" }}
      >
        Abhay
      </a>
    </div>
  );
};

export default Footer;
