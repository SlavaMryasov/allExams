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
//     id: string;
//     title: string;
//     order: number;
//     createdAt: string;
//     updatedAt: string;
//     completed: boolean;
// };

// type UserType = {
//     id: string;
//     name: string;
//     age: number;
// };

// type UsersResponseType = {
//     items: UserType[];
//     totalCount: number;
// };

// // API
// const instance = axios.create({ baseURL: "https://exams-frontend.kimitsu.it-incubator.io/api/" });

// const api = {
//     getTodos() {
//         return instance.get<TodoType[]>("todos");
//     },
//     getUsers() {
//         return instance.get<UsersResponseType>("users");
//     },
// };

// // Reducer
// const initState = {
//     isLoading: false,
//     error: null as string | null,
//     todos: [] as TodoType[],
//     users: [] as UserType[],
// };

// type InitStateType = typeof initState;

// const appReducer = (state: InitStateType = initState, action: ActionsType): InitStateType => {
//     switch (action.type) {
//         case "APP/GET-TODOS":
//             return { ...state, todos: action.todos };
//         case "APP/GET-USERS":
//             return { ...state, users: action.users };
//         case "APP/IS-LOADING":
//             return { ...state, isLoading: action.isLoading };
//         case "APP/SET-ERROR":
//             return { ...state, error: action.error };
//         default:
//             return state;
//     }
// };

// const getUsersAC = (users: UserType[]) => ({ type: "APP/GET-USERS", users }) as const;
// const getTodosAC = (todos: TodoType[]) => ({ type: "APP/GET-TODOS", todos }) as const;
// const setLoadingAC = (isLoading: boolean) => ({ type: "APP/IS-LOADING", isLoading }) as const;
// const setError = (error: string | null) => ({ type: "APP/SET-ERROR", error }) as const;

// type ActionsType =
//     | ReturnType<typeof getUsersAC>
//     | ReturnType<typeof getTodosAC>
//     | ReturnType<typeof setLoadingAC>
//     | ReturnType<typeof setError>;

// // Utils functions
// function baseSuccessHandler<T>(dispatch: Dispatch, actionCreator: Function, data: T) {
//     dispatch(actionCreator(data));
//     dispatch(setLoadingAC(false));
// }

// // Thunk
// const getTodosTC = (): AppThunk => (dispatch) => {
//     dispatch(setLoadingAC(true));
//     api
//         .getTodos()
//         .then((res) => {
//             baseSuccessHandler(dispatch, getTodosAC, res.data)
//         })
//         .catch((e: AxiosError) => {
//             dispatch(setError(e.message));
//             dispatch(setLoadingAC(false));
//         });
// };

// const getUsersTC = (): AppThunk => (dispatch) => {
//     dispatch(setLoadingAC(true));
//     api
//         .getUsers()
//         .then((res) => {
//             baseSuccessHandler(dispatch, getUsersAC, res.data.items)
//         })
//         .catch((e: AxiosError) => {
//             dispatch(setError(e.message));
//             dispatch(setLoadingAC(false));
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

// // COMPONENTS
// // Loader
// export const Loader = () => {
//     return <h1>Loading ...</h1>;
// };

// const App = () => {
//     return (
//         <>
//             <h1>✅Todos & 🙂Users</h1>
//             <div style={{ display: "flex", justifyContent: "space-evenly" }}>
//                 <Todos />
//                 <Users />
//             </div>
//         </>
//     );
// };

// const Todos = () => {
//     const dispatch = useAppDispatch();
//     const todos = useAppSelector((state) => state.app.todos);
//     const error = useAppSelector((state) => state.app.error);
//     const isLoading = useAppSelector((state) => state.app.isLoading);

//     useEffect(() => {
//         dispatch(getTodosTC());
//     }, []);

//     return (
//         <div>
//             <h2>✅ Список тудулистов</h2>
//             {!!error && <h2 style={{ color: "red" }}>{error}</h2>}
//             {isLoading && <Loader />}
//             {todos.map((t) => {
//                 return (
//                     <div style={t.completed ? { color: "grey" } : {}} key={t.id}>
//                         <input type="checkbox" checked={t.completed} />
//                         <b>Описание</b>: {t.title}
//                     </div>
//                 );
//             })}
//         </div>
//     );
// };

// const Users = () => {
//     const dispatch = useAppDispatch();
//     const users = useAppSelector((state) => state.app.users);
//     const error = useAppSelector((state) => state.app.error);
//     const isLoading = useAppSelector((state) => state.app.isLoading);

//     useEffect(() => {
//         dispatch(getUsersTC());
//     }, []);

//     return (
//         <div>
//             <h2>🙂 Список юзеров</h2>
//             {!!error && <h2 style={{ color: "red" }}>{error}</h2>}
//             {isLoading && <Loader />}
//             <div>
//                 {users.map((u) => {
//                     return (
//                         <div key={u.id}>
//                             <b>name</b>:{u.name} - <b>age</b>:{u.age}
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
// // Перед вами список тудулистов и пользователей, которые находятся в постоянной загрузке.
// // Откройте network и вы увидите что запросы на сервер уходят и возвращаются с хорошими данными,
// // но вместо этого пользователь видит на экране Loader.
// // Для обработки успешного результата написана утилитная функция baseSuccessHandler.
// // Ваша задача воспользоваться этой функцией отобразить Todos и Users
// // Что нужно написать вместо XXX и YYY, чтобы реализовать данную задачу?
// // Ответ дайте через пробел.

// // 🖥 Пример ответа: dispatch(baseSuccessHandler(1,2,3))  dispatch(baseSuccessHandler(3,2,1)






// import React, { useEffect } from "react";
// import ReactDOM from "react-dom/client";
// import { ThunkAction, ThunkDispatch } from "redux-thunk";
// import { Provider, TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
// import axios, { AxiosError } from "axios";
// import { configureStore, combineReducers, Dispatch } from "@reduxjs/toolkit";

// // TYPES
// type TodoType = {
//     id: string;
//     title: string;
//     order: number;
//     createdAt: string;
//     updatedAt: string;
//     completed: boolean;
// };

// type UserType = {
//     id: string;
//     name: string;
//     age: number;
// };

// type UsersResponseType = {
//     items: UserType[];
//     totalCount: number;
// };

// // API
// const instance = axios.create({ baseURL: "https://exams-frontend.kimitsu.it-incubator.io/api/" });

// const api = {
//     getTodos() {
//         return instance.get<TodoType[]>("todo");
//     },
//     getUsers() {
//         return instance.get<UsersResponseType>("user");
//     },
// };

// // Reducer
// const initState = {
//     isLoading: false,
//     error: null as string | null,
//     todos: [] as TodoType[],
//     users: [] as UserType[],
// };

// type InitStateType = typeof initState;

// const appReducer = (state: InitStateType = initState, action: ActionsType): InitStateType => {
//     switch (action.type) {
//         case "APP/GET-TODOS":
//             return { ...state, todos: action.todos };
//         case "APP/GET-USERS":
//             return { ...state, users: action.users };
//         case "APP/IS-LOADING":
//             return { ...state, isLoading: action.isLoading };
//         case "APP/SET-ERROR":
//             return { ...state, error: action.error };
//         default:
//             return state;
//     }
// };

// const getUsersAC = (users: UserType[]) => ({ type: "APP/GET-USERS", users }) as const;
// const getTodosAC = (todos: TodoType[]) => ({ type: "APP/GET-TODOS", todos }) as const;
// const setLoadingAC = (isLoading: boolean) => ({ type: "APP/IS-LOADING", isLoading }) as const;
// const setError = (error: string | null) => ({ type: "APP/SET-ERROR", error }) as const;

// type ActionsType =
//     | ReturnType<typeof getUsersAC>
//     | ReturnType<typeof getTodosAC>
//     | ReturnType<typeof setLoadingAC>
//     | ReturnType<typeof setError>;

// // Utils functions
// function baseErrorHandler(dispatch: Dispatch, message: string) {
//     dispatch(setError(message));
//     dispatch(setLoadingAC(false));
// }

// // Thunk
// const getTodosTC = (): AppThunk => (dispatch) => {
//     dispatch(setLoadingAC(true));
//     api
//         .getTodos()
//         .then((res) => {
//             dispatch(getTodosAC(res.data));
//             dispatch(setLoadingAC(false));
//         })
//         .catch((e: AxiosError) => {
//             // ❗❗❗ XXX ❗❗❗
//             baseErrorHandler(dispatch, e.message)
//         });
// };

// const getUsersTC = (): AppThunk => (dispatch) => {
//     dispatch(setLoadingAC(true));
//     api
//         .getUsers()
//         .then((res) => {
//             dispatch(getUsersAC(res.data.items));
//             dispatch(setLoadingAC(false));
//         })
//         .catch((e: AxiosError) => {
//             baseErrorHandler(dispatch, e.message)
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

// // COMPONENTS
// // Loader
// export const Loader = () => {
//     return <h1>Loading ...</h1>;
// };

// const App = () => {
//     return (
//         <>
//             <h1>✅Todos & 🙂Users</h1>
//             <div style={{ display: "flex", justifyContent: "space-evenly" }}>
//                 <Todos />
//                 <Users />
//             </div>
//         </>
//     );
// };

// const Todos = () => {
//     const dispatch = useAppDispatch();
//     const todos = useAppSelector((state) => state.app.todos);
//     const error = useAppSelector((state) => state.app.error);
//     const isLoading = useAppSelector((state) => state.app.isLoading);

//     useEffect(() => {
//         dispatch(getTodosTC());
//     }, []);

//     return (
//         <div>
//             <h2>✅ Список тудулистов</h2>
//             {!!error && <h2 style={{ color: "red" }}>{error}</h2>}
//             {isLoading && <Loader />}
//             {todos.map((t) => {
//                 return (
//                     <div style={t.completed ? { color: "grey" } : {}} key={t.id}>
//                         <input type="checkbox" checked={t.completed} />
//                         <b>Описание</b>: {t.title}
//                     </div>
//                 );
//             })}
//         </div>
//     );
// };

// const Users = () => {
//     const dispatch = useAppDispatch();
//     const users = useAppSelector((state) => state.app.users);
//     const error = useAppSelector((state) => state.app.error);
//     const isLoading = useAppSelector((state) => state.app.isLoading);

//     useEffect(() => {
//         dispatch(getUsersTC());
//     }, []);

//     return (
//         <div>
//             <h2>🙂 Список юзеров</h2>
//             {!!error && <h2 style={{ color: "red" }}>{error}</h2>}
//             {isLoading && <Loader />}
//             <div>
//                 {users.map((u) => {
//                     return (
//                         <div key={u.id}>
//                             <b>name</b>:{u.name} - <b>age</b>:{u.age}
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
// // Перед вами список тудулистов и пользователей, которые находятся в постоянной загрузке.
// // Откройте network и вы увидите что запросы падают с ошибками,
// // но в коде этот никак не обрабатывается.
// // Для обработки ошибок написана утилитная функция baseErrorHandler.
// // Ваша задача воспользоваться этой функцией и вывести ошибки на экран.
// // Что нужно написать вместо XXX, чтобы ошибки обработались и пользователь их увидел ?
// //❗ Код фиксить не нужно.

// // 🖥 Пример ответа: dispatch(setLoadingAC(false))







// 16 16 16 16 16 16 16 16 16 16 16 16 16 16 16 16 16 16 16 16 16 16 16 16 16 16 16 16 16 16 16 16 16 16 16 16
// 16 16 16 16 16 16 16 16 16 16 16 16 16 16 16 16 16 16 16 16 16 16 16 16 16 16 16 16 16 16 16 16 16 16 16 16
// 16 16 16 16 16 16 16 16 16 16 16 16 16 16 16 16 16 16 16 16 16 16 16 16 16 16 16 16 16 16 16 16 16 16 16 16
// 16 16 16 16 16 16 16 16 16 16 16 16 16 16 16 16 16 16 16 16 16 16 16 16 16 16 16 16 16 16 16 16 16 16 16 16
// 16 16 16 16 16 16 16 16 16 16 16 16 16 16 16 16 16 16 16 16 16 16 16 16 16 16 16 16 16 16 16 16 16 16 16 16


// import React, { useEffect } from "react";
// import { Provider, TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
// import ReactDOM from "react-dom/client";
// import { BrowserRouter, Route, Routes } from "react-router-dom";
// import { ThunkAction, ThunkDispatch } from "redux-thunk";
// import axios from "axios";
// import { configureStore, combineReducers } from "@reduxjs/toolkit";

// // Utils
// // console.log = () => { };

// // Api
// const instance = axios.create({
//     baseURL: "https://social-network.samuraijs.com/api/1.1",
// });

// const api = {
//     getUsers() {
//         /* 1 */ console.log(1)
//         return instance.get('/users');
//     },
// };

// // Reducer
// const initState = {
//     isLoading: false,
//     users: [] as any[],
// };

// type InitStateType = typeof initState;

// const appReducer = (state: InitStateType = initState, action: ActionsType): InitStateType => {
//     switch (action.type) {
//         case "APP/SET-USERS":
//             /* 2 */ console.log(2)
//             return { ...state, users: action.users };
//         default:
//             return state;
//     }
// };

// // Actions
// const setUsersAC = (users: any[]) => ({ type: "APP/SET-USERS", users }) as const;
// type ActionsType = ReturnType<typeof setUsersAC>;

// // Thunk
// const getUsersTC = (): AppThunk => (dispatch) => {
//     /* 3 */ console.log(3)
//     api.getUsers().then((res) => {
//         /* 4 */ console.log(4)
//         dispatch(setUsersAC(res.data.items));
//     });
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

// // Login
// export const Login = () => {
//     const users = useAppSelector((state) => state.app.users);
//     /* 5 */ console.log(5)

//     return (
//         <div>
//             {/* 6 */}
//             {users.map((u) => (
//                 <p key={u.id}>{u.name}</p>
//             ))}
//             <h1>
//                 В данном задании на экран смотреть не нужно. Рекомендуем взять ручку, листик и
//                 последовательно, спокойно расставить цифры в нужном порядке. Прежде чем давать ответ
//                 обязательно посчитайте к-во цифр и сверьте с подсказкой. Удачи 🚀
//             </h1>
//         </div>
//     );
// };

// // App
// export const App = () => {
//     /* 7 */ console.log(7)
//     const dispatch = useAppDispatch();

//     useEffect(() => {
//         /* 8 */ console.log(8)
//         dispatch(getUsersTC());
//     }, []);

//     /* 9 */ console.log(9)
//     return (
//         <Routes>
//             <Route path={""} element={<Login />} />
//         </Routes>
//     );
// };

// const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
// root.render(
//     <Provider store={store}>
//         <BrowserRouter>
//             <App />
//         </BrowserRouter>
//     </Provider>,
// );

// // 📜 Описание:
// // Задача: напишите в какой последовательности вызовутся числа при успешном запросе.
// // Подсказка: будет 11 чисел.
// // Ответ дайте через пробел.

// // 🖥 Пример ответа: 1 2 3 4 5 6 7 8 9 1 2
// // предположительно 7 9 5 6 8 3 1 4 2 5 6





// import React, { useEffect } from "react";
// import { Provider, TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
// import ReactDOM from "react-dom/client";
// import { BrowserRouter, Route, Routes } from "react-router-dom";
// import { ThunkAction, ThunkDispatch } from "redux-thunk";
// import axios from "axios";
// import { configureStore, combineReducers } from "@reduxjs/toolkit";

// // Utils
// console.log = () => { };

// // Api
// const instance = axios.create({
//     baseURL: "xxx",
// });

// const api = {
//     getUsers() {
//         return instance.get("xxx");
//     },
// };

// // Reducer
// const initState = {
//     isLoading: false,
//     users: [] as any[],
// };

// type InitStateType = typeof initState;

// const appReducer = (state: InitStateType = initState, action: ActionsType): InitStateType => {
//     switch (action.type) {
//         case "APP/SET-USERS":
//             /* 1 */
//             return { ...state, users: action.users };
//         case "APP/IS-LOADING":
//             /* 2 */
//             return { ...state, isLoading: action.isLoading };
//         default:
//             return state;
//     }
// };

// // Actions
// const setUsersAC = (users: any[]) => ({ type: "APP/SET-USERS", users }) as const;
// const setLoadingAC = (isLoading: boolean) => ({ type: "APP/IS-LOADING", isLoading }) as const;
// type ActionsType = ReturnType<typeof setUsersAC> | ReturnType<typeof setLoadingAC>;

// // Thunk
// const getUsersTC = (): AppThunk => (dispatch) => {
//     /* 3 */
//     dispatch(setLoadingAC(true));
//     api.getUsers().then((res) => {
//         /* 4 */
//         dispatch(setLoadingAC(false));
//         /* 5 */
//         dispatch(setUsersAC(res.data.data));
//     });
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
//     /* 6 */
//     return <h1>Loading ...</h1>;
// };

// // Login
// export const Login = () => {
//     /* 7 */

//     const users = useAppSelector((state) => state.app.users);
//     const isLoading = useAppSelector((state) => state.app.isLoading);

//     return (
//         <div>
//             {isLoading && <Loader />}
//             {users.map((u) => (
//                 <p key={u.id}>{u.email}</p>
//             ))}
//             <h1>
//                 В данном задании на экран смотреть не нужно. Рекомендуем взять ручку, листик и
//                 последовательно, спокойно расставить цифры в нужном порядке. Прежде чем давать ответ
//                 обязательно посчитайте к-во цифр и сверьте с подсказкой. Удачи 🚀
//             </h1>
//         </div>
//     );
// };

// // App
// export const App = () => {
//     /* 8 */
//     const dispatch = useAppDispatch();

//     useEffect(() => {
//         /* 9 */
//         dispatch(getUsersTC());
//     }, []);

//     /* 10 */
//     return (
//         <Routes>
//             <Route path={""} element={<Login />} />
//         </Routes>
//     );
// };

// const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
// root.render(
//     <Provider store={store}>
//         <BrowserRouter>
//             <App />
//         </BrowserRouter>
//     </Provider>,
// );

// // 📜 Описание:
// // Задача: напишите в какой последовательности вызовутся числа при успешном запросе.
// // Подсказка: будет 13 чисел.
// // Ответ дайте через пробел.

// // 🖥 Пример ответа: 1 2 3 4 5 6 7 8 9 10 1 2 3







// import React from 'react'
// import ReactDOM from 'react-dom/client';
// import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'

// export const Main = () => {
//     return (
//         <>
//             <h2>✅ Список тудулистов</h2>
//             <h2>📜 Список постов</h2>
//         </>
//     )
// }

// // App
// export const App = () => {
//     return (
//         <BrowserRouter>
//             <Routes>
//                 <Route path={'/'} element={<Main />} />
//             </Routes>
//         </BrowserRouter>
//     )
// }

// const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
// root.render(<App />)

// // 📜 Описание:
// // Белый экран... Приложение не работает.
// // Найдите и исправьте ошибку, чтобы на экране отобразилось 2 заголовка.
// // Исправленную версию строки напишите в качестве ответа.

// // 🖥 Пример ответа: <Route path={'/'} component={<Main/>}/>





// import { useFormik } from 'formik';
// import React from 'react'
// import ReactDOM from 'react-dom/client';
// import { BrowserRouter, Route, Routes } from 'react-router-dom'


// // Types
// type LoginFieldsType = {
//     firstName?: string
// }

// // Main
// export const Login = () => {

//     const formik = useFormik({
//         initialValues: {
//             firstName: '',
//         },
//         validate: (values) => {
//             if (values.firstName.length < 5) {
//                 const errors: LoginFieldsType = { firstName: 'Must be 5 characters or more' };
//                 return errors
//             }

//         },
//         onSubmit: values => {
//             alert(JSON.stringify(values, null, 2));
//         }
//     });

//     return (
//         <form onSubmit={formik.handleSubmit}>
//             <div>
//                 <input placeholder={'Введите имя'} {...formik.getFieldProps('firstName')} />
//             </div>
//             <button type="submit" disabled={!(formik.isValid && formik.dirty)}>Отправить</button>
//         </form>
//     );
// }

// // App
// export const App = () => {
//     return (
//         <Routes>
//             <Route path={''} element={<Login />} />
//         </Routes>
//     )
// }

// const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
// root.render(<BrowserRouter><App /></BrowserRouter>)

// // 📜 Описание:
// // Начните вводить в поле firstName символы. После ввода первого символа кнопка "Отправить" раздизаблится.
// // Задача: кнопка "Отправить" должна раздизаблиться только в том случае, если длинна имени больше, либо равна 5 символам.
// // Т.е. вам необходимо самостоятельно написать эту валидацию для поля firstName.
// // ❗ В качестве текста ошибки напишите 'Must be 5 characters or more'
// // ❗ Текст ошибки выводить не нужно (только если для себя поиграться).

// // В качестве ответа напишите полностью строку кода с условием.
// // 🖥 Пример ответа: return errors.firstName = 'Must be 5 characters or more'
// // ❗ Сторонние библиотеки (например yup) использовать запрещено






// import { useFormik } from 'formik';
// import React from 'react'
// import ReactDOM from 'react-dom/client';
// import { BrowserRouter, Route, Routes } from 'react-router-dom'


// // Main
// export const Login = () => {

//     const formik = useFormik({
//         initialValues: {
//             firstName: '',
//             lastName: '',
//             email: '',
//             password: '',
//             phone: '',
//         },
//         onSubmit: values => {
//             alert(JSON.stringify(values, null, 2));
//         },
//     });

//     return (
//         <form onSubmit={formik.handleSubmit}>
//             <div>
//                 <input
//                     name="firstName"
//                     onChange={formik.handleChange}
//                     value={formik.values.firstName}
//                     placeholder={'Введите имя'}
//                 />
//             </div>
//             <div>
//                 <input
//                     name="lastName"
//                     onChange={formik.handleChange}
//                     value={formik.values.lastName}
//                     placeholder={'Введите фамилию'}
//                 />
//             </div>
//             <div>
//                 <input
//                     name="email"
//                     onChange={formik.handleChange}
//                     value={formik.values.email}
//                     placeholder={'Введите email'}
//                 />
//             </div>
//             <div>
//                 <input
//                     name="password"
//                     onChange={formik.handleChange}
//                     value={formik.values.password}
//                     placeholder={'Введите пароль'}
//                     type={'password'}
//                 />
//             </div>
//             <div>
//                 <input
//                     name="phone"
//                     onChange={formik.handleChange}
//                     value={formik.values.phone}
//                     placeholder={'Введите телефон'}
//                 />
//             </div>
//             <button type="submit">Отправить</button>
//         </form>
//     );
// }

// // App
// export const App = () => {
//     return (
//         <Routes>
//             <Route path={''} element={<Login />} />
//         </Routes>
//     )
// }

// const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
// root.render(<BrowserRouter><App /></BrowserRouter>)

// // 📜 Описание:
// // Форма заполнения данных работает некорректно.
// // Пользователи жалуются на поле ввода "Телефона"
// // Найдите в коде ошибку. Исправленную версию строки напишите в качестве ответа.

// // 🖥 Пример ответа: <form onSubmit={formik.handleSubmit}>





// import { useFormik } from 'formik';
// import React from 'react'
// import ReactDOM from 'react-dom/client';
// import { BrowserRouter, Route, Routes } from 'react-router-dom'


// // Types
// type LoginFieldsType = {
//     firstName: string
//     email: string
// }

// // Main
// export const Login = () => {

//     const formik = useFormik({
//         initialValues: {
//             firstName: '',
//             email: '',
//         },
//         validate: (values) => {
//             const errors: Partial<LoginFieldsType> = {};
//             if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
//                 errors.email = 'Invalid email address';
//             }
//             return errors
//         },
//         onSubmit: values => {
//             alert(JSON.stringify(values, null, 2));
//         }
//     });

//     // Функция необходима для того, чтобы вебшторм не ругался на true в JSX
//     const getTrue = () => {
//         return true
//     }

//     return (
//         <form onSubmit={formik.handleSubmit}>
//             <div>
//                 <input placeholder={'Введите имя'} {...formik.getFieldProps('firstName')} />
//             </div>
//             <div>
//                 <input placeholder={'Введите email'}{...formik.getFieldProps('email')} />
//                 {formik.touched.email && formik.errors.email && <div style={{ color: 'red' }}>{formik.errors.email}</div>} не верно почему то
//             </div>
//             <button type="submit">Отправить</button>
//         </form>
//     );
// }

// // App
// export const App = () => {
//     return (
//         <Routes>
//             <Route path={''} element={<Login />} />
//         </Routes>
//     )
// }

// const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
// root.render(<BrowserRouter><App /></BrowserRouter>)

// // 📜 Описание:
// // Загрузив приложение вы увидите ошибку под полем email, но вы еще ничего не ввели.
// // Исправьте 46 строку кода так, чтобы:
// // 1) Сообщение об ошибке показывалось только в том случае, когда email введен некорректно.
// // 2) Вместо ERROR должен быть конкретный текст ошибки прописанный в валидации к этому полю.
// // 3) Сообщение должно показываться только в том случае, когда мы взаимодействовали с полем.
// // Исправленную версию строки напишите в качестве ответа.

// // 🖥 Пример ответа: {true && <div style={{color: 'red'}}>error.email</div>}







// import { useFormik } from "formik";
// import React from "react";
// import { Provider, TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
// import ReactDOM from "react-dom/client";
// import { BrowserRouter, Navigate, Route, Routes, useNavigate } from "react-router-dom";
// import axios from "axios";
// import { ThunkAction, ThunkDispatch } from "redux-thunk";
// import { configureStore, combineReducers } from "@reduxjs/toolkit";

// // Types
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
//     error: null as string | null,
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
//           return  api
//                 .login(values)
//                 .then((res) => {
//                     dispatch(setIsLoggedIn(true));
//                     alert("Вы залогинились успешно");
//                 })
//                 .catch((e) => {
//                     dispatch(setError(e.response.data.errors));
//                 })
//                 .finally(() => {
//                     dispatch(setLoadingAC(false));
//                     setTimeout(() => {
//                         dispatch(setError(null));
//                     }, 3000);
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

// // Profile
// export const Profile = () => {
//     return <h2>😎 Profile</h2>;
// };

// // Login
// export const Login = () => {
//     const dispatch = useAppDispatch();
//     const navigate = useNavigate();

//     const error = useAppSelector((state) => state.app.error);
//     const isLoading = useAppSelector((state) => state.app.isLoading);
//     const isLoggedIn = useAppSelector((state) => state.app.isLoggedIn);

//     const formik = useFormik({
//         initialValues: {
//             email: "darrell@gmail.com",
//             password: "123",
//         },
//         onSubmit: (values) => {
//             dispatch(loginTC(values));
//         },
//     });
//     // if (isLoggedIn) return <Navigate to='/profile' />
//     return (
//         <div>
//             {!!error && <h2 style={{ color: "red" }}>{error}</h2>}
//             {isLoading && <Loader />}
//             <form onSubmit={formik.handleSubmit}>
//                 <div>
//                     <input placeholder={"Введите email"} {...formik.getFieldProps("email")} />
//                 </div>
//                 <div>
//                     <input
//                         type={"password"}
//                         placeholder={"Введите пароль"}
//                         {...formik.getFieldProps("password")}
//                     />
//                 </div>
//                 <button type="submit">Залогиниться</button>
//             </form>
//         </div>
//     );
// };

// // App
// export const App = () => {
//     return (
//         <Routes>
//             <Route path={""} element={<Login />} />
//             <Route path={"profile"} element={<Profile />} />
//         </Routes>
//     );
// };

// const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
// root.render(
//     <Provider store={store}>
//         <BrowserRouter>
//             <App />
//         </BrowserRouter>
//     </Provider>,
// );

// // 📜 Описание:
// // ❗ Email и password менять не надо. Это просто тестовые данные с которыми будет происходить успешный запрос.
// // Нажмите на кнопку "Залогиниться" и вы увидели alert с успешным сообщением
// // Задача: при успешной логинизации, редиректнуть пользователя на страницу Profile.

// // Напишите правильную строку кода
// // 🖥 Пример ответа:  console.log('If login => redirect to profile')





// import { useFormik } from 'formik';
// import React from 'react'
// import ReactDOM from 'react-dom/client';
// import { BrowserRouter, Route, Routes } from 'react-router-dom'

// // Main
// export const Login = () => {

//     const formik = useFormik({
//         initialValues: {
//             email: '',
//             password: '',
//         },
//         onSubmit: values => {
//             alert(JSON.stringify(values, null, 2));
//         },
//     });

//     return (
//         <form onSubmit={formik.handleSubmit}>
//             <div>
//                 <input
//                     name="email"
//                     onChange={formik.handleChange}
//                     value={formik.values.email}
//                     type="text"
//                     placeholder={'Введите email'}
//                 />
//             </div>
//             <div>
//                 <input
//                     name="password"
//                     onChange={formik.handleChange}
//                     value={formik.values.password}
//                     type="password"
//                     placeholder={'Введите пароль'}
//                 />
//             </div>
//             <button type="submit">Отправить</button>
//         </form>
//     );
// }

// // App
// export const App = () => {
//     return (
//         <Routes>
//             <Route path={''} element={<Login />} />
//         </Routes>
//     )
// }

// const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
// root.render(<BrowserRouter><App /></BrowserRouter>)

// // 📜 Описание:
// // При заполнении данных формы и их отправке вы должны увидеть alert c
// // введенными значениями, но из-за допущенной ошибки форма работает не корректно.
// // Найдите ошибку и исправленную версию строки напишите в качестве ответа.
// // ❗После того как показался alert форма не должна перегружать все приложение

// // 🖥 Пример ответа: alert(JSON.stringify(values))






// import React from 'react'
// import ReactDOM from 'react-dom/client';
// import { BrowserRouter, Route, Routes } from 'react-router-dom'

// export const Main = () => {
//     return (
//         <>
//             <h2>✅ Список тудулистов</h2>
//             <h2>📜 Список постов</h2>
//         </>
//     )
// }

// // App
// export const App = () => {

//     return (
//         <Routes>
//             <Route path={'/'} element={<Main />} />
//         </Routes>
//     )
// }


// const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
// root.render(<BrowserRouter><App /></BrowserRouter>)

// // 📜 Описание:
// // Приложение при старте падает с ошибкой...
// // Найдите и исправьте ошибку, чтобы на экране отобразилось 2 заголовка.
// // Исправленную версию строки напишите в качестве ответа.

// // 🖥 Пример ответа: type InitStateType = typeof initState








// import React from 'react'
// import ReactDOM from 'react-dom/client';
// import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'


// export const PageNotFound = () => {
//     return <h2>⛔ 404. Page not found ⛔</h2>
// }

// export const Profile = () => {
//     return <h2>😎 Профиль</h2>
// }


// export const Main = () => {
//     return (
//         <>
//             <h2>✅ Список тудулистов</h2>
//             <h2>📜 Список постов</h2>
//         </>
//     )
// }

// // App
// export const App = () => {

//     return (
//         <Routes>
//             <Route path={'profile'} element={<Profile />} />
//             <Route path={'/*'} element={<Navigate to='/profile' />} />
//             {/* ❗❗❗ XXX ❗❗❗  */}
//         </Routes>
//     )
// }


// const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
// root.render(<BrowserRouter><App /></BrowserRouter>)

// // 📜 Описание:
// // Вместо ХХХ напишите роут таким образом, чтобы вне зависимости от того чтобы будет в урле (login или home или...)
// // вас всегда редиректило на страницу профиля и при в это в урле по итогу
// // был адрес /profile

// // 🖥 Пример ответа: <Route path={'/'} element={'to profile page'}/>







// import React, { useEffect } from "react";
// import ReactDOM from "react-dom/client";
// import { ThunkAction, ThunkDispatch } from "redux-thunk";
// import { Provider, TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
// import axios, { AxiosError } from "axios";
// import { configureStore, combineReducers, Dispatch } from "@reduxjs/toolkit";

// // TYPES
// type TodoType = {
//     id: string;
//     title: string;
//     order: number;
//     createdAt: string;
//     updatedAt: string;
//     completed: boolean;
// };

// type UserType = {
//     id: string;
//     name: string;
//     age: number;
// };

// type UsersResponseType = {
//     items: UserType[];
//     totalCount: number;
// };

// // API
// const instance = axios.create({ baseURL: "https://exams-frontend.kimitsu.it-incubator.io/api/" });

// const api = {
//     getTodos() {
//         return instance.get<TodoType[]>("todos");
//     },
//     getUsers() {
//         return instance.get<UsersResponseType>("users");
//     },
// };

// // Reducer
// const initState = {
//     isLoading: false,
//     error: null as string | null,
//     todos: [] as TodoType[],
//     users: [] as UserType[],
// };

// type InitStateType = typeof initState;

// const appReducer = (state: InitStateType = initState, action: ActionsType): InitStateType => {
//     switch (action.type) {
//         case "APP/GET-TODOS":
//             return { ...state, todos: action.todos };
//         case "APP/GET-USERS":
//             return { ...state, users: action.users };
//         case "APP/IS-LOADING":
//             return { ...state, isLoading: action.isLoading };
//         case "APP/SET-ERROR":
//             return { ...state, error: action.error };
//         default:
//             return state;
//     }
// };

// const getUsersAC = (users: UserType[]) => ({ type: "APP/GET-USERS", users }) as const;
// const getTodosAC = (todos: TodoType[]) => ({ type: "APP/GET-TODOS", todos }) as const;
// const setLoadingAC = (isLoading: boolean) => ({ type: "APP/IS-LOADING", isLoading }) as const;
// const setError = (error: string | null) => ({ type: "APP/SET-ERROR", error }) as const;

// type ActionsType =
//     | ReturnType<typeof getUsersAC>
//     | ReturnType<typeof getTodosAC>
//     | ReturnType<typeof setLoadingAC>
//     | ReturnType<typeof setError>;

// // Utils functions
// function baseSuccessHandler<T>(dispatch: Dispatch, actionCreator: Function, data: T) {
//     dispatch(actionCreator(data));
//     dispatch(setLoadingAC(false));
// }

// // Thunk
// const getTodosTC = (): AppThunk => (dispatch) => {
//     dispatch(setLoadingAC(true));
//     api
//         .getTodos()
//         .then((res) => {
//             // ❗❗❗ XXX ❗❗❗
//             baseSuccessHandler<TodoType[]>(dispatch, getTodosAC, res.data)
//         })
//         .catch((e: AxiosError) => {
//             dispatch(setError(e.message));
//             dispatch(setLoadingAC(false));
//         });
// };

// const getUsersTC = (): AppThunk => (dispatch) => {
//     dispatch(setLoadingAC(true));
//     api
//         .getUsers()
//         .then((res) => {
//             // ❗❗❗ YYY ❗❗❗
//             // console.log(res.data)
//             baseSuccessHandler<UserType[]>(dispatch, getUsersAC, res.data.items)
//         })
//         .catch((e: AxiosError) => {
//             dispatch(setError(e.message));
//             dispatch(setLoadingAC(false));
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

// // COMPONENTS
// // Loader
// export const Loader = () => {
//     return <h1>Loading ...</h1>;
// };

// const App = () => {
//     return (
//         <>
//             <h1>✅Todos & 🙂Users</h1>
//             <div style={{ display: "flex", justifyContent: "space-evenly" }}>
//                 <Todos />
//                 <Users />
//             </div>
//         </>
//     );
// };

// const Todos = () => {
//     const dispatch = useAppDispatch();
//     const todos = useAppSelector((state) => state.app.todos);
//     const error = useAppSelector((state) => state.app.error);
//     const isLoading = useAppSelector((state) => state.app.isLoading);

//     useEffect(() => {
//         dispatch(getTodosTC());
//     }, []);

//     return (
//         <div>
//             <h2>✅ Список тудулистов</h2>
//             {!!error && <h2 style={{ color: "red" }}>{error}</h2>}
//             {isLoading && <Loader />}
//             {todos.map((t) => {
//                 return (
//                     <div style={t.completed ? { color: "grey" } : {}} key={t.id}>
//                         <input type="checkbox" checked={t.completed} />
//                         <b>Описание</b>: {t.title}
//                     </div>
//                 );
//             })}
//         </div>
//     );
// };

// const Users = () => {
//     const dispatch = useAppDispatch();
//     const users = useAppSelector((state) => state.app.users);
//     const error = useAppSelector((state) => state.app.error);
//     const isLoading = useAppSelector((state) => state.app.isLoading);

//     useEffect(() => {
//         dispatch(getUsersTC());
//     }, []);

//     return (
//         <div>
//             <h2>🙂 Список юзеров</h2>
//             {!!error && <h2 style={{ color: "red" }}>{error}</h2>}
//             {isLoading && <Loader />}
//             <div>
//                 {users.map((u) => {
//                     return (
//                         <div key={u.id}>
//                             <b>name</b>:{u.name} - <b>age</b>:{u.age}
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
// // Перед вами список тудулистов и пользователей, которые находятся в постоянной загрузке.
// // Откройте network и вы увидите что запросы на сервер уходят и возвращаются с хорошими данными,
// // но вместо этого пользователь видит на экране Loader.
// // Для обработки успешного результата написана утилитная функция baseSuccessHandler.
// // Ваша задача воспользоваться этой функцией отобразить Todos и Users
// // Что нужно написать вместо XXX и YYY, чтобы реализовать данную задачу?
// // Ответ дайте через пробел.

// // 🖥 Пример ответа: dispatch(baseSuccessHandler(1,2,3))  dispatch(baseSuccessHandler(3,2,1)











// TOTAL4 TOTAL4 TOTAL4 TOTAL4 TOTAL4 TOTAL4 TOTAL4 TOTAL4 TOTAL4 TOTAL4 TOTAL4 TOTAL4 TOTAL4 TOTAL4 TOTAL4 TOTAL4 TOTAL4
// TOTAL4 TOTAL4 TOTAL4 TOTAL4 TOTAL4 TOTAL4 TOTAL4 TOTAL4 TOTAL4 TOTAL4 TOTAL4 TOTAL4 TOTAL4 TOTAL4 TOTAL4 TOTAL4 TOTAL4
// TOTAL4 TOTAL4 TOTAL4 TOTAL4 TOTAL4 TOTAL4 TOTAL4 TOTAL4 TOTAL4 TOTAL4 TOTAL4 TOTAL4 TOTAL4 TOTAL4 TOTAL4 TOTAL4 TOTAL4
// TOTAL4 TOTAL4 TOTAL4 TOTAL4 TOTAL4 TOTAL4 TOTAL4 TOTAL4 TOTAL4 TOTAL4 TOTAL4 TOTAL4 TOTAL4 TOTAL4 TOTAL4 TOTAL4 TOTAL4
// TOTAL4 TOTAL4 TOTAL4 TOTAL4 TOTAL4 TOTAL4 TOTAL4 TOTAL4 TOTAL4 TOTAL4 TOTAL4 TOTAL4 TOTAL4 TOTAL4 TOTAL4 TOTAL4 TOTAL4




// import { useEffect } from "react";
// import ReactDOM from "react-dom/client";
// import { Provider, TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
// import { ThunkAction, ThunkDispatch } from "redux-thunk";
// import axios from "axios";
// import { configureStore, combineReducers } from "@reduxjs/toolkit";

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
// const getTodosTC = (): AppThunk => (dispatch) => {
//     todosAPI.getTodos().then((res) => {
//         dispatch(getTodosAC(res.data));
//     });
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
//                 console.log(getState())
//                 const currentPost = getState().posts.find((p: PostType) => p.id === postId);

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
//                     // console.log(e)
//                     dispatch(setError(e.response.data.errors))
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
//         return instance.post('comments', payload)
//         // Promise.resolve() стоит в качестве заглушки, чтобы TS не ругался и код компилировался
//         // Promise.resolve() нужно удалить и написать правильный запрос для создания нового комментария
//         // return Promise.resolve()
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





// import { useFormik } from "formik";
// import React from "react";
// import { Provider, TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
// import ReactDOM from "react-dom/client";
// import { BrowserRouter, Navigate, Route, Routes, useNavigate } from "react-router-dom";
// import axios from "axios";
// import { ThunkAction, ThunkDispatch } from "redux-thunk";
// import { configureStore, combineReducers } from "@reduxjs/toolkit";

// // Types
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
//     error: null as string | null,
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
//                     dispatch(setError(e.response.data.errors));
//                 })
//                 .finally(() => {
//                     dispatch(setLoadingAC(false));
//                     setTimeout(() => {
//                         dispatch(setError(null));
//                     }, 3000);
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

// // Profile
// export const Profile = () => {
//     return <h2>😎 Profile</h2>;
// };

// // Login
// export const Login = () => {
//     const dispatch = useAppDispatch();
//     const navigate = useNavigate();

//     const error = useAppSelector((state) => state.app.error);
//     const isLoading = useAppSelector((state) => state.app.isLoading);
//     const isLoggedIn = useAppSelector((state) => state.app.isLoggedIn);

//     const formik = useFormik({
//         initialValues: {
//             email: "darrell@gmail.com",
//             password: "123",
//         },
//         onSubmit: (values) => {
//             dispatch(loginTC(values));
//         },
//     });

//     if (isLoggedIn) return <Navigate to={'/profile'} />

//     return (
//         <div>
//             {!!error && <h2 style={{ color: "red" }}>{error}</h2>}
//             {isLoading && <Loader />}
//             <form onSubmit={formik.handleSubmit}>
//                 <div>
//                     <input placeholder={"Введите email"} {...formik.getFieldProps("email")} />
//                 </div>
//                 <div>
//                     <input
//                         type={"password"}
//                         placeholder={"Введите пароль"}
//                         {...formik.getFieldProps("password")}
//                     />
//                 </div>
//                 <button type="submit">Залогиниться</button>
//             </form>
//         </div>
//     );
// };

// // App
// export const App = () => {
//     return (
//         <Routes>
//             <Route path={""} element={<Login />} />
//             <Route path={"profile"} element={<Profile />} />
//         </Routes>
//     );
// };

// const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
// root.render(
//     <Provider store={store}>
//         <BrowserRouter>
//             <App />
//         </BrowserRouter>
//     </Provider>,
// );

// // 📜 Описание:
// // ❗ Email и password менять не надо. Это просто тестовые данные с которыми будет происходить успешный запрос.
// // Нажмите на кнопку "Залогиниться" и вы увидели alert с успешным сообщением
// // Задача: при успешной логинизации, редиректнуть пользователя на страницу Profile.

// // Напишите строку кода, которую нужно добавить
// // 🖥 Пример ответа: if (true) { console.log('hello') }





// import React, { useEffect } from "react";
// import ReactDOM from "react-dom/client";
// import { ThunkAction, ThunkDispatch } from "redux-thunk";
// import { Provider, TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
// import axios, { AxiosError } from "axios";
// import { configureStore, combineReducers, Dispatch } from "@reduxjs/toolkit";

// // TYPES
// type TodoType = {
//     id: string;
//     title: string;
//     order: number;
//     createdAt: string;
//     updatedAt: string;
//     completed: boolean;
// };

// type UserType = {
//     id: string;
//     name: string;
//     age: number;
// };

// type UsersResponseType = {
//     items: UserType[];
//     totalCount: number;
// };

// // API
// const instance = axios.create({ baseURL: "https://exams-frontend.kimitsu.it-incubator.io/api/" });

// const api = {
//     getTodos() {
//         return instance.get<TodoType[]>("todos");
//     },
//     getUsers() {
//         return instance.get<UsersResponseType>("users");
//     },
// };

// // Reducer
// const initState = {
//     isLoading: false,
//     error: null as string | null,
//     todos: [] as TodoType[],
//     users: [] as UserType[],
// };

// type InitStateType = typeof initState;

// const appReducer = (state: InitStateType = initState, action: ActionsType): InitStateType => {
//     switch (action.type) {
//         case "APP/GET-TODOS":
//             return { ...state, todos: action.todos };
//         case "APP/GET-USERS":
//             return { ...state, users: action.users };
//         case "APP/IS-LOADING":
//             return { ...state, isLoading: action.isLoading };
//         case "APP/SET-ERROR":
//             return { ...state, error: action.error };
//         default:
//             return state;
//     }
// };

// const getUsersAC = (users: UserType[]) => ({ type: "APP/GET-USERS", users }) as const;
// const getTodosAC = (todos: TodoType[]) => ({ type: "APP/GET-TODOS", todos }) as const;
// const setLoadingAC = (isLoading: boolean) => ({ type: "APP/IS-LOADING", isLoading }) as const;
// const setError = (error: string | null) => ({ type: "APP/SET-ERROR", error }) as const;

// type ActionsType =
//     | ReturnType<typeof getUsersAC>
//     | ReturnType<typeof getTodosAC>
//     | ReturnType<typeof setLoadingAC>
//     | ReturnType<typeof setError>;

// // Utils functions
// function baseSuccessHandler<T>(dispatch: Dispatch, actionCreator: Function, data: T) {
//     dispatch(actionCreator(data));
//     dispatch(setLoadingAC(false));
// }

// // Thunk
// const getTodosTC = (): AppThunk => (dispatch) => {
//     dispatch(setLoadingAC(true));
//     api
//         .getTodos()
//         .then((res) => {
//             baseSuccessHandler(dispatch, getTodosAC, res.data)
//         })
//         .catch((e: AxiosError) => {
//             dispatch(setError(e.message));
//             dispatch(setLoadingAC(false));
//         });
// };

// const getUsersTC = (): AppThunk => (dispatch) => {
//     dispatch(setLoadingAC(true));
//     api
//         .getUsers()
//         .then((res) => {
//             baseSuccessHandler(dispatch, getUsersAC, res.data.items)
//         })
//         .catch((e: AxiosError) => {
//             dispatch(setError(e.message));
//             dispatch(setLoadingAC(false));
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

// // COMPONENTS
// // Loader
// export const Loader = () => {
//     return <h1>Loading ...</h1>;
// };

// const App = () => {
//     return (
//         <>
//             <h1>✅Todos & 🙂Users</h1>
//             <div style={{ display: "flex", justifyContent: "space-evenly" }}>
//                 <Todos />
//                 <Users />
//             </div>
//         </>
//     );
// };

// const Todos = () => {
//     const dispatch = useAppDispatch();
//     const todos = useAppSelector((state) => state.app.todos);
//     const error = useAppSelector((state) => state.app.error);
//     const isLoading = useAppSelector((state) => state.app.isLoading);

//     useEffect(() => {
//         dispatch(getTodosTC());
//     }, []);

//     return (
//         <div>
//             <h2>✅ Список тудулистов</h2>
//             {!!error && <h2 style={{ color: "red" }}>{error}</h2>}
//             {isLoading && <Loader />}
//             {todos.map((t) => {
//                 return (
//                     <div style={t.completed ? { color: "grey" } : {}} key={t.id}>
//                         <input type="checkbox" checked={t.completed} />
//                         <b>Описание</b>: {t.title}
//                     </div>
//                 );
//             })}
//         </div>
//     );
// };

// const Users = () => {
//     const dispatch = useAppDispatch();
//     const users = useAppSelector((state) => state.app.users);
//     const error = useAppSelector((state) => state.app.error);
//     const isLoading = useAppSelector((state) => state.app.isLoading);

//     useEffect(() => {
//         dispatch(getUsersTC());
//     }, []);

//     return (
//         <div>
//             <h2>🙂 Список юзеров</h2>
//             {!!error && <h2 style={{ color: "red" }}>{error}</h2>}
//             {isLoading && <Loader />}
//             <div>
//                 {users.map((u) => {
//                     return (
//                         <div key={u.id}>
//                             <b>name</b>:{u.name} - <b>age</b>:{u.age}
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
// // Перед вами список тудулистов и пользователей, которые находятся в постоянной загрузке.
// // Откройте network и вы увидите что запросы на сервер уходят и возвращаются с хорошими данными,
// // но вместо этого пользователь видит на экране Loader.
// // Для обработки успешного результата написана утилитная функция baseSuccessHandler.
// // Ваша задача воспользоваться этой функцией отобразить Todos и Users
// // Что нужно написать вместо XXX и YYY, чтобы реализовать данную задачу?
// // Ответ дайте через пробел.

// // 🖥 Пример ответа: dispatch(baseSuccessHandler(1,2,3))  dispatch(baseSuccessHandler(3,2,1)





// import { useFormik } from 'formik';
// import React from 'react'
// import ReactDOM from 'react-dom/client';
// import { BrowserRouter, Route, Routes } from 'react-router-dom'


// // Types
// type LoginFieldsType = {
//     firstName: string
//     email: string
// }

// // Main
// export const Login = () => {

//     const formik = useFormik({
//         initialValues: {
//             firstName: '',
//             email: '',
//         },
//         validate: (values) => {
//             const errors: Partial<LoginFieldsType> = {};

//             if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
//                 errors.email = 'Invalid email address';
//             }
//             return errors
//         },
//         onSubmit: values => {
//             alert(JSON.stringify(values, null, 2));
//         }
//     });

//     // Функция необходима для того, чтобы вебшторм не ругался на true в JSX
//     const getTrue = () => {
//         return true
//     }

//     return (
//         <form onSubmit={formik.handleSubmit}>
//             <div>
//                 <input placeholder={'Введите имя'} {...formik.getFieldProps('firstName')} />
//             </div>
//             <div>
//                 <input placeholder={'Введите email'}{...formik.getFieldProps('email')} />
//                 {formik.touched.email && formik.errors.email && <div style={{ color: 'red' }}>{formik.errors.email}</div>}
//             </div>
//             <button type="submit">Отправить</button>
//         </form>
//     );
// }

// // App
// export const App = () => {
//     return (
//         <Routes>
//             <Route path={''} element={<Login />} />
//         </Routes>
//     )
// }

// const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
// root.render(<BrowserRouter><App /></BrowserRouter>)

// // 📜 Описание:
// // Загрузив приложение вы увидите ошибку под полем email, но вы еще ничего не ввели.
// // Исправьте 46 строку кода так, чтобы:
// // 1) Сообщение об ошибке показывалось только в том случае, когда email введен некорректно.
// // 2) Вместо ERROR должен быть конкретный текст ошибки прописанный в валидации к этому полю.
// // 3) Сообщение должно показываться только в том случае, когда мы взаимодействовали с полем.
// // Исправленную версию строки напишите в качестве ответа.

// // 🖥 Пример ответа: {true && <div style={{color: 'red'}}>error.email</div>}




// import React from 'react'
// import ReactDOM from 'react-dom/client';
// import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'


// export const PageNotFound = () => {
//     return <h2>⛔ 404. Page not found ⛔</h2>
// }

// export const Profile = () => {
//     return <h2>😎 Профиль</h2>
// }


// export const Main = () => {
//     return (
//         <>
//             <h2>✅ Список тудулистов</h2>
//             <h2>📜 Список постов</h2>
//         </>
//     )
// }

// // App
// export const App = () => {

//     return (
//         <Routes>
//             <Route path={'profile'} element={<Profile />} />
//             <Route path={'/*'} element={<Navigate to='/profile' />} />
//             {/* ❗❗❗ XXX ❗❗❗  */}
//         </Routes>
//     )
// }


// const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
// root.render(<BrowserRouter><App /></BrowserRouter>)

// // 📜 Описание:
// // Вместо ХХХ напишите роут таким образом, чтобы вне зависимости от того чтобы будет в урле (login или home или...)
// // вас всегда редиректило на страницу профиля и при в это в урле по итогу
// // был адрес /profile

// // 🖥 Пример ответа: <Route path={'/'} element={'to profile page'}/>





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
//                             <button disabled={p.isDisabled} style={{ marginLeft: "15px" }} onClick={() => deletePostHandler(p.id)}>
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






// 17 17 17 17 17 17 17 17 17 17 17 17 17 17 17 17 17 17 17 17 17 17 17 17 17 17 17 17 17 17 17 17 17 17 17 17 17 17
// 17 17 17 17 17 17 17 17 17 17 17 17 17 17 17 17 17 17 17 17 17 17 17 17 17 17 17 17 17 17 17 17 17 17 17 17 17 17
// 17 17 17 17 17 17 17 17 17 17 17 17 17 17 17 17 17 17 17 17 17 17 17 17 17 17 17 17 17 17 17 17 17 17 17 17 17 17
// 17 17 17 17 17 17 17 17 17 17 17 17 17 17 17 17 17 17 17 17 17 17 17 17 17 17 17 17 17 17 17 17 17 17 17 17 17 17
// 17 17 17 17 17 17 17 17 17 17 17 17 17 17 17 17 17 17 17 17 17 17 17 17 17 17 17 17 17 17 17 17 17 17 17 17 17 17
// 17 17 17 17 17 17 17 17 17 17 17 17 17 17 17 17 17 17 17 17 17 17 17 17 17 17 17 17 17 17 17 17 17 17 17 17 17 17



// import React, { useEffect } from "react";
// import ReactDOM from "react-dom/client";
// import { ThunkAction, ThunkDispatch } from "redux-thunk";
// import { Provider, TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
// import { BrowserRouter, Navigate, Route, Routes, useNavigate } from "react-router-dom";
// import axios from "axios";
// import { configureStore, combineReducers } from "@reduxjs/toolkit";

// // API
// const instance = axios.create({ baseURL: "https://exams-frontend.kimitsu.it-incubator.io/api/" });

// const api = {
//     me() {
//         return instance.get("auth/me?delay=3");
//     },
// };

// // Reducer
// const initState = {
//     isInitialized: false,
//     isLoading: false,
//     isLoggedIn: false,
// };
// type InitStateType = typeof initState;

// const appReducer = (state: InitStateType = initState, action: ActionsType): InitStateType => {
//     switch (action.type) {
//         case "SET_IS_INITIALIZED": 2
//             return { ...state, isInitialized: action.isInitialized };
//         case "SET_LOADING":
//             return { ...state, isLoading: action.isLoading };
//         case "SET_IS_LOGGED_IN":
//             return { ...state, isLoggedIn: action.isLoggedIn };
//         default:
//             return state;
//     }
// };

// // Store
// const rootReducer = combineReducers({ app: appReducer });

// const store = configureStore({ reducer: rootReducer });
// type RootState = ReturnType<typeof store.getState>;
// type AppDispatch = ThunkDispatch<RootState, unknown, ActionsType>;
// type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, ActionsType>;
// const useAppDispatch = () => useDispatch<AppDispatch>();
// const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

// const setIsInitialized = (isInitialized: boolean) =>
//     ({ type: "SET_IS_INITIALIZED", isInitialized }) as const;
// const setLoading = (isLoading: boolean) => ({ type: "SET_LOADING", isLoading }) as const;
// const setIsLoggedIn = (isLoggedIn: boolean) => ({ type: "SET_IS_LOGGED_IN", isLoggedIn }) as const;
// type ActionsType =
//     | ReturnType<typeof setLoading>
//     | ReturnType<typeof setIsInitialized>
//     | ReturnType<typeof setIsLoggedIn>;

// // Thunk
// const me = (): AppThunk => async (dispatch) => {
//     dispatch(setLoading(true));
//     api
//         .me()
//         .then((res) => {
//             dispatch(setIsLoggedIn(true));
//         })
//         .finally(() => {
//             dispatch(setLoading(false));
//             dispatch(setIsInitialized(true));
//         });
// };

// // Components
// const Loader = () => <h2>🔘 Крутилка...</h2>;

// const Login = () => {
//     const isInitialized = useAppSelector((state) => state.app.isInitialized);
//     const isLoading = useAppSelector((state) => state.app.isLoading);
//     const isLoggedIn = useAppSelector((state) => state.app.isLoggedIn);

//     if (isLoggedIn) {
//         return <Navigate to={"/"} />;
//     }

//     return <h2>🐣 Login</h2>;
// };
// const Profile = () => {
//     const isInitialized = useAppSelector((state) => state.app.isInitialized);
//     const isLoading = useAppSelector((state) => state.app.isLoading);
//     const isLoggedIn = useAppSelector((state) => state.app.isLoggedIn);

//     if (!isLoggedIn) {
//         return <Navigate to={"/login"} />;
//     }

//     return <h2>😎 Profile </h2>;
// };

// export const App = () => {
//     const isInitialized = useAppSelector((state) => state.app.isInitialized);
//     const isLoading = useAppSelector((state) => state.app.isLoading);
//     const isLoggedIn = useAppSelector((state) => state.app.isLoggedIn);

//     const dispatch = useAppDispatch();

//     useEffect(() => {
//         dispatch(me());
//     }, []);

//     if (!isInitialized) return <Loader /> /////////good

//     return (
//         <Routes>
//             <Route path={"/"} element={<Profile />} />
//             <Route path={"login"} element={<Login />} />

//         </Routes>
//     );
// };

// const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
// root.render(
//     <BrowserRouter>
//         <Provider store={store}>
//             <App />
//         </Provider>
//     </BrowserRouter>,
// );

// // 📜 Описание:
// // После старта / обновления приложения мы видим Login, а потом через 3 секунды Profile
// // Но это плохое поведение.
// // Ваша задача написать код при котором пользователя не будет редиректить на Login,
// // пока приложение не проинициализировано,
// // а во время ожидания ответа с сервера он будет видеть Loader

// // 🖥 Пример ответа: <Loader/>




// import React from 'react'
// import ReactDOM from 'react-dom/client';

// export const App = () => {
//     return (
//         <div>
//             <h2>Что нужно прописать в консоли, чтобы создать новую ветку с названием login и перейти на нее ?</h2>
//         </div>
//     )
// }


// const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
// root.render(<App />);

// // 📜 Описание:
// // Что нужно прописать в консоли, чтобы создать новую ветку с названием login и перейти на нее ?
// //❗Ответ написать одной командой

// // 🖥 Пример ответа: git create login
// // git checkout -b login





// import React, { useEffect } from 'react'
// import ReactDOM from 'react-dom/client';
// import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom'

// const Login = () => {
//   const navigate = useNavigate()

//   useEffect(() => {
//     navigate('/secret/JIUzI1NiIsInR5cCI6IkpXVCJ9')
//   }, [])

//   return (
//     <div>Login</div>
//   )
// }
// const SecretToken = () => {
//   const token = 'no token' // FIX

//   return (
//     <h1>🦾 token: {token}</h1>
//   )
// }

// export const App = () => {
//   return (
//     <Routes>
//       <Route path={'/'} element={<Login/>}/>
//       <Route path={'/secret/:token'} element={<SecretToken/>}/>
//     </Routes>
//   )
// }

// const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
// root.render(
//   <BrowserRouter>
//     <App/>
//   </BrowserRouter>
// );

// // 📜Описание:
// // Исправьте код на 17 строке так, чтобы на странице отобразился токен.

// //❗Ответ можно указывать с типизацией и без. Учтено несколько вариантов
// // 🖥 Пример ответа: const token = '123'





// import ReactDOM from 'react-dom/client';
// import React, { useEffect, useState } from 'react'
// import { BrowserRouter, Route, Routes, useNavigate, useParams } from 'react-router-dom'

// const newSum = 1000

// const Login = () => {
//     const navigate = useNavigate()

//     useEffect(() => {
//         navigate(`/balance/${newSum}`)
//     }, [])

//     return (
//         <h1>Login</h1>
//     )
// }

// const Balance = () => {
//     const [balance, setBalance] = useState(500)

//     const params = useParams()

//     useEffect(() => {
//         if (params.bonus) {
//             setBalance(state => state + Number(params.bonus)) /////// good
//             // ❗❗❗ XXX ❗❗❗
//         }
//     }, [])

//     return (
//         <h1>💵 balance: {balance}</h1>
//     )
// }

// export const Bank = () => {
//     return (
//         <Routes>
//             <Route path={'/'} element={<Login />} />
//             <Route path={'/balance/:bonus'} element={<Balance />} />
//         </Routes>
//     )
// }

// const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
// root.render(
//     <BrowserRouter>
//         <Bank />
//     </BrowserRouter>
// );

// // 📜 Описание:
// // Перед вами баланс равный 500.
// // Ваша задача вместо XXX написать код,
// // в результате которого баланс увеличится на сумму указанную в роуте.

// // 🖥 Пример ответа: balance = newSum





// import React, { ChangeEvent, useState } from "react";
// import ReactDOM from "react-dom/client";
// import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
// import { ThunkAction, ThunkDispatch } from "redux-thunk";
// import { Provider, TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
// import axios from "axios";
// import { configureStore, combineReducers } from "@reduxjs/toolkit";

// // Types
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
// const initState = { isAuth: false };
// type InitStateType = typeof initState;

// const appReducer = (state: InitStateType = initState, action: ActionsType): InitStateType => {
//     switch (action.type) {
//         case "SET_AUTH":
//             return { ...state, isAuth: action.isAuth };
//         default:
//             return state;
//     }
// };

// // Store
// const rootReducer = combineReducers({ app: appReducer });

// const store = configureStore({ reducer: rootReducer });
// type RootState = ReturnType<typeof store.getState>;
// type AppDispatch = ThunkDispatch<RootState, unknown, ActionsType>;
// type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, ActionsType>;
// const useAppDispatch = () => useDispatch<AppDispatch>();
// const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

// const setAuth = (isAuth: boolean) => ({ type: "SET_AUTH", isAuth }) as const;
// type ActionsType = ReturnType<typeof setAuth>;

// // Thunk
// const loginTC =
//     (email: string, password: string): AppThunk =>
//         async (dispatch) => {
//             try {
//                 await api.login({ email, password });
//                 dispatch(setAuth(true));
//             } catch (e: any) {
//                 alert(`❌ ${e.response.data.errors} ❌`);
//             }
//         };

// // Components
// const Login = () => {
//     const isAuth = useAppSelector((state) => state.app.isAuth);

//     const dispatch = useAppDispatch();

//     const navigate = useNavigate();

//     const [email, setEmail] = useState("darrell@gmail.com");
//     const [password, setPassword] = useState("123");

//     const changeEmailHandler = (e: ChangeEvent<HTMLInputElement>) => {
//         setEmail(e.target.value);
//     };

//     const changePasswordHandler = (e: ChangeEvent<HTMLInputElement>) => {
//         setPassword(e.target.value);
//     };

//     if (isAuth) {
//         navigate("/profile");
//     }

//     dispatch(loginTC(email, password)) // не гуд

//     return (
//         <div>
//             <input type={"text"} value={email} onChange={changeEmailHandler} />
//             <input type={"password"} value={password} onChange={changePasswordHandler} />
//             <button disabled={!email || !password}>login</button>
//         </div>
//     );
// };

// export const App = () => {
//     return (
//         <Routes>
//             <Route path={"/"} element={<Login />} />
//             <Route path={"/profile"} element={<h2>😎 Profile</h2>} />
//         </Routes>
//     );
// };

// const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
// root.render(
//     <BrowserRouter>
//         <Provider store={store}>
//             <App />
//         </Provider>
//     </BrowserRouter>,
// );

// // 📜 Описание:
// // ❗ Email и password менять не надо. Это тестовые данные с которыми будет происходить успешный запрос.
// // Помогите разработчику исправить код так, чтобы успешно залогиниться (и редиректнуться на Profile)
// // В качестве ответа укажите код, который необходимо добавить, чтобы реализовать данную задачу.

// // 🖥 Пример ответа: navigate('/profile')

// // И ещё раз: нужно указать не исправленную строку кода, а код, который нужно добавить🙂





// import React from 'react'
// import ReactDOM from 'react-dom/client';

// export const App = () => {
//     return (
//         <div>
//             <h2>Для чего надо добавлять файлы в .gitignore ?</h2>
//             <ul>
//                 <li>1 - Чтобы git удалял их историю, храня только последнюю версию</li>
//                 <li>2 - Чтобы git при работе с этими файлам уведомлял при их изменении</li>
//                 <li>3 - Чтобы git не следил за изменениями в данных файлах</li>
//                 <li>4 - Файл .gitignore не несет никакой смысловой нагрузки, т.к. все файлы с которыми мы работаем должны
//                     отслеживаться. Соответственно никакие файлы в .gitignore добавлять не нужно
//                 </li>
//                 <li>5 - Нет правильного ответа</li>
//             </ul>
//         </div>
//     )
// }


// const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
// root.render(<App />);

// // 📜 Описание:
// // Для чего надо добавлять файлы в .gitignore ?
// // Может быть несколько вариантов ответа (ответ дайте через пробел).
// // ❗ Ответ будет засчитан как верный, только при полном правильном совпадении.
// // Если указали правильно один вариант (1),
// // а нужно было указать два варианта (1 и 2), то ответ в данном случае будет засчитан как неправильный

// // 🖥 Пример ответа: 1
// // 3 good




// import ReactDOM from 'react-dom/client';
// import { BrowserRouter, Route, Routes, useNavigate, useParams } from 'react-router-dom'
// import React from 'react'

// type UserType = {
//     id: number
//     name: string
//     avatar: string
//     age: number
//     address: string
// }

// const users: UserType[] = [
//     {
//         id: 1,
//         name: 'my Name',
//         age: 32,
//         avatar: '—ฅ/ᐠ.̫ .ᐟ\\ฅ—',
//         address: 'my Address'
//     },
//     {
//         id: 2,
//         name: 'John',
//         age: 22,
//         avatar: ':)',
//         address: 'California'
//     },
//     {
//         id: 3,
//         name: 'Mike',
//         age: 18,
//         avatar: '^._.^',
//         address: 'New York'
//     },
//     {
//         id: 4,
//         name: 'Emma',
//         age: 38,
//         avatar: '/ᐠ-ꞈ-ᐟ\\',
//         address: 'Washington'
//     },
// ]

// const StartPage = () => {
//     const navigate = useNavigate()
//     const friends = users.filter(u => u.id !== 1)

//     const mappedFriends = friends.map((f, i) => {
//         const go = () => {
//             navigate('/friend/' + f.id)
//         }

//         return (
//             <div key={i} onClick={go} style={{ paddingLeft: 24, color: 'blue', cursor: 'pointer' }}>
//                 {f.name}, {f.age}
//             </div>
//         )
//     })

//     return (
//         <div>
//             <h2>🙂 My profile</h2>
//             <Profile userId={1} />
//             <hr />
//             <h2>👪 Friends</h2>
//             {mappedFriends}
//         </div>
//     )
// }
// const Profile: React.FC<{ userId?: number }> = ({ userId }) => {
//     const { id } = useParams<{ id: string }>()
//     const user = users.find(u => u.id === +(id || userId || 0))

//     return (
//         <div>
//             <div>
//                 <b>avatar</b> {user?.avatar}
//             </div>
//             <div>
//                 <div><b>name</b>: {user?.name}</div>
//                 <div><b>age</b>: {user?.age}</div>
//                 <div><b>address</b>: {user?.address}</div>
//             </div>
//         </div>
//     )
// }

// export const Friends = () => {
//     return (
//         <Routes>
//             <Route path={'/'} element={<StartPage />} />
//             <Route path={'friend/:id'} element={<Profile />} /> good
//             <Route path={'*'} element={<div>❌404 Page Not Found❌</div>} />
//         </Routes>
//     )
// }

// const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
// root.render(
//     <BrowserRouter>
//         <Friends />
//     </BrowserRouter>
// );

// // 📜 Описание:
// // При загрузке приложения на экране отображается
// // профиль пользователя и список друзей.
// // Если кликнуть на пользователя, то видим ❌404 Page Not Found❌
// // Исправьте код, чтобы по клику на пользователя
// // отображалась странице с информацией о друге.
// // В качестве ответа укажите исправленную строку кода.
// //
// // 🖥 Пример ответа: <Profile userId={4}/>





// import ReactDOM from 'react-dom/client';
// import React, { useEffect, useState } from 'react'

// export const Mining = () => {
//     const [btc, setBtc] = useState(0)

//     useEffect(() => {
//         setInterval(() => {
//             setBtc(state => state + 1) // надо было писать прев стейт
//         }, 1000)
//     }, [])

//     return (
//         <h1>🪙 BTC: {btc}</h1>
//     )
// }

// const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
// root.render(<Mining />);

// // 📜 Описание:
// // Помогите разработчику намайнить биткоинов.
// // Что-то не майнятся 😥.
// // Что необходимо написать вместо XXX чтобы биткоины майнились (каждую секунду прибавлялся 1 биткоин) ?

// // ❗В качестве переменной используйте значение prevState

// // 🖥 Пример ответа: btc = 1000000




// type NewsType = {
//     title: string
//     author: string
// }
// type ArticleType = {
//     title: string
//     date: string
//     text: string
// }
// type PagePropsType = {
//     news: NewsType[]
//     mainArticle: ArticleType
// }
// export const Page: React.FC<PagePropsType> = (props) => {
//     return <div>
//         <article>
//             <h1>Название: {props.mainArticle.title}</h1>
//             <div>{props.mainArticle.date}</div>
//             <div>{props.mainArticle.text}</div>
//         </article>
//         <aside>Articles:
//             <ul>
//                 {props.news.map(n => <li>{n.title}, {n.author}</li>)}
//             </ul>
//         </aside>
//     </div>
// }






// 18 18 18 18 18 18 18 18 18 18 18 18 18 18 18 18 18 18 18 18 18 18 18 18 18 18 18 18 18 18 18 18 18 18 18 18 18
// 18 18 18 18 18 18 18 18 18 18 18 18 18 18 18 18 18 18 18 18 18 18 18 18 18 18 18 18 18 18 18 18 18 18 18 18 18
// 18 18 18 18 18 18 18 18 18 18 18 18 18 18 18 18 18 18 18 18 18 18 18 18 18 18 18 18 18 18 18 18 18 18 18 18 18
// 18 18 18 18 18 18 18 18 18 18 18 18 18 18 18 18 18 18 18 18 18 18 18 18 18 18 18 18 18 18 18 18 18 18 18 18 18
// 18 18 18 18 18 18 18 18 18 18 18 18 18 18 18 18 18 18 18 18 18 18 18 18 18 18 18 18 18 18 18 18 18 18 18 18 18



// // //затупок
// import ReactDOM from "react-dom/client";
// import { ThunkAction, ThunkDispatch } from "redux-thunk";
// import { Provider, TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { configureStore, combineReducers } from "@reduxjs/toolkit";

// // Styles
// const table: React.CSSProperties = {
//     borderCollapse: "collapse",
//     width: "100%",
//     tableLayout: "fixed",
// };

// const th: React.CSSProperties = {
//     padding: "10px",
//     border: "1px solid black",
//     background: "lightgray",
//     cursor: "pointer",
// };

// const td: React.CSSProperties = {
//     padding: "10px",
//     border: "1px solid black",
// };

// // Types
// type UserType = {
//     id: string;
//     name: string;
//     age: number;
// };

// type UsersResponseType = {
//     items: UserType[];
//     totalCount: number;
// };

// type ParamsType = {
//     sortBy: string | null;
//     sortDirection: "asc" | "desc" | null;
// };

// // API
// const instance = axios.create({ baseURL: "https://exams-frontend.kimitsu.it-incubator.io/api/" });

// const api = {
//     getUsers(params?: ParamsType) {
//         return instance.get<UsersResponseType>("users", { params });
//     },
// };

// // Reducer
// const initState = { users: [] as UserType[] };
// type InitStateType = typeof initState;

// const appReducer = (state: InitStateType = initState, action: ActionsType): InitStateType => {
//     switch (action.type) {
//         case "SET_USERS":
//             return { ...state, users: action.users };
//         default:
//             return state;
//     }
// };

// // Store
// const rootReducer = combineReducers({ app: appReducer });

// const store = configureStore({ reducer: rootReducer });
// type RootState = ReturnType<typeof store.getState>;
// type AppDispatch = ThunkDispatch<RootState, unknown, ActionsType>;
// type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, ActionsType>;
// const useAppDispatch = () => useDispatch<AppDispatch>();
// const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

// const setUsersAC = (users: UserType[]) => ({ type: "SET_USERS", users }) as const;
// type ActionsType = ReturnType<typeof setUsersAC>;

// // Thunk
// const getUsersTC =
//     (searchParams?: ParamsType): AppThunk =>
//         (dispatch) => {
//             api.getUsers(searchParams).then((res) => dispatch(setUsersAC(res.data.items)));
//         };

// export const Users = () => {
//     const [activeColumn, setActiveColumn] = useState<ParamsType>({
//         sortBy: null,
//         sortDirection: "asc",
//     });

//     const users = useAppSelector((state) => state.app.users);

//     const dispatch = useAppDispatch();

//     useEffect(() => {
//         dispatch(activeColumn.sortBy ? getUsersTC(activeColumn) : getUsersTC());
//     }, [activeColumn]);

//     // const sortHandler = (sortBy: string) => {
//     //     setActiveColumn({ sortBy, sortDirection: activeColumn.sortDirection === 'asc' ? 'desc' : 'asc' })
//     //     // ❗❗❗ XXX ❗❗❗
//     // };

//     const sortHandler = (sortBy: string) => {
//         setActiveColumn((prev) => {
//             const isSameColumn = prev.sortBy === sortBy;
//             const sortDirection = isSameColumn
//                 ? prev.sortDirection === "asc"
//                     ? "desc"
//                     : "asc"
//                 : "asc";
//             return { sortBy, sortDirection };
//         });
//     };
//     return (
//         <div>
//             <h1>👪 Список пользователей</h1>
//             <table style={table}>
//                 <thead>
//                     <tr>
//                         <th style={th} onClick={() => sortHandler("name")}>
//                             Name
//                             {activeColumn?.sortBy === "name" &&
//                                 (activeColumn.sortDirection === "asc" ? (
//                                     <span> &#8593;</span>
//                                 ) : (
//                                     <span> &#8595;</span>
//                                 ))}
//                         </th>
//                         <th style={th} onClick={() => sortHandler("age")}>
//                             Age
//                             {activeColumn?.sortBy === "age" &&
//                                 (activeColumn.sortDirection === "asc" ? (
//                                     <span> &#8593;</span>
//                                 ) : (
//                                     <span> &#8595;</span>
//                                 ))}
//                         </th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {users.map((u) => {
//                         return (
//                             <tr key={u.id}>
//                                 <td style={td}>{u.name}</td>
//                                 <td style={td}>{u.age}</td>
//                             </tr>
//                         );
//                     })}
//                 </tbody>
//             </table>
//         </div>
//     );
// };

// const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
// root.render(
//     <Provider store={store}>
//         <Users />
//     </Provider>,
// );

// // 📜 Описание:
// // Перед вами таблица с пользователями.
// // Ваша задача вместо XXX написать код для сортировки пользователей по имени и возрасту.
// // Т.е. при нажатии на name либо age пользователи должны сортироваться в таблице.
// // При повторном нажатии на этот же столбец сортировка должна происходить в обратном порядке
// // При последующих нажатиях сортировка не должна сбрасываться, а должна продолжать переключаться.
// // ❗ сортировка пользователей происходит на сервере, т.е. sort использовать не нужно

// // 🖥 Пример ответа: sort(a, b)





// import React from 'react'
// import ReactDOM from 'react-dom/client';

// export const App = () => {
//     return (
//         <div>
//             <h2>Сколько всего веток может быть в репозитории ?</h2>
//             <ul>
//                 <li>1 - 2 ветки. master(main) и develop</li>
//                 <li>2 - Число веток согласовывается в команде разработчиков и устанавливается в git config</li>
//                 <li>3 - Всегда есть ветка master (main), develop может быть по соглашения команды разработчиков. Под каждую фичу
//                     создается новая ветка. При этом от ветки с фичей запрещено создавать новые ветки</li>
//                 <li>4 - Нет правильного ответа</li>
//             </ul>
//         </div>
//     )
// }

// const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
// root.render(<App />);

// // 📜 Описание:
// // Сколько всего веток может быть в репозитории ?
// // Может быть несколько вариантов ответа (ответ дайте через пробел).
// // ❗ Ответ будет засчитан как верный, только при полном правильном совпадении.
// // Если указали правильно один вариант (1),
// // а нужно было указать два варианта (1 и 2), то ответ в данном случае будет засчитан как неправильный

// // 🖥 Пример ответа: 1  // 4






// import ReactDOM from "react-dom/client";
// import { ThunkAction, ThunkDispatch } from "redux-thunk";
// import { Provider, TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
// import React from "react";
// import { configureStore, combineReducers } from "@reduxjs/toolkit";

// // Reducer
// const initState = {
//     goodMorning: [
//         { id: 1, name: "errors" },
//         { id: 2, name: "bugs" },
//         { id: 3, name: "fackups" },
//         { id: 4, name: "laziness" },
//         { id: 5, name: "work" },
//     ] as { id: number; name: string }[],
// };

// type InitStateType = typeof initState;

// const appReducer = (state: InitStateType = initState, action: ActionsType): InitStateType => {
//     switch (action.type) {
//         case "DELETE":
//             return {
//                 ...state,
//                 goodMorning: state.goodMorning.filter((g) => g.id !== action.id),
//             };
//         default:
//             return state;
//     }
// };

// // Store
// const rootReducer = combineReducers({ app: appReducer });

// const store = configureStore({ reducer: rootReducer });
// type RootState = ReturnType<typeof store.getState>;
// type AppDispatch = ThunkDispatch<RootState, unknown, ActionsType>;
// type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, ActionsType>;
// const useAppDispatch = () => useDispatch<AppDispatch>();
// const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

// const deleteSome = (id: any) => ({ type: "DELETE", id }) as const;
// type ActionsType = ReturnType<typeof deleteSome>;

// // Components
// export const Monday = () => {
//     const goodMorning = useAppSelector((state) => state.app.goodMorning);
//     const dispatch = useAppDispatch();

//     const mapped = goodMorning.map((p: any, i: number) => (
//         <div key={i}>
//             {p.name}
//             <button onClick={() => dispatch(deleteSome(p.id))}>X</button>
//         </div>
//     ));

//     return <div>{mapped}</div>;
// };

// const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
// root.render(
//     <Provider store={store}>
//         <Monday />
//     </Provider>,
// );

// // 📜 Описание:
// // На экране отображен список дел.
// // Попробуйте удалить какой-нибудь элемент - у вас не получится.
// // Найдите ошибку.
// // В качестве ответа укажите исправленную версию строки
// //
// // 🖥 Пример ответа: delete goodMorning




// import React, { useEffect } from "react";
// import ReactDOM from "react-dom/client";
// import { ThunkAction, ThunkDispatch } from "redux-thunk";
// import { Provider, TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
// import axios from "axios";
// import { configureStore, combineReducers } from "@reduxjs/toolkit";

// type UserType = {
//     id: string;
//     name: string;
//     age: number;
// };

// // API
// const instance = axios.create({ baseURL: "https://exams-frontend.kimitsu.it-incubator.io/api/" });

// const api = {
//     getUsers(pageNumber: number) {
//         return instance.get(`users?pageSize=${3}&pageNumber=${pageNumber}`);
//     },
// };

// // Reducer
// const initState = { page: 1, users: [] as UserType[] };
// type InitStateType = typeof initState;

// const appReducer = (state: InitStateType = initState, action: ActionsType): InitStateType => {
//     switch (action.type) {
//         case "SET_PAGE":
//             console.log(action.page)
//             return { ...state, page: action.page };
//         case "SET_USERS":
//             return { ...state, users: action.users };
//         default:
//             return state;
//     }
// };

// const rootReducer = combineReducers({ app: appReducer });

// const store = configureStore({ reducer: rootReducer });
// type RootState = ReturnType<typeof store.getState>;
// type AppDispatch = ThunkDispatch<RootState, unknown, ActionsType>;
// type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, ActionsType>;
// const useAppDispatch = () => useDispatch<AppDispatch>();
// const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

// const setPageAC = (page: number) => ({ type: "SET_PAGE", page }) as const;
// const setUsersAC = (users: UserType[]) => ({ type: "SET_USERS", users }) as const;
// type ActionsType = ReturnType<typeof setPageAC> | ReturnType<typeof setUsersAC>;

// const getUsers = (): AppThunk => (dispatch, getState) => {
//     const page = getState().app.page;
//     api.getUsers(page).then((res) => dispatch(setUsersAC(res.data.items))); // не успел отправить
// };

// // Components
// export const App = () => {
//     const page = useAppSelector((state) => state.app.page);
//     const users = useAppSelector((state) => state.app.users);

//     const dispatch = useAppDispatch();

//     useEffect(() => {
//         dispatch(getUsers());
//     }, [page]);

//     const pages = new Array(4).fill(1).map((p, i) => (
//         <button key={i} onClick={() => dispatch(setPageAC(i + 1))} disabled={page === i + 1}>
//             {i + 1}
//         </button>
//     ));

//     return (
//         <div>
//             {users.map((u) => {
//                 return (
//                     <div style={{ marginBottom: "25px" }} key={u.id}>
//                         <p>
//                             <b>name</b>: {u.name}
//                         </p>
//                         <p>
//                             <b>age</b>: {u.age}
//                         </p>
//                     </div>
//                 );
//             })}
//             {pages}
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
// // При переходе по страницам должны подгружаться новые пользователи.
// // Однако в коде допущена ошибка и всегда подгружаются одни и теже пользователи.
// // Задача: найти эту ошибку, и исправленную версию строки написать в качестве ответа.

// // 🖥 Пример ответа: {pages.next()}






// import axios from 'axios'
// import React, { useEffect, useState } from 'react'
// import ReactDOM from 'react-dom/client'
// import { useParams } from 'react-router-dom';

// type UserType = {
//     id: string;
//     name: string;
//     age: number;
// }

// // API
// const instance = axios.create({ baseURL: 'https://exams-frontend.kimitsu.it-incubator.io/api/' })

// const api = {
//     getUsers() {
//         // return instance.get('users?pageSize=3&pageNumber=2')
//         return instance.get('users', {params: {pageSize: 3, pageNumber:2}})
//     },
// }

// // App
// export const App = () => {

//     const [users, setUsers] = useState<UserType[]>([])

//     useEffect(() => {
//         api.getUsers()
//             .then((res) => {
//                 setUsers(res.data.items)
//             })
//     }, [])


//     return (
//         <>
//             <h1>👪 Список пользователей</h1>
//             {
//                 users.map(u => {
//                     return <div style={{ display: 'flex', gap: '10px' }} key={u.id}>
//                         <p><b>name</b>: {u.name}</p>
//                         <p><b>age</b>: {u.age}</p>
//                     </div>
//                 })
//             }
//         </>
//     )
// }


// const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
// root.render(<App />)

// // 📜 Описание:
// // На странице отображен список юзеров из 3-человек.
// // Подгрузились именно эти пользователи не случайно, а из-за query параметров указанных в запросе.
// // Ваша задача переписать строку с запросом таким образом, чтобы получить аналогичный результат (все тех же юзеров),
// // при этом запрещено в ответе использовать символы вопроса и амперсанда.
// // В качестве ответа укажите полностью исправленную строку коду (переносы разрешены)

// import axios from 'axios'
// import React, { useEffect, useState } from 'react'
// import ReactDOM from 'react-dom/client'
// import { useParams } from 'react-router-dom';

// type UserType = {
//     id: string;
//     name: string;
//     age: number;
// }

// // API
// const instance = axios.create({ baseURL: 'https://exams-frontend.kimitsu.it-incubator.io/api/' })

// const api = {
//     getUsers() {
//         // return instance.get('users?pageSize=3&pageNumber=2')
//         return instance.get('users', {params: {pageSize: 3, pageNumber:2}})
//     },
// }

// // App
// export const App = () => {

//     const [users, setUsers] = useState<UserType[]>([])

//     useEffect(() => {
//         api.getUsers()
//             .then((res) => {
//                 setUsers(res.data.items)
//             })
//     }, [])


//     return (
//         <>
//             <h1>👪 Список пользователей</h1>
//             {
//                 users.map(u => {
//                     return <div style={{ display: 'flex', gap: '10px' }} key={u.id}>
//                         <p><b>name</b>: {u.name}</p>
//                         <p><b>age</b>: {u.age}</p>
//                     </div>
//                 })
//             }
//         </>
//     )
// }


// const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
// root.render(<App />)

// // 📜 Описание:
// // На странице отображен список юзеров из 3-человек.
// // Подгрузились именно эти пользователи не случайно, а из-за query параметров указанных в запросе.
// // Ваша задача переписать строку с запросом таким образом, чтобы получить аналогичный результат (все тех же юзеров),
// // при этом запрещено в ответе использовать символы вопроса и амперсанда.
// // В качестве ответа укажите полностью исправленную строку коду (переносы разрешены)

// import axios from 'axios'
// import React, { useEffect, useState } from 'react'
// import ReactDOM from 'react-dom/client'
// import { useParams } from 'react-router-dom';

// type UserType = {
//     id: string;
//     name: string;
//     age: number;
// }

// // API
// const instance = axios.create({ baseURL: 'https://exams-frontend.kimitsu.it-incubator.io/api/' })

// const api = {
//     getUsers() {
//         // return instance.get('users?pageSize=3&pageNumber=2')
//         return instance.get('users', {params: {pageSize: 3, pageNumber:2}})
//     },
// }

// // App
// export const App = () => {

//     const [users, setUsers] = useState<UserType[]>([])

//     useEffect(() => {
//         api.getUsers()
//             .then((res) => {
//                 setUsers(res.data.items)
//             })
//     }, [])


//     return (
//         <>
//             <h1>👪 Список пользователей</h1>
//             {
//                 users.map(u => {
//                     return <div style={{ display: 'flex', gap: '10px' }} key={u.id}>
//                         <p><b>name</b>: {u.name}</p>
//                         <p><b>age</b>: {u.age}</p>
//                     </div>
//                 })
//             }
//         </>
//     )
// }


// const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
// root.render(<App />)

// // 📜 Описание:
// // На странице отображен список юзеров из 3-человек.
// // Подгрузились именно эти пользователи не случайно, а из-за query параметров указанных в запросе.
// // Ваша задача переписать строку с запросом таким образом, чтобы получить аналогичный результат (все тех же юзеров),
// // при этом запрещено в ответе использовать символы вопроса и амперсанда.
// // В качестве ответа укажите полностью исправленную строку коду (переносы разрешены)

// import axios from 'axios'
// import React, { useEffect, useState } from 'react'
// import ReactDOM from 'react-dom/client'
// import { useParams } from 'react-router-dom';

// type UserType = {
//     id: string;
//     name: string;
//     age: number;
// }

// // API
// const instance = axios.create({ baseURL: 'https://exams-frontend.kimitsu.it-incubator.io/api/' })

// const api = {
//     getUsers() {
//         // return instance.get('users?pageSize=3&pageNumber=2')
//         return instance.get('users', { params: { pageSize: 3, pageNumber: 2 } })
//     },
// }

// // App
// export const App = () => {

//     const [users, setUsers] = useState<UserType[]>([])

//     useEffect(() => {
//         api.getUsers()
//             .then((res) => {
//                 setUsers(res.data.items)
//             })
//     }, [])


//     return (
//         <>
//             <h1>👪 Список пользователей</h1>
//             {
//                 users.map(u => {
//                     return <div style={{ display: 'flex', gap: '10px' }} key={u.id}>
//                         <p><b>name</b>: {u.name}</p>
//                         <p><b>age</b>: {u.age}</p>
//                     </div>
//                 })
//             }
//         </>
//     )
// }


// const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
// root.render(<App />)

// // 📜 Описание:
// // На странице отображен список юзеров из 3-человек.
// // Подгрузились именно эти пользователи не случайно, а из-за query параметров указанных в запросе.
// // Ваша задача переписать строку с запросом таким образом, чтобы получить аналогичный результат (все тех же юзеров),
// // при этом запрещено в ответе использовать символы вопроса и амперсанда.
// // В качестве ответа укажите полностью исправленную строку коду (переносы разрешены)


// // 🖥 Пример ответа: return instance.get('users=pageSize=3=pageNumber=2')
// // return instance.get('users', { params: { pageSize: 3, pageNumber: 2 } }) // разобрать и переписать




// import ReactDOM from "react-dom/client";
// import React, { useEffect } from "react";
// import { ThunkAction, ThunkDispatch } from "redux-thunk";
// import { Provider, TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
// import { configureStore, combineReducers } from "@reduxjs/toolkit";

// // Reducer
// const initState = { find: "", words: [] as string[] };
// type InitStateType = typeof initState;

// const appReducer = (state: InitStateType = initState, action: ActionsType): InitStateType => {
//     switch (action.type) {
//         case "SET_FIND":
//             return { ...state, find: action.find };
//         case "SET_WORDS":
//             return { ...state, words: action.words };
//         default:
//             return state;
//     }
// };

// // Store
// const rootReducer = combineReducers({ app: appReducer });

// const store = configureStore({ reducer: rootReducer });
// type RootState = ReturnType<typeof store.getState>;
// type AppDispatch = ThunkDispatch<RootState, unknown, ActionsType>;
// type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, ActionsType>;
// const useAppDispatch = () => useDispatch<AppDispatch>();
// const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

// const setFind = (find: string) => ({ type: "SET_FIND", find }) as const;
// const setWords = (words: string[]) => ({ type: "SET_WORDS", words }) as const;
// type ActionsType = ReturnType<typeof setFind> | ReturnType<typeof setWords>;

// // Components
// const defWords = ["a", "ab", "abc", "b", "bc", "c", "d", "ac", "bcd", "cd", "abcd", "bd"];

// export const App = () => {
//     const find = useAppSelector((state) => state.app.find);
//     const words = useAppSelector((state) => state.app.words);

//     const dispatch = useAppDispatch();

//     useEffect(() => {
//         dispatch(setWords(defWords));
//     }, []);

//     const mapped = words
//         .filter((w: string) => new RegExp(find, "gi").test(w))
//         .map((w: string, i: number) => <div key={i}>{w}</div>);

//     const onChangeHandler = (value: string) => {
//         dispatch(setFind(value))  // верно/////////////////////////////
//     };

//     return (
//         <div>
//             <input value={find} onChange={(e) => onChangeHandler(e.target.value)} />
//             {mapped}
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
// // На экране отображен массив слов.
// // Ваша задача починить фильтрацию:
// // вводите символы в input и сразу видите как фильтруются данные.
// // В качестве ответа укажите исправленную версию строки.
// //
// // 🖥 Пример ответа: dispatch(setFind(defWords))





// import React from 'react'
// import ReactDOM from 'react-dom/client';

// export const App = () => {
//     return (
//         <div>
//             <h2>Какое из приведенных ниже определений верно?</h2>
//             <ol>
//                 <li>1 - Команда git push используется для выгрузки содержимого локального репозитория в удаленный репозиторий.
//                     Она позволяет передать коммиты из локального репозитория в удаленный.
//                 </li>
//                 <li>2 - Команда git pull используется для обновления локальной версии репозитория, синхронизируя её с содержимым удалённого репозитория
//                 </li>
//                 <li>3 - Команда git fetch загружает коммиты, файлы и ссылки из удаленного репозитория в ваш локальный
//                     репозиторий. Извлеките данные с помощью команды fetch, если хотите увидеть, над чем работают остальные.
//                 </li>
//                 <li>4 - Ни одно из вышеперечисленных определений не верно</li>
//             </ol>
//         </div>
//     )
// }


// const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
// root.render(<App />);

// // 📜 Описание:
// // Какое из приведенных ниже определений верно?
// // Может быть несколько вариантов ответа (ответ дайте через пробел).
// // ❗ Ответ будет засчитан как верный, только при полном правильном совпадении.
// // Если указали правильно один вариант (1),
// // а нужно было указать два варианта (1 и 2), то ответ в данном случае будет засчитан как неправильный

// // 🖥 Пример ответа: 1 // 1 2 не верно
// // git fetch просто подтягивает изменения, а git pull еще и содржит в себе git merge
// // git fetch + git merge = git pull
// //4




// import ReactDOM from "react-dom/client";
// import { ThunkAction, ThunkDispatch } from "redux-thunk";
// import { Provider, TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { configureStore, combineReducers } from "@reduxjs/toolkit";

// type UserType = {
//     id: string;
//     name: string;
//     age: number;
// };

// type UsersResponseType = {
//     items: UserType[];
//     totalCount: number;
// };

// // API
// const instance = axios.create({ baseURL: "https://exams-frontend.kimitsu.it-incubator.io/api/" });

// const api = {
//     getUsers(search: string) {
//         return instance.get<UsersResponseType>(`users?name=${search}&pageSize=100`);
//     },
// };

// const initState = { users: [] as UserType[] };
// type InitStateType = typeof initState;

// const appReducer = (state: InitStateType = initState, action: ActionsType): InitStateType => {
//     switch (action.type) {
//         case "SET_USERS":
//             return { ...state, users: action.users };
//         default:
//             return state;
//     }
// };

// // Store
// const rootReducer = combineReducers({ app: appReducer });

// const store = configureStore({ reducer: rootReducer });
// type RootState = ReturnType<typeof store.getState>;
// type AppDispatch = ThunkDispatch<RootState, unknown, ActionsType>;
// type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, ActionsType>;
// const useAppDispatch = () => useDispatch<AppDispatch>();
// const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

// const setUsersAC = (users: UserType[]) => ({ type: "SET_USERS", users }) as const;
// type ActionsType = ReturnType<typeof setUsersAC>;

// // Thunk
// const getFriends =
//     (name: string): AppThunk =>
//         (dispatch) => {
//             api.getUsers(name).then((res) => dispatch(setUsersAC(res.data.items)));
//         };

// export const Users = () => {
//     const users = useAppSelector((state) => state.app.users);
//     const dispatch = useAppDispatch();
//     const [name, setName] = useState("");
//     const [timerId, setTimerId] = useState(0);

//     useEffect(() => {
//         clearTimeout(timerId)
//         setTimerId(
//             +setTimeout(() => {
//                 dispatch(getFriends(name));
//             }, 1500),
//         );
//     }, [name]);

//     return (
//         <div>
//             <input value={name} onChange={(e) => setName(e.target.value)} />
//             {users.map((u) => {
//                 return (
//                     <div key={u.id}>
//                         <p>
//                             <b>name</b>: {u.name}
//                         </p>
//                     </div>
//                 );
//             })}
//         </div>
//     );
// };

// const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
// root.render(
//     <Provider store={store}>
//         <Users />
//     </Provider>,
// );

// // 📜 Описание:
// // На экране input, куда можно вводить символы.
// // Откройте Network/ fetch/XHR и поробуйте вводить символы
// // Обратите внимание, что все символы которые вы вводите уходят на сервер -
// // это плохо.
// //
// // 🪛 Задача: Починить debounce
// // В качестве ответа напишите строку кода которую необходимо исправить или добавить
// // для реализации данной задачи
// //
// // 🖥 Пример ответа: value={name(1500)}





// import ReactDOM from "react-dom/client";
// import React, { useEffect } from "react";
// import { ThunkAction, ThunkDispatch } from "redux-thunk";
// import { Provider, TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
// import { configureStore, combineReducers } from "@reduxjs/toolkit";

// // Reducer
// const initState = { find: "", words: [] as string[] };
// type InitStateType = typeof initState;

// const appReducer = (state: InitStateType = initState, action: ActionsType): InitStateType => {
//     switch (action.type) {
//         case "SET_FIND":
//             return { ...state, find: action.find };
//         case "SET_WORDS":
//             return { ...state, words: action.words };
//         default:
//             return state;
//     }
// };

// // Store
// const rootReducer = combineReducers({ app: appReducer });

// const store = configureStore({ reducer: rootReducer });
// type RootState = ReturnType<typeof store.getState>;
// type AppDispatch = ThunkDispatch<RootState, unknown, ActionsType>;
// type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, ActionsType>;
// const useAppDispatch = () => useDispatch<AppDispatch>();
// const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

// const setFind = (find: string) => ({ type: "SET_FIND", find }) as const;
// const setWords = (words: string[]) => ({ type: "SET_WORDS", words }) as const;
// type ActionsType = ReturnType<typeof setFind> | ReturnType<typeof setWords>;

// // Components
// const defWords = ["a", "ab", "abc", "b", "bc", "c", "d", "ac", "bcd", "cd", "abcd", "bd"];

// export const App = () => {
//     const find = useAppSelector((state) => state.app.find);
//     const words = useAppSelector((state) => state.app.words);

//     const dispatch = useAppDispatch();

//     useEffect(() => {
//         dispatch(setWords(defWords));
//     }, []);

//     const mapped = words
//         .filter((w: string) => new RegExp(find, "gi").test(w))
//         .map((w: string, i: number) => <div key={i}>{w}</div>);

//     const onChangeHandler = (value: string) => {
//         dispatch(setFind(value))
//     };

//     return (
//         <div>
//             <input value={find} onChange={(e) => onChangeHandler(e.target.value)} />
//             {mapped}
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
// // На экране отображен массив слов.
// // Ваша задача починить фильтрацию:
// // вводите символы в input и сразу видите как фильтруются данные.
// // В качестве ответа укажите исправленную версию строки.
// //
// // 🖥 Пример ответа: dispatch(setFind(defWords))




// 19 19 19 19 19 19 19 19 19 19 19 19 19 19 19 19 19 19 19 19 19 19 19 19 19 19 19 19 19 19 19 19 19 19 19 19 19 19 19
// 19 19 19 19 19 19 19 19 19 19 19 19 19 19 19 19 19 19 19 19 19 19 19 19 19 19 19 19 19 19 19 19 19 19 19 19 19 19 19
// 19 19 19 19 19 19 19 19 19 19 19 19 19 19 19 19 19 19 19 19 19 19 19 19 19 19 19 19 19 19 19 19 19 19 19 19 19 19 19
// 19 19 19 19 19 19 19 19 19 19 19 19 19 19 19 19 19 19 19 19 19 19 19 19 19 19 19 19 19 19 19 19 19 19 19 19 19 19 19
// 19 19 19 19 19 19 19 19 19 19 19 19 19 19 19 19 19 19 19 19 19 19 19 19 19 19 19 19 19 19 19 19 19 19 19 19 19 19 19
// 19 19 19 19 19 19 19 19 19 19 19 19 19 19 19 19 19 19 19 19 19 19 19 19 19 19 19 19 19 19 19 19 19 19 19 19 19 19 19




// import React from "react";
// import ReactDOM from "react-dom/client";
// import { ThunkAction, ThunkDispatch } from "redux-thunk";
// import { Provider, TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
// import { configureStore, combineReducers } from "@reduxjs/toolkit";

// // Reducer
// const initState = {
//     animals: [
//         { likes: 0, name: "cat" },
//         { likes: 0, name: "dog" },
//         { likes: 0, name: "fish" },
//         { likes: 0, name: "spider" },
//         { likes: 0, name: "bird" },
//     ] as { likes: number; name: string }[],
// };
// type InitStateType = typeof initState;

// const appReducer = (state: InitStateType = initState, action: ActionsType): InitStateType => {
//     switch (action.type) {
//         case "LIKE":
//             return {
//                 ...state,
//                 animals: state.animals.map((animal) => {
//                     return true ? { ...animal, likes: action.likes } : animal;
//                 }),
//             };
//     }
//     return state;
// };

// // Store
// const rootReducer = combineReducers({ app: appReducer });

// const store = configureStore({ reducer: rootReducer });
// type RootState = ReturnType<typeof store.getState>;
// type AppDispatch = ThunkDispatch<RootState, unknown, ActionsType>;
// type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, ActionsType>;
// const useAppDispatch = () => useDispatch<AppDispatch>();
// const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

// const like = (likes: any, name: any) => ({ type: "LIKE", likes, name }) as const;
// type ActionsType = ReturnType<typeof like>;

// // Components
// export const Animals = () => {
//     const animals = useAppSelector((state) => state.app.animals);
//     const dispatch = useAppDispatch();

//     const mapped = animals.map((a: any, i: number) => (
//         <div key={i}>
//             {a.name}-{a.likes}-<button onClick={() => dispatch(like(a.likes + 1, a.name))}>Like!</button>
//         </div>
//     ));

//     return <div>{mapped}</div>;
// };

// const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
// root.render(
//     <Provider store={store}>
//         <Animals />
//     </Provider>,
// );

// // 📜 Описание:
// // На экране отображен список животных.
// // Кликните на like и вы увидите, что ничего не происходит.
// // Ваша задача починить лайки.
// // В качестве ответа укажите исправленную версию строки
// //
// // 🖥 Пример ответа: -{a.likes + 1}-




// import ReactDOM from "react-dom/client";
// import { ThunkAction, ThunkDispatch } from "redux-thunk";
// import { Provider, TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
// import React, { useState } from "react";
// import { configureStore, combineReducers } from "@reduxjs/toolkit";

// // Styles
// const modal: React.CSSProperties = {
//     position: "fixed",
//     zIndex: 1,
//     left: 0,
//     top: 0,
//     width: "100%",
//     height: "100%",
//     overflow: "auto",
//     backgroundColor: "rgba(23,26,38,0.26)",
// };

// const modalContent: React.CSSProperties = {
//     backgroundColor: "#fefefe",
//     margin: "15% auto",
//     padding: "20px",
//     border: "1px solid #888",
//     width: "80%",
// };

// // Reducer
// const initState = { goodThings: [] as any[] };
// type InitStateType = typeof initState;

// const appReducer = (state: InitStateType = initState, action: ActionsType): InitStateType => {
//     switch (action.type) {
//         case "LIKE":
//             return {
//                 ...state,
//                 goodThings: [action.thing, ...state.goodThings],
//             };
//     }
//     return state;
// };

// // Store
// const rootReducer = combineReducers({ app: appReducer });

// const store = configureStore({ reducer: rootReducer });
// type RootState = ReturnType<typeof store.getState>;
// type AppDispatch = ThunkDispatch<RootState, unknown, ActionsType>;
// type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, ActionsType>;
// const useAppDispatch = () => useDispatch<AppDispatch>();
// const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

// const addThing = (thing: any) => ({ type: "LIKE", thing }) as const;
// type ActionsType = ReturnType<typeof addThing>;

// const Modal = (props: any) => {
//     return (
//         <div style={modalContent}>
//             modal:
//             <input value={props.value} onChange={(e) => props.setValue(e.target.value)} />
//             <button onClick={props.add}>add</button>
//         </div>
//     );
// };

// // Components
// export const Animals = () => {
//     const goodThings = useAppSelector((state) => state.app.goodThings);
//     const dispatch = useAppDispatch();

//     const [value, setValue] = useState("");
//     const [show, setShow] = useState(false);

//     const mapped = goodThings.map((t: any, i: number) => <div key={i}>{t}</div>);

//     return (
//         <div style={modal}>
//             <button onClick={() => setShow(true)}>show modal</button>

//             {show && (
//                 <Modal
//                     value={value}
//                     setValue={setValue}
//                     add={() => {
//                         dispatch(addThing(value));
//                         setValue("");
//                         setShow(false)/////////////////////
//                     }}
//                 />
//             )}

//             {mapped}
//         </div>
//     );
// };

// const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
// root.render(
//     <Provider store={store}>
//         <Animals />
//     </Provider>,
// );

// // 📜 Описание:
// // Откройте модалку, введите любой текст и нажмите add.
// // Введенный текст отобразится снизу, но модалка останется по прежнему видимой.

// // 🪛 Задача:
// // Необходимо сделать так, чтобы модалка пряталась сразу после добавления элемента
// // В качестве ответа укажите строку коду, которую необходимо добавить для реализации данной задачи

// // 🖥 Пример ответа: closeModal(true)




// import ReactDOM from "react-dom/client";
// import { ThunkAction, ThunkDispatch } from "redux-thunk";
// import { Provider, TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
// import React, { useEffect } from "react";
// import axios from "axios";
// import { configureStore, combineReducers } from "@reduxjs/toolkit";

// // Styles
// const table: React.CSSProperties = {
//     borderCollapse: "collapse",
//     width: "100%",
//     tableLayout: "fixed",
// };

// const th: React.CSSProperties = {
//     padding: "10px",
//     border: "1px solid black",
//     background: "lightgray",
//     cursor: "pointer",
// };

// const td: React.CSSProperties = {
//     padding: "10px",
//     border: "1px solid black",
// };

// // Types
// type UserType = {
//     id: string;
//     name: string;
//     age: number;
// };

// type UsersResponseType = {
//     items: UserType[];
//     totalCount: number;
// };

// type ParamsType = {
//     sortBy: string | null;
//     sortDirection: "asc" | "desc" | null;
// };

// // API
// const instance = axios.create({ baseURL: "https://exams-frontend.kimitsu.it-incubator.io/api/" });

// const api = {
//     getUsers(params?: ParamsType) {
//         return instance.get<UsersResponseType>("users", { params });
//     },
// };

// // Reducer
// const initState = {
//     users: [] as UserType[],
//     params: {
//         sortBy: null,
//         sortDirection: "asc",
//     } as ParamsType,
// };
// type InitStateType = typeof initState;

// const appReducer = (state: InitStateType = initState, action: ActionsType): InitStateType => {
//     switch (action.type) {
//         case "SET_USERS":
//             return { ...state, users: action.users };
//         case "SET_PARAMS":
//             return { ...state, params: { ...state.params, ...action.payload } };
//         default:
//             return state;
//     }
// };

// // Store
// const rootReducer = combineReducers({ app: appReducer });

// const store = configureStore({ reducer: rootReducer });
// type RootState = ReturnType<typeof store.getState>;
// type AppDispatch = ThunkDispatch<RootState, unknown, ActionsType>;
// type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, ActionsType>;
// const useAppDispatch = () => useDispatch<AppDispatch>();
// const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

// const setUsersAC = (users: UserType[]) => ({ type: "SET_USERS", users }) as const;
// const setParamsAC = (payload: ParamsType) => ({ type: "SET_PARAMS", payload }) as const;
// type ActionsType = ReturnType<typeof setUsersAC> | ReturnType<typeof setParamsAC>;

// // Thunk
// const getUsersTC = (): AppThunk => (dispatch, getState) => {
//     const params = getState().app.params;
//     console.log(params, 'params')
//     api
//         .getUsers(params.sortBy ? params : undefined)
//         .then((res) => dispatch(setUsersAC(res.data.items)));
// };

// export const Users = () => {
//     const users = useAppSelector((state) => state.app.users);
//     const sortBy = useAppSelector((state) => state.app.params.sortBy);
//     const sortDirection = useAppSelector((state) => state.app.params.sortDirection);
//     console.log(users, sortBy, sortDirection);

//     const dispatch = useAppDispatch();



//     // ❗❗❗ XXX ❗❗❗
//     useEffect(() => {
//         dispatch(getUsersTC())
//     }, [dispatch, sortBy, sortDirection])

//     const sortHandler = (name: string) => {
//         const direction = sortDirection === "asc" ? "desc" : "asc";
//         dispatch(setParamsAC({ sortBy: name, sortDirection: direction }));
//     };

//     return (
//         <div>
//             <h1>👪 Список пользователей</h1>
//             <table style={table}>
//                 <thead>
//                     <tr>
//                         <th style={th} onClick={() => sortHandler("name")}>
//                             Name
//                         </th>
//                         <th style={th} onClick={() => sortHandler("age")}>
//                             Age
//                         </th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {users.map((u) => {
//                         return (
//                             <tr key={u.id}>
//                                 <td style={td}>{u.name}</td>
//                                 <td style={td}>{u.age}</td>
//                             </tr>
//                         );
//                     })}
//                 </tbody>
//             </table>
//         </div>
//     );
// };

// const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
// root.render(
//     <Provider store={store}>
//         <Users />
//     </Provider>,
// );

// // 📜 Описание:
// // Перед вами таблица с пользователями. Но данные не подгружаются
// // Что нужно написать вместо XXX, чтобы:
// // 1) Пользователи подгрузились
// // 2) Чтобы работала сортировка по имени и возрасту
// // 3) Направление сортировки тоже должно работать (проверить можно нажав на одно и тоже поле 2 раза)

// // 🖥 Пример ответа: console.log(users, sortBy, sortDirection)







// import React, { useState } from "react";
// import ReactDOM from "react-dom/client";
// import { ThunkAction, ThunkDispatch } from "redux-thunk";
// import { Provider, TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
// import { configureStore, combineReducers } from "@reduxjs/toolkit";

// // Styles
// const modal: React.CSSProperties = {
//     position: "fixed",
//     zIndex: 1,
//     left: 0,
//     top: 0,
//     width: "100%",
//     height: "100%",
//     overflow: "auto",
//     backgroundColor: "rgba(23,26,38,0.26)",
// };

// const modalContent: React.CSSProperties = {
//     backgroundColor: "#fefefe",
//     margin: "15% auto",
//     padding: "20px",
//     border: "1px solid #888",
//     width: "80%",
// };

// // Reducer
// const initState = { tasks: [] as any[] };
// type InitStateType = typeof initState;

// const appReducer = (state: InitStateType = initState, action: ActionsType): InitStateType => {
//     switch (action.type) {
//         case "ADD_TASK":
//             return {
//                 ...state,
//                 tasks: [action.task, ...state.tasks],
//             };
//         case "CHANGE_TASK":
//             return {
//                 ...state,
//                 tasks: [action.task, ...state.tasks.filter((t: any) => t.id !== action.task.id)],
//             };
//         default:
//             return state;
//     }
// };

// // Store
// const rootReducer = combineReducers({ app: appReducer });

// const store = configureStore({ reducer: rootReducer });
// type RootState = ReturnType<typeof store.getState>;
// type AppDispatch = ThunkDispatch<RootState, unknown, ActionsType>;
// type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, ActionsType>;
// const useAppDispatch = () => useDispatch<AppDispatch>();
// const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

// const addTask = (task: any) => ({ type: "ADD_TASK", task }) as const;
// const changeTask = (task: any) => ({ type: "CHANGE_TASK", task }) as const;
// type ActionsType = ReturnType<typeof addTask> | ReturnType<typeof changeTask>;

// // Components
// const Modal = (props: any) => {
//     const [value, setValue] = useState(props.task?.name || "");

//     return (
//         <div style={modalContent}>
//             modal:
//             <input value={value} onChange={(e) => setValue(e.target.value)} />
//             <button onClick={() => props.callback(value)}>{props.title}</button>
//         </div>
//     );
// };

// const Task = (props: any) => {
//     const [show, setShow] = useState(false);
//     console.log(props)
//     return (
//         <div>
//             {props.task.name}
//             <button onClick={() => setShow(true)}>change</button>
//             {show && (
//                 <Modal
//                     callback={(value: string) => {
//                         props.change(value);
//                         setShow(false);

//                     }}
//                     task={props.task}/////////////////////////////////////////
//                     title={"change"}
//                 />
//             )}
//         </div>
//     );
// };

// export const Todolist = () => {
//     const tasks = useAppSelector((state) => state.app.tasks);
//     const dispatch = useAppDispatch();
//     const [show, setShow] = useState(false);

//     const getId = () => tasks.reduce((acc: number, t: any) => (acc > t.id ? acc : t.id), 0) + 1;

//     const mapped = tasks.map((t: any) => (
//         <Task
//             key={t.id}
//             task={t}
//             change={(value: string) => dispatch(changeTask({ id: t.id, name: value }))}
//         />
//     ));

//     return (
//         <div style={modal}>
//             <button onClick={() => setShow(true)}>open modal</button>
//             {show && (
//                 <Modal
//                     callback={(value: string) => {
//                         dispatch(addTask({ id: getId(), name: value }));
//                         setShow(false);
//                     }}
//                     title={"add"}
//                 />
//             )}
//             {mapped}
//         </div>
//     );
// };

// const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
// root.render(
//     <Provider store={store}>
//         <Todolist />
//     </Provider>,
// );

// // 📜Описание:
// // Откройте модалку и добавьте какой-нибудь текст.
// // Теперь попробуйте изменить этот текст.
// // При изменении существующей таски в инпуте не отображается старые данные.
// // Ваша задача починить это поведение.
// //
// // В качестве ответа укажите строку кода, которую нужно изменить или добавить,
// // чтобы реализовать данную задачу
// //
// // 🖥 Пример ответа: defaultValue={value}





// import React from "react";
// import ReactDOM from "react-dom/client";
// import { ThunkAction, ThunkDispatch } from "redux-thunk";
// import { Provider, TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
// import { configureStore, combineReducers } from "@reduxjs/toolkit";

// // Reducer
// const initState = {
//     work: 0,
//     donate: 0,
//     balance: 0,
// };
// type InitStateType = typeof initState;

// const appReducer = (state: InitStateType = initState, action: ActionsType): InitStateType => {
//     switch (action.type) {
//         case "CHANGE_VALUE":
//             console.log('dwwd')
//             return {
//                 ...state,
//                 ...action.payload,
//             };
//         default:
//             return state;
//     }
// };

// // Store
// const rootReducer = combineReducers({ app: appReducer });

// const store = configureStore({ reducer: rootReducer });
// type RootState = ReturnType<typeof store.getState>;
// type AppDispatch = ThunkDispatch<RootState, unknown, ActionsType>;
// type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, ActionsType>;
// const useAppDispatch = () => useDispatch<AppDispatch>();
// const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

// const changeValue = (payload: any) => ({ type: "CHANGE_VALUE", payload }) as const;
// type ActionsType = ReturnType<typeof changeValue>;

// // Components
// export const Income = () => {
//     const work = useAppSelector((state) => state.app.work);
//     const donate = useAppSelector((state) => state.app.donate);
//     const balance = useAppSelector((state) => state.app.balance);

//     const dispatch = useAppDispatch();

//     return (
//         <div>
//             <div>
//                 work:{" "}
//                 <input
//                     value={work}
//                     type={"number"}
//                     onChange={(e) => dispatch(changeValue({ work: +e.target.value }))}
//                 />
//             </div>
//             <div>
//                 donate:{" "}
//                 <input
//                     value={donate}
//                     type={"number"}
//                     onChange={(e) => dispatch(changeValue({ donate: +e.target.value }))}
//                 />
//             </div>

//             <h1>💵 balance: {balance}</h1>
//             <button
//                 onClick={() => {
//                     dispatch(changeValue({ balance: work + donate }))
//                 }}
//             >
//                 calculate balance
//             </button>
//         </div>
//     );
// };

// const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
// root.render(
//     <Provider store={store}>
//         <Income />
//     </Provider>,
// );

// // 📜 Описание:
// // Что нужно написать вместо XXX, чтобы вывелась сумма дохода в строке баланса
// //
// // 🖥 Пример ответа: console.log(work + donate)




// import ReactDOM from "react-dom/client";
// import { ThunkAction, ThunkDispatch } from "redux-thunk";
// import { Provider, TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
// import React, { useEffect } from "react";
// import axios from "axios";
// import { configureStore, combineReducers } from "@reduxjs/toolkit";

// // Styles
// const table: React.CSSProperties = {
//     borderCollapse: "collapse",
//     width: "100%",
//     tableLayout: "fixed",
// };

// const th: React.CSSProperties = {
//     padding: "10px",
//     border: "1px solid black",
//     background: "lightgray",
//     cursor: "pointer",
// };

// const td: React.CSSProperties = {
//     padding: "10px",
//     border: "1px solid black",
// };

// // Types
// type UserType = {
//     id: string;
//     name: string;
//     age: number;
// };

// type UsersResponseType = {
//     items: UserType[];
//     totalCount: number;
// };

// // API
// const instance = axios.create({ baseURL: "https://exams-frontend.kimitsu.it-incubator.io/api/" });

// const api = {
//     getUsers() {
//         return instance.get<UsersResponseType>("users");
//     },
// };

// // Reducer
// const initState = {
//     users: [] as UserType[],
// };
// type InitStateType = typeof initState;

// const appReducer = (state: InitStateType = initState, action: ActionsType): InitStateType => {
//     switch (action.type) {
//         case "SET_USERS":
//             console.log('dwdw')
//             return { ...state, users: action.users };
//         default:
//             return state;
//     }
// };

// // Store
// const rootReducer = combineReducers({ app: appReducer });

// const store = configureStore({ reducer: rootReducer });
// type RootState = ReturnType<typeof store.getState>;
// type AppDispatch = ThunkDispatch<RootState, unknown, ActionsType>;
// type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, ActionsType>;
// const useAppDispatch = () => useDispatch<AppDispatch>();
// const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

// const setUsersAC = (users: UserType[]) => ({ type: "SET_USERS", users });/////////////////////////
// type ActionsType = ReturnType<typeof setUsersAC>;

// // Thunk
// const getUsersTC = (): AppThunk => (dispatch, getState) => {
//     api.getUsers().then((res) => dispatch(setUsersAC(res.data.items)));
// };

// // Components
// export const Users = () => {
//     const users = useAppSelector((state) => state.app.users);

//     const dispatch = useAppDispatch();

//     useEffect(() => {
//         dispatch(getUsersTC());
//     }, []);

//     return (
//         <div>
//             <h1>👪 Список пользователей</h1>
//             <table style={table}>
//                 <thead>
//                     <tr>
//                         <th style={th}> Name</th>
//                         <th style={th}> Age</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {users.map((u) => (
//                         <tr key={u.id}>
//                             <td style={td}>{u.name}</td>
//                             <td style={td}>{u.age}</td>
//                         </tr>
//                     ))}
//                 </tbody>
//             </table>
//         </div>
//     );
// };

// const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
// root.render(
//     <Provider store={store}>
//         <Users />
//     </Provider>,
// );

// // 📜 Описание:
// // Перед вами пустая таблица. Пользователи не подгрузились, т.к. в коде допущена ошибка
// // Ваша задача найти багу, чтобы таблица с пользователями подгрузилась.
// // В качестве укажите исправленную строку кода
// // ❗ Есть несколько вариантов решения данной задачи, в ответах учтены различные варианты

// // 🖥 Пример ответа: {users.map(u)=> таблица отрисуйся ВЖУХ ВЖУХ}




// import React from 'react'
// import ReactDOM from 'react-dom/client';

// export const App = () => {
//     return (
//         <div>
//             <h2>Чем отличается master от origin master ?</h2>
//             <ul>
//                 <li>1 - Это просто 2 ветки с разными названиями. Их ничего не связывает</li>
//                 <li>2 - master принадлежит локальному репозиторию, origin master - удаленному</li>
//                 <li>3 - Это 2 названия одной и той же ветки. Приставка origin не несет никакого смысла.</li>
//                 <li>4 - Ветки origin master не существует</li>
//                 <li>5 - Нет правильного ответа</li>
//             </ul>
//         </div>
//     )
// }

// const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
// root.render(<App />);

// // 📜 Описание:
// // Чем отличается master от origin master ?
// // Может быть несколько вариантов ответа (ответ дайте через пробел).
// // ❗ Ответ будет засчитан как верный, только при полном правильном совпадении.
// // Если указали правильно один вариант (1),
// // а нужно было указать два варианта (1 и 2), то ответ в данном случае будет засчитан как неправильный

// // 🖥 Пример ответа: 1
// //2



// import React from 'react'
// import ReactDOM from 'react-dom/client';

// export const App = () => {
//     return (
//         <div>
//             <h2>Какая команда позволяет на время «сдать в архив» (или отложить) изменения, сделанные в рабочей
//                 копии, чтобы вы могли применить их позже? Откладывание изменений полезно, если вам необходимо переключить
//                 контекст и вы пока не готовы к созданию коммита.</h2>
//         </div>
//     )
// }


// const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
// root.render(<App />);

// // 📜 Описание:
// // Какая команда позволяет на время «сдать в архив» (или отложить) изменения, сделанные в рабочей
// // копии, чтобы вы могли применить их позже? Откладывание изменений полезно, если вам необходимо переключить
// // контекст и вы пока не готовы к созданию коммита.

// // 🖥 Пример ответа: git init






//20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20
//20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20
//20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20
//20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20
//20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20


// import ReactDOM from "react-dom/client";
// import React, { FC, ReactNode } from "react";

// const quizStyle: React.CSSProperties = {
//     background: "lightgreen",
//     padding: "10px",
//     margin: "10px",
// };

// type BtnPropsType = {
//     question: ReactNode;
//     children: ReactNode;
// };

// const Block: FC<BtnPropsType> = ({ question, children }) => {
//     return (
//         <div style={{ display: "flex", alignItems: "center" }}>
//             {question} = {children}
//         </div>
//     );
// };

// const quiz = [
//     { id: 1, question: "1 + 1", answer: "2" },
//     { id: 2, question: "2 + 2", answer: "4" },
//     { id: 3, question: "3 + 3", answer: "6" },
// ];

// const App = () => {
//     return (
//         <div>
//             {quiz.map((q) => {
//                 return (
//                     <Block key={q.id} question={<h2 style={quizStyle}>{q.question}</h2>}>
//                         <h2 style={quizStyle}>{q.answer}</h2>
//                     </Block>
//                 )
//             })}
//         </div>
//     );
// };

// const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
// root.render(<App />);

// // 📜 Описание:
// // Что необходимо написать вместо XXX и YYY, чтобы на экране отобразились вопросы и ответы из массива quiz.
// // 1 + 1 = 2
// // 2 + 2 = 4
// // 3 + 3 = 6
// // ❗ Ответ дайте через пробел

// // 🖥 Пример ответа: quiz[0]=yes redux=h2





// import ReactDOM from 'react-dom/client';
// import React, { useState } from 'react'

// export const Jpegs = () => {
//     const [fileURL, setFileURL] = useState<any>('dd')
//     console.log(fileURL)

//     const onChange = (e: any) => {
//         const maybeFile = e.target.files?.[0]
//         if (maybeFile) {
//             if (maybeFile.type === 'image/jpeg') {
//                 console.log(maybeFile)
//                 setFileURL(window.URL.createObjectURL(maybeFile)) ////найти видос
//                 return
//             } else alert('not .jpg!')
//         }
//         setFileURL('')
//     }

//     return (
//         <div>
//             <input
//                 type={'file'}
//                 onChange={onChange}

//             />
//             {fileURL && (
//                 <img
//                     src={fileURL}
//                     alt={'avatar'}

//                 />
//             )}
//         </div>
//     )
// }

// const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
// root.render(<Jpegs />);

// // 📜 Описание:
// // Не отображается картинка при выборе.
// // В качестве ответа укажите исправленную версию строки кода
// //
// // 🖥 Пример ответа: value={fileURL}




// export const App = () => {
//     return (
//       <div>
//         <h2>В каком случае возникают конфликты при слиянии веток ?</h2>
//         <ul>
//           <li>1 - В случае, когда в обеих ветках есть изменения одних и тех же строк</li>
//           <li>2 - В случае когда ветки были созданы от разных коммитов</li>
//           <li>3 - В случае когда ветки были созданы в разное время</li>
//           <li>4 - Конфликты не возникают, это устаревшая проблема. Сегодня git под капотом все сам может разрулить</li>
//           <li>5 - Нет правильного ответа</li>
//         </ul>
//       </div>
//     )
//   }

//   const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
//   root.render(<App/>);
//   // 📜 Описание:
//   // В каком случае возникают конфликты при слиянии веток ?
//   // Может быть несколько вариантов ответа (ответ дайте через пробел).
//   // ❗ Ответ будет засчитан как верный, только при полном правильном совпадении.
//   // Если указали правильно один вариант (1),
//   // а нужно было указать два варианта (1 и 2), то ответ в данном случае будет засчитан как неправильный

//   // 🖥 Пример ответа: 1
// я думал 1
//   // 1 2 - сказал бот не верно



// import React from 'react'
// import ReactDOM from 'react-dom/client';

// export const App = () => {
//     return (
//         <div>
//             <h2>Какое из приведенных ниже определений верно ?</h2>
//             <ul>
//                 <li>1 - После того как файл был проиндексирован с помощью git init и закоммичен, git будет отслеживать все
//                     следующие изменения в нём.
//                 </li>
//                 <li>2 - Ветки в Git представляют собой указатель на коммит. Если нужно добавить какую-то фичу или исправить баг
//                     (незначительный или серьезный), мы создаём новую ветку. Она будет содержать все изменения, которые мы хотим
//                     добавить в репозиторий.
//                 </li>
//                 <li>3 - Команда git add создает новый репозиторий Git. С ее помощью можно преобразовать существующий проект без
//                     управления версиями в репозиторий Git или инициализировать новый пустой репозиторий
//                 </li>
//                 <li>4 - Ни одно из вышеперечисленных определений не верно</li>
//             </ul>
//         </div>
//     )
// }


// const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
// root.render(<App />);

// // 📜 Описание:
// // Какое из приведенных ниже определений верно ?
// // Может быть несколько вариантов ответа (ответ дайте через пробел).
// // ❗ Ответ будет засчитан как верный, только при полном правильном совпадении.
// // Если указали правильно один вариант (1),
// // а нужно было указать два варианта (1 и 2), то ответ в данном случае будет засчитан как неправильный

// // 🖥 Пример ответа: 1
// // 1 2 не верно, бот говно, думаю что 1, а верно скорее всего 2





// import ReactDOM from "react-dom/client";
// import { ThunkAction, ThunkDispatch } from "redux-thunk";
// import { Provider, TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
// import React, { FC, useEffect } from "react";
// import axios from "axios";
// import { configureStore, combineReducers } from "@reduxjs/toolkit";

// // Styles
// const table: React.CSSProperties = {
//     borderCollapse: "collapse",
//     width: "100%",
//     tableLayout: "fixed",
// };

// const th: React.CSSProperties = {
//     padding: "10px",
//     border: "1px solid black",
//     background: "lightgray",
//     cursor: "pointer",
// };

// const td: React.CSSProperties = {
//     padding: "10px",
//     border: "1px solid black",
// };

// const thActive: React.CSSProperties = {
//     padding: "10px",
//     border: "1px solid black",
//     background: "lightblue",
//     cursor: "pointer",
// };

// // Types
// type UserType = {
//     id: string;
//     name: string;
//     age: number;
// };

// type UsersResponseType = {
//     items: UserType[];
//     totalCount: number;
// };

// type ParamsType = {
//     sortBy: string | null;
//     sortDirection: "asc" | "desc" | null;
// };

// // API
// const instance = axios.create({ baseURL: "https://exams-frontend.kimitsu.it-incubator.io/api/" });

// const api = {
//     getUsers(params?: ParamsType) {
//         return instance.get<UsersResponseType>("users", { params });
//     },
// };

// // Reducer
// const initState = {
//     users: [] as UserType[],
//     params: {
//         sortBy: "name",
//         sortDirection: "asc",
//     } as ParamsType,
// };
// type InitStateType = typeof initState;

// const appReducer = (state: InitStateType = initState, action: ActionsType): InitStateType => {
//     switch (action.type) {
//         case "SET_USERS":
//             return { ...state, users: action.users };
//         case "SET_PARAMS":
//             return { ...state, params: { ...state.params, ...action.payload } };
//         default:
//             return state;
//     }
// };

// // Store
// const rootReducer = combineReducers({ app: appReducer });

// const store = configureStore({ reducer: rootReducer });
// type RootState = ReturnType<typeof store.getState>;
// type AppDispatch = ThunkDispatch<RootState, unknown, ActionsType>;
// type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, ActionsType>;
// const useAppDispatch = () => useDispatch<AppDispatch>();
// const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

// const setUsersAC = (users: UserType[]) => ({ type: "SET_USERS", users }) as const;
// const setParamsAC = (payload: ParamsType) => ({ type: "SET_PARAMS", payload }) as const;
// type ActionsType =
//     | ReturnType<typeof setUsersAC>
//     | ReturnType<typeof setParamsAC>

// // Thunk
// const getUsersTC = (): AppThunk => (dispatch, getState) => {
//     const params = getState().app.params;
//     api.getUsers(params).then((res) => dispatch(setUsersAC(res.data.items)));
// };

// export const Users = () => {
//     const users = useAppSelector((state) => state.app.users);
//     const sortBy = useAppSelector((state) => state.app.params.sortBy);
//     const sortDirection = useAppSelector((state) => state.app.params.sortDirection);

//     const dispatch = useAppDispatch();

//     useEffect(() => {
//         dispatch(getUsersTC());
//     }, [sortBy, sortDirection]);

//     const sortHandler = (sortBy: string) => {
//         const direction = sortDirection === "asc" ? "desc" : "asc";
//         dispatch(setParamsAC({ sortBy, sortDirection: direction }));
//     };

//     return (
//         <div>
//             <h1>👪 Список пользователей</h1>
//             <table style={table}>
//                 <thead>
//                     <tr>
//                         <Th name={"name"} sortHandler={sortHandler} />
//                         <Th name={"age"} sortHandler={sortHandler} />
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {users.map((u) => {
//                         return (
//                             <tr key={u.id}>
//                                 <td style={td}>{u.name}</td>
//                                 <td style={td}>{u.age}</td>
//                             </tr>
//                         );
//                     })}
//                 </tbody>
//             </table>
//         </div>
//     );
// };

// type ThPropsType = {
//     name: string;
//     sortHandler: (name: string) => void;
// };

// const Th: FC<ThPropsType> = ({ name, sortHandler }) => {
//     const sortBy = useAppSelector((state) => state.app.params.sortBy);
//     const sortDirection = useAppSelector((state) => state.app.params.sortDirection);

//     const condition1 = sortBy === name;
//     const condition2 = sortDirection === 'asc';
//     console.log(sortBy, sortDirection)
//     return (
//         <th style={condition1 ? thActive : th} onClick={() => sortHandler(name)}>
//             {name}
//             {condition1 && (condition2 ? <span> ⬆</span> : <span> ⬇</span>)}
//         </th>
//     );
// };

// const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
// root.render(
//     <Provider store={store}>
//         <Users />
//     </Provider>,
// );

// // 📜 Описание:
// // Перед вами таблица с пользователями.
// // Покликайте по вкладкам age и name и убедитесь, что сортировка работает верно,
// // но в шапке некорректно отображаются стрелки и не видно активной колонки
// // Ваша задача написать правильные условия вместо XXX и YYY, чтобы:
// // 1) Стрелки соответствовали сортировке (если сортировка от меньшего к большему, то стрелка вверх)
// // 2) Шапка активной колонки была голубая, а неактивной серая
// // ❗ Ответ дайте через пробел

// // 🖥 Пример ответа: a === '1' b !== a




// import ReactDOM from 'react-dom/client';
// import React from 'react';

// export const Jpegs = () => {

//     return (
//         <div>
//             <iframe
//                 src="//coub.com/embed/2wp0wa?muted=false&autostart=false&originalSize=false&startWithHD=true"
//                 frameBorder="0"
//                 width="640"
//                 height="360"
//                 allow="autoplay"
//                 allowFullScreen
//             />
//         </div>
//     )
// }

// const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
// root.render(<Jpegs />);

// // 📜 Описание:
// // Пользователи жалуются, что нельзя развернуть видео на весь экран
// // В качестве ответа укажите исправленную или добавленную строку кода
// //
// // 🖥 Пример ответа: iframe.станьНаВесьЭкранПожалуйста()
