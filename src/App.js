import CartFeature from 'features/Cart';
import ProductFeature from 'features/Product/index';
import React from 'react';
import { Route, Switch } from '../node_modules/react-router-dom/index';
import './App.scss';
import Header from './components/Header';

function App() {

  // const [todoList, setTodoList] = useState([
  //   { id: 1, title: 'I love Easy Frontend! 😍' },
  //   { id: 2, title: 'We love Easy Frontend! 🥰' },
  //   { id: 3, title: 'They love Easy Frontend! 🚀' },
  // ]);

  // const [postList, setPostList] = useState([]);
  // const [pagination, setPagination] = useState({
  //   _page: 1,
  //   _limit: 10,
  //   _totalRows: 11,
  // });

  // const [filters, setFilter] = useState({
  //   _page: 1,
  //   _limit: 10,
  // });

  // useEffect(() => {
  //   async function fetchPostList() {
  //     try {
  //       // _limit=10&_page=1
  //       const paramsString = queryString.stringify(filters);
  //       const requestUrl = `http://js-post-api.herokuapp.com/api/posts?${paramsString}`;
  //       const response = await fetch(requestUrl);
  //       const responseJSON = await response.json();
  //       console.log({ responseJSON });

  //       const { data, pagination } = responseJSON;
  //       setPostList(data);
  //       setPagination(pagination);
  //     } catch (error) {
  //       console.log('Failed', error.message);
  //     }
  //   }

  //   fetchPostList();
  // }, [filters]);

  // function handlePageChange(newPage) {
  //   console.log('New page', newPage);
  //   setFilter({
  //     ...filters,
  //     _page: newPage,
  //   });
  // }

  // function handleTodoClick(todo) {
  //   const index = todoList.findIndex((x) => x.id === todo.id);
  //   if (index < 0) return;

  //   const newTodoList = [...todoList];
  //   newTodoList.splice(index, 1);
  //   setTodoList(newTodoList);
  // }

  // function handleTodoFormSubmit(formValues) {
  //   console.log('Form Submit', formValues);
  //   // add new todo to current todo list
  //   const newTodo = {
  //     id: todoList.length + 1,
  //     ...formValues,
  //   };
  //   const newTodoList = [...todoList];
  //   newTodoList.push(newTodo);
  //   setTodoList(newTodoList);
  // }

  // function handleFilterChange(newFilters) {
  //   console.log('New Filters: ', newFilters);
  //   setFilter({
  //     ...filters,
  //     _page: 1,
  //     title_like: newFilters.searchTerm,
  //   });
  // }

  return (
    <div className="app">
      <Header/>

      <Switch>
        <Route path="/products" component={ProductFeature}/>
        <Route path="/cart" component={CartFeature}/>
      </Switch>
    </div>
  );
}

export default App;
