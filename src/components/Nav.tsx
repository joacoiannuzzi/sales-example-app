const Nav = () => {
  return (
    <div className="bg-blue-500 grid grid-cols-[1fr,2fr,2fr] text-white p-3">
      <h3>Menu</h3>
      <div className="flex items-center gap-2">
        <div className="bg-red-600 w-4 h-4 rounded-full" />
        <h3>User Name</h3>
      </div>
      <h3>Sales Report</h3>
    </div>
  );
};

export default Nav;
