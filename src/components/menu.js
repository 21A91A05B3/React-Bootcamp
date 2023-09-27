import cookie1 from "../assets/images/cookie-0001.jpeg";
import cookie2 from "../assets/images/cookie-0002.jpeg";
import cookie3 from "../assets/images/cookie-0003.jpeg";
import cookie4 from "../assets/images/cookie-0004.jpeg";

const menu = () => {
  const imageWrapper = (img) => ({
    tagName: "div",
    options: {
      style: {
        width: "400px",
        height: "400px",
        overflow: "hidden",
        border: "5px solid #3882f6",
        borderRadius: "20px",
      },
    },
    children: [
      {
        tagName: "img",
        options: {
          src: img,
          alt: "Cookie",
          style: {
            height: "100%",
            width: "100%",
            objectFit: "cover",
          },
        },
      },
    ],
  });

  const priceWrapper = (name, price, caption) => ({
    tagName: "div",
    options: {
      innerHTML: `
        <h2>${name}</h2>
        <p>${caption}</p>
        <p class="price">Rs.${price}</p>
      `,
    },
  });

  const item = (name, price, caption, img, reverse = false) => {
    return {
      tagName: "div",
      options: {
        style: {
          display: "flex",
          gap: "20px",
        },
      },
      children: reverse
        ? [priceWrapper(name, price, caption), imageWrapper(img)]
        : [imageWrapper(img), priceWrapper(name, price, caption)],
    };
  };

  return {
    tagName: "div",
    options: {
      style: {
        padding: "80px 150px",
        display: "flex",
        flexDirection: "column",
        gap: "50px",
      },
    },
    children: [
      item(
        "Chocolate Mint",
        "250",
        
        "cool mint, sumptuous chocolate; an elegant and refreshing pairing",
        cookie1
      ),
      item(
        "Velvety Cocoa",
        "300",
        "velvety cocoa with rich chocolate chunks; irresistible melt-in-your-mouth delight",
        cookie2,
        true
      ),
      item(
        "Hazelnut Truffle",
        "180",
        "indulgent hazelnut truffle; sophisticated chocolate decadence in a cookie",
        cookie3
      ),
      item(
        "Caramel and Mocha",
        "350",
        "caramel and mocha harmonize; rhapsody of sweetness and coffee",
        cookie4,
        true
      ),
    ],
  };
};

export default menu;
