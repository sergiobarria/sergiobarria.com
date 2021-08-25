/* eslint-disable */

export const NavItem = ({ value, handleFilterCategory, active }) => {
  const currentCategory = value
    .toLowerCase()
    .replace('/', '_')
    .replace(' ', '_');

  let className =
    'text-gray-600 capitalize list-none cursor-pointer hover:text-main';
  if (active === currentCategory) className += ' text-main';

  return (
    <li
      className={className}
      onClick={() => handleFilterCategory(currentCategory)}
    >
      {value}
    </li>
  );
};

const ProjectsNavbar = props => (
  <div className="flex flex-wrap px-4 mb-4 space-x-10 md:px-0">
    <NavItem value="all" {...props} />
    <NavItem value="gatsby" {...props} />
    {/* <NavItem value="HTML/CSS" {...props} /> */}
    <NavItem value="JavaScript" {...props} />
    <NavItem value="next js" {...props} />
    <NavItem value="react" {...props} />
    <NavItem value="vue" {...props} />
  </div>
);

export default ProjectsNavbar;
