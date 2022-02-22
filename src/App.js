import { Layout, } from 'antd'
import { Footer } from 'antd';
import Main from './components/Main'


function App() {
  return (
    <Layout style={{backgroundColor:'#fff2e8'}}>
      <Layout.Header 
     style = {{backgroundColor:'navy blue', position: 'fixed', zIndex: 10, width: '100%', color: 'white', fontSize: '40px', fontWeight: 'bold', textAlign:'centered'}}>
        Much ToDo
      </Layout.Header>
      <Layout.Content style={{padding: '50px 100px', marginTop: 100}}>
      <Main></Main>
      </Layout.Content>
      <Layout.Footer style = {{backgroundColor:'#fff2e8'}}>&copy; 2022, Ashley Dennis</Layout.Footer>
    </Layout>
  );
}

export default App;
