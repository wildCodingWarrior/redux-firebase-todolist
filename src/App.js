import { styled } from "styled-components";
import Layout from "./shared/Layout";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

const App = () => {
  return (
    <Layout>
      <AppTitle>리덕스로 만드는 투두리스트</AppTitle>
      <TodoInput />
      <TodoList />
    </Layout>
  );
};

export default App;

const AppTitle = styled.h1``;
