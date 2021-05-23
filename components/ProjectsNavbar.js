/* eslint-disable */

export const NavItem = ({ value, handlerFilterCategory, active }) => {
  let className =
    'text-gray-700 capitalize cursor-pointer hover:text-green dark:text-gray-100';
  if (active === value) className += ' text-green';

  return (
    <li className={className} onClick={() => handlerFilterCategory(value)}>
      {value}
    </li>
  );
};

const ProjectsNavbar = props => (
  <div className="flex px-3 py-2 space-x-3 overflow-x-auto list-none ">
    <NavItem value="all" {...props} />
    {/* <NavItem value="react" {...props} /> */}
    <NavItem value="next js" {...props} />
    <NavItem value="gatsby" {...props} />
    {/* <NavItem value="node" {...props} /> */}
  </div>
);

export default ProjectsNavbar;
