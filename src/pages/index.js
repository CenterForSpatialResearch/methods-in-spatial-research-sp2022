import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'


const IndexPage = () => {
  return (
    <Layout pageTitle="Methods in Spatial Research">
      <StaticImage
        alt="Three pictures: a map of telephone lines, photos of buildings, and a pen drawing a red line"
        src="../images/header_img.png"
      />
      <p class="caption">From left:
        Dennis Wood. 2011. “Everything Sings: Maps for a Narrative Atlas” via Places Journal; Hans Haacke Shapolsky et al. Manhattan Real Estate Holdings, a Real-Time Social System, as of May 1, 1971. 1971; Folder. Italian Limes. 2014
      </p>

      <p>
        This course provides an introduction to the critical use of geographic information systems (GIS) and the use of spatial methods for urban humanities research.
      </p>
      <p>
        Maps and geographic analysis are key tools for interpreting the built environment and the social conditions it contains. GIS methods allow for the analysis of geographic features together with attributes (environmental, social, demographic, political) of those places. The thoughtful use of spatial data can reveal previously unseen patterns, changing the way we see and engage with our world. However, maps are never just representations, they are nearly always active agents in shaping the worlds they describe. With this in mind, students will be introduced to a range of approaches for creating and manipulating spatial data with a focus on the forms of authorship, design, subjectivity embedded in spatial data and its uses. 
      </p>
      <p>
        This is a “making and doing” workshop course that is open to students from within GSAPP, GSAS and the Columbia and Barnard Colleges and is designed to expand the disciplinary locations in which spatial data analysis takes place. Through hands-on exercises and weekly assignments participants will develop basic fluency with open-source mapping software, QGIS, methods of data collection and creation, and approaches and concepts in critical spatial analysis and map design.
      </p>
    
    </Layout>
  )
}
export default IndexPage