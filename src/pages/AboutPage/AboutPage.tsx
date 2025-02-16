import { CHeader, CContainer, CListGroup, CListGroupItem } from '@coreui/react'

function About() {
  return (
    <div>
      <CContainer fluid>
        <CHeader>Tech Stack</CHeader>
        <CListGroup flush>
          <CListGroupItem>Typsecript</CListGroupItem>
          <CListGroupItem>React.js</CListGroupItem>
          <CListGroupItem>Node.js</CListGroupItem>
          <CListGroupItem>Vue.js</CListGroupItem>
          <CListGroupItem>AWS</CListGroupItem>
          <CListGroupItem>Lambda</CListGroupItem>
          <CListGroupItem>S3</CListGroupItem>
          <CListGroupItem>ECS</CListGroupItem>
          <CListGroupItem>API Gateway</CListGroupItem>
          <CListGroupItem>CloudFront</CListGroupItem>
          <CListGroupItem>GitLab CI</CListGroupItem>
          <CListGroupItem>Vite</CListGroupItem>
          <CListGroupItem>Rollup.js</CListGroupItem>
        </CListGroup>
      </CContainer>
    </div>
  );
}

export default About
