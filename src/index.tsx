// type UserPropsType = {
//   name: string
//   description: string
// }
// export const User: React.FC<UserPropsType> = (props) => {
//   return <div>
//       <h1>Имя: {props.name}</h1>
//       //<div>Описание: {props.description}</div>
//   </div>
// }



// //Что нужно написать вместо ххх, что бы код работал?






//22222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
//22222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
//22222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
//22222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222


// import React, {useState} from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';

// function UsersList() {
//     const [users, setUsers] = useState<Array<string>>(["Bob", "Alex", "Ann"])
//     const getUser = (user: string) => <li>{user}</li>
//     const usersList = users.map(getUser)

//     return (
//         <main>
//             <h4>User list:</h4>
//             <ul>
//                 {usersList}
//             </ul>
//         </main>
//     )
// }

// ReactDOM.render(
//     <UsersList/>, document.getElementById('root')
// );
// // Что вернёт выражение: Array.isArray(usersList)?





// import React, {useState} from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';

// function UsersList() {
//     const [users, setUsers] = useState<Array<string>>(["Bob", "Alex", "Ann"])
//     const getUser = (user: string) => <li>{user}</li>
//     const usersList = users.map(getUser)

//     return (
//         <main>
//             <h4>User list:</h4>
//             <ul>
//                 {usersList}
//             </ul>
//         </main>
//     )
// }

// ReactDOM.render(
//     <UsersList/>, document.getElementById('root')
// );

// // Какую переменную необходимо указать вместо XXX, чтобы код заработал?




// import React, {useState} from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';

// function UsersList() {
//     const [users, setUsers] = useState<Array<string>>(["Bob", "Alex", "Ann"])
// console.log(typeof useState)
//     return (
//        <p>Тут будет список пользователей!</p>
//     )
// }

// ReactDOM.render(
//     <UsersList />, document.getElementById('root')
// );

// // Что вернёт выражение: typeof useState?





// import React, {useState} from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';

// function UsersList() {
//     const [users, setUsers] = useState<Array<string>>(["Bob", "Alex", "Ann"])
//     const getUser = (user: string) => <li>{user}</li>
//     console.log(typeof getUser)
//     return (
//         <main>
//             <h4>User list:</h4>
//             <ul>
//                 {users.map(getUser)}
//             </ul>
//         </main>
//     )
// }

// ReactDOM.render(
//     <UsersList/>, document.getElementById('root')
// );
// // Что вернёт выражение: typeof getUser?




// import React, {useState} from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';

// function UsersList() {
//     const [users, setUsers] = useState<Array<string>>(["Bob", "Alex", "Ann"])

//     console.log(typeof setUsers)
//     return (
//        <p>Тут будет список пользователей</p>
//     )
// }

// ReactDOM.render(
//     <UsersList/>, document.getElementById('root')
// );
// // Что вернёт выражение: typeof setUsers?




// import React, {useState} from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';

// function UsersList() {
//     const results = useState<string[]>(["Bob", "Alex", "Ann"])
//     const users = results[0]
//     const setUsers = results[1]

//     return (
//        <p>Тут будет список пользователей</p>
//     )
// }

// ReactDOM.render(
//     <UsersList/>, document.getElementById('root')
// );

// Какой тип правильнее указать вместо "any" при типизации стэйта?



// import React, {useState} from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';

// type UserType = {
//     id: number
//     name: string
//     age: number
// }

// function User(props: UserType) {
//     return (
//         <li>User {props.name}: {props.age} y.o.</li>
//     )
// }

// function UsersList() {
//     const state = [
//         {id: 1, name: "Bob", age: 34},
//         {id: 2, name: "Alex", age: 25},
//         {id: 3, name: "Ann", age: 30},
//         {id: 4, name: "John", age: 23},
//     ]
//     const users = [
//         {id: 1, userName: "Bob", age: 34},
//         {id: 2, userName: "Alex", age: 25},
//         {id: 3, userName: "Ann", age: 30},
//         {id: 4, userName: "John", age: 23},
//     ]

//     const [usersList, setUsersList] = useState<Array<UserType>>(state)
//     return (
//         <main>
//             <h5>User list:</h5>
//             <p>Тут будет список пользователей</p>
//         </main>
//     )
// }

// ReactDOM.render(
//     <UsersList/>, document.getElementById('root')
// );
// // Что надо написать вместо XXX, чтобы код работал?
// // ❗ Если мы отмапим массив, то должны увидеть данные пользователей
// // ❗ Ответ дать минимально возможным объёмом кода






// import React, {useState} from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';

// function UsersList() {
//     const [users, setUsers] = useState<Array<string>>(["Bob", "Alex", "Ann"])
// console.log(Array.isArray(users))
//     return (
//        <p>Тут будет список пользователей</p>
//     )
// }

// ReactDOM.render(
//     <UsersList/>, document.getElementById('root')
// );
// // Что вернёт выражение: Array.isArray(users)?




// import React, {useState} from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';

// function UsersList() {
//     const results = useState<Array<string>>(["Bob", "Alex", "Ann"])

//     const users = results[0]
//     const setUsers = results[1]
// console.log(results)
//     return (
//        <p>Тут будет список пользователей</p>
//     )
// }

// ReactDOM.render(
//     <UsersList/>, document.getElementById('root')
// );

// // Чему равно results.length?


// import React, {useState} from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';

// function UsersList() {
//     const [users, setUsers] = useState<Array<string>>(["Bob", "Alex", "Ann"])

//     return (
//         <main>
//             <h4>User list:</h4>
//             <ul>
//                  { users.map(user => <li>{user}</li> )}
//             </ul>
//         </main>
//     )
// }

// ReactDOM.render(
//     <UsersList/>, document.getElementById('root')
// );
// // Что надо вставить вместо ХХХ, чтобы код заработал?






//33333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
//33333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
//33333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
//33333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
//33333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333


// import React, {useState} from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';

// type UserType = {
//     id: number
//     name: string
//     age: number
// }

// type UserPropsType = UserType & {
//     deleteUser: (id: number) => void
// }

// function User(props: UserPropsType) {
//     const deleteUser = () => props.deleteUser(props.id)
//     return (
//         <li>
//             <button onClick={deleteUser}>x</button>
//             User {props.name}: {props.age} y.o.
//         </li>
//     )
// }

// function UsersList() {
//     const data: Array<UserType> = [
//         {id: 1, name: "Bob", age: 25},
//         {id: 2, name: "Alex", age: 28},
//         {id: 3, name: "Ann", age: 23},
//         {id: 4, name: "John", age: 30},
//     ]
//     const [users, setUsers] = useState<Array<UserType>>(data)
//     const deleteUser = (userID: number) => {
//         const filteredUsers = users.filter(u => u.id !== userID)
//         setUsers(filteredUsers)
//     }
//     return (
//         <main>
//             <h4>User list:</h4>
//             <ul>
//                 {users.map(u => <User
//                     key={u.id}
//                     {...u}
//                     deleteUser={deleteUser}
//                 />)}
//             </ul>
//         </main>
//     )
// }

// ReactDOM.render(
//     <UsersList/>, document.getElementById('root')
// );
// // Что надо написать вместо xxx, чтобы код работал?




// import React, {useState} from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';

// type UserType = {
//     id: number
//     name: string
//     age: number
// }

// function User(props: UserType) {
//     return (
//         <li>Student {props.name}: {props.age} y.o.</li>
//     )
// }

// function UsersList() {
//     const data: Array<UserType> = [
//         {id: 1, name: "Bob", age: 34},
//         {id: 2, name: "Alex", age: 29},
//         {id: 3, name: "Ann", age: 25},
//         {id: 4, name: "John", age: 36},
//     ]
//     const [users, setUsers] = useState<Array<UserType>>(data)
//     return (
//         <main>
//             <h4>User list:</h4>
//             <ul>
//                 { users.map(u => <User key={u.id} {...u} />) }
//             </ul>
//         </main>
//     )
// }

// ReactDOM.render(
//     <UsersList/>, document.getElementById('root')
// );
// // Что надо написать вместо xxx, чтобы код работал?






// import React, {useState} from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';

// type UserType = {
//     id: number
//     name: string
//     age: number
// }

// function User(props: UserType) {
//     return (
//         <li>User {props.name}: {props.age} y.o.</li>
//     )
// }

// function UsersList() {
//     const data: Array<UserType> = [
//         {id: 1, name: "Bob", age: 25},
//         {id: 2, name: "Alex", age: 28},
//         {id: 3, name: "Ann", age: 23},
//         {id: 4, name: "John", age: 30},
//     ]
//     const [users, setUsers] = useState<Array<UserType>>(data)
//     // Пользователи старше 25 лет:
//     const olderThen25Users = users.filter(u => u.age > 25)
//     return (
//         <main>
//             <h4>User list:</h4>
//             <ul>
//                 { olderThen25Users.map(u => <User key={u.id} {...u}/>)}
//             </ul>
//         </main>
//     )
// }

// ReactDOM.render(
//     <UsersList/>, document.getElementById('root')
// );
// // Что надо написать вместо xxx, чтобы код работал?





// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';

// function Button() {
//     return <button
//         onClick={()=> alert('')}
//     >Click</button>
// }


// ReactDOM.render(
//     <Button/>, document.getElementById('root')
// );





// // Что надо написать вместо ххх,
// // что бы на странице появился пустой alert при клике по кнопке?





// import React, {useState} from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';

// type UserType = {
//     id: number
//     name: string
//     age: number
// }

// function User(props: UserType) {
//     return (
//         <li>User {props.name}: {props.age} y.o.</li>
//     )
// }

// function UsersList() {
//     const data: Array<UserType> = [
//         {id: 1, name: "Bob", age: 25},
//         {id: 2, name: "Alex", age: 28},
//         {id: 3, name: "Ann", age: 23},
//         {id: 4, name: "John", age: 30},
//     ]
//     const [users, setUsers] = useState<Array<UserType>>(data)
//     // Необходимо отрендерить список ользователей старше 25 лет:
//     const getOlderThen25Users = (u: UserType) => u.age > 25
//     const olderThen25Users = users.filter(getOlderThen25Users)
//     console.log(Array.isArray(olderThen25Users))
//     return (
//         <main>
//             <h4>User list:</h4>
//             <ul>
//                 { olderThen25Users.map(u => <User key={u.id} {...u}/>)}
//             </ul>
//         </main>
//     )
// }

// ReactDOM.render(
//     <UsersList/>, document.getElementById('root')
// );
// // Что вернёт выражение: Array.isArray(olderThen25Users)




// import React, {useState} from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';

// type UserType = {
//     id: number
//     name: string
//     age: number
// }

// function User(props: UserType) {
//     return (
//         <li>User {props.name}: {props.age} y.o.</li>
//     )
// }

// function UsersList() {
//     const data: Array<UserType> = [
//         {id: 1, name: "Bob", age: 25},
//         {id: 2, name: "Alex", age: 28},
//         {id: 3, name: "Ann", age: 23},
//         {id: 4, name: "John", age: 30},
//     ]
//     const [users, setUsers] = useState<Array<UserType>>(data)
//     // Необходимо отрендерить список пользователей старше 25 лет:
//     const getOlderThen25Users = (u: UserType) => u.age > 25
//     const olderThen25Users = users.filter(getOlderThen25Users)
//     return (
//         <main>
//             <h4>User list:</h4>
//             <ul>
//                 { olderThen25Users.map(u => <User key={u.id} {...u}/>)}
//             </ul>
//         </main>
//     )
// }

// ReactDOM.render(
//     <UsersList/>, document.getElementById('root')
// );

// // Что надо написать вместо xxx, чтобы код работал?





// import React, {useState} from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';

// type UserType = {
//     id: number
//     name: string
//     age: number
// }

// function User(props: UserType) {
//     return (
//         <li>Student {props.name}: {props.age} y.o.</li>
//     )
// }

// function UsersList() {
//     const data: Array<UserType> = [
//         {id: 1, name: "Bob", age: 34},
//         {id: 2, name: "Alex", age: 29},
//         {id: 3, name: "Ann", age: 25},
//         {id: 4, name: "John", age: 36},
//     ]
//     const [users, setUsers] = useState<Array<UserType>>(data)
//     return (
//         <main>
//             <h4>User list:</h4>
//             <ul>
//                 {
//                    users.map(u => <User key={u.id}
//                                         id={u.id}
//                                         name={u.name}
//                                         age={u.age}
//                        />
//                    )
//                 }
//             </ul>
//         </main>
//     )
// }

// ReactDOM.render(
//     <UsersList/>, document.getElementById('root')
// );
// // Что надо написать вместо xxx, чтобы код работал оптимально?





// import React, {useState} from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';

// type UserType = {
//     id: number
//     name: string
//     age: number
// }

// type UserPropsType = UserType & {
//     deleteUser: (id: number) => void
// }

// function User(props: UserPropsType) {
//     return (
//         <li>
//             <button onClick={()=>props.deleteUser(props.id)}>x</button>
//             User {props.name}: {props.age} y.o.
//         </li>
//     )
// }

// function UsersList() {
//     const data: Array<UserType> = [
//         {id: 1, name: "Bob", age: 25},
//         {id: 2, name: "Alex", age: 28},
//         {id: 3, name: "Ann", age: 23},
//         {id: 4, name: "John", age: 30},
//     ]
//     const [users, setUsers] = useState<Array<UserType>>(data)
//     const deleteUser = (userID: number) => {
//         setUsers(users.filter(u => u.id !== userID))
//     }
//     return (
//         <main>
//             <h4>Users list:</h4>
//             <ul>
//                 {users.map(u => <User
//                     key={u.id}
//                     {...u}
//                     deleteUser={deleteUser}
//                 />)}
//             </ul>
//         </main>
//     )
// }

// ReactDOM.render(
//     <UsersList/>, document.getElementById('root')
// );
// // В типе UserPropsType у функции deleteUser в параметрах указан тип "any".
// // Какой тип было бы указать правильнее?






// const user = {}
// const boy = user
// const student = {}


// if(boy === user) {
//     console.log ("Yo!!!")
// }

// /*Какую переменную надо указать вместо XXX, кроме user, что бы в консоль вывелась строка "Yo!!!?*/






// import React, {useState, MouseEvent} from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';

// function Button() {
//     const [tagName, setTagName] = useState<string>()
//     const onClickHandler = (e: MouseEvent<HTMLButtonElement>) => {
//         setTagName(e.currentTarget.tagName)
//     }
//     return (
//         <>
//             <p>{tagName}</p>
//             <button onClick={onClickHandler} >
//                 <span>Click</span>
//             </button>
//         </>
//     )
// }

// ReactDOM.render(
//     <Button/>, document.getElementById('root')
// );

// // Что надо написать вместо ххх, что бы на странице появился текст BUTTON?






// import React, {MouseEvent} from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';

// function Button() {
//     const onClickHandler = (e: MouseEvent<HTMLButtonElement>) => {
//         console.log((typeof e) === 'object')
//     }
//     return <button onClick={onClickHandler} >Click</button>
// }


// ReactDOM.render(
//     <Button/>, document.getElementById('root')
// );

// // Какой тип данных представляет аргумент функции-обработчика?
// // Что надо написать вместо ххх, что бы в консоль вывело true?





// 44444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
// 44444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
// 44444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
// 44444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
// 44444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444


// import React, {useState, MouseEvent, ChangeEvent} from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';

// function Notes() {
//     const [newNote, setNewNote] = useState<string>("")
//     const [notes, setNotes] = useState<Array<string>>([])
//     const onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement> )=>
//          setNewNote(e.currentTarget.value)
//     const addNote = () => {
//         setNotes([newNote, ...notes])
//         setNewNote("")
//     }
//     return (
//         <div>
//             <textarea
//                 value={newNote}
//                 onChange={onChangeHandler}
//                 onBlur = {addNote}
//             />
//             <h4>Notes:</h4>
//             <div>
//                 {notes.map((n,i )=> <p key={i}>{n}</p>)}
//             </div>
//         </div>
//     )
// }


// ReactDOM.render(
//     <Notes/>, document.getElementById('root')
// );
// // Что надо написать вместо ххх,
// // чтобы при потере инпутом фокуса добавлялась заметка?




// import React, {useState, MouseEvent} from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';

// function Post() {
//     const onClickHandler = (e: MouseEvent<HTMLAnchorElement>) => {
//         e.preventDefault()
//         alert("Летим-бомбим!!!")
//     }
//     return (
//         <div>
//             <article>
//                 <h4>Как дела, братан?</h4>
//                 <p>
//                     Вижу, что неплохо. Давай, трудись )))
//                     Google ждёт тебя в цифровом рабстве!
//                     Cтавь лайк и полетели!!!
//                 </p>
//                 <a href={"https://www.youtube.com/"}
//                    onClick={onClickHandler}
//                 >В этом месте подробнее...</a>
//             </article>
//         </div>
//     )
// }

// ReactDOM.render(
//     <Post/>, document.getElementById('root')
// );
// // Что надо написать вместо ххх, чтобы Вас не направило на страницу Youtube
// // при клике по ссылке?



// import React, {useState, MouseEvent, ChangeEvent} from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';

// function User() {
//     const [userName, setUserName] = useState<string>("")
//     const [text, setText] = useState<string>("")
//     const onChangeHandler = (e: ChangeEvent<HTMLInputElement> )=> setUserName(e.currentTarget.value)
//     return (
//         <div>
//             <input
//                 value={userName}
//                 onChange={onChangeHandler}
//                 onBlur={()=> {
//                     setUserName('')
//                     setText(userName)
//                 }}
//             />
//             <p>{text}</p>
//         </div>
//     )
// }

// ReactDOM.render(
//     <User/>, document.getElementById('root')
// );
// // Что надо написать вместо ххх,
// // чтобы после вывода текста в параграф содержимое формы ввода очищалось?





// import React, {useState} from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';

// type UserType = {
//     id: number
//     name: string
//     age: number
// }

// type UserPropsType = UserType & {
//     deleteUser: (id: number) => void
// }

// function User(props: UserPropsType) {
//     return (
//         <li>
//             <button onClick={() => props.deleteUser(props.id)}>x</button>
//             User {props.name}: {props.age} y.o.
//         </li>
//     )
// }

// function UsersList() {
//     const data: Array<UserType> = [
//         {id: 1, name: "Bob", age: 25},
//         {id: 2, name: "Alex", age: 28},
//         {id: 3, name: "Ann", age: 23},
//         {id: 4, name: "John", age: 30},
//     ]
//     const [users, setUsers] = useState<Array<UserType>>(data)
//     const deleteUser = (userID: number) => {
//         const filteredUsers = users.filter(u => u.id !== userID)
//         setUsers(filteredUsers)
//     }
//     return (
//         <main>
//             <h4>User list:</h4>
//             <ul>
//                 {users.map(u => <User
//                     key={u.id}
//                     {...u}
//                     deleteUser={deleteUser}
//                 />)}
//             </ul>
//         </main>
//     )
// }

// ReactDOM.render(
//     <UsersList/>, document.getElementById('root')
// );
// // Что надо написать вместо xxx, чтобы код работал?





// import React, {useState, MouseEvent, ChangeEvent} from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';

// function User() {
//     const [userName, setUserName] = useState<string>("")
//     const onChangeHandler = (e: ChangeEvent<HTMLInputElement> )=> setUserName(e.currentTarget.value)
//     return (
//         <div>
//             <p>{userName}</p>
//             <input
//                 onChange={onChangeHandler}
//             />
//         </div>
//     )
// }

// ReactDOM.render(
//     <User/>, document.getElementById('root')
// );
// // Что надо написать вместо ххх, чтобы правильно типизировать
// // параметр функции?



// const amount = {
//     name: "Bob"
//   }

//   const coffee = amount

//   const ability = {}

//   const community = {
//     name: "Bob"
//   }

//   if (amount === coffee) {
//       console.log("Yo!!!")
//   } else {
//       console.log("Hey!!!")
//   }

//   /*Какие переменные можно использовать вместо XXX, что бы в консоль вывелась строка "Hey"!!!"? Если их несколько, напишите через пробел.*/





// import React, {useState, MouseEvent, ChangeEvent} from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';

// function User() {
//     const [userName, setUserName] = useState<string>("")
//     return (
//         <div>
//             <p>{userName}</p>
//             <input
//                 value={userName}
//                 onChange={(e) => setUserName(e.currentTarget.value)}
//             />
//         </div>
//     )
// }

// ReactDOM.render(
//     <User/>, document.getElementById('root')
// );
// // Что надо написать вместо ххх, чтобы инпут был контролируемым?





// import React, {useState, MouseEvent, ChangeEvent} from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';

// function Notes() {
//     const [newNote, setNewNote] = useState<string>("")
//     const [notes, setNotes] = useState<Array<string>>([])
//     const onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement> )=>
//         setNewNote(e.currentTarget.value)
//     const addNote = () => {
//         setNotes([newNote, ...notes])
//         setNewNote("")
//  }
//     return (
//         <div>
//             <textarea
//                 value={newNote}
//                 onChange={onChangeHandler}
//                 onBlur={addNote}
//             />
//             <div>
//                 <button
//                      onClick={()=>setNotes([])}
//                 >Clear notes list</button>
//             </div>
//             <h4>Notes:</h4>
//             <div>
//                 {notes.map(n => <p>{n}</p>)}
//             </div>
//         </div>
//     )
// }

// ReactDOM.render(
//     <Notes/>, document.getElementById('root')
// );
// // Что надо написать вместо ххх,
// // чтобы при клике список заметок очищался?






// import React, {useState, MouseEvent} from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';

// function AuthForm() {
//     const onClickHandler = (e: MouseEvent<HTMLButtonElement>) => {
//        e.preventDefault()
//         alert()
//     }
//     return (
//         <form>
//             <div>
//                 <label style={{padding: "10px 0"}}>
//                     Name:
//                     <input type={"email"} name={"email"}/>
//                 </label>
//             </div>
//             <div>
//                 <label style={{padding: "10px 0"}}>
//                     Password:
//                     <input type={"password"} name={"password"}/>
//                 </label>
//             </div>
//             <button
//                 onClick={onClickHandler}
//                 type={"submit"}>
//                 Log in
//             </button>
//         </form>
//     )
// }

// ReactDOM.render(
//     <AuthForm/>, document.getElementById('root')
// );
// // Что надо написать вместо ххх, чтобы данные из формы
// // не отправлялись на сервер и страница не перезагружалась
// // при клике по кнопке?



// import React, {useState} from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';

// type UserType = {
//     id: number
//     name: string
//     age: number
// }

// type UserPropsType = UserType & {
//     deleteUser: (id: number) => void
// }

// function User(props: UserPropsType) {
//     const deleteUser = () => props.deleteUser(props.id)
//     return (
//         <li>
//             <button onClick={deleteUser}>Delete</button>
//             User {props.name}: {props.age} y.o.
//         </li>
//     )
// }

// function UsersList() {
//     const data: Array<UserType> = [
//         {id: 1, name: "Bob", age: 25},
//         {id: 2, name: "Alex", age: 28},
//         {id: 3, name: "Ann", age: 23},
//         {id: 4, name: "John", age: 30},
//     ]
//     const [users, setUsers] = useState<Array<UserType>>(data)
//     const deleteUser = (userID: number) => {
//         const updatedUsers = users.filter(u => u.id !== userID)
//         setUsers(updatedUsers)
//     }
//     return (
//         <main>
//             <h4>User list:</h4>
//             <ul>
//                 {users.map(u => <User
//                     key={u.id}
//                     {...u}
//                     deleteUser={deleteUser}
//                 />)}
//             </ul>
//         </main>
//     )
// }

// ReactDOM.render(
//     <UsersList/>, document.getElementById('root')
// );

// Что надо написать вместо xxx, чтобы код работал?



// TOTAL1 TOTAL1 TOTAL1 TOTAL1 TOTAL1 TOTAL1 TOTAL1 TOTAL1 TOTAL1 TOTAL1 TOTAL1 TOTAL1 TOTAL1 TOTAL1 TOTAL1 TOTAL1 TOTAL1 TOTAL1 TOTAL1 TOTAL1 TOTAL1 TOTAL1
// TOTAL1 TOTAL1 TOTAL1 TOTAL1 TOTAL1 TOTAL1 TOTAL1 TOTAL1 TOTAL1 TOTAL1 TOTAL1 TOTAL1 TOTAL1 TOTAL1 TOTAL1 TOTAL1 TOTAL1 TOTAL1 TOTAL1 TOTAL1 TOTAL1 TOTAL1
// TOTAL1 TOTAL1 TOTAL1 TOTAL1 TOTAL1 TOTAL1 TOTAL1 TOTAL1 TOTAL1 TOTAL1 TOTAL1 TOTAL1 TOTAL1 TOTAL1 TOTAL1 TOTAL1 TOTAL1 TOTAL1 TOTAL1 TOTAL1 TOTAL1 TOTAL1
// TOTAL1 TOTAL1 TOTAL1 TOTAL1 TOTAL1 TOTAL1 TOTAL1 TOTAL1 TOTAL1 TOTAL1 TOTAL1 TOTAL1 TOTAL1 TOTAL1 TOTAL1 TOTAL1 TOTAL1 TOTAL1 TOTAL1 TOTAL1 TOTAL1 TOTAL1
// TOTAL1 TOTAL1 TOTAL1 TOTAL1 TOTAL1 TOTAL1 TOTAL1 TOTAL1 TOTAL1 TOTAL1 TOTAL1 TOTAL1 TOTAL1 TOTAL1 TOTAL1 TOTAL1 TOTAL1 TOTAL1 TOTAL1 TOTAL1 TOTAL1 TOTAL1
// TOTAL1 TOTAL1 TOTAL1 TOTAL1 TOTAL1 TOTAL1 TOTAL1 TOTAL1 TOTAL1 TOTAL1 TOTAL1 TOTAL1 TOTAL1 TOTAL1 TOTAL1 TOTAL1 TOTAL1 TOTAL1 TOTAL1 TOTAL1 TOTAL1 TOTAL1


// import React, {useState} from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';

// type UserType = {
//     id: number
//     name: string
//     age: number
// }

// type UserPropsType = UserType & {
//     deleteUser: (id: number) => void
// }

// function User(props: UserPropsType) {
//     return (
//         <li>
//             <button onClick={() => props.deleteUser(props.id)}>x</button>
//             User {props.name}: {props.age} y.o.
//         </li>
//     )
// }

// function UsersList() {
//     const data: Array<UserType> = [
//         {id: 1, name: "Bob", age: 25},
//         {id: 2, name: "Alex", age: 28},
//         {id: 3, name: "Ann", age: 23},
//         {id: 4, name: "John", age: 30},
//     ]
//     const [users, setUsers] = useState<Array<UserType>>(data)
//     const deleteUser = (userID: number) => {
//         const filteredUsers = users.filter(u => u.id !== userID)
//         setUsers(filteredUsers)
//     }
//     return (
//         <main>
//             <h4>User list:</h4>
//             <ul>
//                 {users.map(u => <User
//                     key={u.id}
//                     {...u}
//                     deleteUser={deleteUser}
//                 />)}
//             </ul>
//         </main>
//     )
// }

// ReactDOM.render(
//     <UsersList/>, document.getElementById('root')
// );
// // Что надо написать вместо xxx, чтобы код работал?




// type UserWalletType = {
//     title: string
//     amount: number
// }
// type UserWalletPropsType = {
//     wallet: UserWalletType
// }

// export const UserWallet: React.FC<UserWalletPropsType> = (props) => {
//     debugger
//     return <div>title: {props.wallet.title}, amount: {props.wallet.amount}</div>
// }

// export const UserMoney = () => {
//     debugger
//     const wallets = [
//         {title: 'bitcoin', amount: 1},
//         {title: '$', amount: 100}
//     ]

//     return <div>
//         <UserWallet wallet={wallets[0]} />
//         <UserWallet wallet={wallets[1]} />
//     </div>
// }




// import React, {useState} from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';

// type UserType = {
//     id: number
//     name: string
//     age: number
// }

// function User(props: UserType) {
//     return (
//         <li>User {props.name}: {props.age} y.o.</li>
//     )
// }

// function UsersList() {
//     const state = [
//         {id: 1, name: "Bob", age: 34},
//         {id: 2, name: "Alex", age: 25},
//         {id: 3, name: "Ann", age: 30},
//         {id: 4, name: "John", age: 23},
//     ]
//     const users = [
//         {id: 1, userName: "Bob", age: 34},
//         {id: 2, userName: "Alex", age: 25},
//         {id: 3, userName: "Ann", age: 30},
//         {id: 4, userName: "John", age: 23},
//     ]

//     const [usersList, setUsersList] = useState<Array<UserType>>(users)
//     return (
//         <main>
//             <h5>User list:</h5>
//             <p>Тут будет список пользователей</p>
//             {usersList.map(u=> <div>{u.age}</div>)}
//         </main>
//     )
// }

// ReactDOM.render(
//     <UsersList/>, document.getElementById('root')
// );
// // Что надо написать вместо XXX, чтобы код работал?
// // ❗ Если мы отмапим массив, то должны увидеть данные пользователей
// // ❗ Ответ дать минимально возможным объёмом кода



// import React, {useState, MouseEvent, ChangeEvent} from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';

// function Notes() {
//     const [newNote, setNewNote] = useState<string>("")
//     const [notes, setNotes] = useState<Array<string>>([])
//     const onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement> )=>
//         setNewNote(e.currentTarget.value)
//     const addNote = () => {
//         setNotes([newNote, ...notes])
//         setNewNote("")
//  }
//     return (
//         <div>
//             <textarea
//                 value={newNote}
//                 onChange={onChangeHandler}
//                 onBlur={addNote}
//             />
//             <div>
//                 <button
//                     onClick={()=> setNewNote}
//                 >Clear notes list</button>
//             </div>
//             <h4>Notes:</h4>
//             <div>
//                 {notes.map(n => <p>{n}</p>)}
//             </div>
//         </div>
//     )
// }

// ReactDOM.render(
//     <Notes/>, document.getElementById('root')
// );
// // Что надо написать вместо ххх,
// // чтобы при клике список заметок очищался?





// import React, {useState, MouseEvent, ChangeEvent} from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';

// function User() {
//     const [userName, setUserName] = useState<string>("")
//     return (
//         <div>
//             <p>{userName}</p>
//             <input
//                 value={userName}
//                 onChange={(e) => setUserName(e.currentTarget.value)}
//             />
//         </div>
//     )
// }

// ReactDOM.render(
//     <User/>, document.getElementById('root')
// );
// // Что надо написать вместо ххх, чтобы инпут был контролируемым?




// type UserPropsType = {
//     name: string
//     description: string
// }
// export const User: React.FC<UserPropsType> = (props) => {
//     return <div>
//         <h1>Имя: {props.name}</h1>
//         //<div>Описание: {props.description}</div>
//     </div>
// }

// //Что нужно написать вместо ххх, что бы код работал?




// import React, {MouseEvent} from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';

// function Button() {
//     const onClickHandler = (e: MouseEvent<HTMLButtonElement>) => {
//         console.log((typeof e) === 'object')
//     }
//     return <button onClick={onClickHandler} >Click</button>
// }


// ReactDOM.render(
//     <Button/>, document.getElementById('root')
// );

// // Что надо написать вместо ххх, чтобы в консоль вывело true?




// import React, {useState} from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';

// function UsersList() {
//     const results = useState<Array<string>>(["Bob", "Alex", "Ann"])
//     console.log(results.length)
//     const users = results[0]
//     const setUsers = results[1]
//     console.log(results.length)
//     return (
//        <p>Тут будет список пользователей{results.length}</p>
//     )
// }

// ReactDOM.render(
//     <UsersList/>, document.getElementById('root')
// );

// // Чему равно results.length?






// import React, {useState} from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';

// function UsersList() {
//     const [users, setUsers] = useState<Array<string>>(["Bob", "Alex", "Ann"])
//     alert(typeof setUsers)
//     return (
//        <p>Тут будет список пользователей</p>
//     )
// }

// ReactDOM.render(
//     <UsersList/>, document.getElementById('root')
// );
// // Что вернёт выражение: typeof setUsers?




// type PagePropsType = {
//     age: number
//     name: string
//     avatarUrl: string
// }
// const Page: React.FC<PagePropsType> = (props) => {
//     return <User a={props.age} n={props.name} />
// }
// type UserPropsType = {
//     a: number
//     n: string
// }
// export const User: React.FC<UserPropsType> = (props) => {
//     return <div>name: {props.n}, age: {props.a}</div>
// }

// // Что нужно написать вместо xxx и yyy?
// // Ответ дайте через пробел, например: blabla onClick(props)




// import ReactDOM from 'react-dom'

// const Son = (props: any) => {
//     return <div>
//         I am son. My name is {props.name}
//     </div>
// }


// const Father = (props: any) => {
//     return <div>
//         I am father. My name is {props.name}
//         <Son name={props.sonName} />
//     </div>
// }

// const Granny = (props: any) => {
//     return <div>
//         I am granny. My name is {props.name}
//         <Father name={props.fatherName} sonName={props.sonName} />
//     </div>
// }

// export const App = () => {
//     return <div>
//         <Granny name={'Бабуля'} fatherName={'Батя'} sonName={'Сын'}/>
//     </div>
// }

// ReactDOM.render(<App/>,
//     document.getElementById('root')
// )




// import React, {useState} from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';

// type UserType = {
//     id: number
//     name: string
//     age: number
// }

// function User(props: UserType) {
//     return (
//         <li>User {props.name}: {props.age} y.o.</li>
//     )
// }

// function UsersList() {
//     const data: Array<UserType> = [
//         {id: 1, name: "Bob", age: 25},
//         {id: 2, name: "Alex", age: 28},
//         {id: 3, name: "Ann", age: 23},
//         {id: 4, name: "John", age: 30},
//     ]
//     const [users, setUsers] = useState<Array<UserType>>(data)
//     // Пользователи старше 25 лет:
//     const olderThen25Users = users.filter(u => u.age > 25)
//     return (
//         <main>
//             <h4>User list:</h4>
//             <ul>
//                 { olderThen25Users.map(u => <User key={u.id} {...u}/>)}
//             </ul>
//         </main>
//     )
// }

// ReactDOM.render(
//     <UsersList/>, document.getElementById('root')
// );
// // Что надо написать вместо xxx, чтобы код работал?




//55555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
//55555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
//55555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
//55555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
//55555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
//55555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
//55555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555





// const student = {
//     name: "Sergey"
//   }

//   const newStudent = student

//   const myFriend = {
//     ...newStudent
//   }

//   const newUser = {
//     name: "Masha"
//   }

//   const myFriendName =  student.name !== myFriend.name
//       ? newUser.name
//       : student.name

//   /*Какое значение получит переменная "myFriendName"?*/



// const student = {
//     name: "Michail",
//     age: 3,
//     friends: ["Daniil", "Rita", "Marina"]
// }

// const updatedStudent = {...student}

// updatedStudent.friends.push("Michail")

// console.log(student.friends[3])

// /*Какое значение будет выведено в консоль?*/




// import React, { ChangeEvent, useState } from 'react'
// import ReactDOM from 'react-dom'
// import './index.css'

// const MIN_COMMENT_SIZE = 5

// function LongCommentChecker() {
//   const [comment, setComment] = useState<string>('')
//   const isCommentReady = comment.length > MIN_COMMENT_SIZE

//   const onClickSendComment = () => {
//     if (isCommentReady) {
//       setComment('')
//     }
//   }
//   const onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
//     const newComment = e.currentTarget.value

//     setComment(newComment)
//   }


//   return (
//     <main>
//             <textarea
//               placeholder={'Your comment must have more than 5 charters'}
//               value={comment}
//               onChange={onChangeHandler}
//             />
//       <div>
//         <button
//           disabled={!isCommentReady}
//           onClick={onClickSendComment}>
//           Send comment
//         </button>
//       </div>
//     </main>
//   )
// }

// ReactDOM.render(<LongCommentChecker/>, document.getElementById('root'))



// const student = {
//     name: "Eva",
//     age: 28
// }

// const copyStudent = student

// student.age = 42

// /*Чему равно значение copyStudent.age после выполнения этого кода?*/



// import React, {useState} from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';

// function PasswordChecker() {
//     const [password, setPassword] = useState<string>("")
//     return (
//         <main>
//             <p>Your password must have more than 8 charters!</p>
//             <input
//                 placeholder={"Enter your password"}
//                 value={password}
//                 onChange={e => setPassword(e.currentTarget.value)}
//                 type={"password"}
//             />
//             {password.length < 9 && <p style={{color: "red"}}>The password is too short!</p>}
//         </main>
//     )
// }

// ReactDOM.render(
//     <PasswordChecker/>, document.getElementById('root')
// );

// // Что надо вставить вместо XXX, чтобы код работал нормально?



// import React, {useState} from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';

// function UsersList() {
//     const [users, setUsers] = useState<Array<string>>(["Bob", "Alex", "Ann"])
//     const getUser = (user: string, i: number) => <li key={i}>{user}</li>

//      const usersList = (users.length === 0)
//         ? <p>List is empty</p>
//         :  <ul>
//             { users.map(getUser)}
//            </ul>

//     return (
//         <main>
//             <button onClick={()=>setUsers([])}>Clear list</button>
//             <h4>User list:</h4>
//                 {usersList}
//         </main>
//     )
// }

// ReactDOM.render(
//     <UsersList/>, document.getElementById('root')
// );
// // Что надо вставить вместо XXX, чтобы код корректно работал  со списком пользователей?





// import React, { ChangeEvent, useState } from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';

// type UserType = {
//     id: number
//     name: string
//     personalData: PersonalDataType
// }
// type PersonalDataType = {
//     gender: string
//     age: number
//     technologies: Array<TechnologiesType>
// }
// type TechnologiesType = 'HTML' | 'CSS' | 'React' | 'JS/TS' | 'Redux'

// function UsersList() {

//     const [users, setUsers] = useState<Array<UserType>>([
//         {
//             id: 1,
//             name: 'Bob',
//             personalData: {
//                 gender: 'male',
//                 age: 23,
//                 technologies: ['HTML', 'CSS', 'React', 'JS/TS', 'Redux']
//             }
//         },
//         {
//             id: 2,
//             name: 'Alex',
//             personalData: {
//                 gender: 'male',
//                 age: 21,
//                 technologies: ['HTML', 'CSS', 'React']
//             }
//         },
//         {
//             id: 3,
//             name: 'Ann',
//             personalData: {
//                 gender: 'female',
//                 age: 26,
//                 technologies: ['HTML', 'CSS', 'JS/TS']
//             }
//         },
//         {
//             id: 4,
//             name: 'Helen',
//             personalData: {
//                 gender: 'female',
//                 age: 31,
//                 technologies: ['HTML', 'CSS']
//             }
//         },
//         {
//             id: 5,
//             name: 'Donald',
//             personalData: {
//                 gender: 'male',
//                 age: 28,
//                 technologies: ['React', 'JS/TS', 'Redux']
//             }
//         },
//     ])


//     return <ul>
//         {users.map(u => {
//             return (
//                 u.personalData.technologies.length >= 5
//                     ? <li key={u.id}>
//                         {`User ${u.name}. ${u.personalData.age}. Ready to work.`}
//                     </li>
//                     : <li key={u.id}>
//                         {`User ${u.name}. ${u.personalData.age}. `}
//                     </li>)
//         })}
//     </ul>
// }

// ReactDOM.render(
//     <UsersList/>, document.getElementById('root')
// );
// // Те пользователи, у которых в стэке пять и более технологий, должны в списке
// // быть отмечены, как готовые к работе.
// // Что надо вставить вместо XXX, чтобы код работал нормально?




// import React, {useState, MouseEvent} from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';

// function ColorButton() {
//     const [isColored, setIsColored] = useState<boolean>(false)
//     return (
//         <button
//             style={{ backgroundColor: `${ isColored === true ? "red": ""}`}}
//             onClick={()=>setIsColored(true)}
//         >
//           Меняю цвет по клику
//         </button>
//     )
// }


// ReactDOM.render(
//     <ColorButton/>, document.getElementById('root')
// );

// // Что надо написать вместо XXX, чтобы при клике кнопка становилась красной?



// import React, {ChangeEvent, useState} from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';

// function Colorize() {

//   const [color, setColor] = useState<string>("black")
//   const colors = ["red", "yellow", "green", "blue", "violet", "chartreuse"]

//   const styles = {
//     width: "100px",
//     height: "100px",
//     borderRadius: "50%",
//     backgroundColor: "black"
//   }

//   const getColor = (colors: string[]) => {
//     const nextColor = colors[Math.floor(Math.random() * colors.length)]
//     return nextColor
//   }


//   const client = {
//     name: "Margo",
//     age: 41
// }

// const copyClient = {...client}

// console.log(client.name = "Ekaterina")

// /*Чему равно copyClient.name после выполнения этого кода?*/
//   return (
//     <main>
//       <div style={{...styles, backgroundColor: color}}/>
//       <div>
//         <button
//           onClick={() => setColor(getColor(colors))}
//         >
//           Get random color
//         </button>
//       </div>
//     </main>
//   )
// }

// ReactDOM.render(
//   <Colorize/>, document.getElementById('root')
// );
// // Что надо вставить вместо XXX, чтобы круг менял цвет по клику?






















//666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
//666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
//666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
//666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
//666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
//666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666





// type StudentType = {
//     id: number
//     name: string
// }

// type FriendsType = {
//     [key: string]: Array<string>
// }

// export const students: Array<StudentType> = [
//     {id: 1, name: "Bob"},
//     {id: 2, name: "Alex"},
//     {id: 3, name: "Ann"},
//     {id: 4, name: "Charley"},
// ]

// export const friends: FriendsType = {
//     1: ["Oliver", "Jack", "Oscar",],
//     2: ["Jack", "Lewis", "Thomas",],
//     3: ["William", "Michael", "Lewis",],
//     4: ["Oscar", "James", "William",],
// }

// //Дан список студентов и структура,
// //которая содержит список друзей каждого из студентов.
// //Id студента является ключом к массиву его друзей.
// //Какое значение лежит тут:  friends[3][1]?



// const student = {
//     name: "Lev",
//     age: 17,
//     friends: ["Egor", "Margo", "Margo"]
// }

// const updatedStudent = {
//    ...student,
//    friends: student.friends
// }

// console.log(student.friends === updatedStudent.friends)

// /*Какое значение будет выведено в консоль?*/





// import React, {useState} from "react";

// type samuraiType = {
//     id: string
//     name: string
//     status: "online" | "offline"
// }
// type CourseNameType = "HTML"|"JS"|"React"|"Redux"|"HomeWorks"
// type CourseType = {
//     name: CourseNameType
//     mentor: string
//     isDone: boolean
// }
// type TechnologiesType = {
//     [userID: string]: Array<CourseType>
// }

// const samuraiID_1 = "64jf-87kg"
// const samuraiID_2 = "90lg-34ks"
// const samuraiID_3 = "12jm-05fd"

// export const samurai: Array<samuraiType> = [
//     {id: samuraiID_1, name: "Bob", status: "online"},
//     {id: samuraiID_2, name: "Alex", status: "offline"},
//     {id: samuraiID_3, name: "Ann", status: "offline"},
// ]

// export const technologies: TechnologiesType = {
//     [samuraiID_1]: [
//         {name: "HTML", mentor: "Svetlana", isDone: true},
//         {name: "JS", mentor: "Viktor", isDone: true},
//         {name: "React", mentor: "Dmitrij", isDone: false},
//         {name: "Redux", mentor: "Valera", isDone: false},
//         {name: "HomeWorks", mentor: "Ignat", isDone: true},
//     ],
//     [samuraiID_2]: [
//         {name: "HTML", mentor: "Svetlana", isDone: true},
//         {name: "JS", mentor: "Viktor", isDone: true},
//         {name: "React", mentor: "Dmitrij", isDone: true},
//         {name: "Redux", mentor: "Valera", isDone: false},
//         {name: "HomeWorks", mentor: "Ignat", isDone: true},
//     ],
//     [samuraiID_3]: [
//         {name: "HTML", mentor: "Svetlana", isDone: true},
//         {name: "JS", mentor: "Viktor", isDone: true},
//         {name: "React", mentor: "Dmitrij", isDone: false},
//         {name: "Redux", mentor: "Valera", isDone: false},
//         {name: "HomeWorks", mentor: "Ignat", isDone: false},
//     ],
// }

// export const updateCourseStatus = (samuraiID: string, name: CourseNameType, isDone: boolean) => {
//     return {...technologies,
//          [samuraiID]: technologies[samuraiID].map(c => c.name === name ? {...c, isDone} : c)
//       }
// }
// // Дан список самураев из инкубатора и структура, хранящая данные о курсах,
// // которые самурай уже прошёл, а так же о тех курсах, которые ему ещё предстоит пройти.
// // Так же дана функция updateCourseStatus,
// // которая позволяет отметить курс как пройденный самураем или снять такую отметку
// // Что надо написать вместо XXX, чтобы функция работала?




// type Student = {
//     id: number
//     name: string
// }
// type Students = Array<Student>
// type Friends = {
//     [key: string]: Array<string>
// }

// export const students: Students = [
//     {id: 1, name: "Bob"},
//     {id: 2, name: "Alex"},
//     {id: 3, name: "Ann"},
//     {id: 4, name: "Charley"},
// ]

// export const friends: Friends = {
//     1: ["Oliver", "Jack", "Oscar",],
//     2: ["Jack", "Lewis", "Thomas",],
//     3: ["William", "Michael", "Lewis",],
//     4: ["Oscar", "James", "William",],
// }

// //Дан список студентов и структура,
// //которая содержит список друзей каждого из студентов.
// //Id студента является ключом к массиву его друзей.
// //Что вернёт выражение: Array.isArray(friends)?






// type StudentType = {
//     id: number
//     name: string
// }

// type FriendsType = {
//     [key: string]: Array<String>
// }

// export const students: Array<StudentType> = [
//     {id: 1, name: "Bob"},
//     {id: 2, name: "Alex"},
//     {id: 3, name: "Ann"},
//     {id: 4, name: "Charley"},
// ]

// export const friends: FriendsType = {
//     1: ["Oliver", "Jack", "Oscar",],
//     2: ["Jack", "Lewis", "Thomas",],
//     3: ["William", "Michael", "Lewis",],
//     4: ["Oscar", "James", "William",],
// }

// //Дан список студентов и структура,
// //которая содержит список друзей каждого из студентов.
// //Id студента является ключом к массиву его друзей.
// //Какое значение лежит тут: friends[students[0].id][3]?





// const client = {
//     name: "Liza",
//     age: 41,
//     friends: ["Michail", "Dima", "Yana"]
// }

// const newFriend = "Max"

// const friends = [...friends, newFriend]

// const updatedClient = {...client, friends: friends}

// /*Выполнено преобразование объекта: добавлен новый друг в список.
// Что надо указать вместо XXX, что бы выполнить это действие иммутабельно?*/




// type StudentType = {
//     id: number
//     name: string
// }
// type Students = Array<StudentType>
// type Friends = {
//     [key: string]: Array<string>
// }

// export const students: Students = [
//     {id: 1, name: "Bob"},
//     {id: 2, name: "Alex"},
//     {id: 3, name: "Ann"},
//     {id: 4, name: "Charley"},
// ]

// export const friends: Friends = {
//     1: ["Oliver", "Jack", "Oscar",],
//     2: ["Jack", "Lewis", "Thomas",],
//     3: ["William", "Michael", "Lewis",],
//     4: ["Oscar", "James", "William",],
// }

// //Дан список студентов и структура,
// //которая содержит список друзей каждого из студентов
// //Id студента является ключом к массиву его друзей.
// //Что вернёт выражение Array.isArray(students)?




// type StudentType = {
//     id: number
//     name: string
// }

// type FriendsType = {
//     [key: string]: Array<string>
// }

// export const students: Array<StudentType> = [
//     {id: 1, name: "Bob"},
//     {id: 2, name: "Alex"},
//     {id: 3, name: "Ann"},
//     {id: 4, name: "Charley"},
// ]

// export const friends: FriendsType = {
//     1: ["Oliver", "Jack", "Oscar",],
//     2: ["Jack", "Lewis", "Thomas",],
//     3: ["William", "Michael", "Lewis",],
//     4: ["Oscar", "James", "William",],
// }

// //Дан список студентов и структура,
// //которая содержит список друзей каждого из студентов.
// //Id студента является ключом к массиву его друзей.
// //Какое значение лежит тут: friends[students[1].id][2]?




// const consumers = ["Natali", "Artur", "Elizaveta"]
// const body = [... consumers]
// const access = body

// const result = access !== XXX
//     ? "Yo!!!"
//     : "Hey!!!"

// /*Имя какой переменной надо указать вместо XXX, что бы переменная result получила значение "Yo!!!"? Если такой переменной нет, в качестве ответа укажите null.*/



// type StudentType = {
//     id: number
//     name: string
//     age: number
// }

// type FriendsType = {
//     [key: string]: Array<string>
// }


// export const students: Array<StudentType> = [
//     {id: 1, name: "Bob", age: 34},
//     {id: 2, name: "Alex", age: 23},
//     {id: 3, name: "Ann", age: 25},
//     {id: 4, name: "Charley", age: 20},
// ]

// export const friends: FriendsType = {
//     1: ["Jack","Oliver", "Oscar",],
//     2: ["Jack", "Lewis", "Thomas",],
//     3: ["William",  "Lewis","Michael"],
//     4: ["Oscar", "Thomas", "William",],
// }

// //Дан массив студентов и структура,
// //которая содержит список друзей каждого из студентов.
// //Id студента является ключом к массиву его друзей.
// //Имеют ли студенты students[1] и students[3] общих друзей?
// //Если да, напишите в ответе имя общего друга в кавычках, если нет - напишите в ответе false.










//77777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
//77777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
//77777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
//77777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
//77777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
//77777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
//77777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777




// const user = {
//     name: "Mia",
//     age: 72,
//     friends: ["William", "Maria", "Nikita", "Svetlana"]
// }

// const [bus, bonus, amount] = user.friends

// const result = bonus

// /*Какое значение получит переменная result?*/



// const customer = {
//     name: "Anastasiya",
//     age: 65,
//     scores: [82.22, 81.73, 69.73]
// }

// const {name, age, scores} = customer

// console.log(customer.scores === scores && age)


// /*Какое значение мы увидим в консоли?*/



// const client = {
//     name: "Katya",
//     age: 65,
//     scores: [5.32, 68.10, 53.26]
// }

// const [first, second, third = 29.15] = client.scores

// switch(third){
//     case 29.15:
//         console.log("Argentina")
//         break;
//    case 68.10:
//         console.log("Belarus")
//         break;
//    default:
//         console.log("Vietnam");
//   }
// /*Какую строку мы увидим в консоли?*/




// const getArray = (a, b, c) => {
//     return [c, b, a]
//   }

//   const [agency, business, control]  = getArray(13, 40, 47)

//   console.log(agency)

//   /*Какое число будет выведено в консоль?*/






// import React, { useState } from "react";

// type UserType = {
//     id: number
//     name: string
//     status: "online" | "offline"
// }

// type AddressType = {
//     country: string
//     city: string
//     email: string
// }

// type AdressesType = {
//     [userID: string]: AddressType
// }


// const users: Array<UserType> = [
//     { id: 1, name: "Bob", status: "online" },
//     { id: 2, name: "Alex", status: "offline" },
//     { id: 3, name: "Ann", status: "offline" },
// ]

// export const addresses: AdressesType = {
//     1: { country: "Russia", city: "Moscow", email: "hey@email.com" },
//     2: { country: "Ukraine", city: "Kiev", email: "yo@send.ua" },
//     3: { country: "Belarus", city: "Minsk", email: "wow@gogo.ru" },

// }

// export const changeUserStatus = (userID: number, status: string) => {
//     return users.map(u => u.id === userID ? { ...u, status } : u)
// }
// // Дан список пользователей и структура, хранящая адреса пользователей.
// // Так же дана функция changeUserStatus, которая меняет статус пользователя.
// // Что надо написать вместо ххх, чтобы функция работала корректно?





// import React, { useState } from "react";

// type UserType = {
//     id: number
//     name: string
//     status: "online" | "offline"
// }

// type AddressType = {
//     country: string
//     city: string
//     email: string
// }

// type AdressesType = {
//     [userID: string]: AddressType
// }

// const users: Array<UserType> = [
//     { id: 1, name: "Bob", status: "online" },
//     { id: 2, name: "Alex", status: "offline" },
//     { id: 3, name: "Ann", status: "offline" },
// ]

// const addresses: AdressesType = {
//     1: { country: "Russia", city: "Moscow", email: "hey@email.com" },
//     2: { country: "Ukraine", city: "Kiev", email: "yo@send.ua" },
//     3: { country: "Belarus", city: "Minsk", email: "wow@gogo.ru" },

// }

// const updateUserAddress = (userID: number, key: string, newValue: string) => {
//     return {
//         ...addresses,
//         [userID]: { ...addresses[userID], [key]: newValue }
//     }
// }
// // Дан список пользователей и структура, хранящая адреса пользователей.
// // Так же дана функция updateUserAddress,
// // которая обновляет указанное в параметрах поле в адресе пользователя.
// // Пример использования функции: updateUserAddress(2, "city", "Dnepropetrovsk")
// // Что надо написать вместо ххх, чтобы функция работала корректно?





// import React, {useState} from "react";

// type samuraiType = {
//     id: string
//     name: string
//     status: "online" | "offline"
// }
// type CourseNameType = "HTML"|"JS"|"React"|"Redux"|"HomeWorks"
// type CourseType = {
//     name: CourseNameType
//     mentor: string
//     isDone: boolean
// }
// type TechnologiesType = {
//     [userID: string]: Array<CourseType>
// }

// const samuraiID_1 = "64jf-87kg"
// const samuraiID_2 = "90lg-34ks"
// const samuraiID_3 = "12jm-05fd"

// export const samurai: Array<samuraiType> = [
//     {id: samuraiID_1, name: "Bob", status: "online"},
//     {id: samuraiID_2, name: "Alex", status: "offline"},
//     {id: samuraiID_3, name: "Ann", status: "offline"},
// ]

// export const technologies: TechnologiesType = {
//     [samuraiID_1]: [
//         {name: "HTML", mentor: "Svetlana", isDone: true},
//         {name: "JS", mentor: "Viktor", isDone: true},
//         {name: "React", mentor: "Dmitrij", isDone: false},
//         {name: "Redux", mentor: "Valera", isDone: false},
//         {name: "HomeWorks", mentor: "Ignat", isDone: true},
//     ],
//     [samuraiID_2]: [
//         {name: "HTML", mentor: "Svetlana", isDone: true},
//         {name: "JS", mentor: "Viktor", isDone: true},
//         {name: "React", mentor: "Dmitrij", isDone: true},
//         {name: "Redux", mentor: "Valera", isDone: false},
//         {name: "HomeWorks", mentor: "Ignat", isDone: true},
//     ],
//     [samuraiID_3]: [
//         {name: "HTML", mentor: "Svetlana", isDone: true},
//         {name: "JS", mentor: "Viktor", isDone: true},
//         {name: "React", mentor: "Dmitrij", isDone: false},
//         {name: "Redux", mentor: "Valera", isDone: false},
//         {name: "HomeWorks", mentor: "Ignat", isDone: false},
//     ],
// }

// export const updateCourseStatus = (samuraiID: string, name: CourseNameType, isDone: boolean) => {
//      return {...technologies,
//          [samuraiID]: technologies[samuraiID].map(c => c.name === name ? {...c, isDone} : c)
//     }
// }
// // Дан список самураев из инкубатора и структура, хранящая данные о курсах,
// // которые самурай уже прошёл, а так же о тех курсах, которые ему ещё предстоит пройти.
// // Так же дана функция updateCourseStatus,
// // которая позволяет отметить курс как пройденный самураем или снять такую отметку
// // Что надо написать вместо ххх, чтобы функция работала корректно?






// type StudentType = {
//     id: number
//     name: string
// }

// type FriendsType = {
//     [key: string]: Array<string>
// }

// export const students: Array<StudentType> = [
//     {id: 1, name: "Bob"},
//     {id: 2, name: "Alex"},
//     {id: 3, name: "Ann"},
//     {id: 4, name: "Charley"},
// ]

// export const friends: FriendsType = {
//     1: ["Oliver", "Jack", "Oscar",],
//     2: ["Jack", "Lewis", "Thomas",],
//     3: ["William", "Michael", "Lewis",],
//     4: ["Oscar", "James", "William",],
// }

// const getMutualFriends = (st_1: StudentType, st_2: StudentType,) => {
//     const result: Array<string> = []
//     friends[st_1.id].forEach(f => friends[xxx].includes(f)? result.push(f): null)
//     return result
// }

// //Дан массив студентов и структура,
// //которая содержит список друзей каждого из студентов.
// // Так же дана функция  getMutualFriends, проверяющая наличие общих друзей
// // у двух выбранных студентов.
// //Функция принимает параметром два объекта типа StudentType
// // и возвращает массив с именами общих друзей,
// //если они есть и пустой массив, если таковых нету.
// // Что надо написать вместо ххх, чтобы функция работала?







//888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
//888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
//888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
//888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
//888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
//888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888



// let result = 0

// for(let i = 0; i < 5; i++){
//     if(i % 2){
//         result += i
//     }
// }

// const studentName = (result - 4)
//     ? "Michail"
//     : "Elizaveta"

// /* Какое значение получит переменная studentName? */
// ///////////////////////////////////////////////////////////////////////////////////





// const name = "Ekaterina"

// const student = {
//     [name]: name
// }

// const number = student["name"]
//     ? 0.94
//     : 34.48

// /*Какое значение получит переменная number?*/




// type ActionType = {
//     type: "SUM" | "SUB" | "MULT" | "DIV" | "EXP"
//     payload: number
// }

// export const calculator = (state: number, action: ActionType): number => {
//     switch (action.type) {
//         case "SUM":
//             return state + action.payload
//         case "SUB":
//             return state - action.payload
//         case "DIV":
//             return state / action.payload
//         case "MULT":
//             return state * action.payload
//         case "EXP":
//             return state ** action.payload
//         default:
//             return state
//     }
// }
// const result = calculator(10, { type: 'EXP', payload: 0 })
// if (!(result - 1)) {
//     console.log("IT-INCUBATOR")
// }

// //Что надо написать вместо XXX чтобы в консоли появилась строка "IT-INCUBATOR"?




// type UserType = {
//     id: number
//     userName: string
//     email: string
//     password: string
// }

// type ChangeUserPasswordTypeAT = {
//     type: "CHANGE-USER-PASSWORD"
//     payload: {
//         id: number
//         newPassword: string
//     }
// }

// export const userReducer =
//     (state: UserType[], action: ChangeUserPasswordTypeAT): UserType[] => {
//         switch (action.type) {
//             case "CHANGE-USER-PASSWORD":
//                 return state.map(u =>
//                     u.id === action.payload.id
//                         ? { ...u, password: action.payload.newPassword }
//                         : u)
//             default:
//                 return state
//         }
//     }

// //Какой код должен быть написан вместо XXX и YYY в типе //ChangeUserPasswordTypeAT, что бы редьюсер работал?
// //В ответе напишите через пробел: XXX  YYY






// type ActionType = {
//     type: "SUM" | "SUB" | "MULT" | "DIV"
//     payload: number
// }

// export const calculator = (state: number, action: ActionType) => {
//     switch (action.type) {
//         case "SUM":
//             return state + action.payload
//         case "SUB":
//             return state - action.payload
//         case "DIV":
//             return state / action.payload
//         default:
//             return state
//     }
// }

// //Что надо написать вместо ХХХ, чтобы функция calculator работала?




// type ActionType = {
//     type: "SUM" | "SUB" | "MULT" | "DIV" | "EXP"
//     payload: number
// }

// export const calculator = (state: number, action: ActionType): number => {
//     switch (action.type) {
//         case "SUM":
//             return state + action.payload
//         case "SUB":
//             return state - action.payload
//         case "DIV":
//             return state / action.payload
//         case "EXP":
//             return state ** action.payload
//         default:
//             return state
//     }
// }

// console.log(calculator)
// //Что вернёт такой вызов функции: calculator(10, {type: "MULT", payload: 2})?




// const { beginning } = { beginning: 46 }

// const multiply = beginning * 89.73

// const randomValue = multiply && "Elena" && "Leo"

// /* Какое значение получит переменная randomValue ? */

// console.log(randomValue)




// type ActionType = {
//     type: "SUM" | "SUB" | "MULT" | "DIV"
//     payload: number
// }

// export const calculator = (state: number, action: ActionType): number => {
//     switch (action.type) {
//         case "SUM":
//             return state + action.payload
//         case "SUB":
//             return state - action.payload
//         case "DIV":
//             return state / action.payload
//         case "MULT":
//             return state * action.payload
//         default:
//             return state
//     }
// }

// const result = calculator(10, { type: 'SUB', payload: 5 })
// console.log(result)
// //Что надо написать вместо XXX, что бы переменная result содержала значение 5?




// const birth = {
//     name: "Vladimir",
//     scores: 54
// }

// const apartment = {
//     ... birth,  scores:  birth.scores++
// }


// const scores  = apartment.scores

// // Какое значение получит переменная scores?




//TOTAL2 TOTAL2 TOTAL2 TOTAL2 TOTAL2 TOTAL2 TOTAL2 TOTAL2 TOTAL2 TOTAL2 TOTAL2 TOTAL2 TOTAL2 TOTAL2 TOTAL2 TOTAL2 TOTAL2 TOTAL2 TOTAL2 TOTAL2 TOTAL2 TOTAL2 TOTAL2 TOTAL2 TOTAL2 TOTAL2 TOTAL2 TOTAL2
//TOTAL2 TOTAL2 TOTAL2 TOTAL2 TOTAL2 TOTAL2 TOTAL2 TOTAL2 TOTAL2 TOTAL2 TOTAL2 TOTAL2 TOTAL2 TOTAL2 TOTAL2 TOTAL2 TOTAL2 TOTAL2 TOTAL2 TOTAL2 TOTAL2 TOTAL2 TOTAL2 TOTAL2 TOTAL2 TOTAL2 TOTAL2 TOTAL2
//TOTAL2 TOTAL2 TOTAL2 TOTAL2 TOTAL2 TOTAL2 TOTAL2 TOTAL2 TOTAL2 TOTAL2 TOTAL2 TOTAL2 TOTAL2 TOTAL2 TOTAL2 TOTAL2 TOTAL2 TOTAL2 TOTAL2 TOTAL2 TOTAL2 TOTAL2 TOTAL2 TOTAL2 TOTAL2 TOTAL2 TOTAL2 TOTAL2
//TOTAL2 TOTAL2 TOTAL2 TOTAL2 TOTAL2 TOTAL2 TOTAL2 TOTAL2 TOTAL2 TOTAL2 TOTAL2 TOTAL2 TOTAL2 TOTAL2 TOTAL2 TOTAL2 TOTAL2 TOTAL2 TOTAL2 TOTAL2 TOTAL2 TOTAL2 TOTAL2 TOTAL2 TOTAL2 TOTAL2 TOTAL2 TOTAL2
//TOTAL2 TOTAL2 TOTAL2 TOTAL2 TOTAL2 TOTAL2 TOTAL2 TOTAL2 TOTAL2 TOTAL2 TOTAL2 TOTAL2 TOTAL2 TOTAL2 TOTAL2 TOTAL2 TOTAL2 TOTAL2 TOTAL2 TOTAL2 TOTAL2 TOTAL2 TOTAL2 TOTAL2 TOTAL2 TOTAL2 TOTAL2 TOTAL2
//TOTAL2 TOTAL2 TOTAL2 TOTAL2 TOTAL2 TOTAL2 TOTAL2 TOTAL2 TOTAL2 TOTAL2 TOTAL2 TOTAL2 TOTAL2 TOTAL2 TOTAL2 TOTAL2 TOTAL2 TOTAL2 TOTAL2 TOTAL2 TOTAL2 TOTAL2 TOTAL2 TOTAL2 TOTAL2 TOTAL2 TOTAL2 TOTAL2




// type StudentType = {
//     id: number
//     name: string
// }

// type FriendsType = {
//     [key: string]: Array<String>
// }

// export const students: Array<StudentType> = [
//     { id: 1, name: "Bob" },
//     { id: 2, name: "Alex" },
//     { id: 3, name: "Ann" },
//     { id: 4, name: "Charley" },
// ]

// export const friends: FriendsType = {
//     1: ["Oliver", "Jack", "Oscar",],
//     2: ["Jack", "Lewis", "Thomas",],
//     3: ["William", "Michael", "Lewis",],
//     4: ["Oscar", "James", "William",],
// }

// console.log(friends[students[0].id][3])

// //Дан список студентов и структура,
// //которая содержит список друзей каждого из студентов.
// //Id студента является ключом к массиву его друзей.
// //Какое значение лежит тут: friends[students[0].id][3]?





// import React, { useState } from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';

// function PasswordChecker() {
//     const [password, setPassword] = useState<string>("")
//     return (
//         <main>
//             <p>Your password must have more than 8 charters!</p>
//             <input
//                 placeholder={"Enter your password"}
//                 value={password}
//                 onChange={e => setPassword(e.currentTarget.value)}
//                 type={"password"}
//             />
//             {password.length < 9 && <p style={{ color: "red" }}>The password is too short!</p>}
//         </main>
//     )
// }

// ReactDOM.render(
//     <PasswordChecker />, document.getElementById('root')
// );

// // Что надо вставить вместо XXX, чтобы код работал нормально?






// type ActionType = {
//     type: "SUM" | "SUB" | "MULT" | "DIV" | "EXP"
//     payload: number
// }

// export const calculator = (state: number, action: ActionType): number => {
//     switch (action.type) {
//         case "SUM":
//             return state + action.payload
//         case "SUB":
//             return state - action.payload
//         case "DIV":
//             return state / action.payload
//         case "MULT":
//             return state * action.payload
//         case "EXP":
//             return state ** action.payload
//         default:
//             return state
//     }
// }
// const result = calculator(10, { type: 'EXP', payload: 0 })
// if (!(result - 1)) {
//     console.log("IT-INCUBATOR")
// }

// //Что надо написать вместо XXX чтобы в консоли появилась строка "IT-INCUBATOR"?





// type ActionType = {
//     type: "SUM" | "SUB" | "MULT" | "DIV"
//     payload: number
// }

// export const calculator = (state: number, action: ActionType): number => {
//     switch (action.type) {
//         case "SUM":
//             return state + action.payload
//         case "SUB":
//             return state - action.payload
//         case "DIV":
//             return state / action.payload
//         case "MULT":
//             return state * action.payload
//         default:
//             return state
//     }
// }

// const result = calculator(10, { type: 'SUB', payload: 5 })
// console.log(result)
// //Что надо написать вместо XXX, что бы переменная result содержала значение 5?





// import React, { useState } from "react";

// type UserType = {
//     id: number
//     name: string
//     status: "online" | "offline"
// }

// type AddressType = {
//     country: string
//     city: string
//     email: string
// }

// type AdressesType = {
//     [userID: string]: AddressType
// }

// const users: Array<UserType> = [
//     { id: 1, name: "Bob", status: "online" },
//     { id: 2, name: "Alex", status: "offline" },
//     { id: 3, name: "Ann", status: "offline" },
// ]

// const addresses: AdressesType = {
//     1: { country: "Russia", city: "Moscow", email: "hey@email.com" },
//     2: { country: "Ukraine", city: "Kiev", email: "yo@send.ua" },
//     3: { country: "Belarus", city: "Minsk", email: "wow@gogo.ru" },

// }

// const updateUserAddress = (userID: number, key: string, newValue: string) => {
//     return {
//         ...addresses,
//         [userID]: { ...addresses[userID], [key]: newValue }
//     }
// }
// console.log(updateUserAddress(1, 'd', 'd'))
// // Дан список пользователей и структура, хранящая адреса пользователей.
// // Так же дана функция updateUserAddress,
// // которая обновляет указанное в параметрах поле в адресе пользователя.
// // Пример использования функции: updateUserAddress(2, "city", "Dnepropetrovsk")
// // Что надо написать вместо ххх, чтобы функция работала корректно?





// type UserType = {
//     id: number
//     userName: string
//     email: string
//     password: string
// }

// type ChangeUserPasswordTypeAT = {
//     type: "CHANGE-USER-PASSWORD"
//     payload: {
//         id: number
//         newPassword: string

//     }
// }

// export const userReducer =
//     (state: UserType[], action: ChangeUserPasswordTypeAT): UserType[] => {
//         switch (action.type) {
//             case "CHANGE-USER-PASSWORD":
//                 return state.map(u =>
//                     u.id === action.payload.id
//                         ? { ...u, password: action.payload.newPassword }
//                         : u)
//             default:
//                 return state
//         }
//     }

// //Какой код должен быть написан вместо XXX и YYY в типе //ChangeUserPasswordTypeAT, что бы редьюсер работал?
// //В ответе напишите через пробел: XXX  YYY




// type StudentType = {
//     id: number
//     name: string
// }

// type FriendsType = {
//     [key: string]: Array<string>
// }

// export const students: Array<StudentType> = [
//     { id: 1, name: "Bob" },
//     { id: 2, name: "Alex" },
//     { id: 3, name: "Ann" },
//     { id: 4, name: "Charley" },
// ]

// export const friends: FriendsType = {
//     1: ["Oliver", "Jack", "Oscar",],
//     2: ["Jack", "Lewis", "Thomas",],
//     3: ["William", "Michael", "Lewis",],
//     4: ["Oscar", "James", "William",],
// }

// //Дан список студентов и структура,
// //которая содержит список друзей каждого из студентов.
// //Id студента является ключом к массиву его друзей.
// //Какое значение лежит тут:
// console.log(friends[3][1])




// import React, { useState, MouseEvent } from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';

// function ColorButton() {
//     const [isColored, setIsColored] = useState<boolean>(false)
//     return (
//         <button
//             style={{ backgroundColor: `${isColored === true ? "red" : ""}` }}
//             onClick={() => setIsColored(true)}
//         >
//             Меняю цвет по клику
//         </button>
//     )
// }


// ReactDOM.render(
//     <ColorButton />, document.getElementById('root')
// );

// // Что надо написать вместо XXX, чтобы при клике кнопка становилась красной?





// import React, { useState } from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';

// function UsersList() {
//     const [users, setUsers] = useState<Array<string>>(["Bob", "Alex", "Ann"])
//     const getUser = (user: string, i: number) => <li key={i}>{user}</li>

//     const usersList = (users.length === 0)
//         ? <p>List is empty</p>
//         : <ul>
//             {users.map(getUser)}
//         </ul>

//     return (
//         <main>
//             <button onClick={() => setUsers([])}>Clear list</button>
//             <h4>User list:</h4>
//             {usersList}
//         </main>
//     )
// }

// ReactDOM.render(
//     <UsersList />, document.getElementById('root')
// );
// // Что надо вставить вместо XXX, чтобы код корректно работал  со списком пользователей?





// type StudentType = {
//     id: number
//     name: string
// }

// type FriendsType = {
//     [key: string]: Array<string>
// }

// export const students: Array<StudentType> = [
//     { id: 1, name: "Bob" },
//     { id: 2, name: "Alex" },
//     { id: 3, name: "Ann" },
//     { id: 4, name: "Charley" },
// ]

// export const friends: FriendsType = {
//     1: ["Oliver", "Jack", "Oscar",],
//     2: ["Jack", "Lewis", "Thomas",],
//     3: ["William", "Michael", "Lewis",],
//     4: ["Oscar", "James", "William",],
// }

// const getMutualFriends = (st_1: StudentType, st_2: StudentType,) => {
//     const result: Array<string> = []
//     friends[st_1.id].forEach(f => friends[st_2.id].includes(f) ? result.push(f) : null)
//     return result
// }

// //Дан массив студентов и структура,
// //которая содержит список друзей каждого из студентов.
// // Так же дана функция  getMutualFriends, проверяющая наличие общих друзей
// // у двух выбранных студентов.
// //Функция принимает параметром два объекта типа StudentType
// // и возвращает массив с именами общих друзей,
// //если они есть и пустой массив, если таковых нету.
// // Что надо написать вместо ххх, чтобы функция работала?





//9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
//9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
//9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
//9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
//9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
//9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999





// export const reducer = (state: any, action: any) => {
//     switch (action.type) {
//         case 'TRACK-DELETED':
//             return state.filter((track: any) => track.id !== action.trackId)
//         default:
//             return state
//     }
// }

// const deleteTrackAC = (trackId: number) => ({ type: 'TRACK-DELETED', trackId })


// const state = [
//     { id: 12, likesCount: 10 },
//     { id: 14, likesCount: 2 },
//     { id: 100, likesCount: 0 }
// ]
// const newState = reducer(state, deleteTrackAC(14))

// console.log(newState.length === 2)


// // Что нужно написать вместо XXX, чтобы корректно удалить трек и в консоли увидеть true?





// type StateType = {
//     volume: number // in percents
//     trackUrl: string // 'https://blabla.com/track01.mp3',
//     currentPlayPosition: number // milliseconds,
// }

// export const reducer = (state: StateType, action: any) => {
//     switch (action.type) {
//         case 'TRACK-URL-CHANGED':
//             return {
//                 ...state,
//                 trackUrl: action.url
//             }
//         case 'TRACK-MUTED':
//             return {
//                 ...state,
//                 volume: 0
//             }
//         case 'TRACK-REWOUND-TO-START':
//             return {
//                 ...state,
//                 currentPlayPosition: 0
//             }
//         default:
//             return state
//     }
// }

// const muteTrackAC = () => ({ type: 'TRACK-MUTED' })
// const changeTrackAC = (url: string) => ({ type: 'TRACK-URL-CHANGED', url })
// // перемотатьНаНачало:
// const rewindToStart = () => ({ type: 'TRACK-REWOUND-TO-START' })

// // Какие типы должны быть вместо XXX, YYY и ZZZ?
// // Ответ дать через пробел, например:   'BLABLA' 'HEYНЕY' 'HIPHOP'




// type Status = 'Stopped' | 'Playing' | 'Paused'
// type StateType = {
//     volume: number // in percents
//     trackUrl: string // 'https://blabla.com/track01.mp3',
//     currentPlayPosition: number // milliseconds,
//     status: Status
// }

// export const playerReducer = (state: StateType, action: any) => {
//     switch (action.type) {
//         case 'TRACK-URL-CHANGED':
//             return {
//                 ...state,
//                 trackUrl: action.url
//             }
//         default:
//             return state
//     }
// }

// const muteTrackAC = () => ({ type: 'TRACK-MUTED' })
// const changeTrackAC = (url: string) => ({ type: 'TRACK-URL-CHANGED', url })
// const changeTrackPlayStatusAC = (status: Status) => ({ type: 'TRACK-STATUS-CHANGED', status })

// //Какой тип должен быть вместо XXX?



// export const reducer = (state: any, action: any) => {
//     switch (action.type) {
//         case 'TRACK-LIKED':
//             return {
//                 ...state,
//                 [action.trackId]: {
//                     ...state[action.trackId],
//                     likesCount: state[action.trackId].likesCount + 1
//                 }
//             }
//         default:
//             return state
//     }
// }

// const likeTrackAC = (trackId: number) => ({ type: 'TRACK-LIKED', trackId })


// const state = {
//     12: { id: 12, likesCount: 10 },
//     14: { id: 14, likesCount: 2 },
//     100: { id: 100, likesCount: 0 },
// }
// const newState = reducer(state, likeTrackAC(14))

// console.log(newState[14].likesCount === 3)

// // Что нужно написать вместо XXX, чтобы в консоли увидеть true?
// // ❗ Захардкодженные значения использовать запрещено



// export const reducer = (state: any, action: any) => {
//     switch (action.type) {
//         case 'TRACK-ADDED':
//             return [...state, { id: action.trackId, likesCount: 0 }]
//         default:
//             return state
//     }
// }

// const addTrackAC = (trackId: number) => ({ type: 'TRACK-ADDED', trackId })


// const state = [
//     { id: 12, likesCount: 10 },
//     { id: 14, likesCount: 2 },
//     { id: 100, likesCount: 0 }
// ]
// const newState = reducer(state, addTrackAC(300))

// console.log(newState[3].likesCount === 0)
// console.log(newState)

// // Что нужно написать вместо XXX, чтобы трек корректно добавился и в консоли увидеть true?



// // //@ts-ignore
// const value = [0,[1,0]][1][0]
// let quantity;

// switch (value) {
//     case 0:
//         quantity = 59
//         break;
//     case 1:
//         quantity = 89
//         break;
//     default:
//         quantity = 26
//         break;
// }

// // Какое значение получит переменная quantity?



// type Status = 'Stopped' | 'Playing' | 'Paused'
// type StateType = {
//     volume: number // in percents
//     trackUrl: string // 'https://blabla.com/track01.mp3',
//     currentPlayPosition: number // milliseconds,
//     status: Status
// }
// export const playerReducer = (state: StateType, action: any) => {
//     switch (action.type) {
//         case 'TRACK-VOLUME-CHANGED':
//             return {
//                 ...state,
//                 volume: action.volumeLevel
//             }
//         default:
//             return state
//     }
// }

// const muteTrackAC = () => ({ type: 'TRACK-MUTED' })
// const changeVolumeAC = (volumeLevel: number) => ({ type: 'TRACK-VOLUME-CHANGED', volumeLevel })
// const changeTrackAC = (url: string) => ({ type: 'TRACK-URL-CHANGED', url })
// const changeTrackPlayStatusAC = (status: Status) => ({ type: 'TRACK-STATUS-CHANGED', status })

// const state: StateType = {
//     status: 'Stopped',
//     currentPlayPosition: 1213,
//     trackUrl: 'https://blabla.com/track01.mp3',
//     volume: 100
// }
// const newState = playerReducer(state, changeVolumeAC(20))
// console.log(newState.volume === 20)

// // Напишите вместо XXX правильную строку кода, чтобы изменить громкость трека и увидеть в консоли true.



// type Status = 'Stopped' | 'Playing' | 'Paused'
// type StateType = {
//     volume: number // in percents
//     trackUrl: string // 'https://blabla.com/track01.mp3',
//     currentPlayPosition: number // milliseconds,
//     status: Status
// }
// export const playerReducer = (state: StateType, action: any) => {
//     switch (action.type) {
//         case 'TRACK-STATUS-CHANGED':
//             return {
//                 ...state,
//                 status: action.status
//             }
//         default:
//             return state
//     }
// }

// const muteTrackAC = () => ({ type: 'TRACK-MUTED' })
// const changeTrackAC = (url: string) => ({ type: 'TRACK-URL-CHANGED', url })
// const changeTrackPlayStatusAC = (status: Status) => ({ type: 'TRACK-STATUS-CHANGED', status })

// const state: StateType = {
//     status: 'Stopped',
//     currentPlayPosition: 1213,
//     trackUrl: 'https://blabla.com/track01.mp3',
//     volume: 100
// }

// const newState = playerReducer(state, changeTrackPlayStatusAC('Paused'))
// console.log(newState.status === 'Paused')

// //Напишите вместо XXX правильный вызов правильного AC, чтобы в консоли было true



// const array = [1,2,3,4,5]
// const result = array.push(6) - array.pop()

// const bestStudent = result
//     ? "Masha"
//     : "Vanya"

// //Какое значение получит переменная bestStudent?





//10 10 10 10 10 10 10 10 10 10 10 10 10 10 10 10 10 10 10 10 10 10 10 10 10 10 10 10 10 10 10 10 10 10 10 10 10 10 10 10 10 10 10 10
//10 10 10 10 10 10 10 10 10 10 10 10 10 10 10 10 10 10 10 10 10 10 10 10 10 10 10 10 10 10 10 10 10 10 10 10 10 10 10 10 10 10 10 10
//10 10 10 10 10 10 10 10 10 10 10 10 10 10 10 10 10 10 10 10 10 10 10 10 10 10 10 10 10 10 10 10 10 10 10 10 10 10 10 10 10 10 10 10
//10 10 10 10 10 10 10 10 10 10 10 10 10 10 10 10 10 10 10 10 10 10 10 10 10 10 10 10 10 10 10 10 10 10 10 10 10 10 10 10 10 10 10 10
//10 10 10 10 10 10 10 10 10 10 10 10 10 10 10 10 10 10 10 10 10 10 10 10 10 10 10 10 10 10 10 10 10 10 10 10 10 10 10 10 10 10 10 10
//10 10 10 10 10 10 10 10 10 10 10 10 10 10 10 10 10 10 10 10 10 10 10 10 10 10 10 10 10 10 10 10 10 10 10 10 10 10 10 10 10 10 10 10

// let number = 17

// if (number > 0) {
//     let number = 60
//     number++
// }

// const getNumber = (number: any) => {
//     number = number * 10
//     return number
// }

// const bigValue = getNumber("number") || number
// console.log(bigValue)

// //Какое значение получит переменная bigValue?



// import React from 'react'
// import { legacy_createStore } from 'redux'
// import { Provider, useSelector, useDispatch } from 'react-redux'
// import ReactDOM from 'react-dom'

// type StudentType = {
//     id: number
//     name: string
//     age: number
// }

// const initState = {
//     students:
//         [
//             { id: 1, name: 'Bob', age: 23 },
//             { id: 2, name: 'Alex', age: 22 }
//         ] as Array<StudentType>
// }
// type AddStudentAT = {
//     type: 'ADD-STUDENT'
//     name: string
//     age: number
//     id: number
// }

// type InitialStateType = typeof initState

// const studentsReducer = (state: InitialStateType = initState, action: AddStudentAT): InitialStateType => {
//     switch (action.type) {
//         case 'ADD-STUDENT':
//             return {
//                 ...state,
//                 students: [...state.students, {
//                     name: action.name,
//                     age: action.age,
//                     id: action.id
//                 }]
//             }
//     }
//     return state
// }

// const appStore = legacy_createStore(studentsReducer)
// type RootStateType = ReturnType<typeof studentsReducer>


// const StudentList = () => {
//     const students = useSelector((state: RootStateType) => state.students)
//     return (
//         <ul>
//             {students.map(s => <li key={s.id}>{`${s.name}. ${s.age} years.`}</li>)}
//         </ul>
//     )
// }
// const App = () => {
//     return <StudentList />
// }

// ReactDOM.render(<div>
//     <Provider store={appStore}>
//         <App />
//     </Provider>
// </div>,
//     document.getElementById('root')
// )

// Что нужно написать вместо XXX, YYY и ZZZ, чтобы отобразился список студентов?





// const myFunction = (a: number, b = 3) => a + b;

// const result = myFunction(346, undefined) % 2

// const winner = result ? "Artur" : "Maxim"

//Какое значение получит переменная winner?





// import ReactDOM from 'react-dom'
// import { Provider, useSelector } from 'react-redux'
// import { combineReducers, legacy_createStore } from 'redux'

// let initialState = {
//     items:
//         [
//             { id: 1, name: 'Dimych' },
//             { id: 2, name: 'Ignat' }
//         ]
// }
// const usersReducer = (state = initialState, action: any) => {
//     return state
// }



// let authInitialState = { login: 'Margo', settings: { theme: 'dark' } }
// const authReducer = (state = authInitialState, action: any) => {
//     return state
// }



// let rootReducer = combineReducers({
//     users: usersReducer,
//     auth: authReducer
// })
// const store = legacy_createStore(rootReducer)
// type RootStateType = ReturnType<typeof rootReducer>



// const selector = (state: RootStateType) => state.users.items

// const Users = () => {

//     const users = useSelector<RootStateType, { id: number, name: string }[]>(selector)

//     return <ul>
//         {users.map(u => <li key={u.id}>{u.name}</li>)}
//     </ul>
// }

// ReactDOM.render(<div>
//     <Provider store={store}>
//         <Users />
//     </Provider>
// </div>,
//     document.getElementById('root')
// )

// // Что нужно написать вместо XXX, чтобы отрендерить список юзеров?
// // ❗ Ответ дать минимально возможным объёмом кода




// import React, { useState, useReducer, useEffect } from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';

// const changeCounter = (state: number, action: any): number => {
//     switch (action.type) {
//         case "INC_VALUE":
//             return state + 1
//         case "RESET":
//             return 0
//         case "DEC_VALUE":
//             return state - 1
//         default:
//             return state
//     }
// }

// function Counter() {
//     const [value, setValue] = useReducer(changeCounter, 0)
//     const [isCounter, setIsCounter] = useState(true)
//     const commonStyles: React.CSSProperties = {
//         border: "1px solid black",
//         margin: "100px auto",
//         width: "300px",
//         height: "150px",
//         textAlign: "center",
//     }
//     const btnStyles: React.CSSProperties = {
//         color: "white",
//         fontWeight: "bold",
//         backgroundColor: "darkgray",
//         borderRadius: "3px",
//         minWidth: "40px"
//     }

//     return (
//         <div style={commonStyles}>{
//             isCounter
//                 ? <div >
//                     <div style={{ marginBottom: "20px" }}>
//                         <h2>{value}</h2>
//                         <button
//                             style={{ ...btnStyles, backgroundColor: "red" }}
//                             onClick={() => setIsCounter(false)}>OFF</button>
//                     </div>
//                     <button style={btnStyles} onClick={() => setValue({ type: "INC_VALUE" })}>+</button>
//                     <button style={btnStyles} onClick={() => setValue({ type: "RESET" })}>0</button>
//                     <button style={btnStyles} onClick={() => setValue({ type: "DEC_VALUE" })}>-</button>

//                 </div>
//                 : <div style={{ textAlign: "center" }}>
//                     <h2>Counter not working</h2>
//                     <button
//                         style={{ ...btnStyles, backgroundColor: "green" }}
//                         onClick={() => setIsCounter(true)}>ON</button>
//                 </div>
//         }
//         </div>
//     )
// }


// ReactDOM.render(
//     <Counter />, document.getElementById('root')
// );
// // Что надо написать вместо XXX и YYY, чтобы код работал? Напишите через пробел.





// import { useSelector } from 'react-redux'
// import { combineReducers, legacy_createStore } from 'redux'

// let initialState = { items: [{ name: 'Dimych' }, { name: 'Ignat' }] }
// const usersReducer = (state = initialState, action: any) => {
//     return state
// }

// const store = legacy_createStore(combineReducers({
//     users: usersReducer
// }))

// store.subscribe(() => {
//     const state = useSelector(state => state)
//     console.log(state)
// })

// store.dispatch({ type: 'ANY' })

// //Что нужно написать вместо XXX, чтобы получить актуальный стейт?



// import { combineReducers, legacy_createStore } from 'redux'

// let initialState = { items: [{ name: 'Dimych' }, { name: 'Ignat' }] }
// const usersReducer = (state = initialState, action: any) => {
//     return state
// }

// const store = legacy_createStore(combineReducers({
//     users: usersReducer
// }))

// store.getState().users.items.map(() => {
//     console.log('state changed')
// })

// store.dispatch({ type: 'ANY' })

// // Что нужно написать вместо XXX, чтобы в консоли увидеть 'state changed'?





// import ReactDOM from 'react-dom'
// import { Provider, useDispatch, useSelector } from 'react-redux'
// import { createStore } from 'redux'

// const students = {
//     students: [
//         { id: 1, name: 'Bob' },
//         { id: 2, name: 'Alex' },
//         { id: 3, name: 'Donald' },
//         { id: 4, name: 'Ann' },
//     ]
// }
// type RemoveStudentAT = {
//     type: "REMOVE-STUDENT"
//     id: number
// }
// const RemoveStudentAC = (id: number): RemoveStudentAT => ({
//     type: "REMOVE-STUDENT",
//     id
// })

// const studentsReducer = (state = students, action: RemoveStudentAT) => {
//     switch (action.type) {
//         case "REMOVE-STUDENT":
//             return {
//                 ...state,
//                 students: state.students.filter(s => s.id !== action.id)
//             }
//     }
//     return state
// }

// const store = createStore(studentsReducer)
// type RootStateType = ReturnType<typeof studentsReducer>


// const StudentList = () => {
//     const listItemStyles = {
//         width: "100px",
//         borderBottom: "1px solid gray",
//         cursor: "pointer",
//     }
//     const students = useSelector((state: RootStateType) => state.students)
//     const dispatch = useDispatch()
//     const studentsList = students.map(s => {
//         const removeStudent = () => {
//             dispatch(RemoveStudentAC(s.id))
//         }
//         return (
//             <li key={s.id}
//                 style={listItemStyles}
//                 onClick={removeStudent}>
//                 {s.name}
//             </li>)
//     })
//     return (
//         <ol>
//             {studentsList}
//         </ol>

//     )
// }


// ReactDOM.render(<div>
//     <Provider store={store}>
//         <StudentList />
//     </Provider>
// </div>,
//     document.getElementById('root')
// )

// // Что нужно написать вместо XXX, YYY и ZZZ, чтобы при клике по имени студент
// // удалялся из списка? Напишите через пробел.








// import { useSelector } from 'react-redux'
// import { combineReducers, legacy_createStore } from 'redux'

// let initialState = { items: [{ name: 'Dimych' }, { name: 'Ignat' }] }
// const usersReducer = (state = initialState, action: any) => {
//     return state
// }

// const store = legacy_createStore(combineReducers({
//     users: usersReducer
// }))

// store.subscribe(() => {
//     const state = store.getState()
//     console.log(state)
// })

// store.dispatch({ type: 'ANY' })

// //Что нужно написать вместо XXX, чтобы получить актуальный стейт?





// import { combineReducers, createStore } from 'redux'

// let initialState = { items: [{ name: 'Dimych' }, { name: 'Ignat' }] }
// const usersReducer = (state = initialState, action: any) => {
//     return state
// }

// const store = createStore(combineReducers({
//     users: usersReducer
// }))

// store.getState().users.items.map(() => {
//     console.log('state changed')
// })

// store.dispatch({ type: 'ANY' })

// // Что нужно написать вместо XXX, чтобы в консоли увидеть 'state changed'?




// import React, { useState, useReducer, useEffect } from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';

// const changeCounter = (state: number, action: any): number => {
//     switch (action.type) {
//         case "INC_VALUE":
//             return state + 1
//         case "RESET":
//             return 0
//         case "DEC_VALUE":
//             return state - 1
//         default:
//             return state
//     }
// }

// function Counter() {
//     const [value, setValue] = useReducer(changeCounter, 0)
//     const [isCounter, setIsCounter] = useState(true)
//     const commonStyles: React.CSSProperties = {
//         border: "1px solid black",
//         margin: "100px auto",
//         width: "300px",
//         height: "150px",
//         textAlign: "center",
//     }
//     const btnStyles: React.CSSProperties = {
//         color: "white",
//         fontWeight: "bold",
//         backgroundColor: "darkgray",
//         borderRadius: "3px",
//         minWidth: "40px"
//     }

//     return (
//         <div style={commonStyles}>{
//             isCounter
//                 ? <div >
//                     <div style={{ marginBottom: "20px" }}>
//                         <h2>{value}</h2>
//                         <button
//                             style={{ ...btnStyles, backgroundColor: "red" }}
//                             onClick={() => setIsCounter(false)}>OFF</button>
//                     </div>
//                     <button style={btnStyles} onClick={() => setValue({ type: "INC_VALUE" })}>+</button>
//                     <button style={btnStyles} onClick={() => setValue({ type: "RESET" })}>0</button>
//                     <button style={btnStyles} onClick={() => setValue({ type: "DEC_VALUE" })}>-</button>

//                 </div>
//                 : <div style={{ textAlign: "center" }}>
//                     <h2>Counter not working</h2>
//                     <button
//                         style={{ ...btnStyles, backgroundColor: "green" }}
//                         onClick={() => setIsCounter(true)}>ON</button>
//                 </div>
//         }
//         </div>
//     )
// }


// ReactDOM.render(
//     <Counter />, document.getElementById('root')
// );
// // Что надо написать вместо XXX и YYY, чтобы код работал? Напишите через пробел.



// import { combineReducers, createStore } from 'redux'
// import ReactDOM from 'react-dom'
// import { Provider, useSelector } from 'react-redux'
// import React from 'react'

// let initialState = {
//     items:
//         [
//             { id: 1, name: 'Dimych' },
//             { id: 2, name: 'Ignat' }
//         ]
// }
// const usersReducer = (state = initialState, action: any) => {
//     return state
// }

// let authInitialState = { login: 'Margo', settings: { theme: 'dark' } }
// const authReducer = (state = authInitialState, action: any) => {
//     return state
// }

// let rootReducer = combineReducers({
//     users: usersReducer,
//     auth: authReducer
// })

// const store = createStore(rootReducer)
// type RootStateType = ReturnType<typeof rootReducer>

// const selector = (state: RootStateType) => state.users.items

// const Users = () => {

//     const users = useSelector(selector)

//     return <ul>
//         {users.map(u => <li key={u.id}>{u.name}</li>)}
//     </ul>
// }

// ReactDOM.render(<div>
//     <Provider store={store}>
//         <Users />
//     </Provider>
// </div>,
//     document.getElementById('root')
// )

// // Что нужно написать вместо XXX, чтобы отрендерить список юзеров?
// // ❗ Ответ дать минимально возможным объёмом кода





// const myFunction = (a: number, b = 3) => a + b;

// const result = myFunction(346, undefined) % 2

// const winner = result ? "Elizaveta" : "William"

// //Какое значение получит переменная winner?



// import React from 'react'
// import { createStore } from 'redux'
// import { Provider, useSelector, useDispatch } from 'react-redux'
// import ReactDOM from 'react-dom'

// type StudentType = {
//     id: number
//     name: string
//     age: number
// }

// const initState = {
//     students:
//         [
//             { id: 1, name: 'Bob', age: 23 },
//             { id: 2, name: 'Alex', age: 22 }
//         ] as Array<StudentType>
// }
// type AddStudentAT = {
//     type: 'ADD-STUDENT'
//     name: string
//     age: number
//     id: number
// }

// type InitialStateType = typeof initState

// const studentsReducer = (state: InitialStateType = initState, action: AddStudentAT): InitialStateType => {
//     switch (action.type) {
//         case 'ADD-STUDENT':
//             return {
//                 ...state,
//                 students: [...state.students, {
//                     name: action.name,
//                     age: action.age,
//                     id: action.id
//                 }]
//             }
//     }
//     return state
// }

// const appStore = createStore(studentsReducer)
// type RootStateType = ReturnType<typeof studentsReducer>


// const StudentList = () => {
//     const students = useSelector((state: RootStateType) => state.students)
//     return (
//         <ul>
//             {students.map(s => <li key={s.id}>{`${s.name}. ${s.age} years.`}</li>)}
//         </ul>
//     )
// }
// const App = () => {
//     return <StudentList />
// }

// ReactDOM.render(<div>
//     <Provider store={appStore}>
//         <App />
//     </Provider>
// </div>,
//     document.getElementById('root')
// )

// Что нужно написать вместо XXX, YYY и ZZZ, чтобы отобразился список студентов?




// import { createStore } from 'redux'
// import ReactDOM from 'react-dom'
// import { Provider, useSelector, useDispatch } from 'react-redux'
// import React from 'react'

// const students = {
//     students: [
//         { id: 1, name: 'Bob' },
//         { id: 2, name: 'Alex' },
//         { id: 3, name: 'Donald' },
//         { id: 4, name: 'Ann' },
//     ]
// }
// type RemoveStudentAT = {
//     type: "REMOVE-STUDENT"
//     id: number
// }
// const RemoveStudentAC = (id: number): RemoveStudentAT => ({
//     type: "REMOVE-STUDENT",
//     id
// })

// const studentsReducer = (state = students, action: RemoveStudentAT) => {
//     switch (action.type) {
//         case "REMOVE-STUDENT":
//             return {
//                 ...state,
//                 students: state.students.filter(s => s.id !== action.id)
//             }
//     }
//     return state
// }

// const store = createStore(studentsReducer)
// type RootStateType = ReturnType<typeof studentsReducer>


// const StudentList = () => {
//     const listItemStyles = {
//         width: "100px",
//         borderBottom: "1px solid gray",
//         cursor: "pointer",
//     }
//     const students = useSelector((state: RootStateType) => state.students)
//     const dispatch = useDispatch()
//     const studentsList = students.map(s => {
//         const removeStudent = () => {
//             dispatch(RemoveStudentAC(s.id))
//         }
//         return (
//             <li key={s.id}
//                 style={listItemStyles}
//                 onClick={removeStudent}>
//                 {s.name}
//             </li>)
//     })
//     return (
//         <ol>
//             {studentsList}
//         </ol>

//     )
// }


// ReactDOM.render(<div>
//     <Provider store={store}>
//         <StudentList />
//     </Provider>
// </div>,
//     document.getElementById('root')
// )

// // Что нужно написать вместо XXX, YYY и ZZZ, чтобы при клике по имени студент
// // удалялся из списка? Напишите через пробел.




// let number = 12

// if (number > 0) {
//     let number = 84
//     number++
// }

// const getNumber = (number: any) => {
//     number *= 10
//     return number
// }

// const bigValue= getNumber("number") || number

// //Какое значение получит переменная bigValue?




//11 11 11 11 11 11 11 11 11 11 11 11 11 11 11 11 11 11 11 11 11 11 11 11 11 11 11 11  11 11 11 11 11 11 11 11 11 11 11 11 11 11 11 11 11 11 11 11 11 11 11 11 11 11 11 11
//11 11 11 11 11 11 11 11 11 11 11 11 11 11 11 11 11 11 11 11 11 11 11 11 11 11 11 11  11 11 11 11 11 11 11 11 11 11 11 11 11 11 11 11 11 11 11 11 11 11 11 11 11 11 11 11
//11 11 11 11 11 11 11 11 11 11 11 11 11 11 11 11 11 11 11 11 11 11 11 11 11 11 11 11  11 11 11 11 11 11 11 11 11 11 11 11 11 11 11 11 11 11 11 11 11 11 11 11 11 11 11 11
//11 11 11 11 11 11 11 11 11 11 11 11 11 11 11 11 11 11 11 11 11 11 11 11 11 11 11 11  11 11 11 11 11 11 11 11 11 11 11 11 11 11 11 11 11 11 11 11 11 11 11 11 11 11 11 11
//11 11 11 11 11 11 11 11 11 11 11 11 11 11 11 11 11 11 11 11 11 11 11 11 11 11 11 11  11 11 11 11 11 11 11 11 11 11 11 11 11 11 11 11 11 11 11 11 11 11 11 11 11 11 11 11
//11 11 11 11 11 11 11 11 11 11 11 11 11 11 11 11 11 11 11 11 11 11 11 11 11 11 11 11  11 11 11 11 11 11 11 11 11 11 11 11 11 11 11 11 11 11 11 11 11 11 11 11 11 11 11 11

// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import reportWebVitals from './reportWebVitals';
// import { memo, useCallback, useState } from "react"

// export const App = () => {
//     const [temp, setTemp] = useState(100)
//     const [seconds, setSeconds] = useState(0)

//     const resetTemp = useCallback(() => setTemp(0), [])

//     const incSec = () => setSeconds(state => state + 1)

//     return <>
//         <TempDisplay temp={temp} resetTemp={resetTemp} />
//         <SecDisplay seconds={seconds} incSec={incSec} />
//     </>
// }
// const TempDisplay = memo((props: any) => {
//     console.log('Render TempDisplay')
//     return (
//         <div style={{ marginBottom: '10px' }} onClick={props.reset}>
//             <p>
//                 <b>Температура: </b>{props.temp} &#176;
//             </p>
//             <button onClick={props.resetTemp}>Сбросить температуру к 0</button>
//         </div>
//     )
// })

// const SecDisplay = memo((props: any) => {
//     console.log('Render SecDisplay')
//     return (
//         <div>
//             <p><b>Секунды:</b> {props.seconds} c </p>
//             <button style={{ marginRight: '20px' }}
//                 onClick={props.incSec}>
//                 Увеличить время на 1 секунду
//             </button>
//         </div>
//     )
// })

// const root = ReactDOM.createRoot(
//     document.getElementById('root') as HTMLElement
// );
// root.render(
//     <React.StrictMode>
//         <App />
//     </React.StrictMode>
// );
// reportWebVitals();

// // Почему не корректно работает счетчик времени при нажатии на кнопку (срабатывает только 1 раз) ?
// // Найдите в чем причина.
// // Исправленную версию строки напишите в качестве ответа

// // Пример ответа: const incSec = () => setSeconds(seconds + 1)




// import React, { useCallback, useState } from 'react'
// import ReactDOM from 'react-dom'

// export const TempManager = () => {
//     const [temp, setTemp] = useState(0)
//     const [seconds, setSeconds] = useState(0)

//     const resetTemp = useCallback(() => setTemp(0), [temp])
//     const increaseSeconds = useCallback(() => setSeconds((prevSeconds) => prevSeconds + 100), []);

//     return (
//         <>
//             <TempDisplay temp={temp} reset={resetTemp} />
//             <div>
//                 <p><b>Секунды:</b> {seconds} с</p>
//                 <button onClick={increaseSeconds}>
//                     Увеличить время на 100 секунд
//                 </button>
//             </div>
//         </>
//     )
// }

// const TempDisplay = React.memo((props: any) => {
//     console.log('Render TempDisplay')
//     return (
//         <div>
//             <p><b>Температура</b>: {props.temp} &#176;</p>
//             <button onClick={props.reset}>Reset</button>
//         </div>
//     )
// })

// ReactDOM.render(<TempManager />, document.getElementById('root'))


// //При увеличении времени (при клике на button) компонент TempDisplay
// //тоже перерисовывается. Эта перерисовка является избыточной.
// //Найдите в чем причина лишних перерисовок.
// //Исправленную версию строки напишите в качестве ответа.

// //Пример ответа: const increaseSeconds = () => setSeconds(seconds + 100)





// import React, { useCallback, useState } from 'react'
// import ReactDOM from 'react-dom'

// export const App = () => {
//     const [temp, setTemp] = useState(10)
//     const [seconds, setSeconds] = useState(100)

//     const increaseSeconds = () => setSeconds(seconds + 10)
//     const increaseTemp = useCallback(() => setTemp(state => state + 1), [])

//     return <>
//         <TempDisplay temp={temp} increaseTemp={increaseTemp} />

//         <div>
//             <b>Секунды :</b> {seconds} с
//             <button style={{ marginLeft: '15px' }}
//                 onClick={increaseSeconds}>
//                 Увеличить на 10 секунд
//             </button>
//         </div>
//     </>
// }
// const TempDisplay = React.memo((props: any) => {
//     console.log('Render TempDisplay')
//     return (
//         <div style={{ marginBottom: '15px' }}
//             onClick={props.reset}>
//             <b>Температура:</b> {props.temp} &#176;
//             <button style={{ marginLeft: '15px' }}
//                 onClick={props.increaseTemp}>
//                 Увеличить температуру на 1 градус
//             </button>
//         </div>
//     )
// })

// ReactDOM.render(<App />, document.getElementById('root'));

// // Что надо написать вместо XXX для того, чтобы обязательно выполнялись 2 условия:
// // 1) При нажатии на кнопку "Увеличить температуру на 1 градус" температура увеличивалась
// // 2) Компонент TempDisplay не должен перерисовываться при нажатии на кнопку "Увеличить на 10 секунд"

// // Пример ответа: useEffect(() => setCounter(count + 1), [count])



// const nature = {
//     name: "Vanya",
//     age: 69,
//     technologies: ["HTML", "", "REACT"]
//   }

//   const [classroom = "FOO", balance = "BOO", article = "DOO"] = nature.technologies

//   if(!balance){
//     alert("HEY")
//   }

// Какую переменную следует указать вместо XXX, что бы была вызвана функция alert?



// import React, { useMemo, useState } from 'react'
// import ReactDOM from 'react-dom'

// type ButtonType = {
//     id: number
//     title: string
//     forAdminOnly: boolean
// }
// const buttons: ButtonType[] = [
//     { id: 1, title: 'delete', forAdminOnly: true },
//     { id: 2, title: 'update', forAdminOnly: true },
//     { id: 3, title: 'create', forAdminOnly: false },
// ]

// export const App = ({ isAdmin }: { isAdmin: boolean }) => {

//     const [seconds, setSeconds] = useState(0)

//     const increaseSeconds = () => setSeconds(seconds + 10)

//     const correctButtons = useMemo(() => {
//         return buttons.filter(b => isAdmin ? true : !b.forAdminOnly)
//     }, [])

//     return <>
//         <ButtonsPanel buttons={correctButtons} />
//         <div>
//             <p>
//                 <b>Секунды: {seconds}</b>
//             </p>
//             <button onClick={increaseSeconds}>
//                 Увеличить на 10 секунд
//             </button>
//         </div>
//     </>
// }

// const ButtonsPanel = React.memo((props: { buttons: Array<ButtonType> }) => {
//     console.log('Render ButtonsPanel')
//     return (
//         <div style={{ marginBottom: '15px' }}>
//             <div style={{ marginBottom: '15px' }}>
//                 <b>Панель с кнопками</b>
//             </div>
//             <div>
//                 {props.buttons.map(b => <button key={b.id}>{b.title}</button>)}
//             </div>
//         </div>
//     )
// })

// ReactDOM.render(<App isAdmin={true} />, document.getElementById('root'))

// // Что нужно написать вместо XXX и YYY,
// // чтобы избавиться от лишнего перерендера компонента ButtonsPanel
// // при нажатии на кнопку "Увеличить на 10 секунд" ?

// // Ответ дайте через пробел: 111 222




// const numbers = [56, 76, 49, 61]
// const mapFunction = (el: number, index: number) => el * index
// const mappedArray = numbers.map(mapFunction)

// const myNumber = mappedArray[0] && mappedArray[mappedArray.length - 1]
// console.log(myNumber)
// const bigCount = 1 + myNumber

// // Какое значение получит переменная bigCount?//

// //0 76 98 183






//12 //12 //12 //12 //12 //12 //12 //12 //12 //12 //12 //12 //12 //12 //12 //12 //12 //12 //12 //12 //12 //12 //12 //12 //12
//12 //12 //12 //12 //12 //12 //12 //12 //12 //12 //12 //12 //12 //12 //12 //12 //12 //12 //12 //12 //12 //12 //12 //12 //12
//12 //12 //12 //12 //12 //12 //12 //12 //12 //12 //12 //12 //12 //12 //12 //12 //12 //12 //12 //12 //12 //12 //12 //12 //12
//12 //12 //12 //12 //12 //12 //12 //12 //12 //12 //12 //12 //12 //12 //12 //12 //12 //12 //12 //12 //12 //12 //12 //12 //12
//12 //12 //12 //12 //12 //12 //12 //12 //12 //12 //12 //12 //12 //12 //12 //12 //12 //12 //12 //12 //12 //12 //12 //12 //12




// import { combineReducers, createStore } from 'redux'
// let initialState = { items: [{ name: 'Dimych' }, { name: 'Ignat' }] }
// const usersReducer = (state = initialState, action: any) => {
//     return state
// }
// let authInitialState = { login: 'Margo', settings: { theme: 'dark' } }
// const authReducer = (state = authInitialState, action: any) => {
//     return state
// }
// const store = createStore(combineReducers({
//     users: usersReducer,
//     auth: authReducer
// }))
// store.subscribe(() => {
//     const login = store.getState().auth.login
//     console.log(login)
// })
// store.dispatch({ type: 'ANY' })
// export default store;
// // Что нужно написать вместо XXX, чтобы в консоли увидеть 'Margo'?




// export const reducer = (state: any, action: any) => {
//     switch (action.type) {
//         case 'TRACK-DELETED':
//             return state.filter((track: any) => track.id !== action.trackId)
//         default:
//             return state
//     }
// }

// const deleteTrackAC = (trackId: number) => ({ type: 'TRACK-DELETED', trackId: trackId })


// const state = [
//     { id: 12, likesCount: 10 },
//     { id: 14, likesCount: 2 },
//     { id: 100, likesCount: 0 }
// ]

// const newState = reducer(state, deleteTrackAC(14))
// console.log(newState.length === 2)

// // Что нужно написать вместо XXX, чтобы корректно удалить трек и в консоли увидеть true?




// const value = 27

// const getValue = (value: any) => {
//     value += 35
//     return value
// }

// const myResult = getValue("") || value

// //Какое значение получит переменная myResult?





// const students = [
//     {name: "Bob"},
//     {name: "Alex"},
//     {name: "Donald"}
// ]
// const filteredStudents = students.filter(s => s.name !== "Kate")
// const lengthDiff = students.length - filteredStudents.length
// const newValue = (lengthDiff && 16.19) || (61.89 && 48.71)

// //Какое значение получит переменная newValue?



// export const reducer = (state: any, action: any) => {
//     switch (action.type) {
//         case 'USER-NAME-UPDATED':
//             return { ...state, user: { name: action.name } }

//         default:
//             return state
//     }
// }

// const updateUserNameAC = (name: string) => ({ type: 'USER-NAME-UPDATED', name })


// const state = {
//     count: 10,
//     user: {
//         name: 'Dimych',
//         age: 18,
//         isMarried: true,
//         status: "offline"
//     },
//     books: ['you don\'t know JS']
// }
// const newState = reducer(state, updateUserNameAC('Dmitry'))

// console.log(newState.user.name === 'Dmitry')
// console.log(newState.books === state.books)
// console.log(newState.user !== state.user)

// //Что нужно написать вместо XXX, чтобы корректно обновить имя пользователя и в консоли увидеть:  true true true?




// export const reducer = (state: any, action: any) => {
//     switch (action.type) {
//         case 'TRACK-ADDED':
//             return {
//                 ...state,
//                 [action.trackId]: {
//                     id: action.trackId, likesCount: 0
//                 }
//             }
//         default:
//             return state
//     }
// }

// const addTrackAC = (trackId: number) => ({ type: 'TRACK-ADDED', trackId })

// const state = {
//     12: { id: 12, likesCount: 10 },
//     14: { id: 14, likesCount: 2 },
//     100: { id: 100, likesCount: 0 },
// }
// const newState = reducer(state, addTrackAC(300))
// console.log(newState[300].likesCount === 0)

// // Что нужно написать вместо XXX, чтобы в консоли увидеть true?














// const numbers = [6, 99, 33, 76]
// const mapFunction = (el: number, index: number) => el * index
// const mappedArray = numbers.map(mapFunction)

// const myNumber = mappedArray[0] && mappedArray[mappedArray.length - 1]
// const bigCount = 69 + myNumber

// //Какое значение получит переменная bigCount?//




// import React, { useCallback, useState } from 'react'
// import ReactDOM from 'react-dom'

// export const App = () => {
//     const [temp, setTemp] = useState(100)
//     const [seconds, setSeconds] = useState(0)

//     const resetTemp = useCallback(() => setTemp(0), [])

//     const incSec = useCallback(() => setSeconds(seconds + 1), [seconds])

//     return <>
//         <TempDisplay temp={temp} resetTemp={resetTemp} />
//         <SecDisplay seconds={seconds} incSec={incSec} />
//     </>
// }
// const TempDisplay = React.memo((props: any) => {
//     console.log('Render TempDisplay')
//     return (
//         <div style={{ marginBottom: '10px' }} onClick={props.reset}>
//             <p>
//                 <b>Температура: </b>{props.temp} &#176;
//             </p>
//             <button onClick={props.resetTemp}>Сбросить температуру к 0</button>
//         </div>
//     )
// })

// const SecDisplay = React.memo((props: any) => {
//     console.log('Render SecDisplay')
//     return (
//         <div>
//             <p><b>Секунды:</b> {props.seconds} c </p>
//             <button style={{ marginRight: '20px' }}
//                 onClick={props.incSec}>
//                 Увеличить время на 1 секунду
//             </button>
//         </div>
//     )
// })

// ReactDOM.render(<App />, document.getElementById('root'))

// // Почему не корректно работает счетчик времени при нажатии на кнопку (срабатывает только 1 раз) ?
// // Найдите в чем причина.
// // Исправленную версию строки напишите в качестве ответа

// // Пример ответа: const incSec = () => setSeconds(seconds + 1)





// import React, { useCallback, useState } from 'react'
// import ReactDOM from 'react-dom'

// export const TempManager = () => {
//     const [temp, setTemp] = useState(0)
//     const [seconds, setSeconds] = useState(0)

//     const resetTemp = useCallback(() => setTemp(0), [])
//     const increaseSeconds = () => setSeconds(seconds + 100)

//     return (
//         <>
//             <TempDisplay temp={temp} reset={resetTemp} />
//             <div>
//                 <p><b>Секунды:</b> {seconds} с</p>
//                 <button onClick={increaseSeconds}>
//                     Увеличить время на 100 секунд
//                 </button>
//             </div>
//         </>
//     )
// }

// const TempDisplay = React.memo((props: any) => {
//     console.log('Render TempDisplay')
//     return (
//         <div>
//             <p><b>Температура</b>: {props.temp} &#176;</p>
//             <button onClick={props.reset}>Reset</button>
//         </div>
//     )
// })

// ReactDOM.render(<TempManager />, document.getElementById('root'))


// //При увеличении времени (при клике на button) компонент TempDisplay
// //тоже перерисовывается. Эта перерисовка является избыточной.
// //Найдите в чем причина лишних перерисовок.
// //Исправленную версию строки напишите в качестве ответа.

// //Пример ответа: const increaseSeconds = () => setSeconds(seconds + 100)




// import React, { useMemo, useState } from 'react'
// import ReactDOM from 'react-dom'

// type ButtonType = {
//     id: number
//     title: string
//     forAdminOnly: boolean
// }
// const buttons: ButtonType[] = [
//     { id: 1, title: 'delete', forAdminOnly: true },
//     { id: 2, title: 'update', forAdminOnly: true },
//     { id: 3, title: 'create', forAdminOnly: false },
// ]

// export const App = ({ isAdmin }: { isAdmin: boolean }) => {

//     const [seconds, setSeconds] = useState(0)

//     const increaseSeconds = () => setSeconds(seconds + 10)

//     const correctButtons = useMemo(() => {
//         return buttons.filter(b => isAdmin ? true : !b.forAdminOnly)
//     }, [isAdmin])

//     return <>
//         <ButtonsPanel buttons={correctButtons} />
//         <div>
//             <p>
//                 <b>Секунды: {seconds}</b>
//             </p>
//             <button onClick={increaseSeconds}>
//                 Увеличить на 10 секунд
//             </button>
//         </div>
//     </>
// }

// const ButtonsPanel = React.memo((props: { buttons: Array<ButtonType> }) => {
//     console.log('Render ButtonsPanel')
//     return (
//         <div style={{ marginBottom: '15px' }}>
//             <div style={{ marginBottom: '15px' }}>
//                 <b>Панель с кнопками</b>
//             </div>
//             <div>
//                 {props.buttons.map(b => <button key={b.id}>{b.title}</button>)}
//             </div>
//         </div>
//     )
// })

// ReactDOM.render(<App isAdmin={true} />, document.getElementById('root'))

// // Что нужно написать вместо XXX и YYY,
// // чтобы избавиться от лишнего перерендера компонента ButtonsPanel
// // при нажатии на кнопку "Увеличить на 10 секунд" ?

// // Ответ дайте через пробел: 111 222




// TOTAL3 TOTAL3 TOTAL3 TOTAL3 TOTAL3 TOTAL3 TOTAL3 TOTAL3 TOTAL3 TOTAL3 TOTAL3 TOTAL3 TOTAL3 TOTAL3 TOTAL3 TOTAL3
// TOTAL3 TOTAL3 TOTAL3 TOTAL3 TOTAL3 TOTAL3 TOTAL3 TOTAL3 TOTAL3 TOTAL3 TOTAL3 TOTAL3 TOTAL3 TOTAL3 TOTAL3 TOTAL3
// TOTAL3 TOTAL3 TOTAL3 TOTAL3 TOTAL3 TOTAL3 TOTAL3 TOTAL3 TOTAL3 TOTAL3 TOTAL3 TOTAL3 TOTAL3 TOTAL3 TOTAL3 TOTAL3
// TOTAL3 TOTAL3 TOTAL3 TOTAL3 TOTAL3 TOTAL3 TOTAL3 TOTAL3 TOTAL3 TOTAL3 TOTAL3 TOTAL3 TOTAL3 TOTAL3 TOTAL3 TOTAL3
// TOTAL3 TOTAL3 TOTAL3 TOTAL3 TOTAL3 TOTAL3 TOTAL3 TOTAL3 TOTAL3 TOTAL3 TOTAL3 TOTAL3 TOTAL3 TOTAL3 TOTAL3 TOTAL3



// import React, { useCallback, useMemo, useState } from 'react'
// import ReactDOM from 'react-dom'

// export const App = () => {
//     const [temp, setTemp] = useState(10)
//     const [seconds, setSeconds] = useState(100)

//     const increaseSeconds = () => setSeconds(seconds + 10)
//     const increaseTemp = useCallback(() => setTemp(temp + 1), [temp])

//     return <>
//         <TempDisplay temp={temp} increaseTemp={increaseTemp} />

//         <div>
//             <b>Секунды :</b> {seconds} с
//             <button style={{ marginLeft: '15px' }}
//                 onClick={increaseSeconds}>
//                 Увеличить на 10 секунд
//             </button>
//         </div>
//     </>
// }
// const TempDisplay = React.memo((props: any) => {
//     console.log('Render TempDisplay')
//     return (
//         <div style={{ marginBottom: '15px' }}
//             onClick={props.reset}>
//             <b>Температура:</b> {props.temp} &#176;
//             <button style={{ marginLeft: '15px' }}
//                 onClick={props.increaseTemp}>
//                 Увеличить температуру на 1 градус
//             </button>
//         </div>
//     )
// })

// ReactDOM.render(<App />, document.getElementById('root'));

// // Что надо написать вместо XXX для того, чтобы обязательно выполнялись 2 условия:
// // 1) При нажатии на кнопку "Увеличить температуру на 1 градус" температура увеличивалась
// // 2) Компонент TempDisplay не должен перерисовываться при нажатии на кнопку "Увеличить на 10 секунд"

// // Пример ответа: useEffect(() => setCounter(count + 1), [count])





// const compassion = {
//     name: "Vladimir",
//     age: 42,
//     technologies: ["HTML", "", "REACT"]
//   }

//   const [movement = "FOO", cycle = "BOO", morality = "DOO"] = compassion.technologies

//   if(!cycle){
//     alert("HEY")
//   }

//   // Какую переменную следует указать вместо XXX, что бы была вызвана функция alert?





// import { combineReducers, createStore } from 'redux'

// let initialState = { items: [{ name: 'Dimych' }, { name: 'Ignat' }] }
// const usersReducer = (state = initialState, action: any) => {
//     return state
// }

// const store = createStore(combineReducers({
//     users: usersReducer
// }))

// store.subscribe(() => {  ////////////////////////////////////////////////////////////
//     console.log('state changed')
// })

// store.dispatch({ type: 'ANY' })

// // Что нужно написать вместо XXX, чтобы в консоли увидеть 'state changed'?






// import React from 'react'
// import { createStore } from 'redux'
// import { Provider, useSelector, useDispatch } from 'react-redux'
// import ReactDOM from 'react-dom'

// type StudentType = {
//     id: number
//     name: string
//     age: number
// }

// const initState = {
//     students:
//         [
//             { id: 1, name: 'Bob', age: 23 },
//             { id: 2, name: 'Alex', age: 22 }
//         ] as Array<StudentType>
// }
// type AddStudentAT = {
//     type: 'ADD-STUDENT'
//     name: string
//     age: number
//     id: number
// }

// type InitialStateType = typeof initState

// const studentsReducer = (state: InitialStateType = initState, action: AddStudentAT): InitialStateType => {
//     switch (action.type) {
//         case 'ADD-STUDENT':
//             return {
//                 ...state,
//                 students: [...state.students, {
//                     name: action.name,
//                     age: action.age,
//                     id: action.id
//                 }]
//             }
//     }
//     return state
// }

// const appStore = createStore(studentsReducer)
// type RootStateType = ReturnType<typeof studentsReducer>


// const StudentList = () => {
//     const students = useSelector((state: RootStateType) => state.students)
//     return (
//         <ul>
//             {students.map(s => <li key={s.id}>{`${s.name}. ${s.age} years.`}</li>)}
//         </ul>
//     )
// }
// const App = () => {
//     return <StudentList />
// }

// ReactDOM.render(<div>
//     <Provider store={appStore}>
//         <App />
//     </Provider>
// </div>,
//     document.getElementById('root')
// )

// // Что нужно написать вместо XXX, YYY и ZZZ, чтобы отобразился список студентов?





// export const reducer = (state: any, action: any) => {
//     switch (action.type) {
//         case 'TRACK-DELETED':
//             return state.filter((track: any) => track.id !== action.trackId)
//         default:
//             return state
//     }
// }

// const deleteTrackAC = (trackId: number) => ({ type: 'TRACK-DELETED', trackId })


// const state = [
//     { id: 12, likesCount: 10 },
//     { id: 14, likesCount: 2 },
//     { id: 100, likesCount: 0 }
// ]
// const newState = reducer(state, deleteTrackAC(14))

// console.log(newState.length === 2)


// // Что нужно написать вместо XXX, чтобы корректно удалить трек и в консоли увидеть true?





// import React, { useState, useReducer, useEffect } from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';

// const changeCounter = (state: number, action: any): number => {
//     switch (action.type) {
//         case "INC_VALUE":
//             return state + 1
//         case "RESET":
//             return 0
//         case "DEC_VALUE":
//             return state - 1
//         default:
//             return state
//     }
// }

// function Counter() {
//     const [value, setValue] = useReducer(changeCounter, 0)
//     const [isCounter, setIsCounter] = useState(true)
//     const commonStyles: React.CSSProperties = {
//         border: "1px solid black",
//         margin: "100px auto",
//         width: "300px",
//         height: "150px",
//         textAlign: "center",
//     }
//     const btnStyles: React.CSSProperties = {
//         color: "white",
//         fontWeight: "bold",
//         backgroundColor: "darkgray",
//         borderRadius: "3px",
//         minWidth: "40px"
//     }

//     return (
//         <div style={commonStyles}>{
//             isCounter
//                 ? <div >
//                     <div style={{ marginBottom: "20px" }}>
//                         <h2>{value}</h2>
//                         <button
//                             style={{ ...btnStyles, backgroundColor: "red" }}
//                             onClick={() => setIsCounter(false)}>OFF</button>
//                     </div>
//                     <button style={btnStyles} onClick={() => setValue({ type: "INC_VALUE" })}>+</button>
//                     <button style={btnStyles} onClick={() => setValue({ type: "RESET" })}>0</button>
//                     <button style={btnStyles} onClick={() => setValue({ type: "DEC_VALUE" })}>-</button>

//                 </div>
//                 : <div style={{ textAlign: "center" }}>
//                     <h2>Counter not working</h2>
//                     <button
//                         style={{ ...btnStyles, backgroundColor: "green" }}
//                         onClick={() => setIsCounter(true)}>ON</button>
//                 </div>
//         }
//         </div>
//     )
// }


// ReactDOM.render(
//     <Counter />, document.getElementById('root')
// );
// // Что надо написать вместо XXX и YYY, чтобы код работал? Напишите через пробел.





// import React, { useCallback, useMemo, useState } from 'react'
// import ReactDOM from 'react-dom'

// type ButtonType = {
//     id: number
//     title: string
//     forAdminOnly: boolean
// }
// const buttons: ButtonType[] = [
//     { id: 1, title: 'delete', forAdminOnly: true },
//     { id: 2, title: 'update', forAdminOnly: true },
//     { id: 3, title: 'create', forAdminOnly: false },
// ]

// export const App = ({ isAdmin }: { isAdmin: boolean }) => {

//     const [seconds, setSeconds] = useState(0)

//     const increaseSeconds = () => setSeconds(seconds + 10)

//     const correctButtons = useMemo(() => {
//         return buttons.filter(b => isAdmin ? true : !b.forAdminOnly)
//     }, [isAdmin])

//     return <>
//         <ButtonsPanel buttons={correctButtons} />
//         <div>
//             <p>
//                 <b>Секунды: {seconds}</b>
//             </p>
//             <button onClick={increaseSeconds}>
//                 Увеличить на 10 секунд
//             </button>
//         </div>
//     </>
// }

// const ButtonsPanel = React.memo((props: { buttons: Array<ButtonType> }) => {
//     console.log('Render ButtonsPanel')
//     return (
//         <div style={{ marginBottom: '15px' }}>
//             <div style={{ marginBottom: '15px' }}>
//                 <b>Панель с кнопками</b>
//             </div>
//             <div>
//                 {props.buttons.map(b => <button key={b.id}>{b.title}</button>)}
//             </div>
//         </div>
//     )
// })

// ReactDOM.render(<App isAdmin={true} />, document.getElementById('root'))

// // Что нужно написать вместо XXX и YYY,
// // чтобы избавиться от лишнего перерендера компонента ButtonsPanel
// // при нажатии на кнопку "Увеличить на 10 секунд" ?

// // Ответ дайте через пробел: 111 222






// import { combineReducers, createStore } from 'redux'
// import ReactDOM from 'react-dom'
// import { Provider, useSelector } from 'react-redux'
// import React from 'react'

// let initialState = {
//     items:
//         [
//             { id: 1, name: 'Dimych' },
//             { id: 2, name: 'Ignat' }
//         ]
// }
// const usersReducer = (state = initialState, action: any) => {
//     return state
// }

// let authInitialState = { login: 'Margo', settings: { theme: 'dark' } }
// const authReducer = (state = authInitialState, action: any) => {
//     return state
// }

// let rootReducer = combineReducers({
//     users: usersReducer,
//     auth: authReducer
// })

// const store = createStore(rootReducer)
// type RootStateType = ReturnType<typeof rootReducer>

// const selector = (state: RootStateType) => state.users.items

// const Users = () => {

//     const users = useSelector(selector)

//     return <ul>
//         {users.map(u => <li key={u.id}>{u.name}</li>)}
//     </ul>
// }

// ReactDOM.render(<div>
//     <Provider store={store}>
//         <Users />
//     </Provider>
// </div>,
//     document.getElementById('root')
// )

// // Что нужно написать вместо XXX, чтобы отрендерить список юзеров?
// // ❗ Ответ дать минимально возможным объёмом кода





// export const reducer = (state: any, action: any) => {
//     switch (action.type) {
//         case 'USER-NAME-UPDATED':
//             console.log(state)
//             return { ...state, user: { ...state.user, name: action } }
//         // { ...state, user: { ...state.user, name: action.name } }

//         default:
//             return state
//     }
// }

// const updateUserNameAC = (name: string) => ({ type: 'USER-NAME-UPDATED', name })


// const state = {
//     count: 10,
//     user: {
//         name: 'Dimych',
//         age: 18,
//         isMarried: true,
//         status: "offline"
//     },
//     books: ['you don\'t know JS']
// }
// const newState = reducer(state, updateUserNameAC('Dmitry'))

// console.log(newState.user.name === 'Dmitry')
// console.log(newState.books === state.books)
// console.log(newState.user !== state.user)

// //Что нужно написать вместо XXX, чтобы корректно обновить имя пользователя и в консоли увидеть:  true true true?




// type Status = 'Stopped' | 'Playing' | 'Paused'
// type StateType = {
//     volume: number // in percents
//     trackUrl: string // 'https://blabla.com/track01.mp3',
//     currentPlayPosition: number // milliseconds,
//     status: Status
// }
// export const playerReducer = (state: StateType, action: any) => {
//     switch (action.type) {
//         case 'TRACK-VOLUME-CHANGED':
//             return {
//                 ...state,
//                 volume: action.volumeLevel
//             }
//         default:
//             return state
//     }
// }

// const muteTrackAC = () => ({ type: 'TRACK-MUTED' })
// const changeVolumeAC = (volumeLevel: number) => ({ type: 'TRACK-VOLUME-CHANGED', volumeLevel })
// const changeTrackAC = (url: string) => ({ type: 'TRACK-URL-CHANGED', url })
// const changeTrackPlayStatusAC = (status: Status) => ({ type: 'TRACK-STATUS-CHANGED', status })

// const state: StateType = {
//     status: 'Stopped',
//     currentPlayPosition: 1213,
//     trackUrl: 'https://blabla.com/track01.mp3',
//     volume: 100
// }
// const newState = playerReducer(state, changeVolumeAC(20))
// console.log(newState.volume === 20)

// // Напишите вместо XXX правильную строку кода, чтобы изменить громкость трека и увидеть в консоли true.




// import React, { useCallback, useState } from 'react'
// import ReactDOM from 'react-dom'

// export const App = () => {
//     const [temp, setTemp] = useState(100)
//     const [seconds, setSeconds] = useState(0)

//     const resetTemp = useCallback(() => setTemp(0), [])

//     const incSec = useCallback(() => setSeconds(seconds + 1), [seconds])

//     return <>
//         <TempDisplay temp={temp} resetTemp={resetTemp} />
//         <SecDisplay seconds={seconds} incSec={incSec} />
//     </>
// }
// const TempDisplay = React.memo((props: any) => {
//     console.log('Render TempDisplay')
//     return (
//         <div style={{ marginBottom: '10px' }} onClick={props.reset}>
//             <p>
//                 <b>Температура: </b>{props.temp} &#176;
//             </p>
//             <button onClick={props.resetTemp}>Сбросить температуру к 0</button>
//         </div>
//     )
// })

// const SecDisplay = React.memo((props: any) => {
//     console.log('Render SecDisplay')
//     return (
//         <div>
//             <p><b>Секунды:</b> {props.seconds} c </p>
//             <button style={{ marginRight: '20px' }}
//                 onClick={props.incSec}>
//                 Увеличить время на 1 секунду
//             </button>
//         </div>
//     )
// })

// ReactDOM.render(<App />, document.getElementById('root'))

// // Почему не корректно работает счетчик времени при нажатии на кнопку (срабатывает только 1 раз) ?
// // Найдите в чем причина.
// // Исправленную версию строки напишите в качестве ответа

// // Пример ответа: const incSec = () => setSeconds(seconds + 1)



// import { createStore } from 'redux'
// import ReactDOM from 'react-dom'
// import { Provider, useSelector, useDispatch } from 'react-redux'
// import React from 'react'

// const students = {
//     students: [
//         { id: 1, name: 'Bob' },
//         { id: 2, name: 'Alex' },
//         { id: 3, name: 'Donald' },
//         { id: 4, name: 'Ann' },
//     ]
// }
// type RemoveStudentAT = {
//     type: "REMOVE-STUDENT"
//     id: number
// }
// const RemoveStudentAC = (id: number): RemoveStudentAT => ({
//     type: "REMOVE-STUDENT",
//     id
// })

// const studentsReducer = (state = students, action: RemoveStudentAT) => {
//     switch (action.type) {
//         case "REMOVE-STUDENT":
//             return {
//                 ...state,
//                 students: state.students.filter(s => s.id !== action.id)
//             }
//     }
//     return state
// }

// const store = createStore(studentsReducer)
// type RootStateType = ReturnType<typeof studentsReducer>


// const StudentList = () => {
//     const listItemStyles = {
//         width: "100px",
//         borderBottom: "1px solid gray",
//         cursor: "pointer",
//     }
//     const students = useSelector((state: RootStateType) => state.students)
//     const dispatch = useDispatch()
//     const studentsList = students.map(s => {
//         const removeStudent = () => {
//             dispatch(RemoveStudentAC(s.id))
//         }
//         return (
//             <li key={s.id}
//                 style={listItemStyles}
//                 onClick={removeStudent}>
//                 {s.name}
//             </li>)
//     })
//     return (
//         <ol>
//             {studentsList}
//         </ol>

//     )
// }


// ReactDOM.render(<div>
//     <Provider store={store}>
//         <StudentList />
//     </Provider>
// </div>,
//     document.getElementById('root')
// )

// // Что нужно написать вместо XXX, YYY и ZZZ, чтобы при клике по имени студент
// // удалялся из списка? Напишите через пробел.





// 13 13 13 13 13 13 13 13 13 13 13 13 13 13 13 13 13 13 13 13 13 13 13 13 13 13 13 13 13 13 13 13 13 13
// 13 13 13 13 13 13 13 13 13 13 13 13 13 13 13 13 13 13 13 13 13 13 13 13 13 13 13 13 13 13 13 13 13 13
// 13 13 13 13 13 13 13 13 13 13 13 13 13 13 13 13 13 13 13 13 13 13 13 13 13 13 13 13 13 13 13 13 13 13
// 13 13 13 13 13 13 13 13 13 13 13 13 13 13 13 13 13 13 13 13 13 13 13 13 13 13 13 13 13 13 13 13 13 13
// 13 13 13 13 13 13 13 13 13 13 13 13 13 13 13 13 13 13 13 13 13 13 13 13 13 13 13 13 13 13 13 13 13 13
// 13 13 13 13 13 13 13 13 13 13 13 13 13 13 13 13 13 13 13 13 13 13 13 13 13 13 13 13 13 13 13 13 13 13



// import axios from 'axios';
// import React, { useEffect, useState } from 'react'
// import ReactDOM from 'react-dom/client'

// type UserType = {
//     id: string;
//     name: string;
//     age: number;
// }

// // API
// const instance = axios.create({ baseURL: 'https://exams-frontend.kimitsu.it-incubator.io/api/' })

// const api = {
//     getUsers(pageNumber: number) {
//         return instance.get(`users?pageSize=${3}&pageNumber=${pageNumber}`)
//     },
// }

// // App
// const buttons = [
//     { id: 1, title: '1' },
//     { id: 2, title: '2' },
//     { id: 3, title: '3' },
// ]

// export const App = () => {

//     const [users, setUsers] = useState<UserType[]>([])
//     const [currentPage, setCurrentPage] = useState(1)

//     useEffect(() => {
//         console.log(currentPage)
//         api.getUsers(currentPage)
//             .then((res: any) => {
//                 console.log(res.data.items)
//                 setUsers(res.data.items)
//             })
//     }, [currentPage])

//     const setPageHandler = (page: number) => {
//         setCurrentPage(page)
//     };

//     return (
//         <>
//             <h1>👪 Список пользователей</h1>
//             {
//                 users.map(u => {
//                     return <div style={{ marginBottom: '25px' }} key={u.id}>
//                         <p><b>name</b>: {u.name}</p>
//                         <p><b>age</b>: {u.age}</p>
//                     </div>
//                 })
//             }

//             {
//                 buttons.map(b => {
//                     return (
//                         <button key={b.id}
//                             style={b.id === currentPage ? { backgroundColor: 'lightblue' } : {}}
//                             onClick={() => setPageHandler(b.id)}>
//                             {b.title}
//                         </button>
//                     )
//                 })
//             }
//         </>
//     )
// }


// const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
// root.render(<App />)

// // 📜 Описание:
// // При переходе по страницам должны подгружаться новые пользователи.
// // Однако в коде допущена ошибка и всегда подгружаются одни и теже пользователи.
// // Задача: найти эту ошибку, и исправленную версию строки написать в качестве ответа.

// // 🖥 Пример ответа: const [currentPage, setCurrentPage] = useState(page)






// import axios from 'axios'
// import React, { useEffect, useState } from 'react'
// import ReactDOM from 'react-dom/client';

// // Types
// type TodoType = {
//     id: string;
//     title: string;
//     order: number;
//     createdAt: string;
//     updatedAt: string;
//     completed: boolean;
// }


// // Api
// const instance = axios.create({ baseURL: 'https://exams-frontend.kimitsu.it-incubator.io/api/' })

// const todosAPI = {
//     getTodo(todoId: string) {
//         return instance.get<TodoType>(`todos/${todoId}`)
//     }
// }


// // App
// export const App = () => {

//     const [todo, setTodo] = useState<TodoType | null>(null)
//     const [error, setError] = useState<string>('')

//     useEffect(() => {
//         const todoId = "637cb9342f24ad82bcb07d8d"
//         todosAPI.getTodo(todoId)
//             .then((res: any) => setTodo(res.data))
//             .catch(e => {
//                 setError('Ошибка 😰. Анализируй network 😉')
//             })
//     }, [])


//     return (
//         <>
//             <h2>✅ Тудулист</h2>
//             {
//                 !!todo
//                     ? <div>
//                         <div style={todo?.completed ? { color: 'grey' } : {}} key={todo?.id}>
//                             <input type="checkbox" checked={todo?.completed} />
//                             <b>Описание</b>: {todo?.title}
//                         </div>
//                         <h2>Так держать. Ты справился 🚀</h2>
//                     </div>
//                     : <h2 style={{ color: 'red' }}>{error}</h2>
//             }
//         </>
//     )
// }


// const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
// root.render(<App />)

// // 📜 Описание:
// // Студент по неопытности допустил одну маленькую ошибку, но из-за нее он не может вывести на экран тудулист.
// // Найдите ошибку и вставьте исправленную версию строки кода в качестве ответа
// // P.S. Эта ошибка из реальной жизни, студенты часто ошибаются подобным образом и не могут понять в чем дело.

// // 🖥 Пример ответа:  .then((res: any) => setTodo(res.data.data))






// import axios from 'axios'
// import React, { useEffect, useState } from 'react'
// import ReactDOM from 'react-dom/client';

// // Types
// type PhotoType = {
//     albumId: string
//     id: string
//     title: string
//     url: string
// }

// type PayloadType = {
//     title: string
//     url?: string
// }

// // Api
// const instance = axios.create({ baseURL: 'https://exams-frontend.kimitsu.it-incubator.io/api/' })

// const photoId = '637df6dc99fdc52af974a517'

// const photosAPI = {
//     getPhoto() {
//         return instance.get<PhotoType>(`photos/${photoId}`)
//     },
//     updatePhoto(payload: PayloadType) {
//         return instance.put<PhotoType>(`photos/${photoId}`, payload)
//     }
// }


// // App
// export const App = () => {

//     const [photo, setPhoto] = useState<PhotoType | null>(null)

//     useEffect(() => {
//         photosAPI.getPhoto()
//             .then((res) => {
//                 setPhoto(res.data)
//             })
//     }, [])

//     const updatePhotoHandler = () => {
//         // ❗ title и url указаны в качестве заглушки. Server сам сгенерирует новый title
//         const payload = {
//             title: 'Новый title',
//             url: 'data:image/png;base64,iVBORw0FAKEADDRESSnwMZAABJRUrkJggg=='
//         }
//         photosAPI.updatePhoto(payload)
//             .then((res) => {
//                 console.log(res.data.title)
//                 setPhoto(res.data)
//             })
//     };

//     return (
//         <>
//             <h1>📸 Фото</h1>
//             <div>
//                 <div style={{ marginBottom: '15px' }}>
//                     <h1>title: {photo?.title}</h1>
//                     <div><img src={photo?.url} alt="" /></div>
//                 </div>
//                 <button style={{ marginLeft: '15px' }}
//                     onClick={updatePhotoHandler}>
//                     Изменить title
//                 </button>
//             </div>
//         </>
//     )
// }


// const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
// root.render(<App />)

// // 📜 Описание:
// // При нажатии на кнопку "Изменить title" title должен обновиться,
// // но из-за невнимательности была допущена ошибка и изменение не происходит
// //
// // Найдите и исправьте ошибку
// // Исправленную версию строки напишите в качестве ответа.

// // 🖥 Пример ответа: photosAPI.updatePhotoTitle(id, title)




// import axios from 'axios'
// import React, { useEffect, useState } from 'react'
// import ReactDOM from 'react-dom/client';

// // Types
// type PostType = {
//     id: string
//     body: string
//     title: string
//     userId: string
// }


// // Api
// const instance = axios.create({ baseURL: 'https://exams-frontend.kimitsu.it-incubator.io/api/' })

// const postsAPI = {
//     getPosts() {
//         return instance.get('posts')
//         // Promise.resolve() стоит в качестве заглушки, чтобы TS не ругался и код компилировался
//         // Promise.resolve() нужно удалить и написать правильный запрос для получения постов
//         return Promise.resolve()
//     },
// }


// // App
// export const App = () => {

//     const [posts, setPosts] = useState<PostType[]>([])

//     useEffect(() => {
//         postsAPI.getPosts()
//             .then((res: any) => {
//                 setPosts(res.data)
//             })
//     }, [])


//     return (
//         <>
//             <h1>📜 Список постов</h1>
//             {
//                 posts.length
//                     ? posts.map(p => {
//                         return <div key={p.id}><b>title</b>: {p.title}</div>
//                     })
//                     : <h2>Постов нету 😥</h2>
//             }
//         </>
//     )
// }


// const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
// root.render(<App />)

// // 📜 Описание:
// // Напишите запрос на сервер для получения всех постов
// // Типизацию возвращаемых данных в ответе указывать необязательно, но можно и указать (в ответах учтены оба варианта).
// // Исправленную версию строки напишите в качестве ответа.

// // 🖥 Пример ответа: return Promise.resolve()





// import axios from 'axios'
// import React, { useEffect, useState } from 'react'
// import ReactDOM from 'react-dom/client';

// // Types
// type PostType = {
//     body: string
//     id: string
//     title: string
//     userId: string
// }


// // Api
// const instance = axios.create({ baseURL: 'https://exams-frontend.kimitsu.it-incubator.io/api/' })

// const postsAPI = {
//     getPosts() {
//         return instance.get<PostType[]>('posts')
//     },
//     deletePost(id: string) {
//         return instance.delete<{ message: string }>(`posts/${id}`)
//     }
// }

// // App
// export const App = () => {

//     const [posts, setPosts] = useState<PostType[]>([])

//     useEffect(() => {
//         postsAPI.getPosts()
//             .then((res) => {
//                 setPosts(res.data)
//             })
//     }, [])

//     const deletePostHandler = (id: string) => {
//         postsAPI.deletePost(id)
//             .then((res) => {
//                 const newPostsArr = posts.filter(p => p.id !== id)
//                 setPosts(newPostsArr)
//             })
//     };

//     return (
//         <>
//             <h1>📜 Список постов</h1>
//             {posts.map(p => {
//                 return (
//                     <div key={p.id}>
//                         <b>title</b>: {p.title}
//                         <button style={{ marginLeft: '15px' }}
//                             onClick={() => deletePostHandler(p.id)}>
//                             x
//                         </button>
//                     </div>
//                 )
//             })}
//         </>
//     )
// }


// const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
// root.render(<App />)

// // 📜 Описание:
// // Почему не удаляется post при нажатии на кнопку удаления (х) ?
// // Найдите ошибку и вставьте исправленную строку кода в качестве ответа
// //
// // 🖥 Пример ответа: return axios.delete





// import axios from 'axios'
// import React, { useEffect, useState } from 'react'
// import ReactDOM from 'react-dom/client';

// // TYPES
// type ProductType = {
//     id: string
//     title: string
//     description: string
//     price: number
// }

// type FilmType = {
//     id: number
//     nameOriginal: string
//     description: string
//     ratingImdb: number
// }

// type ProductsResponseType = {
//     total: number
//     messages: string[]
//     page: number
//     pageCount: number
//     data: ProductType[]
// }

// type FilmsResponseType = {
//     total: number
//     messages: string[]
//     page: number
//     pageCount: number
//     data: FilmType[]
// }

// type CommonResponseType<T> = {
//     total: number
//     messages: string[]
//     page: number
//     pageCount: number
//     data: T
// }

// // Api
// const instance = axios.create({ baseURL: 'https://exams-frontend.kimitsu.it-incubator.io/api/' })

// const api = {
//     getProducts() {
//         return instance.get<CommonResponseType<ProductType[]>>('products')
//     },
//     getFilms() {
//         return instance.get<CommonResponseType<FilmType[]>>('films')
//     }
// }


// // App
// const App = () => {
//     return (
//         <>
//             <h1>🛒 Products && 🎦 Films</h1>
//             <div style={{ display: 'flex', justifyContent: 'space-evenly' }}>
//                 <Products />
//                 <Films />
//             </div>
//         </>
//     )
// }

// const Products = () => {

//     const [products, setProducts] = useState<ProductType[]>([])

//     useEffect(() => {
//         api.getProducts()
//             .then((res) => setProducts(res.data.data))
//     }, [])

//     return (
//         <div style={{ width: '45%' }}>
//             <h2>🛒 Products</h2>
//             <div>
//                 {
//                     products.map(p => {
//                         return (
//                             <div key={p.id}>
//                                 <b>{p.title}</b>
//                                 <p>{p.description}</p>
//                                 <p>💵 {p.price} $</p>
//                             </div>
//                         )
//                     })
//                 }</div>
//         </div>
//     )
// }

// const Films = () => {

//     const [films, setFilms] = useState<FilmType[]>([])

//     useEffect(() => {
//         api.getFilms()
//             .then((res) => setFilms(res.data.data))
//     }, [])

//     return (
//         <div style={{ width: '45%' }}>
//             <h2>🎦 Films</h2>
//             <div>
//                 {
//                     films.map(f => {
//                         return (
//                             <div key={f.id}>
//                                 <b>{f.nameOriginal}</b>
//                                 <p>{f.description}</p>
//                                 <p>⭐ {f.ratingImdb} </p>
//                             </div>
//                         )
//                     })
//                 }</div>
//         </div>
//     )
// }


// const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
// root.render(<App />)

// // 📜 Описание:
// // При запуске проекта на экране вы увидите 2 списка: Products и Films.
// // С ними все хорошо, но обратите внимание на типизацию ответов с сервера ProductsResponseType и FilmsResponseType.
// // Дублирование типов на лицо.
// // Ваша задача написать дженериковый тип CommonResponseType и заменить им дублирующие типы.
// // Очередность свойств в типах менять запрещено (по причине что нам будет тяжело перебрать все правильные варианты :) )
// // Параметр тип назовите буквой T
// //
// // В качестве ответа нужно скопировать полностью рабочий дженериковый тип CommonResponseType
// //
// // 🖥 Пример ответа:
// // type CommonResponseType = {
// //   total: T
// //   messages: T[]
// //   page: T
// //   pageCount: T
// //   data: T[]
// // }






// import axios from 'axios'
// import React, { ChangeEvent, useEffect, useState } from 'react'
// import ReactDOM from 'react-dom/client';

// // Types
// type CommentType = {
//     postId: string
//     id: string
//     name: string
//     email: string
//     body: string
// }

// // Api
// const instance = axios.create({ baseURL: 'https://exams-frontend.kimitsu.it-incubator.io/api/' })

// const commentsAPI = {
//     getComments() {
//         return instance.get<CommentType[]>('comments')
//     },
//     createComment() {
//         const payload = { body: 'Это просто заглушка. Backend сам сгенерирует новый комментарий и вернет его вам' }
//         return instance.post<CommentType>('comments', payload)
//         // Promise.resolve() стоит в качестве заглушки, чтобы TS не ругался и код компилировался
//         // Promise.resolve() нужно удалить и написать правильный запрос для создания нового комментария
//         return Promise.resolve()
//     }
// }


// // App
// export const App = () => {

//     const [comments, setComments] = useState<CommentType[]>([])

//     useEffect(() => {
//         commentsAPI.getComments()
//             .then((res) => {
//                 setComments(res.data)
//             })
//     }, [])

//     const createPostHandler = () => {
//         commentsAPI.createComment()
//             .then((res: any) => {
//                 const newComment = res.data
//                 setComments([newComment, ...comments,])
//             })
//     };

//     return (
//         <>
//             <h1>📝 Список комментариев</h1>
//             <div style={{ marginBottom: '15px' }}>
//                 <button style={{ marginLeft: '15px' }}
//                     onClick={() => createPostHandler()}>
//                     Добавить новый комментарий
//                 </button>
//             </div>

//             {
//                 comments.map(c => {
//                     return <div key={c.id}><b>Comment</b>: {c.body} </div>
//                 })
//             }
//         </>
//     )
// }

// const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
// root.render(<App />)

// // 📜 Описание:
// // Напишите запрос на сервер для создания нового комментария.
// // Типизацию возвращаемых данных в ответе указывать необязательно, но можно и указать (в ответах учтены оба варианта).
// // Исправленную версию строки напишите в качестве ответа.
// //
// // 🖥 Пример ответа: return Promise.resolve(payload)





// import axios from 'axios'
// import React, { useEffect, useState } from 'react'
// import ReactDOM from 'react-dom/client';

// // Types
// type TodoType = {
//     id: string;
//     title: string;
//     order: number;
//     createdAt: string;
//     updatedAt: string;
//     completed: boolean;
// }


// // Api
// const instance = axios.create({ baseURL: 'https://exams-frontend.kimitsu.it-incubator.io/api/' })

// const todosAPI = {
//     getTodos() {
//         return instance.get<TodoType[]>('todos')
//     },
// }


// // App
// const App = () => {

//     const [todos, setTodos] = useState<TodoType[]>([])

//     useEffect(() => {
//         todosAPI.getTodos().then((res) => {
//             console.log(res.data)
//             setTodos(res.data)
//         })
//     }, [])

//     return (
//         <>
//             <h2>✅ Список тудулистов</h2>
//             {
//                 todos.map((t) => {
//                     return (
//                         <div style={t.completed ? { color: 'grey' } : {}} key={t.id}>
//                             <input type="checkbox" checked={t.completed} />
//                             <b>Описание</b>: {t.title}
//                         </div>
//                     )
//                 })
//             }
//         </>
//     )
// }


// const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
// root.render(<App />)

// // 📜 Описание:
// // При написании типизации по невнимательности было допущено несколько ошибок.
// // Напишите через пробел правильные свойства в TodoType, в которых была допущена ошибка.
// // Debugger / network / документация вам в помощь

// // 🖥 Пример ответа: id status isDone





// 14 14 14 14 14 14 14 14 14 14 14 14 14 14 14 14 14 14 14 14 14 14 14 14 14 14 14 14 14 14 14 14 14 14
// 14 14 14 14 14 14 14 14 14 14 14 14 14 14 14 14 14 14 14 14 14 14 14 14 14 14 14 14 14 14 14 14 14 14
// 14 14 14 14 14 14 14 14 14 14 14 14 14 14 14 14 14 14 14 14 14 14 14 14 14 14 14 14 14 14 14 14 14 14
// 14 14 14 14 14 14 14 14 14 14 14 14 14 14 14 14 14 14 14 14 14 14 14 14 14 14 14 14 14 14 14 14 14 14
// 14 14 14 14 14 14 14 14 14 14 14 14 14 14 14 14 14 14 14 14 14 14 14 14 14 14 14 14 14 14 14 14 14 14
// 14 14 14 14 14 14 14 14 14 14 14 14 14 14 14 14 14 14 14 14 14 14 14 14 14 14 14 14 14 14 14 14 14 14



// import React, { useEffect } from "react";
// import ReactDOM from "react-dom/client";
// import { ThunkAction, ThunkDispatch } from "redux-thunk";
// import { Provider, TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
// import axios from "axios";
// import { configureStore, combineReducers } from "@reduxjs/toolkit";

// // Types
// type CommentType = {
//     postId: string;
//     id: string;
//     name: string;
//     email: string;
//     body: string;
// };

// // Api
// const instance = axios.create({ baseURL: "https://exams-frontend.kimitsu.it-incubator.io/api/" });

// const commentsAPI = {
//     getComments() {
//         return instance.get<CommentType[]>("comments");
//     },
//     createComment() {
//         const payload = {
//             body: "Это просто заглушка. Backend сам сгенерирует новый комментарий и вернет его вам",
//         };
//         return instance.post("comments", payload);
//     },
// };

// // Reducer
// const initState = [] as CommentType[];

// type InitStateType = typeof initState;

// const commentsReducer = (state: InitStateType = initState, action: ActionsType) => {
//     switch (action.type) {
//         case "COMMENTS/GET-COMMENTS":
//             return action.comments;
//         case "COMMENTS/CREATE-COMMENT":
//             return [action.comment, ...state];
//         default:
//             return state;
//     }
// };

// const getCommentsAC = (comments: CommentType[]) =>
//     ({ type: "COMMENTS/GET-COMMENTS", comments }) as const;
// const createCommentAC = (comment: CommentType) =>
//     ({ type: "COMMENTS/CREATE-COMMENT", comment }) as const;

// type ActionsType = ReturnType<typeof getCommentsAC> | ReturnType<typeof createCommentAC>;

// const getCommentsTC = (): AppThunk => (dispatch) => {
//     commentsAPI.getComments().then((res) => {
//         dispatch(getCommentsAC(res.data));
//     });
// };

// const addCommentTC = (): AppThunk => (dispatch) => {
//     commentsAPI.createComment().then((res) => {
//         dispatch(createCommentAC(res.data));
//     });
// };

// // Store
// const rootReducer = combineReducers({
//     comments: commentsReducer,
// });

// const store = configureStore({ reducer: rootReducer });
// type RootState = ReturnType<typeof store.getState>;
// type AppDispatch = ThunkDispatch<RootState, unknown, ActionsType>;
// type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, ActionsType>;
// const useAppDispatch = () => useDispatch<AppDispatch>();
// const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

// // App
// const App = () => {
//     const dispatch = useAppDispatch();
//     const comments = useAppSelector((state) => state.comments);

//     useEffect(() => {
//         dispatch(getCommentsTC());
//     }, []);

//     const addCommentHandler = () => {
//         dispatch(addCommentTC())
//     };

//     return (
//         <>
//             <h1>📝 Список комментариев</h1>
//             <button style={{ marginBottom: "10px" }} onClick={addCommentHandler}>
//                 Добавить новый комментарий
//             </button>
//             {comments.map((p) => {
//                 return (
//                     <div key={p.id}>
//                         <b>описание</b>: {p.body}
//                     </div>
//                 );
//             })}
//         </>
//     );
// };

// const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
// root.render(
//     <Provider store={store}>
//         <App />
//     </Provider>,
// );

// // 📜 Описание:
// // При нажатии на кнопку "Добавить новый комментарий" комментарий должен добавиться,
// // но появляется alert.
// // Вместо alerta напишите код, чтобы комментарий добавлялся.
// // Правильную версию строки напишите в качестве ответа.

// // 🖥 Пример ответа: return instance.get<CommentType[]>('comments?_limit=10')





// import axios from "axios";
// import React, { useEffect } from "react";
// import ReactDOM from "react-dom/client";
// import { Provider, TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
// import { ThunkAction, ThunkDispatch } from "redux-thunk";
// import { configureStore, combineReducers } from "@reduxjs/toolkit";

// // Types
// type CommentType = {
//     postId: string;
//     id: string;
//     name: string;
//     email: string;
//     body: string;
// };

// // Api
// const instance = axios.create({ baseURL: "https://exams-frontend.kimitsu.it-incubator.io/api/" });

// const commentsAPI = {
//     getComments() {
//         return instance.get<CommentType[]>("comments");
//     },
// };

// // Reducer
// const initState = [] as CommentType[];

// type InitStateType = typeof initState;

// const commentsReducer = (state: InitStateType = initState, action: ActionsType): InitStateType => {
//     switch (action.type) {
//         case "COMMENTS/GET-COMMENTS":
//             return action.comments;
//         default:
//             return state;
//     }
// };

// const getCommentsAC = (comments: CommentType[]) =>
//     ({ type: "COMMENTS/GET-COMMENTS", comments }) as const;
// type ActionsType = ReturnType<typeof getCommentsAC>;

// const getCommentsTC = (): ThunkAction<void, RootState, unknown, ActionsType> => (dispatch) => {
//     commentsAPI.getComments().then((res) => {
//         dispatch(getCommentsAC(res.data));
//     });
// };

// // Store
// const rootReducer = combineReducers({
//     comments: commentsReducer,
// });

// const store = configureStore({ reducer: rootReducer });
// type RootState = ReturnType<typeof store.getState>;
// type AppDispatch = ThunkDispatch<RootState, unknown, ActionsType>;
// const useAppDispatch = () => useDispatch<AppDispatch>();
// const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

// // App
// export const App = () => {
//     const comments = useAppSelector((state) => state.comments);
//     const dispatch = useAppDispatch();

//     useEffect(() => {
//         dispatch(getCommentsTC());
//     }, []);

//     return (
//         <>
//             <h1>📝 Список комментариев</h1>
//             {comments.map((c) => {
//                 return (
//                     <div key={c.id}>
//                         <b>Comment</b>: {c.body}{" "}
//                     </div>
//                 );
//             })}
//         </>
//     );
// };

// const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
// root.render(
//     <Provider store={store}>
//         <App />
//     </Provider>,
// );

// // 📜 Описание:
// // Ваша задача стоит в том чтобы правильно передать нужные типы в дженериковый тип ThunkAction<any, any, any, any>.
// // Что нужно написать вместо any, any, any, any чтобы правильно типизировать thunk creator?
// // Ответ дайте через пробел

// // 🖥 Пример ответа: unknown status isDone void





// import axios from "axios";
// import React, { useEffect } from "react";
// import ReactDOM from "react-dom/client";
// import { Provider, TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
// import { ThunkDispatch } from "redux-thunk";
// import { configureStore, combineReducers } from "@reduxjs/toolkit";

// // Types
// type CommentType = {
//     postId: string;
//     id: string;
//     name: string;
//     email: string;
//     body: string;
// };

// // Api
// const instance = axios.create({ baseURL: "https://exams-frontend.kimitsu.it-incubator.io/api/" });

// const commentsAPI = {
//     getComments() {
//         return instance.get<CommentType[]>("comments");
//     },
// };

// // Reducer
// const initState = [] as CommentType[];

// type InitStateType = typeof initState;

// const commentsReducer = (state: InitStateType = initState, action: ActionsType): InitStateType => {
//     switch (action.type) {
//         case "COMMENTS/GET-COMMENTS":
//             return action.comments;
//         default:
//             return state;
//     }
// };

// const getCommentsAC = (comments: CommentType[]) =>
//     ({ type: "COMMENTS/GET-COMMENTS", comments }) as const;
// type ActionsType = ReturnType<typeof getCommentsAC>;

// const getCommentsTC = () => (dispatch: DispatchType) => {
//     commentsAPI.getComments().then((res) => {
//         dispatch(getCommentsAC(res.data));
//     });
// };

// // Store
// const rootReducer = combineReducers({
//     comments: commentsReducer,
// });

// const store = configureStore({ reducer: rootReducer });
// type RootState = ReturnType<typeof rootReducer>;
// type DispatchType = ThunkDispatch<RootState, unknown, ActionsType>;
// const useAppDispatch = () => useDispatch<DispatchType>();
// const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

// // App
// export const App = () => {
//     const comments = useAppSelector((state) => state.comments);
//     const dispatch = useAppDispatch();

//     useEffect(() => {
//         dispatch(getCommentsTC());
//     }, []);

//     return (
//         <>
//             <h1>📝 Список комментариев</h1>
//             {comments.map((c) => {
//                 return (
//                     <div key={c.id}>
//                         <b>Comment</b>: {c.body}{" "}
//                     </div>
//                 );
//             })}
//         </>
//     );
// };

// const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
// root.render(
//     <Provider store={store}>
//         <App />
//     </Provider>,
// );

// // 📜 Описание:
// // Ваша задача стоит в том чтобы правильно передать нужные типы в дженериковый тип ThunkDispatch<any, any, any>.
// // Что нужно написать вместо any, any, any чтобы правильно типизировать dispatch ?
// // Ответ дайте через пробел

// // 🖥 Пример ответа: unknown status isDone




// import { useEffect } from "react";
// import ReactDOM from "react-dom/client";
// import { Provider, TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
// import { ThunkAction, ThunkDispatch, thunk } from "redux-thunk";
// import axios from "axios";
// import { configureStore, combineReducers, applyMiddleware } from "@reduxjs/toolkit";

// // Types
// type TodoType = {
//     id: string;
//     title: string;
//     order: number;
//     createdAt: string;
//     updatedAt: string;
//     completed: boolean;
// };

// // Api
// const instance = axios.create({ baseURL: "https://exams-frontend.kimitsu.it-incubator.io/api/" });

// const todosAPI = {
//     getTodos() {
//         return instance.get<TodoType[]>("todos");
//     },
//     changeTodoStatus(id: string, completed: boolean) {
//         return instance.put(`todos/${id}`, { completed });
//     },
// };

// // Reducer
// const initState = [] as TodoType[];

// type InitStateType = typeof initState;

// const todosReducer = (state: InitStateType = initState, action: ActionsType) => {
//     switch (action.type) {
//         case "TODOS/GET-TODOS":
//             return action.todos;

//         case "TODOS/CHANGE-TODO-STATUS":
//             return state.map((t) => {
//                 if (t.id === action.todo.id) {
//                     return { ...t, completed: action.todo.completed };
//                 } else {
//                     return t;
//                 }
//             });

//         default:
//             return state;
//     }
// };

// const getTodosAC = (todos: TodoType[]) => ({ type: "TODOS/GET-TODOS", todos }) as const;
// const changeTodoStatusAC = (todo: TodoType) =>
//     ({ type: "TODOS/CHANGE-TODO-STATUS", todo }) as const;
// type ActionsType = ReturnType<typeof getTodosAC> | ReturnType<typeof changeTodoStatusAC>;

// // Thunk
// const getTodosTC = (): AppThunk => dispatch => {
//     todosAPI.getTodos()
//         .then((res) => {
//             dispatch(getTodosAC(res.data));
//         });
// };

// const changeTodoStatusTC =
//     (id: string, completed: boolean): AppThunk =>
//         (dispatch) => {
//             todosAPI.changeTodoStatus(id, completed).then((res) => {
//                 dispatch(changeTodoStatusAC(res.data));
//             });
//         };

// // Store
// const rootReducer = combineReducers({
//     todos: todosReducer,
// });

// const store = configureStore({ reducer: rootReducer });
// type RootState = ReturnType<typeof store.getState>;
// type AppDispatch = ThunkDispatch<RootState, unknown, ActionsType>;
// type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, ActionsType>;
// const useAppDispatch = () => useDispatch<AppDispatch>();
// const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

// // App
// const App = () => {
//     const dispatch = useAppDispatch();
//     const todos = useAppSelector((state) => state.todos);

//     useEffect(() => {
//         dispatch(getTodosTC());
//     }, []);


//     const changeStatusHandler = (id: string, completed: boolean) => {
//         dispatch(changeTodoStatusTC(id, completed));
//     };

//     return (
//         <>
//             <h2>✅ Список тудулистов</h2>
//             {todos.length ? (
//                 todos.map((t) => {
//                     return (
//                         <div style={t.completed ? { color: "grey" } : {}} key={t.id}>
//                             <input
//                                 type="checkbox"
//                                 checked={t.completed}
//                                 onChange={() => changeStatusHandler(t.id, !t.completed)}
//                             />
//                             <b>Описание</b>: {t.title}
//                         </div>
//                     );
//                 })
//             ) : (
//                 <h2>Тудулистов нету 😥</h2>
//             )}
//         </>
//     );
// };

// const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
// root.render(
//     <Provider store={store}>
//         <App />
//     </Provider>,
// );

// // 📜 Описание:
// // При загрузке приложения вы должны увидеть список тудулистов,
// // но из-за невнимательности была допущена ошибка.
// // Найдите и исправьте ошибку.
// // Исправленную версию строки напишите в качестве ответа.

// // 🖥 Пример ответа: type InitStateType = typeof initState





// import React, { useEffect } from "react";
// import ReactDOM from "react-dom/client";
// import { ThunkAction, ThunkDispatch } from "redux-thunk";
// import { Provider, TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
// import axios from "axios";
// import { configureStore, combineReducers } from "@reduxjs/toolkit";

// // Types
// type PostType = {
//     body: string;
//     id: string;
//     title: string;
//     userId: string;
// };

// type PayloadType = {
//     title: string;
//     body?: string;
// };

// // Api
// const instance = axios.create({ baseURL: "https://exams-frontend.kimitsu.it-incubator.io/api/" });

// const postsAPI = {
//     getPosts() {
//         return instance.get<PostType[]>("posts");
//     },
//     updatePostTitle(postId: string, post: PayloadType) {
//         return instance.put<PostType>(`posts/${postId}`, post);
//     },
// };

// // Reducer
// const initState = [] as PostType[];

// type InitStateType = typeof initState;

// const postsReducer = (state: InitStateType = initState, action: ActionsType): InitStateType => {
//     switch (action.type) {
//         case "POSTS/GET-POSTS":
//             return action.posts;

//         case "POSTS/UPDATE-POST-TITLE":
//             return state.map((p) => {
//                 if (p.id === action.post.id) {
//                     return { ...p, title: action.post.title };
//                 } else {
//                     return p;
//                 }
//             });

//         default:
//             return state;
//     }
// };

// const getPostsAC = (posts: PostType[]) => ({ type: "POSTS/GET-POSTS", posts }) as const;
// const updatePostTitleAC = (post: PostType) => ({ type: "POSTS/UPDATE-POST-TITLE", post }) as const;
// type ActionsType = ReturnType<typeof getPostsAC> | ReturnType<typeof updatePostTitleAC>;

// const getPostsTC = (): AppThunk => (dispatch) => {
//     postsAPI.getPosts().then((res) => {
//         dispatch(getPostsAC(res.data));
//     });
// };

// const updatePostTC =
//     (postId: string): AppThunk =>
//         (dispatch, getState: any) => {
//             try {
//                 const currentPost = getState().posts.find((p: PostType) => p.id !== postId);

//                 if (currentPost) {
//                     const payload = { title: "Это просто заглушка. Backend сам сгенерирует новый title" };
//                     postsAPI.updatePostTitle(postId, payload).then((res) => {
//                         dispatch(updatePostTitleAC(res.data));
//                     });
//                 }
//             } catch (e) {
//                 alert("Обновить пост не удалось 😢");
//             }
//         };

// // Store
// const rootReducer = combineReducers({
//     posts: postsReducer,
// });

// const store = configureStore({ reducer: rootReducer });
// type RootState = ReturnType<typeof store.getState>;
// type AppDispatch = ThunkDispatch<RootState, unknown, ActionsType>;
// type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, ActionsType>;
// const useAppDispatch = () => useDispatch<AppDispatch>();
// const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

// // App
// const App = () => {
//     const dispatch = useAppDispatch();
//     const posts = useAppSelector((state) => state.posts);

//     useEffect(() => {
//         dispatch(getPostsTC());
//     }, []);

//     const updatePostHandler = (postId: string) => {

//         dispatch(updatePostTC(postId));
//     };

//     return (
//         <>
//             <h1>📜 Список постов</h1>
//             {posts.map((p) => {
//                 return (
//                     <div key={p.id}>
//                         <b>title</b>: {p.title}
//                         <button onClick={() => updatePostHandler(p.id)}>Обновить пост</button>
//                     </div>
//                 );
//             })}
//         </>
//     );
// };

// const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
// root.render(
//     <Provider store={store}>
//         <App />
//     </Provider>,
// );

// // 📜 Описание:
// // Попробуйте обновить пост и вы увидите alert с ошибкой.
// // Debugger / network / console.log вам в помощь
// // Найдите ошибку и вставьте исправленную строку кода в качестве ответа.

// // 🖥 Пример ответа: const payload = {...currentPost, tile: 'Летим 🚀'}




// import React from 'react'
// import ReactDOM from 'react-dom/client';


// const thunkCreator = () => (dispatch: any, getState: any) => {
//     // сode...
// }


// // App
// const App = () => {
//     return (
//         <>
//             <h1>В этом задании смотреть на экран не нужно. Ничего не изменится 😈</h1>
//             <p>Читайте описание к заданию</p>
//         </>
//     )
// }

// const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
// root.render(<App />)

// // 📜 Описание:
// // Вместо XXX и YYY через пробел напишите параметры которые приходят в санку.
// //
// // 🖥 Пример ответа: useCallback state



// import React, { useEffect } from "react";
// import ReactDOM from "react-dom/client";
// import { Provider, TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
// import axios from "axios";
// import { ThunkAction, ThunkDispatch } from "redux-thunk";
// import { configureStore, combineReducers } from "@reduxjs/toolkit";

// // Types
// type PostType = {
//     id: string;
//     body: string;
//     title: string;
//     userId: string;
// };

// // Api
// const instance = axios.create({ baseURL: "https://exams-frontend.kimitsu.it-incubator.io/api/" });

// const postsAPI = {
//     getPosts() {
//         return instance.get<PostType[]>("posts");
//     },
// };

// // Reducer
// const initState = [] as PostType[];

// type InitStateType = typeof initState;

// const postsReducer = (
//     state: InitStateType = initState,
//     action: GetPostsActionType,
// ): InitStateType => {
//     switch (action.type) {
//         case "POSTS/GET-POSTS": {
//             return action.posts;
//         }
//         default:
//             return state;
//     }

// };

// const getPostsAC = (posts: PostType[]) => ({ type: "POSTS/GET-POSTS", posts }) as const;
// type GetPostsActionType = ReturnType<typeof getPostsAC>;

// const getPostsTC = (): AppThunk => (dispatch) => {

//     postsAPI.getPosts().then((res) => {

//         dispatch(getPostsAC(res.data));
//     });
// };

// // Store
// const rootReducer = combineReducers({
//     posts: postsReducer,
// });

// const store = configureStore({ reducer: rootReducer });
// type RootState = ReturnType<typeof store.getState>;
// type AppDispatch = ThunkDispatch<RootState, unknown, GetPostsActionType>;
// type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, GetPostsActionType>;
// const useAppDispatch = () => useDispatch<AppDispatch>();
// const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

// // App
// const App = () => {
//     const dispatch = useAppDispatch();
//     const posts = useAppSelector((state) => state.posts);

//     useEffect(() => {

//         dispatch(getPostsTC());
//     }, []);

//     return (
//         <>
//             <h1>📜 Список постов</h1>
//             {posts.length ? (
//                 posts.map((p) => {
//                     return (
//                         <div key={p.id}>
//                             <b>title</b>: {p.title}
//                         </div>
//                     );
//                 })
//             ) : (
//                 <h2>Постов нету 😥</h2>
//             )}
//         </>
//     );
// };

// const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
// root.render(
//     <Provider store={store}>
//         <App />
//     </Provider>,
// );

// // 📜 Описание:
// // При загрузке приложения вы должны увидеть список постов,
// // но из-за невнимательности была допущена ошибка.

// // Найдите и исправьте ошибку
// // Исправленную версию строки напишите в качестве ответа.
// // 🖥 Пример ответа: type InitStateType = typeof initState

// // P.S. Эта ошибка из реальной жизни, студенты так часто ошибаются и не могут понять в чем дело.








//15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15
//15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15
//15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15
//15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15
//15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15





// import React, { useEffect } from "react";
// import ReactDOM from "react-dom/client";
// import { Provider, TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
// import { ThunkAction, ThunkDispatch } from "redux-thunk";
// import axios, { AxiosError } from "axios";
// import { configureStore, combineReducers } from "@reduxjs/toolkit";

// // Types
// type CommentType = {
//     postId: string;
//     id: string;
//     name: string;
//     email: string;
//     body: string;
// };

// // Api
// const instance = axios.create({ baseURL: "https://exams-frontend.kimitsu.it-incubator.io/api/" });

// const commentsAPI = {
//     getComments() {
//         return instance.get<CommentType[]>("comment");
//     },
// };

// // Reducer
// const initState = {
//     comments: [] as CommentType[],
// };

// type InitStateType = typeof initState;

// const appReducer = (state: InitStateType = initState, action: ActionsType) => {
//     switch (action.type) {
//         case "COMMENTS/GET-COMMENTS":
//             return { ...state, comments: action.comments };

//         default:
//             return state;
//     }
// };

// const getCommentsAC = (comments: CommentType[]) =>
//     ({ type: "COMMENTS/GET-COMMENTS", comments }) as const;
// type ActionsType = ReturnType<typeof getCommentsAC>;

// // Thunk
// const getCommentsTC = (): AppThunk => (dispatch) => {

//     commentsAPI
//         .getComments()
//         .then((res) => {
//             dispatch(getCommentsAC(res.data));
//         })
//         .catch((e: AxiosError) => {
//             alert(`Сообщение об ошибке: ${e.message}`);
//         });
// };

// // Store
// const rootReducer = combineReducers({
//     app: appReducer,
// });

// const store = configureStore({ reducer: rootReducer });
// type RootState = ReturnType<typeof store.getState>;
// type AppDispatch = ThunkDispatch<RootState, unknown, ActionsType>;
// type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, ActionsType>;
// const useAppDispatch = () => useDispatch<AppDispatch>();
// const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

// // Components
// export const App = () => {
//     const comments = useAppSelector((state) => state.app.comments);
//     const dispatch = useAppDispatch();

//     useEffect(() => {

//         dispatch(getCommentsTC());
//     }, []);

//     return (
//         <>
//             <h1>📝 Список комментариев</h1>
//             {comments.length ? (
//                 comments.map((c) => {
//                     return (
//                         <div key={c.id}>
//                             <b>Comment</b>: {c.body}{" "}
//                         </div>
//                     );
//                 })
//             ) : (
//                 <h3>❌ Комментарии не подгрузились. Произошла какая-то ошибка. Найди и исправь ее</h3>
//             )}
//         </>
//     );
// };

// const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
// root.render(
//     <Provider store={store}>
//         <App />
//     </Provider>,
// );

// // 📜 Описание:
// // ❌ Комментарии не подгрузились. Произошла какая-то ошибка.
// // В данном задании вам нужно найти ошибку и починить приложение.
// // Если сделаете все верно, то увидите комментарии.
// // В качестве ответа указать исправленную строку коду

// // 🖥 Пример ответа: const store = createStore(rootReducer, applyMiddleware(thunk))





// import React from "react";
// import ReactDOM from "react-dom/client";
// import { Provider, TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
// import axios from "axios";
// import { ThunkAction, ThunkDispatch } from "redux-thunk";
// import { configureStore, combineReducers } from "@reduxjs/toolkit";

// // Types
// type PhotoType = {
//     albumId: string;
//     id: string;
//     title: string;
//     url: string;
// };

// // Api
// const instance = axios.create({ baseURL: "https://exams-frontend.kimitsu.it-incubator.io/api/" });

// const photosAPI = {
//     getPhotos() {
//         return instance.get<PhotoType[]>("photos?delay=2");
//     },
// };

// // Reducer
// const initState = {
//     isLoading: false,
//     photos: [] as PhotoType[],
// };

// type InitStateType = typeof initState;

// const photoReducer = (state: InitStateType = initState, action: ActionsType): InitStateType => {
//     switch (action.type) {
//         case "PHOTO/GET-PHOTOS":
//             return { ...state, photos: action.photos };
//         case "PHOTO/IS-LOADING":
//             return { ...state, isLoading: action.isLoading };
//         default:
//             return state;
//     }
// };

// const getPhotosAC = (photos: PhotoType[]) => ({ type: "PHOTO/GET-PHOTOS", photos }) as const;
// const setLoadingAC = (isLoading: boolean) => ({ type: "PHOTO/IS-LOADING", isLoading }) as const;
// type ActionsType = ReturnType<typeof getPhotosAC> | ReturnType<typeof setLoadingAC>;

// const getPhotosTC = (): AppThunk => (dispatch) => {
//     dispatch(setLoadingAC(true));
//     photosAPI.getPhotos().then((res) => {
//         dispatch(getPhotosAC(res.data));
//         dispatch(setLoadingAC(false));
//     });
// };

// // Store
// const rootReducer = combineReducers({
//     photo: photoReducer,
// });

// const store = configureStore({ reducer: rootReducer });
// type RootState = ReturnType<typeof store.getState>;
// type AppDispatch = ThunkDispatch<RootState, unknown, ActionsType>;
// type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, ActionsType>;
// const useAppDispatch = () => useDispatch<AppDispatch>();
// const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

// // Loader
// export const Loader = () => {
//     return <h1>Loading ...</h1>;
// };

// // App
// const App = () => {
//     const dispatch = useAppDispatch();
//     const photos = useAppSelector((state) => state.photo.photos);
//     const isLoading = useAppSelector((state) => state.photo.isLoading);

//     const getPhotosHandler = () => {
//         dispatch(getPhotosTC());
//     };

//     return (
//         <>
//             <h1>📸 Фото</h1>
//             <button onClick={getPhotosHandler}>Подгрузить фотографии</button>
//             {isLoading && <Loader />}
//             <div style={{ display: "flex", gap: "20px", margin: "20px" }}>
//                 {photos.map((p) => {
//                     return (
//                         <div key={p.id}>
//                             <b>title</b>: {p.title}
//                             <div>
//                                 <img src={p.url} alt="" />
//                             </div>
//                         </div>
//                     );
//                 })}
//             </div>
//         </>
//     );
// };

// const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
// root.render(
//     <Provider store={store}>
//         <App />
//     </Provider>,
// );

// // 📜 Описание:
// // При нажатии на кнопку "Подгрузить фотографии" вы должны увидеть Loading...,
// // и через 3 секунды непосредственно фотографии.
// // Но после подгрузки данных Loader не убирается.
// // Какой код нужно написать, чтобы Loader перестал отображаться после получения данных
// // В качестве ответа напишите строку кода.

// // 🖥 Пример ответа: console.log('stop Loader')







// import React from "react";
// import ReactDOM from "react-dom/client";
// import { Provider, TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
// import axios, { AxiosError } from "axios";
// import { ThunkAction, ThunkDispatch } from "redux-thunk";
// import { configureStore, combineReducers } from "@reduxjs/toolkit";

// // Types
// type PhotoType = {
//     albumId: string;
//     id: string;
//     title: string;
//     url: string;
// };

// // Api
// const instance = axios.create({ baseURL: "https://exams-frontend.kimitsu.it-incubator.io/api/" });

// const photosAPI = {
//     getPhotos() {
//         return instance.get<PhotoType[]>("pictures?delay=3");
//     },
// };

// // Reducer
// const initState = {
//     isLoading: false,
//     error: null as string | null,
//     photos: [] as PhotoType[],
// };

// type InitStateType = typeof initState;

// const appReducer = (state: InitStateType = initState, action: ActionsType): InitStateType => {
//     switch (action.type) {
//         case "PHOTO/GET-PHOTOS":
//             return { ...state, photos: action.photos };
//         case "PHOTO/IS-LOADING":
//             return { ...state, isLoading: action.isLoading };
//         case "PHOTO/SET-ERROR":
//             return { ...state, error: action.error };
//         default:
//             return state;
//     }
// };

// const getPhotosAC = (photos: PhotoType[]) => ({ type: "PHOTO/GET-PHOTOS", photos }) as const;
// const setLoadingAC = (isLoading: boolean) => ({ type: "PHOTO/IS-LOADING", isLoading }) as const;
// const setError = (error: string | null) => ({ type: "PHOTO/SET-ERROR", error }) as const;
// type ActionsType =
//     | ReturnType<typeof getPhotosAC>
//     | ReturnType<typeof setLoadingAC>
//     | ReturnType<typeof setError>;

// const getPhotosTC = (): AppThunk => (dispatch) => {
//     dispatch(setLoadingAC(true));
//     photosAPI
//         .getPhotos()
//         .then((res) => {
//             dispatch(getPhotosAC(res.data));
//         })
//         .catch((e: AxiosError) => {
//             dispatch(setError(e.message));
//         })
//         .finally(() => { dispatch(setLoadingAC(false)) })
// };

// // Store
// const rootReducer = combineReducers({
//     app: appReducer,
// });

// const store = configureStore({ reducer: rootReducer });
// type RootState = ReturnType<typeof store.getState>;
// type AppDispatch = ThunkDispatch<RootState, unknown, ActionsType>;
// type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, ActionsType>;
// const useAppDispatch = () => useDispatch<AppDispatch>();
// const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

// // Loader
// export const Loader = () => {
//     return <h1>Loading ...</h1>;
// };

// // App
// const App = () => {
//     const dispatch = useAppDispatch();

//     const photos = useAppSelector((state) => state.app.photos);
//     const isLoading = useAppSelector((state) => state.app.isLoading);
//     const error = useAppSelector((state) => state.app.error);

//     const getPhotosHandler = () => {
//         dispatch(getPhotosTC());
//     };

//     return (
//         <>
//             <h1>📸 Фото</h1>
//             <h2 style={{ color: "red" }}>{!!error && error}</h2>
//             {isLoading && <Loader />}
//             <button onClick={getPhotosHandler}>Подгрузить фотографии</button>
//             <div style={{ display: "flex", gap: "20px", margin: "20px" }}>
//                 {photos.map((p) => {
//                     return (
//                         <div key={p.id}>
//                             <b>title</b>: {p.title}
//                             <div>
//                                 <img src={p.url} alt="" />
//                             </div>
//                         </div>
//                     );
//                 })}
//             </div>
//         </>
//     );
// };

// const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
// root.render(
//     <Provider store={store}>
//         <App />
//     </Provider>,
// );

// // 📜 Описание:
// // При нажатии на кнопку "Подгрузить фотографии" появляется Loading... и сообщение об ошибке.
// // Ваша задача состоит в том, чтобы спрятать Loader независимо от того, как завершится запрос на сервер.
// // Т.е. если ответ придет успешный - Loader убираем
// //      если ответ придет с ошибкой - Loader тоже убираем.
// // Напишите код, с помощью которого можно реализовать данную задачу
// // В качестве ответа напишите строку кода.

// // 🖥 Пример ответа: .then(() =>  dispatch(getPhotosAC(res.data)))





// import React, { useEffect } from "react";
// import ReactDOM from "react-dom/client";
// import { Provider, TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
// import { ThunkAction, ThunkDispatch } from "redux-thunk";
// import axios, { AxiosError } from "axios";
// import { combineReducers, configureStore } from "@reduxjs/toolkit";

// // Types
// type PostType = {
//     id: string;
//     body: string;
//     title: string;
//     userId: string;
// };

// // Api
// const instance = axios.create({ baseURL: "https://exams-frontend.kimitsu.it-incubator.io/api/ " });

// const postsAPI = {
//     getPosts() {
//         return instance.get<PostType[]>("posts");
//     },
// };

// // Reducer
// const initState = {
//     error: null as string | null,
//     posts: [] as PostType[],
// };

// type InitStateType = typeof initState;

// const appReducer = (state: InitStateType = initState, action: ActionsType): InitStateType => {
//     switch (action.type) {
//         case "POSTS/GET-POSTS":
//             return { ...state, posts: action.posts };

//         case "POSTS/SET-ERROR":
//             return { ...state, error: action.error };

//         default:
//             return state;
//     }
// };

// const getPostsAC = (posts: PostType[]) => ({ type: "POSTS/GET-POSTS", posts }) as const;
// const setErrorAC = (error: string | null) => ({ type: "POSTS/SET-ERROR", error }) as const;
// type ActionsType = ReturnType<typeof getPostsAC> | ReturnType<typeof setErrorAC>;

// // Thunk
// const getPostsTC = (): AppThunk => (dispatch) => {
//     postsAPI
//         .getPosts()
//         .then((res) => {
//             dispatch(getPostsAC(res.data));
//         })
//         .catch((e: AxiosError) => {
//             dispatch(setErrorAC(e.message))
//         });
// };

// // Store
// const rootReducer = combineReducers({
//     app: appReducer,
// });

// const store = configureStore({ reducer: rootReducer });
// type RootState = ReturnType<typeof store.getState>;
// type AppDispatch = ThunkDispatch<RootState, unknown, ActionsType>;
// type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, ActionsType>;
// const useAppDispatch = () => useDispatch<AppDispatch>();
// const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

// // Components
// export const App = () => {
//     const dispatch = useAppDispatch();

//     const posts = useAppSelector((state) => state.app.posts);
//     const error = useAppSelector((state) => state.app.error);

//     useEffect(() => {
//         dispatch(getPostsTC());
//     }, []);

//     return (
//         <>
//             <h1>📜 Список постов</h1>
//             {posts.length ? (
//                 posts.map((c) => {
//                     return (
//                         <div key={c.id}>
//                             <b>Описание</b>: {c.body}{" "}
//                         </div>
//                     );
//                 })
//             ) : (
//                 <h3>
//                     ❌ Посты не подгрузились. Произошла какая-то ошибка. Выведите сообщение об ошибке на экран
//                 </h3>
//             )}
//             <h2 style={{ color: "red" }}>{!!error && error}</h2>
//         </>
//     );
// };

// const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
// root.render(
//     <Provider store={store}>
//         <App />
//     </Provider>,
// );

// // 📜 Описание:
// // ❌ Посты не подгрузились. Произошла какая-то ошибка.
// // Чинить приложение не нужно (если только для себя, в ответе это не учитывается).
// // Задача: вывести сообщение об ошибке на экран.
// // В качестве ответа указать строку коду, которая позволит это осуществить

// // 🖥 Пример ответа: const store = createStore(rootReducer, applyMiddleware(thunk))






// import React, { useState } from "react";
// import ReactDOM from "react-dom/client";
// import { Provider, TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
// import axios, { AxiosError } from "axios";
// import { ThunkAction, ThunkDispatch } from "redux-thunk";
// import { configureStore, combineReducers } from "@reduxjs/toolkit";

// // Types
// type NullableType<T> = null | T;

// type LoginFieldsType = {
//     email: string;
//     password: string;
// };

// // API
// const instance = axios.create({ baseURL: "https://exams-frontend.kimitsu.it-incubator.io/api/" });

// const api = {
//     login(data: LoginFieldsType) {
//         return instance.post("auth/login", data);
//     },
// };

// // Reducer
// const initState = {
//     isLoading: false,
//     error: null as NullableType<string>,
//     isLoggedIn: false,
// };

// type InitStateType = typeof initState;

// const appReducer = (state: InitStateType = initState, action: ActionsType): InitStateType => {
//     switch (action.type) {
//         case "APP/SET-IS-LOGGED-IN":
//             return { ...state, isLoggedIn: action.isLoggedIn };
//         case "APP/IS-LOADING":
//             return { ...state, isLoading: action.isLoading };
//         case "APP/SET-ERROR":
//             return { ...state, error: action.error };
//         default:
//             return state;
//     }
// };

// // Actions
// const setIsLoggedIn = (isLoggedIn: boolean) =>
//     ({ type: "APP/SET-IS-LOGGED-IN", isLoggedIn }) as const;
// const setLoadingAC = (isLoading: boolean) => ({ type: "APP/IS-LOADING", isLoading }) as const;
// const setError = (error: string | null) => ({ type: "APP/SET-ERROR", error }) as const;
// type ActionsType =
//     | ReturnType<typeof setIsLoggedIn>
//     | ReturnType<typeof setLoadingAC>
//     | ReturnType<typeof setError>;

// // Thunk
// const loginTC =
//     (values: LoginFieldsType): AppThunk =>
//         (dispatch) => {
//             dispatch(setLoadingAC(true));
//             api
//                 .login(values)
//                 .then((res) => {
//                     dispatch(setIsLoggedIn(true));
//                     alert("Вы залогинились успешно");
//                 })
//                 .catch((e) => {
//                     // console.log(e.data[0])
//                     // dispatch(setError(e.errors))
//                 })
//                 .finally(() => {
//                     dispatch(setLoadingAC(false));
//                 });
//         };

// // Store
// const rootReducer = combineReducers({
//     app: appReducer,
// });

// const store = configureStore({ reducer: rootReducer });
// type RootState = ReturnType<typeof store.getState>;
// type AppDispatch = ThunkDispatch<RootState, unknown, ActionsType>;
// type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, ActionsType>;
// const useAppDispatch = () => useDispatch<AppDispatch>();
// const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

// // Loader
// export const Loader = () => {
//     return <h1>Loading ...</h1>;
// };

// // App
// export const App = () => {
//     const dispatch = useAppDispatch();

//     const [form, setForm] = useState<LoginFieldsType>({ email: "", password: "" });

//     const error = useAppSelector((state) => state.app.error);
//     const isLoading = useAppSelector((state) => state.app.isLoading);

//     const changeFormValuesHandler = (e: React.ChangeEvent<HTMLInputElement>, field: string) => {
//         if (field === "email") {
//             setForm({ ...form, email: e.currentTarget.value });
//         }
//         if (field === "password") {
//             setForm({ ...form, password: e.currentTarget.value });
//         }
//     };

//     const submitForm = (e: React.MouseEvent<HTMLButtonElement>) => {
//         e.preventDefault();
//         dispatch(loginTC(form));
//     };

//     return (
//         <div>
//             {!!error && <h2 style={{ color: "red" }}>{error}</h2>}
//             {isLoading && <Loader />}
//             <form>
//                 <div>
//                     <input
//                         placeholder={"Введите email"}
//                         value={form.email}
//                         onChange={(e) => changeFormValuesHandler(e, "email")}
//                     />
//                 </div>
//                 <div>
//                     <input
//                         type={"password"}
//                         placeholder={"Введите пароль"}
//                         value={form.password}
//                         onChange={(e) => changeFormValuesHandler(e, "password")}
//                     />
//                 </div>
//                 <button type="submit" onClick={submitForm}>
//                     Залогиниться
//                 </button>
//             </form>
//         </div>
//     );
// };

// const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
// root.render(
//     <Provider store={store}>
//         <App />
//     </Provider>,
// );

// // 📜 Описание:
// // Перед вами форма логинизации. Введите любые логин и пароль и попробуйте залогиниться.
// // У вас это навряд ли получится 😈, т.к. вы не знаете email и пароль.
// // Откройте Network и проанализируйте запрос.
// // Задача: вывести сообщение об ошибке, которую возвращает сервер, говорящую о том что email или password некорректны.

// // В качестве ответа указать строку коду, которая позволит это осуществить.
// // 🖥 Пример ответа: dispatch('Error message')
// // ❗ Типизировать ошибку не надо, т.к. там есть много нюансов, о которых вы узнаете позже






// import React, { useEffect } from "react";
// import ReactDOM from "react-dom/client";
// import { Provider, TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
// import { ThunkAction, ThunkDispatch } from "redux-thunk";
// import axios from "axios";
// import { configureStore, combineReducers } from "@reduxjs/toolkit";

// // Types
// type PostDomainType = PostType & {
//     isDisabled: boolean;
// };

// type PostType = {
//     body: string;
//     id: string;
//     title: string;
//     userId: string;
// };

// // Api
// const instance = axios.create({ baseURL: "https://exams-frontend.kimitsu.it-incubator.io/api/" });

// const postsAPI = {
//     getPosts() {
//         return instance.get<PostType[]>("posts");
//     },
//     deletePost(id: string) {
//         return instance.delete<{ message: string }>(`posts/${id}?delay=3`);
//     },
// };

// // Reducer
// const initState = {
//     isLoading: false,
//     posts: [] as PostDomainType[],
// };

// type InitStateType = typeof initState;

// const postsReducer = (state: InitStateType = initState, action: ActionsType): InitStateType => {
//     switch (action.type) {
//         case "POSTS/GET-POSTS":
//             return {
//                 ...state,
//                 posts: action.posts.map((t) => {
//                     return { ...t, isDisabled: false };
//                 }),
//             };

//         case "POSTS/DELETE-POST":
//             return { ...state, posts: state.posts.filter((t) => t.id !== action.id) };

//         case "POSTS/IS-LOADING":
//             return { ...state, isLoading: action.isLoading };

//         case "POSTS/IS-DISABLED":
//             return {
//                 ...state,
//                 posts: state.posts.map((t) => {
//                     if (t.id === action.id) {
//                         return { ...t, isDisabled: action.isDisabled };
//                     } else {
//                         return t;
//                     }
//                 }),
//             };

//         default:
//             return state;
//     }
// };

// const getPostsAC = (posts: PostType[]) => ({ type: "POSTS/GET-POSTS", posts }) as const;
// const deletePostAC = (id: string) => ({ type: "POSTS/DELETE-POST", id }) as const;
// const setLoadingAC = (isLoading: boolean) => ({ type: "POSTS/IS-LOADING", isLoading }) as const;
// const setIsDisabled = (isDisabled: boolean, id: string) =>
//     ({ type: "POSTS/IS-DISABLED", isDisabled, id }) as const;
// type ActionsType =
//     | ReturnType<typeof getPostsAC>
//     | ReturnType<typeof deletePostAC>
//     | ReturnType<typeof setLoadingAC>
//     | ReturnType<typeof setIsDisabled>;

// // Thunk
// const getPostsTC = (): AppThunk => (dispatch) => {
//     postsAPI.getPosts().then((res) => {
//         dispatch(getPostsAC(res.data));
//     });
// };

// const deletePostTC =
//     (id: string): AppThunk =>
//         (dispatch) => {
//             dispatch(setIsDisabled(true, id));
//             dispatch(setLoadingAC(true));
//             postsAPI.deletePost(id).then((res) => {
//                 dispatch(deletePostAC(id));
//                 dispatch(setLoadingAC(false));
//             });
//         };

// // Store
// const rootReducer = combineReducers({
//     posts: postsReducer,
// });

// const store = configureStore({ reducer: rootReducer });
// type RootState = ReturnType<typeof store.getState>;
// type AppDispatch = ThunkDispatch<RootState, unknown, ActionsType>;
// type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, ActionsType>;
// const useAppDispatch = () => useDispatch<AppDispatch>();
// const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

// // Loader
// export const Loader = () => {
//     return <h1>Loading ...</h1>;
// };

// // App
// const App = () => {
//     const dispatch = useAppDispatch();
//     const posts = useAppSelector((state) => state.posts.posts);
//     const isLoading = useAppSelector((state) => state.posts.isLoading);

//     useEffect(() => {
//         dispatch(getPostsTC());
//     }, []);

//     const deletePostHandler = (id: string) => {
//         dispatch(deletePostTC(id));
//     };

//     return (
//         <div>
//             <div style={{ position: "absolute", top: "0px" }}>{isLoading && <Loader />}</div>
//             <div style={{ marginTop: "100px" }}>
//                 <h1>📜 Список постов</h1>
//                 {posts.map((p) => {
//                     return (
//                         <div key={p.id}>
//                             <b>title</b>: {p.title}
//                             <button disabled={isLoading} style={{ marginLeft: "15px" }} onClick={() => deletePostHandler(p.id)}>
//                                 удалить пост
//                             </button>
//                         </div>
//                     );
//                 })}
//             </div>
//         </div>
//     );
// };

// const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
// root.render(
//     <Provider store={store}>
//         <App />
//     </Provider>,
// );

// // 📜 Описание:
// // Перед вами список постов.
// // Откройте network и быстро нажмите на кнопку удалить пост несколько раз подряд.
// // Откройте вкладку Preview и проанализируйте ответ с сервера
// // Первое сообщение будет "Post has been successfully deleted",
// // а следующие "Post with id: 63626ac315d01f80765587ee does not exist"
// // Т.е. бэкенд первый раз удаляет, а потом уже не может, т.к. пост удален из базы данных.

// // Ваша задача при первом клике задизаблить кнопку удаления,
// // соответсвенно не давать пользователю возможности слать повторные запросы.
// // ❗ Необходимо задизаблить кнопку именно удаляемого поста, а не все кнопки.
// // Необходимую строку кода для решения этой задачи напишите в качестве ответа.

// // 🖥 Пример ответа: style={{marginRight: '20px'}}






// import React, { useEffect } from "react";
// import ReactDOM from "react-dom/client";
// import { ThunkAction, ThunkDispatch } from "redux-thunk";
// import { Provider, TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
// import axios, { AxiosError } from "axios";
// import { configureStore, combineReducers, Dispatch } from "@reduxjs/toolkit";

// // TYPES
// type TodoType = {
//   id: string;
//   title: string;
//   order: number;
//   createdAt: string;
//   updatedAt: string;
//   completed: boolean;
// };

// type UserType = {
//   id: string;
//   name: string;
//   age: number;
// };

// type UsersResponseType = {
//   items: UserType[];
//   totalCount: number;
// };

// // API
// const instance = axios.create({ baseURL: "https://exams-frontend.kimitsu.it-incubator.io/api/" });

// const api = {
//   getTodos() {
//     return instance.get<TodoType[]>("todos");
//   },
//   getUsers() {
//     return instance.get<UsersResponseType>("users");
//   },
// };

// // Reducer
// const initState = {
//   isLoading: false,
//   error: null as string | null,
//   todos: [] as TodoType[],
//   users: [] as UserType[],
// };

// type InitStateType = typeof initState;

// const appReducer = (state: InitStateType = initState, action: ActionsType): InitStateType => {
//   switch (action.type) {
//     case "APP/GET-TODOS":
//       return { ...state, todos: action.todos };
//     case "APP/GET-USERS":
//       return { ...state, users: action.users };
//     case "APP/IS-LOADING":
//       return { ...state, isLoading: action.isLoading };
//     case "APP/SET-ERROR":
//       return { ...state, error: action.error };
//     default:
//       return state;
//   }
// };

// const getUsersAC = (users: UserType[]) => ({ type: "APP/GET-USERS", users }) as const;
// const getTodosAC = (todos: TodoType[]) => ({ type: "APP/GET-TODOS", todos }) as const;
// const setLoadingAC = (isLoading: boolean) => ({ type: "APP/IS-LOADING", isLoading }) as const;
// const setError = (error: string | null) => ({ type: "APP/SET-ERROR", error }) as const;

// type ActionsType =
//   | ReturnType<typeof getUsersAC>
//   | ReturnType<typeof getTodosAC>
//   | ReturnType<typeof setLoadingAC>
//   | ReturnType<typeof setError>;

// // Utils functions
// function baseSuccessHandler<T>(dispatch: Dispatch, actionCreator: Function, data: T) {
//   dispatch(actionCreator(data));
//   dispatch(setLoadingAC(false));
// }

// // Thunk
// const getTodosTC = (): AppThunk => (dispatch) => {
//   dispatch(setLoadingAC(true));
//   api
//     .getTodos()
//     .then((res) => {
//       // ❗❗❗ XXX ❗❗❗
//     })
//     .catch((e: AxiosError) => {
//       dispatch(setError(e.message));
//       dispatch(setLoadingAC(false));
//     });
// };

// const getUsersTC = (): AppThunk => (dispatch) => {
//   dispatch(setLoadingAC(true));
//   api
//     .getUsers()
//     .then((res) => {
//       // ❗❗❗ YYY ❗❗❗
//     })
//     .catch((e: AxiosError) => {
//       dispatch(setError(e.message));
//       dispatch(setLoadingAC(false));
//     });
// };

// // Store
// const rootReducer = combineReducers({
//   app: appReducer,
// });

// const store = configureStore({ reducer: rootReducer });
// type RootState = ReturnType<typeof store.getState>;
// type AppDispatch = ThunkDispatch<RootState, unknown, ActionsType>;
// type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, ActionsType>;
// const useAppDispatch = () => useDispatch<AppDispatch>();
// const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

// // COMPONENTS
// // Loader
// export const Loader = () => {
//   return <h1>Loading ...</h1>;
// };

// const App = () => {
//   return (
//     <>
//       <h1>✅Todos & 🙂Users</h1>
//       <div style={{ display: "flex", justifyContent: "space-evenly" }}>
//         <Todos />
//         <Users />
//       </div>
//     </>
//   );
// };

// const Todos = () => {
//   const dispatch = useAppDispatch();
//   const todos = useAppSelector((state) => state.app.todos);
//   const error = useAppSelector((state) => state.app.error);
//   const isLoading = useAppSelector((state) => state.app.isLoading);

//   useEffect(() => {
//     dispatch(getTodosTC());
//   }, []);

//   return (
//     <div>
//       <h2>✅ Список тудулистов</h2>
//       {!!error && <h2 style={{ color: "red" }}>{error}</h2>}
//       {isLoading && <Loader />}
//       {todos.map((t) => {
//         return (
//           <div style={t.completed ? { color: "grey" } : {}} key={t.id}>
//             <input type="checkbox" checked={t.completed} />
//             <b>Описание</b>: {t.title}
//           </div>
//         );
//       })}
//     </div>
//   );
// };

// const Users = () => {
//   const dispatch = useAppDispatch();
//   const users = useAppSelector((state) => state.app.users);
//   const error = useAppSelector((state) => state.app.error);
//   const isLoading = useAppSelector((state) => state.app.isLoading);

//   useEffect(() => {
//     dispatch(getUsersTC());
//   }, []);

//   return (
//     <div>
//       <h2>🙂 Список юзеров</h2>
//       {!!error && <h2 style={{ color: "red" }}>{error}</h2>}
//       {isLoading && <Loader />}
//       <div>
//         {users.map((u) => {
//           return (
//             <div key={u.id}>
//               <b>name</b>:{u.name} - <b>age</b>:{u.age}
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// };

// const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
// root.render(
//   <Provider store={store}>
//     <App />
//   </Provider>,
// );

// // 📜 Описание:
// // Перед вами список тудулистов и пользователей, которые находятся в постоянной загрузке.
// // Откройте network и вы увидите что запросы на сервер уходят и возвращаются с хорошими данными,
// // но вместо этого пользователь видит на экране Loader.
// // Для обработки успешного результата написана утилитная функция baseSuccessHandler.
// // Ваша задача воспользоваться этой функцией отобразить Todos и Users
// // Что нужно написать вместо XXX и YYY, чтобы реализовать данную задачу?
// // Ответ дайте через пробел.

// // 🖥 Пример ответа: dispatch(baseSuccessHandler(1,2,3))  dispatch(baseSuccessHandler(3,2,1)






import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import { ThunkAction, ThunkDispatch } from "redux-thunk";
import { Provider, TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import axios, { AxiosError } from "axios";
import { configureStore, combineReducers, Dispatch } from "@reduxjs/toolkit";

// TYPES
type TodoType = {
    id: string;
    title: string;
    order: number;
    createdAt: string;
    updatedAt: string;
    completed: boolean;
};

type UserType = {
    id: string;
    name: string;
    age: number;
};

type UsersResponseType = {
    items: UserType[];
    totalCount: number;
};

// API
const instance = axios.create({ baseURL: "https://exams-frontend.kimitsu.it-incubator.io/api/" });

const api = {
    getTodos() {
        return instance.get<TodoType[]>("todo");
    },
    getUsers() {
        return instance.get<UsersResponseType>("user");
    },
};

// Reducer
const initState = {
    isLoading: false,
    error: null as string | null,
    todos: [] as TodoType[],
    users: [] as UserType[],
};

type InitStateType = typeof initState;

const appReducer = (state: InitStateType = initState, action: ActionsType): InitStateType => {
    switch (action.type) {
        case "APP/GET-TODOS":
            return { ...state, todos: action.todos };
        case "APP/GET-USERS":
            return { ...state, users: action.users };
        case "APP/IS-LOADING":
            return { ...state, isLoading: action.isLoading };
        case "APP/SET-ERROR":
            return { ...state, error: action.error };
        default:
            return state;
    }
};

const getUsersAC = (users: UserType[]) => ({ type: "APP/GET-USERS", users }) as const;
const getTodosAC = (todos: TodoType[]) => ({ type: "APP/GET-TODOS", todos }) as const;
const setLoadingAC = (isLoading: boolean) => ({ type: "APP/IS-LOADING", isLoading }) as const;
const setError = (error: string | null) => ({ type: "APP/SET-ERROR", error }) as const;

type ActionsType =
    | ReturnType<typeof getUsersAC>
    | ReturnType<typeof getTodosAC>
    | ReturnType<typeof setLoadingAC>
    | ReturnType<typeof setError>;

// Utils functions
function baseErrorHandler(dispatch: Dispatch, message: string) {
    dispatch(setError(message));
    dispatch(setLoadingAC(false));
}

// Thunk
const getTodosTC = (): AppThunk => (dispatch) => {
    dispatch(setLoadingAC(true));
    api
        .getTodos()
        .then((res) => {
            dispatch(getTodosAC(res.data));
            dispatch(setLoadingAC(false));
        })
        .catch((e: AxiosError) => {
            // ❗❗❗ XXX ❗❗❗
            baseErrorHandler(dispatch, e.message)
        });
};

const getUsersTC = (): AppThunk => (dispatch) => {
    dispatch(setLoadingAC(true));
    api
        .getUsers()
        .then((res) => {
            dispatch(getUsersAC(res.data.items));
            dispatch(setLoadingAC(false));
        })
        .catch((e: AxiosError) => {
            baseErrorHandler(dispatch, e.message)
        });
};

// Store
const rootReducer = combineReducers({
    app: appReducer,
});

const store = configureStore({ reducer: rootReducer });
type RootState = ReturnType<typeof store.getState>;
type AppDispatch = ThunkDispatch<RootState, unknown, ActionsType>;
type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, ActionsType>;
const useAppDispatch = () => useDispatch<AppDispatch>();
const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

// COMPONENTS
// Loader
export const Loader = () => {
    return <h1>Loading ...</h1>;
};

const App = () => {
    return (
        <>
            <h1>✅Todos & 🙂Users</h1>
            <div style={{ display: "flex", justifyContent: "space-evenly" }}>
                <Todos />
                <Users />
            </div>
        </>
    );
};

const Todos = () => {
    const dispatch = useAppDispatch();
    const todos = useAppSelector((state) => state.app.todos);
    const error = useAppSelector((state) => state.app.error);
    const isLoading = useAppSelector((state) => state.app.isLoading);

    useEffect(() => {
        dispatch(getTodosTC());
    }, []);

    return (
        <div>
            <h2>✅ Список тудулистов</h2>
            {!!error && <h2 style={{ color: "red" }}>{error}</h2>}
            {isLoading && <Loader />}
            {todos.map((t) => {
                return (
                    <div style={t.completed ? { color: "grey" } : {}} key={t.id}>
                        <input type="checkbox" checked={t.completed} />
                        <b>Описание</b>: {t.title}
                    </div>
                );
            })}
        </div>
    );
};

const Users = () => {
    const dispatch = useAppDispatch();
    const users = useAppSelector((state) => state.app.users);
    const error = useAppSelector((state) => state.app.error);
    const isLoading = useAppSelector((state) => state.app.isLoading);

    useEffect(() => {
        dispatch(getUsersTC());
    }, []);

    return (
        <div>
            <h2>🙂 Список юзеров</h2>
            {!!error && <h2 style={{ color: "red" }}>{error}</h2>}
            {isLoading && <Loader />}
            <div>
                {users.map((u) => {
                    return (
                        <div key={u.id}>
                            <b>name</b>:{u.name} - <b>age</b>:{u.age}
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
    <Provider store={store}>
        <App />
    </Provider>,
);

// 📜 Описание:
// Перед вами список тудулистов и пользователей, которые находятся в постоянной загрузке.
// Откройте network и вы увидите что запросы падают с ошибками,
// но в коде этот никак не обрабатывается.
// Для обработки ошибок написана утилитная функция baseErrorHandler.
// Ваша задача воспользоваться этой функцией и вывести ошибки на экран.
// Что нужно написать вместо XXX, чтобы ошибки обработались и пользователь их увидел ?
//❗ Код фиксить не нужно.

// 🖥 Пример ответа: dispatch(setLoadingAC(false))