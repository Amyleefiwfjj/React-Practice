import './App.css';
import RepoCard from './components/RepoCard'; 

// //components없이 작성한 코드
// function App() {
//   return (
// 	  <div>
// 	    <div>
// 		    <h3>React-Study</h3>
// 		    <p>React Study 실습 / 과제 레포</p>
// 		    <p>사용언어: JavaScript</p>
// 	    </div>
// 	    <div>
// 		    <h3>Bridge</h3>
// 		    <p>Bridge.. 어쩌구 내용</p>
// 		    <p>사용언어: JavaScript</p>
// 	    </div>
// 	    <div>
// 		    <h3>Spring-Study</h3>
// 		    <p>Spring Study.. 어쩌구 내용</p>
// 		    <p>사용언어: Java</p>
// 	    </div>
// 	    {/*위에 3뭉탱이가 반복됨 - 아 저걸 component로 만들면 한 코드를 재사용하면 되겠구나~!*/}
//     </div>
//   );
// }

// //components 사용한 코드
// function App() {
//     return (
//         <div>
//           <ReactStudyRepoCard />
//           <ReactStudyRepoCard />
//           <ReactStudyRepoCard />
//           {/* ... */}
//       </div>
//     );
//   }

//props 사용하여 더 효율적으로 만들어보자
function App() {
  return (
	  <div>
	    <RepoCard title="React-Study" description="React Study 실습 / 과제 레포" language="JavaScript" />
	    <RepoCard title="Proj1" description="Proj1 설명입니다." language="TypeScript" />
	    <RepoCard title="Proj2" description="Proj2 설명입니다." language="Java" />
	    {/* ... */}
    </div>
  );
}
export default App;
