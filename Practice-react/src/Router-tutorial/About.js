import React from "react";
import qs from "qs";

const About = ({ location }) => {
  const query = qs.parse(location.search, {
    ignoreQueryPrefix: true,
  });
  console.log(query);
  const detail = query.detail === "true";
  return (
    <>
      <h1>소개</h1>
      <p>이 프로젝트는 리액트 라우터 기초를 실습 ~~</p>
      {detail && <p>추가적인 정보 아쩌고 저쩌고...~</p>}
    </>
  );
};

export default About;
