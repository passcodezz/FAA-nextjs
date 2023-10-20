import Image from "next/image";
import img2 from "../../public/images/application-1.png";
import img3 from "../../public/images/settings.png";
import Link from "next/link";

const Section_image = ({}) => {
  return (
    <>
      <div>
        <div className=" justify-center  flex flex-row  ">
          <div className="basis-1/4  col-lg-4 col-md-12">
            <div>
              <div className="p-3 mx-5  mb-3">
                <Link href="#">
                  <a>
                    <Image
                      alt="img"
                      src={img2}
                      width="250"
                      height="200"
                      objectFit="scale-down"
                      className="d-inline-block align-top"
                    />
                  </a>
                </Link>
                <div className="card-body">
                  <h5 className="card-title">
                    <b>PROFESSIONAL</b>
                  </h5>
                  <p className="card-text">Engineer Consultation Team</p>
                </div>
              </div>
            </div>
          </div>

          <div className="basis-1/4 col-lg-4 col-md-12">
            <div>
              <div className="p-3 mx-5  mb-5">
                <Link href="#">
                  <a>
                    <Image
                      alt="img"
                      src={img3}
                      width="250"
                      height="200"
                      objectFit="scale-down"
                      className="d-inline-block align-top"
                    />
                  </a>
                </Link>
                <div className="card-body">
                  <h5 className="card-title">
                    <b>PROFESSIONAL</b>
                  </h5>
                  <p className="card-text">Engineer Consultation Team</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Section_image;
