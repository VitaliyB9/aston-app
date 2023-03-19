# aston-app

Учебный проект в рамках React-интенсива компании Aston

Реализованы следующие требования к функциональности:

React

- Функциональные компоненты с хуками в приоритете над классовыми
- Есть четкое разделение на умные и глупые компоненты
- Есть рендеринг списков: [Posts] (https://github.com/VitaliyB9/aston-app/blob/main/src/pages/Posts.jsx), [Users] (https://github.com/VitaliyB9/aston-app/blob/main/src/pages/Users.jsx)
- Реализована хотя бы одна форма: [PostForm] (https://github.com/VitaliyB9/aston-app/blob/main/src/components/posts/PostForm.jsx)
- Есть применение Context API: [PostService] (https://github.com/VitaliyB9/aston-app/blob/main/src/API/PostService.jsx), [UserService] (https://github.com/VitaliyB9/aston-app/blob/main/src/API/UserService.jsx)
- Есть применение предохранителя ErrorBoundary: Понял как работате ErrorBoundary, но в проект не добавил, реализовал setLoad, postErr в /pages/Posts и pages/Users
- Есть хотя бы один кастомный хук: [useFetch] (https://github.com/VitaliyB9/aston-app/blob/main/src/hooks/useFetch.js)
- Хотя бы несколько компонентов используют PropTypes: PostElement, UserElement
- Поиск не должен триггерить много запросов к серверу

Redux

- Используем Modern Redux with Redux Toolkit: [store] (https://github.com/VitaliyB9/aston-app/blob/main/src/store/store.js)
- Используем слайсы: [todosSlice] (https://github.com/VitaliyB9/aston-app/blob/main/src/features/todos/todosSlice.js)
- Есть хотя бы одна кастомная мидлвара: реализовал getDefaultMiddleware в store и получение [...getDefaultMiddleware(), commentsAPI.middleware]
- Используется RTK Query: CommentsService
- Используется Transforming Responses: понял как это работает, но из-за того что в проекте использовался https://jsonplaceholder.typicode.com/ где не реализованы в должной мере get, post и т.д подключить не удалось, настройка в CommentsService

JSONPlaceholder - Free Fake REST API
jsonplaceholder.typicode.com
Файл не выбран
More
