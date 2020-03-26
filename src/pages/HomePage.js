import React from "react";
import Article from "../components/Article";

const articles = [
  {
    id: 1,
    title: "What is string theory?",
    author: "Jan Nowak",
    text:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Hic unde maiores, deleniti temporibus aperiam impedit ut fugiat sit quibusdam quod, quasi optio non iusto sint alias harum neque libero, earum molestias! Molestias expedita enim sequi libero velit aliquam adipisci odio repellat corrupti voluptates deleniti at vitae atque neque temporibus perferendis voluptatem fugiat voluptatibus maiores, possimus itaque est veniam eveniet. Similique, reprehenderit excepturi. Tempore, veniam neque. Aperiam rerum labore iusto consectetur harum neque enim quae id quod, culpa eum accusantium explicabo magnam consequuntur odio fuga quo iste sed numquam, quas incidunt maiores veniam tempora nesciunt. Perferendis, asperiores. Nobis commodi dolorem dignissimos."
  },
  {
    id: 2,
    title: "What is Fermie paradox?",
    author: "Jan Wesz",
    text:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Hic unde maiores, deleniti temporibus aperiam impedit ut fugiat sit quibusdam quod, quasi optio non iusto sint alias harum neque libero, earum molestias! Molestias expedita enim sequi libero velit aliquam adipisci odio repellat corrupti voluptates deleniti at vitae atque neque temporibus perferendis voluptatem fugiat voluptatibus maiores, possimus itaque est veniam eveniet. Similique, reprehenderit excepturi. Tempore, veniam neque. Aperiam rerum labore iusto consectetur harum neque enim quae id quod, culpa eum accusantium explicabo magnam consequuntur odio fuga quo iste sed numquam, quas incidunt maiores veniam tempora nesciunt. Perferendis, asperiores. Nobis commodi dolorem dignissimos."
  },
  {
    id: 2,
    title: "Dark matter and dark energy",
    author: "Jan Szpak",
    text:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Hic unde maiores, deleniti temporibus aperiam impedit ut fugiat sit quibusdam quod, quasi optio non iusto sint alias harum neque libero, earum molestias! Molestias expedita enim sequi libero velit aliquam adipisci odio repellat corrupti voluptates deleniti at vitae atque neque temporibus perferendis voluptatem fugiat voluptatibus maiores, possimus itaque est veniam eveniet. Similique, reprehenderit excepturi. Tempore, veniam neque. Aperiam rerum labore iusto consectetur harum neque enim quae id quod, culpa eum accusantium explicabo magnam consequuntur odio fuga quo iste sed numquam, quas incidunt maiores veniam tempora nesciunt. Perferendis, asperiores. Nobis commodi dolorem dignissimos."
  }
];

const HomePage = () => {
  const artList = articles.map(article => (
    <Article key={article.id} {...article} />
  ));
  return <div className="home">{artList}</div>;
};

export default HomePage;
