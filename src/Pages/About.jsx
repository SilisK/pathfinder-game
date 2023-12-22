import { useEffect } from "react";
import github_icon from "../assets/gizmos/github-icon.png";
import linkedin_icon from "../assets/gizmos/linkedin-icon.png";

const team_members = [
  {
    name: "Berlin Rivas",
    avatarClassName: "berlin-avatar",
    github: "https://github.com/BerlinRivas",
    linkedin: "",
  },
  {
    name: "Frantz-Sebastien Mathias",
    avatarClassName: "frantz-avatar",
    github: "https://github.com/Frantz-Sebastien",
    linkedin: "https://www.linkedin.com/in/fsmathias/",
  },
  {
    name: "Wai Leong Chong",
    avatarClassName: "wai-avatar",
    github: "https://github.com/waiLeongChong",
    linkedin: "https://www.linkedin.com/in/wai-leong-chong/",
  },
  {
    name: "Silis Kleemoff",
    avatarClassName: "silis-avatar",
    github: "https://github.com/KleemoffDeveloper",
    linkedin: "https://www.linkedin.com/in/silis-kleemoff/",
  },
];

function About() {
  useEffect(() => {
    waves();
  }, []);
  return (
    <div className="text-white max-w-7xl m-auto py-24 min-h-screen flex flex-col items-center justify-center">
      <div className="w-11/12 mb-24 z-10 md:w-3/5">
        <h2 className="text-4xl mb-4 tracking-wider">
          What is <span className="text-blue-300">PATHFINDER</span> Exactly
        </h2>
        <p className="leading-relaxed text-base">
          PathFinder is a gaming web app that uses ChatGPT and Dall-E to create
          dynamic story-telling experiences.
          <br></br>
          <br></br>
          Through the power of AI, we seek to solve the problem of statically
          programmed scenarios in games. Every decision the player makes can
          change the trajectory of the story.
        </p>
      </div>

      <div className="w-full z-10">
        <h2 className="text-3xl text-center tracking-wider mb-8">
          MEET THE TEAM
        </h2>
        <div className="grid grid-flow-col overflow-x-scroll px-5 gap-12">
          {team_members.map((member, i) => (
            <div className="flex flex-col items-center" key={i}>
              <div
                className={
                  "team-member-banner border-4 rounded overflow-hidden  " +
                  member.avatarClassName
                }
              >
                <div className="team-member-name py-3 text-center w-full bg-gray-500 bg-opacity-50 backdrop-filter backdrop-blur-sm">
                  <p className="uppercase text-base">{member.name}</p>
                </div>
              </div>
              <section className="flex justify-evenly w-4/6 my-5">
                <a className="small-gizmo bg-white rounded-full" href={member.github} target="_blank">
                  <img src={github_icon} />
                </a>
                <a className="small-gizmo bg-white rounded-full" href={member.linkedin} target="_blank">
                  <img src={linkedin_icon} />
                </a>
              </section>
            </div>
          ))}
        </div>
      </div>
      <div className="waves"></div>
    </div>
  );
}

export default About;
