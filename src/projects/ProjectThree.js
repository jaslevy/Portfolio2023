import React from 'react';
import RF2 from '../images/RF2sample.png'
import CertPost from '../images/SML-Poster_36x24png.png'
import Cluster from '../images/Cluster2.png'
import JDL from '../images/JDL.png'

function ProjectTwo() {
  return (
    <>
        <div className="two-column-container-research-projects">
            <div className="text-column-research">
                <h5>Examining the Effect of Lyrical Sentiment in Bimodal Mood Classification</h5>
            <p>Music Information retrieval (MIR) is a field of research that has become increasingly engaged in the past few decades due to the streaming of music and the emergence of recommendation algorithms on popular music media platforms. This paper explores potential classification accuracy benefits of incorporating lyrical sentiment analysis outputs into a model trained on audio features. The better of two different lexicon-based sentiment analysis approaches is used to test two different audio-feature-based approaches — a Random Forest and a Feed forward Neural Network. The results show that with a Random Forest, the inclusion of a lyrical sentiment predictor actually lowered accuracy. Conversely, the inclusion of the same predictor increased the accuracy of the Neural Network. This suggests that the benefit of using a sentiment predictor alongside audio-features is inconclusive and may vary by approach. The possibility of the sentiment predictor being correlated to the prediction outputs can lead to a potential leakage effect which may hinder this bimodal approach to mood classification.
            </p>
            <div style={{ textAlign: 'center' }}>
                <a href="https://drive.google.com/file/d/10euYo8dUyNbn-DMyKsKKbVnGLnnS0QoX/view?usp=sharing" target="blank"> PDF</a>
            </div>
            </div>
        <div className="image-column">
             <img src={RF2} alt="Description" width="300" height="auto" />
        </div>
      </div>
      <div className="two-column-container-research-projects">
            <div className="text-column-research">
            <h5>Large Language Models in Academia: Looking Into Regulation Guidelines of ChatGPT on Campus</h5>
            <p> The goal of this research is to determine the efficacy and/or inefficacy of ChatGPT policy in certain academic environments (by department, by class, etc.). Survey data is analyzed to determine if a blanket policy is a sufficient approach by the university, or if the university should advise specific departments – humanities or engineering departments – to take different measures to regulate or not regulate AI chatbots. To determine how regulation should take place a dual random forest approach is employed which takes into account the usefulness of LLMs in certain courses as reported by students and the current policy in courses as determined by teachers. After equally considering opinions from both groups that are affected the most by this technology – students and instructors – it is determined that regulation should be based primarily on departmental needs. Following this discovery, this paper dives into how policy can be formed within departments and implications for future semesters if this policy recommendation were to be followed.</p>
            <div style={{ textAlign: 'center' }}>
                <a href="https://drive.google.com/file/d/1RpBX088gNHsehHCGxPNtqs_K4hEtptn7/view?usp=sharing" target="blank"> PDF</a>
            </div>
            </div>
        <div className="image-column">
             <img src={CertPost} alt="Description" width="400" height="auto" />
        </div>
      </div>
      <div className="two-column-container-research-projects">
      <div className="text-column-research">
            <h5>Analyzing the Pseudo-Accuracy of Spotify’s Music Genre Taxonomy and the Decisions That This Black Box Algorithm Makes</h5>
            <p> Fundamentally, Music genre classification is a difficult task due to the fact that it is highly subjective and ambiguous: there are no absolutely true, incontestable labels for a song’s genre(s). In this research, my goal is to determine how Spotify’s algorithm makes music genre classification decisions and examine how Spotify’s algorithm classifies as compared to musicologists.
The audio features for the dataset were retrieved using the Spotify API. I filtered this data into large genres and crossover genres in order to perform classification analysis. First, in order to gauge how Spotify’s proprietary genre labeling algorithm works, I train and test a random forest model to classify songs into genres with all features considered as predictors. This model is trained using the Spotify labeled genre, and the purpose of this approach is to determine variable importance in order to learn how Spotify’s black box algorithm decides how songs are genred. 
Next, with the results of random forest, I compare the genre decisions of Spotify (random forest prediction) with an unsupervised K-means clustering of the same songs using features that are deemed important to classification by musicologists. 
            </p>
            <div style={{ textAlign: 'center' }}>
                <a href="https://docs.google.com/document/d/e/2PACX-1vQ-h17WFmbc4wEYUZBc_OkWIsWuOTMJQYXP8ZsGU4g2WW1wPOIN_V2Afg4Ml9a7XrIed3VsbxUp2TVu/pub" target="blank"> PDF</a>
            </div>
            </div>
        <div className="image-column">
             <img src={Cluster} alt="Description" width="300" height="auto" />
        </div>
      </div>
      <div className="two-column-container-research-projects">
      <div className="text-column-research">
            <h5>Connecting
the dots: Education Inequity Measured With a Broadband Proxy in New York City</h5>
            <p>Conducted within the Princeton Department of African American Studies, this study focuses on exploring the relationship between income levels and access to internet and technology in New York City, utilizing publicly available data. The research aims to uncover how disparities in income influence individuals' ability to engage with digital resources, particularly in the context of education. It investigates the educational inequalities rooted in these income differences, highlighting the unique challenges faced within New York City. The study also critically reviews the efficacy of local government policies, both historical and current, in addressing these disparities. This research, presented at the Annual Civics in Technology Conference, offers valuable insights into the nexus of income, technology access, and educational opportunities in an urban setting, contributing to a deeper understanding of these complex social dynamics.</p>

            </div>
        <div className="image-column">
             <img src={JDL} alt="Description" width="400" height="auto" />
        </div>
      </div>
    </>
  );
}

export default ProjectTwo;