import "./index.css";

const Footer = () => {
  return (
    <div className="Footer">
      <div className="row">
        <div className="col">
          <img
            src="https://img.favpng.com/12/12/4/logo-business-management-png-favpng-ykPdcWYLbvRsBsAM5nD5hLNqc.jpg"
            alt="logo"
            className="logo"
          />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
            neque nemo possimus illum doloremque pariatur similique quis, magni
            reprehenderit vel cumque, ducimus aliquid illo delectus voluptatibus
            architecto accusamus, deleniti ut!
          </p>
        </div>
        <div className="col">
          <h3>Office</h3>
          <p>Lorem ipsum</p>
          <p className="email">mail@mail.com</p>
          <h4>+91 01234567</h4>
        </div>
        <div className="col links">
          <h3>Links</h3>
          <ul>
            <li>
              <a href="https://twitter.com">Twitter</a>
            </li>
            <li>
              <a href="https://facebook.com">Facebook</a>
            </li>
            <li>
              <a href="https://youtube.com">YouTube</a>
            </li>
          </ul>
        </div>
        <div className="col">
          <h3>Newsletter</h3>
          <form>
            <input type="email" placeholder="Enter your email" required />
            <button type="submit">▶</button>
          </form>
        </div>
      </div>
      <hr />
      <p className="copyright">Lorem ipsum 2023 - All rights reserved</p>
    </div>
  );
};

export default Footer;
