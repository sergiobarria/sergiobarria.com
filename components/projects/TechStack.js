const TechStack = ({ techArr }) => (
  <div className="flex flex-wrap justify-end mt-10 space-x-4 text-right">
    {techArr.map((tech, i) => (
      <small
        key={i}
        className="px-2 py-1 mt-2 text-xs font-medium capitalize border border-gray-500 md:px-4 md:py-2 opacity-70"
      >
        {tech}
      </small>
    ))}
  </div>
);

export default TechStack;
