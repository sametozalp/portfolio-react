
function Footer () {
  const copyrightData = {
    year: new Date().getFullYear(),
    description: "Samet Özalp"
  }

  return (
    <footer className="py-12 text-center text-gray-600 text-sm border-t border-white/5">
      <p>{"© "+ copyrightData.year +" " + copyrightData.description + "."}</p>
    </footer>
  );
};

export default Footer;
