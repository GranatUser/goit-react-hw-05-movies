import React from "react"
import ContentLoader from "react-content-loader"

const MainSceleton = () => (
  <ContentLoader 
    speed={2}
    width={460}
    height={460}
    viewBox="0 0 460 460"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    <rect x="195" y="180" rx="0" ry="0" width="2" height="1" /> 
    <rect x="8" y="54" rx="0" ry="0" width="442" height="20" /> 
    <rect x="8" y="84" rx="0" ry="0" width="442" height="20" /> 
    <rect x="8" y="113" rx="0" ry="0" width="442" height="20" /> 
    <rect x="9" y="145" rx="0" ry="0" width="442" height="20" /> 
    <rect x="194" y="300" rx="0" ry="0" width="2" height="1" /> 
    <rect x="7" y="174" rx="0" ry="0" width="442" height="20" /> 
    <rect x="7" y="204" rx="0" ry="0" width="442" height="20" /> 
    <rect x="7" y="233" rx="0" ry="0" width="442" height="20" /> 
    <rect x="8" y="265" rx="0" ry="0" width="442" height="20" />
  </ContentLoader>
)

export default MainSceleton