import React from 'react';
// //props 객체 전체를 가져오거나,
// function RepoCard(props) {
//     return (
//         <div>
//           <h3>{props.title}</h3>
//           <p>{props.description}</p>
//           <p>사용언어: {props.language}</p>
//       </div>
//     );
//   }
  
  //이렇게 구조분해 할당을 통해 바로 가져올 수도 있어요.
  function RepoCard({ title, description, language }) {
    return (
        <div>
          <h3>{title}</h3>
          <p>{description}</p>
          <p>사용언어: {language}</p>
      </div>
    );
  }
  export default RepoCard;