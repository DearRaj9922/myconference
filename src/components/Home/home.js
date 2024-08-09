import React from "react";
import "./home.css";
import logo from "../../assets/iitrlogo.svg";
import bgimg from "../../assets/bgimg.svg";
import Qrcode from "../../assets/image 1.svg";
import NavBar from "../../components/navbar/navbar.js";

export default function home() {
  return (
    <>
      <div className="home_body">
        <NavBar />
        <div className="top_part">
          <div className="logo_part">
            <img src={logo} className="logo" alt="logo1" />
          </div>
          <div className="top_content">
            <h3>Unlocking the Cosmic Potential</h3>
            <h2>2nd Workshop on Space Weather Science and Opportunities</h2>
            <h3 className="and">&</h3>
            <h2>3rd Indian Space Weather Conference</h2>
          </div>
        </div>
        <div className="middle_content">
          <img src={bgimg} className="bg_img" alt="bg" />
          <div className="middle-text">
            <h3 className="middle1">
              Department of Physics & Centre for Space Science and Technology
            </h3>
            <h3 className="middle1">
              Indian Institute of Technology Roorkee, Roorkee – 247 667,
              Uttarakhand
            </h3>
            <div className="middle2">
              <h3>5 - 9 October 2024</h3>
            </div>
            <div className="middle3">
              <h2>2nd Workshop on Space Weather Science and Opportunities</h2>
              <div className="middle3-para">
                <h3>
                  Space Weather refers to the dynamic conditions of the
                  near-earth space environment influenced by Solar Storms and
                  their interaction with the Earth’s
                  magnetosphere-ionosphere-thermosphere regions. Research and
                  monitoring of space weather is vital for protecting space
                  infrastructure, astronaut safety, advancing scientific
                  understanding and space exploration. The 2nd workshop on Space
                  Weather Science and Opportunities will be hosted by IIT
                  Roorkee during 5-6 October 2024 with an aim to train bright
                  and talented students on the fundamental aspects of space
                  weather, its effects on Earth’s and planetary atmospheres, and
                  societal applications as well as introduce the opportunities
                  that exists in this frontier area of research. The workshop
                  will feature lectures by subject experts, interactions and lab
                  visits.
                </h3>
              </div>
            </div>
            <div className="middle3">
              <h2>3rd Indian Space Weather Conference</h2>
              <div className="middle3-para">
                <h3>
                  The 3rd ISWC will be held during 07-09 October 2024. Through
                  engaging presentations and panel discussions, the conference
                  seeks to provide a platform to facilitate sharing of
                  knowledge, discussions on recent advancements, foster
                  interdisciplinary collaboration between scientists,
                  researchers, and master students of the nation.
                </h3>
              </div>
            </div>
            <div className="middle3">
              <h2>Who Can Apply </h2>
              <div className="middle3-para3">
                <h3>
                  Workshop*: Students in Final year pursuing M.Sc./M.Tech./Int.
                  B.Tech.-M.Tech./Int.-M.Sc. in Physics,
                </h3>
                <h3>
                  Atmospheric Sciences, Astronomy, Optics, and allied subjects.
                </h3>
                <h3>
                  Conference: Active researchers working in the area of Space
                  Weather, Magnetosphere, Ionosphere
                </h3>
              </div>
            </div>
          </div>
          <div className="app_details">
            <div className="how-aply">
              <h2>How to Apply</h2>
              <div className="links">
                <h3>
                  <a href="https://www.iitr.ac.in/iswc2024/">
                    https://www.iitr.ac.in/iswc2024/
                  </a>
                </h3>
                <h3>Contact: iswc2024@iitr.ac.in</h3>
              </div>
            </div>
            <div className="reg-fee">
              <h2>Registration Fee</h2>
              <div className="fees">
                <h3>₹ 7000 + GST (Faculty/Scientists) </h3>
                <h3>₹ 5000 + GST (PhD/Postdocs/RA) </h3>
                <h4>No registration fee for workshop* </h4>
              </div>
            </div>
          </div>
          <div className="bottom_content">
            <div>
              <h2 className="bottom-para1">
                *Shortlisted applicants for workshop will be provided
                travelling, lodging, and dining support. It is mandatory for
                these students to participate in the ISWC-3 as well.
              </h2>
            </div>
            <div className="bottom-heading">
              <div className="bot-head">
                <h2>Scientific Organizing Committee</h2>
              </div>
              <div className="qrcode">
                <img src={Qrcode} className="qr-img" alt="qr" />
              </div>
            </div>
            <div className="comm-member">
              <div className="group1">
                <span>Prof. Anil Bhardwaj (PRL) - Chair</span>
                <span>Prof. D Pallamraju (PRL) -Co-Chair</span>
                <span>Prof. S. Gurubaran (IIG) - Co-Chair</span>
                <span>Prof. Varun Sheel (PRL)</span>
                <span>Dr. Tirtha Pratim Das (ISRO)</span>
                <span>Prof. Vipul Rastogi (IITR)</span>
                <span>Dr. MV Sunil Krishna (IITR) - Convener</span>
              </div>
              <div className="group2">
                <span>Dr. A K Patra (NARL) -Co-Chair</span>
                <span>Dr. Tarun Kumar Pant (SPL) -Co-Chair</span>
                <span>Dr. K Shankarsubramanian (URSC) -Co-Chair</span>
                <span>Prof. Dibyendu Chakrabarty (PRL)</span>
                <span>Prof. S. H. Upadhyay (IITR)</span>
                <span>Dr. Sumanta Sarkhel (IITR) -Co-Convener</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
