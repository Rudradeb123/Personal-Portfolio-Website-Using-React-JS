import React, { useState } from "react";
import { FaBriefcase } from "react-icons/fa";
import PageHeaderContent from "../../components/pageHeaderContent";

import ImageOne from "../portfolio/images/image1.jpg";
import ImageTwo from "../portfolio/images/image2.jpg";
import ImageThree from "../portfolio/images/image3.jpg";
import ImageFour from "../portfolio/images/image4.jpg";

import "./style.scss";

const portfolioData = [
  {
    id: 1,
    name: "Travel Website Project",
    image: ImageOne,
    link: "https://melodious-arithmetic-e486cc.netlify.app/",
    category: "Design",
  },
  {
    id: 2,
    name: "Food Item Website project",
    image: ImageTwo,
    link: "https://superlative-kataifi-ca4275.netlify.app/",
    category: "Design",
  },
  {
    id: 4,
    name: "Human Activity Recognition Project",
    image: ImageFour,
    link: "https://example.com/human",
    category: "Development",
  },
  {
    id: 3,
    name: "Data Analytics project",
    image: ImageThree,
    link: "https://drive.google.com/file/d/17vg045sTIldV4R9hIqOv7KynzJAtiGJG/view?usp=sharing",
    category: "Development",
  },
];

const filterData = [
  { filterId: 1, label: "All" },
  { filterId: 2, label: "Design" },
  { filterId: 3, label: "Development" },
];

const Portfolio = () => {
  const [filteredValue, setFilteredValue] = useState(1);

  const getFilteredItems = () => {
    if (filteredValue === 1) return portfolioData;
    const category = filterData.find(
      (f) => f.filterId === filteredValue
    )?.label;
    return portfolioData.filter((item) => item.category === category);
  };

  const filteredItems = getFilteredItems();

  return (
    <section id="portfolio" className="portfolio">
      <PageHeaderContent
        headerText="MY PORTFOLIO"
        icon={<FaBriefcase size={40} />}
      />
      <div className="portfolio__content">
        <ul className="portfolio__content__filter">
          {filterData.map((item) => (
            <li
              className={item.filterId === filteredValue ? "active" : ""}
              onClick={() => setFilteredValue(item.filterId)}
              key={item.filterId}
            >
              {item.label}
            </li>
          ))}
        </ul>

        <div className="portfolio__content__cards">
          {filteredItems.map((item) => (
            <div className="portfolio__content__cards__item" key={item.name}>
              <div className="portfolio__content__cards__item__img-wrapper">
                <img alt={item.name} src={item.image} />
                <div className="portfolio__content__cards__item__img-wrapper__tag-overlay">
                  <p>{item.name}</p>
                  <a href={item.link} target="_blank" rel="noreferrer">
                    <button>Visit</button>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;