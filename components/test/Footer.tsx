import React from "react";
import {
  IoLogoFacebook,
  IoLogoInstagram,
  IoLogoTwitter,
  IoLogoYoutube,
} from "react-icons/io";

const lists = [
  {
    title: "Shop",
    items: [
      {
        name: "Headphones",
        href: "##",
      },
      {
        name: "Earphones",
        href: "##",
      },
      {
        name: "Speakers",
        href: "##",
      },
      {
        name: "Accessories",
        href: "##",
      },
    ],
  },
  {
    title: "Collaborations",
    items: [
      {
        name: "Leica 0.95",
        href: "##",
      },
      {
        name: "Paris Saint-Germain",
        href: "##",
      },
      {
        name: "Automobili Lamborghini",
        href: "##",
      },
      {
        name: "View all",
        href: "##",
      },
    ],
  },
  {
    title: "About",
    items: [
      {
        name: "Story",
        href: "##",
      },
      {
        name: "FAQ",
        href: "##",
      },
      {
        name: "Contact",
        href: "##",
      },
      {
        name: "Theme Features",
        href: "##",
      },
    ],
  },
];

const socialMediaLists = [
  {
    title: "Facebook",
    href: "https://www.facebook.com",
    ico: <IoLogoFacebook />,
  },
  {
    title: "X",
    href: "https://twitter.com",
    ico: <IoLogoTwitter />,
  },
  {
    title: "Instagram",
    href: "https://www.instagram.com",
    ico: <IoLogoInstagram />,
  },
  {
    title: "Youtube",
    href: "https://www.youtube.com",
    ico: <IoLogoYoutube />,
  },
];

const Footer = () => {
  return (
    <div className="ft-wrapper">
      <div className="footer-container">
        <div className="top-footer">
          <div className="top-footer-newsletter">
            <div className="newsletter-logo">
              <img
                className="ft-logo"
                alt="image footer"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQilQwrONSx1Y6zsISt5JgQWY2LxMT9OoWNrw&s"
              />
            </div>
            <div className="newsleter-info">
              <span className="newsletter-title">
                Sign up for news, updates & 10% off your first order.
              </span>
              <label
                htmlFor="footer-email-field"
                className="newsletter-email-field"
              >
                <span className="title-email-footer">Email</span>
                <input
                  type="email"
                  id="footer-email-field"
                  className="footer-email-field"
                />
                <div className="ft-send-email">≻</div>
              </label>
            </div>
          </div>
          {lists.map((data, index) => (
            <div key={index} className="top-footer-block-menu">
              <span className="ft-block-menu-title">{data.title}</span>
              <div className="ft-block-menu-list">
                {data.items.map((item, jndex) => (
                  <a key={jndex} href={item.href} className="ft-menu-item">
                    {item.name}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="bottom-footer">
          <div className="aside-top">
            <div className="aside-social-media">
              {socialMediaLists.map((item, jndex) => (
                <a
                  key={jndex}
                  href={item.href}
                  className="ft-menu-item"
                  title={item.title}
                >
                  {item.ico}
                </a>
              ))}
            </div>
            <div className="aside-language">
              <select className="selection-ft">
                <option value="0">hello</option>
              </select>
            </div>
          </div>
          <div className="aside-bottom">
            <div className="copyright-ft">
              <span className="ft-copyright-text">
                © 2024, Impact Theme Sound.
              </span>
              &nbsp;
              <span className="ft-copyright-text">Powered by Shopify</span>
            </div>
            <div className="ft-payment-icons">
              <span className="ft-payment-ico">🌍</span>
              <span className="ft-payment-ico">🌍</span>
              <span className="ft-payment-ico">🌍</span>
              <span className="ft-payment-ico">🌍</span>
              <span className="ft-payment-ico">🌍</span>
              <span className="ft-payment-ico">🌍</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
