import { Sidebar, Carousel } from "flowbite-react";
import { HiChartPie, HiShoppingBag, HiInbox, HiUser } from "react-icons/hi";
import styles from "../styles/homepage.module.css";

export default function Page() {
  return (
    <>
      <div className="mt-4 grid lg:grid-cols-5 gap-0">
        <div className={styles.sidebar_left}>
          <div className="w-fit bg-gray-50">
            <Sidebar aria-label="Sidebar with multi-level dropdown example">
              <Sidebar.Items>
                <Sidebar.ItemGroup>
                  <Sidebar.Item href="#" icon={HiChartPie}>
                    Dashboard
                  </Sidebar.Item>
                  <Sidebar.Collapse icon={HiShoppingBag} label="E-commerce">
                    <Sidebar.Item href="#">Products</Sidebar.Item>
                  </Sidebar.Collapse>
                  <Sidebar.Item href="#" icon={HiInbox}>
                    Inbox
                  </Sidebar.Item>
                  <Sidebar.Item href="#" icon={HiUser}>
                    Users
                  </Sidebar.Item>
                  <Sidebar.Item href="#" icon={HiShoppingBag}>
                    Test
                  </Sidebar.Item>
                  <Sidebar.Item href="#" icon={HiInbox}>
                    Sign Up
                  </Sidebar.Item>
                  <Sidebar.Item href="#" icon={HiChartPie}>
                    Inbox
                  </Sidebar.Item>
                </Sidebar.ItemGroup>
              </Sidebar.Items>
            </Sidebar>
          </div>
        </div>

        <div className="shadow-lg shadow-gray-100 col-span-4 mt-0 mr-3 hidden lg:flex lg:h-full">
          <Carousel>
            <img
              className=" rounded-t-lg"
              src="https://th.misumi-ec.com/th/maker/misumi/fs/pr/recommend_product/stretch_film201903/images/mainvs.png"
              alt="..."
            />

            <img
              className=" rounded-t-lg"
              src="https://th.misumi-ec.com/th/maker/misumi/fs/pr/recommend_product/stretch_film201903/images/mainvs.png"
              alt="..."
            />

            <img
              className="rounded-t-lg"
              src="https://th.misumi-ec.com/th/maker/misumi/fs/pr/recommend_product/stretch_film201903/images/mainvs.png"
              alt="..."
            />
          </Carousel>
        </div>
      </div>
    </>
  );
}
