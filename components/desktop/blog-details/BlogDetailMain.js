import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

const blogData = [
  {
    name: "Building a High-Performance Team of Remote Engineers",
    category: " Engineering and Technology",
    shortDesc:
      "In the era of remote work, building a high-performance team of remote engineers requires a thoughtful and strategic approach. The traditional dynamics of team building have evolved, presenting both challenges and opportunities. In this blog, we'll explore key strategies and best practices to foster collaboration, enhance productivity, and build a cohesive and successful team of remote engineers.",
    imgUrl: "imgs/desktop/blog/1-blog.png",
    description: `

    <p><strong>1. Clear Communication Channels</strong></p>
    <p>Effective communication lies at the heart of a high-performance remote team. Establish clear and reliable communication channels that facilitate real-time collaboration. Utilize messaging apps, video conferencing tools, and project management platforms to ensure seamless information flow.</p>
    
    <p><strong>2. Define Clear Goals and Expectations</strong></p>
    <p>Provide your remote engineering team with clear goals and expectations. Define project milestones, deadlines, and key performance indicators (KPIs). Transparency in expectations helps remote engineers align their efforts with the overall objectives of the team and the organization.</p>
    
    <p><strong>3. Emphasize Team Culture</strong></p>
    <p>Cultivate a strong team culture even in a remote setting. Encourage team members to share their experiences, interests, and accomplishments. Virtual team-building activities, casual virtual meetings, and shared communication channels contribute to a sense of camaraderie among remote engineers.</p>
    
    <p><strong>4. Leverage Collaboration Tools</strong></p>
    <p>Invest in collaboration tools that enhance remote teamwork. Platforms like Slack, Microsoft Teams, or Asana can streamline communication, project management, and document sharing. These tools create a virtual workspace where remote engineers can collaborate efficiently.</p>
    
    <p><strong>5. Flexible Work Hours</strong></p>
    <p>Recognize the importance of flexibility in remote work. Allow remote engineers to have flexible work hours to accommodate different time zones and individual preferences. This flexibility promotes a healthier work-life balance and contributes to increased job satisfaction.</p>
    
    <p><strong>6. Encourage Skill Development</strong></p>
    <p>Provide opportunities for skill development and continuous learning. Virtual workshops, webinars, and online courses can empower remote engineers to enhance their skills and stay updated with industry trends. This investment in professional growth benefits both the individual and the team.</p>
    
    <p><strong>7. Regular Check-ins and Feedback</strong></p>
    <p>Conduct regular check-ins to assess the well-being of remote engineers. Schedule one-on-one meetings to provide constructive feedback and address any concerns they may have. This proactive approach fosters a supportive work environment and strengthens the manager-employee relationship.</p>
    
    <p><strong>8. Implement Agile Methodologies</strong></p>
    <p>Embrace agile methodologies to enhance project management in a remote setting. Agile practices such as daily stand-up meetings, sprint planning, and retrospectives promote transparency, collaboration, and adaptability in remote engineering teams.</p>
    
    <p><strong>9. Recognize and Celebrate Achievements</strong></p>
    <p>Acknowledge and celebrate the achievements of remote engineers. Publicly recognize individual and team accomplishments through virtual channels. This recognition not only boosts morale but also reinforces a culture of appreciation within the remote team.</p>
    
    <p><strong>10. Foster Trust and Autonomy</strong></p>
    <p>Build a foundation of trust within your remote engineering team. Provide autonomy to team members, allowing them to take ownership of their work. Trusting remote engineers to manage their responsibilities independently fosters a sense of accountability and empowerment.</p>
    
    <p><em>In conclusion, building a high-performance team of remote engineers is a dynamic process that requires a combination of effective communication, collaboration tools, and a strong team culture. By implementing these strategies, organizations can unlock the full potential of their remote engineering teams, driving innovation and success in the digital age.</em></p>
    
    
  `,
  },
  {
    name: "Augmenting Your Engineering Team: Simplifying the Process",
    category: " Engineering and Technology",
    shortDesc:
      "In the fast-paced world of technology and innovation, the success of a project often hinges on the strength and capabilities of the engineering team behind it. Augmenting your engineering team can be a strategic move to enhance skill sets, boost productivity, and meet project demands. The process might seem complex, but with the right approach, it can be simplified for efficient integration. Let's delve into why and how augmenting your engineering team can be a straightforward and effective endeavor.",
    imgUrl: "imgs/desktop/blog/2-blog.png",
    description: `

    <p>1. Clearly Define Project Objectives</p>
<p>Before embarking on team augmentation, clearly outline your project objectives. Identify the specific skills, expertise, and roles needed. Having a well-defined roadmap ensures you bring in the right talent to address your project's unique requirements.</p>

<p>2. Leverage External Networks</p>
<p>Explore external networks and platforms to find top-tier engineering talent. Utilize freelancing platforms, specialized job boards, and engineering communities. Casting a wide net allows you to discover skilled professionals who may not be within your immediate network.</p>

<p>3. Embrace the Global Talent Pool</p>
<p>Consider tapping into the global talent pool. Augmenting your team with talent from different geographical locations can bring diverse perspectives and skill sets. This approach also allows you to benefit from different time zones, enabling a more continuous workflow.</p>

<p>4. Streamlined Recruitment Processes</p>
<p>Simplify your recruitment processes without compromising on quality. Implement efficient screening methods, conduct focused interviews, and leverage coding assessments to quickly evaluate candidates. Automation tools can help streamline administrative tasks, making the process more agile.</p>

<p>5. Prioritize Effective Communication</p>
<p>Effective communication is key to successful team augmentation, especially when dealing with remote or external team members. Clearly communicate expectations, project goals, and ensure that there are robust channels for ongoing collaboration and updates.</p>

<p>6. Implement Project-Based Assessments</p>
<p>Move beyond traditional interviews and resumes by implementing project-based assessments. This approach allows you to evaluate candidates based on their practical skills and their ability to contribute to real-world projects, giving you a more accurate assessment of their capabilities.</p>

<p>7. Offer Flexibility and Autonomy</p>
<p>Top-tier engineers often value flexibility and autonomy. Consider offering flexible work hours or remote work options. Trusting your augmented team members to manage their time effectively can enhance productivity and job satisfaction.</p>

<p>8. Provide Comprehensive Onboarding</p>
<p>Smooth onboarding is critical for the quick integration of new team members. Provide comprehensive onboarding materials, mentorship programs, and access to relevant resources to help them acclimate to your company's culture and processes.</p>

<p>9. Encourage a Collaborative Environment</p>
<p>Foster a collaborative environment that encourages knowledge sharing and teamwork. Utilize collaboration tools, establish regular team meetings, and create channels for open communication. This promotes a sense of unity among in-house and augmented team members.</p>

<p>10. Continuous Improvement through Feedback</p>
<p>Establish a culture of continuous improvement. Regularly assess team performance, solicit feedback from both existing and augmented team members, and use this information to make refinements to your team augmentation processes.</p>

<p>In conclusion, augmenting your engineering team doesn't have to be a daunting task. By following a strategic and streamlined approach, you can efficiently integrate top-tier talent, enhance collaboration, and ultimately propel your projects to new heights of success. Embrace the opportunities that team augmentation brings, and watch as your engineering capabilities expand and evolve.</p>

    
  `,
  },
  {
    name: "Navigating Success: Managing a Multi-Cultural Engineering Team",
    category: " Engineering and Technology",
    shortDesc:
      "In the interconnected global landscape of technology, managing a multi-cultural engineering team has become both a challenge and an opportunity. The diversity of perspectives and experiences can fuel innovation, but effective management is crucial to harness the full potential of such teams. In this blog, we'll explore the strategies and best practices for successfully navigating the complexities of a multi-cultural engineering team.",
    imgUrl: "imgs/desktop/blog/3-blog.png",
    description: `
    <p><strong>1. Cultural Awareness and Sensitivity</strong></p>
<p>Building a successful multi-cultural engineering team starts with cultural awareness. Foster an environment where team members are encouraged to share their cultural backgrounds and experiences. This awareness creates a foundation for understanding and respecting different perspectives within the team.</p>

<p><strong>2. Clear Communication Channels</strong></p>
<p>Effective communication is the cornerstone of any successful team, and it becomes even more critical in a multi-cultural setting. Establish clear communication channels that accommodate diverse linguistic styles. Emphasize transparency and clarity in all team interactions.</p>

<p><strong>3. Flexible Work Practices</strong></p>
<p>Recognize and respect diverse attitudes toward work practices. Different cultures may have varying approaches to time management and work styles. Implement flexible work practices that accommodate these differences, allowing team members to be productive in their preferred ways.</p>

<p><strong>4. Diverse Leadership Styles</strong></p>
<p>Acknowledge and appreciate diverse leadership styles within the team. Understand that leadership approaches may vary based on cultural backgrounds. Encourage leadership development that respects and integrates these differences for a harmonious working environment.</p>

<p><strong>5. Inclusive Decision-Making</strong></p>
<p>Promote inclusive decision-making processes. Ensure that team members from different cultural backgrounds have equal opportunities to contribute to discussions and decisions. This not only fosters a sense of belonging but also leads to better-informed and more robust choices.</p>

<p><strong>6. Training on Cultural Competency</strong></p>
<p>Provide training on cultural competency for team members and leadership. Workshops, webinars, and resources that focus on understanding and appreciating cultural differences can go a long way in creating a more inclusive and harmonious work environment.</p>

<p><strong>7. Team-Building Activities</strong></p>
<p>Organize team-building activities that celebrate diversity. This could include cultural exchange events, shared meals, or collaborative projects. Such activities strengthen team bonds and create a sense of unity among team members.</p>

<p><strong>8. Conflict Resolution Strategies</strong></p>
<p>Develop effective conflict resolution strategies that consider cultural nuances. Conflicts may arise due to differences in communication styles or problem-solving approaches. Equip team leaders with the skills to address conflicts respectfully and find amicable solutions.</p>

<p><strong>9. Language Support</strong></p>
<p>Ensure language support for team members who may not be fluent in the team's primary language. Language training programs, translation tools, or having multilingual team members can facilitate smoother communication and collaboration.</p>

<p><strong>10. Regular Check-ins and Feedback</strong></p>
<p>Conduct regular check-ins with team members to assess their well-being and job satisfaction. Provide a platform for feedback to understand how cultural dynamics may be impacting the team. Act on this feedback to continuously improve your management approach.</p>

<p><em>In conclusion, successfully managing a multi-cultural engineering team requires a proactive and inclusive approach. Embracing diversity as a strength and implementing strategies that foster understanding and collaboration will not only lead to a harmonious work environment but also unlock the full innovative potential of your team. Navigating success with a multi-cultural engineering team is not just about managing differences but leveraging them to drive excellence and creativity.</em></p>

    
    `,
  },
  {
    name: "Unlocking Strategic Advantages: Outsourcing Engineering Tasks to South East Asia",
    category: " Engineering and Technology",
    shortDesc:
      "In the ever-evolving landscape of global business, strategic decisions play a pivotal role in the success and growth of organizations. One such strategic move gaining prominence is outsourcing engineering tasks to South East Asia. This region, encompassing countries like India, Vietnam, and the Philippines, offers a plethora of advantages that can significantly contribute to the success of businesses. Let's explore the strategic advantages of outsourcing engineering tasks to South East Asia.",
    imgUrl: "imgs/desktop/blog/4-blog.png",
    description: `
    <p><strong>1. Cost Efficiency: Maximizing Resources</strong></p>
<p>At the forefront of the decision to outsource to South East Asia is the significant cost advantage. The region boasts a lower cost of living, resulting in lower labor costs. This cost efficiency allows businesses to maximize their resources and allocate budgets more strategically, without compromising on the quality of engineering work.</p>

<p><strong>2. Access to a Rich Talent Pool: Diverse Expertise</strong></p>
<p>South East Asia is home to a vast and skilled talent pool. Outsourcing engineering tasks to this region provides access to professionals with diverse expertise, covering a wide range of engineering disciplines. This diversity allows businesses to find the right skill set for their specific project requirements.</p>

<p><strong>3. Time Zone Advantage: 24/7 Productivity</strong></p>
<p>The time zone difference between South East Asia and Western countries presents a strategic advantage. It enables businesses to achieve 24/7 productivity by leveraging the time overlap. Tasks can be seamlessly handed over, ensuring continuous progress and faster turnaround times for projects.</p>

<p><strong>4. Focus on Core Competencies: Strategic Alignment</strong></p>
<p>Outsourcing engineering tasks allows businesses to refocus on their core competencies. By delegating non-core functions to skilled teams in South East Asia, companies can concentrate on strategic initiatives, innovation, and the overall growth of their core business areas.</p>

<p><strong>5. Agile Scaling: Flexibility in Operations</strong></p>
<p>One of the key advantages of outsourcing to South East Asia is the flexibility it offers in scaling operations. Businesses can easily scale their engineering teams up or down based on project requirements, providing an agile and responsive approach to changing workloads.</p>

<p><strong>6. Access to Advanced Technologies: Technological Prowess</strong></p>
<p>South East Asian countries have rapidly embraced and excelled in the adoption of advanced technologies. Outsourcing to this region ensures that businesses can tap into the technological prowess of these nations, gaining access to cutting-edge tools and methodologies.</p>

<p><strong>7. Language Proficiency: Seamless Communication</strong></p>
<p>English proficiency is widespread in South East Asia, particularly in countries like India and the Philippines. This linguistic compatibility facilitates seamless communication and collaboration between the outsourcing team and the client, eliminating language barriers and ensuring effective project communication.</p>

<p><strong>8. Cultural Compatibility: Harmonious Collaboration</strong></p>
<p>South East Asian countries often have a cultural orientation that aligns well with Western business practices. This cultural compatibility contributes to harmonious collaboration, making it easier for businesses to work seamlessly with their outsourcing partners.</p>

<p><strong>9. Risk Mitigation: Building Resilience</strong></p>
<p>Distributed operations across different geographic locations contribute to risk mitigation. By having teams in South East Asia, businesses can build resilience against unforeseen events, such as natural disasters or geopolitical instability, ensuring continuity of operations.</p>

<p><strong>10. Globalization Strategy: Establishing a Global Presence</strong></p>
<p>Outsourcing to South East Asia is a strategic component of a broader globalization strategy. It allows businesses to establish a global presence, tap into diverse perspectives, and build a resilient and geographically dispersed workforce.</p>

<p><em>In conclusion, unlocking strategic advantages by outsourcing engineering tasks to South East Asia is a well-founded decision for businesses seeking cost efficiency, access to diverse talent, and a competitive edge in the global market. By harnessing the strengths of this dynamic region, companies can position themselves for sustained success and innovation.</em></p>

    `,
  },
];

export default function BlogDetailMain() {
  const router = useRouter();
  const receivedData = router.query.data || "Default Value";

  let selectedBlog = blogData?.filter((ele) => ele.name === receivedData)[0];
  let remainingBlogs = blogData?.filter((ele) => ele.name !== receivedData);
  console.log("selectedBlog", selectedBlog);
  /*======================================================
          renderRow1
  ======================================================*/
  const renderRow1 = () => {
    return (
      <div className="d-flex align-items-center justify-content-between blog-detail-main-article-content__row1">
        <div className="d-flex align-items-center">
          <img
            src="/imgs/desktop/blog/blog-author-img.svg"
            alt="author"
            className="blog-detail-main-article-content__row1__authorImg"
          />
          <div>
            <h3 className="blog-detail-main-article-content__row1__title font-14-Segoe-UI-600">
              Akhil Sharma
            </h3>
            <p className="blog-detail-main-article-content__row1__desc font-14-Segoe-UI-600">
              Aug 21, 2023 · 1 min read
            </p>
          </div>
        </div>
        <div className="blog-detail-main-article-content__row1__socialMedia">
          <a target="_blank" rel="noopener noreferrer" href="#">
            <img
              src="/imgs/desktop/blog-detail/black-twitter-icon.svg"
              alt="twitter"
            />
          </a>
          <a target="_blank" rel="noopener noreferrer" href="#">
            <img
              src="/imgs/desktop/blog-detail/black-linkedin-icon.svg"
              alt="linkedIn"
            />
          </a>
          <a target="_blank" rel="noopener noreferrer" href="#">
            <img
              src="/imgs/desktop/blog-detail/black-facebook-icon.svg"
              alt="facebook"
            />
          </a>
          <img
            src="/imgs/desktop/blog-detail/black-bookmark-icon.svg"
            alt="bookmark"
            className="blog-detail-main-article-content__row1__socialMedia__bookmark"
          />
          <img
            src="/imgs/desktop/blog-detail/black-3-circles-icon.svg"
            alt=""
          />
        </div>
      </div>
    );
  };

  /*======================================================
          renderBlogDescription
  ======================================================*/
  const renderBlogDescription = () => {
    return (
      <>
        <div
          className="blog-detail-main-article-content__desc"
          style={{ paddingRight: "20px" }}
        >
          <img src={selectedBlog?.imgUrl} alt="" />
          <div
            dangerouslySetInnerHTML={{ __html: selectedBlog?.description }}
          />
          {/* <p className="img-name">Sean Adams</p> */}
          {/* <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Felis
            eget nunc lobortis mattis aliquam faucibus. Tortor aliquam nulla
            facilisi cras fermentum odio. Habitasse platea dictumst quisque
            sagittis purus. Lacus luctus accumsan tortor posuere. Quisque id
            diam vel quam elementum pulvinar etiam non. Id volutpat lacus
            laoreet non curabitur gravida arcu ac. Non diam phasellus vestibulum
            lorem sed risus. Dictum varius duis at consectetur lorem donec.
            Vestibulum sed arcu non odio euismod lacinia.
          </p>
          <p>
            Id cursus metus aliquam eleifend mi in nulla posuere. Pretium nibh
            ipsum consequat nisl vel. Sed libero enim sed faucibus turpis in eu
            mi. Ultrices eros in cursus turpis massa. Ut sem nulla pharetra diam
            sit amet nisl suscipit adipiscing. Enim diam vulputate ut pharetra
            sit amet aliquam id diam. Ut tortor pretium viverra suspendisse. Vel
            elit scelerisque mauris pellentesque. Semper viverra nam libero
            justo. Congue mauris rhoncus aenean vel elit scelerisque mauris
            pellentesque. Netus et malesuada fames ac turpis egestas sed tempus.
            Velit euismod in pellentesque massa placerat duis ultricies. Vitae
            ju
          </p> */}

          {/* <video
            poster="/imgs/desktop/blog-detail/blog-detail-content-img-2.svg"
            src=""
          ></video> */}
          {/* <p>
            Ekstra bilgi, bu video, Photoshop ve diğer grafik tasarım
            programları için video dersler hazırlayan Lynda tarafından
            Photoshop’un 25. Yılını kutlamak amacıyla hazırlanmış.
          </p> */}
          {/* <p>Originally published at www.ferdicildiz.net on July 18, 2015.</p> */}
        </div>
      </>
    );
  };

  /*======================================================
          main
  ======================================================*/
  return (
    <div className="blog-detail-main">
      <div className="row mx-0 flex-nowrap align-items-start blog-detail-main-breadcrumb-block">
        <Link href={"/blogs"}>
          <a>
            <p className="font-24-nunito-sans-600 blog-detail-main-breadcrumb-text1">
              Home
            </p>
          </a>
        </Link>
        <p className="font-24-nunito-sans-600 blog-detail-main-breadcrumb-text2">
          Article
        </p>
      </div>
      <div className="row mx-0 align-items-start flex-md-nowrap">
        {/* blog detail */}
        <article className="col-12 col-md-8 blog-detail-main-article-content">
          <h1 className="blog-detail-main__h1">{selectedBlog?.name}</h1>
          {renderRow1()}
          {renderBlogDescription()}
          <ul className="blog-detail-main-article-content__tagsBlock">
            <li>Tech</li>
            <li>Software</li>
            <li>Technology</li>
          </ul>
          <div className="blog-detail-main-article-content__writtenBy">
            <img src="/imgs/desktop/blog/blog-author-img.svg" alt="author" />
            <div>
              <h4 className="blog-detail-main-article-content__writtenBy__text1">
                WRITTEN BY
              </h4>
              <h4 className="blog-detail-main-article-content__writtenBy__text2">
                Akhil Sharma
              </h4>
              <p className="blog-detail-main-article-content__writtenBy__text3">
                CEO at Myrl.Tech
              </p>
            </div>
          </div>
        </article>
        {/* Recommended */}
        <div className="col-12 col-md-4 blog-detail-main-recommended-blog-colm">
          <h3 className="font-14-Segoe-UI-600 blog-detail-main-recommended-blog-colm__title">
            Recommended
          </h3>
          {remainingBlogs?.map((data, index) => (
            <article key={index} className="blog-details-side-blog-card">
              <Link href="/blog-detail">
                <a>
                  <figure>
                    <img
                      src={data.imgUrl}
                      alt=""
                    />
                  </figure>
                  <h4 style={{padding:"20px"}} className="font-24-proxima-nova-700 blog-detail-main-recommended-blog-colm__text1">
                   {data.name}
                  </h4>
                </a>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
