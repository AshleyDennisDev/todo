import { Layout, } from 'antd'
import Main from './components/Main'
import "./App.css";


function App() {
  return (
    <Layout className="background" style={{fontFamily:'Gill Sans'}} >
      <Layout.Header className="header" >
        Much ToDo
      </Layout.Header>
      <Layout.Content style={{opacity:0.75, fontWeight: 'bold' , padding: '30px 200px', marginTop: 100}}>
      <Main></Main>
      </Layout.Content>
      <Layout.Footer style = {{backgroundColor:'#fff2e8', textAlign:'center', marginTop:500}}>&copy; 2022, Ashley Dennis</Layout.Footer>
    </Layout>
  );
}

export default App;
