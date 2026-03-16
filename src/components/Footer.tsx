import { useEffect, useState } from "react";
import portfolioApi from "../api/portfolioApi";

function Footer() {
  const [copyright, setCopyright] = useState({description: ""});

  useEffect(() => {
    portfolioApi.getCopyright().then((data) => {
      setCopyright(data);
    });
  }, []);

  return (
    <footer className="py-12 text-center text-gray-600 text-sm border-t border-white/5">
      <p>{"© " + new Date().getFullYear() + " " + copyright.description + "."}</p>
    </footer>
  );
};

export default Footer;
