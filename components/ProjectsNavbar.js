/* eslint-disable */

export const NavItem = ({ value, handleFilterCategory, active }) => {
  let className =
    'capitalize cursor-pointer text-skin-base dark:text-skin-inverted hover:text-skin-accent';
  if (active === value) className += ' text-skin-accent';

  return (
    <li className={className} onClick={() => handleFilterCategory(value)}>
      {value}
    </li>
  );
};

const ProjectsNavbar = props => (
  <div className="flex px-3 py-2 space-x-6 overflow-x-auto list-none ">
    <NavItem value="all" {...props} />
    {/* <NavItem value="react" {...props} /> */}
    <NavItem value="next js" {...props} />
    <NavItem value="gatsby" {...props} />
    {/* <NavItem value="node" {...props} /> */}
  </div>
);

export default ProjectsNavbar;
