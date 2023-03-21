import React from "react"
import ContentLoader from "react-content-loader"

const CastReviewSceleton = () => (
  <ContentLoader 
    speed={2}
    width={460}
    height={460}
    viewBox="0 0 460 460"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"

  >
    <rect x="6" y="35" rx="0" ry="0" width="140" height="166" /> 
    <rect x="10" y="222" rx="0" ry="0" width="363" height="31" /> 
    <rect x="10" y="262" rx="0" ry="0" width="363" height="130" />
  </ContentLoader>
)

export default CastReviewSceleton