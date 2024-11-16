const header = () => {
  const links = [
    {
      title: "Home",
    },
    {
      title: "About",
    },
  ];

  let linkElements = links.map(function (link, index) {
    return (
      <li className="mx-4" key={index}>
        {link.title}
      </li>
    );
  });

  return (
    <>
      <div className="border border-indigo-600 w-full h-10">
        <div className="flex justify-center items-center h-full list-none">
          {linkElements}
        </div>
      </div>
    </>
  );
};

export default header;
