"use client";
import { Metadata } from "next";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import Section from "@/components/Section";
import SectionWithImageLeft from "@/components/SectionWithImage";
import SectionWithLink from "@/components/SectionWithLink";
import SectionWithImageRight from "@/components/SectionWithImageRight";
import SectionCentered from "@/components/SectionCentered";

const sections = [
  { id: "about", title: "About" },
  { id: "interests", title: "Interests" },
  { id: "projects", title: "Projects" },
  { id: "experience", title: "Experience" },
  { id: "what-else", title: "What else" },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar sections={sections} />
      <Header />
      <main className="container mx-auto px-4 py-16 ">
        <Section id="about" title="About">
          <p>
            A Software Engineering graduate from King Fahd University of
            Petroleum and Minerals, with experience in{" "}
            <b>front-end development </b>
            using tools such as <b>Flutter</b> and React.js, as well as back-end
            development and working with <b>SQL and NoSQL</b> databases like
            Supabase and Firebase. Interested in <b>Product management</b> as
            well as self-development and finding new challenges.
          </p>
        </Section>
        <SectionWithImageLeft
          id="interests"
          title="Working with Flutter"
          text="I started using Flutter 4 years ago. Built various applications for different platforms such as mobile devices, desktop devices, web, and embedded devices. Developed more than 11 projects for college work, side projects, job works, and competitive participations."
          imageUrl="https://b2332b54ed.imgdist.com/public/users/Integrators/BeeProAgency/1006069_990916/flutterLogo.png"
          imageAlt="Flutter Logo"
          imageWidth={204}
          imageHeight={204}
        />
        <SectionWithLink
          id="projects"
          title="Winning Flutter Weekend Hackathon"
          text="Formed a team with 4 random participants. Built a solution in the tourism field to connect tourists with local citizens. Developed the main scenario of the application within 36 hours, writing about 7500 lines of code. Won the hackathon and took first place."
          imageUrl="https://b2332b54ed.imgdist.com/public/users/Integrators/BeeProAgency/1006069_990916/editor_images/0dc84762-1e2b-49b0-b8fd-e706889c96aa.jpg"
          imageAlt="Hackathon Image"
          imageWidth={320}
          imageHeight={320}
          linkUrl="https://github.com/FaresFouziNZ/FlutterWeekend"
          linkText="Check Github Repository"
        />
        {/* <SectionCentered
          id="more"
          title="Figma Design"
          textColor="text-gray-800"
        >
          <a
            href="https://www.figma.com/design/xIFZH7mkALI2DL8dct8HfL/%D9%88%D9%84%D8%AF-%D8%A7%D9%84%D8%AF%D9%8A%D8%B1%D8%A9"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://b2332b54ed.imgdist.com/pub/bfra/sglmpqsl/3r8/xkb/nuf/Screenshot%202024-05-17%20002738.png"
              alt="Figma Design"
              width={680}
              height={680}
              className="mx-auto mt-8 rounded-lg shadow-lg transition-shadow duration-300 hover:shadow-xl"
            />
          </a>
        </SectionCentered> */}
        <SectionWithImageLeft
          id="more-ballot"
          title="Ballot Calculator Assistor"
          text="Introducing a new kind of Ballot calculator. It handles the calculation of each round's points, a task that has been done manually until now."
          imageUrl="https://b2332b54ed.imgdist.com/public/users/Integrators/BeeProAgency/1006069_990916/smartmockups_liuw9w7c.png"
          imageAlt="Ballot Calculator Assistor"
          imageWidth={320}
          imageHeight={320}
        />
        <SectionWithImageLeft
          id="Gebly"
          title="Gebly"
          text="Gebly is a Flutter mobile application that resolves the conflict and the disturbance of group food ordering by allowing the users to send their orders to the group host allowing him to view orders clean and organized."
          imageUrl="https://b2332b54ed.imgdist.com/pub/bfra/sglmpqsl/bk5/9kg/tyk/Screenshot%202024-05-17%20023246-portrait.png"
          imageAlt="Gebly"
          imageWidth={250}
          imageHeight={250}
        />
        <div className="relative bg-gradient-to-r from-blue-500 to-blue-700 py-16 text-center ">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-700 opacity-50"></div>
          <div className="container relative z-10 mx-auto flex flex-col items-center px-4 md:flex-row md:items-start md:space-x-6 justify-center">
            <SectionCentered
              id="experience"
              title="Professional Experience"
              textColor="text-white"
            >
              <p className="text-white">
                Details of professional experiences, projects, and
                accomplishments in the industry.
              </p>
            </SectionCentered>
          </div>
        </div>
        <SectionWithImageLeft
          id="experience-smusicians"
          title="sMusicians"
          text={`sMusicians is a platform for musical artists that allows them to offer their services for customers. I have been able to achieve the following:
          - Worked in an Agile (scrum) software development environment 
          - Developed mobile application using Flutter framework with MVC architecture and Provider state management.
          - Used Git and GitHub for version control and Continuous Development / Continuous Integration.`}
          imageUrl="https://b2332b54ed.imgdist.com/public/users/Integrators/BeeProAgency/1006069_990916/editor_images/f72cf474-d769-406c-8782-9214bb0b28be.png"
          imageAlt="sMusicians"
          imageWidth={320}
          imageHeight={320}
        />
        <SectionWithImageLeft
          id="experience-nassej"
          title="Nassej"
          text={`Naseej is a leading technology company specialized in Education solutions, Library Solutions, Digital Transformation, Talent Management Solutions, etc. I have been able to achieve the following:
          - Worked in a waterfall software development environment
          - Linked the front-end pages with data using REST API and local CSV files.
          - Worked with Natural Language Processing for the Arabic language.`}
          imageUrl="https://b2332b54ed.imgdist.com/public/users/Integrators/BeeProAgency/1006069_990916/naseej-for-technology-co--600.png"
          imageAlt="Nassej"
          imageWidth={320}
          imageHeight={320}
        />
        <SectionWithImageLeft
          id="experience-kfupm"
          title="King Fahd University of Petroleum and Minerals"
          text={`KFUPM in Saudi Arabia is a top university, established in 1963, known for excellence in science, engineering, and business. I have been able to achieve the following:
          - Implemented complex UI for student schedule planner using Flutter framework.
          - Linked the front-end pages with data using REST API and local CSV files.
          - Managed to release the software internally on desktop.`}
          imageUrl="https://b2332b54ed.imgdist.com/pub/bfra/sglmpqsl/va2/szx/oub/kfupm%20logo.png"
          imageAlt="King Fahd University of Petroleum and Minerals"
          imageWidth={320}
          imageHeight={320}
        />
        <div className="relative bg-gradient-to-r from-blue-500 to-blue-700 py-16 text-center ">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-700 opacity-50"></div>
          <div className="container relative z-10 mx-auto flex flex-col items-center px-4 md:flex-row md:items-start md:space-x-6 justify-center">
            <SectionCentered
              id="Non-Technical Experience"
              title="Non-Technical Experience"
              textColor="text-white"
            >
              <p className="text-white">
                Details of Non-Technical Experiences and other activities and
                interests.
              </p>
            </SectionCentered>
          </div>
        </div>
        <SectionWithImageLeft
          id="what-else"
          title="Intellectual and Electronic Sports Club President"
          text="Intellectual and Electronic Sports Club at King Fahd University of Petroleum and Minerals focuses on creating a community for gamers in KFUPM and reducing the stress on students.
          I have been able to improve social skills dealing with more than 3000 students. Played the role of a Product manager between students affairs administrations and Club's organizers.
          Managed to win Best Student Club award presented by university president. I kept acting as the Project manager for the development committee. Supervising Point system project, Horof game, and Horof questions application."
          imageUrl="https://b2332b54ed.imgdist.com/public/users/Integrators/BeeProAgency/1006069_990916/IE%20club%20logo.png"
          imageAlt="Intellectual and Electronic Sports Club President"
          imageWidth={320}
          imageHeight={320}
        />
        {/* <SectionWithImageLeft
          id="what-else-olo"
          title="Olo's Digital Product Management Bootcamp"
          text="Earned a certification in digital product management in Olo's bootcamp. Supervised by Mr.Faisal Abduljabbar. 
          Learned the basics of product management, including user research, product design, and product development.
          familiarized with the product management tools and techniques.
          Finished the bootcamp with a final project that was a mobile application for events management."
          imageUrl="https://b2332b54ed.imgdist.com/pub/bfra/sglmpqsl/dia/yxu/p5h/cropped-cropped-Asset-55%404x-8.png"
          imageAlt="Olo's Digital Product Management Bootcamp"
          imageWidth={320}
          imageHeight={320}
        /> */}
        <SectionWithLink
          id="projects"
          title="Olo's Digital Product Management Bootcamp"
          text="Earned a certification in digital product management in Olo's bootcamp. Supervised by Mr.Faisal Abduljabbar. 
          Learned the basics of product management, including user research, product design, and product development.
          familiarized with the product management tools and techniques.
          Finished the bootcamp with a final project that was a mobile application for events management."
          imageUrl="https://b2332b54ed.imgdist.com/pub/bfra/sglmpqsl/dia/yxu/p5h/cropped-cropped-Asset-55%404x-8.png"
          imageAlt="Olo Image"
          imageWidth={320}
          imageHeight={320}
          linkUrl="https://drive.google.com/file/d/10VSvx8se8dYhjLPHJ4iIl2_AQVfkzSVa/view"
          linkText="Check the capstone project"
        />
        <SectionWithImageLeft
          id="what-else-olo"
          title="Data Analysis Nano Degree"
          text="I started this nano degree to pursue my passion in the data analysis
        field. Through hands-on projects and real-world datasets, I
        developed skills in data wrangling, statistical analysis, and
        machine learning, enabling me to uncover insights and make
        data-driven decisions."
          imageUrl="https://b2332b54ed.imgdist.com/pub/bfra/sglmpqsl/cme/fuu/j5q/google-logo-9808.png"
          imageAlt="Olo's Digital Product Management Bootcamp"
          imageWidth={320}
          imageHeight={320}
        />
      </main>
      <Footer />
    </div>
  );
}
