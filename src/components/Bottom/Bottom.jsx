import Gmail from "./gmail.png";
import Twitter from "./twitter.png";
import GitHub from "./github.png";
import Medium from "./medium.png";

function Bottom() {
  return (
    <div
      className={
        "fixed bottom-0 left-0 right-0 text-gray-600 bg-gray-200 text-center  bg-gray pt-1 font-light text-base md:text-lg"
      }
    >
      created by
      <a
        href="https://legendary-paprenjak-c7072d.netlify.app/"
        className="underline ml-2"
      >
        Rahul Dev
      </a>
      <ul className="flex md:ml-[35%]">
        <li>
          <a href="mailto: rahuldev7583@gmail.com" className="">
            <img className="ml-10 w-10 " src={Gmail} alt="GmailIcon" />
          </a>
        </li>
        <li>
          <a href="https://twitter.com/rahuldev_75">
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
      <p className="text-xs md:text-sm">© 2022 Rahul Dev. All right reserved.</p>
    </div>
  );
}
export default Bottom;
