const SectionTitle = ({ title, textColor }) => (
  <div>
    <div className="w-12 h-1 bg-main" />
    <h2
      className={`text-2xl md:text-4xl text-gray-900 lg:text-5xl font-bold uppercase ${textColor}`}
    >
      {title}
    </h2>
  </div>
);

export default SectionTitle;
