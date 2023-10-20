import Image from "next/image";
import styles from "../../styles/homepage.module.css";

const Section_image = ({
  listUser = [
    {
      title: "PROFESSIONAL",
      text: "Engineer Consultation Team",
      icon: "https://phopautomation.vercel.app/images/icon1.png",
    },
    {
      title: "AUTHORIZED DISTRIBUTOR",
      text: "Genuine Product Guarantee",
      icon: "https://phopautomation.vercel.app/images/icon2.png",
    },
    {
      title: "SKILLFULL",
      text: "Installation Team",
      icon: "https://phopautomation.vercel.app/images/icon3.png",
    },
    {
      title: "HIGH EXPERIENCE",
      text: "After-Sale Service and Maintenance Team",
      icon: "https://phopautomation.vercel.app/images/icon4.png",
    },
  ],
}) => {
  return (
    <>
      <div className={styles.section_image}>
        <div className="row">
          {listUser.map((listUsers, index) => (
            <div className="col-lg-3" key={index}>
              <div className={styles.section_image_in}>
                <Image
                  height="100"
                  width="100"
                  alt="hero-image"
                  src={listUsers.icon}
                />
                <div className={styles.boxtextinner}>
                  <h5 className="text-lg font-semibold">{listUsers.title}</h5>
                  <p>{listUsers.text}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Section_image;
