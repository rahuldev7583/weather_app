import Gmail from "./gmail.png";
import Twitter from "./twitter.png";
import GitHub from "./github.png";
import Medium from "./medium.png";

function Bottom() {
  return (
    <div
      className={
        "fixed bottom-0 left-0 right-0 text-gray-600 bg-gray-200 text-center  bg-gray pt-1"
      }
    >
      created by
      <a
        href="https://rahuldev7583.github.io/portfolio/"
        className="underline ml-2"
      >
        Rahul Dev
      </a>
      <ul className="flex">
        <li>
          <a href="mailto: rahuldev7583@gmail.com" className="">
            <img className="ml-10 w-10" src={Gmail} alt="GmailIcon" />
          </a>
        </li>
        <li>
          <a href="https://twitter.com/rahul_dev75">
            <img className="ml-10 w-10" src={Twitter} alt="TwitterIcon" />
          </a>
        </li>
        <li>
          <a href="https://github.com/rahuldev7583">
            <img className="ml-10 w-10" src={GitHub} alt="GitHub Icon" />
          </a>
        </li>
        <li>
          <a href="https://medium.com/@rahuldev7583">
            <img className="ml-10 w-10" src={Medium} alt="MediumIcon" />
          </a>
        </li>
      </ul>
      <p className="text-xs">© 2022 Rahul Dev. All right reserved.</p>
    </div>
  );
}
export default Bottom;
