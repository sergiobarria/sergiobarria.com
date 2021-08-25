const SectionTitle = ({ title, textColor }) => (
  <div>
    <div className="w-12 h-1 bg-main" />
    <h2 className={`heading-2 ${!textColor ? 'text-gray-900' : textColor}`}>
      {title}
    </h2>
  </div>
);

export default SectionTitle;
