import PropTypes from "prop-types";

const CategoryCard = ({ name, icon, title }) => {
  return (
    <div
      className={`flex flex-col gap-4 items-center justify-center p-5 border hover:bg-main-color hover:text-white group rounded duration-300`}
    >
      <div className={`text-3xl`}>{icon}</div>

      {title && (
        <div>
          <h2 className="text-[25px] font-semibold">{title}</h2>
        </div>
      )}

      <div className="text-lg">{name}</div>
    </div>
  );
};

CategoryCard.propTypes = {
  name: PropTypes.string,
  icon: PropTypes.element,
  title: PropTypes.string,
};

const ShowCategories = ({ categories }) => {
  return (
    <section
      className={`grid ${
        categories[0].title
          ? "grid-cols-[repeat(auto-fill,minmax(250px,1fr))]"
          : "grid-cols-[repeat(auto-fill,minmax(150px,1fr))]"
      }  gap-8`}
    >
      {categories.map((category) => (
        <CategoryCard key={category.name} {...category} />
      ))}
    </section>
  );
};

ShowCategories.propTypes = {
  categories: PropTypes.array,
};
export default ShowCategories;
